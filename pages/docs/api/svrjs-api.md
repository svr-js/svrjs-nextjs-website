---
title: SVR.JS API (.js mods)
---

## SVR.JS API (_.js_ mods)

SVR.JS has its API for _.js_ mods that expands its functionality. SVR.JS API extends vanilla Node.JS HTTP API.

### Error handling

When a JavaScript error is thrown outside of event callbacks, SVR.JS will return a 500 error to the client. Inside event callbacks, SVR.JS will simply crash.

#### Incorrect Error Handling:

```js
//XXX WARNING!!! IT WILL CRASH THE SVR.JS!!!
//It also contains path traversal vulnerability!

module.exports = (req, res, logFacilities, config, next) => {
	let headers = config.getCustomHeaders();
	headers["Content-Type"] = "text/html; charset=utf8";

	if (req.parsedURL.pathname == "/page.svr") {
		fs.readFile(".template", (err, data) => {
			if (err) throw err; //EVIL!!!
			let id = req.parsedURL.query.id;
			if (!id) id = "index";
			if (fs.existsSync("pages/" + id + ".html")) {
				fs.readFile("pages/" + id + ".html", (err2, data2) => {
					if (err2) throw err2; //EVIL TWO!!!
					res.writeHead(200, "OK", headers);
					res.end(
						data.toString().replace("{websiteContents}", data2.toString())
					);
				});
			} else {
				res.error(404);
			}
		});
	} else if (href == "/") {
		res.redirect("/page.svr");
	} else {
		next();
	}
};

module.exports.modInfo = {
	name: "Custom server-side JavaScript",
	version: "0.0.0",
};
```

Instead, you should handle errors gracefully using `res.error` function:

#### Correct Error Handling:

```js
//Much better!

module.exports = (req, res, logFacilities, config, next) => {
	let headers = config.getCustomHeaders();
	headers["Content-Type"] = "text/html; charset=utf8";

	if (req.parsedURL.pathname == "/page.svr") {
		fs.readFile(".template", (err, data) => {
			if (err) {
				res.error(500, err);
				return;
			}
			let id = req.parsedURL.query.id;
			if (!id) id = "index";
			id = id
				.replace(/\\/g, "/")
				.replace(/(?:\/|^)\.\.(?=(\/|$))/g, "$1")
				.replace(/\/+/g, "/"); //Poor mans path sanitiation
			if (fs.existsSync("pages/" + id + ".html")) {
				fs.readFile("pages/" + id + ".html", (err2, data2) => {
					if (err2) {
						res.error(500, err2);
						return;
					}
					res.writeHead(200, "OK", headers);
					res.end(
						data.toString().replace("{websiteContents}", data2.toString())
					);
				});
			} else {
				res.error(404);
			}
		});
	} else if (href == "/") {
		res.redirect("/page.svr");
	} else {
		next();
	}
};

module.exports.modInfo = {
	name: "Custom server-side JavaScript",
	version: "0.0.0",
};
```

By using `res.error`, you can handle errors effectively and provide appropriate error responses to the client, preventing SVR.JS from crashing due to unhandled exceptions.

### Main callback API (`module.exports`)

<small>_Added in SVR.JS 4.0.0_</small>

This API includes proxy requests, which don't use CONNECT method. It's possible to determine, if the request comes from the proxy with `req.isProxy` property.

SVR.JS applies mods for request URLs beginning with "_http://_" or with "_https://_" (proxy through GET or POST method, non-proxy requests have request URLs beginning with "_/_") only if _module.exports.proxy_ method is present or if _module.exports.proxySafe_ property is set to `true`.

#### _req_

<small>_Added in SVR.JS 4.0.0_</small>

_req_ object is almost same, as _req_ object in Node.JS

#### _req.socket.realRemoteAddress_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing IP address, from which request originally went from, if request is sent through reverse proxy.

You can specify generic request IP variable using `const reqip = req.socket.realRemoteAddress ? req.socket.realRemoteAddress : req.socket.remoteAddress`

#### _req.socket.realRemotePort_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing port number, from which request originally went from, if request is sent through reverse proxy. (for _X-Forwarded-For_ header, it will be _null_)

You can specify generic request IP variable using `const reqip = req.socket.realRemotePort ? req.socket.realRemotePort : req.socket.remotePort`

#### _req.socket.originalRemoteAddress_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing IP address, from which proxy request came from. If the request isn't a proxy request, it will be `undefined`.

#### _req.socket.originalRemotePort_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing port number, from which proxy request came from. If the request isn't a proxy request, it will be `undefined`.

#### _req.url_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing request URL after all processing (URL rewriting too).

#### _req.parsedURL_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing parsed request URL created by a custom URL parser (compatible with legacy URL parser: `url.parse()`)

#### _req.originalParsedURL_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing parsed request URL (before URL rewriting) created by a custom URL parser (compatible with legacy URL parser: `url.parse()`)

#### _req.isProxy_

