### Configure the gateway to send data

To connect and send data to The Things Industries cloud we should configure the gateway.  
To do this please follow next steps:  
{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-add-new-forwarder.png,
        title: Open gateway control panel. Go to the "**Packet Forwarder**" page and click on "**plus**" button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-the-things-industries-window.png,
        title: Put into "**Server address**" from the network server. Click "**Save**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-the-things-industries-after.png,
        title: Click "**Save & Apply**" button.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

Now, the gateway is able to send a data to the network server.