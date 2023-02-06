
{% assign importDashboardCE = '
    ===
        image: /images/user-guide/dashboards/creating-dash-1-ce.png,
        title: Go to Dashboards through the main menu on the left of the screen.
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
        title: Go to Dashboard groups through the main menu on the left of the screen, to add a new dashboard group, click the "+" sign in the upper right corner of the screen, or open the "All" dashboard group.
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

To check the data and get ability to send commands or data to the device we can use the following dashboard:  

[Check and control device data dashboard](/docs/devices-library/resources/dashboards/esp/dashboard.json)

In order to add the dashboard to ThingsBoard we need to import it, to do this we will do the following steps:  


{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importDashboardCE %}
{% endif %} 