#### Aws Sqs Configuration

To access AWS SQS service, you first need to create an [AWS account](https://aws.amazon.com/sqs/).

To work with AWS SQS service you will need to get your next credentials using [this instruction](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html):
- Access key ID
- Secret access key
- region

You will need to change following Queue type parameter in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
  type: "${TB_QUEUE_TYPE:aws-sqs}"
```

Add your credentials in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml).  Don’t forget to replace "YOUR_KEY", "YOUR_SECRET", "YOUR_REGION" with your **real AWS SQS user credentials:**

```bash
queue:
...
  aws_sqs:
    access_key_id: "${TB_QUEUE_AWS_SQS_ACCESS_KEY_ID:YOUR_KEY}"
    secret_access_key: "${TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY:YOUR_SECRET}"
    region: "${TB_QUEUE_AWS_SQS_REGION:YOUR_REGION}"
```

If need you can configure default AWS SQS parameters in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
...
  aws_sqs:
...
    threads_per_topic: "${TB_QUEUE_AWS_SQS_THREADS_PER_TOPIC:1}"
    queue-properties:
      rule-engine: "${TB_QUEUE_AWS_SQS_RE_QUEUE_PROPERTIES:VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800}"
      core: "${TB_QUEUE_AWS_SQS_CORE_QUEUE_PROPERTIES:VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800}"
      transport-api: "${TB_QUEUE_AWS_SQS_TA_QUEUE_PROPERTIES:VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800}"
      notifications: "${TB_QUEUE_AWS_SQS_NOTIFICATIONS_QUEUE_PROPERTIES:VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800}"
      js-executor: "${TB_QUEUE_AWS_SQS_JE_QUEUE_PROPERTIES:VisibilityTimeout:30;MaximumMessageSize:262144;MessageRetentionPeriod:604800}"
      #    VisibilityTimeout in seconds;MaximumMessageSize in bytes;MessageRetentionPeriod in seconds
```
