
import { senderID } from "../config/SMSConfig";
import { userName } from "../config/SMSConfig";
import { password } from "../config/SMSConfig";
import { SMSEnabled } from "../config/config";
import request from 'request';

function buildSMSStrikerURL(mobile_number, content) {
    return "https://sms.office24by7.com/API/sms.php?username=" + userName + "&password=" + password + "&from=" + senderID + "&to=" + mobile_number + "&msg=" + content + "&type=1"
}

export function sendSMS(mobile_number, content) {
    return new Promise((resolve) => {
        if (!SMSEnabled)
            return Promise.resolve({ message: "SMS Sent to " + mobile_number, result: 1, data: content });
        else {
            let url = buildSMSStrikerURL(mobile_number, content);
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve({ message: "SMS Sent to " + mobile_number, result: 1, data: body });
                }
                else
                    resolve({ result: 0, message: "Something went wrong" });
            });
        }
    });

}