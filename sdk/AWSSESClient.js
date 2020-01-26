"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
aws_sdk_1.config.update({
    accessKeyId: require("./config/SESConfig").AWS_KEY_ID,
    region: "us-east-1",
    secretAccessKey: require("./config/SESConfig").AWS_SECRET_ACCESS_KEY
});
const ses2 = new aws_sdk_1.SES();
exports.ses = ses2;
