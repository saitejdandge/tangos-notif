export class SMSClient {
  private static smsClient: SMSClient;
  public static isSMSServiceEnabled: boolean = true;

  private static senderId: string;
  private static username: string;
  public static password: string;

  public static getInstance(): SMSClient {
    if (SMSClient.smsClient == null) {
      if (this.senderId == null || this.username == null || this.password == null) {
        throw new Error('Please call SMSClient.initConfig() method before using its instance');
      } else {
        this.smsClient = new SMSClient();
      }
    }
    return this.smsClient;
  }

  public static initConfig(senderId: string, username: string, password: string) {
    this.senderId = senderId;
    this.username = username;
    this.password = password;
  }

  public buildSMSStrikerURL(mobileNumber: string, content: string): string {
    return 'https://sms.office24by7.com/API/sms.php?username=' + SMSClient.username + '&password=' + SMSClient.password + '&from=' + SMSClient.senderId + '&to=' + mobileNumber + '&msg=' + content + '&type=1';
  }
}
