* TOC
{:toc}
  
Access Token based authentication is the default device authentication type.
The unique access token is generated once the device is created in ThingsBoard. It can be changed afterwards.
The client must specify the access token as a username in MQTT connect message.

#### Plain MQTT (without SSL)

Let's review a simple command to upload temperature readings using Access Token *YOUR_ACCESS_TOKEN* to ThingsBoard Cloud.
See [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/) for more details. The command is using plain MQTT without TLS:

```bash
mosquitto_pub -d -q 1 -h "YOUR_TB_HOST" -p "1883" \ 
-t "v1/devices/me/telemetry" -u "YOUR_ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**.
Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.

#### MQTTS (MQTT over SSL)

One-way SSL authentication is a standard authentication mode, where your client device verifies the identity of a server using server certificate.
ThingsBoard Team has already provisioned a valid certificate for [ThingsBoard Cloud](https://thingsboard.cloud/signup).
Follow the [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl/) guide to provision server certificate if you are hosting your own ThingsBoard instance.

Once provisioned, you should prepare a certificate chain in pem format. This chain will be used by mqtt client to validate the server certificate.
Save the chain to your working directory as "**tb-server-chain.pem**". 
An example of certificate chain for *mqtt.thingsboard.cloud* is located [here](/docs/paas/user-guide/resources/mqtt-over-ssl/tb-server-chain.pem).

Now you may use the *tb-server-chain.pem* to setup secure connection to your ThingsBoard instance (*YOUR_TB_HOST*) and Access Token (*YOUR_ACCESS_TOKEN*) to authenticate the device to upload telemetry:

```bash
mosquitto_pub --cafile tb-server-chain.pem -d -q 1 -h "YOUR_TB_HOST" -p "8883" \
-t "v1/devices/me/telemetry" -u "YOUR_ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

The above command requires mosquitto clients library that you can install using the following command: **apt-get install mosquitto-clients**.
Don't forget to replace **YOUR_TB_HOST** with the host of your ThingsBoard instance and **YOUR_ACCESS_TOKEN** with the access token of your device.

