### Configure the gateway to send data

To connect and send data to The Things Industries cloud we should configure the gateway.  
To do this please follow next steps:  
{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/general-settings-view.png,
        title: Open gateway control panel 
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/ns-configuration-before.png,
        title: Click on <b>plus</b> button, to add a new forwarder
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/ns-configuration-window.png,
        title: Put <b>Gateway Server address</b> from the network server
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/ns-configuration-after.png,
        title: Press <b>Save</b> button
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

Now, the gateway is able to send a data to the network server.  
