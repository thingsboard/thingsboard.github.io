{% include templates/install/queue-pub-sub-config.md %}

Create docker compose file for ThingsBoard queue service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file):**

```yml
version: '2.2'
services:
  mytb:
    restart: always
    image: "thingsboard/tb-postgres"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      TB_QUEUE_TYPE: pubsub
      TB_QUEUE_PUBSUB_PROJECT_ID: YOUR_PROJECT_ID
      TB_QUEUE_PUBSUB_SERVICE_ACCOUNT: YOUR_SERVICE_ACCOUNT
    volumes:
      - mytb-data:/data
      - mytb-logs:/var/log/thingsboard
```
{: .copy-code}
