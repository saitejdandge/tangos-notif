import { SMSClient } from '../clients/SMSClient';
import { AWSSESClient } from '../clients/AWSSESClient';

export function setEmailServiceEnabled(value: boolean) {
  AWSSESClient.isEmailServiceEnabled = value;
}
export function setSMSServiceEnabled(value: boolean) {
  SMSClient.isSMSServiceEnabled = value;
}
