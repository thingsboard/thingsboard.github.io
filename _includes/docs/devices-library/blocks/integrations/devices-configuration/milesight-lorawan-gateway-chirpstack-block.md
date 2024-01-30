### Configure the gateway to send data

To connect and send data to the Chirpstack we should configure the gateway.  
To do this please follow next steps:  
{% assign connectGatewayToNS = '
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-add-new-forwarder.png,
        title: Open gateway control panel. Go to the "**Packet Forwarder**" page and click on "**plus**" button, to add a new forwarder.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-chirpstack-configuration-window.png,
        title: Put into "**Server address**" your server address, in our case it is **sample.network.server.com**. Click "**Save**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/milesight-lorawan-gateway/ns-configuration-after.png,
        title: Click "**Save & Apply**" button.
    ===
        image: /images/devices-library/basic/integrations/chirpstack/gateway-added.png,
        title: Now you can check the status of the gateway on Chirpstack, it should be online.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=connectGatewayToNS %}

Now, the gateway is able to send a data to the network server.