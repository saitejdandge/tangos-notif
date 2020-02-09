"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SMSClient_1 = require("../clients/SMSClient");
const AWSSESClient_1 = require("../clients/AWSSESClient");
function setEmailServiceEnabled(value) {
    AWSSESClient_1.AWSSESClient.isEmailServiceEnabled = value;
}
exports.setEmailServiceEnabled = setEmailServiceEnabled;
function setSMSServiceEnabled(value) {
    SMSClient_1.SMSClient.isSMSServiceEnabled = value;
}
exports.setSMSServiceEnabled = setSMSServiceEnabled;
