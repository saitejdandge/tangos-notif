export declare function sendSMS(mobileNumber: string, content: string, highImportance?: boolean): Promise<{
    data: any;
    result: number;
    message: string;
}>;
