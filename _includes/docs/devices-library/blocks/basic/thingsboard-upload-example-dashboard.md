
{% assign importDashboardCE = '
    ===
        image: https://img.thingsboard.io/user-guide/dashboards/managing-dashboard/import-dashboard-1-ce.png,
        title: Navigate to the "**Dashboards**" page and click the "**+**" button in the upper right corner of the page and select "**Import dashboard**".
    ===
        image: https://img.thingsboard.io/user-guide/dashboards/managing-dashboard/import-dashboard-2-ce.png,
        title: In the dashboard import window, upload the JSON file and click "**Import**" button.
    ===
        image: https://img.thingsboard.io/user-guide/dashboards/managing-dashboard/import-dashboard-3-ce.png,
        title: Dashboard has been imported.
'
%}

{% assign importDashboardPE = '
    ===
        image: https://img.thingsboard.io/user-guide/dashboards/managing-dashboard/import-dashboard-1-pe.png,
        title: Navigate to the "**Dashboards**" page. By default, you navigate to the dashboard group "All". Click on the "**+**" icon in the top right corner. Select "**Import dashboard**".
    ===
        image: https://img.thingsboard.io/user-guide/dashboards/managing-dashboard/import-dashboard-2-pe.png,
        title: In the dashboard import window, upload the JSON file and click "**Import**" button.
    ===
        image: https://img.thingsboard.io/user-guide/dashboards/managing-dashboard/import-dashboard-3-pe.png,
        title: Dashboard has been imported.
'
%}

{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/basic/dashboard.json" %}
{% if boardLedCount == 3 %}
{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/rgb-led/dashboard.json" %}
{% endif %}

{% if hasDisplay == "true" %}
{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/display/dashboard.json" %}
{% endif %}

{% if hasCamera == "true" %}
{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/camera/dashboard.json" %}
{% endif %}

{% if include.exampleDashboardPath %}
{% assign exampleDashboardPath = include.exampleDashboardPath %}
{% endif %}

ThingsBoard provides the ability to create and customize interactive visualizations (dashboards) for monitoring and managing data and devices.  
Through ThingsBoard dashboards, you can efficiently manage and monitor your IoT devices and data. So, we will create the dashboard, for our device.  

To add the dashboard to ThingsBoard, we need to import it. To import a dashboard, follow these steps:  

- First download the [Check and control device data dashboard]({{exampleDashboardPath}}){:target="_blank" download="dashboard.json"} file.

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or  docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importDashboardCE %}
{% endif %}