
* TOC
{:toc}

The evolution of front-end capabilities has given rise to advanced browser functionalities, 
significantly enhancing user interaction and data communication over the web. 
Central to this advancement is the WebSocket, a robust communications protocol that has redefined real-time, bi-directional communication in web applications.

Simultaneously, MQTT is renowned for its lightweight structure and reliability, particularly in constrained environments and over unstable networks. 
The protocol has become the cornerstone for message transmission in IoT ecosystems. 
Its suitability for low-overhead message delivery aligns perfectly with the need for efficient web communication. 
This is especially true for mobile devices and in scenarios requiring immediate data exchange, such as sensor data monitoring or receiving critical notifications.

The integration of MQTT over WebSocket is not merely a technological combination but a transformative approach to network communications.
It enables MQTT messages to be sent and received directly through browsers, leveraging the unique strengths of both MQTT and WebSocket.
This synergy opens up possibilities, from displaying live device information and receiving real-time alerts to efficient communication in mobile web applications.

### Defining the WebSocket

WebSocket is a communication protocol enabling real-time, bi-directional communication between a web client and a server over a single, long-lived TCP connection. 
It differs significantly from the traditional HTTP request/response model by allowing continuous data exchange with lower latency. 
Initiated through an HTTP upgrade handshake, it supports both unencrypted (ws://) and encrypted (wss://) connections. 
WebSocket is essential for web applications requiring live content updates due to its efficient and persistent communication channel.

### Benefits of using MQTT over WebSocket

The integration of MQTT with WebSocket offers significant advantages for web-based IoT applications. 
By utilizing MQTT over WebSocket, the traditionally non-web MQTT protocol is effectively extended into the web application area. 
This adaptation is necessary because web browsers do not natively support MQTT, thus necessitating the use of WebSocket as a bridge to facilitate communication.

Let's outline several key aspects of this combination:

* **Efficient Resource Utilization**: MQTT is a lightweight protocol, making it ideal for scenarios with limited bandwidth or device capabilities. 
When used over WebSocket, it ensures efficient use of network and device resources in the context of web applications.
* **Real-Time Communication**: WebSocket provides a continuous connection, enabling real-time data exchange with low latency.
* **Bi-Directional Communication**: WebSocket supports full-duplex communication, allowing simultaneous data transmission in both directions. 
This feature, combined with MQTT's publish/subscribe model, enables dynamic and interactive communication scenarios.
* **Compatibility with Web Ecosystem**: By using MQTT over WebSocket, the protocol becomes compatible with the web browser security model, facilitating its integration into web applications without additional plugins or special arrangements.
* **Supports MQTT Features**: The integration does not compromise MQTT's native features like retained messages, last will and testament, and clean session, ensuring robust and feature-rich implementations.

### MQTT over WebSocket in TBMQ

TBMQ utilizes two listeners, WS (WebSocket) and WSS (WebSocket Secure), to facilitate communication over WebSocket. 
You can refer to the overview of these listeners provided [here](/docs/mqtt-broker/security/#ws-listener).

{% capture difference %}
**Note:** For existing deployments prior v1.3.0, it's essential to update configuration files to enable WebSocket communication. 
For instance, in an AWS deployment, additional port(s) must be opened on the AWS Load Balancer. 
To address this, pull the latest configuration files or update existing ones to incorporate the necessary changes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

For detailed WebSocket-related parameters, please refer to the provided [link](/docs/mqtt-broker/install/config/#mqtt-listeners-parameters) 
(locate `LISTENER_WS_ENABLED` and related environment variables).

### Getting started

In this guide, we present an illustrative example of how to establish MQTT over WebSocket connection to a TBMQ, subscribe to a specific topic, and exchange messages using the [MQTT.js](https://github.com/mqttjs/MQTT.js) library.

#### Installing TBMQ

Before we delve in, make sure the TBMQ is successfully installed.
To obtain detailed instructions on how to install TBMQ on different platforms, we recommend exploring the [Installation options](/docs/mqtt-broker/install/installation-options/) documentation.

For this guide, we will follow the below instructions for quick TBMQ installation.

{% capture contenttogglespec %}
Linux & Mac OS%,%linuxmacos%,%templates/mqtt-broker/install/linux-macos/linux-macos.md%br%
Windows%,%windows%,%templates/mqtt-broker/install/windows/windows.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tbmqGettingStartedInstallation" toggle-spec=contenttogglespec %}

#### Installing MQTT WebSocket client

To install MQTT.js, ensure you have the Node.js runtime environment installed on your machine. 
Follow the guide below for instructions on [installing Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

Once Node.js is installed, you can use either the `npm` or `yarn` command to install the MQTT.js library.

```bash
npm install mqtt --save
```
{: .copy-code}

```bash
yarn add mqtt
```
{: .copy-code}

You might want to install packages globally.
This can be done by adding '-g' flag to the installation command with npm and 'global' option for yarn.

```bash
npm install -g mqtt
```
{: .copy-code}

```bash
yarn global add mqtt
```
{: .copy-code}

Note that global installations should be used judiciously as they can lead to version conflicts.

#### Connecting the client

We suggest consulting the [MQTT.js documentation](https://github.com/mqttjs/MQTT.js?tab=readme-ov-file#api) for comprehensive information on connection options, 
subscribing to topics, and publishing messages with this library.

{% capture difference %}
**Note**: The username 'tbmq_websockets_username' corresponds to the default MQTT client credentials integrated into the system, 
specifically tailored for WebSocket client functionality.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

```javascript
const mqtt = require('mqtt');

const url = 'ws://localhost:8084/mqtt';
const topic = 'sensors/temperature';
const message = 'Hello World';

const options = {
    clean: true,
    clientId: 'tbmq_websockets_client_id',
    username: 'tbmq_websockets_username',
    password: null
};

console.log('Connecting client...');

const client = mqtt.connect(url, options); // connect client

client.on('connect', function () {
    console.log('Client connected!');
    client.subscribe(topic, function (error) { // subscribe to a topic
        if (!error) {
            client.publish(topic, message); // publish a message
        }
    });
});

client.on('message', (topic, message) => { // handle received messages
    console.log(`Received message. Payload: ${message.toString()}. Topic: ${topic}`);
    client.end(); // end client session
});

client.on('error', (error) => { // handle errors
    console.log('Error: ', error?.message);
});

client.on('packetreceive', (packet) => { // handle received packet
    console.log('Packet receive...', packet);
});

client.on('packetsend', (packet) => { // handle sent packet
    console.log('Packet send...', packet);
});

client.on('reconnect', () => {
    console.log('Reconnecting...');
});

client.on('close', () => {
    console.log('Closing client...');
});
```
{: .copy-code}

Please save the provided code to a file named `ws_example.js` and then execute it.

```bash
node ws_example.js
```
{: .copy-code}

The provided example establishes a WebSocket client, connecting it to TBMQ. 
Upon successful connection, the client subscribes to the 'sensors/temperature' topic. 
Following a successful subscription, the client publishes a message to the same topic. 
Subsequently, upon receiving this message, the client disconnects, effectively closing the connection.

Here is the output from executing the ws_example.js file:

```text
Connecting client...
Packet receive... Packet {
  cmd: 'connack',
  retain: false,
  qos: 0,
  dup: false,
  length: 2,
  topic: null,
  payload: null,
  sessionPresent: false,
  returnCode: 0
}
Client connected!
Packet send... {
  cmd: 'subscribe',
  subscriptions: [ { topic: 'sensors/temperature', qos: 0 } ],
  messageId: 64109
}
Packet receive... Packet {
  cmd: 'suback',
  retain: false,
  qos: 0,
  dup: false,
  length: 3,
  topic: null,
  payload: null,
  granted: [ 0 ],
  messageId: 64109
}
Packet send... {
  cmd: 'publish',
  topic: 'sensors/temperature',
  payload: 'Hello World',
  qos: 0,
  retain: false,
  messageId: 0,
  dup: false
}
Packet receive... Packet {
  cmd: 'publish',
  retain: false,
  qos: 0,
  dup: false,
  length: 32,
  topic: 'sensors/temperature',
  payload: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
}
Received message. Payload: Hello World. Topic: sensors/temperature
Packet send... { cmd: 'disconnect' }
Closing client...
```

Moreover, you can utilize the [WebSocket client](/docs/mqtt-broker/user-guide/ui/websocket-client/) to subscribe to the topic and receive messages, allowing you to verify the result.
![image](/images/mqtt-broker/ws/ws_example.png)

#### Connection details

The URL `ws://localhost:8084/mqtt` is composed of several components, as detailed below:

* **ws://**: This specifies the WebSocket protocol scheme. It can be either **ws** for unencrypted connections or **wss** for encrypted connections.
* **localhost**: Refers to the hostname of the local machine where the TBMQ is running. This can be replaced with a DNS hostname if applicable.
* **8084**: Indicates the port number on which the WebSocket server is listening for incoming connections.
* **/mqtt**: This is the required path used by TBMQ for MQTT over WebSocket. The choice of '/mqtt' for the path is based on the MQTT specification.

#### MQTT over WebSocket Secure (WSS)

Using MQTT over WebSocket Secure (WSS) in TBMQ offers enhanced security for your data. 
It encrypts communication, making sure that information sent between devices and the broker is protected from unauthorized access.

When using MQTT over WebSocket Secure in TBMQ, it's crucial to understand the difference between certificates signed by well-known Certificate Authorities (CAs) and self-signed certificates. 
Certificates signed by well-known CAs offer a higher level of trust and are widely recognized by clients and browsers. 
This makes them ideal for public-facing applications, as they assure users that the connection is secure and the server is authenticated by a trusted authority.

On the other hand, self-signed certificates can be used for internal or testing purposes. 
While they provide the same level of encryption as CA-signed certificates, they lack the trust endorsement from a recognized CA. 
This means clients might receive security warnings when connecting to the server. 
Self-signed certificates are cost-effective for development or private networks but are not recommended for public or production environments due to trust issues with end users.
{% capture difference %}
If you're utilizing a self-signed certificate for the broker, it's crucial to manually include it within the browser's trust store to ensure seamless connectivity.
This step is essential for [WebSocket client](/docs/mqtt-broker/user-guide/ui/websocket-client/) functionality within the browser environment.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

In summary, for maximum security and user trust in TBMQ, it's best to use certificates signed by well-known CAs for public deployments, 
while self-signed certificates are suitable for internal or development environments.

Two-way authentication, also known as mutual TLS/SSL authentication, involves both the client and the server verifying each other's identity through certificate chains. 
While this is a robust security measure, it poses challenges when implemented in a browser environment using WSS. 
In a typical browser scenario, the server presents its certificate to the client, which the browser checks against a list of trusted CAs. 
This is the standard one-way SSL authentication process.

However, for two-way SSL authentication, the client also needs to present a certificate to the server. 
The challenge in a browser context is that browsers do not universally support client-side certificates for WebSocket connections. 
This lack of support stems from complexities in browser security models and user interfaces, 
which make it challenging to seamlessly implement client-side certificate handling for WSS. 
Moreover, managing client certificates in a browser environment can be cumbersome and poses user experience challenges.

As a result, while two-way authentication is technically possible and highly secure, its practical implementation in browsers using WSS is limited and often not feasible. 
Therefore, for web-based applications using WSS, one-way SSL authentication with additional layers of security, 
like API keys or OAuth tokens, is commonly used to ensure secure communication.

In non-browser environments such as Node.js, and programming languages like Python and Java, when utilizing the appropriate MQTT library, 
two-way authentication functions seamlessly and remains an exceptionally effective security measure.

Let's review the example. Make sure WSS listener is [enabled and configured](/docs/mqtt-broker/security/#wss-listener) properly. 

For establishing a two-way authenticated connection, ensure that the MQTT client credentials of type 'X.509 Certificate Chain' are created, 
with the client certificate Common Name (CN) specified. Refer to [this guide](/docs/mqtt-broker/user-guide/ui/mqtt-client-credentials/#ssl-credentials) for detailed instructions.
Replace `example.com` with your actual DNS and replace `/path/to/your/client/key/file.pem`, `/path/to/your/client/cert/file.pem`,
and `/path/to/your/ca/cert/file.pem` with the respective paths to your certificate files.

Alternatively, if you prefer to authenticate via 'Basic' credentials (one-way auth) in the example below, you can set options.username to 'tbmq_websockets_username' instead of 'null'.
Additionally, you'll need to comment out lines where options are set, such as 'options.key', 'options.cert', and any other related to client certificate lines.

```javascript
const mqtt = require('mqtt');
const fs = require('fs');

const url = 'wss://example.com:8085/mqtt';
const topic = 'sensors/temperature';
const message = 'Hello World';

// File paths
const keyFile = '/path/to/your/client/key/file.pem';
const certFile = '/path/to/your/client/cert/file.pem';
const caFile = '/path/to/your/ca/cert/file.pem';

const options = {
  clean: true,
  clientId: 'tbmq_websockets_client_id',
  username: null,
  password: null
};

try {
  const dataKey = fs.readFileSync(keyFile);
  const dataCert = fs.readFileSync(certFile);
  const dataCa = fs.readFileSync(caFile);

  // Set the certificate and key options
  options.key = dataKey;
  options.cert = dataCert;
  options.ca = dataCa;
  options.rejectUnauthorized = true;

  console.log('Connecting client...');

  const client = mqtt.connect(url, options); // connect client

  client.on('connect', function () {
    console.log('Client connected!');
    client.subscribe(topic, function (error) { // subscribe to a topic
      if (!error) {
        client.publish(topic, message); // publish a message
      }
    });
  });

  client.on('message', (topic, message) => { // handle received messages
    console.log(`Received message. Payload: ${message.toString()}. Topic: ${topic}`);
    client.end(); // end client session
  });

  client.on('error', (error) => { // handle errors
    console.log('Error: ', error?.message);
  });

  client.on('packetreceive', (packet) => { // handle received packet
    console.log('Packet receive...', packet);
  });

  client.on('packetsend', (packet) => { // handle sent packet
    console.log('Packet send...', packet);
  });

  client.on('reconnect', () => {
    console.log('Reconnecting...');
  });

  client.on('close', () => {
    console.log('Closing client...');
  });

} catch (err) {
  console.error('Error reading certificate file:', err);
}
```
{: .copy-code}

Please save the provided code to a file named `wss_example.js` and then execute it.

```bash
node wss_example.js
```
{: .copy-code}

Upon successful execution of the wss.example.js file, you should observe a similar output as for the ws_example.js example.

### Conclusion

In this guide, we explored the powerful combination of MQTT and WebSocket, a solution that enhances IoT communication with efficiency and flexibility. 
We delved into how MQTT over WebSocket provides a real-time, bi-directional communication channel that operates seamlessly in web environments, ensuring data is exchanged swiftly and reliably. 
Emphasizing security, we discussed the implementation of SSL/TLS encryption for secure data transmission and the distinction between certificates signed by well-known CAs and self-signed certificates. 
Additionally, we tackled practical aspects, including code examples and the limitations of two-way authentication in browser environments. 
This guide aims to serve as a comprehensive resource for anyone looking to implement MQTT over WebSocket, ensuring an efficient, secure, and robust IoT communication system.
