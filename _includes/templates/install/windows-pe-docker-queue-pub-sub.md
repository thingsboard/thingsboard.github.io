{% include templates/install/queue-pub-sub-config.md %}

Create docker compose file for ThingsBoard queue service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace “YOUR_PROJECT_ID”, "YOUR_SERVICE_ACCOUNT" with your **real Pub/Sub project id, and service account (it is whole data from json file), and "PUT_YOUR_LICENSE_SECRET_HERE" with your **license secret obtained on the first step**:

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
      TB_QUEUE_TYPE: pubsub
      TB_QUEUE_PUBSUB_PROJECT_ID: YOUR_PROJECT_ID
      TB_QUEUE_PUBSUB_SERVICE_ACCOUNT: YOUR_SERVICE_ACCOUNT
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
    volumes:
      - mytbpe-data:/data
      - mytbpe-logs:/var/log/thingsboard
```
{: .copy-code}
