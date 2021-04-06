Sometimes you can experience growing latency of message processing inside the rule-engine. Here are the steps you can take to discover the reason for the issue:
- Check if there are timeouts in [Rule Engine Statistics Dashboard](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-engine-statistics). Timeouts in rule-nodes slow down the processing of the queue and can lead to latency.

- [Check CPU usage](#cpumemory-usage) for the following services:
    - ThingsBoard services (tb-nodes, tb-rule-engine and tb-core nodes, transport nodes). High CPU load on some services means that you need to scale up that part of the system.
    - PostgreSQL and pgpool (if you are in <b>high-availability</b> mode). High load on Postgres can lead to slow processing of all Postgres-related rule-nodes (saving attributes, reading attributes etc), and the system in general.
    - Cassandra (if you are using Cassandra as storage for timeseries data). High load on Cassandra can lead to slow processing of all Cassandra-related rule-nodes (saving timeseries etc).
    - Queue. Regardless of the queue type, make sure that it always has enough resources.

- Check [consumer-group lag](#consumer-group-message-lag-for-kafka-queue) (if you are using Kafka as queue).

- Enable [Message Pack Processing Log](#message-pack-processing-log). It will allow you to see the name of the slowest rule-node.

- Separate your use-cases by different queues. If some group of your devices should be processed separately from other devices, you should [configure](/docs/{{docsPrefix}}user-guide/device-profiles/#queue-name) the separate rule-engine queue for this group. Also, you can just separate messages based on some logic to different queues inside of the Root rule-engine. By doing this you guaranty that slow processing of one use-case will not affect the processing of the other use-case.

