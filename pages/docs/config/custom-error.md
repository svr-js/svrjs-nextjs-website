---
title: Custom error pages
---

# Custom error pages

You can configure SVR.JS to serve custom error pages by adding _.&lt;errorcode&gt;_ (SVR.JS 3.0.0 or newer) or _&lt;errorcode&gt;.html_ pages. For the 404 error, you can specify it by changing the _page404_ property in _config.json_. From SVR.JS 3.8.0 onwards, you can use _errorPages_ property in _config.json_ to specify path to each custom error page.

When designing custom error pages, you can make use of the following placeholders or templates:

- _{errorMessage}_ - Displays the error code along with its short description.
- _{errorDesc}_ - Displays a longer description of the server error.
- _{stack}_ - Displays the error stack, which is equivalent to the _Error.stack_ property in JavaScript.
- _{path}_ - Shows the path of the page that caused the error.
- _{server}_ - Displays the server version string along with the hostname. For example, "_SVR.JS/3.9.6 (Linux; Node.js/v12.22.12) on 127.0.0.1:8080_" or simply "_SVR.JS on svrjs.org_".
- _{contact}_ - Displays the contact information of the server administrator, which can be set using the _serverAdministratorEmail_ property in _config.json_.
