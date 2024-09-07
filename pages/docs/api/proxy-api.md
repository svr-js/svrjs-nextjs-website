---
title: Proxy API (legacy)
---

### Proxy API (legacy)

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

This API is exposed only to mods. It is invoked, when client connects with the server using CONNECT method.

This API was present from SVR.JS 3.0.0, however SVR.JS version older than 3.4.21 or 3.7.0 had a bug, which involves calling non-proxy callback, instead of proxy one. A workaround involves calling proxy callback over non-proxy one, when request uses CONNECT method (insert at beginning of non-proxy callback):

```js
if (!res.writeHead) {
	Mod.prototype.proxyCallback(
		req,
		res,
		serverconsole,
		responseEnd,
		href,
		ext
	)();
	return;
}
```

#### _req_

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

_req_ object is the same, as _req_ object in Node.JS

#### _socket_

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

_socket_ object is the same, as _socket_ object in Node.JS

#### _head_

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

_head_ object is the same, as _head_ object in Node.JS

#### _configJSON_

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

_See configJSON in non-proxy API_

#### _serverconsole_

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

_See serverconsole in non-proxy API_

#### _elseCallback()_

<small>_Added in SVR.JS 3.4.21, 3.7.0_</small>{" "}

_See elseCallback in non-proxy API_
