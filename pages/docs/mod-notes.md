---
title: SVR.JS mod notes
---

# SVR.JS mod notes

## Berno

Berno is a SSI (Server-Side Includes) engine, which is not maintained.

Current version of Berno allows SSI only in _.shtml_ files. Berno includes parts from very old version of RedBrick (1.x) to handle "exec" SSI directives.

## easy-waf integration

easy-waf integration is a WAF (web application firewall) mod.

**NOTICE: Using a WAF (Web Application Firewall) is no subsitute for web application security, because attacker will find a way to bypass the WAF.**

Configuration file is _easywaf-config.json_ inside SVR.JS installation directory. Configuration is passed to easy-waf. You can see documentation at [its GitHub page](https://github.com/timokoessler/easy-waf). This mod requires _easy-waf_ Node.JS module.

From easy-waf-integration 1.2.0, there is also additional mailConfig property, which is an object with those values:

*   _serverConfig_ - server configuration object passed to _nodemailer_
*   _from_ - source e-mail address
*   _to_ - destination e-mail address

These versions support sending email in case of blocked request (requires _nodemailer_ module).

From easy-waf-integration 1.2.0, there is support of pre-block and post-block hooks in _easywaf-hooks.js_ inside SVR.JS installation directory.

Example _easywaf-hooks.js_ code:

```js
//EasyWAF hooks. For more information read the easy-waf documentation in GitHub.

function preBlockHook(req, moduleInfo, ip) {
  //You can add exceptions for WAF. In this example we do add exception for "cgi-bin".
  if (moduleInfo.name == 'directoryTraversal' && req.url.match(/\/cgi-bin(?:$|[#?/])/)) return false;
  //We're also adding XSS exception for YaBB forum software to prevent false positives
  if (moduleInfo.name == 'xss' && /\/YaBB\.(?:pl|cgi)(?:$|[?#])/.test(req.url) && /(?:(\\?)|[;&])action=(?:post2|modify2|imsend2|cdchatupdate|ajxmessage)($|[;&#])/.test(req.url)) return false;
}

function postBlockHook(req, moduleInfo, ip) {
  //You can, for example send an e-mail notification or log it into file.
}

module.exports = {postBlockHook: postBlockHook, preBlockHook: preBlockHook};
```

From easy-waf-integration 1.2.4, there are additional configuration properties:

*   _maxRequestCheckedSize_ - maximum size of the request body (in bytes) to be checked. Default is `65536` (64 KiB).
*   _maxRequestCheckedSizeStrict_ - option to enable strict request body limits. If the limits are exceeded, then the server will return a 413 Content Too Large error. Default is `false`.

If you're using SVR.JS behind a reverse proxy, you need to configure _trustProxy_ property in _easy-waf_ configuration.

Example _easywaf-config.json_ file:
```json
{
  "modules": {
    "xss": {
      "excludePaths": "/^\\/(?:git\\/)?(?:(?!\\.git).)*\\.git\\/|^\\/(?:(?:navbar-)?logo|powered).png$/"
    },
    "noSqlInjection": {
      "excludePaths": "/^\\/(?:git\\/)?(?:(?!\\.git).)*\\.git\\//"
    },
    "crlfInjection": {
      "excludePaths": "/^\\/(?:git\\/)?(?:(?!\\.git).)*\\.git\\//"
    }
  },
  "mailConfig": {
    "serverConfig": {
      "host": "localhost",
      "port": 25,
      "secure": false,
      "ignoreTLS": true
    },
    "from": "svrjs@localhost",
    "to": "sysadmin@localhost"
  }
}
```

_View the [change log.](/changelog/easy-waf-integration)_

## forward-proxy-mod

forward-proxy-mod is a mod, that enables SVR.JS to do forward proxy functionality.

_Notes are in the [SVR.JS documentation.](/docs/config/forward-proxy-notes)_
_View the [change log.](/changelog/forward-proxy-mod)_

## GreenRhombus

GreenRhombus is a FastCGI (Fast Common Gateway Interface) client.

_Notes are in the [SVR.JS documentation.](/docs/config/fastcgi-php-fpm)_
_View the [change log.](/changelog/greenrhombus)_

## Next.js integration

Next.js integration is a mod, that enables SVR.JS to serve Next.js applications.

The webroot (_wwwroot_ _config.json_ property) serves as a Next.js application directory. It's recommended to set the owner of the Next.js application directory (around with all the files in it) as the user, on which SVR.JS is running (usually "svrjs"). Setting a `NODE_ENV` environment variable to `development` in SVR.JS configuration enables Next.js development server.

It's also recommended to forbid the access to ".env" file and ".git" directories, in case Next.js integration mod fails to load. You can set up _nonStandardCodes_ _config.json_ property like this:
```json
{
  "nonStandardCodes": [
    {
      "scode": 403,
      "regex": "/^\\/\\.env(?:\\.local|\\.production)?(?:$|[#?])/"
    },
    { 
      "scode": 403,
      "regex": "/^\\/\\.git/"
    },
    ...other non-standard codes...
  ],
  ...other config.json properties...
}
```

_View the [change log.](/changelog/nextjs-integration)_

## OrangeCircle

OrangeCircle is a SCGI (Simple Common Gateway Interface) client.

_Notes moved to [SVR.JS documentation.](/docs/config/cgi-scgi-jsgi-php)_
_View the [change log.](/changelog/orangecircle)_

## RedBrick

RedBrick is a CGI (Common Gateway Interface) engine.

_Notes moved to [SVR.JS documentation.](/docs/config/cgi-scgi-jsgi-php)_
_View the [change log.](/changelog/redbrick)_

## reverse-proxy-mod

reverse-proxy-mod is a mod, that enables SVR.JS to do reverse proxy functionality.

_Notes moved to [SVR.JS documentation.](/docs/config/reverse-proxy-config)_
_View the [change log.](/changelog/reverse-proxy-mod)_

## YellowSquare

YellowSquare is a JSGI (JavaScript Gateway Interface) engine.

_Notes moved to [SVR.JS documentation.](/docs/config/cgi-scgi-jsgi-php)_
_View the [change log.](/changelog/yellowsquare)_
