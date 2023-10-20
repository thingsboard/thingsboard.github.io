### Import dashboard

You are able to import a dashboard in JSON format. To import a dashboard, you should go to the Dashboard group and click
 on the **“+”** button in the upper right corner of the page and choose **“Import dashboard”**. The dashboard import window 
should pop up, and you will be prompted to upload the JSON file and click **“Import”**.

{% assign importingDashboardPE = '
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-pe.png,
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-pe.png,
    '
%}

{% assign importingDashboardCE = '
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-1-ce.png,
    ===
        image: /images/user-guide/dashboards/managing-dashboard/import-dashboard-2-ce.png,
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=importingDashboardCE %}
{% endif %}

Below, you can find the dashboard JSON file:

[Check and control device data dashboard](/docs/devices-library/resources/dashboards/ready-to-go-devices/ace-dashboard.json){:target="_blank" download="ace-dashboard.json"}

After importing, we should choose an entity alias for our device.  
To do this - we need to press the pen icon and select entity aliases, select alias **"My device"** and open it for editing by pressing the pen icon.    
Then, choose a device with name My device from dropdown list and save entity alias. Now, you should be able to see the data from the device. 

If you did everything right, you have to see the following dashboard:

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
![imagePe](/images/devices-library/ready-to-go-devices/ace-iot-gateway/ace-gateway-dashboard.png)
{% else %}  
![imageCe](/images/devices-library/ready-to-go-devices/ace-iot-gateway/ace-dashboard-1-ce.png)
{% endif %}
