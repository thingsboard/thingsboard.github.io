
{% assign provisionDeviceCE = '
    ===
        image: /images/helloworld/hello-world-step-1-item-1.png 
        title: Login to your ThingsBoard instance and open the Devices page.
    ===
        image: /images/helloworld/hello-world-step-1-item-2.png 
        title: Click on the "+" icon in the top right corner of the table and then select "Add new device".
    ===
        image: /images/helloworld/hello-world-step-1-item-3.png 
        title: Input device name. For example, "My New Device". No other changes required at this time. Click "Add" to add the device.
    ===
        image: /images/helloworld/hello-world-step-1-item-4.png 
        title: Now your device should be listed first, since the table sort devices using the time of the creation by default.
    ===
        image: /images/helloworld/hello-world-step-2-item-1.png, 
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/hello-world-step-2-item-2.png, 
        title: Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-1.png
        title: Login to your ThingsBoard instance and open Device Groups page.
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-3.png,
        title: Navigate to default Device group "ALL".
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-2.png,
        title: Click on the "+" icon in the top right corner of the table and then select "Add Device".
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-4.png,
        title: Input device name. For example, "My New Device". No other changes are required at this time. Click "Add" to add the device.
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-5.png,
        title: Now your device should be listed first, since the table sorts devices using the time of the creation by default.
    ===
        image: /images/helloworld/hello-world-pe-step-2-item-1.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/hello-world-pe-step-2-item-2.png,
        title: Click "Copy access token". Token will be copied to your clipboard. Save it to a safe place.

    '
%}

To do this, go to the [ThingsBoard home page](https://thingsboard.cloud/home){:target="_blank"} and log in.
After logging in you can follow the next steps to add device.  

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 