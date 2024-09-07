---
title: Introduction to SVR.JS mods
---

## Introduction to SVR.JS mods

Mods in SVR.JS are custom modules that can extend the server's functionality. Using mods, you can extend SVR.JS functionality to suit your specific requirements and customize the server's behavior to handle different types of requests.

### Installing mods

To install mod to SVR.JS, copy the mod to _mods_ directory inside SVR.JS installation directory. SVR.JS searches this directory for mods, loads and executes them in alphabetical order (by mod file name). If you want have mods to be executed in specific order, add numeric prefix to mod file name, for example "_01-redbrick.cgi.2.3.3.tar.gz_" and "_00-easywaf.integration.1.1.2.tar.gz_".

### Mod format

SVR.JS mods are JavaScript files, they work in SVR.JS 4.x and newer

Older SVR.JS mods are _tar_ archives with _gzip_ compression, they work in SVR.JS 2.x and newer.

SVR.JS 1.x used custom _svrmodpack_ archives with _gzip_ compression (they worked up to SVR.JS 3.13.0), but this format is **deprecated for new mods, and may be no longer supported in future versions of SVR.JS**, since _svrmodpack_ is not maintained anymore. All current SVR.JS mods are now in _tar.gz_ format. **SVR.JS 3.13.0 dropped support for _svrmodpack_.**
