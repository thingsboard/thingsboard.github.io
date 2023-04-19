### Add a gateway on The Things Industries

We need to add a gateway on [The Things Industries cloud](){:target="_blank"}. To do this please follow next steps:  

{% assign addGatewaySteps = '
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/1-login-page.png,
        title: Login to the cloud and open your console
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/2-cloud-console.png,
        title: Choose <b>Gateways</b>
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/3-gateway-list.png,
        title: Press <b>Add gateway</b> button
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/4-register-gateway.png,
        title: Put information about the gateway, it may be found on the gateway control panel
    ===
        image: /images/devices-library/basic/integrations/thethingsindustries/5-gateway-info.png,
        title: The gateway is added to The Things Industries
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addGatewaySteps %}

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}
{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/integration-devices-configuration/" | append: articleFilename | append: "-thethingsindustries-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

### Configure integration on The Things Industries cloud

**TODO:**

### Create uplink converter

At first, we will create an uplink converter to process the incoming data:

```javascript
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {},
    attributes: {}
};

// Converting everything in data.uplink_message as telemetry
if (data.uplink_message != null) {
    addKeys(data.uplink_message, result.telemetry, []);
}

var excludeForAttributesList = ["device_id", "application_id", "uplink_message"];

// Converting everything in data as attributes, excluding keys, provided in excludeForAttributesList
addKeys(data, result.attributes, excludeForAttributesList);


return result;

// Function iterates over "jsonNode" keys and goes into json objects/arrays recursively. 
// Updates provided "map" variable.
// Some keys can be excluded from iterating, providing excludeList, formatted like ["device_id", "device_type"].
function addKeys(jsonNode, map, excludeList) {
    if (excludeList != []) {
        foreach (excludedKey : excludeList) {
            if (jsonNode.key == excludedKey) 
                return;
            }
        }
    }
    if (jsonNode instanceof java.util.Set || jsonNode instanceof java.util.List) {
        foreach (node : jsonNode) {
            addKeys(node, map, excludeList);
        }
    } else if (jsonNode instanceof java.util.Map) {
        if (jsonNode.size() > 0) {
            foreach(objectEntry : jsonNode.entrySet) {
                addKeys(objectEntry, map, excludeList);
            } 
        }
    } else if (jsonNode.value instanceof java.util.Map) {
        if (jsonNode.value.size() > 0) {
            foreach(objectEntry : jsonNode.value.entrySet) {
                addKeys(objectEntry, map, excludeList);
            } 
        }
    } else {
        map[jsonNode.key] = jsonNode.value;
    }
}
```
{: .copy-code}

### Create integration

Next we will create Integration with TheThingsIndustries inside the ThingsBoard.  
Open **Integrations** section and add new Integration with type **TheThingsIndustries**:  

- **Name**: *TTI Integration*
- **Type**: *TheThingsIndustries*
- **Uplink** data converter: *TTI Uplink*
- **Downlink** data converter: *TTI Downlink*
- **Region**: *eu1* (region where your application was registered inside TTI)
- **Username**: *thingsboard-integration@thingsboard* (use ***Username*** from TTI integration)
- **Password**: use ***Password*** from TTI integration

![image](/images/user-guide/integrations/tti/tb-integration-1.png)  

![image](/images/user-guide/integrations/tti/tb-integration-2.png)  

Press **Add** button and integration will be added.  
