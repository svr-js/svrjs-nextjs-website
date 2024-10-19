---
title: Installation
---

# Installation

## Using SVR.JS installer (installer packages made in April 5, 2024 and later; GNU/Linux only)

The command for SVR.JS installation is available in [the SVR.JS home page](https://svrjs.org). First off, switch to _GNU/Linux_ tab, then copy the command below the tab into the terminal. The command looks something like this: `curl -fsSL https://downloads.svrjs.org/installer/svr.js.installer.linux.20240509.sh > /tmp/installer.sh && sudo bash /tmp/installer.sh`. After starting the installer, you will be prompted to select the type of SVR.JS installation. After selecting the type, SVR.JS installer will install Node.JS, SVR.JS and create SVR.JS service. During installation, you may be prompted for the installation of dependencies. Once the installation is done, the server is started at _http://localhost_.

File structure will look like this:

- _/usr/lib/svrjs_ - SVR.JS installation directory
- _/var/log/svrjs_ - SVR.JS logs
- _/var/www/svrjs_ - SVR.JS web root
- _/etc/svrjs-config.json_ - SVR.JS configuration file (SVR.JS _config.json_)

SVR.JS installer will also install these commands:

- _svrjs-loghighlight_ - SVR.JS log highlighter
- _svrjs-logviewer_ - SVR.JS log viewer
- _svrpasswd_ - SVR.JS user management tool
- _svrjs-updater_ - SVR.JS updater

## Using SVR.JS installer (installer packages made before April 5, 2024; GNU/Linux only)

SVR.JS now has a brand new installer for GNU/Linux. First, [download SVR.JS installer](https://downloads.svrjs.org/installer), then unpack your SVR.JS installer zip archive. After unpacking the installer, download SVR.JS zip archive (not installer), copy it to the installer directory and rename it to "_svrjs.zip_". Then run SVR.JS installer using `sudo bash installer.sh`. After starting the installer, you will be prompted to select the type of OS (type of GNU/Linux distribution). After selecting the type, SVR.JS installer will install Node.JS, SVR.JS and create SVR.JS service. During installation, you may be prompted for the installation of dependencies. Once the installation is done, restart your server OS or type `systemctl start svrjs` or `/etc/init.d/svrjs start` to start SVR.JS and get a web server on _http://localhost_.

File structure will look like this:

- _/usr/lib/svrjs_ - SVR.JS installation directory
- _/var/log/svrjs_ - SVR.JS logs
- _/var/www/svrjs_ - SVR.JS web root
- _/etc/svrjs-config.json_ - SVR.JS configuration file (SVR.JS _config.json_)

SVR.JS installer will also install these commands:

- _svrjs-loghighlight_ - SVR.JS log highlighter
- _svrjs-logviewer_ - SVR.JS log viewer
- _svrpasswd_ - SVR.JS user management tool

## Using _create-svrjs-server_ tool

To install SVR.JS using _create-svrjs-server_, first install the utility using `npm install -g svrjs`. Then create a directory, which will contain SVR.JS. Change your working directory to a new one, and run one of those commands:

- `create-svrjs-server lts` - Latest SVR.JS LTS version
- `create-svrjs-server latest` - Latest SVR.JS version
- `create-svrjs-server 3.6.1` - SVR.JS 3.6.1 (replace 3.6.1 with your desired version)

If you are using Deno, create the `svr.cjs` file with these contents:
```js
require("./svr.js");
```
Repeat the process with `logviewer.cjs`, `loghighlight.cjs`, and `svrpasswd.cjs` files, replacing `svr.js` with corresponding script names with `.js` extension.

After downloading and installing SVR.JS to your working directory, run `node svr.js` for SVR.JS 3.x or `node svr_new.js` for earlier versions or `bun run svr.js` if you're using Bun instead of Node.JS, or `deno run -A svr.cjs` if you're using Deno instead of Node.JS.

You will then see the message similar to this:

```
Decompressing modules...
Deleting SVR.JS stub...
Decompressing SVR.JS...
Restart SVR.JS to get server interface.
```

After running this command again, you'll get a web server on _http://localhost_.

## Using Docker

To install SVR.JS via Docker, first pull the image using `docker pull svrjs/svrjs` command, or `docker pull svrjs/svrjs:lts` command, if you wish to install LTS version of SVR.JS. Then create and start the Docker container using `docker run --name mysvrjs -d -p 80:80 --restart=always svrjs/svrjs` command (replace `mysvrjs` with desired Docker container name). The file structure is the same, as it would be installed via SVR.JS installer. Once the installation is done, the server is started at _http://localhost_.

## Manual installation

To install SVR.JS manually, first unpack your SVR.JS zip archive you downloaded from SVR.JS download page. Then change your working directory to one containing SVR.JS script stub.

If you are using Deno, create the `svr.cjs` file with these contents:
```js
require("./svr.js");
```
Repeat the process with `logviewer.cjs`, `loghighlight.cjs`, and `svrpasswd.cjs` files, replacing `svr.js` with corresponding script names with `.js` extension.

Run `node svr.js` for SVR.JS 3.x or `node svr_new.js` for earlier versions or `bun run svr.js` if you're using Bun instead of Node.JS, or `deno run -A svr.cjs` if you're using Deno instead of Node.JS.

You will then see the message similar to this:

```
Decompressing modules...
Deleting SVR.JS stub...
Decompressing SVR.JS...
Restart SVR.JS to get server interface.
```

After running this command again, you'll get a web server on _http://localhost_, which looks like this:

![SVR.JS console](/img/svrjs-console.png)

## After installation

When you visit `localhost`, the page will look like this:

![SVR.JS running for first time](/img/svrjs-firsttime.png)

If you see this page, then SVR.JS installation is successful. You can now replace default server pages (_index.html_, _tests.html_, _licenses_, _serverSideScript.js_) with custom ones, and remove default mods! If you don't see this page, then there was a problem when installing SVR.JS.
