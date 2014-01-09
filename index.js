module.exports = express = require('express');

// we add to Express's prototype, with back-compat for express 2.
// (TODO this only patches HTTP servers in express 2, not HTTPS ones.)
app = express.application || express.HTTPServer.prototype;

// TODO support passing through parameters, e.g. ':id' etc.
app.alias = function (from, to, status) {
    return this.get(from, function (req, res, next) {
        return res.redirect(to, status || 301);
    });
};
