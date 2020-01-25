"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var request_1 = __importDefault(require("request"));
var config_1 = require("../config/config");
var SMSConfig_1 = require("../config/SMSConfig");
function buildSMSStrikerURL(mobileNumber, content) {
    return 'https://sms.office24by7.com/API/sms.php?username=' + SMSConfig_1.userName + '&password=' + SMSConfig_1.password + '&from=' + SMSConfig_1.senderID + '&to=' + mobileNumber + '&msg=' + content + '&type=1';
}
function sendSMS(mobileNumber, content) {
    return new Promise(function (resolve) {
        if (!config_1.SMSEnabled) {
            return Promise.resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: content });
        }
        {
            var url = buildSMSStrikerURL(mobileNumber, content);
            request_1["default"](url, function (error, response, body) {
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
