* TOC 
{:toc}

MQTT Based Authentication is available for devices that connect using MQTT.
You may change the device credential type from 'Access Token' to 'MQTT Basic'.
Basic MQTT credentials consist of the optional client id, username and password. There are three options available:

#### Authentication based on Client ID only. 

For this purpose, you should populate only Client ID in the credentials form below.
MQTT Clients will be able to connect with any username or password if they specify correct Client ID;

Let's review a simple command to upload temperature readings using MQTT Client Id to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -m {"temperature":25}
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**.
Don't forget to replace:

 * **YOUR_TB_HOST** with the host of your ThingsBoard instance;
 * **YOUR_CLIENT_ID** with your client id;

#### Authentication based on Username and Password. 

For this purpose, you should populate only Username and Password in the credentials form below.
MQTT Clients will be able to connect with any client ID if they specify correct Username and Password. Password is optional;

Let's review a simple command to upload temperature readings using MQTT Client username and password to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" \
-t "v1/devices/me/telemetry" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**.
Don't forget to replace:

 * **YOUR_TB_HOST** with the host of your ThingsBoard instance;
 * **YOUR_CLIENT_USERNAME/YOUR_CLIENT_PASSWORD** with your client username and password;

#### Authentication based on Client ID, Username and Password. 

For this option, you should populate Client ID, Username and Password.
MQTT Clients will be able to connect if they specify correct combination of Client ID, Username and Password;

Let's review a simple command to upload temperature readings using MQTT Client ID, username and password to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" \
-t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**.
Don't forget to replace:

 * **YOUR_TB_HOST** with the host of your ThingsBoard instance;
 * **YOUR_CLIENT_ID** with your client id;
 * **YOUR_CLIENT_USERNAME/YOUR_CLIENT_PASSWORD** with your client username and password;

{% include images-gallery.html imageCollection="options" %}

#### MQTTS (MQTT over TLS)

One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
ThingsBoard Team has already provisioned a valid certificate for [ThingsBoard Cloud](https://thingsboard.cloud/signup).
Follow the [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/) guide to provision server certificate if you are hosting your own ThingsBoard instance.

Once provisioned, you should prepare a certificate chain in pem format. This chain will be used by mqtt client to validate the server certificate.
Save the chain to your working directory as "**tb-server-chain.pem**".
An example of certificate chain for *mqtt.thingsboard.cloud* is located [here](/docs/paas/user-guide/resources/mqtt-over-ssl/tb-server-chain.pem).

Now you may use the *tb-server-chain.pem* to setup a secure connection to your ThingsBoard instance (*YOUR_TB_HOST*) to upload telemetry:
```bash
mosquitto_pub --cafile tb-server-chain.pem -d -q 1 -h "YOUR_TB_HOST" -p "8883" \
-t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**.
Don't forget to replace:

 * **YOUR_TB_HOST** with the host of your ThingsBoard instance;
 * **YOUR_CLIENT_ID** with your client id;
 * **YOUR_CLIENT_USERNAME/YOUR_CLIENT_PASSWORD** with your client username and password;
