var app = require('./example');
var req = require('supertest');

exports['express-alias'] = {

    // verify the root route works by itself:
    before: function (next) {
        req(app)
            .get('/')
            .expect(200, 'hello world')
            .end(next);
    },

    'should redirect, using Express’s default of 302': function (next) {
        req(app)
            .get('/alias')
            .expect(302)
            .expect('Location', '/')
            .end(next);
    },

    'should redirect, allowing other status codes': function (next) {
        req(app)
            .get('/alias/301')
            .expect(301)
            .expect('Location', '/')
            .end(next);
    }

};
