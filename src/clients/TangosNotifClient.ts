import { config, SES, SNS } from 'aws-sdk';

export class TangosNotifClient {

  public static isEmailServiceEnabled: boolean = true;
  public static isSMSServiceEnabled: boolean = true;
  public static senderEmail: string;

  public static getInstance(): TangosNotifClient {
    if (TangosNotifClient.awsClient == null) {
      if (this.accessKeyId == null || this.secretAccessKey == null || this.senderEmail == null || this.fcmServerKey == null) {
        throw new Error('Please call TangosNotifClient.initConfig() method before using its instance');
      } else {
        this.awsClient = new TangosNotifClient();
      }
    }
    return this.awsClient;
  }

  public static initConfig(keyId: string, secretAccess: string, senderEmail: string, fcmServerKey: string) {
    this.accessKeyId = keyId;
    this.secretAccessKey = secretAccess;
    this.fcmServerKey = fcmServerKey;
    this.senderEmail = senderEmail;
    config.update({
      accessKeyId: keyId,
      region: this.region,
      secretAccessKey: secretAccess,
    });
  }
  private static awsClient: TangosNotifClient;

  private static accessKeyId: string;
  private static region: string = 'us-east-1';
  private static secretAccessKey: string;
  public static fcmServerKey: string;
  public ses: SES = new SES();
  public sns: SNS = new SNS();
}
