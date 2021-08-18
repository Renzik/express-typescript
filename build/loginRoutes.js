"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Not permitted');
};
router.post('/login', function (req, res, next) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'mail@mail.com' && password === '123') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid');
    }
});
router.get('/logout', requireAuth, function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        req.session = { loggedIn: false };
        res.redirect('/');
    }
    else
        res.send("You're not logged in");
});
router.get('/', function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        return res.send("\n      <div>\n        <h3>You are logged in</h3>\n        <a href='/logout'>logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <h3>You are not logged in</h3>\n      <a href='/login'>login</a>\n    </div>\n  ");
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('You got access');
});
