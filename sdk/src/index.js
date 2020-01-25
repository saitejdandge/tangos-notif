"use strict";
exports.__esModule = true;
var config_1 = require("./config/config");
var SMSConfig_1 = require("./config/SMSConfig");
var SESConfig_1 = require("./config/SESConfig");
var SMSService_1 = require("./services/SMSService");
var EmailService_1 = require("./services/EmailService");
console.log("Loading Tangos Notif SDK");
module.exports = {
    initSMSConfig: SMSConfig_1.initSMSConfig,
    initSESConfig: SESConfig_1.initSESConfig,
    setSESEnabled: config_1.setSESEnabled,
    setSMSEnabled: config_1.setSMSEnabled,
    sendEmail: EmailService_1.sendEmail,
    sendSMS: SMSService_1.sendSMS
};
console.log(module.exports);
