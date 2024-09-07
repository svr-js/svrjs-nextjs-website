---
title: Page customization
---

# Page customization

You can easily customize the appearance of pages served by SVR.JS by adding custom head and foot sections. These sections can be linked to every _.html_ file served by SVR.JS.

To customize the head, create a _head.html_ or _.head_ (SVR.JS 3.0.0 or newer) file in the web root directory. For the foot, create a _foot.html_ or _.foot_ (SVR.JS 3.0.0 or newer) file in the web root directory. Both custom head and foot sections will also be linked to directory listings if the _enableDirectoryListingWithDefaultHead_ property in _config.json_ is set to _true_.

For individual directory listings, you can add custom head and foot sections as well. Create a _HEAD.html_ or _.dirhead_ (SVR.JS 3.0.0 or newer) file for the head section, and a _FOOT.html_ or _.dirfoot_ (SVR.JS 3.0.0 or newer) file for the foot section in the specific directory you want to customize. You can also add a description of the directory (in HTML format) by creating a _.maindesc_ file in the respective directory. You can even apply CSS styles to directory listing table (using `#directoryListing` CSS selector and custom directory listing head and foot).

You can add index page to web root or directories in web root with one of those file names: _index.html_, _index.htm_ and _index.xhtml_.

From SVR.JS 3.5.0, you can change directory listing icons by replacing the icons in the _.dirimages_ directory located in the web root. If an icon is not present in the _.dirimages_ directory in the web root, SVR.JS will fall back to using icons in the _.dirimages_ directory in the same directory as the SVR.JS script.
