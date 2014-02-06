[![Travis build status](https://travis-ci.org/aseemk/express-alias.png?branch=master)](https://travis-ci.org/aseemk/express-alias)

# Express-Alias

Adds a convenience `app.alias()` method to Express for aliasing redirect
routes.

Supports both Express 2 and Express 3.

## Example

```js
// uses Express's default redirect status (currently 302):
app.alias('/privacy', '/privacy-policy');
app.alias('/terms', '/terms-of-service');

// but you can explicitly specify a status as well:
app.alias('/aseem', '/aseemk', 301);
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
