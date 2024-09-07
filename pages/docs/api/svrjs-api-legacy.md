---
title: SVR.JS API (.tar.gz mods and server-side JavaScript)
---

## SVR.JS API (_.tar.gz_ mods and server-side JavaScript)

SVR.JS has its API for both _.tar.gz_ mods and server-side JavaScript that expands its functionality. SVR.JS API extends vanilla Node.JS HTTP API.

### Error handling

When a JavaScript error is thrown outside of event callbacks, SVR.JS will return a 500 error to the client. Inside event callbacks, SVR.JS will simply crash.

#### Incorrect Error Handling:

```js
//XXX WARNING!!! IT WILL CRASH THE SVR.JS!!!
//It also contains path traversal vulnerability!

disableEndElseCallbackExecute = true; //Without "var", else it will not work!!!

var headers = getCustomHeaders();
headers["Content-Type"] = "text/html; charset=utf8";

if (href == "/page.svr") {
	fs.readFile(".template", function (err, data) {
		if (err) throw err; //EVIL!!!
		var id = uobject.query.id;
		if (!id) id = "index";
		if (fs.existsSync("pages/" + id + ".html")) {
			fs.readFile("pages/" + id + ".html", function (err2, data2) {
				if (err2) throw err2; //EVIL TWO!!!
				res.writeHead(200, "OK", headers);
				res.end(data.toString().replace("{websiteContents}", data2.toString()));
			});
		} else {
			callServerError(404);
		}
	});
} else if (href == "/") {
	redirect("/page.svr");
} else {
	elseCallback();
}
```

Instead, you should handle errors gracefully using _callServerError_ function:

#### Correct Error Handling:

```js
//Much better!

disableEndElseCallbackExecute = true; //Without "var", else it will not work!!!

var headers = getCustomHeaders();
headers["Content-Type"] = "text/html; charset=utf8";

if (href == "/page.svr") {
	if (fs.existsSync(".template")) {
		fs.readFile(".template", function (err, data) {
			if (err) {
				callServerError(500, err);
				return;
			}
			var id = uobject.query.id;
			if (!id) id = "index";
			id = id
				.replace(/\\/g, "/")
				.replace(/(?:\/|^)\.\.(?=(\/|$))/g, "$1")
				.replace(/\/+/g, "/"); //Poor mans path sanitiation
			if (fs.existsSync("pages/" + id + ".html")) {
				fs.readFile("pages/" + id + ".html", function (err2, data2) {
					if (err2) {
						callServerError(500, err2);
						return;
					}
					res.writeHead(200, "OK", headers);
					res.end(
						data.toString().replace("{websiteContents}", data2.toString())
					);
				});
			} else {
				callServerError(404);
			}
		});
	} else {
		callServerError(
			500,
			new Error("Server is misconfigured - .template file missing")
		);
	}
} else if (href == "/") {
	redirect("/page.svr");
} else {
	elseCallback();
}
```

By using `callServerError`, you can handle errors effectively and provide appropriate error responses to the client, preventing SVR.JS from crashing due to unhandled exceptions.
