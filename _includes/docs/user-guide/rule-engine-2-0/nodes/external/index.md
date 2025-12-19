External nodes are the integration components of ThingsBoard's rule engine that send messages to third-party services and external systems.

These nodes publish or transmit data to destinations outside ThingsBoard, including cloud platforms (AWS, Azure, GCP), messaging systems (MQTT, Kafka, RabbitMQ), 
communication services (email, SMS, Slack), AI services, and REST APIs.

This allows rule chains to integrate with external infrastructure and services as part of automated workflows.

- [AI request](/docs/user-guide/rule-engine-2-0/nodes/external/ai-request) — sends a request to a large language model with customizable prompts and optional file attachments, returning the AI-generated response as the outgoing message data.
- [aws lambda](/docs/user-guide/rule-engine-2-0/nodes/external/aws-lambda) — invokes AWS Lambda function with incoming message data as the payload and returns the function's response as outgoing message data.
- [aws sns](/docs/user-guide/rule-engine-2-0/nodes/external/aws-sns) — publishes incoming message data to AWS SNS topic and returns response metadata in the outgoing message.
- [aws sqs](/docs/user-guide/rule-engine-2-0/nodes/external/aws-sqs) — publishes incoming message data to AWS Simple Queue Service (SQS) queue and returns response metadata in the outgoing message.
- [azure iot hub](/docs/user-guide/rule-engine-2-0/nodes/external/azure-iot-hub) — publishes incoming message data to [Azure IoT Hub](https://azure.microsoft.com/en-us/products/iot-hub) using MQTT protocol with QoS 1 and support for SAS token and X.509 certificate authentication.
- [gcp pubsub](/docs/user-guide/rule-engine-2-0/nodes/external/gcp-pubsub) — publishes incoming message data to [Google Cloud Pub/Sub](https://cloud.google.com/pubsub){:target="_blank"} topic and return response metadata in the outgoing message.
- [kafka](/docs/user-guide/rule-engine-2-0/nodes/external/kafka) — publishes messages to [Apache Kafka](https://kafka.apache.org/){:target="_blank"} topic, sending the incoming message data as the record value.
- [mqtt](/docs/user-guide/rule-engine-2-0/nodes/external/mqtt) — publishes incoming message data to an external MQTT broker using QoS 1 (at least once), with support for dynamic topic patterns, multiple authentication methods, and TLS/SSL encryption.
- [rabbitmq](/docs/user-guide/rule-engine-2-0/nodes/external/rabbitmq) — publishes messages to [RabbitMQ](https://www.rabbitmq.com/){:target="_blank"} exchanges, sending the incoming message data as the message body.
- [rest api call](/docs/user-guide/rule-engine-2-0/nodes/external/rest-api-call) — sends HTTP requests to external endpoints using configurable methods, authentication, and proxy settings, returning the response as outgoing message data.
- [send email](/docs/user-guide/rule-engine-2-0/nodes/external/send-email) — sends email messages via SMTP server with support for TLS encryption and proxy configuration.
- [send notification](/docs/user-guide/rule-engine-2-0/nodes/external/send-notification) — sends notifications to specified recipients using notification templates through the [notification center](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"}.
- [send sms](/docs/user-guide/rule-engine-2-0/nodes/external/send-sms) — sends SMS messages to specified phone numbers via AWS SNS, Twilio, or SMPP providers with templatization support.
- [send to slack](/docs/user-guide/rule-engine-2-0/nodes/external/send-to-slack) — sends messages to [Slack](https://slack.com/){:target="_blank"} public channels, private channels, or direct messages via Slack API.
- <span class="item-pe product-label-padding">[twilio sms](/docs/user-guide/rule-engine-2-0/nodes/external/twilio-sms)</span> — sends incoming message data as SMS to specified phone numbers via [Twilio](https://www.twilio.com/messaging/channels/sms){:target="_blank"}.
- <span class="item-pe product-label-padding">[twilio voice](/docs/user-guide/rule-engine-2-0/nodes/external/twilio-voice)</span> — sends incoming message data as voice messages to specified phone numbers via [Twilio](https://www.twilio.com/voice){:target="_blank"} text-to-speech service.
