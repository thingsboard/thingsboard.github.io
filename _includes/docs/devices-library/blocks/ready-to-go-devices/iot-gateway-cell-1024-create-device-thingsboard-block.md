Open your instance ThingsBoard ([local](http://localhost:8080){:target="_blank"} or [cloud]({{thingsboardInstanceLink}}){:target="_blank"}) in browser and login as tenant administrator.  

{% assign deviceCreation = '
    ===
        image: /images/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-device-cell-1.png,
        title: Go to "<b>Device groups</b>" tab -> "<b>All</b>" and click "plus" button to add a new device. Enter device name, select existing or create a new device profile and click on "<b>Add</b>" button.
    ===
        image: /images/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-device-cell-2.png,
        title: Your device has been created. Open its details and copy auto-generated <b>access token</b> by clicking on the "Copy access token" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceCreation %}
