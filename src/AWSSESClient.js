import { config, SES } from 'aws-sdk';

config.update({
  accessKeyId: require("./config/SESConfig").AWS_KEY_ID,
  region: "us-east-1",
  secretAccessKey: require("./config/SESConfig").AWS_SECRET_ACCESS_KEY
});
const ses2 = new SES();

export const ses = ses2;  