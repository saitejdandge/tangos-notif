"use strict";
exports.__esModule = true;
var aws_sdk_1 = require("aws-sdk");
aws_sdk_1.config.update({
    accessKeyId: require("./config/SESConfig").AWS_KEY_ID,
    region: "us-east-1",
    secretAccessKey: require("./config/SESConfig").AWS_SECRET_ACCESS_KEY
});
var ses2 = new aws_sdk_1.SES();
exports.ses = ses2;
