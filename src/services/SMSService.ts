import { SMSClient } from '../clients/SMSClient';
import request from 'request';
export function sendSMS(mobileNumber: string, content: string) {
  return new Promise((resolve) => {
    if (!SMSClient.isSMSServiceEnabled) {
      return Promise.resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: content });
    }
    {
      const url = SMSClient.getInstance().buildSMSStrikerURL(mobileNumber, content);
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: body });
        } else {
          resolve({ result: 0, message: 'Something went wrong' });
        }
      });
    }
  });

}
