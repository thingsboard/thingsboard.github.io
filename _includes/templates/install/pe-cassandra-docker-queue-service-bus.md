{% include templates/install/queue-service-bus-config.md %}

```text
nano tb-node.env
```
{: .copy-code}

Add the following line to the file. Don't forget to replace “YOUR_NAMESPACE_NAME” with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key"**:

```bash
TB_QUEUE_TYPE: service-bus
TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME: YOUR_NAMESPACE_NAME
TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME: YOUR_SAS_KEY_NAME
TB_QUEUE_SERVICE_BUS_SAS_KEY: YOUR_SAS_KEY
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