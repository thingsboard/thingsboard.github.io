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

The following params affect the **number of requests** per second from each partitions per each queue, make sure the next params have the correct values:

```yml
queue:
...
  transport_api:
    request_poll_interval: "${TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS:1000}"
    response_poll_interval: "${TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS:1000}"
...
  core:
    poll-interval: "${TB_QUEUE_CORE_POLL_INTERVAL_MS:1000}"
...
  js:
    response_poll_interval: "${REMOTE_JS_RESPONSE_POLL_INTERVAL_MS:1000}"
...
  rule-engine:
    poll-interval: "${TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS:1000}"
...
    queues:
        poll-interval: "${TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS:1000}"
        poll-interval: "${TB_QUEUE_RE_HP_POLL_INTERVAL_MS:1000}"
        poll-interval: "${TB_QUEUE_RE_SQ_POLL_INTERVAL_MS:1000}"
...
  transport:
    poll_interval: "${TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS:1000}"
```
