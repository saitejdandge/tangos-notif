"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const charset = 'UTF-8';
const AWSSESClient_1 = require("../AWSSESClient");
const config_1 = require("../config/config");
const SESConfig_1 = require("../config/SESConfig");
function sendEmail(subject, recipient, bodyHtml, bodyText) {
    console.log('Sending HTML Email to ', recipient);
    const params = {
        Source: SESConfig_1.SENDER_EMAIL,
        Destination: {
            ToAddresses: [
                recipient,
            ],
        },
        Message: {
            Subject: {
                Data: subject,
                Charset: charset,
            },
            Body: {
                Text: {
                    Data: bodyText,
                    Charset: charset,
                },
                Html: {
                    Data: bodyHtml,
                    Charset: charset,
                },
            },
        },
    };
    if (!config_1.SESEnabled) {
        return Promise.resolve({ message: 'Email sent', data: null, result: 1 });
    }
    return new Promise((resolve) => {
        AWSSESClient_1.ses.sendEmail(params, (err, data) => {
            if (err) {
                resolve({ result: 0, error: err });
            }
            else {
                resolve({ data, message: 'Email sent' + data.MessageId, result: 1 });
            }
        });
    });
}
exports.sendEmail = sendEmail;
