"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const SMSConfig_1 = require("./config/SMSConfig");
const SESConfig_1 = require("./config/SESConfig");
const SMSService_1 = require("./services/SMSService");
const EmailService_1 = require("./services/EmailService");
exports.default = {
    initSMSConfig: SMSConfig_1.initSMSConfig,
    initSESConfig: SESConfig_1.initSESConfig,
    setSESEnabled: config_1.setSESEnabled,
    setSMSEnabled: config_1.setSMSEnabled,
    sendEmail: EmailService_1.sendEmail,
    sendSMS: SMSService_1.sendSMS,
};
