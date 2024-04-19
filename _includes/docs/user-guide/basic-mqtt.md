{% if docsPrefix == null %}
{% assign YOUR_TB_HOST = "* **YOUR_TB_HOST** with the host of your ThingsBoard instance;" %}
{% assign TB_HOST = "10.7.0.223" %}
{% assign PEM_CERTIFICATE = "root-ca.pem" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign YOUR_TB_HOST = "* **YOUR_TB_HOST** with the host of your ThingsBoard instance;" %}
{% assign TB_HOST = "10.7.3.177" %}
{% assign PEM_CERTIFICATE = "root-ca.pem" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign TB_HOST = "mqtt.thingsboard.cloud" %}
{% assign PEM_CERTIFICATE = "tb-cloud-root-ca.pem" %}
{% assign CLOUD = " Cloud" %}
{% endif %} 

* TOC 
{:toc}

MQTT Based Authentication is available for devices that connect using MQTT. You may change the device credential type from 'Access token' to 'MQTT Basic'.
Basic MQTT credentials consist of the optional client id, username and password. 

There are three options available:

#### Authentication based on Client ID only. 

For this purpose, you should populate only client ID in the device credentials form below.
MQTT clients will be able to connect with any username or password if they specify correct client ID. See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details.

Let's review a simple command to publish telemetry readings using MQTT client ID to the ThingsBoard{{CLOUD}}.
The command is using plain MQTT without TLS:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```bash
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -m {"temperature":25}
```
{: .copy-code}
{% endif %}

Don't forget to replace:

{{YOUR_TB_HOST}}
* **YOUR_CLIENT_ID** with your client id.

The above command requires mosquitto clients library that you can install using the following command:

```bash
sudo apt-get install curl mosquitto-clients
```
{: .copy-code}

{% include images-gallery.html imageCollection="client-id-only" %}

#### Authentication based on Username and Password. 

For this purpose, you should populate only username and password in the credentials form below.
MQTT Clients will be able to connect with any client ID if they specify correct username and password. Password is optional. See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details.

Let's review a simple command to publish telemetry readings using MQTT client username and password to the ThingsBoard{{CLOUD}}. The command is using plain MQTT without TLS:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```bash
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -p "1883" -t "v1/devices/me/telemetry" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}

Don't forget to replace:

{{YOUR_TB_HOST}}
 * **YOUR_CLIENT_USERNAME/YOUR_CLIENT_PASSWORD** with your client username and password.

The above command requires mosquitto clients library that you can install using the following command:

```bash
sudo apt-get install curl mosquitto-clients
```
{: .copy-code}

{% include images-gallery.html imageCollection="username-and-password" %}

#### Authentication based on Client ID, Username and Password. 

For this option, you should populate Client ID, Username and Password.
MQTT Clients will be able to connect if they specify correct combination of client ID, username and password. See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details.

Let's review a simple command to publish telemetry readings using MQTT client ID, username and password to the ThingsBoard{{CLOUD}}. The command is using plain MQTT without TLS:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
```bash
mosquitto_pub -d -q 1 -h "mqtt.thingsboard.cloud" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}

Don't forget to replace:

{{YOUR_TB_HOST}}
* **YOUR_CLIENT_ID** with your client id;
* **YOUR_CLIENT_USERNAME/YOUR_CLIENT_PASSWORD** with your client username and password.

The above command requires mosquitto clients library that you can install using the following command:

```bash
sudo apt-get install curl mosquitto-clients
```
{: .copy-code}

{% include images-gallery.html imageCollection="client-id-username-and-password" %}

#### MQTTS (MQTT over TLS)

One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate.

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
Follow the [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/) guide to provision server certificate for your own ThingsBoard instance. This certificate will be used by MQTT client to validate the server certificate.

Once provisioned, use "Check connectivity" feature to download the CA root certificate to your working directory and publish telemetry:
{% endif %}
{% if docsPrefix == "paas/" %}
Use "Check connectivity" feature to download the CA root certificate and publish telemetry:
{% endif %}

{% include images-gallery.html showListImageTitles="true" imageCollection="mqtts-options-1" %}

- The second command is automatically generated by ThingsBoard. Execute this command publishes telemetry using the *{{PEM_CERTIFICATE}}* certificate to establish a secure connection with the ThingsBoard{{CLOUD}} and the device credentials you specified for its authentication.
Just copy and run this command in the Terminal from your working directory (where you saved the certificate).

{% include images-gallery.html imageCollection="mqtts-options-2" %}

<br>
Example of a generated command to publish telemetry using the *{{PEM_CERTIFICATE}}* certificate and the access token (DEVICE_ACCESS_TOKEN) of the selected device:

```bash
mosquitto_pub -d -q 1 --cafile {{PEM_CERTIFICATE}} -h {{TB_HOST}} -p 8883 -t v1/devices/me/telemetry -u "DEVICE_ACCESS_TOKEN" -m "{temperature:25}"
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command:

```bash
sudo apt-get install curl mosquitto-clients
```
{: .copy-code}