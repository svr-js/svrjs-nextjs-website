---
title: CGI/SCGI/JSGI/PHP
---

# CGI/SCGI/JSGI/PHP

In order to use CGI with SVR.JS, you need to install RedBrick mod. For SCGI you need to install OrangeCircle, while for JSGI you need to install YellowSquare mod. [Download these mods.](https://svrjs.org/mods)

## CGI and PHP via RedBrick

RedBrick supports running CGI programs and PHP files (RedBrick 2.3.0 and newer) in cgi-bin directory. RedBrick 2.5.0 and newer support running CGI programs and PHP files outside cgi-bin directory. You can configure file extensions outside of cgi-bin directory handled by RedBrick in _redbrick-scriptexts.json_ file in SVR.JS installation directory like this:

```json
[".php", ".cgi"]
```

RedBrick custom interpreters (from RedBrick 2.3.2; in earlier versions it is broken) can be configured in _redbrick-interpreters.json_ file in SVR.JS install directory like this:

```json
{
	".pl": ["perl"],
	".py": ["python"],
	".sh": ["bash"],
	".pyw": ["python"],
	".rb": ["ruby"],
	".php": ["php-cgi"]
}
```

RedBrick 2.3.0 and newer support PHP-CGI, while RedBrick 2.3.1 and newer support URL rewriting. RedBrick 2.3.6 and newer work with Windows (older ones always threw an 500 error while trying to execute CGI scripts on Windows). RedBrick 2.4.3 and newer work with web root outside SVR.JS installation directory (older ones need _config.json_ file in web root with valid JSON data; not necessarily related to _config.json_ in SVR.JS installation directory)

RedBrick 2.4.1 and newer allows to disable some default interpreter configuration using "null" like this:

```json
{
	".pl": null,
	".py": null,
	".rb": null,
	".exe": null
}
```

As of RedBrick 2.4.3, there are default interpreter configurations for _.pl_, _.py_, _.sh_, _.ksh_, _.csh_, _.rb_ and _.php_ files. If server is running on Windows, then there will be additional default interpreter configuration for _.exe_, _.bat_, <s>_.cmd_</s> (dropped in RedBrick 2.5.0) and _.vbs_ files.

SVR.JS currently supports PHP-CGI through RedBrick mod. <s>PHP is currently supported only inside _cgi-bin_ directory in SVR.JS web root.</s> RedBrick 2.5.0 and newer supports PHP outside of _cgi-bin_ directory. You need to modify PHP configuration file (usually at `/etc/php/&lt;php version&gt;/cgi/php.ini`) and set _cgi.force_redirect_ property to _0_, otherwise PHP-CGI will not work and just display a warning about PHP-CGI binary being compiled with force-cgi-redirect enabled. **It's recommended to use directories outside of _cgi-bin_ for user uploads and downloads** (so that RedBrick will not treat uploaded scripts with shebang and ELF binary files as CGI applications and try to execute them, potentially resulting in hacker-uploaded malware infections, remote code execution vulnerabilities or 500 Internal Server Errors).

For security reasons, you may disable directory listing for _cgi-bin_ (and also other directories) through _disableDirectoryListing_ or _disableDirectoryListingVHost_ options in SVR.JS configuration.

## SCGI via OrangeCircle

OrangeCircle can be configured in _orangecircle-config.json_ file in SVR.JS install directory like this:

```json
{
	"path": "/scgi",
	"host": "localhost",
	"port": 4000
}
```

OrangeCircle 1.0.7 and newer work with web root outside SVR.JS installation directory (older ones need _config.json_ file in web root with valid JSON data; not necessarily related to _config.json_ in SVR.JS installation directory).

OrangeCircle 1.3.0 and newer support multiple SCGI servers. These versions of OrangeCircle can be configured to use multiple SCGI servers like this:

```json
{
  "multiConfig": {
	"example.com": {
	  "path": "/scgi",
	  "host": "localhost",
	  "port": 4000
	},
	"example.org": {
	  "path": "/scgiorg",
	  "host": "localhost",
	  "port": 4001
	}
  }
}
```

## JSGI via YellowSquare

YellowSquare supports running JSGI scripts only in jsgi-bin directory. YellowSquare runs JSGI scripts, that are either with _.jsgi_ or _.jsgi.js_ extension. Every change in JSGI application requires a restart of SVR.JS in order to be applied.

YellowSquare 1.0.3 and newer work with web root outside SVR.JS installation directory (older ones need _config.json_ file in web root with valid JSON data; not necessarily related to _config.json_ in SVR.JS installation directory)

For security reasons, you may disable directory listing for _jsgi-bin_ (and also other directories) through _disableDirectoryListing_ or _disableDirectoryListingVHost_ options in SVR.JS configuration.

