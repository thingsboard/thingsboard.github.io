---
layout: docwithnav
assignees:
- vsosliuk
title: X.509 Certificate Based Authentication
description: ThingsBoard  X.509 Certificate based authentication for IoT devices and projects.

---
    
X.509 Certificate Based Authentication is used in Two-Way SSL connection. In this case, the certificate itself is the client's  ID, thus, Access Token is no longer needed.

Instructions below will describe how to generate a client-side certificate and connect to the server that is running MQTT over SSL.
You will need to have the public key of the server certificate in PEM format. 
See [following instructions](/docs/user-guide/mqtt-over-ssl/#self-signed-certificate-generation) for more details on server-side configuration.

#### Update keygen.properties file
 
Open the keygen.properties file, and update the values if needed:

```bash
DOMAIN_SUFFIX="localhost"
ORGANIZATIONAL_UNIT=ThingsBoard
ORGANIZATION=ThingsBoard
CITY=San Francisco
STATE_OR_PROVINCE=CA
TWO_LETTER_COUNTRY_CODE=US

SERVER_KEYSTORE_PASSWORD=server_ks_password
SERVER_KEY_PASSWORD=server_key_password

SERVER_KEY_ALIAS="serveralias"
SERVER_FILE_PREFIX="mqttserver"
SERVER_KEYSTORE_DIR="/etc/thingsboard/conf/"

CLIENT_KEYSTORE_PASSWORD=password
CLIENT_KEY_PASSWORD=password

CLIENT_KEY_ALIAS="clientalias"
CLIENT_FILE_PREFIX="mqttclient"
```

#### Run Client keygen script

Download and launch the [**client.keygen.sh**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/client.keygen.sh) script.

```bash
chmod +x client.keygen.sh
./client.keygen.sh
```

The script outputs the following files:

 - **CLIENT_FILE_PREFIX.jks** - Java Keystore file with the server certificate imported
 - **CLIENT_FILE_PREFIX.nopass.pem** - Client certificate file in PEM format to be used by non-java client 
 - **CLIENT_FILE_PREFIX.pub.pem** - Client public key

#### Provision Client Public Key as Device Credentials

Go to **ThingsBoard Web UI -> Devices -> Your Device -> Device Credentials**. Select **X.509 Certificate** device credentials, insert the contents of  **CLIENT_FILE_PREFIX.pub.pem** file and click save.
Alternatively, the same can be done through the REST API.

#### Run Two-Way MQTT SSL Python Client

Download Python client example [**two-way-ssl-mqtt-client.py**](/docs/user-guide/resources/mqtt-over-ssl/two-way-ssl-mqtt-client.py).

**Note** Script uses **8883** MQTT port and requires paho-mqtt library that you can install using the following command: **pip3 install paho-mqtt**

Run the script and follow steps in console:

{% capture tabspec %}mqtt-ssl-configuration-twoway
A,Run command,shell,resources/mqtt-ssl-configuration-run-twowaysslmqttclient.sh,/docs/user-guide/resources/mqtt-ssl-configuration-run-twowaysslmqttclient.sh{% endcapture %}
{% include tabs.html %}  

If everything was configured correctly, the output should be like:

{% capture tabspec %}mqtt-ssl-configuration-output-twoway
A,Result,shell,resources/mqtt-ssl-configuration-twowaysslmqttclient-output.txt,/docs/user-guide/resources/mqtt-ssl-configuration-twowaysslmqttclient-output.txt{% endcapture %}
{% include tabs.html %}


To run Java client, import **CLIENT_FILE_PREFIX.jks** file as follows:

{% capture tabspec %}mqtt-ssl-java-twoway-client
A,MqttSslClient.java,java,resources/MqttSslClient.java,/docs/user-guide/resources/MqttSslClient.java{% endcapture %}
{% include tabs.html %}