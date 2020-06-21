import { SES, SNS } from 'aws-sdk';
export declare class TangosNotifClient {
    static isEmailServiceEnabled: boolean;
    static isSMSServiceEnabled: boolean;
    static senderEmail: string;
    static getInstance(): TangosNotifClient;
    static initConfig(keyId: string, secretAccess: string, senderEmail: string): void;
    private static awsClient;
    private static accessKeyId;
    private static region;
    private static secretAccessKey;
    ses: SES;
    sns: SNS;
}
