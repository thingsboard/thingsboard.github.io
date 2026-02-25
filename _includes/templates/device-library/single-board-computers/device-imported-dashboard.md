### Import dashboard

You are able to import a dashboard in JSON format. To import a dashboard, you should go to the Dashboard group and click
 the **“+”** button in the upper right corner of the page and choose **“Import dashboard”**. The dashboard import window 
should pop up, and you will be prompted to upload the **JSON** file and click **“Import”**.

{% assign importingDashboardCE = '
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-ce.png,
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-ce.png,
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-3-ce.png,
    '
%}

{% assign importingDashboardPE = '
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-pe.png,
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-pe.png,
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-3-pe.png,
    '
%}

{% assign importingDashboardEdgeCE = '
    ===
        image: /images/edge/config/general/import-dashboard-1-ce.webp,
    ===
        image: /images/edge/config/general/import-dashboard-2-ce.webp,
    ===
        image: /images/edge/config/general/import-dashboard-3-ce.webp,
'
%}

{% assign importingDashboardEdgePE = '
    ===
        image: /images/edge/config/general/import-dashboard-1-pe.webp,
    ===
        image: /images/edge/config/general/import-dashboard-2-pe.webp,
    ===
        image: /images/edge/config/general/import-dashboard-3-pe.webp,
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardPE %}
{% elsif page.docsPrefix == "pe/edge/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardEdgePE %}
{% elsif page.docsPrefix == "edge/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardEdgeCE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardCE %}
{% endif %}

Below, you can find the dashboard JSON file:

[Check and control device data dashboard](/docs/devices-library/resources/dashboards/minicomputers/dashboard.json){:target="_blank" download="dashboard.json"}

After importing, we should choose an entity alias for our device.  
To do this - we need to press the pen icon and select entity aliases, select alias "My device" and open it for editing by pressing the pen icon.    
Then, choose a device with name My device from dropdown list and save entity alias. Now, you should be able to see the data from the device. 

If you did everything right, you have to see the following dashboard:
![dashboard](/images/devices-library/basic/single-board-computers/minicomputer-dashboard.png)