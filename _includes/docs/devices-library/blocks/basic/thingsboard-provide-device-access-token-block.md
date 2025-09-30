To connect your device, you'll first need to get its credentials. 
While {% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}**ThingsBoard Edge**{% else %}**ThingsBoard**{% endif %} supports a variety of device credentials, for this guide, 
we will use the default auto-generated credentials, which is an access token.  

{% assign provisionDeviceCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-2-1-connect-device-1-ce.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-2-1-connect-device-2-ce.png,
        title: Click "**Copy access token**". The token will be copied to your clipboard. Please save it in a safe place.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-2-pe.png,
        title: Click "**Copy access token**". The token will be copied to your clipboard. Please save it in a safe place.
    '
%}

{% assign provisionDeviceEdgeCE = '
    ===
        image: /images/edge/config/general/connect-device-1-ce.webp,
        title: Click on the device to open device details.
    ===
        image: /images/edge/config/general/connect-device-2-ce.webp,
        title: Click **"Copy access token"**. The token will be copied to your clipboard. Please save it in a safe place.
'
%}

{% assign provisionDeviceEdgePE = '
    ===
        image: /images/edge/config/general/connect-device-1-pe.webp,
        title: Click on the device to open device details.
    ===
        image: /images/edge/config/general/connect-device-2-pe.webp,
        title: Click **"Copy access token"** button. The token will be copied to your clipboard. Please save it in a safe place.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% elsif page.docsPrefix == "pe/edge/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceEdgePE %}
{% elsif page.docsPrefix == "edge/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceEdgeCE %}
{% else %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 