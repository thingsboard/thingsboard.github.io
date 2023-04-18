{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

Azure Service Bus Integration allows to stream data from Azure Service bus to ThingsBoard and converts device payloads to the ThingsBoard format.

![image](/images/user-guide/integrations/azure-service-bus.png)

## Configure Azure Service Bus

To create ThingsBoard Service Bus integration you will need two things created in Azure portal: **topic** and **subscription** to the topic. 
After topic is created you will need to find and save **connection string**, you will need it later.
- [Create Topic and subscription to the topic](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal)
- [Find connection string to the topic](https://azurelessons.com/azure-service-bus-connection-string/)

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
   "devName": "sensor01",
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

![image](/images/azure-service-bus/create_converter.png)

## Create Integration in Thingsboard

At this time, we have topic created in Azure Portal and uplink converter created in Thingsboard.

1) Go to the Thingsboard and choose **Integrations center** -> **Integrations** in menu

2) Click on **'plus'** and in pop-up we have to enter Name, choose type **Azure Service Bus**, choose uplink converter,
skip step with downlink converter, then fill in **connection string**, **topic**  and **subscription** names 

3) [Optional] Click on **Check connection** button to check correctly copied connection string

4) Click **Add** and see your created integration

{% include images-gallery.html imageCollection="integration" preview="false" %}

## Test it up!

To send a test message, use the additional functionality of Azure Service bus, Service Bus Explorer.

1) Sign-in to Azure portal.

2) Select the namespace of the service bus topic.

3) Choose the appropriate Topic name.

4) On the left blade select **Service Bus Explorer**.

5) Click on **Send message**, choose type of payload according to uplink converter and send test message.

![image](/images/azure-service-bus/send_uplink.png)

**Example of payload:**
```ruby
{
    "devName": "sensor01",
    "msg": {
        "temp": 23,
        "humidity": 40
    }
}
```
{: .copy-code}

To check if the message has arrived at Service Bus integration open the events tab of integration.

![image](/images/azure-service-bus/check_uplink.png)

## Advanced usage: Downlink Messaging

To send messages to device you need to configure downlink settings, such as downlink converter and information about Service Bus topic that will receive mesages.
If you don`t have topic yet then [Create topic and subscription](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal). 
Create subscription to the topic for testing purpose so that you can check messages later.

1) Save **topic** and **connection string** to the topic somewhere, you will need them later.

2) Create Downlink converter (You need to do same steps like when was creating Uplink, but choose Downlink and specify another function).

Simple example of the Downlink conveter:

{% capture servicebusdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/service-bus/service-bus-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/service-bus/service-bus-downlink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="servicebusdownlinkconverterconfig" toggle-spec=servicebusdownlinkconverterconfig %}

{% capture difference %}
**NOTE**
<br>
If you used another name of device (not TB-D-01) you have to specify in the Downlink converter your device name for **deviceId** field
{% endcapture %}
{% include templates/info-banner.md content=difference %}

![image](/images/azure-service-bus/create_downlink_converter.png)

3) Go to integration and specify this **converter** and add the name of **topic** and **connection string** to corresponding fields.

![image](/images/azure-service-bus/fill_in_downlink_info.png)

**Ok, downlink converter ready, integration ready, Let's test with help of downlink node:**

1) After test of uplink, integration have created the device inside Thingsboard, and we need to know for which Rule Chain it connected.
   Just go to the **Entities** -> **Devices** in Thingsboard menu and find the device with the name that we have used in the uplink.

{% include images-gallery.html imageCollection="find_device_profile" preview="false" %}

2) Find the name of necessary rule chain in Rule Chain tabs of Thingsboard menu.

3) In 'Search nodes' field type 'down' and choose in the menu **integration downlink**, drag it to the Canvas. In pop-up you need to specify the name of rule node and choose our integration

4) Click on left gray circle of **message type switch** node and drag it to gray circle of our downlink rule node. Here choose **Attributes update** and click 'Add'

{% include images-gallery.html imageCollection="create_downlink_node" preview="false" %}

5) Great. Save Canvas and lets go to **'Entities'** -> **'Devices'** and choose our device. Switch to **Attributes** in 'Entity attributes scope' list choose **Shared attributes**.
   Tap on 'plus' to create new. Specify in pop-up the key of attribute, type of value and some value.

6) Tap 'Add' and go to the Integration to check the result of downlink.

{% include images-gallery.html imageCollection="post_attribute" preview="false" %}

How you can see, we have a message that Downlink successfully received by Integration and sent to Azure Service Bus.
To check it in Azure Service Bus you need to go to Azure Portal, choose topic you have used for downlink and subscription to the topic. 
Then select *Peek mode* -> *Receive mode* and click on *Receive messages*.

![image](/images/azure-service-bus/check_downlink.png)

## Conclusion

**That's it! Good luck in configuring of you IoT devices and dashboards!**

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
