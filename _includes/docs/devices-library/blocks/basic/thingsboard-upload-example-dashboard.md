
{% assign importDashboardCE = '
    ===
        image: /images/user-guide/dashboards/creating-dash-1-ce.png,
        title: Go to Dashboards through the main menu on the left side of the screen.
    ===
        image: /images/user-guide/dashboards/dashboard-import-ce.png,
        title: Click on the “+” button in the upper right corner of the page and choose "Import dashboard".
    ===
        image: /images/user-guide/dashboards/dashboard-import-1-ce.png,
        title: Select your dashboard.json file and press import button. 
    ===
        image: /images/user-guide/dashboards/dashboard-import-2-ce.png,
        title: Now you can see imported dashboard in the table.
'
%}

{% assign importDashboardPE = '
    ===
        image: /images/user-guide/dashboards/creating-dash.png,
        title: Go to Dashboard groups through the main menu on the left side of the screen, to add a new dashboard group, click the "+" sign in the upper right corner of the screen, or open the "All" dashboard group.
    ===
        image: /images/user-guide/dashboards/dashboard-import-pe.png,
        title: Open Dashboard group by pressing on the icon "Open" (Or just by clicking on the row for TB 3.4+).
    ===
        image: /images/user-guide/dashboards/dashboard-import-1-pe.png,
        title: Click on the icon with arrow up on top right side of the screen, select your dashboard.json file.
    ===
        image: /images/user-guide/dashboards/dashboard-import-2-pe.png,
        title: Press "import" button.
    ===
        image: /images/user-guide/dashboards/dashboard-import-3-pe.png,
        title: Now, the dashboard is imported and you can check it.
'
%}

{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/basic/dashboard.json" %}
{% if boardLedCount == 3 %}
{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/rgb-led/dashboard.json" %}
{% endif %}

{% if hasCamera == "true" %}
{% assign exampleDashboardPath = "/docs/devices-library/resources/dashboards/microcontrollers/camera/dashboard.json" %}
{% endif %}

To check the data and get ability to send commands or data to the device we will create the dashboard.

First download the [Check and control device data dashboard]({{exampleDashboardPath}}){:target="_blank" download="dashboard.json"} file.

To add the dashboard to ThingsBoard, we need to import it, and to do this, we have to go through the following steps:  


{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importDashboardCE %}
{% endif %} 

After importing we should choose entity alias for our device.  
To do this - we need to press the pen icon and select entity aliases, select alias "My device" and open it for editing by pressing the pen icon.    
Then choose a device with name My device from dropdown list and save entity alias, now you should be able to see the data from the device.     
