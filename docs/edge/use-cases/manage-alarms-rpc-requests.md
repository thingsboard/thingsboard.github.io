---
layout: docwithnav
title: Manage alarms and RPC requests on edge devices
description: ThingsBoard Edge use case #1

configureAlarmRulesCE:
    0:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-1.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Device profiles page.'
    1:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-2.png
        title: 'Click "+" to add new device profile.'
    2:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-3.png
        title: 'Input device profile name. For example, type "edge thermostat". Click "Transport configuration" to proceed.'
    3:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-4.png
        title: 'For this example we will use default transport configuration. Click "Alarm rules" to proceed.'        
    4:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-5.png
        title: 'Click "Add alarm rule" button.'
    5:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-6.png
        title: 'Specify alarm type. For example, "High temperature". Click "+" icon to add new alarm condition.'
    6:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-7.png
        title: 'Click "Add key filter" button.'
    7:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-8.png
        title: 'Select key type, input key name, select value type and click "Add".'
    8:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-9.png
        title: 'Select operation and input threshold value. Click "Add".'
    9:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-10.png
        title: 'Click "Save" button.'
    10:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-11.png
        title: 'Click "Add" button.'
    11:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-12.png
        title: 'Newly create device profile will be show first in the list, because default sort order is by created time.'

configureAlarmRulesEdge:
    0:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-13.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device profiles page.'
    1:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-14.png
        title: 'Verify that "edge thermostat" was provisioned to edge as well.'

provisionDevicesEdge:
    0:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-1.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device groups page.'
    1:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-2.png
        title: 'Open "All" device group.'
    2:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-3.png
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    3:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-4.png
        title: 'Input device name. For example, "DHT22". Select "edge thermostat" from device profiles list. No other changes required at this time. Click "Add" to add the device.'
    4:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-5.png
        title: 'Now your "DHT22" device should be listed first, since table sort devices using created time by default. Click "Add" to add one more device.'
    5:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-6.png
        title: 'Input device name. For example, "Air Conditioner". No other changes required at this time. Click "Add" to add the device.'
    6:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-7.png
        title: 'Now your "Air Conditioner" device should be listed first, since table sort devices using created time by default.'
    7:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-8.png
        title: 'Click on "DHT22" device row to open device details and navigate to "Relations" tab. Click "+" icon to add new relation.'
    8:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-9.png
        title: 'Specify relation type "Manages" and select "Air Conditioner" device from the list. Click "Add" to add this relation. Now we verify that devices were provisioned to cloud.'

provisionDevicesCE:    
    0:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-10.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Devices page.'
    1:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-11.png
        title: 'Make sure that "DHT22" and "Air Conditioner" devices are in the devices list.'
    2:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-12.png
        title: 'Verify that relation from "DHT22" to "Air Conditioner" was provisioned as well.'

rootRuleChainPreview:
    0:
        image: /images/edge/use-cases/manage-alarms-root-rule-chain.png

updateRootRuleChainCE:
    0:
        image: /images/edge/use-cases/manage-alarms-update-root-item-1.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Rule chain templates page.'
    1:
        image: /images/edge/use-cases/manage-alarms-update-root-item-2.png
        title: 'Open default "Edge Root Rule Chain".'
    2:
        image: /images/edge/use-cases/manage-alarms-update-root-item-3.png
        title: 'Filter node by "script" word and drag script node (Transformation) to rule chain.'
    3:
        image: /images/edge/use-cases/manage-alarms-update-root-item-4.png
        title: 'Input node name and add <b>JavaScript</b> code to create proper <b>enable</b> command for Air Conditioner device. Click "Add" to proceed.'
    4:
        image: /images/edge/use-cases/manage-alarms-update-root-item-5.png
        title: 'Drag connection from "Device Profile Node" to newly added "Script" node.'
    5:
        image: /images/edge/use-cases/manage-alarms-update-root-item-6.png
        title: 'Select "Alarm Created" from the list and click "Add" button.'
    6:
        image: /images/edge/use-cases/manage-alarms-update-root-item-7.png
        title: 'Click "Apply changes" to save current progress.'
    7:
        image: /images/edge/use-cases/manage-alarms-update-root-item-8.png
        title: 'Right click on the "script" node to copy it.'
    8:
        image: /images/edge/use-cases/manage-alarms-update-root-item-9.png
        title: 'Paste (duplicate) script node to rule chain.'
    9:
        image: /images/edge/use-cases/manage-alarms-update-root-item-10.png
        title: 'Click modify icon.'
    10:
        image: /images/edge/use-cases/manage-alarms-update-root-item-11.png
        title: 'Update accordingly script rule node to emulate <b>disable</b> command for Air Conditioner device.'
    11:
        image: /images/edge/use-cases/manage-alarms-update-root-item-12.png
        title: 'Close rule node editor.'
    12:
        image: /images/edge/use-cases/manage-alarms-update-root-item-13.png
        title: 'Add "Alarm Cleared" connection from "Device Profile" node to <b>disabled</b> script node. Save changes.'
    13:
        image: /images/edge/use-cases/manage-alarms-update-root-item-14.png
        title: 'Filter rule nodes by "change" word and add "change originator" node to rule chain.'
    14:
        image: /images/edge/use-cases/manage-alarms-update-root-item-15.png
        title: 'Select "Related" source. Select "Manages" filter. Select "Device" type. Click "Add".'
    15:
        image: /images/edge/use-cases/manage-alarms-update-root-item-16.png
        title: 'Add "Success" relations from script node to change originator. Add "Success" relation from change originator to RPC Call Request node. Save changes.'

