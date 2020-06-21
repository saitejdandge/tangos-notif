"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const TangosNotifClient_1 = require("../clients/TangosNotifClient");
async function sendFCMessage(to, data, isData = true) {
    const url = 'https://fcm.googleapis.com/fcm/send';
    const config = {
        headers: {
            'Content-Type': 'application/json',
            authorization: 'key=' + TangosNotifClient_1.TangosNotifClient.fcmServerKey,
        },
    };
    const payload = {
        to,
    };
    if (isData) {
        payload.data = data;
    }
    else {
        payload.notification = data;
    }
    axios_1.default.post(url, payload, config).then(datax => {
        console.log(datax);
    }).catch(e => {
        console.log('err ');
        console.log(e);
    });
}
exports.sendFCMessage = sendFCMessage;
