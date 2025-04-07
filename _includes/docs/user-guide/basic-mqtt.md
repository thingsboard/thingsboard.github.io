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
{% if docsPrefix contains "paas/" %}
{% assign TB_HOST = "{{mqttHostName}}" %}
{% assign PEM_CERTIFICATE = "tb-cloud-root-ca.pem" %}
{% assign CLOUD = " Cloud" %}
{% endif %} 

* TOC 
{:toc}

MQTT Based Authentication is available for devices that connect using MQTT. To do this, you need to change the device credential type from "Access token" to "MQTT Basic".
Basic MQTT credentials consist of the optional client id, username and password. See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details.

Next, we will explore how to change the device credentials and how clients can connect to the device using these credentials.
Let's consider several options:

## Authentication based on Client ID only. 

To enable this, only the client ID needs to be populated in the device credentials. MQTT clients will be able to connect if they specify correct client ID.

Let's review a simple command to publish telemetry readings using only MQTT client ID to the ThingsBoard{{CLOUD}}.
The command is using plain MQTT without TLS:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -d -q 1 -h "{{mqttHostName}}" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -m {"temperature":25}
```
{: .copy-code}
{% endif %}

where:

{{YOUR_TB_HOST}}
* **YOUR_CLIENT_ID** with your client id.

<br>
ThingsBoard offers a convenient "Check Connectivity" feature that automatically generates a command based on your host and the device credentials you provide. All you have to do is copy and run it.

Let's publish telemetry readings using only MQTT client ID. First, change the credential type for your device from "Access token" to "MQTT Basic":

{% include images-gallery.html showListImageTitles="true" imageCollection="client-id-only-1" %}

After changing device credentials, use the "Check connectivity" feature to post telemetry:

- Click "Check connectivity" button to open the corresponding window;
- In the opened window, select your operating system;
- Install the necessary client tools using the command from the guide;
- Copy and run command to publish telemetry;

Once you have successfully executed the command, you should see the published "temperature" readings.

{% include images-gallery.html imageCollection="client-id-only-2" %}

## Authentication based on Username and Password. 

For this purpose, only the username and password need to be populated in the credentials form.
MQTT Clients will be able to connect if they specify correct username and password.

Let's review a simple command to publish telemetry readings using MQTT client username and password to the ThingsBoard{{CLOUD}}. The command is using plain MQTT without TLS:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -d -q 1 -h "{{mqttHostName}}" -p "1883" -t "v1/devices/me/telemetry" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}

where:

{{YOUR_TB_HOST}}
 * **YOUR_CLIENT_USERNAME**, **YOUR_CLIENT_PASSWORD** with your client username and password.

<br>
In the "Check Connectivity", you'll find an auto-generated command based on your host and device credentials that you've provided. All you have to do is copy and run it.

Let's publish telemetry readings using the MQTT client username and password. First, change the credential type for your device from "Access token" to "MQTT Basic":

{% include images-gallery.html showListImageTitles="true" imageCollection="username-and-password-1" %}

After changing device credentials, use the "Check connectivity" feature to post telemetry:

- Click "Check connectivity" button to open the corresponding window;
- In the opened window, select your operating system;
- Install the necessary client tools using the command from the guide;
- Copy and run command to publish telemetry;

Once you have successfully executed the command, you should see the published "temperature" readings.

{% include images-gallery.html imageCollection="username-and-password-2" %}

## Authentication based on Client ID, Username and Password. 

For this option, you should populate Client ID, Username and Password. MQTT Clients will be able to connect if they specify correct combination of client ID, username and password.

Let's review a simple command to publish telemetry readings using MQTT client ID, username and password to the ThingsBoard{{CLOUD}}. The command is using plain MQTT without TLS:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -d -q 1 -h "{{mqttHostName}}" -p "1883" -t "v1/devices/me/telemetry" -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}

where:

{{YOUR_TB_HOST}}
* **YOUR_CLIENT_ID** with your client id;
* **YOUR_CLIENT_USERNAME**, **YOUR_CLIENT_PASSWORD** with your client username and password.

<br>
In the "Check Connectivity", you'll find an auto-generated command based on your host and device credentials that you've provided. All you have to do is copy and run it.

Let's publish telemetry readings using the MQTT client ID, username and password. First, change the credential type for your device from "Access token" to "MQTT Basic":

{% include images-gallery.html showListImageTitles="true" imageCollection="client-id-username-and-password-1" %}

After changing device credentials, use the "Check connectivity" feature to post telemetry:

- Click "Check connectivity" button to open the corresponding window;
- In the opened window, select your operating system;
- Install the necessary client tools using the command from the guide;
- Copy and run command to publish telemetry;
 
Once you have successfully executed the command, you should see the published "temperature" readings.

{% include images-gallery.html imageCollection="client-id-username-and-password-2" %}

## MQTTS (MQTT over TLS)

One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate. {% unless (docsPrefix == "pe/") or (docsPrefix == null) %}This certificate will be used by MQTT client to validate the server certificate.{% endunless %}

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
Follow the [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/) guide to provision server certificate for your own ThingsBoard instance. This certificate will be used by MQTT client to validate the server certificate.

Once provisioned, use "Check connectivity" feature to download the CA root certificate to your working directory and publish telemetry. But first, change the credential type for your device from "Access token" to "MQTT Basic":
{% endif %}
{% if docsPrefix contains "paas/" %}
Use "Check connectivity" feature to download the CA root certificate and publish telemetry. But first, change the credential type for your device from "Access token" to "MQTT Basic":
{% endif %}

{% include images-gallery.html showListImageTitles="true" imageCollection="mqtts-options-1" %}

- Now, click "Check connectivity" button. In the opened window, select your operating system and install the necessary client tools using the command from the guide;
- Switch to the "MQTTs" protocol. Copy and run the first command to download the valid CA certificate;
- Copy and run the second command from your working directory (where you saved the certificate) to publish telemetry. This command uses the *{{PEM_CERTIFICATE}}* certificate to establish a secure connection with the ThingsBoard{{CLOUD}} and the device credentials you specified for its authentication.

Once you have successfully executed the command, you should see the published "temperature" readings.

{% include images-gallery.html imageCollection="mqtts-options-2" %}

<br>
Example of a generated command to publish telemetry using the *{{PEM_CERTIFICATE}}* certificate, {% unless docsPrefix contains 'paas/' %}host of your ThingsBoard instance (YOUR_TB_HOST),{% endunless %} client id (YOUR_CLIENT_ID), and client username and password (YOUR_CLIENT_USERNAME / YOUR_CLIENT_PASSWORD) of the selected device:

{% if (docsPrefix == "pe/") or (docsPrefix == null) %}
```bash
mosquitto_pub -d -q 1 --cafile {{PEM_CERTIFICATE}} -h YOUR_TB_HOST -p 8883 -t v1/devices/me/telemetry -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}
{% if docsPrefix contains "paas/" %}
```bash
mosquitto_pub -d -q 1 --cafile {{PEM_CERTIFICATE}} -h {{mqttHostName}} -p 8883 -t v1/devices/me/telemetry -i "YOUR_CLIENT_ID" -u "YOUR_CLIENT_USERNAME" -P "YOUR_CLIENT_PASSWORD" -m {"temperature":25}
```
{: .copy-code}
{% endif %}