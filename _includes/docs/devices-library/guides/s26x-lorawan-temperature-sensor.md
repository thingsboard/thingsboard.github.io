
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://www.ezurio.com/iot-devices/lorawan-iot-devices/rs26x-sensor" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- A smartphone with the Ezurio Xbit app for configuration of the RS26x ([Android](https://play.google.com/store/apps/details?id=com.rfpros.xbitmobile&hl=en_US){:target="_blank"}/[iOS](https://apps.apple.com/us/app/canvas-xbit-mobile/id6478117073){:target="_blank"})
- LoRaWAN gateway (e.g. [Ezurio RG1xx](https://www.ezurio.com/iot-devices/lorawan-iot-devices/sentrius-rg1xx-lorawan-gateway-wi-fi-ethernet-optional-lte-us-only){:target="_blank"})
- [The Things Stack Community Edition account](https://www.thethingsnetwork.org/){: target="_blank"}
  '
  %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[The Sentrius™ RS26x]({{deviceVendorLink}}){: target="_blank"} s a battery powered IP67 temperature sensor platform that delivers HACCP level temperature monitoring with real time alerting for your food safety compliance. In addition to ensuring product safety, these intelligent devices avoid inventory loss, improve facility efficiency and save you time and money in automated day to day operations.  

They are available in two variants: One with an internal temperature sensor, and a second that supports an external sensor probe.

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}

## Device connection

Please follow the official RS26x Getting Started Guide: [Connecting RS26x to The Things Stack v3](https://www.ezurio.com/documentation/quick-start-guide-connecting-rs26x-to-the-things-stack-v3){: target="_blank"} and the official [RS26x User Guide](https://www.ezurio.com/documentation/user-guide-rs26x-series){: target="_blank"} to configure the sensor properly and connect it to The Things Stack.

## Creating an Application on TTN

On the TTN console go to Applications:  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-104754.png)

and select "Add Application":

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-104939.png)

Now we can register end devices.  

## Register End-Device at TTN

In the newly created application select the Application overview and click on **+ Register end device**.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-105022.png)

The Ezurio RS26x LoRaWAN sensor is a known device at TTN and hence you can select it from the device repository.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-105151.png)

Apply the below settings and make sure to align the region profile and frequency plan with your location.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-105302.png)

Next we need to enter the provisioning information for the new device.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-110041.png)

JoinEUI, DevUEI and AppKey are provided as QR code on the RS26x sensor.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/RS26x_qr_codes.png)

Alternatively you can also grab the provisioning information from the RS26x Sensor Applet in the Xbit mobile app. 

The Ezurio Xbit app for configuration of the RS26x is available for [Android](https://play.google.com/store/apps/details?id=com.rfpros.xbitmobile&hl=en_US){: target="_blank"} and [iOS](https://apps.apple.com/us/app/canvas-xbit-mobile/id6478117073){: target="_blank"}. See the official [RS26x quick start guide](https://www.ezurio.com/documentation/quick-start-guide-connecting-rs26x-to-the-things-stack-v3){: target="_blank"} and [RS26x user guide](https://www.ezurio.com/documentation/user-guide-rs26x-series){: target="_blank"} for details on configuring the RS26x sensor.

{% assign xbitApp = '
    ===
        image: /images/devices-library/ready-to-go-devices/s26x-lorawan/xbit_app_1.png,
    ===
        image: /images/devices-library/ready-to-go-devices/s26x-lorawan/xbit_app_2.png,
    ===
        image: /images/devices-library/ready-to-go-devices/s26x-lorawan/xbit_app_3.png,
    ===
        image: /images/devices-library/ready-to-go-devices/s26x-lorawan/xbit_app_4.png,
    ===
        image: /images/devices-library/ready-to-go-devices/s26x-lorawan/xbit_app_5.png,
    ===
        image: /images/devices-library/ready-to-go-devices/s26x-lorawan/xbit_app_6.png,
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=xbitApp %}

The device should finally show up under the Device overview in the TTN console.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-105302.png)

And you should be able to see some live data. It might take a while until new live data shows up depending on the device settings.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-111643.png)

## Log in to ThingsBoard

Log in to **ThingsBoard** by following [this link](https://thingsboard.io/installations/choose-region/){: target="_blank"} and selecting your region.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-113937.png)

## Adding the Data Converter

The first thing to add would be the uplink data converter to convert the incoming data from TTN into a usable format for Thingsboard dashboard widgets.  

- Navigate to **Data converter** in the **Integrations center**.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-124559.png)

- Click on "**+**" and select **import converter**.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-124649.png)

- Download the [things_stack_community_uplink_converter_for_ezurio_rs26x.json](/docs/user-guide/resources/things_stack_community_uplink_converter_for_ezurio_rs26x.json){:target="_blank" download="things_stack_community_uplink_converter_for_ezurio_rs26x.json"} file.
- Drag and drop it into the import window and click **Import**.
- After the upload is complete, you should see the newly added data converter.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-125249.png)

## Adding an Integration

Navigate to **Integration center** → **Integrations** and click "**+**" to add a new integraton.  

Basic settings.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-125602.png)

Select Uplink Data Converter.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-125647.png)

Skip Downlink Data Converter.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-125708.png)

Enter connection details.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-130042.png)

Make sure to use the proper regional settings from your specific TTN settings. The credentials need to be fetched from the TTN console, see below.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-125911.png)

In Thingsboard click **Check connection** and you should see a **Connected** message.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-130107.png)

Click add to finish creating the integration.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-130156.png)

If you now click on the integration, you should see uplink messages coming in if the RS26x is active. Depending on the set uplink interval in your device, it might take a moment until first data can be seen.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-130334.png)

**Note:** The display of uplink messages is set to Failure messages only. To see all messages you need to enable this in the Debug Configuration as shown below.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20251120-125900.png)

You can click on the three dots in the Message column and view the uplink data sent.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-130515.png)

The data is JSON format and looks like below. Underneath “decoded_payload” you see the RS26x battery status as well as the Temperature.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-130542.png)

## New device is created

When the device is active and transmitting data to TTN it will automatically create a Device profile...  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-151757.png)

...and a device.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-151840.png)

## Create a Dashboard

Navigate to Dashboard and click "**+**".  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-133720.png)

This opens a new, empty dashboard where you can start adding widgets.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-133818.png)

Go to **Cards** widgets bundle and select a **Simple Value and chart card** widget.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-133852.png)

Select our device as data source and the data key should be temperature. Feel free to enter a new title as well.  

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20250917-152017.png)

You can now adjust the widget size or explore the advanced settings, for example, to add an extra decimal place.

Try adding other widgets showing other telemetry data like RSSI, SNR or the used spreading factor as indication of the link quality.

![image](/images/devices-library/ready-to-go-devices/s26x-lorawan/image-20251110-103326.png)

## Conclusion

Now you can easily connect your RS26x LoRaWAN temperature sensor and start sending data to **ThingsBoard**.  

To go further, explore the [ThingsBoard documentation](https://thingsboard.io/docs/pe/){:target="_blank"} to learn more about key features, such as creating more [dashboards](https://thingsboard.io/docs/pe/user-guide/dashboards/){:target="_blank"} and leveragin additional widgets to visualize your telemetry, or setting up [alarm rules](https://thingsboard.io/docs/pe/user-guide/alarm-rules/){:target="_blank"} to monitor device behavior in real time.

