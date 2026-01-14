
{% assign deviceName = page.title | remove: "How to connect " | remove: " to ThingsBoard?" %}
{% assign deviceVendorLink = "https://weinzierl.de/en/products/knx-ip-multi-io-580/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
  '
  %}

[The KNX IP Multi IO 580 (48I/O)](https://weinzierl.de/en/products/knx-ip-multi-io-580/){:target="_blank"} is a universal binary interface for building control. It provides 48 I/O lines. Each line can be used as binary input as well as binary output. The peripherals can be fed by an external voltage of 24 V⎓. Channels which are configured as inputs can be used to control lights or blinds via the KNX network. They also can be used to count impulses, e.g. as interface for energy meters. Channels which are configured as outputs can directly drive signal LEDs, external coupling relays.<br><br>

## Prerequisites

To continue with this guide we will need the following:
{{prerequisites}}
- [Multi IO Extension Switch 590](https://weinzierl.de/en/products/multi-io-extension-switch-590/){: target="_blank"}
- [Multi IO Extension Shutter 592](https://weinzierl.de/en/products/multi-io-extension-shutter-592/){: target="_blank"}
- Coupling relay for Multi IO
- [ETS software](https://support.knx.org/hc/en-us/articles/4409114300178-ETS-v5-7-7){: target="_blank"} installed
- [ThingsBoard IoT Gateway](https://thingsboard.io/docs/iot-gateway/installation/){: target="_blank"} installed
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Devices connection

According to [the user manual](https://weinzierl.de/images/download/products/580/weinzierl-580-knx-ip-multi-io-5238-manual-en.pdf){:target="_blank"} from official site, firstly you need to wired connection between the controller and switch, shutter, and relay. The controller has to be connected to the network using LAN port. Also, you need to download and install the [ETS software](https://support.knx.org/hc/en-us/articles/4409114300178-ETS-v5-7-7){:target="_blank"} from the official website.

## Controller configuration

To connect controller - we need to configure it in  [ETS software](https://support.knx.org/hc/en-us/articles/4409114300178-ETS-v5-7-7){:target="_blank"}. Also, you need to connect the controller to your network over Ethernet.

### Adding device to ETS project

First we need to create project and add device to our topology, for this purpose, use the following steps:

{% assign KnxIpMultiScreenshot1 = '
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-1.png,
        title: In the opened ETS main window, create new project (use default setting for creating, except "**Name**" field);
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-2.png,
        title: Under the projects tabs bar click on "**Buildings**" dropdown list and select "**Topology**" from the list.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-3.png,
        title: Right click on "**1 New area**" subitem and select "**+ Add**" button from the dropdown list, and click on "Devices" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-4.png,
        title: In the window that opens at the bottom side, use the search field to look for "**Multi 580**". Double click on found device. New device will be added.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-5.png,
        title: After device installation, drag and drop it to the sidebar above "**1 New area**". Device added.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=KnxIpMultiScreenshot1 %}

### Configuring device

After adding device to topology new area, we need to configure device. To do this, follow the steps below:

{% assign KnxIpMultiScreenshot2 = '
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-6.png,
        title: Click on added device, on the right sidebar, select "**Properties**" tab and click on "**IP**" button. Select "**Use a static IP address**" option and fill in "**IP Address**", "**Subnet Mask**", "**Default Gateway**" fields with your corresponding controller (you can find controller IP address on the built-in display) and network settings.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-7.png,
        title: Click on "**Settings**" button under "**Properties**" tab and fill in "**Individual Address**" with "**1.0.1**", click on "**Park**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-8.png,
        title: On the right side of the main window, click on the "**Down arrow**" button near "**Download**" button and select "**Download all**". Controller configuration settings should be saved.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=KnxIpMultiScreenshot2 %}

### Adding group addresses

To read data from the Weinzierl KNX IP Multi IO 580 (48I/O) after configuring, we need to configure the appropriate **Group Addresses** in the **ETS** software, for this purpose, use the following steps:

{% assign KnxIpMultiScreenshot3 = '
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-9.png,
        title: Under the projects tabs bar click on "Topology" dropdown list and select "Group Addresses" from the list. Click on "Add Main Groups" and in the opened modal window fill in "Name" field with "Main" value, click "OK" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-11.png,
        title: Click on "Add Middle Groups" and in the opened modal window fill in "Name" field with "Middle" value, click "OK" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-13.png,
        title: Click on "Add Group Addresses" and in the opened modal window fill in "Name" field with "Relay" value, click "OK" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-15.png,
        title: Click on "Add Group Addresses" and in the opened modal window fill in "Name" field with "Relay 2" value, click "OK" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-17.png,
        title: Click on "Add Group Addresses" and in the opened modal window fill in "Name" field with "Up/Dn" value, click "OK" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-19.png,
        title: Click on "Add Group Addresses" and in the opened modal window fill in "Name" field with "Stop/Step" value, click "OK" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=KnxIpMultiScreenshot3 %}

### Configuring device channels

The next step, we need to enable device channels by specifying his type. To do this, follow the steps below:

{% assign KnxIpMultiScreenshot4 = '
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-21.png,
        title: Click on added device in the left sidebar and select "**Parameters**" tab in the side right window. Select "**Channel**" tab.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-22.png,
        title: Select "Shutter Actuator" for "**Channel function 1**", "**Switching Actuator**" for "**Channel function 2**" and "**Channel function 3**". You can find added Group Objects in the "**Group Objects**" tab.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=KnxIpMultiScreenshot4 %}

The last thing that we need to do is set group objects ability to read and write, and link them with group addresses. For this purpose, use the following steps:

- In the "Group Objects" tab click on first group object and in the right sidebar in the section "Flags" enable Write and Read. Repeat this actions for the rest group objects.
- In the "Group Objects" tab right click on first group object (Jalousie 1: Drive stop) and select "Link with…" button.
- In the opened modal window click on "…" button, in the opened window select "0/0/4" group address. Repeat this action for the rest group objects using the following table:

| **Group Object Name**   | **Group Address** |
|:------------------------|:------------------|
| Jalousie 1: Drive stop  | 0/0/4             |
| Jalousie 1: Drive start | 0/0/3             |
| Actuator 3: Output      | 0/0/2             |
| Actuator 2: Output      | 0/0/1             |
| ---                     

{% assign KnxIpMultiScreenshot5_1 = '
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-24.png,
        title: In the "**Group Objects**" tab click on first group object and in the right sidebar in the section "**Flags**" enable **Write** and **Read**. Repeat this actions for the rest group objects.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-25.png,
        title: In the "**Group Objects**" tab right click on first group object (Jalousie 1: Drive stop) and select "**Link with…**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-26.png,
        title: In the opened modal window click on "…" button, in the opened window select "0/0/4" group address. Repeat this action for the rest group objects.
'
%}

{% include images-gallery.liquid imageCollection=KnxIpMultiScreenshot5_1 %}

{% assign KnxIpMultiScreenshot5_2 = '
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-screenshot-27.png,
        title: On the right side of the main window, click on the "**Down arrow**" button near "**Download**" button and select "**Download all**". Controller configuration settings should be saved.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=KnxIpMultiScreenshot5_2 %}

## Creating and configuring ThingsBoard IoT Gateway

{% assign creatingGatewayCE = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-1-ce.png,
        title: Open the ThingsBoard in your browser and log in. Go to "**Entities**" > "**Gateways**" tab in the sidebar and click on "**+**" button. Fill in "**Name**" and "**Device profile**" fields and click "**Create**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-2-ce.png,
        title: Start gateway using launch command;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-3-ce.png,
        title: The gateway has been created. Click on the "**Connectors configuration**" button in the sidebar menu;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-4-ce.png,
        title: Click on "**+**" button to add a new connector;
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-gateway-configuring-1-ce.png,
        title: Select "**KNX**" connector type, fill in the "**Name**" field, disable filling configuration with default values and click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-gateway-configuring-2-ce.png,
        title: In the created connector, go to "**Advanced**" section and paste the JSON configuration below. Replace host and port configuration parameter values with the device&#39;s host and port. Click on "**Save**" button
'
%}

{% assign creatingGatewayPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-1-pe.png,
        title: Open the ThingsBoard in your browser and log in. Go to "**Entities**" > "**Gateways**" tab in the sidebar and click on "**+**" button. Fill in "**Name**" and "**Device profile**" fields and click "**Create**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-2-pe.png,
        title: Start gateway using launch command;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-3-pe.png,
        title: The gateway has been created. Click on the "**Connectors configuration**" button in the sidebar menu;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-4-pe.png,
        title: Click on "**+**" button to add a new connector;
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-gateway-configuring-1-pe.png,
        title: Select "**KNX**" connector type, fill in the "**Name**" field, disable filling configuration with default values and click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-io-gateway-configuring-2-pe.png,
        title: In the created connector, go to "**Advanced**" section and paste the JSON configuration below. Replace host and port configuration parameter values with the device&#39;s host and port. Click on "**Save**" button.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayPE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayCE %}
{% endif %}

```json
{
  "client": {
    "type": "ROUTING",
    "addressFormat": "LONG",
    "gatewayIP": "192.168.1.148",
    "individualAddress": "1.0.1",
    "rateLimit": 0,
    "autoReconnect": true,
    "autoReconnectWait": 3,
    "gatewaysScanner": {
      "enabled": false,
      "scanPeriod": 5,
      "stopOnFound": false
    }
  },
  "devices": [
    {
      "deviceInfo": {
        "deviceNameExpressionSource": "constant",
        "deviceNameExpression": "KNX IP Multi IO 580",
        "deviceProfileExpressionSource": "constant",
        "deviceProfileNameExpression": "default"
      },
      "reportStrategy": {
        "type": "ON_CHANGE"
      },
      "pollPeriod": 1000,
      "attributes": [],
      "timeseries": [
        {
          "key": "relay",
          "groupAddress": "0/0/1"
        },
        {
          "key": "relay2",
          "groupAddress": "0/0/2"
        },
        {
          "key": "shutterRelayMode",
          "groupAddress": "0/0/3"
        },
        {
          "key": "shutterRelayState",
          "groupAddress": "0/0/4"
        }
      ]
    }
  ],
  "attributeUpdates": [],
  "serverSideRpc": [
    {
      "requestType": "write",
      "deviceNameFilter": ".*",
      "method": "setRelayState",
      "groupAddress": "0/0/1"
    },
    {
      "requestType": "write",
      "deviceNameFilter": ".*",
      "method": "setRelay2State",
      "groupAddress": "0/0/2"
    },
    {
      "requestType": "write",
      "deviceNameFilter": ".*",
      "method": "setShutterRelayMode",
      "groupAddress": "0/0/3"
    },
    {
      "requestType": "write",
      "deviceNameFilter": ".*",
      "method": "resetShutterRelay",
      "groupAddress": "0/0/4"
    }
  ]
}
```
{:.copy-code.expandable-10}

## Check data on ThingsBoard

Once you have successfully done all the steps above and Gateway sent data, you can see it in the device telemetry tab:

- Click on the device row in the table to open its details;
- Navigate to the "Latest telemetry" tab.

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
![imagePe](/images/devices-library/ready-to-go-devices/knx-ip-multi-io/check-data-knx-ip-multi-io-1-pe.png)
{% else %}  
![imageCe](/images/devices-library/ready-to-go-devices/knx-ip-multi-io/check-data-knx-ip-multi-io-1-ce.png)
{% endif %}

Let&#39;s display KNX IP Multi IO 580 time series on a dashboard. 
For this purpose, you can create your own dashboard with your custom widgets or [use a ready-made dashboard](/docs/user-guide/resources/knx_ip_multi_io_580.json){:target="_blank" download="knx_ip_multi_io_580.json"} and simply [import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it.

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
![imagePe](/images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-dashboard-1-pe.png)
{% else %}  
![imageCe](/images/devices-library/ready-to-go-devices/knx-ip-multi-io/knx-ip-multi-dashboard-1-ce.png)
{% endif %}

## Conclusion

With the knowledge in this guide, you can easily connect your KNX IP Multi IO 580 controller with switch, shutter, and relay to ThingsBoard. After connecting the devices to the gateway, you will be able to see and process the data coming from the devices on the ThingsBoard.

Explore the platform [documentation](https://thingsboard.io/docs/){: target="_blank"} to learn more about key concepts and features.
{% include add-device-banner.liquid %}