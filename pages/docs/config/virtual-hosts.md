---
title: Virtual hosts
---

# Virtual hosts

When you're not planning to use SVR.JS server-side JavaScript or SVR.JS mods implementing individual web applications and plan to use SVR.JS similarly to Apache, nginx or IIS (static-only, PHP, CGI or JSGI), you can use virtual host-like functionality (name-based; IP-based from SVR.JS 3.14.1 and newer) with SVR.JS 3.8.0 or newer.

You can set up custom error pages, URL rewriting rules and non-standard status code settings per-host like this (assuming that you want to also include CGI support through RedBrick):

```json
{
  "users": [],
  "port": 80,
  "pubport": 80,
  "page404": "404.html",
  "blacklist": [],
  "nonStandardCodes": [
    {
      "url": "/anothersite.example/dl",
      "location": "/download",
      "host": "anothersite.example",
      "scode": 301
    },
    {
      "url": "/anothersite.example/downloads",
      "location": "/download",
      "host": "anothersite.example",
      "scode": 301
    }
  ],
  "enableCompression": true,
  "customHeaders": {},
  "enableHTTP2": false,
  "enableLogging": true,
  "enableDirectoryListing": true,
  "enableDirectoryListingWithDefaultHead": false,
  "serverAdministratorEmail": "[no contact information]",
  "stackHidden": false,
  "enableRemoteLogBrowsing": false,
  "exposeServerVersion": true,
  "disableServerSideScriptExpose": true,
  "rewriteMap": [
    {
      "definingRegex": "/^(?!\\/(?:\\.dirimages|cgi-bin)(?:$|[\\/#?]))/",
      "host": "website.example",
      "replacements": [
        {
          "regex": "/(.*)/",
          "replacement": "/website.example$1"
        }
      ]
    },
    {
      "definingRegex": "/^\\/cgi-bin(?:$|[\\/#?])/",
      "host": "website.example",
      "replacements": [
        {
          "regex": "/^\\/cgi-bin($|[\\/#?].*)/",
          "replacement": "/cgi-bin/website.example$1"
        }
      ]
    },
    {
      "definingRegex": "/^(?!\\/(?:\\.dirimages|cgi-bin)(?:$|[\\/#?])|\\/index(?:$|[\\/#?]))/",
      "host": "anothersite.example",
      "replacements": [
        {
          "regex": "/(.*)/",
          "replacement": "/anothersite.example$1"
        }
      ]
    },
    {
      "definingRegex": "/^\\/index(?:$|[\\/#?])/",
      "host": "anothersite.example".
      "replacements": [
        {
          "regex": "/^\\/index/",
          "replacement": "/anothersite.example/"
        }
      ]
    },
    {
      "definingRegex": "/^\\/cgi-bin(?:$|[\\/#?])/",
      "host": "anothersite.example",
      "replacements": [
        {
          "regex": "/^\\/cgi-bin($|[\\/#?].*)/",
          "replacement": "/cgi-bin/anothersite.example$1"
        }
      ]
    },
    {
      "definingRegex": "/^\\/(?:cgi-bin\\/)?(?:website\\.example|anothersite\\.example)(?:$|[\\/#?])/",
      "replacements": [
        {
          "regex": "/(.*)/",
          "replacement": "/NONEXISTENT_PAGE"
        }
      ]
    }
  ],
  "allowStatus": true,
  "dontCompress": [
    "/.*\\.ipxe$/",
    "/.*\\.img$/",
    "/.*\\.iso$/"
  ],
  "enableIPSpoofing": false,
  "secure": false,
  "sni": {},
  "disableNonEncryptedServer": false,
  "disableToHTTPSRedirect": false,
  "enableETag": true,
  "disableUnusedWorkerTermination": false,
  "rewriteDirtyURLs": true,
  "errorPages": [
    {
      "scode": 404,
      "path": "oops.html",
      "host": "website.example"
    }
  ],
  "customHeadersVHost": [
    {
      "host": "website.example",
      "headers": {
        "X-Some-Header": "some-value"
      }
    }
  ],
  "enableDirectoryListingVHost": [
    {
      "host": "website.example",
      "enable": false
    }
  ]
}
```

If you're using SVR.JS 3.14.0 or newer, you can use this configuration:

```json
{
  "users": [],
  "port": 80,
  "pubport": 80,
  "page404": "404.html",
  "blacklist": [],
  "nonStandardCodes": [
    {
      "url": "/anothersite.example/dl",
      "location": "/download",
      "host": "anothersite.example",
      "scode": 301
    },
    {
      "url": "/anothersite.example/downloads",
      "location": "/download",
      "host": "anothersite.example",
      "scode": 301
    }
  ],
  "enableCompression": true,
  "customHeaders": {},
  "enableHTTP2": false,
  "enableLogging": true,
  "enableDirectoryListing": true,
  "enableDirectoryListingWithDefaultHead": false,
  "serverAdministratorEmail": "[no contact information]",
  "stackHidden": false,
  "enableRemoteLogBrowsing": false,
  "exposeServerVersion": true,
  "disableServerSideScriptExpose": true,
  "rewriteMap": [
    {
      "definingRegex": "/^\\/anothersite.example\\/index(?:$|[\\/#?])/",
      "host": "anothersite.example".
      "replacements": [
        {
          "regex": "/^\\/anothersite.example\\/index/",
          "replacement": "/anothersite.example/"
        }
      ]
    },
  ],
  "allowStatus": true,
  "dontCompress": [
    "/.*\\.ipxe$/",
    "/.*\\.img$/",
    "/.*\\.iso$/"
  ],
  "enableIPSpoofing": false,
  "secure": false,
  "sni": {},
  "disableNonEncryptedServer": false,
  "disableToHTTPSRedirect": false,
  "enableETag": true,
  "disableUnusedWorkerTermination": false,
  "rewriteDirtyURLs": true,
  "errorPages": [
    {
      "scode": 404,
      "path": "oops.html",
      "host": "website.example"
    }
  ],
  "customHeadersVHost": [
    {
      "host": "website.example",
      "headers": {
        "X-Some-Header": "some-value"
      }
    }
  ],
  "enableDirectoryListingVHost": [
    {
      "host": "website.example",
      "enable": false
    }
  ],
  "wwwrootPostfixesVHost": [
    {
      "host": "website.example",
      "postfix": "website.example",
      "skipRegex": "/^\\/.dirimages(?:$|[\\/#?])/"
    },
    {
      "host": "anothersite.example",
      "postfix": "anothersite.example",
      "skipRegex": "/^\\/.dirimages(?:$|[\\/#?])/"
    },
    {
      "postfix": "NONEXISTENT_SITE"
    }
  ],
  "wwwrootPostfixPrefixesVHost": [
    "/cgi-bin"
  ]
}
```

You need to then create this directory structure in SVR.JS web root:

- cgi-bin
  - website.example
  - anothersite.example
- website.example
- anothersite.example

If you want to still use SVR.JS server-side JavaScript (not including SVR.JS mods implementing specific web applications) and virtual hosts simultaneously, path checks need to correspond to rewritten URLs (those processed by URL rewriting engine).

For some SVR.JS mods, path settings may correspond to URLs processed by URL rewriting engine.

It is not recommended to use global custom head and foot (_head.html_, _foot.html_, _.head_, _.foot_) with this setup, because they will apply to all virtual hosts (doesn't include custom heads and feet for directory listings [_.dirhead_, _.dirfoot_], which apply to only one directory).
