"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendEmail = sendEmail;

var _AWSSESClient = require("../AWSSESClient");

var _SESConfig = require("../config/SESConfig");

var _config = require("../config/config");

const charset = "UTF-8";
function sendEmail(subject, recipient, body_html, body_text) {

    console.log("Sending HTML Email to ", recipient);

    const params = {
        Source: _SESConfig.SENDER_EMAIL,
        Destination: {
            ToAddresses: [recipient]
        },
        Message: {
            Subject: {
                Data: subject,
                Charset: charset
            },
            Body: {
                Text: {
                    Data: body_text,
                    Charset: charset
                },
                Html: {
                    Data: body_html,
                    Charset: charset
                }
            }
        }
    };

    if (!_config.SESEnabled) return Promise.resolve({ message: "Email sent", data: null, result: 1 });else return new Promise(resolve => {
        _AWSSESClient.ses.sendEmail(params, function (err, data) {
            if (err) {
                resolve({ result: 0, error: err });
            } else {
                resolve({ message: "Email sent" + data.MessageId, data: data, result: 1 });
            }
        });
    });
}