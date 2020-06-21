"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
class TangosNotifClient {
    constructor() {
        this.ses = new aws_sdk_1.SES();
        this.sns = new aws_sdk_1.SNS();
    }
    static getInstance() {
        if (TangosNotifClient.awsClient == null) {
            if (this.accessKeyId == null || this.secretAccessKey == null || this.senderEmail == null || this.fcmServerKey == null) {
                throw new Error('Please call TangosNotifClient.initConfig() method before using its instance');
            }
            else {
                this.awsClient = new TangosNotifClient();
            }
        }
        return this.awsClient;
    }
    static initConfig(keyId, secretAccess, senderEmail, fcmServerKey) {
        this.accessKeyId = keyId;
        this.secretAccessKey = secretAccess;
        this.fcmServerKey = fcmServerKey;
        this.senderEmail = senderEmail;
        aws_sdk_1.config.update({
            accessKeyId: keyId,
            region: this.region,
            secretAccessKey: secretAccess,
        });
    }
}
exports.TangosNotifClient = TangosNotifClient;
TangosNotifClient.isEmailServiceEnabled = true;
TangosNotifClient.isSMSServiceEnabled = true;
TangosNotifClient.region = 'us-east-1';
