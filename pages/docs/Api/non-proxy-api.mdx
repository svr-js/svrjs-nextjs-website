### Non-proxy API

This API is exposed both to mods and server-side JavaScript. This API also includes proxy requests, which don't use CONNECT method. It's possible to determine, if the request comes from the proxy, by checking if _req.url_ begins with "_http://_" or with "_https://_" (unlike non-proxy requests, for which _req.url_ begins with "_/_") like this:

```js
var isProxy = req.url && req.url.match(/^https?:\/\//);
```

SVR.JS applies mods for request URLs beginning with "_http://_" or with "_https://_" (proxy through GET or POST method, non-proxy requests have request URLs beginning with "_/_") only if _Mod.prototype.proxyCallback_ method is present (not possible with SVR.JS server-side JavaScript).

#### _req_

_req_ object is almost same, as _req_ object in Node.JS

Differences:

- _req.socket.realRemoteAddress_ and _req.socket.realRemotePort_ will contain IP address, from which request originally went from, if request is sent through reverse proxy (for _X-Forwarded-For_ header, _req.socket.realRemotePort_ will be _null_). You can specify generic request IP variable using `var reqip = req.socket.realRemoteAddress ? req.socket.realRemoteAddress : req.socket.remoteAddress` (from SVR.JS 3.4.4)
- _req.socket.originalRemoteAddress_ and _req.socket.originalRemotePort_ will contain IP address, from which proxy request came from.
- _req.url_ refers to request URL after all processing (URL rewriting too)

#### _res_

_res_ object is almost same, as _res_ object in Node.JS

Differences:

- _res.socket.realRemoteAddress_ and _res.socket.realRemotePort_ will contain IP address, from which request originally went from, if request is sent through reverse proxy. (for _X-Forwarded-For_ header, _req.socket.realRemotePort_ will be _null_; from SVR.JS 3.4.4)
- _res.socket.originalRemoteAddress_ and _res.socket.originalRemotePort_ will contain IP address, from which proxy request came from.
- _res.writeHead_ writes into server log.
- _res.writeHead_ doesn't invoke a warning about unused status code string.
- _res.setHeader_ doesn't invoke a warning about HTTP/1.x headers being not allowed in HTTP/2.
- _res.writeHead_ called multiple times will emit a warning, instead of throwing an error, which could crash SVR.JS.
- Custom headers defined in _config.json_ are set by default.

#### _serverconsole.climessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends CLI message to server console.

#### _serverconsole.reqmessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends request message to server console.

#### _serverconsole.resmessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends response message to server console.

#### _serverconsole.errmessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends response error message to server console.

#### _serverconsole.locerrmessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends local error message to server console.

#### _serverconsole.locwarnmessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends local warning message to server console.

#### _serverconsole.locmessage(message)_

Parameters:

- _message_ - message you want to send to server console (_String_)

Sends local message to server console.

#### _responseEnd(body)_

Parameters:

- _body_ - message you want to send before ending response (_String_ or _Buffer_)

Sends response message (along with custom head and foot) specified by _body_ parameter.

#### _href_

Path name of resource defined in the request. Alias for _uobject.pathname_.

#### _ext_

Extension of resource defined in the request.

#### _uobject_

Parsed _Url_ object created by _url.parse()_ method (includes parsed query string).

SVR.JS 3.3.1 and newer include hostname of the server (3.3.1 to 3.14.x use wrapper over WHATWG URL API; 3.15.0 and newer use custom URL parser), older versions don't.

#### _search_

Query string of URL. Alias for _uobject.search_

#### _defaultpage_

**WARNING! DEPRECATED IN SVR.JS 3.X OR NEWER**

In SVR.JS 2.x it was alias for _configJSON.defaultpage_. In SVR.JS 3.x for backward compability it's always "_index.html_".

#### _users_

**WARNING! DEPRECATED**

Alias for _configJSON.users_

#### _page404_

Alias for _configJSON.page404_

#### _head_

HTML head read from either _.head_ or _head.html_ file.

#### _foot_

HTML foot read from either _.foot_ or _foot.html_ file.

