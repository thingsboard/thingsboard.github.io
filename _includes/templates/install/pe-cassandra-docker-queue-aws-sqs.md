{% include templates/install/queue-aws-sqs-config.md %}

```text
nano tb-node.env
```
{: .copy-code}

Add the following line to the file. Don’t forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region**:

```bash
TB_QUEUE_TYPE=aws-sqs
TB_QUEUE_AWS_SQS_ACCESS_KEY_ID=YOUR_KEY
TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY=YOUR_SECRET
TB_QUEUE_AWS_SQS_REGION=YOUR_REGION
```
{: .copy-code}

Check docker-compose.yml and configure ports if you need:

```bash
nano docker-compose.yml
```

```bash
services:
  tbpe:
    restart: always
    image: "${DOCKER_REPO}/${TB_NODE_DOCKER_NAME}:${TB_VERSION}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "5683:5683"
```
{: .copy-code}