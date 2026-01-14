You can configure additional settings like: TLS connection, byte order, word order, and other. The following parameters 
are used to configure advanced connection settings:

- **Byte order** - byte order for the Modbus connection, either **LITTLE** or **BIG**.
- **Word order** - word order for the Modbus connection, either **LITTLE** or **BIG**.
- **Vendor name** - name of the vendor for the Modbus connection.
- **Product code** - product code for the Modbus connection.
- **Vendor URL** - URL of the vendor for the Modbus connection.
- **Product name** - name of the product for the Modbus connection.
- **Model name** - model name for the Modbus connection.
- **TLS** - enable or disable TLS connection for the Modbus connection (**Only for TCP and UDP connections**):
  - **Path to client certificate** - path to the client certificate file.
  - **Path to client private key** - path to the client private key file.
  - **Password** - password for the client private key file.

{% capture difference %}
All configuration parameters list, and their detailed description can be found in the 
[Advanced configuration](/docs/iot-gateway/config/modbus/#device-rpc-methods) section.

More usage examples can be found in the [Example usage](/docs/iot-gateway/config/modbus/#usage-examples-2) section.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To configure advanced connection settings, follow these steps:

{% assign advancedConnectionSettingsBasic = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-basic-1-ce.png,
        title: Click on the "**Advanced connection settings**" subsection to open it;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-basic-2-ce.png,
        title: Make the necessary settings.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=advancedConnectionSettingsBasic %}