export var AWS_KEY_ID = null;
export var AWS_SECRET_ACCESS_KEY = null;
export var SENDER_EMAIL = null;

export function initSESConfig(awsKeyId, awsSecret, senderEmail) {
    AWS_KEY_ID = awsKeyId;
    AWS_SECRET_ACCESS_KEY = awsSecret;
    SENDER_EMAIL = senderEmail;
}