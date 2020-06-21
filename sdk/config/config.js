"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TangosNotifClient_1 = require("../clients/TangosNotifClient");
function setEmailServiceEnabled(value) {
    TangosNotifClient_1.TangosNotifClient.isEmailServiceEnabled = value;
}
exports.setEmailServiceEnabled = setEmailServiceEnabled;
function setSMSServiceEnabled(value) {
    TangosNotifClient_1.TangosNotifClient.isSMSServiceEnabled = value;
}
exports.setSMSServiceEnabled = setSMSServiceEnabled;
