{% include templates/install/queue-aws-sqs-config.md %}

##### ThingsBoard Configuration

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "aws-sqs", and don't forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region:**

```yml
queue:
  type: "${TB_QUEUE_TYPE:aws-sqs}"
...
  aws_sqs:
    access_key_id: "${TB_QUEUE_AWS_SQS_ACCESS_KEY_ID:YOUR_KEY}"
    secret_access_key: "${TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY:YOUR_SECRET}"
    region: "${TB_QUEUE_AWS_SQS_REGION:YOUR_REGION}"
```

