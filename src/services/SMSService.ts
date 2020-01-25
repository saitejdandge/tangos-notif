
import request from 'request';
import { SMSEnabled } from '../config/config';
import { password, senderID , userName } from '../config/SMSConfig';

function buildSMSStrikerURL(mobileNumber: string, content: string) {
  return 'https://sms.office24by7.com/API/sms.php?username=' + userName + '&password=' + password + '&from=' + senderID + '&to=' + mobileNumber + '&msg=' + content + '&type=1';
}

export function sendSMS(mobileNumber: string, content: string) {
  return new Promise((resolve) => {
    if (!SMSEnabled) {
      return Promise.resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: content });
    }
    {
      const url = buildSMSStrikerURL(mobileNumber, content);
      request(url,  (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve({ message: 'SMS Sent to ' + mobileNumber, result: 1, data: body });
        } else {
          resolve({ result: 0, message: 'Something went wrong' });
        }
      });
    }
  });

}
