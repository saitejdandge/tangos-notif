"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ses = undefined;

var _awsSdk = require("aws-sdk");

_awsSdk.config.update({
  accessKeyId: require("./config/SESConfig").AWS_KEY_ID,
  region: "us-east-1",
  secretAccessKey: require("./config/SESConfig").AWS_SECRET_ACCESS_KEY
});
const ses2 = new _awsSdk.SES();

const ses = exports.ses = ses2;