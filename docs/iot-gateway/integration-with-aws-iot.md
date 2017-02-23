---
layout: docwithnav
title: Integration with AWS IOT

---

The Thingsboard **IoT Gateway** is an open-source solution that allows you to integrate devices connected to legacy and third-party systems with Thingsboard.

One of the use cases is to integrate Thingsboard **IoT Gateway** with **AWS IoT**.

### AWS IoT and Thingsboard IoT Gateway Integration

![image](/images/gateway/aws-iot/aws-iot-gateway-integration.png)

### Prerequisites before Gateway configuration

Before configuration of the Thingsboard **IoT Gateway** we must prepare certificates, policies and copy Rest URL from the **AWS IoT** console.

#### URL of the AWS Thing

First, you'll need to get Rest URL of the **AWS IoT** *Thing*.

This URL is located in the *Thing* **AWS IoT** details page, in the **Interact** sub-menu.

![image](/images/gateway/aws-iot/thing-rest-api-endpoint.png)

We'll refer later to this URL as **"$THING_REST_API_ENDPOINT"**.

#### AWS IoT certificates

Second, we'll need to download certificates from **AWS IoT** that are attached to the *Thing* above and copy them beside  Thingsboard **IoT Gateway**.

![image](/images/gateway/aws-iot/aws-certificate-creation.png)

We need to copy private key (**2f3b7147dd.private.key** in the example), certificate (**2f3b7147dd.cert.pem** in the example) and root CA certificate that you are able to download from Symantec.

Please copy these three PEM files to machine where Thingsboard **IoT Gateway** is running.

Later we'll refer to the path where private key PEM file is located as **"$PRIVATE_KEY"**, certificate as **"$CERTIFICATE"** and root CA as **"$ROOT_CA_CERT"**

#### AWS IoT policy configuration

Third, you'll need correctly configure policy.

![image](/images/gateway/aws-iot/aws-policy-config.png)

In the example below we have allowed any IoT action and for any resources, but you definitely can restrict these values based on your security rules.

### Configuration of Thingsboard IoT Gateway Broker

Now it's time to configure Thingsboard **IoT Gateway** broker that will connect to **AWS IoT**.

Configuration of the brokers is located in **mqtt-config.json** file.

You should update it using next values:

```json
"host": "$THING_REST_API_ENDPOINT",
"port": 8883,
"ssl": true,
"retryInterval": 3000,
"credentials": {
    "type": "cert.PEM",
    "caCert" : "$ROOT_CA_CERT",
    "privateKey" : "$PRIVATE_KEY",
    "cert" : "$CERTIFICATE"
}
```

here is sample with real values:

```json
"host": "a2ljyhf3dvidme.iot.us-east-1.amazonaws.com",
"port": 8883,
"ssl": true,
"retryInterval": 3000,
"credentials": {
    "type": "cert.PEM",
    "caCert" : "/home/dev/cert/rootCA.pem",
    "privateKey" : "/home/dev/cert/privateKey.pem",
    "cert" : "/home/dev/cert/cert.pem"
}
```


Configuration of the broker is done. Now you are ready to start Thingsboard **IoT Gateway** and publish messages to **AWS IoT** topics that will be consumed by Thingsboard **IoT Gateway** and republished to **Thingsboard** instance.

### Verification of the configuration

Consider that we have next configuration of the mapping:

```json
{
    "topicFilter": "sensor/+/temperature",
    "converter": {
      "type": "json",
      "filterExpression": "",
      "deviceNameTopicExpression": "(?<=sensor\/)(.*?)(?=\/temperature)",
      "timeseries": [
        {
          "type": "double",
          "key": "temperature",
          "value": "${$.value}"
        }
      ]
    }
}
```

To check that everything is configured correctly you are able to use **mosquitto_pub** tool that is able to publish messages to **AWS IoT**.

Here is a sample of the command that will publish message to topic **sensor/SN-001/temperature** and Thingsboard **IoT Gateway** will create or update device **SN-001** inside **Thingsboard** with an telemetry *'temperature'* using value **73.8**

```bash
mosquitto_pub --cert ./cert/cert.pem --key ./cert/privateKey.pem --cafile ./cert/rootCA.pem -h a2ljyhf3dvipme.iot.us-east-1.amazonaws.com -p 8883 -t sensor/SN-001/temperature -m '{"value":73.8}'
```