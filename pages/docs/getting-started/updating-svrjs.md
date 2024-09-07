---
title: Updating SVR.JS
---

# Updating SVR.JS

## Using SVR.JS updater (included in SVR.JS installer package; GNU/Linux only)

If you installed SVR.JS using installer packages in April 5, 2024 and later, you can just run `sudo svrjs-updater` command to update SVR.JS to latest version. Once the update is done, restart your server OS or type `systemctl start svrjs` or `/etc/init.d/svrjs start` to restart SVR.JS.

For older installer packages, SVR.JS can be updated using SVR.JS updater by changing working directory to one containing SVR.JS updater, and running `sudo bash updater.sh` (**make sure _svrjs.zip_ file contains new version of SVR.JS**). Once the update is done, restart your server OS or type `systemctl start svrjs` or `/etc/init.d/svrjs start` to restart SVR.JS.

## Using _create-svrjs-server_ tool

SVR.JS can be updated using _create-svrjs-server_ tool by changing working directory to one containing SVR.JS, and running one of those commands:

- `create-svrjs-server lts` - Latest SVR.JS LTS version
- `create-svrjs-server latest` - Latest SVR.JS version
- `create-svrjs-server 3.6.1` - SVR.JS 3.6.1 (replace 3.6.1 with your desired version)

Then you can run `node svr.js` or `bun run svr.js` to extract new version of SVR.JS and new Node.JS modules.

## Manual updating

SVR.JS can be updated manually by extracting _svr.js_, _modules.compressed_ and _svr.compressed_ files from archive containing new version of SVR.JS to directory, to which older version of SVR.JS is installed (if you installed SVR.JS using SVR.JS installer, it is _/usr/lib/svrjs_). Then you can run `node svr.js` or `bun run svr.js` to extract new version of SVR.JS and new Node.JS modules.
