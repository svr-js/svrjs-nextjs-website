---
title: FastCGI/PHP-FPM
---

# FastCGI/PHP-FPM

In order to use FastCGI with SVR.JS, you need to install GreenRhombus mod. [Download the mod.](https://svrjs.org/mods)

## GreenRhombus notes

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

## PHP-FPM

GreenRhombus supports running PHP files through PHP-FPM. If you want to use GreenRhombus only for PHP-FPM, configure _greenrhombus-config.json_ like this (in this case we're using socket in `/run/php/php8.2-fpm.sock`; you can check it in PHP-FPM configuration file, e.g. `/etc/php/8.2/fpm/pool.d/www.conf`; configure it without _path_ property):

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

If you are using PHP-FPM only for SVR.JS, you can set the _listen.owner_ and _listen.group_ properties to _svrjs_ in the PHP-FPM configuration file (e.g. `/etc/php/8.2/fpm/pool.d/www.conf`).
