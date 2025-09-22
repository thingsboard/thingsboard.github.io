Once you have successfully published the attributes and telemetry data, you should immediately see them in the **"Latest telemetry"** tab:

{% assign deviceTelemetryCE = '
    ===
        image: /images/helloworld/getting-started-ce/check-telemetry-ce.webp,
        title: Click on the device to open device details. Select the **"Latest telemetry"** tab.
    '
%}

{% assign deviceTelemetryPE = '
    ===
        image: /images/helloworld/getting-started-pe/check-telemetry-pe.webp,
        title: Click on the device to open device details. Select the **"Latest telemetry"** tab.
    '
%}

{% assign deviceTelemetryEdgeCE = '
    ===
        image: /images/edge/config/general/connect-device-3-ce.webp,
        title: Click on the device to open device details. Select the **"Latest telemetry"** tab.
'
%}

{% assign deviceTelemetryEdgePE = '
    ===
        image: /images/edge/config/general/connect-device-3-pe.webp,
        title: Click on the device to open device details. Select the **"Latest telemetry"** tab.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryPE %}
{% elsif page.docsPrefix == "pe/edge/" %}
    {% include images-gallery.liquid imageCollection=deviceTelemetryEdgePE %}
{% elsif page.docsPrefix == "edge/" %}
    {% include images-gallery.liquid imageCollection=deviceTelemetryEdgeCE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryCE %}
{% endif %} 

Also, let’s display single board computer attributes and telemetry on a dashboard. For this, you can create your own dashboard with 
your custom widgets or use a ready-made dashboard and simply import it.
 
{% capture minicomputerstogglespec %}
Imported Dashboard%,%importedDashboard%,%templates/device-library/single-board-computers/device-imported-dashboard.md%br%
New Dashboard%,%newDashboard%,%templates/device-library/single-board-computers/device-new-dashboard.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="minicomputersDashboard" toggle-spec=minicomputerstogglespec %}  