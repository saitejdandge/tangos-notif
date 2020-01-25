const charset = 'UTF-8';
import { ses } from '../AWSSESClient';
import { SESEnabled } from '../config/config';
import { SENDER_EMAIL as sender } from '../config/SESConfig';

export function sendEmail(subject: string, recipient: string, bodyHtml: string, bodyText: string) {

  console.log('Sending HTML Email to ', recipient);

  const params = {
    Source: sender,
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

  if (!SESEnabled) {
    return Promise.resolve({ message: 'Email sent', data: null, result: 1 });
  }

  return new Promise((resolve) => {
    ses.sendEmail(params,  (err: any, data: any) => {
      if (err) {
        resolve({ result: 0, error: err });
      } else {
        resolve({ data, message: 'Email sent' + data.MessageId, result: 1 });
      }
    });

  });

}