#### _fd_

**WARNING! This property has currently no use and it's reserved for new SVR.JS functions.** Currently this property is an empty string.

#### _elseCallback()_

Invokes next SVR.JS mod callback, SVR.JS server-side JavaScript callback or main SVR.JS callback.

#### _configJSON_

<small>_Added in SVR.JS 3.0.0_</small>{" "}

Parsed object of _config.json_ file.

SVR.JS 3.4.0 and newer has _version_ property, that corresponds to server version, and _productName_ property, which always is "SVR.JS".

#### _callServerError(errorCode[, extName][, stack][, ch])_

<small>_Added in SVR.JS 3.0.0_</small>{" "}

Parameters:

- _errorCode_ - HTTP error code (_Number_)
- _extName_ - extension name, which caused an error (optional; _String_)
- _stack_ - error stack (optional; _String_ or _Error_)
- _ch_ - custom HTTP headers for error (optional; _Object_)

Invokes HTTP error code. If it's unavailable, invokes 501 error code.

#### _getCustomHeaders()_

<small>_Added in SVR.JS 3.0.0_</small>{" "}

Returns: _Object_ property contains custom headers.

This methods retrieves custom headers from _config.json_ file. Returned object additionally includes _Server_ header.

#### _origHref_

<small>_Added in SVR.JS 3.0.0_</small>{" "}

Original path name before URL rewriting.

#### _redirect(dest[, isTemporary][, keepMethod][, headers])_

<small>_Added in SVR.JS 3.0.0_</small>{" "}

Parameters:

- _dest_ - destination of redirect (_String_)
- _isTemporary_ - if _true_, then redirect with 302 code. Else redirect with 301 code. When _keepMethod_ parameter is set to _true_, then redirect with 307 code, when _isTemporary_ is true or with 308 code otherwise. (optional; _Boolean_)
- _keepMethod_ - if _true_, then redirect with either 307 or 308 code. Else redirect with etiher 301 or 302 code. (optional; _Boolean_; SVR.JS 3.13.0 or later)
- _headers_ - custom HTTP headers for redirect (optional; _Object_)

Redirects HTTP client to specific destination.

#### _parsePostData([options], callback)_

<small>_Added in SVR.JS 3.0.0_</small>{" "}

Parameters:

- _options_ - options to be passed to _formidable_ (optional; _Object_)
- _callback_ - callback to execute after parsing URL. (_Function_)
  - _err_ - error, which occurred in POST data parsing. If not occured, it's _null_ (_Error_ or _null_)
  - _fields_ - POST fields (_Object_)
  - _files_ - Files sent (_Object_)

A wrapper over _formidable_ library, which is used for parsing request bodies of POST requests.

#### _authUser_

<small>_Added in SVR.JS 3.14.2_</small>

The name of authenticated HTTP user. If the user wasn't authenticated, the property would be _null_.

If you want to check if the request is authenticated in SVR.JS versions older than 3.14.2, you can use function shown below, that checks for an applicable 401 non-standard code in the server configuration:

```js
function checkIfThereIsA401Rule() {
	var actually401 = false;

	function createRegex(regex) {
		var regexObj = regex.split("/");
		if (regexObj.length == 0) throw new Error("Invalid regex!");
		var modifiers = regexObj.pop();
		regexObj.shift();
		var searchString = regexObj.join("/");
		return new RegExp(searchString, modifiers);
	}

	if (configJSON.nonStandardCodes) {
		configJSON.nonStandardCodes.every(function (nonscode) {
			if (nonscode.scode == 401) {
				if (
					nonscode.regex &&
					(req.url.match(createRegex(nonscode.regex)) ||
						href.match(createRegex(nonscode.regex)))
				) {
					actually401 = true;
					return true;
				} else if (
					nonscode.url &&
					(nonStandardCodes[i].url == href ||
						(os.platform() == "win32" &&
							nonStandardCodes[i].url.toLowerCase() == href.toLowerCase()))
				) {
					actually401 = true;
					return true;
				}
			}
			return false;
		});
	}
	return actually401;
}
```
