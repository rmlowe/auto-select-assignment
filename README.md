# Assignment auto-selector for NetDimensions Talent Suite

The assignment auto-selector demonstrates how you can control the initial assignment that a learner will see on accessing [NetDimensions Talent Suite](http://www.netdimensions.com/talent-management-suite/). This particular code attempts to select an assignment linked to a specified top-level organization if available (selecting an arbitrary assignment otherwise). Many variations on this logic are obviously possible, such as using organizations at deeper levels, or using attributes. The auto-selector is implemented using HTML and JavaScript and requires no server-side code.

The files should be placed in a location that is protected by Talent Suite login, such as the file repository. You can then simply redirect users to the `index.html` file to perform automatic assignment selection after login. Edit `script.js` to configure the application context path and the name of the organization to be targeted.

You can create multiple copies of the auto-selector targeting different organizations. For example, if your site is available under multiple hostnames, with some basic web server configuration you could direct users to a different version of the auto-selector, and hence determine their initial assignment, based on which hostname they use to access the site.
