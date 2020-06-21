"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TangosNotifClient_1 = require("./clients/TangosNotifClient");
const config_1 = require("./config/config");
const EmailService_1 = require("./services/EmailService");
const SMSService_1 = require("./services/SMSService");
exports.default = {
    setSMSServiceEnabled: config_1.setSMSServiceEnabled,
    setEmailServiceEnabled: config_1.setEmailServiceEnabled,
    TangosNotifClient: TangosNotifClient_1.TangosNotifClient,
    sendEmail: EmailService_1.sendEmail,
    sendSMS: SMSService_1.sendSMS,
};
