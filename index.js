module.exports = express = require('express');

// we add to Express's prototype:
app = express.HTTPServer.prototype;

// TODO support passing through parameters, e.g. ':id' etc.
app.alias = function (from, to, status) {
    return this.get(from, function (req, res, next) {
        return res.redirect(to, status || 301);
    });
};
