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

# These params affect the number of requests per second from each partitions per each queue!!!
export TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS=1000
export TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS=1000
export TB_QUEUE_CORE_POLL_INTERVAL_MS=1000
export REMOTE_JS_RESPONSE_POLL_INTERVAL_MS=1000
export TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_HP_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_SQ_POLL_INTERVAL_MS=1000
export TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS=1000
```
{: .copy-code}
