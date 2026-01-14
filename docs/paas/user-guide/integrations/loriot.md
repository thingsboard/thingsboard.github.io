---
layout: docwithnav-paas
title: Loriot integration
description: Loriot integration guide

create-loriot-account:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/create-loriot-account-1.png
        title: 'Visit the Loriot website. Choose a service package — for example, select the <b>Community Public Network Server</b>.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/create-loriot-account-2.png
        title: 'Pick your preferred region and country.'
    2:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/create-loriot-account-3.png
        title: 'Complete the registration process.'
    3:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/create-loriot-account-4.png
        title: 'Log in to your Loriot account.'

create-loriot-application-output-1:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-server.png
        title: 'Open the Loriot UI. The URL contains the server name that we selected during the registration process. This server needs to be specified in the integration settings.'

create-loriot-application-output-2:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-application-id.png
        title: 'Locate the <b>Application ID</b> associated with your project. This value needs to be specified in the integration settings.'

create-loriot-application-output-3:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_add_integration_output_basic.png
        title: 'Select the "Basic" credential type and enter your Loriot account credentials. Click "Add" to confirm creating integration.'

endpoint-url:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-copy-http-endpoint-pe.png
        title: 'Go to the "Integrations" page in ThingsBoard. Find your Loriot integration and click on it. There you can find the "HTTP endpoint URL".'

downlink_server:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-server.png
        title: 'Open the Loriot UI. The URL contains the server name that we selected during the registration process. This server needs to be specified in the integration settings.'

downlink_applications:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-application-id.png
        title: 'Locate the <b>Application ID</b> associated with your project. This value needs to be specified in the integration settings.'

access_token:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_access_tokens.png
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_authentication_tokens.png
    2:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_and_thingsboard_integration_application_access_token.png

uplink-tbel:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-converters-1-tbel-pe.png

uplink-java:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-converters-1-java-pe.png

uplink-edit-tbel:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-edit-mode-tbel-1-pe.png
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-edit-mode-tbel-2-pe.png
    2:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-edit-mode-tbel-3-pe.png

uplink-edit-java:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-edit-mode-java-1-pe.png 
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-edit-mode-java-2-pe.png
    2:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-edit-mode-java-3-pe.png

create_downlink-tbel:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-downlink-converters-1-tbel-pe.png

create_downlink-java:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-downlink-converters-1-java-pe.png

downlink-tbel:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-downlink-save-changes-tbel-1-pe.png

downlink-java:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-downlink-save-changes-java-1-pe.png

devices:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_devices.png
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_device_eui.png

send_downlink:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_add_integration_send_downlink.png

loriot-output:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-http-push-1.png
        title: 'Go to the "<b>Applications</b>" page and click on the application.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-http-push-2.png
        title: 'Go to the "<b>Output</b>" page.'
    2:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-http-push-3.png
        title: 'Click on the "<b>Add new output</b>" button.'
    3:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-http-push-4.png
        title: 'Select the output type as "<b>HTTP Push</b>" and enter the "<b>HTTP endpoint URL</b>" taken from the integration. Then, click "<b>Add output</b>" button.'
    4:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-http-push-5.png
        title: 'Output created successfully.'

enable-security:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/enable-security-1-pe.png
        title: 'To do this, turn on the "<b>Enable security</b>" option. Click "<b>Add</b>" and enter an arbitrary value for the "<b>Header</b>" and "<b>Value</b>" fields. Then, save the changes.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/enable-security-2-pe.png
        title: 'Also need to specify this credentials in Loriot UI.'

security_token:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_add_integration_output_security_token.png
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_and_thingsboard_output_security_token_session.png

rule_chain:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_rule_chain_integration_downlink.png

shared_attributes:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_devices_all_shared_attributes.png
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_devices_all_shared_attributes_update.png

event_in:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_downlink_converter_events_in.png


terminal:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/terminal.png

terminal_1:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/terminal_1.png

device:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-device-attributes-1-pe.png
        title: 'The created device and its data can be found on the "Devices" page in the "Entities" section. On the "Attributes" tab, you will find the attributes sent by the device to ThingsBoard.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-device-attributes-2-pe.png
        title: 'On the "Latest telemetry" tab, you will find the telemetry data transmitted by the device to ThingsBoard.'

uplink_events:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-converter-events-1-pe.png
        title: 'You can view the data in the Uplink converter under the "<b>Events</b>" tab, within the "<b>In</b>", "<b>Out</b>", and "<b>Metadata</b>" blocks.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-converter-events-2-pe.png
        title: '"Input" block.'
    2:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-converter-events-3-pe.png
        title: '"Output" block.'
    3:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot-uplink-converter-events-4-pe.png
        title: '"Metadata" block.'

event_out:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/thingsboard_downlink_converter_events_out.png
    
parameters:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/loriot/loriot_devices_downlink_queue.png

---
{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsTag="paas" %}
{% include docs/pe/user-guide/integrations/loriot.md %}

