"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWSSESClient_1 = require("./clients/AWSSESClient");
const SMSClient_1 = require("./clients/SMSClient");
const config_1 = require("./config/config");
const EmailService_1 = require("./services/EmailService");
const SMSService_1 = require("./services/SMSService");
exports.default = {
    setSMSServiceEnabled: config_1.setSMSServiceEnabled,
    setEmailServiceEnabled: config_1.setEmailServiceEnabled,
    AWSSESClient: AWSSESClient_1.AWSSESClient,
    SMSClient: SMSClient_1.SMSClient,
    sendEmail: EmailService_1.sendEmail,
    sendSMS: SMSService_1.sendSMS,
};
