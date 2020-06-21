import { TangosNotifClient } from '../clients/TangosNotifClient';
const charset = 'UTF-8';

export function sendEmail(subject: string, recipient: string, bodyHtml: string, bodyText: string) {

  console.log('Sending HTML Email to ', recipient);

  const params: any = {
    Source: TangosNotifClient.senderEmail,
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

  if (!TangosNotifClient.isEmailServiceEnabled) {
    return Promise.resolve({ message: 'Email sent', data: null, result: 1 });
  }

  return new Promise((resolve) => {
    TangosNotifClient.getInstance().ses.sendEmail(params, (err: any, data: any) => {
      if (err) {
        resolve({ result: 0, error: err });
      } else {
        resolve({ data, message: 'Email sent' + data.MessageId, result: 1 });
      }
    });

  });

}
