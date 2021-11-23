{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Kafka Integration

Kafka — is an open-source distributed software message broker under the Apache foundation. It is written in the Java and Scala programming languages.

Designed as a distributed, horizontally scalable system that provides capacity growth both with an increase in the number and load from the sources, and the number of subscriber systems. Subscribers can be combined into groups. Supports the ability to temporarily store data for subsequent batch processing.

In some scenarios, Kafka can be used instead of a message queue, in cases where there is no stable connection between the device and an instance.

![image](/images/user-guide/integrations/kafka/Kafka_main.png)

## Choose Kafka type

{% capture installationTypes %}
Kafka<br/><small>Common installation</small>%,%common%,%templates/integration/kafka/kafka-common-installation%br%
Kafka in docker container<br/><small>Separate deployment environment</small>%,%docker%,%templates/integration/kafka/kafka-docker-installation%br%
Confluent Cloud<br/><small>Cloud solution</small>%,%confluent%,%/templates/integration/kafka/kafka-confluent{% endcapture %}

{% include content-toggle.html content-toggle-id="installationType" toggle-spec=installationTypes %}


## Advanced Usage: Kafka Producer (Downlink)

To get functionality such as Kafka Producer, you need to use the [Kafka Rule Node](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/external-nodes/#kafka-node) in which you can specify Bootstrap servers, Topic and other parameters to connect to the Kafka broker:

With this Node, you can send the preprocessed data to the required Kafka topic.


{% capture kafka_note_downnlink %}
**Note**: Using the same broker for uplink and downlink connections can lead to data loops.
{% endcapture %}

{% include templates/info-banner.md content=kafka_note_downnlink %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}