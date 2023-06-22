<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>kafka.bootstrap.servers</td>
          <td>TB_KAFKA_SERVERS</td>
          <td>localhost:9092</td>
          <td>Kafka Bootstrap Servers</td>
      </tr>
      <tr>
          <td>kafka.replication_factor</td>
          <td>TB_QUEUE_KAFKA_REPLICATION_FACTOR</td>
          <td>1</td>
          <td></td>
      </tr>
      <tr>
          <td>kafka.acks</td>
          <td>TB_KAFKA_ACKS</td>
          <td>1</td>
          <td>-1 = all; 0 = no acknowledgments; 1 = only waits for the leader to acknowledge</td>
      </tr>
      <tr>
          <td>kafka.batch_size</td>
          <td>TB_KAFKA_BATCH_SIZE</td>
          <td>128</td>
          <td>for producer</td>
      </tr>
      <tr>
          <td>kafka.linger_ms</td>
          <td>TB_KAFKA_LINGER_MS</td>
          <td>5</td>
          <td>for producer</td>
      </tr>
      <tr>
          <td>kafka.partitions_consumed_concurrently</td>
          <td>TB_KAFKA_PARTITIONS_CONSUMED_CONCURRENTLY</td>
          <td>1</td>
          <td>(EXPERIMENTAL) increase this value if you are planning to handle more than one partition (scale up, scale down) - this will decrease the latency</td>
      </tr>
      <tr>
          <td>kafka.requestTimeout</td>
          <td>TB_QUEUE_KAFKA_REQUEST_TIMEOUT_MS</td>
          <td>30000</td>
          <td>The default value in kafkajs is: 30000</td>
      </tr>
      <tr>
          <td>kafka.connectionTimeout</td>
          <td>TB_KAFKA_CONNECTION_TIMEOUT_MS</td>
          <td>1000</td>
          <td>The default value in kafkajs is: 1000</td>
      </tr>
      <tr>
          <td>kafka.compression</td>
          <td>TB_QUEUE_KAFKA_COMPRESSION</td>
          <td>gzip</td>
          <td>gzip or uncompressed</td>
      </tr>
      <tr>
          <td>kafka.topic_properties</td>
          <td>TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES</td>
          <td>retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600;partitions:100;min.insync.replicas:1</td>
          <td></td>
      </tr>
      <tr>
          <td>kafka.use_confluent_cloud</td>
          <td>TB_QUEUE_KAFKA_USE_CONFLUENT_CLOUD</td>
          <td>false</td>
          <td></td>
      </tr>
      <tr>
          <td>kafka.client_id</td>
          <td>KAFKA_CLIENT_ID</td>
          <td>kafkajs</td>
          <td>inject pod name to easy identify the client using /opt/kafka/bin/kafka-consumer-groups.sh</td>
      </tr>
      <tr>
          <td>kafka.confluent.sasl.mechanism</td>
          <td>TB_QUEUE_KAFKA_CONFLUENT_SASL_MECHANISM</td>
          <td>PLAIN</td>
          <td></td>
      </tr>
      <tr>
          <td>kafka.confluent.username</td>
          <td>TB_QUEUE_KAFKA_CONFLUENT_USERNAME</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>kafka.confluent.password</td>
          <td>TB_QUEUE_KAFKA_CONFLUENT_PASSWORD</td>
          <td></td>
          <td></td>
      </tr>
  </tbody>
</table>
