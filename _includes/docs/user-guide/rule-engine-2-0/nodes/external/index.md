External nodes are the integration components of ThingsBoard's rule engine that send messages to third-party services and external systems.

These nodes publish or transmit data to destinations outside ThingsBoard, including cloud platforms (AWS, Azure, GCP), messaging systems (MQTT, Kafka, RabbitMQ), 
communication services (email, SMS, Slack), AI services, and REST APIs.

This allows rule chains to integrate with external infrastructure and services as part of automated workflows.

- [AI request](/docs/user-guide/rule-engine-2-0/nodes/external/ai-request) — sends a request to a large language model with customizable prompts and optional file attachments, returning the AI-generated response as the outgoing message data.
- [aws lambda](/docs/user-guide/rule-engine-2-0/nodes/external/aws-lambda) — Node publishes messages to AWS Lambda, a service that lets you run code without provisioning or managing servers.
- [aws sns](/docs/user-guide/rule-engine-2-0/nodes/external/aws-sns) — Node publish messages to AWS SNS (Amazon Simple Notification Service).
- [aws sqs](/docs/user-guide/rule-engine-2-0/nodes/external/aws-sqs) — Node publish messages to the AWS SQS (Amazon Simple Queue Service).
- [azure iot hub](/docs/user-guide/rule-engine-2-0/nodes/external/azure-iot-hub) — Node will send full Message payload to the Azure IoT Hub device.
- [gpc pubsub](/docs/user-guide/rule-engine-2-0/nodes/external/gcp-pubsub) — Publish message to the Google Cloud PubSub.
- [kafka](/docs/user-guide/rule-engine-2-0/nodes/external/kafka) — Kafka Node sends messages to Kafka brokers. Expects messages with any message type. Will send record via Kafka producer to Kafka server
- [mqtt](/docs/user-guide/rule-engine-2-0/nodes/external/mqtt) — Publish incoming message payload to the topic of the configured MQTT broker with QoS AT_LEAST_ONCE.
- [rabbbitmq](/docs/user-guide/rule-engine-2-0/nodes/external/rabbitmq) — Publish incoming message payload to the RabbitMQ.
- [rest api call](/docs/user-guide/rule-engine-2-0/nodes/external/rest-api-call) — Invoke REST API calls to the external REST server.
- [send email](/docs/user-guide/rule-engine-2-0/nodes/external/send-email) — Node sends incoming message using configured Mail Server.
- [send notification](/docs/user-guide/rule-engine-2-0/nodes/external/send-notification) — The node can send notification to recipients group using the template.
- [send sms](/docs/user-guide/rule-engine-2-0/nodes/external/send-sms) — Node is able to construct SMS message based on the metadata fields from the incoming message and send it using AWS SNS or Twilio SMS providers.
- [send to slack](/docs/user-guide/rule-engine-2-0/nodes/external/send-to-slack) — The node create a message based on the incoming data and metadata, and send it via Slack to a public channel, private channel or direct message.
- <span class="item-pe product-label-padding">[twilio sms](/docs/user-guide/rule-engine-2-0/nodes/external/twilio-sms)</span> — Sends incoming message payload as SMS message via Twilio service.
- <span class="item-pe product-label-padding">[twilio voice](/docs/user-guide/rule-engine-2-0/nodes/external/twilio-voice)</span> — Sends voice message via Twilio.
