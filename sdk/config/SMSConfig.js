"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.senderID = null;
exports.userName = null;
exports.password = null;
function initSMSConfig(senderIDV, userNameV, passwordV) {
    exports.senderID = senderIDV;
    exports.userName = userNameV;
    exports.password = passwordV;
}
exports.initSMSConfig = initSMSConfig;
