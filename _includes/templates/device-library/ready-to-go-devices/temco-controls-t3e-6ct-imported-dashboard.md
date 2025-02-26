### Import dashboard

Download [Check Device Data Dashboard](/docs/devices-library/resources/dashboards/ready-to-go-devices/temco-t3e-6ct-dashboard.json){:target="_blank" download="temco-t3e-6ct-dashboard.json"} and import it.

You can import a dashboard in JSON format. To do this, you should go to the Dashboard group, click on the "**+**" button in the upper-right corner of the page and choose "**Import dashboard**".
The dashboard import window will appear, prompting you to upload the JSON file and click "**Import**".

{% assign importingDashboardPE = '
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-pe.png
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-pe.png
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-3-pe.png
    '
%}

{% assign importingDashboardCE = '
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-ce.png
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-ce.png
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-3-ce.png
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardPE %}
{% else %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardCE %}
{% endif %}

After importing, we should choose an entity alias for our device.  
Start by clicking the "**pencil**" icon, selecting  entity aliases, choosing the "**My device**" alias and then clicking the "**pencil**" icon again to open it for editing.   
Then, choose the created device from dropdown list and save entity alias. Now, you should be able to see the data from the device. 

If you did everything right, you should see the following dashboard:

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
![imagePe](/images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-dashboard-pe.png)
{% else %}  
![imageCe](/images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-dashboard-ce.png)
{% endif %}
