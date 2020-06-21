"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TangosNotifClient_1 = require("../clients/TangosNotifClient");
const charset = 'UTF-8';
function sendEmail(subject, recipient, bodyHtml, bodyText) {
    console.log('Sending HTML Email to ', recipient);
    const params = {
        Source: TangosNotifClient_1.TangosNotifClient.senderEmail,
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
    if (!TangosNotifClient_1.TangosNotifClient.isEmailServiceEnabled) {
        return Promise.resolve({ message: 'Email sent', data: null, result: 1 });
    }
    return new Promise((resolve) => {
        TangosNotifClient_1.TangosNotifClient.getInstance().ses.sendEmail(params, (err, data) => {
            if (err) {
                resolve({ result: 0, data: err, message: 'Something wen\'t wrong' });
            }
            else {
                resolve({ data, message: 'Email sent' + data.MessageId, result: 1 });
            }
        });
    });
}
exports.sendEmail = sendEmail;
