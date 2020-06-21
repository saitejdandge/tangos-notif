import { TangosNotifClient } from './clients/TangosNotifClient';
import { setEmailServiceEnabled, setSMSServiceEnabled } from './config/config';
import { sendEmail } from './services/EmailService';
import { sendSMS } from './services/SMSService';
export default {
  setSMSServiceEnabled,
  setEmailServiceEnabled,
  TangosNotifClient,
  sendEmail,
  sendSMS,
};
