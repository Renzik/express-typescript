"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function validateBody() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKey.validator, keys, target, key);
    };
}
exports.validateBody = validateBody;
