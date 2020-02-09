"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWSSESClient_1 = require("../clients/AWSSESClient");
const charset = 'UTF-8';
function sendEmail(subject, recipient, bodyHtml, bodyText) {
    console.log('Sending HTML Email to ', recipient);
    const params = {
        Source: AWSSESClient_1.AWSSESClient.senderEmail,
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
    if (!AWSSESClient_1.AWSSESClient.isEmailServiceEnabled) {
        return Promise.resolve({ message: 'Email sent', data: null, result: 1 });
    }
    return new Promise((resolve) => {
        AWSSESClient_1.AWSSESClient.getInstance().ses.sendEmail(params, (err, data) => {
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
