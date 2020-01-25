"use strict";
exports.__esModule = true;
var charset = 'UTF-8';
var AWSSESClient_1 = require("../AWSSESClient");
var config_1 = require("../config/config");
var SESConfig_1 = require("../config/SESConfig");
function sendEmail(subject, recipient, bodyHtml, bodyText) {
    console.log('Sending HTML Email to ', recipient);
    var params = {
        Source: SESConfig_1.SENDER_EMAIL,
        Destination: {
            ToAddresses: [
                recipient,
            ]
        },
        Message: {
            Subject: {
                Data: subject,
                Charset: charset
            },
            Body: {
                Text: {
                    Data: bodyText,
                    Charset: charset
                },
                Html: {
                    Data: bodyHtml,
                    Charset: charset
                }
            }
        }
    };
    if (!config_1.SESEnabled) {
        return Promise.resolve({ message: 'Email sent', data: null, result: 1 });
    }
    return new Promise(function (resolve) {
        AWSSESClient_1.ses.sendEmail(params, function (err, data) {
            if (err) {
                resolve({ result: 0, error: err });
            }
            else {
                resolve({ data: data, message: 'Email sent' + data.MessageId, result: 1 });
            }
        });
    });
}
exports.sendEmail = sendEmail;
