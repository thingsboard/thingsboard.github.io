---
layout: docwithnav-paas-eu
title: KPN Things Integration
description: KPN Things integration guide

kpn-create-integration:
    0:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-1-pe.png
        title: 'Go to "Integrations center" section -> "Integrations" page and click "plus" button to create new integration. Select type "KPN Things". Click "Next";'
    1:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-2-pe.png
        title: 'At this step, choose "Create new" uplink converter. The new converter will contain necessary code to convert incoming data and click "Next";'
    2:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-3-pe.png
        title: 'At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "Downlink data converter" field empty. Click "Skip";'
    3:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-4-pe.png
        title: 'Specify your base URL. Please note down "HTTP endpoint URL" we will use this value later. Then, click the "Add" button. KPN Things integration is created.'


kpn-things-configure-1:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-1-pe.png
        title: 'Go to the "Things manager" tab, and click on the "Add new device";'
    1:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-2-pe.png
        title: 'Choose the "Device Simulator", set a name for your device, and click on the "Add device" button;'
    2:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-3-pe.png
        title: 'Install and open the "KPN Things Device simulator" app on your phone. Follow the instructions on your phone to scan this QR code. Then, click on the "Add Network Info" button;'
    3:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-4-pe.png
        title: 'KPN Internet Network is created. Now, click on the "Finish" button.'

kpn-things-configure-2:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-5-pe.png
        title: 'Go to the "Flows" in left menu and click on the "My first flow" row;'
    1:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-6-pe.png
        title: 'Click on the "Link Device" button in the "Devices" row;'
    2:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-7-pe.png
        title: 'Click on the "Link" button next to the device you created earlier;'
    3:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-8-pe.png
        title: 'The device has been successfully linked to the Flow.'

kpn-things-configure-3:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-9-pe.png
        title: 'Click on the "My Device" row;'
    1:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-10-pe.png
        title: 'The "Device & Connectivity detail" page will open. Now, go to the "Flows" tab, and click on "My first flow" row;'
    2:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-11-pe.png
        title: 'Click on the "Data Processing" row to open "Data Processing details" page;'
    3:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-12-pe.png
        title: 'Change the switch to enabled state for "Decoders" section;'
    4:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-13-pe.png
        title: 'Your change has been saved.'

kpn-things-configure-4:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-14-pe.png
        title: 'Go to "Destinations" in left menu and click on the "Add new Destination" button;'
    1:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-15-pe.png
        title: 'Find the "ThingsBoard" destination type, and click on "Choose ThingsBoard" button;'
    2:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-16-pe.png
        title: 'Set a name for your destination. Paste "HTTP endpoint URL" from ThingsBoard integration page to "HTTP endpoint URL" field. Now, click on the "Generate" button, and save generated value. We will use it on ThingsBoard. Finally, click on the "Add ThingsBoard Destination" button.'

kpn-things-configure-5:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-17-pe.png
        title: 'Go to the "Flows" -> "My first flow" and click on the "Link Destination" button in the "Destinations" row;'
    1:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-18-pe.png
        title: 'Click on the "Link" button next to the destination you created earlier;'
    2:
        image: /images/user-guide/integrations/kpn/kpn-things-configure-19-pe.png
        title: 'The "Destination" has been successfully linked to the Flow.'

kpn-update-integration:
    0:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-5-pe.png
        title: 'Go to "Integrations center" section -> "Integrations" page and click on the integration you created earlier. Click on "Edit" button to enter edit mode.'
    1:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-6-pe.png
        title: 'Switch "Enable security (Headers filter)" toggle to enabled state and click "Add" button in "Headers filter" section.'
    2:
        image: /images/user-guide/integrations/kpn/kpn-add-integration-7-pe.png
        title: 'Put "X-Things-Secret" to "Header" field and generated token to "Value" field. Finally, apply changes.'

kpn-send-data-now:
    0:
        image: /images/user-guide/integrations/kpn/kpn-send-data-now.png
        title: 'Use the "KPN Things Device simulator" app to send a message with the data to the ThingsBoard. Click the "Send data now" button.'

kpn-things-device:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-device-1-pe.png
        title: 'Go to the "Devices" page. Here you will find a new KPN Device and information about it as well as the telemetry that we sent to the device.'

kpn-things-uplink:
    0:
        image: /images/user-guide/integrations/kpn/kpn-things-uplink-1-pe.png
        title: 'Go to the "Integrations" page, select "KPN Things integration" and navigate to the "Events" tab. There you&#39;ll see the message consumed by the KPN Things integration.'


---
{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/user-guide/integrations/kpn-things.md %}