---
title: Mod development (.js mods)
---

# Mod development (_.js_ mods)

This section provides a comprehensive guide on developing `.js` mods for SVR.JS. Mods allow you to extend the functionality of SVR.JS by writing custom JavaScript code.

## Mod callback

The main export of the mod is a callback function that handles HTTP requests. This function takes the following parameters:

- `req` - the request object.
- `res` - the response object.
- `logFacilities` - logging facilities provided by SVR.JS.
- `config` - the configuration object.
- `next` - a function to pass control to the next request handler.

**You should implement a proxy URL check in the callback, if you're going to use `proxy` callback (or set `proxySafe` in the exports to `true`) and main callback at once, or else your SVR.JS mod may be vulnerable to access control bypass attacks** (SVR.JS doesn't enforce URL rewriting, custom headers and non-standard codes for proxy requests to avoid interference of its access controls with proxy mods).

## Commands

Mods can also export commands that can be invoked from the SVR.JS console. The `commands` object maps command names to functions that handle the command logic.

Each command takes the following parameters:

- `args` - the arguments for the command
- `log` - the logging function for the command
- `passCommand` - a function to pass control to the next command handler.

## Proxy handling

Mods can handle proxy requests by exporting a `proxy` function. This function takes the following parameters:

- `req` - the request object.
- `socket` - the socket object.
- `head` - the head object.
- `logFacilities` - logging facilities provided by SVR.JS.
- `config` - the configuration object.
- `next`- a function to pass control to the next proxy handler.

Required in order for the main callback to be invoked for request URLs beginning with "_http://_" or with "_https://_" (proxy through GET or POST method, non-proxy requests have request URLs beginning with "_/_").

You can also set `proxySafe` in the exports to `true`, in order to have the same effect described above.

## IPC listener

Mods can communicate with the main process using IPC (Inter-Process Communication). The `process.messageEventListeners` array allows you to add listeners for messages received by the main process.

You can add the wrapper for the listener for messages received by main process, which takes these parameters:

- `worker` - worker who sent the message
- `serverconsole` - logging facilities provided by SVR.JS.

The wrapper returns a function, which takes the `message` parameter, which means the message sent by the worker.

Control messages received by main process begin with 0x12 control character. Control messages sent by main process begin with 0x14 control character.

The reserved control messages, used internally by SVR.JS begin with:

- `\x12AUTHQ`
- `\x12AUTHR`
- `\x12AUTHW`
- `\x12CLOSE`
- `\x12END`
- `\x12ERRCRASH`
- `\x12ERRLIST`
- `\x12KILLOK`
- `\x12KILLTERMMSG`
- `\x12LISTEN`
- `\x12PINGOK`
- `\x12SAVEERR`
- `\x12SAVEGOOD`
- `\x14AUTHA`
- `\x14AUTHD`
- `\x14KILLPING`
- `\x14KILLREQ`
- `\x14PINGPING`
- `\x14SAVECONF`

## Paths

`process.dirname` refers to the SVR.JS installation directory.

Current working directory (`process.cwd()`) is SVR.JS web root. It's recommended to use the _config.wwwroot_ property instead though, if targeting SVR.JS 4.2.0 or newer.

## Get started

To get started with the development of the mod, clone the Git repository for the SVR.JS mod starter:

```bash
git clone https://git.svrjs.org/svrjs/svrjs-mod-starter.git
```

Further instructions can be found in the `README` file in the SVR.JS mod starter repository.

## Example mod

Below is an example of `index.js` code for a simple mod from SVR.JS mod starter that handles a `/test.svr` endpoint and a `/ping.svr` endpoint:

```js
const cluster = require("./utils/clusterBunShim.js"); // Cluster shim for Bun
const { add } = require("./utils/helper.js"); // Require the addition module
const modInfo = require("../modInfo.json"); // SVR.JS mod information

// Exported SVR.JS mod callback
module.exports = (req, res, logFacilities, config, next) => {
	if (req.parsedURL.pathname == "/test.svr") {
		res.writeHead(200, "OK", {
			"Content-Type": "text/plain",
		});
		res.end("2 + 2 = " + add(2, 2));
	} else if (req.parsedURL.pathname == "/ping.svr") {
		if (!cluster.isWorker) {
			// Invoke 500 Internal Server Error status code, if the process is not a worker
			res.error(
				500,
				new Error(
					"SVR.JS is running single-threaded, so this request is not supported"
				)
			);
			return;
		}

		// Ping OK message listener
		const pingOKListener = (message) => {
			if (message == "\x14MODPINGOK") {
				process.removeListener("message", pingOKListener);
				res.writeHead(200, "OK", {
					"Content-Type": "text/plain",
				});
				res.end("OK");
			}
		};

		// Listen to Ping OK messages
		process.on("message", pingOKListener);

		// Send Ping message
		process.send("\x12MODPING");
	} else {
		next(); // Invoke other request handlers
	}
};

// Exported command
module.exports.commands = {
	somecmd: (args, log, passCommand) => {
		log("Arguments: " + args.toString()); // Print arguments
		passCommand(args, log); // Invoke other command handlers
	},
};

// IPC listener for main process
// Control messages received by main process begin with 0x12 control character
// Control messages sent by main process begin with 0x14 control character
process.messageEventListeners.push((worker, serverconsole) => {
	return (message) => {
		if (message == "\x12MODPING") {
			// Ping back
			worker.send("\x14MODPINGOK");
		}
	};
});

module.exports.modInfo = modInfo;
```

The `modInfo.json` file would look like this:

```json
{
	"name": "Example mod",
	"version": "0.0.0"
}
```

