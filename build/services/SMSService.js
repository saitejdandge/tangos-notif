"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendSMS = sendSMS;

var _SMSConfig = require("../config/SMSConfig");

var _config = require("../config/config");

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildSMSStrikerURL(mobile_number, content) {
    return "https://sms.office24by7.com/API/sms.php?username=" + _SMSConfig.userName + "&password=" + _SMSConfig.password + "&from=" + _SMSConfig.senderID + "&to=" + mobile_number + "&msg=" + content + "&type=1";
}

function sendSMS(mobile_number, content) {
    return new Promise(resolve => {
        if (!_config.SMSEnabled) return Promise.resolve({ message: "SMS Sent to " + mobile_number, result: 1, data: content });else {
            let url = buildSMSStrikerURL(mobile_number, content);
            (0, _request2.default)(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve({ message: "SMS Sent to " + mobile_number, result: 1, data: body });
                } else resolve({ result: 0, message: "Something went wrong" });
            });
        }
    });
}