
### Types of splitting with webpack

1. Bundle Splitting - create more, smaller files (but load them all on each network request anyways) for better caching

Split one large file into 2 files so the user only needs to download the file that changed and the browser serves the other file from the cache this makes no difference to first time users since this relies on caching.

 2. Code Splitting - dynamically load code so users only load code they need for that part of the site
