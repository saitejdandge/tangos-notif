const charset = "UTF-8";
import { ses } from "../AWSSESClient";
import { SENDER_EMAIL as sender } from '../config/SESConfig';
import { SESEnabled } from "../config/config";

export function sendEmail(subject, recipient, body_html, body_text) {

    console.log("Sending HTML Email to ", recipient);

    const params = {
        Source: sender,
        Destination: {
            ToAddresses: [
                recipient
            ],
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

    if (!SESEnabled)
        return Promise.resolve({ message: "Email sent", data: null, result: 1 });
    else
        return new Promise((resolve) => {
            ses.sendEmail(params, function (err, data) {
                if (err) {
                    resolve({ result: 0, error: err });
                } else {
                    resolve({ message: "Email sent" + data.MessageId, data: data, result: 1 });
                }
            });

        })
}
