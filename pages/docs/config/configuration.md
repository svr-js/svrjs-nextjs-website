---
title: config.json properties
---

# _config.json_ properties

The _config.json_ file contains various properties that you can customize to configure SVR.JS according to your specific requirements. Below are the available properties:

## General Configuration

- _users_ (Array of Objects, SVR.JS 3.0.0 or newer)
  - Users list for HTTP authentication. Use _svrpasswd_ tool to add, modify or delete users.
    - _name_: User name for HTTP authentication (String)
    - _pass_: Salted hash of the password (default SHA256 with appended salt, String)
    - _salt_: Salt used to generate the SHA256 hash (String)
    - _pbkdf2_: Flag used to determine, if hash is PBKDF2 (Boolean, SVR.JS 3.7.0 or newer)
    - _scrypt_: Flag used to determine, if hash is scrypt (Boolean, SVR.JS 3.7.0 or newer)
- _port_ (Number or String, required)
  - HTTP port for SVR.JS to listen on. For SVR.JS 3.6.0 and later, it can also be a Unix socket or Windows named pipe. For SVR.JS 3.9.0 and later, this can also be an IP address along with a port like _"192.168.0.2:80"_ or like _"\[fdad:8948:1053::2\]:80"_
- _pubport_ (Number, required)
  - Public HTTP port for SVR.JS to display. It is also used in HTTP to HTTPS redirect.
- _sport_ (Number or String)
  - HTTPS port for SVR.JS to listen on. For SVR.JS 3.6.0 and later, it can also be a Unix socket or Windows named pipe. For SVR.JS 3.9.0 and later, this can also be an IP address along with a port like _"192.168.0.2:80"_ or like _"\[fdad:8948:1053::2\]:80"_
- _spubport_ (Number)
  - Public HTTPS port for SVR.JS to display. It is also used in HTTP to HTTPS redirect.

## SSL Configuration

- _secure_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to enable HTTPS.
- _cert_ (String, required for HTTPS)
  - Path to the SSL certificate file. Path is relative to SVR.JS installation directory, unless absolute path is specified.
- _key_ (String, required for HTTPS)
  - Path to the RSA/ECDSA private key file. Path is relative to SVR.JS installation directory, unless absolute path is specified.
- _sni_ (Object, SVR.JS 3.0.0 or newer)
  - SNI certificate paths for multiple domain names.
    - _{domain_name}_: Object with properties _cert_ and _key_ (path to SSL certificate and private key).
- _enableOCSPStapling_ (Boolean, SVR.JS 3.4.9 or newer)
  - Option to enable OCSP stapling.
- _useClientCertificate_ (Boolean, SVR.JS 3.14.0 or newer)
  - Option to require client to provide its certificate.
- _rejectUnauthorizedClientCertificates_ (Boolean, SVR.JS 3.14.0 or newer)
  - Option to disable verification of client certificates.
