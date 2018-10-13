import aws from 'aws-sdk';

aws.config.region = process.env.AWS_S3_REGION;

aws.config.update({
  accessKeyId: process.env.AWS_S3_ACS_KEY,
  secretAccessKey: process.env.AWS_S3_SEC_KEY
});

export default aws;