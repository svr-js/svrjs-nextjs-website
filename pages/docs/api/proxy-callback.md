---
title: Proxy callback API (module.exports.proxy)
---

### Proxy callback API (`module.exports.proxy`)

<small>_Added in SVR.JS 4.0.0_</small>

#### _req_

<small>_Added in SVR.JS 4.0.0_</small>

_req_ object is the same, as _req_ object in Node.JS

#### _socket_

<small>_Added in SVR.JS 4.0.0_</small>

_socket_ object is the same, as _socket_ object in Node.JS

#### _head_

<small>_Added in SVR.JS 4.0.0_</small>

_head_ object is the same, as _head_ object in Node.JS

#### _logFacilities_

<small>_Added in SVR.JS 4.0.0_</small>

_See logFacilties in main callback API_

#### _config_

<small>_Added in SVR.JS 4.0.0_</small>

_See config in main callback API_

#### _next()_

<small>_Added in SVR.JS 4.0.0_</small>

_See next in main callback API_

### Global variables (for use in callback APIs)

#### _process.versions.svrjs_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing SVR.JS version.

#### _process.serverConfiguration_

<small>_Added in SVR.JS 4.0.0_</small>

A property containing SVR.JS configuration from _config.json_ file.

#### _process.dirname_

<small>_Added in SVR.JS 4.0.0_</small>

A property containg the SVR.JS installation directory.

#### _process.filename_

<small>_Added in SVR.JS 4.0.0_</small>

A property containg the path to the SVR.JS script.

#### _process.err4xxcounter_

<small>_Added in SVR.JS 4.0.0_</small>

A property containg the count of 4xx HTTP errors.

#### _process.err5xxcounter_

<small>_Added in SVR.JS 4.0.0_</small>

A property containg the count of 5xx HTTP errors.

#### _process.reqcounter_

<small>_Added in SVR.JS 4.0.0_</small>

A property containg the count of HTTP requests.

#### _process.malformedcounter_

<small>_Added in SVR.JS 4.0.0_</small>

A property containg the count of malformed HTTP requests.
