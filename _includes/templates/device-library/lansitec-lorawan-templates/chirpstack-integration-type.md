### Add a gateway on the Chirpstack

We need to add a gateway on the [Chirpstack](https://chirpstack.io/){:target="_blank"}.

To add a gateway, follow next steps:

{% assign gateway = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/gateway-1.png,
        title: Login to Chirpstack server. Go to the "**Gateways**" page and click on the "**Add gateway**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/gateway-2.png,
        title: Fill **name**, **Gateway ID** (It will be different, you can find it on the gateway control panel) with your data, scroll down and click on the "**Submit**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/gateway-3.png,
        title: The gateway is added. In gateways tab you can see its status.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=gateway %}

### Add device profile on the Chirpstack

{% assign deviceProfiles = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/device-profiles-1.png,
        title: Login to Chirpstack server. Go to the "**Device profiles**" page and click on **Add device profile** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/device-profiles-2.png,
        title: Fill in the required fields.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/device-profiles-3.png,
        title: Go to the **Codec** tab, select **JavaScript functions** from the **Payload codec** dropdown menu, and paste the decoder function. Then click the **Submit** button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceProfiles %}

- Go to the **Applications** page, click on your application and press **Add device** button.
- Fill in parameters with values from device configuration. Then select the previously created device configuration file, fill in the property parameters of Variables, and click the **Submit** button.
- Put your **Application key** to the field and click on **Submit** button to save the device.

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
  
  // Asset Management Tracker decoder
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
        return { data: decodeGNSSPosition(bytes) };
  
      case 0x07:
        return { data: decodeBeacon(bytes) };
  
      case 0x08:
        return { data: decodeAlarm(bytes) };
  
      default:
        return null;
    }
  }
  
  // type: 0x01 Registration
  function decodeRegistration(bytes) {
    var data = {};
    data.type = "Registration";
    data.adr = ((bytes[0] >> 3) & 0x1) == 0 ? "OFF" : "ON";
    data.power = ((bytes[2] >> 3) & 0x1f) + "dBm";
    data.dr = (bytes[3] >> 4) & 0x0f;
    data.gnssEnable = ((bytes[3] >> 3) & 0x01) == 0 ? "Disable" : "Enable";
    var positionModeValue = (bytes[3] >> 1) & 0x03;
    if (positionModeValue == 0) {
      data.positionMode = "Period";
    } else if (positionModeValue == 1) {
      data.positionMode = "Autonomous";
    } else if (positionModeValue == 2) {
      data.positionMode = "Demand";
    }
    data.bleEnable = (bytes[3] & 0x01) == 0 ? "Disable" : "Enable";
    data.blePositionReportInterval =
      (((bytes[4] << 8) & 0xff00) | (bytes[5] & 0xff)) * 5 + "s";
    data.gnssPositionReportInterval =
      (((bytes[6] << 8) & 0xff00) | (bytes[7] & 0xff)) * 5 + "s";
    data.heartbeatReportInterval = (bytes[8] & 0xff) * 30 + "s";
    data.version =
      (bytes[9] & 0xff).toString(16).toUpperCase() +
      "." +
      (bytes[10] & 0xff).toString(16).toUpperCase();
    data.cfmsg = "1 Confirmed every " + (bytes[11] & 0xff) + " Heartbeat";
    data.hbCount = "Disconnect Judgement " + (bytes[12] & 0xff);
    data.fallDetection = (bytes[13] & 0xff) * 0.5 + " meters";
    return data;
  }
  
  // type: 0x02 Heartbeat
  function decodeHeartbeat(bytes) {
    var data = {};
    data.type = "Heartbeat";
    data.battery = bytes[1] + "%";
    data.rssi = bytes[2] * -1 + "dBm";
    data.snr = (((bytes[3] << 8) & 0xff00) | (bytes[4] & 0xff)) / 100 + "dB";
    var gnssStateValue = (bytes[5] >> 4) & 0x0f;
    if (gnssStateValue == 0) {
      data.gnssState = "Off";
    } else if (gnssStateValue == 1) {
      data.gnssState = "Boot GNSS";
    } else if (gnssStateValue == 2) {
      data.gnssState = "Locating";
    } else if (gnssStateValue == 3) {
      data.gnssState = "Located";
    } else if (gnssStateValue == 9) {
      data.gnssState = "No signal";
    }
    data.moveState = bytes[5] & 0x0f;
    var chargeStateValue = (bytes[6] >> 4) & 0x0f;
    if (chargeStateValue == 0) {
      data.chargeState = "Power cable disconnected";
    } else if (chargeStateValue == 5) {
      data.chargeState = "Charging";
    } else if (chargeStateValue == 6) {
      data.chargeState = "Charge complete";
    }
    return data;
  }
  
  // type: 0x03 GNSSPosition
  function decodeGNSSPosition(bytes) {
    var data = {};
    data.type = "GNSSPosition";
    // longitude
    let longitude =
      (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | bytes[4];
    data.longitude = hex2float(longitude);
  
    // latitude
    let latitude =
      (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | bytes[8];
    data.latitude = hex2float(latitude);
  
    // time
    let time =
      (bytes[9] << 24) | (bytes[10] << 16) | (bytes[11] << 8) | bytes[12];
    data.time = timestampToTime((time + 8 * 60 * 60) * 1000);
  
    return data;
  }
  
  // type: 0x07 Beacon
  function decodeBeacon(bytes) {
    const data = {
      type: "Beacon",
      length: bytes[0] & 0x0f,
    };
  
    for (let i = 0; i < data.length; i++) {
      const index = 6 + 5 * i;
      const major = ((bytes[index] << 8) | bytes[index + 1])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      const minor = ((bytes[index + 2] << 8) | bytes[index + 3])
        .toString(16)
        .toUpperCase()
        .padStart(4, "0");
      const rssi = bytes[index + 4] - 256 + "dBm";
  
      data["beacon" + (i + 1)] = major + minor;
      data["rssi" + (i + 1)] = rssi;
    }
  
    return data;
  }
  
  // type: 0x08 Alarm
  function decodeAlarm(bytes) {
    var data = {};
    data.type = "Alarm";
  
    var alarmValue = bytes[1] & 0xff;
    if (alarmValue === 1) {
      data.alarm = "SOS";
    } else if (alarmValue === 2) {
      data.alarm = "Fall";
    } else {
      data.alarm = "Unknown";
    }
  
    return data;
  }
  
  function hex2float(num) {
    var sign = num & 0x80000000 ? -1 : 1;
    var exponent = ((num >> 23) & 0xff) - 127;
    var mantissa = 1 + (num & 0x7fffff) / 0x7fffff;
    return sign * mantissa * Math.pow(2, exponent);
  }
  
  function timestampToTime(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
```
{:.copy-code.expandable-15}

### Add a device on the Chirpstack

{% assign application = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/application-1.png,
        title: Go to the **Applications** page and click on **Add application** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/application-2.png,
        title: Enter name and click **Submit** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/application-3.png,
        title: Click **Add device**.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/application-4.png,
        title: Fill in the required fields with your device information and specify the previously created device profile.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/application-5.png,
        title: Go to the **Variables** tab, enter the value for **ThingsBoardAccessToken**, and click the **Submit** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/application-6.png,
        title: Put your **Application key** to the field and click on **Submit** button to save the device.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=application %}

### Configure application integration with ThingsBoard

{% assign thingsboard = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/thingsboard-1.png,
        title: Go to the **Integrations** page, find and select the **ThingsBoard**.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/thingsboard-2.png,
        title: Enter **the URL of your ThingsBoard server** and click **Submit** button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=thingsboard %}

### Create device on ThingsBoard

{% assign devices = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/devices-1.png,
        title: Go to the **Devices** page.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/devices-2.png,
        title: Click on **Add device** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/devices-3.png,
        title: Fill in the device name and click the **Next: Credentials** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/devices-4.png,
        title: Enter the device **Access token** (previously copied **Device EUI** value) and click the **Add** button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/devices-5.png,
        title: Click on the device to open device information window.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/devices-6.png,
        title: Go to the **Latest telemetry** tab to view device reported data.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=devices %}