## Check data on ThingsBoard

So, the device was added and if it sends any data - it should appear in the [devices](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}.
To check it you may open **Devices** page in **Entities** section. The device should be in devices list. You can check the data by click on it and open tab **Attributes** or **Latest telemetry**.

{% assign beacon1 = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/beacon-1.png,
        title: You should now see data from the device.
'
%}

{% include images-gallery.liquid imageCollection=beacon1 %}

In order to get more user-friendly view - you can use [dashboards](/docs/{{docsPrefix}}user-guide/dashboards){:target="_blank"}.
You can download a simple dashboard for this device, it is configured to display a data from "latitude" and "longitude" telemetry keys for device with name "*Devices*”.

ThingsBoard provides the ability to create and customize interactive visualizations (dashboards) for monitoring and managing data and devices.
Through ThingsBoard dashboards, you can efficiently manage and monitor your IoT devices and data. So, we will create the dashboard, for our device.

To add the dashboard to ThingsBoard, we need to import it. To import a dashboard, follow these steps:

- First download the [Check and control device data dashboard](/docs/device-library/resources/dashboards/lansitec-lorawan/check_and_control_device_data_dashboard.json){:target="_blank"} file.

{% assign edit = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/show-1.png,
        title: Navigate to the "**Dashboards**" page. By default, you navigate to the dashboard group "All". Click on the "**plus**" icon in the top right corner. Select "**Import dashboard**".
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/show-2.png,
        title: In the dashboard import window, upload the JSON file and click "**Import**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/show-3.png,
        title: Dashboard has been imported.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=edit %}

To open the imported dashboard, click on it. Then you should specify your device in entity alias of the dashboard.

To do this, follow these steps:

{% assign edit = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/edit-1.png,
        title: Open the dashboard and enter edit mode. Click the "Entity aliases" icon, then in the pop-up window click the "Edit alias" icon next to the alias.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/edit-2.png,
        title: In edit alias window select your device from dropdown list and save entity alias.
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/edit-3.png,
        title: Apply all changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=edit %}

You should now see data from the device.

Example of the dashboard with data:

{% assign beacon = '
    ===
        image: /images/devices-library/ready-to-go-devices/lansitec-lorawan/beacon-3.png,
        title: You should now see data from the device.
'
%}

{% include images-gallery.liquid imageCollection=beacon %}