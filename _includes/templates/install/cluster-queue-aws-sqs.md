{% include templates/install/queue-aws-sqs-config.md %}

Configure ThingsBoard environment file:

```text
sudo nano .env
```
{: .copy-code}

Check following line:**

```.env
TB_QUEUE_TYPE=aws-sqs
```
{: .copy-code}

Configure AWS SQS environment file for ThingsBoard queue service:

```text
sudo nano queue-aws-sqs.env
```
{: .copy-code}

Don’t forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region:**

```.env
TB_QUEUE_TYPE=aws-sqs
TB_QUEUE_AWS_SQS_ACCESS_KEY_ID=YOUR_KEY
TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY=YOUR_SECRET
TB_QUEUE_AWS_SQS_REGION=YOUR_REGION

# These params affect the number of requests per second from each partitions per each queue!!!
TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS=1000
TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS=1000
TB_QUEUE_CORE_POLL_INTERVAL_MS=1000
REMOTE_JS_RESPONSE_POLL_INTERVAL_MS=1000
TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_HP_POLL_INTERVAL_MS=1000
TB_QUEUE_RE_SQ_POLL_INTERVAL_MS=1000
TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS=1000
```
{: .copy-code}
