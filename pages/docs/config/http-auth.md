---
title: HTTP authentication
---

# HTTP authentication

You can add HTTP basic authentication by including a 401 code (with _scode_ property set to 401) entry in the _nonStandardCodes_ property of _config.json_. To enable HTTP basic authentication, you need to specify the URL you want to restrict in the _url_ or _regex_ property of the entry. Additionally, you can set the authentication realm in the _realm_ property. If the realm is not specified, the default realm is "_SVR.JS HTTP Basic Authorization_". The encoding used for authentication will always be UTF-8.

By default, SVR.JS enables brute force protection for HTTP authentication, so you don't need to worry about potential brute force attacks against the authentication mechanism.

From SVR.JS 3.8.0 onwards, you can specify a list of allowed users in the _userList_ property.
