
To check the data from our device we need to open imported dashboard:  

{% assign checkDataDashboard='
    ===
        image: /images/devices-library/paas/thingsboard-open-dashboard-click-on-row.png,
        title: Open dashboard by clicking on it in the table.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-general-view-of-example-dashboard.png,
        title: The view of checking data and control our device dashboard.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-device-attributes.png,
        title: Received attributes from device.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-device-info.png,
        title: Device information from the ThingsBoard server.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-led-mode-history.png,
        title: Widget to see the history of led mode changes.
    ===
        image: /images/devices-library/basic/microcontrollers/dashboard/thingsboard-example-dashboard-temperature-history.png,
        title: Widget to see the history of our emulated temperature.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=checkDataDashboard %}
