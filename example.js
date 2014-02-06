// example.js
// Either run directly, or require() for testing.
//
// Run directly (defaults to random port):
//  node example.js [<port>]
//
// Require for testing:
//  var app = require('./example');
//  app.listen(port, function () { ... });
//

var express = require('./');
var app = express();

app.use(express.logger('dev'));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.alias('/alias', '/');
app.alias('/alias/301', '/', 301);

module.exports = app;

if (module === require.main) {
    app.listen(process.argv[2] || 0, function () {
        console.log(
            'express-alias example server listening at http://localhost:%d/...',
            this.address().port
        );
    });
}
