"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumberId = exports.generateRandomHexId = void 0;
var generateRandomHexId = function (size) {
    if (size === void 0) { size = 32; }
    return (__spreadArray([], Array(size)).map(function () { return (Math.floor(Math.random() * 16).toString(16)); }).join(''));
};
exports.generateRandomHexId = generateRandomHexId;
var generateRandomNumberId = function (size) {
    if (size === void 0) { size = 32; }
    return (new Uint8Array(size).map(function () { return (Math.floor(Math.random() * 256)); }).join('').substring(0, size));
};
exports.generateRandomNumberId = generateRandomNumberId;
