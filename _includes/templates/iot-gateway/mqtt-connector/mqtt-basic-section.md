This configuration section contains settings of the MQTT broker connection, such as:
- **Host** - MQTT broker hostname or ip address;
- **Port** - listening port on the MQTT broker that will be used for establishing connection;
- **MQTT version** - MQTT protocol version (there are three versions currently supported by gateway - **3.1**, **3.11**, **5**);
- **Client ID** ** - Unique identifier for each client’s session on the broker;
- **Security** - configuration for client authorization at MQTT Broker (anonymous, basic, or certificates).

{% capture difference %}
**Please note:**
\** -- The broker (or broker cluster) does not allow two simultaneous sessions with the same **Client ID**. If a second connection uses that ID, 
the broker closes the existing session and accepts the new one (session takeover). The **Client ID** can be any valid UTF-8 string; 
if you don’t have a descriptive one, you can generate it in the MQTT connector configuration UI—see the last screenshots under this subsection.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/mqtt/#advanced-configuration) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/gateway/mqtt-connector/connection-to-broker-basic-section-1-ce.png)

If you want the UI to generate a **Client ID**, leave the **Client ID** field blank and click *Generate Client ID* (see the screenshot below). 
The gateway will create a unique identifier.

![image](/images/gateway/mqtt-connector/generate-clientID-from-UI.png)

UI form with generated **Client ID** identifier e.g., *tb_gw_rfpev* — this is just an example; your value will be different.

![image](/images/gateway/mqtt-connector/generated-clientID-from-UI.png)









