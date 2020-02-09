import { config, SES } from 'aws-sdk';

export class AWSSESClient {
  private static awsClient: AWSSESClient;
  public ses: SES = new SES();
  public static isEmailServiceEnabled: boolean = true;

  private static accessKeyId: string;
  private static region: string = 'us-east-1';
  private static secretAccessKey: string;
  public static senderEmail: string;

  public static getInstance(): AWSSESClient {
    if (AWSSESClient.awsClient == null) {
      if (this.accessKeyId == null || this.secretAccessKey == null || this.senderEmail == null) {
        throw new Error('Please call AWSSESClient.initConfig() method before using its instance');
      } else {
        this.awsClient = new AWSSESClient();
      }
    }
    return this.awsClient;
  }

  public static initConfig(keyId: string, secretAccess: string, senderEmail: string) {
    this.accessKeyId = keyId;
    this.secretAccessKey = secretAccess;
    this.senderEmail = senderEmail;
    config.update({
      accessKeyId: keyId,
      region: this.region,
      secretAccessKey: secretAccess,
    });
  }
}
