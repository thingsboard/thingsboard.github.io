External nodes are the integration components of ThingsBoard's rule engine that send messages to third-party services and external systems.

These nodes publish or transmit data to destinations outside ThingsBoard, including cloud platforms (AWS, Azure, GCP), messaging systems (MQTT, Kafka, RabbitMQ), 
communication services (email, SMS, Slack), AI services, and REST APIs.

This allows rule chains to integrate with external infrastructure and services as part of automated workflows.

- [AI request](/docs/user-guide/rule-engine-2-0/nodes/external/ai-request) — sends a request to a large language model with customizable prompts and optional file attachments, returning the AI-generated response as the outgoing message data.
- [aws lambda](/docs/user-guide/rule-engine-2-0/nodes/external/aws-lambda) — invokes AWS Lambda function with incoming message data as the payload and returns the function's response as outgoing message data.
- [aws sns](/docs/user-guide/rule-engine-2-0/nodes/external/aws-sns) — publishes incoming message data to AWS SNS topic and returns response metadata in the outgoing message.
- [aws sqs](/docs/user-guide/rule-engine-2-0/nodes/external/aws-sqs) — publishes incoming message data to AWS Simple Queue Service (SQS) queue and returns response metadata in the outgoing message.
- [azure iot hub](/docs/user-guide/rule-engine-2-0/nodes/external/azure-iot-hub) — Node will send full Message payload to the Azure IoT Hub device.
- [gcp pubsub](/docs/user-guide/rule-engine-2-0/nodes/external/gcp-pubsub) — publishes incoming message data to [Google Cloud Pub/Sub](https://cloud.google.com/pubsub){:target="_blank"} topic and return response metadata in the outgoing message.
- [kafka](/docs/user-guide/rule-engine-2-0/nodes/external/kafka) — publishes messages to [Apache Kafka](https://kafka.apache.org/){:target="_blank"} topic, sending the incoming message data as the record value.
- [mqtt](/docs/user-guide/rule-engine-2-0/nodes/external/mqtt) — publishes incoming message data to an external MQTT broker using QoS 1 (at least once), with support for dynamic topic patterns, multiple authentication methods, and TLS/SSL encryption.
- [rabbitmq](/docs/user-guide/rule-engine-2-0/nodes/external/rabbitmq) — publishes messages to [RabbitMQ](https://www.rabbitmq.com/){:target="_blank"} exchanges, sending the incoming message data as the message body.
- [rest api call](/docs/user-guide/rule-engine-2-0/nodes/external/rest-api-call) — Invoke REST API calls to the external REST server.
- [send email](/docs/user-guide/rule-engine-2-0/nodes/external/send-email) — Node sends incoming message using configured Mail Server.
- [send notification](/docs/user-guide/rule-engine-2-0/nodes/external/send-notification) — The node can send notification to recipients group using the template.
- [send sms](/docs/user-guide/rule-engine-2-0/nodes/external/send-sms) — Node is able to construct SMS message based on the metadata fields from the incoming message and send it using AWS SNS or Twilio SMS providers.
- [send to slack](/docs/user-guide/rule-engine-2-0/nodes/external/send-to-slack) — The node create a message based on the incoming data and metadata, and send it via Slack to a public channel, private channel or direct message.
- <span class="item-pe product-label-padding">[twilio sms](/docs/user-guide/rule-engine-2-0/nodes/external/twilio-sms)</span> — Sends incoming message payload as SMS message via Twilio service.
- <span class="item-pe product-label-padding">[twilio voice](/docs/user-guide/rule-engine-2-0/nodes/external/twilio-voice)</span> — Sends voice message via Twilio.
