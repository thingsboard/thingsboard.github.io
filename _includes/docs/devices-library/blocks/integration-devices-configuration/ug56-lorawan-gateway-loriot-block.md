### Configure the gateway to send data

To connect and send data to the Loriot we should configure the gateway.  
To do this please follow next steps:  
{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/general-settings-view.png,
        title: Open gateway control panel.
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/ns-configuration-before.png,
        title: Click on **plus** button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/ns-loriot-configuration-window.png,
        title: Put into **Server address** your server address, in our case it is **eu2.loriot.io**. And set ports to **1780**.
    ===
        image: /images/devices-library/ready-to-go-devices/ug56-lorawan-gateway/ns-configuration-after.png,
        title: Press **Save** button.
    ===
        image: /images/devices-library/basic/integrations/loriot/gateway-added-disconnected.png,
        title: Now you can check the status of the gateway on the Loriot, it should be connected.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

Now, the gateway is able to send a data to the network server.  
