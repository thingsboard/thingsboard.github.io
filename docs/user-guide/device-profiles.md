---
layout: docwithnav
assignees:
- ashvayka
title: Device profiles
description: IoT device profiles
redirect_from: "/docs/user-guide/ui/device-profiles"

create-device-profile:
    0:
        image: /images/user-guide/device-profile/create-device-profile-1-ce.png
        title: 'Go to the "<b>Device profiles</b>" page in the "<b>Profiles</b>" section. Click the "<b>+</b>" icon in the upper-right corner and select "<b>Create new device profile</b>" from the dropdown menu.'
    1:
        image: /images/user-guide/device-profile/create-device-profile-2-ce.png
        title: 'Only the <b>Name</b> field is required; all other settings are optional. Click "<b>Add</b>" to create the device profile.'

device-profile-rule-chain:
    0:
        image: /images/user-guide/device-profile/device-profile-rule-chain-1-ce.png
        title: 'You can simplify the processing of incoming messages and events from any device by assigning separate rule chains to device profiles based on device type, instead of using the default rule chain.'

device-profile-queue:
    0:
        image: /images/user-guide/device-profile/device-profile-queue-1-ce.png
        title: 'Using separate queues for different device types allows isolated and prioritized processing, ensuring critical events like fire alarms are handled promptly despite high system load.'

device-profile-transport:
    0:
        image: /images/user-guide/device-profile/device-profile-transport-1-ce.png
        title: 'The current version of ThingsBoard platform supports the following transport types: <b>Default, MQTT, CoAP, LWM2M, SNMP</b>.'

default-transport-type:
    0:
        image: /images/user-guide/device-profile/default-transport-type-1-ce.png
        title: 'The <b>Default</b> transport type is designed to ensure compatibility with earlier versions of the platform. Devices using this type can connect through ThingsBoard&#39;s standard APIs: <b>MQTT</b>, <b>HTTP</b>, and <b>CoAP</b>. It requires no special configuration.'

mqtt-device-topic-filters:
    0:
        image: /images/user-guide/device-profile/mqtt-device-topic-filters-1-ce.png
        title: 'Custom MQTT topic filters support <b>single-level (+)</b> and <b>multi-level (#) wildcards</b>, making it possible to connect to almost any <b>MQTT-based device</b> that sends payloads in <b>JSON</b> or <b>Protobuf</b> format.'

mqtt-transport-setting-example:
    0:
        image: /images/user-guide/device-profile/mqtt-transport-example-1-ce.png
        title: 'Specify custom <b>MQTT device topic filters</b> in the device profile.'
    1:
        image: /images/user-guide/device-profile/mqtt-transport-example-2-ce.png
        title: 'Click the "<b>Manage credentials</b>" button in your device details.'
    2:
        image: /images/user-guide/device-profile/mqtt-transport-example-3-ce.png
        title: '<b>Provide basic MQTT credentials</b> for your device with the client id &#39;c1&#39;, username &#39;t1&#39; and password &#39;secret&#39;.'
    3:
        image: /images/user-guide/device-profile/mqtt-transport-example-4-ce.png
        title: 'Use <b>Terminal</b> to publish time-series data. Transmitted data will be displayed in the <b>"Latest telemetry" tab</b> of the device.'

mqtt-device-payload:
    0:
        image: /images/user-guide/device-profile/mqtt-device-payload-1-ce.png
        title: 'Go to the "Device profiles" page in the "Profiles" section. Click the "+" icon in the upper-right corner and select "Create new device profile" from the dropdown menu.'
    1:
        image: /images/user-guide/device-profile/mqtt-device-payload-2-ce.png
        title: 'Go to the "Device profiles" page in the "Profiles" section. Click the "+" icon in the upper-right corner and select "Create new device profile" from the dropdown menu.'

compatibility-with-other-payload-formats:
    0:
        image: /images/user-guide/device-profile/mqtt-device-payload-3-ce.png
        title: 'Go to the "Device profiles" page in the "Profiles" section. Click the "+" icon in the upper-right corner and select "Create new device profile" from the dropdown menu.'

coap-default:
    0:
        image: /images/user-guide/device-profile/coap-default-1-ce.png
        title: 'The default CoAP device type uses a JSON payload. This supports basic CoAP APIs similar to the default transport type. You can also configure devices to transmit data using Protocol Buffers (Protobuf) by changing the CoAP device payload setting to Protobuf.'
    1:
        image: /images/user-guide/device-profile/coap-default-2-ce.png
        title: 'Protocol Buffers (Protobuf) is a language- and platform-neutral method of serializing structured data, designed primarily to reduce the size of transmitted data.'

coap-efento-nb-iot:
    0:
        image: /images/user-guide/device-profile/coap-efento-nb-iot1-ce.png
        title: 'Efento NB-IoT devices are wireless sensors that use NB-IoT technology for energy-efficient transmission of telemetry data (e.g., temperature, humidity, pressure, open/close, leakage, and more). You can integrate them with ThingsBoard using the built-in CoAP transport, which receives messages from the devices, decodes them using Protobuf, and stores telemetry data on the platform. This data becomes instantly available for viewing, charting, dashboarding, alarm setup, and automation.'

power-saving-mode:
    0:
        image: /images/user-guide/device-profile/power-saving-mode-1-ce.png
        title: 'The platform supports the following power-saving mechanisms for optimized device operation: Power Saving Mode (PSM), Discontinuous Reception (DRX), Extended Discontinuous Reception (eDRX).'

lwm2m-transport-type:
    0:
      image: /images/user-guide/device-profile/lwm2m-transport-type-1-ce.png
      title: 'LwM2M is a standardized IoT protocol designed for efficient management of resource-constrained devices. It enables centralized configuration, remote firmware updates, and real-time device monitoring.'

snmp-transport-type:
    0:
        image: /images/user-guide/device-profile/snmp-transport-type-1-ce.png
        title: 'SNMP is a widely used protocol for managing network devices such as routers, switches, and servers. It enables the collection and analysis of device status and performance data.'

device-profile-details-page:
    0:
        image: /images/user-guide/device-profile/device-profile-details-page-1-ce.png
        title: 'Clicking a device profile opens a <b>details window</b> where you can access and manage all aspects of that profile.'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/device-profiles.md %}
