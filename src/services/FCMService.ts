import axios from 'axios';
import { TangosNotifClient } from '../clients/TangosNotifClient';
export async function sendFCMessage(to: string, data: any, isData: boolean = true) {

  const url = 'https://fcm.googleapis.com/fcm/send';

  const config = {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'key=' + TangosNotifClient.fcmServerKey,
    },
  };

  const payload: any = {
    to,
  };
  if (isData) {
    payload.data = data;
  } else {
    payload.notification = data;
  }

  axios.post(url, payload, config).then(datax => {
    console.log(datax);
  }).catch(e => {
    console.log('err ');
    console.log(e);
  });
}
