import request from 'request';
import { TangosNotifClient } from '../clients/TangosNotifClient';
export async function sendSMS(mobileNumber: string, content: string, highImportance: boolean = true) {
  if (!TangosNotifClient.isSMSServiceEnabled) {
    return { message: 'SMS Sent to ' + mobileNumber, result: 1, data: content };
  } {
    // const url = SMSClient.getInstance().buildSMSStrikerURL(mobileNumber, content);
    // request(url, (error: any, response: any, body: any) => {
    //   if (!error && response.statusCode === 200) {
    //     return { message: 'SMS Sent to ' + mobileNumber, result: 1, data: body };
    //   } else {
    //     return { result: 0, message: 'Something went wrong' };
    //   }
    // });
    // Create SMS Attribute parameters
    const params: any = {
      attributes: {
        DefaultSMSType: highImportance ? 'Transactional' : 'Promotional',
      },
    };

    // Create promise and SNS service object
    const setSMSTypePromise: any = TangosNotifClient.getInstance().sns.setSMSAttributes(params).promise();
    // Handle promise's fulfilled/rejected states
    return await setSMSTypePromise;

  }
}
