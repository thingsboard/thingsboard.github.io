Create a [dashboard](https://thingsboard.io/docs/{{page.docsPrefix}}user-guide/dashboards/){:target="_blank"} to visualize telemetry values in widgets.

{% assign dashboardCreation = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-dashboard-1.png,
        title: Go to the <b>Dashboard groups</b> tab -> <b>All</b>. Creat new dashboard by clicking the "plus" button in the upper right corner of the dashboards page. Enter dashboard name and click on "<b>Add</b>" button.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-dashboard-2.png,
        title: Create <b>Radial gauge</b> widget from the <b>Analog gauges</b> bundle. We used <b><i>sc0_temperature</i></b>.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-dashboard-3.png,
        title: The data will be shown on the selected widget.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=dashboardCreation %}

- All the measures that are "enabled" in the device's JSON configuration file will be found as metrics with the name specified in the same file.  
- You can read more about widgets and their creation in [this guide](https://thingsboard.io/docs/{{page.docsPrefix}}user-guide/dashboards/#widgets){:target="_blank"}.  