updateRootRuleChainEdge:
    0:
        image: /images/edge/use-cases/manage-alarms-update-root-item-17.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Rule chains page.'
    1:
        image: /images/edge/use-cases/manage-alarms-update-root-item-18.png
        title: 'Open "Edge Root Rule Chain".'
    2:
        image: /images/edge/use-cases/manage-alarms-update-root-item-19.png
        title: 'Verify that rule chain is the same as you have updated on cloud.'
---
* TOC
{:toc}

## Use case
Let's assume you have a warehouse with two devices connected to ThingsBoard **Edge**: 
* DHT22 temperature sensor
* Air Conditioner 

ThingsBoard Edge has the following responsibilities:
 * **Collects temperature readings** from the DHT22 sensor
 * **Creates and updates alarms** if the temperature in the warehouse is higher than 50 °C
 * In case if the temperature becomes critical, ThingsBoard Edge turns on the cooler system by **sending RPC call requests** to Air Conditioner device
 * **Pushes telemetry to the cloud**

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. 
You can use this tutorial as a basis for much more complex scenarios.

## Prerequisites

{% include templates/edge/use-cases/ce-prerequisites.md %}

## Configure Alarm Rules

We will use [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise alarm when temperature reading is greater than 50 degrees.
For this purpose, we should create new device profile and add new alarm rule. We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type. Let's create new device profile "edge thermostat".

{% include images-gallery.html imageCollection="configureAlarmRulesCE" showListImageTitles="true" %}

Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080) to see provisioned device profiles.

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="configureAlarmRulesEdge" showListImageTitles="true" %}

## Provision devices

For simplicity, we will provision device manually using the UI.

Let's first create **DHT22 temperature sensor** and **Air Conditioner** devices on the edge and add relation between these devices. This relation will be used to find related **Air Conditioner** device once **DHT22 temperature sensor** will send critical temperature value.

We are going to provision device on the Edge. Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080).

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="provisionDevicesEdge" showListImageTitles="true" %}

Please open ThingsBoard **CE** using the URL [http://localhost:8080](http://localhost:8080) or [Live Demo](https://demo.thingsboard.io):

{% include images-gallery.html imageCollection="provisionDevicesCE" showListImageTitles="true" %}

## Configure edge rule engine to handle alarms and send RPC calls

### Update "Edge Root Rule Chain"

We are going to update "Edge Root Rule Chain" that will handle **Alarm Created/Alarm Cleared** events for "DHT22" sensor and will send appropriate commands to the "Air Conditioner" device.
Here is the final configuration of edge root rule chain:

{% include images-gallery.html imageCollection="rootRuleChainPreview" %}

Here are the steps to update default edge "Root Rule Chain" to the rule chain above:

{% include images-gallery.html imageCollection="updateRootRuleChainCE" showListImageTitles="true" %}

Now let's open ThingsBoard **Edge** UI to see updated root rule chain:

{% include images-gallery.html imageCollection="updateRootRuleChainEdge" showListImageTitles="true" %}

## Connect "Air Conditioner" to edge and subscribe for RPC commands

- Use the following scripts to connect the device **Air Conditioner** to the ThingsBoard Edge by MQTT protocol.  
The script will emulate turning on/off cooler based on temperature readings: "If the temperature is > 50°C - turn cooler on, otherwise - turn off".
    - [**mqtt-js.sh**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/mqtt-js.sh)
    - [**cooler.js**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/cooler.js)
    
To run the scripts, you need to modify **mqtt-js.sh** file. Please do the following steps:

- Replace **YOUR_ACCESS_TOKEN** with **Air Conditioner device access token**. You can find device access token [on the Device page](/docs/user-guide/ui/devices/#manage-device-credentials). <br>

![image](/images/edge/tutorial/alarm/copy-cooler-token.png)

- Replace **YOUR_THINGSBOARD_HOST** with your ThingsBoard Edge host. For example, **127.0.0.1**. 

- Open the terminal and go to the folder that contains these emulator scripts. 
 Make sure it is executable:
  
 ```shell
 chmod +x *.sh
 ```

Then run the following command:

{% highlight bash %}
bash mqtt-js.sh
{% endhighlight %}

<br/>

You should see the following screen with your host and device token:

![image](/images/edge/tutorial/alarm/terminal-run-sh.png)

**Note** Please open a new terminal tab to push temperature telemetry to device and leave this running in the background until end of the guide.

## Post telemetry to "DHT22" sensor to create alarm

Now let's post temperature telemetry for **DHT22** sensor. For this, we need to **copy the DHT22 device access token**. Let's post the temperature 51°C using the following [Rest API](/docs/reference/http-api/#telemetry-upload-api) call. Do not forget to **replace $ACCESS_TOKEN with actual DHT22 device token**:

![image](/images/edge/tutorial/alarm/copy-device-token.png)

{% highlight bash %}
curl -v -X POST -d '{"temperature":51}' http://THINGSBOARD_EDGE_HOST:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

{% capture local-deployment %}
 * Please replace **THINGSBOARD_EDGE_HOST** with the IP address of your edge or **localhost** if you are running edge locally.
 * Please replace **8080** with the port of your edge if you have changed it during configuration process.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

Once you'll post this telemetry please notify that alarm created in *ALARMS* tab on the device **on both edge and cloud instances** according to rule engine logic:

![image](/images/edge/tutorial/alarm/alarm-created.png)

Now let's post new temperature = 49°C. Alarm should be cleared:

{% highlight bash %}
curl -v -X POST -d '{"temperature":49}' http://THINGSBOARD_EDGE_HOST:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/edge/tutorial/alarm/alarm-cleared.png)

## Verify that RPC request was send to "Air Conditioner" device

Open the terminal where **mqtt-js.sh** script is running. 
You should see similar messages on the screen:

![image](/images/edge/tutorial/alarm/terminal-rpc-message.png)

## Next Steps

{% assign currentGuide = "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}{% include templates/edge/guides-banner-edge.md %}