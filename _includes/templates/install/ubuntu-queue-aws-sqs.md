#### Aws Sqs Configuration

To access AWS SQS service, you first need to create an [AWS account](https://aws.amazon.com/sqs/).

To work with AWS SQS service you will need to create your next credentials using [this instruction](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html):
- Access key ID
- Secret access key

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don’t forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region:**

```bash
export TB_QUEUE_TYPE=aws-sqs
export TB_QUEUE_AWS_SQS_ACCESS_KEY_ID=YOUR_KEY
export TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY=YOUR_SECRET
export TB_QUEUE_AWS_SQS_REGION=YOUR_REGION
```
