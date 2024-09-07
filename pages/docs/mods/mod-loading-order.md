### Mod loading order

#### Startup

1.  Search for mods
2.  For each mod (sorted alphabetically by mod file name):
    - _.js_ mods
      1.  Initialize mod, and add mod along with mod info to list
    - _.tar.gz_ mods
      1.  Prepare temporary directory for extracted mod contents
      2.  Extract mod contents
      3.  Initialize mod, and add mod along with mod info to list
3.  Load server-side JavaScript:
    1.  Create mod file from server-side JavaScript
    2.  Initialize "mod", and add "mod" to list

#### Execution (on each server request)

1.  Initialize SVR.JS variables
2.  Invoke mods and server-side JavaScript (mods sorted alphabetically by mod file name)
3.  Load SVR.JS main callback (if it's not affected by mods and server-side JavaScript)
