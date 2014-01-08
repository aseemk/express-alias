// Usage (defaults to random port):
// node example.js [<port>]

var express = require('./');
var app = express.createServer();

app.use(express.logger('dev'));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.alias('/301', '/');
app.alias('/302', '/', 302);

app.listen(process.argv[2] || 0, function () {
    console.log(
        'express-alias example server listening at http://localhost:%d/...',
        app.address().port
    );
});
