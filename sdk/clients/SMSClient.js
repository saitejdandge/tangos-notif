"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SMSClient {
    static getInstance() {
        if (SMSClient.smsClient == null) {
            if (this.senderId == null || this.username == null || this.password == null) {
                throw new Error('Please call SMSClient.initConfig() method before using its instance');
            }
            else {
                this.smsClient = new SMSClient();
            }
        }
        return this.smsClient;
    }
    static initConfig(senderId, username, password) {
        this.senderId = senderId;
        this.username = username;
        this.password = password;
    }
    buildSMSStrikerURL(mobileNumber, content) {
        return 'https://sms.office24by7.com/API/sms.php?username=' + SMSClient.username + '&password=' + SMSClient.password + '&from=' + SMSClient.senderId + '&to=' + mobileNumber + '&msg=' + content + '&type=1';
    }
}
exports.SMSClient = SMSClient;
SMSClient.isSMSServiceEnabled = true;
