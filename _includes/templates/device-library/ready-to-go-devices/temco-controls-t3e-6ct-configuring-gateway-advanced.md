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
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/advanced-temco-tstat10-gateway-configuring-1-ce.png,
        title: Select "**BACnet**" connector type, fill in the "**Name**" field, disable filling configuration with default values and click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/advanced-temco-t3e-6ct-gateway-configuring-2-ce.png,
        title: In the created connector, go to "**Advanced**" section and paste the JSON configuration below. Replace **host** and **port** configuration parameter values with the device&#39;s host and port. Also, replace "**DEVICE_HOST**" in "**altResponsesAddresses**" with device host. Click on "Save" button.
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
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/advanced-temco-tstat10-gateway-configuring-1-pe.png,
        title: Select "**BACnet**" connector type, fill in the "**Name**" field, disable filling configuration with default values and click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/advanced-temco-t3e-6ct-gateway-configuring-2-pe.png,
        title: In the created connector, go to "**Advanced**" section and paste the JSON configuration below. Replace **host** and **port** configuration parameter values with the device&#39;s host and port. Also, replace "**DEVICE_HOST**" in "**altResponsesAddresses**" with device host. Click on "Save" button.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayPE %}
{% else %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayCE %}
{% endif %}

```json
{
  "application": {
    "objectName": "TB_gateway",
    "host": "0.0.0.0",
    "port": "47808",
    "objectIdentifier": 599,
    "maxApduLengthAccepted": 1476,
    "segmentationSupported": "segmentedBoth",
    "vendorIdentifier": 15
  },
  "devices": [
    {
      "altResponsesAddresses": ["DEVICE_HOST"],
      "host": "DEVICE_HOST",
      "port": 47808,
      "deviceInfo": {
        "deviceNameExpression": "T3E-6CT",
        "deviceNameExpressionSource": "constant",
        "deviceProfileExpressionSource": "constant",
        "deviceProfileExpression": "default"
      },
      "pollPeriod": 10000,
      "timeseries": [
        {
          "key": "humidity",
          "objectType": "analogInput",
          "objectId": 0,
          "propertyId": "presentValue"
        },
        {
          "key": "temperature",
          "objectType": "analogInput",
          "objectId": 1,
          "propertyId": "presentValue"
        }
      ],
      "attributes": [],
      "attributeUpdates": [],
      "serverSideRpc": [
        {
          "method": "setRelay1",
          "objectType": "binaryOutput",
          "objectId": 0,
          "propertyId": "presentValue",
          "requestTimeout": 5000,
          "requestType": "writeProperty"
        },
        {
          "method": "setRelay2",
          "objectType": "binaryOutput",
          "objectId": 1,
          "propertyId": "presentValue",
          "requestTimeout": 5000,
          "requestType": "writeProperty"
        }
      ]
    }
  ]
}
```
{:.copy-code.expandable-10}
