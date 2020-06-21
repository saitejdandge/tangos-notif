import { TangosNotifClient } from '../clients/TangosNotifClient';

export function setEmailServiceEnabled(value: boolean) {
  TangosNotifClient.isEmailServiceEnabled = value;
}
export function setSMSServiceEnabled(value: boolean) {
  TangosNotifClient.isSMSServiceEnabled = value;
}
