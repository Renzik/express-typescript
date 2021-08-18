"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch = exports.Del = exports.Put = exports.Post = exports.Get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var routeBinder = function (method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
};
exports.Get = routeBinder(Methods_1.Methods.get);
exports.Post = routeBinder(Methods_1.Methods.post);
exports.Put = routeBinder(Methods_1.Methods.put);
exports.Del = routeBinder(Methods_1.Methods.del);
exports.Patch = routeBinder(Methods_1.Methods.patch);
