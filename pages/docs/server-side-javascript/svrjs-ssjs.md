---
title: Server-side JavaScript
---

# Server-side JavaScript

Another way to expand SVR.JS functionality is through server-side JavaScript located in _serverSideScript.js_ file inside SVR.JS web root (or locaten in SVR.JS installation directory if you're running SVR.JS 3.9.0 or newer, and you have set _useWebRootServerSideScript_ property to _false_). Server-side JavaScript allows you to create various web applications using JavaScript, Node.js and SVR.JS API.

## Predefined objects

When working with server-side JavaScript in SVR.JS, you have access to several predefined objects that can greatly enhance your scripting capabilities. These objects are available for use without requiring any additional imports or installations.

- _readline_: The _readline_ library for reading input streams.
- _os_: The _os_ library for accessing operating system-related information.
- _http_: The _http_ library for handling HTTP functionality.
- _url_: The _url_ library for parsing and formatting URLs.
- _fs_: The _fs_ library for interacting with the file system.
- _path_: The _path_ library for working with file and directory paths.
- _hexstrbase64_: The _hexstrbase64_ library for converting hexadecimal strings to base64 format.
- _crypto_: The _crypto_ library for cryptographic functionality, such as generating hashes and handling encryption.
- _https_: The _https_ library, an extension of the _http_ library for handling secure HTTPS connections.
- _stream_: The _stream_ library for working with streams of data.
- _customvar1_, _customvar2_, _customvar3_, _customvar4_: Custom variables meant to be reused in multiple requests. These variables are available starting from SVR.JS version 3.0.0.

Additionally, there is an option to control the automatic execution of the _elseCallback_ function. By default, automatic execution is enabled. You can use the _disableEndElseCallbackExecute_ option to disable this behavior if needed.

By leveraging these predefined objects, you can streamline your server-side JavaScript code and build powerful applications using SVR.JS.

## Predefined methods

_See methods in SVR.JS API in non-proxy section_

Additionally SVR.JS server-side JavaScript has `filterHeaders(headers)` method, that filters out invalid request headers.

SVR.JS 3.8.0 and newer have additionally two methods:

- `checkHref(destHref)` - checks if request path name matches the _destHref_.
- `checkHostname(hostname)` - checks if host name defined in the request matches the _hostname_ parameter.

## SSJS development

`__dirname` and _._ in `require()` function both refer to _temp_ directory in SVR.JS.

Current working directory (`process.cwd()`) is SVR.JS web root.

If you want to divide server-side JavaScript into several files, you can do one of those:

- `require(process.cwd() + "/someOtherScript.js")` for script located in the web root (**it's recommended to set up 403 Forbidden or 404 Not Found non-standard code in SVR.JS configuration to prevent source code leaks**).
- `require("../someOtherScript.js")` for script located in SVR.JS installation directory.
- `require("/usr/lib/webappfiles/someOtherScript.js")` for script located in _/usr/lib/webappfiles_.

Example code:

```js
disableEndElseCallbackExecute = true; //Without "var", else it will not work!!!
if (href == "/hello.svr") {
	serverconsole.resmessage("Sent Hello World message!");
	res.writeHead(200, "OK", {
		"Content-Type": "text/plain",
	});
	res.end("Hello World!");
} else {
	elseCallback();
}
```
