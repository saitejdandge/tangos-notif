"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
class AWSSESClient {
    constructor() {
        this.ses = new aws_sdk_1.SES();
    }
    static getInstance() {
        if (AWSSESClient.awsClient == null) {
            if (this.accessKeyId == null || this.secretAccessKey == null || this.senderEmail == null) {
                throw new Error('Please call AWSSESClient.initConfig() method before using its instance');
            }
            else {
                this.awsClient = new AWSSESClient();
            }
        }
        return this.awsClient;
    }
    static initConfig(keyId, secretAccess, senderEmail) {
        this.accessKeyId = keyId;
        this.secretAccessKey = secretAccess;
        this.senderEmail = senderEmail;
        aws_sdk_1.config.update({
            accessKeyId: keyId,
            region: this.region,
            secretAccessKey: secretAccess,
        });
    }
}
exports.AWSSESClient = AWSSESClient;
AWSSESClient.isEmailServiceEnabled = true;
AWSSESClient.region = 'us-east-1';
