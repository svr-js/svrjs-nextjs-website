# Redirects

Setting up HTTP redirects is simple with SVR.JS. You can add a 301 or 302 code (with `scode` property set to 301 or 302) entry to the `nonStandardCodes` property in `config.json`. The entry should specify the source URL for the redirect in the `url` or regular expression string for the redirect in `regex` property (for example `"/\\/blog($|[#?\\/].*)/"`), and the destination URL in the `location` property (for regular expressions, you can use for example `"$1"` for contents of the first capturing group). Destination location can be relative to the current site (for example `/blogs`) or a full URL (for example `https://blog.example.com`).

Please be cautious when setting up redirects to avoid redirect loops, as they can cause unintended behavior and potentially impact the performance of your server.

Starting from SVR.JS 3.8.0, you can specify a hostname for which this redirect applies using the `host` property. If you want to move your website to a new address, you can add a redirect to the new website and specify the `host` property to be the hostname of the old website (for example `oldsite.example`), the `location` property to be the location of the new website with `"$1"` appended (for example `"https://newsite.example$1"`), and the `regex` property to be `"/(.*)/"` (a regular expression, which matches everything to the capturing group).

## URL rewriting

You can set up URL rewriting by adding entries to the `rewriteMap` property in the `config.json` file. See the ["config.json properties" section](#config-json-properties) for URL rewrite rules syntax.

## Log viewing

SVR.JS 3.x and later includes a log viewer utility under `logviewer.js`. The SVR.JS log viewer is interactive.

You can also manually view logs and highlight them using the SVR.JS log highlighter utility under `loghighlight.js` (SVR.JS 3.0.0 or newer).

**Usage:**

```bash
<some process> | node loghighlight.js [-h] [--help] [-?] [/h] [/?]
```

SVR.JS stores it's logs in _log_ directory. Server logs look like this:

```
[2023-07-04T18:50:54.610Z] SERVER MESSAGE [Request Id: c0ffd0]: Somebody connected to port 80...
[2023-07-04T18:50:54.611Z] SERVER REQUEST MESSAGE [Request Id: c0ffd0]: Client ::ffff:127.0.0.1:33670 wants content in localhost/leak.svr
[2023-07-04T18:50:54.611Z] SERVER REQUEST MESSAGE [Request Id: c0ffd0]: Client uses Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: There was an error while processing the request!
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: RangeError [ERR_INVALID_OPT_VALUE]: The value "4294967296" is invalid for option "size"
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at Function.allocUnsafe (buffer.js:290:3)
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at /home/ubuntu/svr.js.3.3.3/temp/serverSideScript.js:70:18
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at /home/ubuntu/svr.js.3.3.3/temp/modloader/primitiveanalytics.tar.gz/index.js:28:23
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at modExecute (/home/ubuntu/svr.js.3.3.3/svr.js:2981:9)
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at Server.reqhandler (/home/ubuntu/svr.js.3.3.3/svr.js:3741:11)
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at Server.emit (events.js:198:13)
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at parserOnIncoming (_http_server.js:691:12)
[2023-07-04T18:50:54.625Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at HTTPParser.parserOnHeadersComplete (_http_common.js:111:17)
[2023-07-04T18:50:54.626Z] SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: Server responded with 500 code.
[2023-07-04T18:50:54.630Z] SERVER MESSAGE [Request Id: c0ffd0]: Client disconnected.
[2023-07-04T18:50:54.699Z] SERVER MESSAGE [Request Id: 1be453]: Somebody connected to port 80...
[2023-07-04T18:50:54.699Z] SERVER REQUEST MESSAGE [Request Id: 1be453]: Client ::ffff:127.0.0.1:33670 wants content in localhost/favicon.ico
[2023-07-04T18:50:54.700Z] SERVER REQUEST MESSAGE [Request Id: 1be453]: Client uses Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0
[2023-07-04T18:50:54.709Z] SERVER MESSAGE [Request Id: 1be453]: Client disconnected.
[2023-07-04T18:50:54.710Z] SERVER RESPONSE MESSAGE [Request Id: 1be453]: Server responded with 200 code.
[2023-07-04T18:50:54.712Z] SERVER RESPONSE MESSAGE [Request Id: 1be453]: Client successfully received content.
```

First in the log entry is the timestamp. Second is the message type, optionally with the request ID. Finally, it includes the actual message content.
