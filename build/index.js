"use strict";

var _config = require("./config/config");

var _SMSConfig = require("./config/SMSConfig");

var _SESConfig = require("./config/SESConfig");

var _SMSService = require("./services/SMSService");

var _EmailService = require("./services/EmailService");

console.log("Loading Appening Notif SDK");
module.exports = {
    initSMSConfig: _SMSConfig.initSMSConfig,
    initSESConfig: _SESConfig.initSESConfig,
    setSESEnabled: _config.setSESEnabled,
    setSMSEnabled: _config.setSMSEnabled,
    sendEmail: _EmailService.sendEmail,
    sendSMS: _SMSService.sendSMS

};
console.log(module.exports);