<small>_Added in SVR.JS 4.0.0_</small>

A property that determines if request is a proxy request or not.

#### _req.authUser_

<small>_Added in SVR.JS 4.0.0_</small>

The name of authenticated HTTP user. If the user wasn't authenticated, the property would be _null_.

#### _res_

<small>_Added in SVR.JS 4.0.0_</small>

_res_ object is almost same, as _res_ object in Node.JS

#### _res.socket.realRemoteAddress_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing IP address, from which request originally went from, if request is sent through reverse proxy.

You can specify generic request IP variable using `const reqip = req.socket.realRemoteAddress ? req.socket.realRemoteAddress : req.socket.remoteAddress`

#### _res.socket.realRemotePort_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing port number, from which request originally went from, if request is sent through reverse proxy. (for _X-Forwarded-For_ header, it will be _null_)

You can specify generic request IP variable using `const reqip = req.socket.realRemotePort ? req.socket.realRemotePort : req.socket.remotePort`

#### _res.socket.originalRemoteAddress_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing IP address, from which proxy request came from. If the request isn't a proxy request, it will be `undefined`.

#### _res.socket.originalRemotePort_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing port number, from which proxy request came from. If the request isn't a proxy request, it will be `undefined`.

#### _res.writeHead(statusCode[, statusMessage][, headers])_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _statusCode_ - the response status code (_String_)
- _statusMessage_ - the response status message (optional; _String_)
- _headers_ - the response headers (optional; _Object_)

Returns: _res_ property.

The difference between _res.writeHead_ in Node.JS, and in SVR.JS is that in SVR.JS it writes into server log, doesn't invoke a warning about unused status code string, and if called multiple times will emit a warning, instead of throwing an error, which could crash SVR.JS.

#### _res.setHeader(name, value)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _name_ - the response header name (_String_)
- _value_ - the response header value (optional; _String_ or _Array_)

The difference between _res.setHeader_ in Node.JS, and in SVR.JS is that in SVR.JS it doesn't invoke a warning about HTTP/1.x headers being not allowed in HTTP/2.

Custom headers defined in _config.json_ are set by default.

#### _res.head_

<small>_Added in SVR.JS 4.0.0_</small>

HTML head read from either _.head_ or _head.html_ file.

#### _res.foot_

<small>_Added in SVR.JS 4.0.0_</small>

HTML foot read from either _.foot_ or _foot.html_ file.

#### _res.responseEnd(body)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _body_ - message you want to send before ending response (_String_ or _Buffer_)

Sends response message (along with custom head and foot) specified by _body_ parameter.

#### _res.error(errorCode[, extName][, stack][, ch])_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _errorCode_ - HTTP error code (_Number_)
- _extName_ - extension name, which caused an error (optional; _String_)
- _stack_ - error stack (optional; _String_ or _Error_)
- _ch_ - custom HTTP headers for error (optional; _Object_)

Invokes HTTP error code. If it's unavailable, invokes 501 error code.

#### _res.redirect(dest[, isTemporary][, keepMethod][, headers])_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _dest_ - destination of redirect (_String_)
- _isTemporary_ - if _true_, then redirect with 302 code. Else redirect with 301 code. When _keepMethod_ parameter is set to _true_, then redirect with 307 code, when _isTemporary_ is true or with 308 code otherwise. (optional; _Boolean_)
- _keepMethod_ - if _true_, then redirect with either 307 or 308 code. Else redirect with etiher 301 or 302 code. (optional; _Boolean_; SVR.JS 3.13.0 or later)
- _headers_ - custom HTTP headers for redirect (optional; _Object_)

Redirects HTTP client to specific destination.

#### _logFacilities_

<small>_Added in SVR.JS 4.0.0_</small>

The log facilities for SVR.JS.

#### _logFacilities.climessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends CLI message to server console.

#### _logFacilities.reqmessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends request message to server console.

#### _logFacilities.resmessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends response message to server console.

#### _logFacilities.errmessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends response error message to server console.

#### _logFacilities.locerrmessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends local error message to server console.

#### _logFacilities.locwarnmessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends local warning message to server console.

#### _logFacilities.locmessage(message)_

<small>_Added in SVR.JS 4.0.0_</small>

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends local message to server console.

#### _config_

<small>_Added in SVR.JS 4.0.0_</small>

This object contains properties from _config.json_ file.

#### _config.getCustomHeaders()_

<small>_Added in SVR.JS 4.0.0_</small>

Returns: _Object_ property contains custom headers.

This methods retrieves custom headers from _config.json_ file. Returned object additionally includes _Server_ header.

#### _config.generateServerString()_

<small>_Added in SVR.JS 4.0.0_</small>

Returns: The generated server string.

This methods generated the string which is used to identify a web server (the same string as in the "Server" header).

#### _next()_

<small>_Added in SVR.JS 4.0.0_</small>

Invokes next SVR.JS mod callback, SVR.JS server-side JavaScript callback or main SVR.JS callback.
