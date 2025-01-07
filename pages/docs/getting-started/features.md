---
title: Features
---

# Features

## Static file handling

- Static file serving (even above 2GB)
- Directory listing serving
- Protection against path traversal
- Content-Range support (for non-HTML static files; also for HTML files from SVR.JS 3.15.1)
- Serving from web root different than SVR.JS installation directory

## Security

- HTTPS support
- HTTP/2 support
- Built-in block list
- Protection against HTTP authentication brute force attacks (from SVR.JS 3.4.8; enabled by default)
- Ability to hide server version
- OCSP stapling support (from SVR.JS 3.4.9)

## Configuration and customization

- Configurability via _config.json_ file
- Expandability via server-side JavaScript and mods
- Ability to serve non-standard error pages
- URL rewriting engine
- Event driven architecture powered by Node.js, along with clustering.

## Compression and content delivery

- Brotli, gzip and Deflate HTTP compression (Brotli supported since SVR.JS 3.4.11)
- SNI (Server Name Indication) support
- ETag support (from SVR.JS 3.6.1)
- Reverse proxy functionality (requires reverse-proxy-mod SVR.JS mod)
- Forward proxy functionality (requires forward-proxy-mod SVR.JS mod)

## Authentication and access control

- HTTP basic authentication

## Gateway interfaces

- CGI (Common Gateway Interface) support (requires RedBrick mod)
- SCGI (Simple Common Gateway Interface) support (requires OrangeCircle mod)
- JSGI (JavaScript Gateway Interface) support (requires YellowSquare mod)
- PHP support (PHP-CGI with RedBrick mod or PHP-FPM with GreenRhombus mod)

## Additional functionality

- Logging
- Ability to display IP addresses, from which originally request was made (from reverse proxies; via X-Forwarded-For)
