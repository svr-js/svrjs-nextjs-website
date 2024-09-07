---
title: SVR.JS commands
---

# SVR.JS commands

SVR.JS comes with a console interface that provides several built-in commands for managing the server and interacting with it.

Available commands:

- _close_ - Closes the server. This command will gracefully shut down the server, closing all connections and resources.
- _open_ - Opens the server. This command allows you to start the server if it was previously closed.
- _help_ - Displays the list of available commands. Use this command to get a quick overview of all the commands supported by the server console.
- _mods_ - Displays the list of mods. SVR.JS supports modularity. This command will show you the currently installed mods.
- _stop_ - Stops the server process. This command will terminate the SVR.JS server entirely.
- _clear_ - Clears the current page of the terminal. This command helps to clean up the terminal interface.
- _block &lt;blocked&gt;_ - Adds an IP address or a domain to the server's block list. Blocked clients will be denied access to the server.
- _unblock &lt;blocked&gt;_ - Removes an IP address or a domain from the server's block list. Unblocked clients can access the server normally.
- _restart_ - Restarts SVR.JS workers. This command will restart the server's worker processes, allowing for a fresh start of worker instances. (SVR.JS 3.0.0 or newer)

These commands provide an easy and convenient way to manage and control the SVR.JS server directly from the console.
