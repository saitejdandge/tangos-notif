"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TangosNotifClient_1 = require("../clients/TangosNotifClient");
async function sendSMS(mobileNumber, content, highImportance = true) {
    if (!TangosNotifClient_1.TangosNotifClient.isSMSServiceEnabled) {
        return { message: 'SMS Sent to ' + mobileNumber, result: 1, data: content };
    }
    {
        // const url = SMSClient.getInstance().buildSMSStrikerURL(mobileNumber, content);
        // request(url, (error: any, response: any, body: any) => {
        //   if (!error && response.statusCode === 200) {
        //     return { message: 'SMS Sent to ' + mobileNumber, result: 1, data: body };
        //   } else {
        //     return { result: 0, message: 'Something went wrong' };
        //   }
        // });
        // Create SMS Attribute parameters
        const params = {
            Message: content,
            PhoneNumber: mobileNumber,
            DefaultSMSType: highImportance ? 'Transactional' : 'Promotional',
        };
        // Create promise and SNS service object
        const setSMSTypePromise = TangosNotifClient_1.TangosNotifClient.getInstance().sns.publish(params).promise();
        // Handle promise's fulfilled/rejected states
        try {
            const data = await setSMSTypePromise;
            return { data, result: 1, message: 'SMS Sent to ' + mobileNumber };
        }
        catch (e) {
            return { result: 1, message: 'Something wen\'t wrong', data: e };
        }
    }
}
exports.sendSMS = sendSMS;
