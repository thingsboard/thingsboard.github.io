---
layout: docwithnav
title: Solar Bluetooth Gateway
description: Solar Bluetooth Gateway
hidetoc: "true"
---

* TOC
{:toc}

<img src="/images/samples/lansitec/solar-bluetooth-gateway.png" alt="LoRaWAN Solar Bluetooth Gateway" style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px" />[**Solar Bluetooth Gateway**](https://www.lansitec.com/products/lorawan-solar-bluetooth-gateway/){:target="_blank"} is designed based on LoRaWAN and Bluetooth 5.0 technology. It receives nearby [**Bluetooth beacon**](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"} messages, and then transmit to a LoRaWAN gateways through LoRaWAN after restructure the data. It is powered with robust solar film and a 5300mAh rechargeable battery.

<br><br><br><br>

## Prerequisites

To continue with this guide we will need the following:

- [Solar Bluetooth Gateway](https://www.lansitec.com/products/lorawan-solar-bluetooth-gateway/){:target="_blank"}
- [LoRaWAN Gateway](https://www.lansitec.com/products/outdoor-lorawan-gateway/){:target="_blank"}
- [Bluetooth beacon](https://www.lansitec.com/products/bluetooth-beacon/){:target="_blank"}
- [Network Server account](https://www.chirpstack.io/){:target="_blank"}
- [ThingsBoard account](https://thingsboard.io/installations/choose-region/){:target="_blank"}

## Configuration

To create integration with the network server Chirpstack

### Add a LoRaWAN Gateway on Chirpstack

First, we need to add a LoRaWAN gateway on the [Chirpstack](https://chirpstack.io/){:target="_blank"}.

Step to add a gateway:

{% assign solarGateway = '
    ===
        image: /images/samples/lansitec/gateway-1.png,
        title: Log in to Chirpstack server. Go to the **Gateways** page and click the **Add gateway** button.
    ===
        image: /images/samples/lansitec/gateway-2.png,
        title: Enter the **Name**, **Gateway ID** (found in the gateway control panel), then scroll down and click the **Submit** button.
    ===
        image: /images/samples/lansitec/gateway-3.png,
        title: Once added, you can view the gateway&#39;s status under the **Gateways** tab.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=solarGateway %}

### Configure the LoRaWAN Gateway to send data

To connect the gateway and transmit data to ChirpStack, follow these steps:

{% assign solarRak = '
    ===
        image: /images/samples/lansitec/rak-1.png,
        title: Open the gateway control panel. Go to the **Network Settings** page and set the Mode to **Packet Forwarder**. Enter your server address in the **Server Address** field (e.g., **192.168.31.11** in our case), then click **Save & Apply** button.
    ===
        image: /images/samples/lansitec/rak-2.png,
        title: Verify the gateway&#39;s status on ChirpStack, it should now appear online.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=solarRak %}

### Add a device profile on Chirpstack

{% assign solarDeviceProfile = '
    ===
        image: /images/samples/lansitec/device-profiles-1.png,
        title: In Chirpstack UI, go to the **Device Profiles** page and click **Add device profile** button.
    ===
        image: /images/samples/lansitec/device-profiles-2.png,
        title: Fill in the required fields.
===
        image: /images/samples/lansitec/device-profiles-3.png,
        title: Navigate to the **Codec** tab, select "JavaScript functions”, paste the **Solar Bluetooth Gateway decoder**, and click **Submit**.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=solarDeviceProfile %}

**Solar Bluetooth Gateway decoder**:

```javascript
  // Decode uplink function.
  //
  // Input is an object with the following fields:
  // - bytes = Byte array containing the uplink payload, e.g. [255, 230, 255, 0]
  // - fPort = Uplink fPort.
  // - variables = Object containing the configured device variables.
  //
  // Output must be an object with the following fields:
  // - data = Object representing the decoded payload.
  
  // Solar Bluetooth Gateway decoder
  function decodeUplink(input) {
    // bytes
    var bytes = input.bytes;
    // type
    var uplinkType = (bytes[0] >> 4) & 0x0f;
  
    switch (uplinkType) {
      case 0x01:
        return { data: decodeRegistration(bytes) };
  
      case 0x02:
        return { data: decodeHeartbeat(bytes) };
  
      case 0x03:
        return { data: decodeDeviceReportRule(bytes) };
  	  
  	case 0x05:
        return { data: decodeWaterLevelDetection(bytes) };
  
      case 0x08:
        return { data: decodeDeviceType1(bytes) };
  
      case 0x09:
        return { data: decodeDeviceType2(bytes) };
  
      case 0x0a:
        return { data: decodeDeviceType3(bytes) };
  
      case 0x0e:
        return { data: decodeMultiDeviceTypeMessage(bytes) };
  
      case 0x0f:
        return { data: decodeAcknowledgment(bytes) };
  
      default:
        return null;
    }
  }
  
  // type: 0x1 Registration
  function decodeRegistration(bytes) {
    var data = {};
    data.type = "Registration";
    // adr
    data.adr = ((bytes[0] >> 3) & 0x1) == 0 ? "OFF" : "ON";
    // mode
    data.mode = bytes[0] & 0x07;
    // loRaWANBand
    var loRaWANBandValue = bytes[1];
    if (loRaWANBandValue == 0x00) {
      data.loRaWANBand = "KR920";
    } else if (loRaWANBandValue == 0x01) {
      data.loRaWANBand = "AU915";
    } else if (loRaWANBandValue == 0x04) {
      data.loRaWANBand = "CN470";
    } else if (loRaWANBandValue == 0x08) {
      data.loRaWANBand = "AS923";
    } else if (loRaWANBandValue == 0x10) {
      data.loRaWANBand = "EU433";
    } else if (loRaWANBandValue == 0x20) {
      data.loRaWANBand = "EU868";
    } else if (loRaWANBandValue == 0x40) {
      data.loRaWANBand = "US915";
    }
    // power
    data.power = ((bytes[2] >> 3) & 0x1f) + "dBm";
    // continuousBleReceiveEnable
    data.continuousBleReceiveEnable =
      ((bytes[2] >> 1) & 0x1) == 0 ? "Disable" : "Enable";
    // dr
    data.dr = (bytes[3] >> 4) & 0x0f;
    // positionReportInterval
    data.positionReportInterval =
      (((bytes[4] << 8) & 0xff00) | (bytes[5] & 0xff)) * 5 + "s";
    // heartbeatInterval
    data.heartbeatInterval = bytes[6] * 30 + "s";
    // bleReceivingDuration
    data.bleReceivingDuration = bytes[7] + "s";
    // networkReconnectionInterval
    data.networkReconnectionInterval = bytes[8] * 5 + "min";
    return data;
  }
  
  // type: 0x2 Heartbeat
  function decodeHeartbeat(bytes) {
    var data = {};
    // type
    data.type = "Heartbeat";
    // battery
    var batteryValue = bytes[1];
    if (batteryValue > 100) {
      data.battery = bytes[1] / 100 + 1.5 + "V";
    } else {
      data.battery = bytes[1] + "%";
    }
    // rssi
    data.rssi = bytes[2] * -1 + "dBm";
    // snr
    data.snr = (((bytes[3] << 8) & 0xff00) | (bytes[4] & 0xff)) / 100 + "dB";
    // version
    data.version = ((bytes[5] << 8) & 0xff00) | (bytes[6] & 0xff);
    // chargeState
    var chargeStateValue = bytes[7] & 0xff;
    if (chargeStateValue == 0x00) {
      data.chargeState = "Not charging";
    } else if (chargeStateValue == 0x50) {
      data.chargeState = "Charging";
    } else if (chargeStateValue == 0x60) {
      data.chargeState = "Charging completed";
    }
    return data;
  }
  
  // type: 0x3 DeviceReportRule
  function decodeDeviceReportRule(bytes) {
    var data = {};
    data.type = "DeviceReportRule";
    data.deviceTypeQuantity = bytes[1] & 0xff;
    data.deviceTypeId = (bytes[2] >> 4) & 0x0f;
    data.filterAndDataBlockQuantity = bytes[2] & 0x0f;
    var filterBlock = [];
    var dataBlock = [];
    var macBlock = [];
    var index = 3;
    for (let i = 0; i < data.filterAndDataBlockQuantity; i++) {
      var ruleType = bytes[index++] & 0xff;
      var startAddress = bytes[index++] & 0xff;
      var endAddress = bytes[index++] & 0xff;
      var filter = {};
      if (ruleType == 1) {
        filter.ruleType = "FilterBlock";
        filter.startAddress = byteToHex(startAddress);
        filter.endAddress = byteToHex(endAddress);
        var len = endAddress - startAddress;
        var filterValue = "";
        for (let j = 0; j < len + 1; j++) {
          filterValue += byteToHex(bytes[index + j]);
        }
        filter.value = filterValue;
        index = index + (endAddress - startAddress + 1);
        filterBlock.push(filter);
      } else if (ruleType == 2) {
        filter.ruleType = "DataBlock";
        filter.startAddress = byteToHex(startAddress);
        filter.endAddress = byteToHex(endAddress);
        dataBlock.push(filter);
      } else if (ruleType == 3) {
        filter.ruleType = "MACBlock";
        filter.startAddress = byteToHex(startAddress);
        filter.endAddress = byteToHex(endAddress);
        macBlock.push(filter);
      }
    }
    data.filterBlock = filterBlock;
    data.dataBlock = dataBlock;
    data.macBlock = macBlock;
    return data;
  }
  
  // type: 0x5 WaterLevelDetection
  function decodeWaterLevelDetection(bytes) {
  	var data = {};
  	// type
  	data.type = "WaterLevelDetection";
  	data.waterLevel = (((bytes[1] << 8) & 0xff00) | (bytes[2] & 0xff)) + "mm";
  	return data;
  }
  
  // type: 0x8 DeviceType1
  function decodeDeviceType1(bytes) {
    var data = {
      type: "DeviceType1",
      number: bytes[0] & 0x0f,
    };
    var index = 1;
    for (let i = 0; i < data.number; i++) {
      var major = ((bytes[index] << 8) | bytes[index + 1])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var minor = ((bytes[index + 2] << 8) | bytes[index + 3])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var rssi = bytes[index + 4] - 256 + "dBm";
  
      data["beacon" + (i + 1)] = major + minor;
      data["rssi" + (i + 1)] = rssi;
  
      index = index + 5;
    }
  
    return data;
  }
  
  // type: 0x9 DeviceType2
  function decodeDeviceType2(bytes) {
    var data = {
      type: "DeviceType2",
      number: bytes[0] & 0x0f,
    };
    var index = 1;
    for (let i = 0; i < data.number; i++) {
      var major = ((bytes[index] << 8) | bytes[index + 1])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var minor = ((bytes[index + 2] << 8) | bytes[index + 3])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var rssi = bytes[index + 4] - 256 + "dBm";
  
      data["beacon" + (i + 1)] = major + minor;
      data["rssi" + (i + 1)] = rssi;
  
      index = index + 5;
    }
  
    return data;
  }
  
  // type: 0xa DeviceType3
  function decodeDeviceType3(bytes) {
    var data = {
      type: "DeviceType3",
      number: bytes[0] & 0x0f,
    };
    var index = 1;
    for (let i = 0; i < data.number; i++) {
      var major = ((bytes[index] << 8) | bytes[index + 1])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var minor = ((bytes[index + 2] << 8) | bytes[index + 3])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var rssi = bytes[index + 4] - 256 + "dBm";
  
      data["beacon" + (i + 1)] = major + minor;
      data["rssi" + (i + 1)] = rssi;
  
      index = index + 5;
    }
  
    return data;
  }
  
  // type: 0xe MultiDeviceTypeMessage
  function decodeMultiDeviceTypeMessage(bytes) {
    var data = {
      type: "MultiDeviceTypeMessage",
      number: bytes[0] & 0x0f,
    };
    var index = 1;
    for (let i = 0; i < data.number; i++) {
      var index = 1 + 6 * i;
      var deviceTypeId = bytes[index];
      var major = ((bytes[index + 1] << 8) | bytes[index + 2])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var minor = ((bytes[index + 3] << 8) | bytes[index + 4])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      var rssi = bytes[index + 5] - 256 + "dBm";
  
      data["deviceTypeId" + (i + 1)] = deviceTypeId;
      data["beacon" + (i + 1)] = major + minor;
      data["rssi" + (i + 1)] = rssi;
  
      index = index + 6;
    }
  
    return data;
  }
  
  // type: 0xf Acknowledgment
  function decodeAcknowledgment(bytes) {
    var data = {};
    data.type = "Acknowledgment";
    data.result = (bytes[0] & 0x0f) == 0 ? "Success" : "Failure";
    data.msgId = (bytes[1] & 0xff).toString(16).toUpperCase();
  
    return data;
  }
  
  function byteToHex(str) {
    return str.toString(16).toUpperCase().padStart(2, "0");
  }
  
```
{:.copy-code.expandable-10}

### Add a device on Chirpstack

{% assign solarApplication = '
    ===
        image: /images/samples/lansitec/application-1.png,
        title: Go to the **Applications** page and click **Add application** button.
    ===
        image: /images/samples/lansitec/application-2.png,
        title: Enter application name and click **Submit** button.
    ===
        image: /images/samples/lansitec/application-3.png,
        title: Click **Add device** button.
    ===
        image: /images/samples/lansitec/application-4.png,
        title: Fill in the device configuration parameters.
    ===
        image: /images/samples/lansitec/application-5.png,
        title: Go to the **Variables** dection, enter the "ThingsBoardAccessToken" parameter, and then click the **Submit** button.
    ===
        image: /images/samples/lansitec/application-6.png,
        title: Enter your **Application key** in this field and click **Submit** button to save the device.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=solarApplication %}

### Configure Application Integration with ThingsBoard

{% assign solarThingsboard = '
    ===
        image: /images/samples/lansitec/thingsboard-1.png,
        title: Go to the **Integrations** page and click on **ThingsBoard**.
    ===
        image: /images/samples/lansitec/thingsboard-2.png,
        title: Enter your **ThingsBoard server** address and click **Submit**.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=solarThingsboard %}

## Create device on ThingsBoard

{% assign solarDevices = '
    ===
        image: /images/samples/lansitec/devices-1.png,
        title: Go to the **Devices** page.
    ===
        image: /images/samples/lansitec/devices-2.png,
        title: Click the **plus** icon to add new device.
    ===
        image: /images/samples/lansitec/devices-3.png,
        title: Enter the device information and click "**Next: Credentials**" button.
    ===
        image: /images/samples/lansitec/devices-4.png,
        title: Enter the **Access token** for the device and click **Add** button.
    ===
        image: /images/samples/lansitec/devices-5.png,
        title: Click on the device to view detailed information.
    ===
        image: /images/samples/lansitec/devices-6.png,
        title: Navigate to the **Latest telemetry** tab to view the device&#39;s reported data.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=solarDevices %}

## Conclusion

With the information provided in this guide, you can easily connect your Solar Bluetooth Gateway and transmit data to ThingsBoard.

For further learning about key concepts and features, explore the platform&#39;s [documentation](/docs/pe/){:target="_blank"}. You can also configure [alarm rules](/docs/pe/user-guide//device-profiles/#alarm-rules){:target="_blank"}{:target="_blank"} or set up [dashboards](/docs/pe/user-guide//dashboards/){:target="_blank"}.