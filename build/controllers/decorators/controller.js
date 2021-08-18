"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var AppRoute_1 = require("../../AppRoute");
var MetadataKeys_1 = require("./MetadataKeys");
var validateBody = function (keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("missing " + key);
                return;
            }
        }
        next();
    };
};
function Controller(routePrefix) {
    return function (target) {
        var router = AppRoute_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKey.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKey.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKey.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKey.validator, target.prototype, key) || [];
            var validator = validateBody(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares), [validator, routeHandler]));
            }
        }
    };
}
exports.Controller = Controller;
