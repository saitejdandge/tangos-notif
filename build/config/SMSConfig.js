"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initSMSConfig = initSMSConfig;
var senderID = exports.senderID = null;
var userName = exports.userName = null;
var password = exports.password = null;

function initSMSConfig(senderIDV, userNameV, passwordV) {

    exports.senderID = senderID = senderIDV;
    exports.userName = userName = userNameV;
    exports.password = password = passwordV;
}