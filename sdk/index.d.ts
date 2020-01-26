import { setSESEnabled, setSMSEnabled } from './config/config';
import { initSMSConfig } from './config/SMSConfig';
import { initSESConfig } from './config/SESConfig';
import { sendSMS } from './services/SMSService';
import { sendEmail } from './services/EmailService';
declare const _default: {
    initSMSConfig: typeof initSMSConfig;
    initSESConfig: typeof initSESConfig;
    setSESEnabled: typeof setSESEnabled;
    setSMSEnabled: typeof setSMSEnabled;
    sendEmail: typeof sendEmail;
    sendSMS: typeof sendSMS;
};
export default _default;
