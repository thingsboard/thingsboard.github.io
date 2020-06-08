{% include templates/install/queue-aws-sqs-config.md %}

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don't forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region:**

```bash
export TB_QUEUE_TYPE=aws-sqs
export TB_QUEUE_AWS_SQS_ACCESS_KEY_ID=YOUR_KEY
export TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY=YOUR_SECRET
export TB_QUEUE_AWS_SQS_REGION=YOUR_REGION
```
{: .copy-code}