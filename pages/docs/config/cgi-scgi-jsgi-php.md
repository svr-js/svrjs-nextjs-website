---
title: CGI/SCGI/JSGI/PHP
---

### CGI/SCGI/JSGI/PHP

In order to use CGI with SVR.JS, you need to install RedBrick mod. For SCGI you need to install OrangeCircle, while for JSGI you need to install YellowSquare mod. [Download these mods.](https://svrjs.org/mods)

#### CGI and PHP via RedBrick

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

SVR.JS currently supports PHP-CGI through RedBrick mod. <s>PHP is currently supported only inside _cgi-bin_ directory in SVR.JS web root.</s> RedBrick 2.5.0 and newer supports PHP outside of _cgi-bin_ directory. You need to modify PHP configuration file (usually at _/etc/php/&lt;php version&gt;/cgi/php.ini_) and set _cgi.force_redirect_ property to _0_, otherwise PHP-CGI will not work and just display a warning about PHP-CGI binary being compiled with force-cgi-redirect enabled. **It's recommended to use directories outside of _cgi-bin_ for user uploads and downloads** (so that RedBrick will not treat uploaded scripts with shebang and ELF binary files as CGI applications and try to execute them, potentially resulting in hacker-uploaded malware infections, remote code execution vulnerabilities or 500 Internal Server Errors).

For security reasons, you may disable directory listing for _cgi-bin_ (and also other directories) through _disableDirectoryListing_ or _disableDirectoryListingVHost_ options in SVR.JS configuration.

#### SCGI via OrangeCircle

OrangeCircle can be configured in _orangecircle-config.json_ file in SVR.JS install directory like this:

```json
{
	"path": "/scgi",
	"host": "localhost",
	"port": 4000
}
```

OrangeCircle 1.0.7 and newer work with web root outside SVR.JS installation directory (older ones need _config.json_ file in web root with valid JSON data; not necessarily related to _config.json_ in SVR.JS installation directory)

#### JSGI via YellowSquare

YellowSquare supports running JSGI scripts only in jsgi-bin directory. YellowSquare runs JSGI scripts, that are either with _.jsgi_ or _.jsgi.js_ extension. Every change in JSGI application requires a restart of SVR.JS in order to be applied.

YellowSquare 1.0.3 and newer work with web root outside SVR.JS installation directory (older ones need _config.json_ file in web root with valid JSON data; not necessarily related to _config.json_ in SVR.JS installation directory)

For security reasons, you may disable directory listing for _jsgi-bin_ (and also other directories) through _disableDirectoryListing_ or _disableDirectoryListingVHost_ options in SVR.JS configuration.

### FastCGI/PHP-FPM

In order to use FastCGI with SVR.JS, you need to install GreenRhombus mod. [Download the mod.](https://svrjs.org/mods)

#### GreenRhombus notes

GreenRhombus' path and FastCGI server address can be configured in _greenrhombus-config.json_ file in the SVR.JS install directory.

Example configuration (with FastCGI server listening with port):

```json
{
	"path": "/fastcgi",
	"host": "localhost",
	"port": 7000
}
```

Example configuration (with FastCGI server listening on socket):

```json
{
	"path": "/fastcgi",
	"socketPath": "/run/fastcgi.sock"
}
```

You can configure file extensions outside of path specified in _greenrhombus-config.json_ file handled by GreenRhombus in _greenrhombus-scriptexts.json_ file in SVR.JS installation directory like this:

```json
[".php"]
```

#### PHP-FPM

GreenRhombus supports running PHP files through PHP-FPM. If you want to use GreenRhombus only for PHP-FPM, configure _greenrhombus-config.json_ like this (in this case we're using socket in _/run/php/php8.2-fpm.sock_; you can check it in PHP-FPM configuration file, e.g. _/etc/php/8.2/fpm/pool.d/www\_\_.conf_; configure it without _path_ property):

```json
{
	"socketPath": "/run/php/php8.2-fpm.sock"
}
```

And configure _greenrhombus-scriptexts.json_ like this:

```json
[".php"]
```

PHP-FPM may run on different user than SVR.JS web server, so you may need to set permissions for the user, which PHP-FPM runs on.

If you are using PHP-FPM only for SVR.JS, you can set the _listen.owner_ and _listen.group_ properties to _svrjs_ in the PHP-FPM configuration file (e.g. _/etc/php/8.2/fpm/pool.d/www\_\_.conf_).
