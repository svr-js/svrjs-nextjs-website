### Redirects

Setting up HTTP redirects is simple with SVR.JS. You can add a 301 or 302 code (with _scode_ property set to 301 or 302) entry to the _nonStandardCodes_ property in _config.json_. The entry should specify the source URL for the redirect in the _url_ or regular expression string for the redirect in _regex_ property (for example `"/\\/blog($|[#?\\/].*)/"`), and the destination URL in the _location_ property (for regular expressions, you can use for example "_$1_" for contents of first capturing group). Destination location can be relative to current site (for example _/blogs_) or a full URL (for example _https://blog.example.com_).

Please be cautious when setting up redirects to avoid redirect loops, as they can cause unintended behavior and potentially impact the performance of your server.

From SVR.JS 3.8.0 onwards, you can specify a hostname for which this redirect applies in _host_ property. If you want to move your website to new address, you can add redirect to new website and specify _host_ property to be host name of the old website (for example _oldsite.example_), _location_ property to be a location of new website with "_$1_" appended (for example "_https://newsite.example$1_") and _regex_ property to be `"/(.*)/"` (regular expression, which matches everything to capturing group).

### URL rewriting

You can set up URL rewriting by adding entries to _rewriteMap_ property in _config.json_ file. See ["_config.json_ properties" section](#config-json-properties) for URL rewrite rules syntax.

### Log viewing

To make log viewing easier, SVR.JS 3.x and later included it's log viewer utility under _logviewer.js_. SVR.JS log viewer is interactive.

You can also manually view logs, and highlight them using SVR.JS log highlighter utility under _loghighlight.js_ (SVR.JS 3.0.0 or newer). Usage: `&lt;some process&gt; | node loghighlight.js [-h] [--help] [-?] [/h] [/?]`.

SVR.JS stores it's logs in _log_ directory. Server logs look like this:

<pre>
	[2023-07-04T18:50:54.610Z] SERVER MESSAGE [Request Id: c0ffd0]: Somebody
	connected to port 80... [2023-07-04T18:50:54.611Z]{" "}
	<span style="color: #5050ff">
		SERVER REQUEST MESSAGE [Request Id: c0ffd0]: Client ::ffff:127.0.0.1:33670
		wants content in localhost/leak.svr
	</span>
	[2023-07-04T18:50:54.611Z]{" "}
	<span style="color: #5050ff">
		SERVER REQUEST MESSAGE [Request Id: c0ffd0]: Client uses Mozilla/5.0 (X11;
		Ubuntu; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: There was an error while
		processing the request!
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: Stack:
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: RangeError
		[ERR_INVALID_OPT_VALUE]: The value "4294967296" is invalid for option "size"
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at Function.allocUnsafe
		(buffer.js:290:3)
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at
		/home/ubuntu/svr.js.3.3.3/temp/serverSideScript.js:70:18
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at
		/home/ubuntu/svr.js.3.3.3/temp/modloader/primitiveanalytics.tar.gz/index.js:28:23
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at modExecute
		(/home/ubuntu/svr.js.3.3.3/svr.js:2981:9)
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at Server.reqhandler
		(/home/ubuntu/svr.js.3.3.3/svr.js:3741:11)
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at Server.emit
		(events.js:198:13)
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at parserOnIncoming
		(_http_server.js:691:12)
	</span>
	[2023-07-04T18:50:54.625Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: at
		HTTPParser.parserOnHeadersComplete (_http_common.js:111:17)
	</span>
	[2023-07-04T18:50:54.626Z]{" "}
	<span style="color: #ff5050">
		SERVER RESPONSE ERROR MESSAGE [Request Id: c0ffd0]: Server responded with
		500 code.
	</span>
	[2023-07-04T18:50:54.630Z] SERVER MESSAGE [Request Id: c0ffd0]: Client
	disconnected. [2023-07-04T18:50:54.699Z] SERVER MESSAGE [Request Id: 1be453]:
	Somebody connected to port 80... [2023-07-04T18:50:54.699Z]{" "}
	<span style="color: #5050ff">
		SERVER REQUEST MESSAGE [Request Id: 1be453]: Client ::ffff:127.0.0.1:33670
		wants content in localhost/favicon.ico
	</span>
	[2023-07-04T18:50:54.700Z]{" "}
	<span style="color: #5050ff">
		SERVER REQUEST MESSAGE [Request Id: 1be453]: Client uses Mozilla/5.0 (X11;
		Ubuntu; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0
	</span>
	[2023-07-04T18:50:54.709Z] SERVER MESSAGE [Request Id: 1be453]: Client
	disconnected. [2023-07-04T18:50:54.710Z]{" "}
	<span style="color: #00ff00">
		SERVER RESPONSE MESSAGE [Request Id: 1be453]: Server responded with 200
		code.
	</span>
	[2023-07-04T18:50:54.712Z]{" "}
	<span style="color: #00ff00">
		SERVER RESPONSE MESSAGE [Request Id: 1be453]: Client successfully recieved
		content.
	</span>
</pre>

First on the line is timestamp. Second is message type, optionally with request ID. Last is message contents.
