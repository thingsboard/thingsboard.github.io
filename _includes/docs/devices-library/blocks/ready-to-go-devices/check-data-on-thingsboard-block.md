Once you have successfully done all steps above and {{deviceName}} send data, you should immediately see them in the 
Device Telemetry Tab:

{% assign deviceTelemetryPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-1-pe.png,
        title: Click on the device row in the table to open device details.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-2-1-connect-device-2-pe.png,
        title: Navigate to the telemetry tab.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceTelemetryPE %}

Also, let’s display {{deviceName}} attributes and telemetry on a dashboard. For this, you can create your own dashboard with 
your custom widgets or use a ready-made dashboard and simply import it.
