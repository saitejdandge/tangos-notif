"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initSESConfig = initSESConfig;
var AWS_KEY_ID = exports.AWS_KEY_ID = null;
var AWS_SECRET_ACCESS_KEY = exports.AWS_SECRET_ACCESS_KEY = null;
var SENDER_EMAIL = exports.SENDER_EMAIL = null;

function initSESConfig(awsKeyId, awsSecret, senderEmail) {
    exports.AWS_KEY_ID = AWS_KEY_ID = awsKeyId;
    exports.AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY = awsSecret;
    exports.SENDER_EMAIL = SENDER_EMAIL = senderEmail;
}