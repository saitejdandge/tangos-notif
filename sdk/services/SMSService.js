"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SMSClient_1 = require("../clients/SMSClient");
const request_1 = __importDefault(require("request"));
function sendSMS(mobileNumber, content) {
    return new Promise((resolve) => {
        if (!SMSClient_1.SMSClient.isSMSServiceEnabled) {
            return Promise.resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: content });
        }
        {
            const url = SMSClient_1.SMSClient.getInstance().buildSMSStrikerURL(mobileNumber, content);
            request_1.default(url, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: body });
                }
                else {
                    resolve({ result: 0, message: 'Something went wrong' });
                }
            });
        }
    });
}
exports.sendSMS = sendSMS;
