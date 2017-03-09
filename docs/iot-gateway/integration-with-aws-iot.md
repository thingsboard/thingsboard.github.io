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

#### Custom Endpoint URL of the AWS IoT

First, you'll need to get Custom Endpoint URL of the **AWS IoT** that we'll use to publish messages to MQTT topics.

This URL is located in the **AWS IoT** *Setting* page:

![image](/images/gateway/aws-iot/mqtt-url.png)

We'll refer later to this URL as **"$MQTT_ENDPOINT"**.

#### AWS IoT certificates

Second, we'll need to download certificates from **AWS IoT** and copy them beside Thingsboard **IoT Gateway** in the configuration folder:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/tb-gateway/conf
```

You can put it inside *conf* folder or create new sub-folder *cert* for example.

![image](/images/gateway/aws-iot/aws-certificate-creation.png)

We need to copy private key (**2f3b7147dd.private.key** in the example), certificate (**2f3b7147dd.cert.pem** in the example) and root CA certificate that you are able to download from Symantec.

Please copy these three PEM files to configuration folder of Thingsboard **IoT Gateway** as described above.

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
"host": "$MQTT_ENDPOINT",
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
    "caCert" : "/etc/tb-gateway/conf/cert/rootCA.pem",
    "privateKey" : "/etc/tb-gateway/conf/cert/privateKey.pem",
    "cert" : "/etc/tb-gateway/conf/cert/cert.pem"
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