import { AWSSESClient } from './clients/AWSSESClient';
import { SMSClient } from './clients/SMSClient';
import { setEmailServiceEnabled, setSMSServiceEnabled } from './config/config';
import { sendEmail } from './services/EmailService';
import { sendSMS } from './services/SMSService';
declare const _default: {
    setSMSServiceEnabled: typeof setSMSServiceEnabled;
    setEmailServiceEnabled: typeof setEmailServiceEnabled;
    AWSSESClient: typeof AWSSESClient;
    SMSClient: typeof SMSClient;
    sendEmail: typeof sendEmail;
    sendSMS: typeof sendSMS;
};
export default _default;
