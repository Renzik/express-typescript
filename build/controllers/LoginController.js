"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.loginForm = function (req, res, next) {
        res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n    ");
    };
    LoginController.prototype.login = function (req, res, next) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === 'mail@mail.com' && password === '123') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('Invalid');
        }
    };
    LoginController.prototype.logout = function (req, res, next) {
        if (req.session && req.session.loggedIn) {
            req.session = { loggedIn: false };
            res.redirect('/');
        }
        else
            res.send("You're not logged in");
    };
    __decorate([
        decorators_1.Get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "loginForm", null);
    __decorate([
        decorators_1.Post('/login'),
        decorators_1.validateBody('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorators_1.Get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    LoginController = __decorate([
        decorators_1.Controller('/auth')
    ], LoginController);
    return LoginController;
}());
