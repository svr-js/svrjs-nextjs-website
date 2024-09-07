---
title: Reverse proxy configuration
---

# Reverse proxy configuration

In order to use SVR.JS as a reverse proxy, you need to install reverse-proxy-mod SVR.JS mod. [Download this mod.](https://svrjs.org/mods)

Configuration file of reverse-proxy-mod is _reverse-proxy-config.json_ inside SVR.JS installation directory. Keys of configuration object are domain names (or paths from reverse-proxy-mod 1.1.1), for which it's settings apply. Values are object with those properties:

- _hostname_ - Hostname of origin server.
- _port_ - Port of origin server.
- _secureHostname_ - Hostname of origin server (access via HTTPS).
- _securePort_ - Port of origin server (access via HTTPS).

reverse-proxy-mod 1.1.0 and newer support HTTP upgrades (including WebSocket).

If you're using per-host URL rewrite rules and running multiple sites on one SVR.JS instance (instead of proxying them all to specific web servers; assuming that you're using SVR.JS 3.8.0 or newer; shared hosting), use paths referring to URL rewrite destinations instead of domain names. However if you're planning to use VPSes (virtualized servers) or run different web server instances and use SVR.JS with reverse-proxy-mod as a reverse proxy for them, use domain names instead.

If you're using SVR.JS just as a reverse proxy (for VPSes or other web server instances, and not serving websites from proxy itself), set _disableServerSideScriptExpose_ to _false_, set web root to outside SVR.JS installation directory, empty out _rewriteMap_, _nonStandardCodes_, _enableDirectoryListingVHost_, _customHeadersVHost_, _wwwrootPostfixesVHost_, _wwwrootPostfixPrefixesVHost_ to `[]`, empty out _customHeaders_ to `{}`, set _disableTrailingSlashRedirects_ to _true_, set _allowDoubleSlashes_ to _true_, and set _disableToHTTPSRedirect_ to _true_, in order to avoid interference involving SVR.JS web server (use this configuration when proxy itself doesn't use SVR.JS server-side JavaScript not including SVR.JS mods).
