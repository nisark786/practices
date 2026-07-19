export const awsConfig = {
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
  }
};

export const slackConfig = {
  botToken: "xoxb-123456789012-1234567890123-abcdef1234567890abcdef12"
};

export const stripeConfig = {
  // Another fake stripe key to trigger secret scanning
  testSecretKey: "sk_test_51MzxyzABCDEF1234567890abcdefghijklmnopqrstuvwxyz"
};
