{% assign vendorLowerCase = page.vendor | downcase %}
{% assign deviceNameInPath = page.deviceImageFileName | split: "." | first %}
{% assign converterFilePath = "/docs/device-library/blocks/integrations/external-platforms/" | append: vendorLowerCase | append: "/chirpstack/" | append: deviceNameInPath | append: "-uplink-converter.md" %}

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

{% include {{ converterFilePath }} %}

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