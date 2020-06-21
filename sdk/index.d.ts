import { TangosNotifClient } from './clients/TangosNotifClient';
import { setEmailServiceEnabled, setSMSServiceEnabled } from './config/config';
import { sendEmail } from './services/EmailService';
import { sendSMS } from './services/SMSService';
declare const _default: {
    setSMSServiceEnabled: typeof setSMSServiceEnabled;
    setEmailServiceEnabled: typeof setEmailServiceEnabled;
    TangosNotifClient: typeof TangosNotifClient;
    sendEmail: typeof sendEmail;
    sendSMS: typeof sendSMS;
};
export default _default;
