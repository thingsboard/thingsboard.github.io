For simplicity, we will provide the device manually using the UI.

{% assign provisionDeviceCE = '
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-ce/hello-world-1-1-provision-device-1-ce.png,
        title: Login to your ThingsBoard instance and navigate to the "**Entities**". Then click the "**Devices**" page.
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-ce/hello-world-1-1-provision-device-2-ce.png,
        title: Click on the "**+**" icon in the top right corner of the table and then select "**Add new device**".
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-ce/hello-world-1-1-provision-device-3-ce.png,
        title: Input device name. For example, "*My Device*". No other changes required at this time. Click "**Add**" to add the device.
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-ce/hello-world-1-1-provision-device-4-ce.png,
        title: Your device has been added.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png,
        title: Log in to your ThingsBoard instance and open the Devices page.
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png,
        title: By default, you navigate to the device group “All”. Click on the "**+**" icon in the top right corner of the table and then select "**Add new device**".
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png,
        title: Input device name. For example, "My Device". No other changes are required at this time. Click "**Add**" to add the device.
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png,
        title: Your first device has been added.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 