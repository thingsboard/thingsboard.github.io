{% include templates/install/queue-aws-sqs-config.md %}

Create docker compose file for ThingsBoard queue service:

```text
sudo nano docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace "YOUR_KEY", "YOUR_SECRET" with your **real AWS SQS IAM user credentials** and "YOUR_REGION" with your **real AWS SQS account region**, and "PUT_YOUR_LICENSE_SECRET_HERE" with your **license secret obtained on the first step**:

```yml
version: '2.2'
services:
  mytbpe:
    restart: always
    image: "store/thingsboard/tb-pe:2.5.0PE"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      TB_QUEUE_TYPE: aws-sqs
      TB_QUEUE_AWS_SQS_ACCESS_KEY_ID: YOUR_KEY
      TB_QUEUE_AWS_SQS_SECRET_ACCESS_KEY: YOUR_SECRET
      TB_QUEUE_AWS_SQS_REGION: YOUR_REGION
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
    volumes:
      - ~/.mytbpe-data:/data
      - ~/.mytbpe-logs:/var/log/thingsboard
```
{: .copy-code}
