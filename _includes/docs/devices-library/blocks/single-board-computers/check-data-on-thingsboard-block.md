Once you have successfully published the attributes and telemetry data, you should immediately see them in the Device Telemetry Tab:

{% assign deviceTelemetryCE = '
    ===
        image: /images/helloworld/hello-world-step-2-item-1.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/hello-world-step-3-item-3.png,
        title: Navigate to the telemetry tab.
    '
%}

{% assign deviceTelemetryPE = '
    ===
        image: /images/helloworld/hello-world-pe-step-1-item-1.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/hello-world-pe-step-2-item-4.png,
        title: Navigate to the telemetry tab.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryCE %}
{% endif %} 

Also, let’s display OrangePI attributes and telemetry on a dashboard. For this, you can create your own dashboard with 
your custom widgets or use a ready-made dashboard and simply import it.
 
{% capture minicomputerstogglespec %}
New Dashboard<small>Recommended</small>%,%accessToken%,%templates/device-library/minicomputers/device-new-dashboard.md%br%
Imported Dashboard<small>No security</small>%,%anonymous%,%templates/device-library/minicomputers/device-imported-dashboard.md{% endcapture %}

{% include content-toggle.html content-toggle-id="minicomputersDashboard" toggle-spec=minicomputerstogglespec %}  