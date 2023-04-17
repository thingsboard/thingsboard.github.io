To connect the device you need to get the device credentials first. ThingsBoard supports various device credentials. We recommend using default auto-generated credentials, which is an access token for this guide.

{% assign provisionDeviceCE = '
    ===
        image: /images/helloworld/hello-world-step-2-item-1.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/hello-world-step-2-item-2.png,
        title: Click "Copy access token". The token will be copied to your clipboard. Please save it in a safe place.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: /images/helloworld/hello-world-pe-step-2-item-1.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/hello-world-pe-step-2-item-2.png,
        title: Click "Copy access token". The token will be copied to your clipboard. Please save it in a safe place.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 