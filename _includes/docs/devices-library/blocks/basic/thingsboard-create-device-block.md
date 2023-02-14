For simplicity, we will provide the device manually using the UI.

{% assign provisionDeviceCE = '
    ===
        image: /images/helloworld/hello-world-step-1-item-1.png,
        title: Log in to your ThingsBoard instance and open the Devices page.
    ===
        image: /images/helloworld/hello-world-step-1-item-2.png,
        title: Click on the "+" icon in the top right corner of the table and then select "Add new device".
    ===
        image: /images/helloworld/hello-world-step-1-item-3.png,
        title: Fill in the device name. For example, "My Device". No other changes are required at this time. Click "Add" to add the device.
    ===
        image: /images/helloworld/hello-world-step-1-item-4.png,
        title: Your device should be listed first because devices are sorted by creation time in the table by default.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-1.png,
        title: Log in to your ThingsBoard instance and open the Devices page.
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-2.png,
        title: Click on the "+" icon in the top right corner of the table and then select "Add new device".
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-3.png,
        title: Fill in the device name. For example, "My Device". No other changes are required at this time. Click "Add" to add the device.
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-4.png,
        title: Your device should be listed first because devices are sorted by creation time in the table by default.
    '
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 