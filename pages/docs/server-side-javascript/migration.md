---
title: Migration to SVR.JS
---

# Migration to SVR.JS

If you have previously built your web application using the Node.JS http library, Express framework, or Koa framework, you can easily migrate that code to SVR.JS server-side JavaScript.

## From Node.JS http library

For applications built with the Node.JS http library, you can simply copy the contents of the request event listener to the SVR.JS server-side JavaScript. However, make sure to consider the _disableEndElseCallbackExecute_ option to ensure proper execution flow.

```js
disableEndElseCallbackExecute = true; //Without "var", else it will not work!!!

// Node.JS http library request event listener code goes here.
if (req.url == "/" && req.method == "GET") {
	res.writeHead(200, "OK", {
		"Content-Type": "text/plain",
	});
	res.end("Hello World!");
	return;
}

elseCallback(); // Optionally, invoke main SVR.JS callback.
```

## From Express Framework

If your application is built using the Express framework, you can easily migrate it to SVR.JS. You can mix Express methods with SVR.JS methods for more flexibility.

```js
disableEndElseCallbackExecute = true; //Without "var", else it will not work!!!

var express = require("express");
// Other requires go here.

var app = express(); // Initialize express app

// Express application code goes here!
app.get("/", function (req, res) {
	res.send("Hello World!");
});

app.use(elseCallback); // Optionally, if you want the main SVR.JS callback.

app(req, res); // Invoke Express handler
```

## From Koa Framework

Migrating from the Koa framework to SVR.JS is also straightforward. Here's an example of how you can do it:

```js
disableEndElseCallbackExecute = true; //Without "var", else it will not work!!!

var koa = require("koa");
// Other requires go here.

var app = new koa(); // Initialize Koa app

// Koa application code goes here!
app.use(function (ctx, next) {
	if (ctx.method != "GET" || ctx.path != "/") {
		next(); // Koa router could be used...
	} else {
		ctx.body = "Hello World!";
	}
});

// Optionally, if you want the main SVR.JS callback (not recommended by Koa, as it passes Node.JS req and res objects).
app.use(function (ctx) {
	ctx.respond = false;
	elseCallback(ctx.req, ctx.res);
});

app.callback()(req, res); // Invoke Koa handler
```

By migrating your web application to SVR.JS, you can take advantage of its features and performance enhancements, while still preserving your existing codebase.
