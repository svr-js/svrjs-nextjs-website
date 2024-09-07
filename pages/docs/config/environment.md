---
title: Environment variables
---

# Environment variables

## SVR.JS 3.12.0 and newer

You can configure environment variables by configuring _environmentVariables_ property in _config.json_.

## Older SVR.JS versions

SVR.JS seamlessly passes through externally set environment variables to mods and server-side JavaScript, allowing you to customize and control your application's behavior based on these variables.

If you have a start-up script or use the command line to run SVR.JS, you can easily set environment variables before launching the server. Here's an example of how you can do it in a bash script:

```bash
export NODE_ENV=production
export OPENAI_API_KEY=redacted
node svr.js
```

In this example, we're setting two environment variables, `NODE_ENV` and `OPENAI_API_KEY`, before running the `node svr.js` command. These environment variables will be accessible within your mods and server-side JavaScript, allowing you to utilize them to configure and adapt your application as needed.

If you have installed SVR.JS using SVR.JS installer then you may modify _/etc/init.d/svrjs_ script (_do_start_ method) like this:

```bash
do_start()
{
    if [ ! -f "$lockfile" ] ; then
  echo -n $"Starting $servicename: "
        runuser -l "$user" -c "export GIT_HTTP_EXPORT_ALL=1; export GIT_PROJECT_ROOT=/var/lib/git; $nodejs $server > /dev/null &" && echo_success || echo_failure
        RETVAL=$?
        echo
        [ $RETVAL -eq 0 ] && touch "$lockfile"
    else
  echo "$servicename is locked."
        RETVAL=1
    fi
}
```

If you have used SVR.JS installer on GNU/Linux distribution that uses _systemd_, then you may add _Environment_ directives in _Service_ section in _systemd_ service file (_/etc/systemd/system/svrjs.service_) like this:

```ini
[Unit]
Description=SVR.JS web server
After=network.target

[Service]
Type=simple
User=svrjs
ExecStart=/usr/bin/env node /usr/lib/svrjs/svr.js
Environment=GIT_HTTP_EXPORT_ALL=1
Environment=GIT_PROJECT_ROOT=/var/lib/git
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Using environment variables can be a powerful way to manage different configurations for development, staging, and production environments, configure your CGI web applications, or to securely store sensitive information like API keys and passwords.

Remember that when you set environment variables externally, they will be available to all instances of SVR.JS running on your system. Exercise caution when using sensitive information as environment variables, and ensure that they are properly secured and protected.

By leveraging environment variables, you can enhance the flexibility and security of your SVR.JS application and streamline your deployment process.
