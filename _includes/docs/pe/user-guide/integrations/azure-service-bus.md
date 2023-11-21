{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

Azure Service Bus Integration allows to stream data from Azure Service bus to ThingsBoard and converts device payloads to the ThingsBoard format.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-overview.png)

## Configure Azure Service Bus

To create ThingsBoard Service Bus integration you will need two things created in Azure portal: **topic** and **subscription** to the topic. 
You will also need to find and save **connection string** for your Servise Bus namespace, you will need it later.
- [Create Topic and subscription to the topic](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal)
- [Find connection string for the service bus namespace](https://azurelessons.com/azure-service-bus-connection-string/)

## Create Uplink Converter

You can сreate an **Uplink converter** in the **Data converters** section or directly in the integration. Uplink is necessary in order to convert the incoming 
data from the device into the required format for displaying them in ThingsBoard. Click on the “plus” and on “Create new converter”. To view the events, enable Debug. 
In the function decoder field, specify a script to parse and transform data.

{% capture difference %}
**NOTE**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let’s review sample uplink message from Service Bus topic:

```json
{
   "devName": "Sensor A1",
   "msg": {
      "temp": 23,
      "humidity": 40
   }
}
```
{: .copy-code}

{% include templates/tbel-vs-js.md %}

{% capture servicebusuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/service-bus/service-bus-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/service-bus/service-bus-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="servicebusuplinkconverterconfig" toggle-spec=servicebusuplinkconverterconfig %}

## Create Integration in Thingsboard

Now that we have a topic created in Azure Portal and an Uplink converter created, it is possible to create an integration.

1) Go to **Integrations center** section -> **Integrations** page and click "plus" button to create new integration. Name it **Azure Service Bus Integration**, select type **Azure Service Bus**. Click "Next";

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-create-integration-1-pe.png)

2) At this step, you can select a previously created or create a new upnlink converter right in this window. Select the previously created **Service Bus Uplink Converter**. Click "Next";

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-create-integration-2-pe.png)

3) At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "Downlink data converter" field empty. Click "Skip";

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-create-integration-3-pe.png)

4) Fill in **connection string** for your Service Bus namespace, **topic** and **subscription** names;

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-create-integration-4-pe.png)

5) [Optional] Click on **Check connection** button to check connection to your Service Bus topic. Click **Add** button to create the integration.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-create-integration-5-pe.png)

## Test it up!

To send a test message, use the additional functionality of Azure Service bus, Service Bus Explorer.

Sign-in to **Azure** portal and select your **namespace**. Choose **topic** to uplink.
On the left blade select '**Service Bus Explorer**' tab.
Click on '**Send message**', choose type of payload according to uplink converter and send test message.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-send-uplink-message-1-pe.png)

Example of payload:
```ruby
{
    "devName": "Sensor A1",
    "msg": {
        "temp": 23,
        "humidity": 40
    }
}
```
{: .copy-code}

To check if the message has arrived at Service Bus integration open the '**Events**' tab of integration.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-send-check-uplink-1-pe.png)

<br>
Received data can be viewed in the Uplink converter. In the '**In**' and '**Out**' blocks of the '**Events**' tab:

{% include images-gallery.html imageCollection="uplink-converter-events" preview="false" %}

After you sent uplink message a new device was created. You should receive a notification about it. To view notification click on the bell icon in the upper right corner of the screen.
The notification will contain link to created device. Go to this device.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-device-1-pe.png)

Here you will see information about the new device. As well as the telemetry which we sent to the device.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-device-2-pe.png)

Learn more about **notifications** and how to configure them [here](/docs/{{docsPrefix}}user-guide/notifications/).

## Advanced usage: Downlink Messaging

To send messages to device you need to configure downlink settings, such as downlink converter and information about Service Bus topic that will receive mesages.
[Create topic](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal#create-a-topic-using-the-azure-portal) for downlink messaging in Azure portal.
(We advise also to create [subscription](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal#create-subscriptions-to-the-topic) to the topic so that you can check messages later in Azure portal).

Now, create **downlink converter** (You need to do same steps like when was creating Uplink but choose Downlink and specify another function).

{% capture servicebusdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/service-bus/service-bus-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/service-bus/service-bus-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="servicebusdownlinkconverterconfig" toggle-spec=servicebusdownlinkconverterconfig %}

{% capture difference %}
**NOTE**
<br>
If you used another name of device (not **Sensor A1**) you have to specify in the Downlink converter your device name for **deviceId** field
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Go to integration and specify created **downlink converter**. Then open **Advanced settings** to specify **Downlink topic** and **Downlink connection string** for your Service Bus namespace
(copy connection string from uplink settings if you use the same namespace for downlink).

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-add-downlink-converter-1-pe.png)

<br>
Ok, downlink converter ready, integration ready. Let's test integration with help of downlink node.

After test uplink message was sent integration has created the device inside Thingsboard. Let`s check with which Rule Chain it is connected.
For this go to **Entities** -> **Devices** page in Thingsboard menu and find the device with the name that we have used in the uplink. Find and navigate to the **device profile** used by the device.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-find-device-profile-1-pe.png)

Find the name of **rule chain** that device profile uses.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-find-device-profile-2-pe.png)

Go to the **Rule chains** page. In 'Search nodes' field type 'downlink' and choose in the menu '**integration downlink**' node and drag it to the canvas. 
In pop-up you need to specify the name of rule node and choose your integration.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-downlink-rule-chain-1-pe.png)

Then we need to tap on a right grey circle of '**message type switch**' rule node and drag this circle to left side of '**integration downlink**' node, here choose '**Post attribute**' and '**Attributes update**', tap "Add" link and save Rule chain.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-downlink-rule-chain-2-pe.png)

Let's go to **'Entities'** -> **'Devices'** page and choose our device. Switch to **Attributes** tab. In 'Entity attributes scope' list choose **Shared attributes**.
Tap on 'plus' to create a new attribute. Specify in pop-up the key name of attribute, type of value and some value and tap 'Add'.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-add-downlink-attribute-1-pe.png)

Go to the **Integrations** page to check the result of downlink.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-send-check-downlink-message-1-pe.png)

As you can see we have an event that downlink message was successfully generated by Integration and was sent to Azure Service Bus.

To check it in Azure Service Bus you need to go to Azure Portal, choose topic you have used for downlink and subscription to the topic. 
Select **Receive mode**, then click on **Receive messages**. In pop-up click '**Receive**' button.

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-send-uplink-message-2-pe.png)

<br>

![image](https://img.thingsboard.io/user-guide/integrations/azure-service-bus/azure-service-bus-integration-send-uplink-message-3-pe.png)

## Conclusion

That's it! Good luck in configuring of you IoT devices and dashboards!

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
