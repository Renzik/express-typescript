"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function Use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKey.middleware, target, key) || [];
        // middlewares.push(middleware);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKey.middleware, __spreadArray(__spreadArray([], middlewares), [middleware]), target, key);
    };
}
exports.Use = Use;
