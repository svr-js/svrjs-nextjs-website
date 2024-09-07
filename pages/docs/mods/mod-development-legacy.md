---
title: Mod development (.tar.gz mods)
---

# Mod development (_.tar.gz_ mods)

Mods in SVR.JS have two methods:

- _callback_ - Invoked on non-CONNECT requests (includes proxy requests using GET or POST methods). Parameters (must be in this particular order, argument names given to match SVR.JS API documentation):
  - _req_
  - _res_
  - _serverconsole_
  - _responseEnd_
  - _href_
  - _ext_
  - _uobject_
  - _search_
  - _defaultpage_
  - _users_
  - _page404_
  - _head_
  - _foot_
  - _fd_
  - _elseCallback_
  - _configJSON_
  - _callServerError_
  - _getCustomHeaders_
  - _origHref_
  - _redirect_
  - _parsePostData_
  - _authUser_

**This method is required** (if it is not present, SVR.JS will simply return 500 Internal Server Error on all requests with error message in error stack similar to "_TypeError: modO.callback is not a function_").

- _proxyCallback_ - Invoked on CONNECT requests (used for proxying). Parameters (must be in this particular order, argument names given to match SVR.JS API documentation):
  - _req_
  - _socket_
  - _head_
  - _configJSON_
  - _serverconsole_
  - _elseCallback_

Required in order for function returned from _callback_ method to be invoked for request URLs beginning with "_http://_" or with "_https://_" (proxy through GET or POST method, non-proxy requests have request URLs beginning with "_/_"). **You should implement a proxy URL check in _callback_ method, if you're going to use _proxyCallback_ and _callback_ methods at once, or else your SVR.JS mod may be vulnerable to access control bypass attacks** (SVR.JS doesn't enforce URL rewriting, custom headers and non-standard codes for proxy requests to avoid interference of its access controls with proxy mods).

These methods are defined inside _Mod.prototype_ object. Both methods return a function, which will be executed in SVR.JS.

`__dirname` and _._ in `require()` function both refer to directory, to which mod contents are extracted.

The reference to file in the SVR.JS installation directory is `__dirname + "/../../../filename"` (replace `filename` with your desired file name).

Current working directory (`process.cwd()`) is SVR.JS web root.

A typical _index.js_ file for a mod may look like this:

```js
//Requires go here
function Mod() {}
Mod.prototype.callback = function callback(
	req,
	res,
	serverconsole,
	responseEnd,
	href,
	ext,
	uobject,
	search,
	defaultpage,
	users,
	page404,
	head,
	foot,
	fd,
	elseCallback,
	configJSON,
	callServerError,
	getCustomHeaders,
	origHref,
	redirect,
	parsePostData
) {
	return function () {
		//Mod contents go here
		if (href == "/hello.svr") {
			serverconsole.resmessage("Sent Hello World message!");
			res.writeHead(200, "OK", {
				"Content-Type": "text/plain",
			});
			res.end("Hello World!");
		} else {
			elseCallback();
		}
	};
};

//OPTIONAL: proxyCallback method
//Uncomment code below, if you want to use proxyCallback method.
//But then you'll need to implement proxy request URL check for callback method.

/*
Mod.prototype.proxyCallback = function proxyCallback(req, socket, head, configJSON, serverconsole, elseCallback) {
 return function () {
 //Just pass elseCallback
 elseCallback();
 }
}
*/

module.exports = Mod; //SVR.JS mod exports
```

The _mod.info_ file (in JSON format) contains metadata about the mod, such as its name and version:

```
{
  "name": "The Example Mod",
  "version": "0.1.0"
}
```
