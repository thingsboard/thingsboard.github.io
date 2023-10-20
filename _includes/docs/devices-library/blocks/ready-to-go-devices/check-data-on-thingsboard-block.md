Once you have successfully done all the steps above and {{deviceName}} sent data, you can see it in the 
Device Telemetry Tab:

{% assign deviceTelemetryCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-2-1-connect-device-1-ce.png,
        title: Click on the device row in the table to open device details;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-2-1-connect-device-3-ce.png,
        title: Navigate to the telemetry tab.
    '
%}

{% assign deviceTelemetryPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png,
        title: Click on the device row in the table to open device details;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-3-pe.png,
        title: Navigate to the telemetry tab.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryCE %}
{% endif %}

Let’s display {{deviceName}} attributes and telemetry on a dashboard. For this, you can create your own dashboard with 
your custom widgets or use a ready-made dashboard and simply import it.
