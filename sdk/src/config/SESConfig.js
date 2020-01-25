"use strict";
exports.__esModule = true;
exports.AWS_KEY_ID = null;
exports.AWS_SECRET_ACCESS_KEY = null;
exports.SENDER_EMAIL = null;
function initSESConfig(awsKeyId, awsSecret, senderEmail) {
    exports.AWS_KEY_ID = awsKeyId;
    exports.AWS_SECRET_ACCESS_KEY = awsSecret;
    exports.SENDER_EMAIL = senderEmail;
}
exports.initSESConfig = initSESConfig;
