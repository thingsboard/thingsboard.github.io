Open your platform instance or ThingsBoard [cloud]({{thingsboardInstanceLink}}){:target="_blank"} in browser and login as tenant administrator.  

{% assign deviceCreation = '
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-device-cell-1.png,
        title: Go to "<b>Device groups</b>" tab -> "<b>All</b>" and click "plus" button to add a new device. Enter device name, select existing or create a new device profile and click on "<b>Add</b>" button.
    ===
        image: https://img.thingsboard.io/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-create-device-cell-2.png,
        title: Your device has been created. Open its details and copy auto-generated <b>access token</b> by clicking on the "Copy access token" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deviceCreation %}
