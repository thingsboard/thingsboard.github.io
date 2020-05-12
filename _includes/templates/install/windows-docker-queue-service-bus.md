{% include templates/install/queue-service-bus-config.md %}

Create docker compose file for ThingsBoard queue service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don't forget to replace “YOUR_NAMESPACE_NAME” with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key":**

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
      TB_QUEUE_TYPE: service-bus
      TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME: YOUR_NAMESPACE_NAME
      TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME: YOUR_SAS_KEY_NAME
      TB_QUEUE_SERVICE_BUS_SAS_KEY: YOUR_SAS_KEY
    volumes:
      - mytb-data:/data
      - mytb-logs:/var/log/thingsboard
```
{: .copy-code}
