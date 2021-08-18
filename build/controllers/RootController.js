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
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Not permitted');
};
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.root = function (req, res, next) {
        if (req.session && req.session.loggedIn) {
            return res.send("\n        <div>\n          <h3>You are logged in</h3>\n          <a href='/auth/logout'>logout</a>\n          <a href='/protected'>protected page</a>\n        </div>\n      ");
        }
        else {
            res.send("\n      <div>\n        <h3>You are not logged in</h3>\n        <a href='/auth/login'>login</a>\n      </div>\n    ");
        }
    };
    RootController.prototype.protected = function (req, res) {
        res.send('You got access');
    };
    __decorate([
        decorators_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "root", null);
    __decorate([
        decorators_1.Get('/protected'),
        decorators_1.Use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "protected", null);
    RootController = __decorate([
        decorators_1.Controller('')
    ], RootController);
    return RootController;
}());
