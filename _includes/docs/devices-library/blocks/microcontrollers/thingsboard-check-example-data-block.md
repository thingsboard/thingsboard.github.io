
The Check and control device data dashboard structure:  

{% assign generalViewOfDashboardPath = "/images/devices-library/basic/microcontrollers/dashboard/thingsboard-general-view-of-example-dashboard.png" %}

{% if boardLedCount == 3 %}
{% assign generalViewOfDashboardPath = "/images/devices-library/basic/microcontrollers/dashboard/thingsboard-general-view-of-example-dashboard-rgb-led.png" %}
{% elsif hasCamera == "true" %}
{% assign generalViewOfDashboardPath = "/images/devices-library/basic/microcontrollers/dashboard/thingsboard-general-view-of-example-dashboard-camera.png" %}
{% endif %}

{% assign checkDataDashboard='
    ===
        image: /images/devices-library/paas/thingsboard-open-dashboard-click-on-row.png,
        title: To check the data from our device we need to open the imported dashboard by clicking on it in the table.
    ===
        image: ' | append: generalViewOfDashboardPath | append: ',
        title: The view of checking data and controlling our device dashboard.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-device-attributes.png,
        title: Received attributes from device.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-device-info.png,
        title: Device information from the ThingsBoard server.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-led-mode-history.png,
        title: Widget to see the history of LED mode changes.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-temperature-history.png,
        title: Widget to see the history of our emulated temperature.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=checkDataDashboard %}