- _cipherSuite_ (String, SVR.JS 3.14.0 or newer)
  - Specification of cipher suites, replacing the default. For more information, see [Node.JS documentation](https://nodejs.org/docs/latest/api/tls.html#modifying-the-default-tls-cipher-suite).
- _ecdhCurve_ (String, SVR.JS 3.14.0 or newer)
  - Specification of ECDH curves, for example `P-521:P-384:P-256`. Set the parameter to `auto` to select the curve automatically. You can use `openssl ecparam -list_curves` command to obtain available ECDH curves.
- _signatureAlgorithms_ (String, SVR.JS 3.14.0 or newer)
  - Colon-seperated list for signature algorithms supported by the server. The list may contain digest algorithms (e.g. `SHA256`, `MD5`), public key algorithms (e.g. `RSA-PSS`, `ECDSA`), combinations of both (e.g. `RSA+SHA384`) or TLS v1.3 scheme names (e.g. `rsa_pss_pss_sha512`). For more information, see [OpenSSL man pages](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set1_sigalgs_list.html).
- _tlsMinVersion_ (String, SVR.JS 3.14.0 or newer)
  - Minimum TLS version, it can be `TLSv1.3`, `TLSv1.2`, `TLSv1.1`, or `TLSv1`. It is not recommended to set it less than TLSv1.2, unless it's required for interoperability. This is because of security vulnerabilities of TLS v1.1 and TLS v1.
- _tlsMaxVersion_ (String, SVR.JS 3.14.0 or newer)
  - Maximum TLS version, it can be `TLSv1.3`, `TLSv1.2`, `TLSv1.1`, or `TLSv1`.

## Domain and Redirect Configuration

- _domain_ (String)
  - Domain for SVR.JS to display. (In SVR.JS 2.x, it was _domian_)
- _wwwredirect_ (Boolean)
  - Option to enable redirects to domain name that begins with "www.". You need to first set _domain_ property in order for this option to have effect. This property didn't work in SVR.JS versions from 3.3.0 to 3.14.4

## Error Pages and Logging Configuration

- _page404_ (String)
  - Path to a custom 404 error page (after pages defined in _errorPages_ property).
- _errorPages_ (Array; SVR.JS 3.8.0 or newer)
  - Custom error pages configuration.
    - _scode_: HTTP status code specification for error page (Number, SVR.JS 3.8.0 or newer).
    - _path_: Path for error page (String, SVR.JS 3.8.0 or newer).
    - _host_: Applicable host name for this error page (optional; String, SVR.JS 3.8.0 or newer).
    - _ip_: Applicable IP address for this error page. Use this property to specify destination server IP address instead of _host_ property to prevent _Host_ header attacks. (optional; String, SVR.JS 3.14.1 or newer).
- _serverAdministratorEmail_ (String, SVR.JS 3.0.0 or newer)
  - Server administrator e-mail address to be displayed in default 5xx error pages.
- _enableLogging_ (Boolean)
  - Option to enable saving logs to a log file.

## HTTP Configuration

- _enableCompression_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to enable HTTP compression.
- _enableHTTP2_ (Boolean)
  - Option to enable HTTP/2.
- _enableDirectoryListing_ (Boolean)
  - Option to enable directory listing. If disabled, it returns a 403 error page.
- _enableDirectoryListingWithDefaultHead_ (Boolean)
  - Option to enable default header and footer on directory listing.
- _nonStandardCodes_ (Array of Objects)
  - Non-standard status codes configuration:
    - _scode_: Non-standard status code to apply. (Number)
    - _url_: URL to which this status code applies (after URL rewriting; String).
    - _regex_: Regex string (e.g. `"/^\\/index\\.php(?:$|[\\/?#])/"`) for matching the source URL (after URL rewriting) this status code applies to (with or without the query string). (Regex String, SVR.JS 3.0.0 or newer)
    - _location_: URL to which it is redirected on 301 and 302 status codes. (String)
    - _realm_: HTTP authentication realm on 401 status code. (String, SVR.JS 3.0.0 or newer)
    - _disableBruteProtection_: Option to disable brute force protection on 401 status code. (Boolean, SVR.JS 3.4.8 or newer)
    - _host_: Applicable host name for this status code. (optional; String, SVR.JS 3.8.0 or newer)
    - _ip_: Applicable IP address for this status code. Use this property to specify destination server IP address instead of _host_ property to prevent _Host_ header attacks. (optional; String, SVR.JS 3.14.1 or newer)
    - _userList_: Allowed users for HTTP authentication. (optional; Array of Strings, SVR.JS 3.8.0 or newer)
- _dontCompress_ (Array of Regex Strings, SVR.JS 3.0.0 or newer)
  - URLs for which HTTP compression will be disabled. If using SVR.JS 4.3.0 or newer, the HTTP compression is always disabled for these file extensions (as of SVR.JS 4.3.0): _.7z_, _.air_, _.amlx_, _.apk_, _.apng_, _.appinstaller_, _.appx_, _.appxbundle_, _.arj_, _.au_, _.avif_, _.bdoc_, _.boz_, _.bz_, _.bz2_, _.caf_, _.class_, _.doc_, _.docx_, _.dot_, _.dvi_, _.ear_, _.epub_, _.flv_, _.gdoc_, _.gif_, _.gsheet_, _.gslides_, _.gz_, _.iges_, _.igs_, _.jar_, _.jnlp_, _.jp2_, _.jpe_, _.jpeg_, _.jpf_, _.jpg_, _.jpg2_, _.jpgm_, _.jpm_, _.jpx_, _.kmz_, _.latex_, _.m1v_, _.m2a_, _.m2v_, _.m3a_, _.m4a_, _.mesh_, _.mk3d_, _.mks_, _.mkv_, _.mov_, _.mp2_, _.mp2a_, _.mp3_, _.mp4_, _.mp4a_, _.mp4v_, _.mpe_, _.mpeg_, _.mpg_, _.mpg4_, _.mpga_, _.msg_, _.msh_, _.msix_, _.msixbundle_, _.odg_, _.odp_, _.ods_, _.odt_, _.oga_, _.ogg_, _.ogv_, _.ogx_, _.opus_, _.p12_, _.pdf_, _.pfx_, _.pgp_, _.pkpass_, _.png_, _.pot_, _.pps_, _.ppt_, _.pptx_, _.qt_, _.ser_, _.silo_, _.sit_, _.snd_, _.spx_, _.stpxz_, _.stpz_, _.swf_, _.tif_, _.tiff_, _.ubj_, _.usdz_, _.vbox-extpack_, _.vrml_, _.war_, _.wav_, _.weba_, _.webm_, _.wmv_, _.wrl_, _.x3dbz_, _.x3dvz_, _.xla_, _.xlc_, _.xlm_, _.xls_, _.xlsx_, _.xlt_, _.xlw_, _.xpi_, _.xps_, and _.zip_.
- _enableIPSpoofing_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to enable identifiying client's originating IP address through the _X-Forwarded-For_ header (**for use in websites hidden behind a reverse proxy**, not recommeded if you're not using SVR.JS behind a reverse proxy, since hackers can spoof client IP address via this header).
- _enableETag_ (Boolean, SVR.JS 3.6.1 or newer)
  - Option to enable ETags.
