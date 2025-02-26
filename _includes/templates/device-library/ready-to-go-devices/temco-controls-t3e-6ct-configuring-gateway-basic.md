{% assign creatingGatewayCE = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-1-ce.png,
        title: Open the ThingsBoard in your browser and log in. Go to "**Entities**" > "**Gateways**" tab in the sidebar and click on "**+**" button. Fill in "**Name**" and "**Device profile**" fields and click "**Create**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-2-ce.png,
        title: Start gateway using launch command; 
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-3-ce.png,
        title: The gateway has been created. Click on the "**Connectors configuration**" button in the sidebar menu;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-4-ce.png,
        title: Click on "**+**" button to add a new connector;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-5-ce.png,
        title: Select "**BACnet**" connector type, fill in the "**Name**" field and click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-6-ce.png,
        title: The connector has been created;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-7-ce.png,
        title: In the created connector go to "**Devices**" tab and delete default device;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-8-ce.png,
        title: Click on "Add device" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-9-ce.png,
        title: Fill in the "**Host**" and "**Port**" fields (you can find this information in the T3000 software). Fill in the "**Device name**" and "**Device profile name**" with "**Temco T3E-6CT**" and "**default**" respectively. Poll period is set to 3000 ms (you can change it according to your needs);
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-10-ce.png,
        title: Click on "**Time series pencil**" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-11-ce.png,
        title: Click on "**Add time series**" button in the opened window;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-12-ce.png,
        title: Fill in the "**Key**" field with "**temperature**", "**Object ID**" with "**Analog Input**" and "**0**". Click "**Add time series**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-13-ce.png,
        title: Fill in the "**Key**" field with "**humidity**", "**Object ID**" with "**Analog Input**" and "**1**";
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-14-ce.png,
        title: Click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-15-ce.png,
        title: The Device has been added.
'
%}

{% assign creatingGatewayPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-1-pe.png,
        title: Open the ThingsBoard in your browser and log in. Go to "**Entities**" > "**Gateways**" tab in the sidebar and click on "**+**" button. Fill in "**Name**" and "**Device profile**" fields and click "**Create**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-2-pe.png,
        title: Start gateway using launch command; 
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-3-pe.png,
        title: The gateway has been created. Click on the "**Connectors configuration**" button in the sidebar menu;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-4-pe.png,
        title: Click on "**+**" button to add a new connector;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-5-pe.png,
        title: Select "**BACnet**" connector type, fill in the "**Name**" field and click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-6-pe.png,
        title: The connector has been created;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-7-pe.png,
        title: In the created connector go to "**Devices**" tab and delete default device;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-tstat10/temco-tstat10-gateway-configuring-8-pe.png,
        title: Click on "Add device" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-9-pe.png,
        title: Fill in the "**Host**" and "**Port**" fields (you can find this information in the T3000 software). Fill in the "**Device name**" and "**Device profile name**" with "**Temco T3E-6CT**" and "**default**" respectively. Poll period is set to 3000 ms (you can change it according to your needs);
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-10-pe.png,
        title: Click on "**Time series pencil**" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-11-pe.png,
        title: Click on "**Add time series**" button in the opened window;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-12-pe.png,
        title: Fill in the "**Key**" field with "**temperature**", "**Object ID**" with "**Analog Input**" and "**0**". Click "**Add time series**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-13-pe.png,
        title: Fill in the "**Key**" field with "**humidity**", "**Object ID**" with "**Analog Input**" and "**1**";
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-14-pe.png,
        title: Click "**Add**" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-15-pe.png,
        title: The Device has been added.
'
%}

{% capture difference %}
Don't forget to expose port **47808** in the docker compose file. 
Also, add device host to the **Alternative responses address** array in the **device advanced configuration section**.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayPE %}
{% else %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayCE %}
{% endif %}

Furthermore, the Temco T3E-6CT provides two output relays that can be controlled using the gateway. Let's create a new RPC command to control the relay. To do this, follow these steps:

{% assign creatingGatewayRPCCE = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-19-ce.png,
        title: Select created device in the device list of BACnet connector. Click on "pencil" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-20-ce.png,
        title: In the window that opens, scroll down to the "RPC methods" section and click on "pencil" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-21-ce.png,
        title: Click on "Add method" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-16-ce.png,
        title: Fill in the "Method" field with "setRelay1", "Object ID" with "Binary Output" and "0". Click "Add method" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-17-ce.png,
        title: Click on "Add method" button and fill in the "Method" field with "setRelay2", "Object ID" with "Binary Output" and "1". Click "Apply" button;;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-18-ce.png,
        title: Click "Save" button.
'
%}

{% assign creatingGatewayRPCPE = '
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-19-pe.png,
        title: Select created device in the device list of BACnet connector. Click on "pencil" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-20-pe.png,
        title: In the window that opens, scroll down to the "RPC methods" section and click on "pencil" icon;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-21-pe.png,
        title: Click on "Add method" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-16-pe.png,
        title: Fill in the "Method" field with "setRelay1", "Object ID" with "Binary Output" and "0". Click "Add method" button;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-17-pe.png,
        title: Click on "Add method" button and fill in the "Method" field with "setRelay2", "Object ID" with "Binary Output" and "1". Click "Apply" button;;
    ===
        image: /images/devices-library/ready-to-go-devices/temco-t3e-6ct/temco-t3e-6ct-gateway-configuring-18-pe.png,
        title: Click "Save" button.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayRPCPE %}
{% else %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingGatewayRPCCE %}
{% endif %}
