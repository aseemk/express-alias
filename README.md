# Express-Alias

Adds a convenience `app.alias()` method to Express for aliasing redirect
routes. The redirects are HTTP 301 by default, but this is customizable.

Supports both Express 2 and Express 3.

## Example

```js
app.alias('/privacy', '/privacy-policy');
app.alias('/terms', '/terms-of-service');

app.alias('/aseem', '/aseemk', 302);    // temporary redirect
```

## Installation

```
npm install express-alias
```

## Usage

You can either `require()` Express normally and then extend it:

```js
var express = require('express');
require('express-alias');
```

Or just `require()` this module, which returns the extended Express for
convenience:

```js
var express = require('express-alias');
```

## TODO

Support route parameters (e.g. `'/user/:id'` &rarr; `'/users/:id'`).

## License

MIT. &copy; 2012 Aseem Kishore.

## Credits

[TJ Holowaychuk](https://github.com/visionmedia) for the awesome Express.