- _customHeaders_ (Object, SVR.JS 3.0.0 or newer)
  - Custom HTTP headers (configured as a JavaScript object) with a _{path}_ template representing the request path (after URL rewriting).
- _http2Settings_ (Object, SVR.JS 3.14.0 or newer)
  - HTTP/2 protocol settings object. See [Node.JS documentation](https://nodejs.org/docs/latest/api/http2.html#settings-object) for more information.
    - _headerTableSize_: Maximum number of bytes used for header compression. Minimum value is 0. Maximum value is 2<sup>32</sup>-1. Default is 4096 (Number, SVR.JS 3.14.0 or newer).
    - _enablePush_: Option to enable HTTP/2 Push Streams. It is enabled by default (Boolean, SVR.JS 3.14.0 or newer).
    - _initialWindowSize_: Sender's initial window size in bytes for stream-level flow control. Minimum value is 0. Maximum value is 2<sup>32</sup>-1. Default is 65535 (Number, SVR.JS 3.14.0 or newer).
    - _maxFrameSize_: Largest frame payload size in bytes. Minimum value is 16384. Maximum value is 2<sup>24</sup>-1. Default is 16384 (Number, SVR.JS 3.14.0 or newer).
    - _maxConcurrentStreams_: Maximum number of concurrent streams allowed on HTTP/2 session. Minimum value is 0. Maximum value is 2<sup>32</sup>-1. Default is 2<sup>32</sup>-1 (Number, SVR.JS 3.14.0 or newer).
    - _maxHeaderListSize_: Maximum size (uncompressed octets) of acceptable header list. Minimum value is 0. Maximum value is 2<sup>32</sup>-1. Default is 65535 (Number, SVR.JS 3.14.0 or newer).
    - _maxHeaderSize_: Alias for _maxHeaderListSize_ (Number, SVR.JS 3.14.0 or newer).
    - _enableConnectProtocol_: Option to enable the "Extended Connect Protocol" defined by RFC 8441 (Number, SVR.JS 3.14.0 or newer).
    - _customSettings_: Additional settings not implemented yet in Node.JS and its underlying libraries. Object key defines the numeric value of the settings type (as defined in the "HTTP/2 SETTINGS" registry established by RFC 7540). Object values define actual numeric value of the settings. Settings types should be greater than 6 and less than 2<sup>16</sup>-1. Values should be in range from 0 to 2<sup>32</sup>-1. Currently you can specify up to 10 custom settings (Object, SVR.JS 3.14.0 or newer).
- _enableIncludingHeadAndFootInHTML_ (Boolean, SVR.JS 4.3.0 or newer)
  - Option to enable including custom head and foot in files with _.html_ extension.

## Security Configuration

- _blacklist_ (Array of Strings)
  - Block list of IP addresses and CIDR ranges.
- _disableServerSideScriptExpose_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to disable exposing SVR.JS script, server-side JavaScript, SVR.JS mods, and Node.JS modules. **It's strongly recommended to set this property to _true_ if you're using SVR.JS server-side JavaScript.** If you want to additionally prevent fingerprinting SVR.JS by accessing _/serverSideScript.js_, you can add URL rewrite rule, that defines rewriting of _/serverSideScript.js_ to a non-existent page.
- _enableRemoteLogBrowsing_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to enable browsing server logs from an HTTP client. Applicable only when you're not using custom web root. **It's not recommended to enable this, because it provides valuable information for attackerss, unless you're protecting _log_ folder with HTTP authentication.**
- _exposeServerVersion_ (Boolean)
  - Option to expose the server version via _Server_ header. If it is disabled, the header will have "SVR.JS" value.
- _rewriteDirtyURLs_ (Boolean, SVR.JS 3.7.0 or newer)
  - Option to rewrite "dirty" URLs (those filtered by path sanitizer) instead of redirecting them.
- _exposeModsInErrorPages_ (Boolean, SVR.JS 3.4.29, 3.9.1 or newer)
  - Option to expose SVR.JS mod information through default error pages (for example in _SVR.JS RedBrick/2.4.2 on forum.svrjs.org_ signature). Mod information is never exposed through _Server_ header (just SVR.JS information).

## Virtual Host Configuration

- _enableDirectoryListingVHost_ (Array of Objects; SVR.JS 3.8.0 or newer)
  - Array containing options to enable directory listings for specific virtual hosts.
    - _host_: Applicable host name for this rule (String, SVR.JS 3.8.0 or newer).
    - _ip_: Applicable IP address for this rule. Use this property to specify destination server IP address instead of _host_ property to prevent _Host_ header attacks. (optional; String, SVR.JS 3.14.1 or newer).
    - _enabled_: Has the same effect as _enableDirectoryListing_ (Boolean, SVR.JS 3.8.0 or newer).
- _customHeadersVHost_ (Array of Objects; SVR.JS 3.8.0 or newer)
  - Array containing custom headers for specific virtual hosts.
    - _host_: Applicable host name for this rule (String, SVR.JS 3.8.0 or newer).
    - _ip_: Applicable IP address for this rule. Use this property to specify destination server IP address instead of _host_ property to prevent _Host_ header attacks. (optional; String, SVR.JS 3.14.1 or newer).
    - _headers_: Has the same effect as _customHeaders_ property (Object, SVR.JS 3.8.0 or newer).
- _wwwrootPostfixesVHost_ (Array of Objects; SVR.JS 3.14.0 or newer)
  - Array containing web root postfixes assigned for each virtual host. For example: the source URL is _/page.html_ and postfix is _svrjs_; the rewritten URL is _/svrjs/page.html_. URL rewriting (with rules defined in the _rewriteMap_ property) will be processed after assigning web root postfixes.
    - _host_: Applicable host name for this prefix (String, SVR.JS 3.14.0 or newer).
    - _ip_: Applicable IP address for this prefix. Use this property to specify destination server IP address instead of _host_ property to prevent _Host_ header attacks. (optional; String, SVR.JS 3.14.1 or newer).
    - _postfix_: Postfix inserted before the request URL (String, SVR.JS 3.14.0 or newer).
    - _skipRegex_: Regex string (e.g. `"/^\\/index\\.php(?:$|[\\/?#])/"`) for matching request URLs to skip (optional; Regex String, SVR.JS 3.14.0 or newer).
- _wwwrootPostfixPrefixesVHost_ (Array of Strings; SVR.JS 3.14.0 or newer)
  - Array containing URL strings to insert before web root postfix (for all hosts). For example: the source URL is _/cgi-bin/gitweb.cgi_, postfix is _svrjs_ and the postfix prefix is _/cgi-bin_; the rewritten URL is _/cgi-bin/svrjs/gitweb.cgi_.
- _allowPostfixDoubleSlashes_ (Boolean, SVR.JS 3.14.4 or newer)
  - Option to allow double slashes, when inserting web root postfixes. If set to `false`, double slashes are removed by postfix insertion function. It may create issues with double slash URLs not having prefixes.

## Miscellaneous Configuration

- _rewriteMap_ (Array of Objects, SVR.JS 3.0.0 or newer)
  - Map for URL rewriting engine. Entries of the array are URL rewrite rules.
    - _definingRegex_: Regex string (e.g. `"/^\\/index\\.php(?:$|[\\/?#])/"`) for matching the source URL it applies to (Regex String, SVR.JS 3.0.0 or newer).
    - _host_: Applicable host name for this URL rewriting rule (optional; String, SVR.JS 3.8.0 or newer).
    - _ip_: Applicable IP address for this URL rewriting rule. Use this property to specify destination server IP address instead of _host_ property to prevent _Host_ header attacks. (optional; String, SVR.JS 3.14.1 or newer).
    - _append_: String to append after the end of URL (optional; String, SVR.JS 3.0.0 or newer).
    - _isNotDirectory_: Option to disable rewrite rule, when directory defined by the path exists (optional; Boolean, SVR.JS 3.13.0 or newer).
    - _isNotFile_: Option to disable rewrite rule, when file defined by the path exists (optional; Boolean, SVR.JS 3.13.0 or newer).
    - _allowDoubleSlashes_: Option to allow double slashes in the URL. If set to `false`, then URL rewriter removes double slashes. You may use `\\/{1,2}` instead of `\\/` in URL rewriting regular expressions (optional; Boolean, SVR.JS 3.14.4 or newer).
    - _replacements_: Regex string (e.g. `"/^\\/index\\.php(?:$|[\\/?#])/"`) replacements (Array of Objects, SVR.JS 3.0.0 or newer).
      - _regex_: Regex string (e.g. `"/^\\/index\\.php(?:$|[\\/?#])/"`) for matching the source URL this replacement applies to (Regex String, SVR.JS 3.0.0 or newer).
      - _replacement_: Replacement string (you can use for example "_$1_" for first capturing group; String, SVR.JS 3.0.0 or newer).
- _disableNonEncryptedServer_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to disable the HTTP server if the HTTPS server is running.
- _disableToHTTPSRedirect_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to disable redirects from the HTTP server to the HTTPS server.
- _allowStatus_ (Boolean, SVR.JS 3.0.0 or newer)
  - Option to enable _/svrjsstatus.svr_ page for monitoring server status (by default it's enabled).
- _wwwroot_ (String, SVR.JS 3.0.0 or newer)
  - Path to the root directory from which SVR.JS serves files and loads its server-side JavaScript. Defaults to the directory on which SVR.JS resides.
- _disableUnusedWorkerTermination_ (Boolean, SVR.JS 3.7.0 or newer)
  - Option to disable termination of unused SVR.JS workers.
- _useWebRootServerSideScript_ (Boolean, SVR.JS 3.9.0 or newer)
  - Option to use server-side JavaScript in web root. If it is set to _false_, the server-side JavaScript is loaded from SVR.JS installation directory.
- _disableTrailingSlashRedirects_ (Boolean, SVR.JS 3.12.0 or newer)
  - Option to disable redirects from URLs referencing to directories (but without a trailing slash) to URL with a trailing slash. For forwards proxy applications and SVR.JS 3.14.9 and earlier, it needs to be _true_, or else the server will just do redirect loops.
- _environmentVariables_ (Object, SVR.JS 3.12.0 or newer)
  - Envrionment variables. These can be used for CGI web applications and server-side JavaScript.
- _allowDoubleSlashes_ (Boolean, SVR.JS 3.14.4 or newer)
  - Option to allow double slashes in the URL. If set to `false`, double slashes are removed by URL sanitizer. Double slashes at the beginning of path (e.g. in _//config.json_) are always removed. Doesn't affect URL rewriting, in that case please configure the _allowDoubleSlashes_ property in the URL rewriting rule. It may allow some configuration file leaks, if web root is in the SVR.JS installation directory.
- _optOutOfStatisticsServer_ (Boolean, SVR.JS 3.15.6 or newer)
  - Option to opt out of sending data to the statistics server. You can use this option to increase the privacy of SVR.JS.
- _disableConfigurationSaving_ (Boolean, SVR.JS 4.2.0 or newer)
  - Option to enable `stdout` even when the `stdout` is not a TTY. Setting this option to `true` may decrease the performace of SVR.JS.

## Deprecated and Removed Properties

The following properties are deprecated or removed in newer versions of SVR.JS, and modifying them might not have any effect on the server:

- _timestamp_ (Number, **DON'T CHANGE**)
  - Timestamp of server starting. (This property should not be modified.)
- _version_ (String, removed in SVR.JS 3.4.0, **DON'T CHANGE**)
  - SVR.JS version (This property is no longer used and should not be modified.)

## Example Configuration

Here's an example _config.json_ file illustrating some of the available properties:

```json
{
	"port": 8080,
	"pubport": 80,
	"sport": 8443,
	"spubport": 443,
	"domain": "example.com",
	"wwwroot": "/var/www/html",
	"wwwredirect": true,
	"page404": "custom_404.html",
	"enableLogging": true,
	"enableDirectoryListing": true,
	"enableCompression": true,
	"enableHTTP2": true,
	"enableETag": true,
	"secure": true,
	"cert": "path/to/certificate.crt",
	"key": "path/to/private.key",
	"exposeServerVersion": false,
	"exposeModsInErrorPages": false,
	"disableServerSideScriptExpose": true,
	"enableIPSpoofing": true,
	"allowStatus": false,
	"useWebRootServerSideScript": false,
	"rewriteMap": [
		{
			"definingRegex": "/^\\/serverSideScript\\.js(?:$|[#?])/",
			"replacements": [
				{
					"regex": "/^\\/serverSideScript\\.js($|[#?])/",
					"replacement": "/NONEXISTENT_PAGE$1"
				}
			]
		},
		{
			"definingRegex": "/^\\/old-url$/",
			"replacements": [
				{
					"regex": "/^\\/old-url$/",
					"replacement": "/new-url"
				}
			]
		}
	],
	"customHeaders": {
		"X-Frame-Options": "DENY",
		"X-Content-Type-Options": "nosniff"
	}
}
```
