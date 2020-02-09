export declare class SMSClient {
    private static smsClient;
    static isSMSServiceEnabled: boolean;
    private static senderId;
    private static username;
    static password: string;
    static getInstance(): SMSClient;
    static initConfig(senderId: string, username: string, password: string): void;
    buildSMSStrikerURL(mobileNumber: string, content: string): string;
}
