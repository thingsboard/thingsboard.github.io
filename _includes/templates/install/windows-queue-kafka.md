{% include templates/install/queue-kafka-in-docker.md %}

##### ThingsBoard Configuration

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "kafka", and **don't forget** to replace "localhost:9092" with your real Kafka bootstrap servers:

```yml
queue:
  type: "${TB_QUEUE_TYPE:kafka}"
...
  kafka:
    bootstrap.servers: "${TB_KAFKA_SERVERS:localhost:9092}"
    acks: "${TB_KAFKA_ACKS:all}"
    retries: "${TB_KAFKA_RETRIES:1}"
    batch.size: "${TB_KAFKA_BATCH_SIZE:16384}"
    linger.ms: "${TB_KAFKA_LINGER_MS:1}"
    buffer.memory: "${TB_BUFFER_MEMORY:33554432}"
    replication_factor: "${TB_QUEUE_KAFKA_REPLICATION_FACTOR:1}"
```
