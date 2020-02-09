import { AWSSESClient } from './clients/AWSSESClient';
import { SMSClient } from './clients/SMSClient';
import { setEmailServiceEnabled, setSMSServiceEnabled } from './config/config';
import { sendEmail } from './services/EmailService';
import { sendSMS } from './services/SMSService';
export default {
  setSMSServiceEnabled,
  setEmailServiceEnabled,
  AWSSESClient,
  SMSClient,
  sendEmail,
  sendSMS,
};
