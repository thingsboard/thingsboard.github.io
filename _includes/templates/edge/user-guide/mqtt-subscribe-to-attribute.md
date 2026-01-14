**MQTT** is a lightweight protocol commonly used for IoT communication. 

To facilitate communication with **ThingsBoard Edge** using **MQTT**, we recommend installing the [MQTT Broker](/docs/{{peDocsPrefix}}reference/mqtt-api/?connectdevice=mqtt-linux#mqtt-connect){: target="_blank"}. This allows the device to **publish** telemetry or attribute messages and **subscribe** to topics for attribute updates.

#### Subscribe to the Changes in Shared Device Attributes

To subscribe to shared device attribute changes, send the SUBSCRIBE message:
```bash
mosquitto_sub -d -h $THINGSBOARD_HOST_NAME -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN"
```
{: .copy-code}

* **v1/devices/me/attributes:** This is a topic on ThingsBoard Edge. It allows the device to listen for any updates related to its attributes from the cloud.
* Replace the **$THINGSBOARD_HOST_NAME** with the actual hostname or IP address of your ThingsBoard Edge instance. 
    
{% assign accessTokenPE = '
  ===
    image: https://img.thingsboard.io/pe/edge/config/subscribe-to-attribute/9-copy-access-token-pe.webp,
    title: Replace the **$ACCESS_TOKEN** with the actual access token of the device. To find the device access token, go to the **Entities > Devices** section and click on the device. On the **"Device details"** page, you can copy the token by clicking the **"Copy access token"** button.
'
%}

{% assign accessTokenCE = '
  ===
    image: https://img.thingsboard.io/edge/config/subscribe-to-attribute/9-copy-access-token.webp,
    title: Replace the **$ACCESS_TOKEN** with the actual access token of the device. To find the device access token, go to the **Entities > Devices** section and click on the device. On the **"Device details"** page, you can copy the token by clicking the **"Copy access token"** button.
'
%}

{% if docsPrefix contains "pe/edge" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=accessTokenPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=accessTokenCE %}
{% endif %}

#### Publish Time-Series or Attribute Message.

To publish client-side device attributes to the **ThingsBoard Edge**, send a PUBLISH message. 

You can publish the telemetry data:

```bash
mosquitto_pub -d -h $THINGSBOARD_HOST_NAME -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -m "{"attribute1": "value1", "attribute2": true}"
```
{: .copy-code}

* **v1/devices/me/attributes:** The topic to which the telemetry data is published.
* **$THINGSBOARD_HOST_NAME:** The actual hostname or IP address of your ThingsBoard Edge instance
* **$ACCESS_TOKEN:** The actual access token of the device.
* **{"attribute1": "value1", "attribute2": true}** The telemetry data.

You can also publish client-side attributes update using data from [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json){: target="_blank"} file:

```bash
mosquitto_pub -d -h $THINGSBOARD_HOST_NAME -t "v1/devices/me/attributes" -u "$ACCESS_TOKEN" -f "new-attributes-values.json"
```
{: .copy-code}