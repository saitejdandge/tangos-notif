import { setSESEnabled, setSMSEnabled } from './config/config';
import { initSMSConfig } from './config/SMSConfig';
import { initSESConfig } from './config/SESConfig';
import { sendSMS } from './services/SMSService';
import { sendEmail } from './services/EmailService';
export default {
  initSMSConfig,
  initSESConfig,
  setSESEnabled,
  setSMSEnabled,
  sendEmail,
  sendSMS,
};
