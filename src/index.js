import { setSESEnabled, setSMSEnabled } from "./config/config";
import { initSMSConfig } from "./config/SMSConfig";
import { initSESConfig } from "./config/SESConfig";
import { sendSMS } from "./services/SMSService";
import { sendEmail } from "./services/EmailService";
console.log("Loading Tangos Notif SDK");
module.exports= {
    initSMSConfig,
    initSESConfig,
    setSESEnabled,
    setSMSEnabled,
    sendEmail,  
    sendSMS,
}
console.log(module.exports)