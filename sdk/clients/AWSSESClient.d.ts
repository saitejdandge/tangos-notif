import { SES } from 'aws-sdk';
export declare class AWSSESClient {
    private static awsClient;
    ses: SES;
    static isEmailServiceEnabled: boolean;
    private static accessKeyId;
    private static region;
    private static secretAccessKey;
    static senderEmail: string;
    static getInstance(): AWSSESClient;
    static initConfig(keyId: string, secretAccess: string, senderEmail: string): void;
}
