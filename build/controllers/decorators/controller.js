"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
var AppRoute_1 = require("../../AppRoute");
function Controller(routePrefix) {
    return function (target) {
        var router = AppRoute_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path) {
                if (method === 'get')
                    router[method]("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.Controller = Controller;
