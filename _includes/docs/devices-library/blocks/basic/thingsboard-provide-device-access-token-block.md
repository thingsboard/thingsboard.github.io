To connect your device, you'll first need to get its credentials. While ThingsBoard supports a variety of device credentials, for this guide, we will use the default auto-generated credentials, which is an access token.  
{% assign provisionDeviceCE = '
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-ce/hello-world-2-1-connect-device-1-ce.png,
        title: Click on the device row in the table to open device details.
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-ce/hello-world-2-1-connect-device-2-ce.png,
        title: Click "**Copy access token**". The token will be copied to your clipboard. Please save it in a safe place.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png,
        title: Click on the device row in the table to open device details.
    ===
        image: https://img.thingsboard.io/helloworld/getting-started-pe/hello-world-2-1-connect-device-2-pe.png,
        title: Click "**Copy access token**". The token will be copied to your clipboard. Please save it in a safe place.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 