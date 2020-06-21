import { TangosNotifClient } from './clients/TangosNotifClient';
import { setEmailServiceEnabled, setSMSServiceEnabled } from './config/config';
import { sendEmail } from './services/EmailService';
import { sendSMS } from './services/SMSService';
import { sendFCMessage } from './services/FCMService';
export default {
  setSMSServiceEnabled,
  setEmailServiceEnabled,
  TangosNotifClient,
  sendEmail,
  sendSMS,
  sendFCMessage,
};
