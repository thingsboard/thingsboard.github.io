---
layout: docwithnav-pe 
title: Loriot integration
description: Loriot integration guide

register:
    0:
        image: /images/user-guide/integrations/loriot/loriot_register.png 
    1:
        image: /images/user-guide/integrations/loriot/loriot_server.png

create-loriot-application-output-1:
    0:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_integration_server_1.png
        title: 'Open the Loriot UI. The URL contains the server name that we selected during the registration process. This server needs to be specified in the integration settings.'

create-loriot-application-output-2:
    0:
        image: /images/user-guide/integrations/loriot/loriot_applications.png
        title: 'Select your application in the "Applications" section.'
    1:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_integration_application_id_1.png
        title: 'Locate the <b>Application ID</b> associated with your project. This value needs to be specified in the integration settings.'

create-loriot-application-output-3:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_add_integration_output_basic.png
        title: 'Select the "Basic" credential type and enter your Loriot account credentials. Click "Add" to confirm creating integration.'

endpoint-url:
    0:
        image: /images/user-guide/integrations/loriot/send-uplink-http-endpoint-1-pe.png
        title: 'Go to the "Integrations" page in ThingsBoard. Find your Loriot integration and click on it. There you can find the "HTTP endpoint URL".'

downlink_server:
    0:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_integration_server.png

applications:
    0:
        image: /images/user-guide/integrations/loriot/loriot_applications.png

application_id:
    0:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_integration_application_id_1.png 

downlink_applications:
    0:
        image: /images/user-guide/integrations/loriot/loriot_applications.png
    1:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_integration_application_id.png

access_token:
    0:
        image: /images/user-guide/integrations/loriot/loriot_access_tokens.png
    1:
        image: /images/user-guide/integrations/loriot/loriut_authentication_tokens.png
    2:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_integration_application_access_token.png

uplink-tbel:
    0:
        image: /images/user-guide/integrations/loriot/loriot-uplink-converters-1-tbel-pe.png

uplink-java:
    0:
        image: /images/user-guide/integrations/loriot/loriot-uplink-converters-1-java-pe.png

uplink-edit-tbel:
    0:
        image: /images/user-guide/integrations/loriot/loriot-uplink-edit-mode-tbel-1-pe.png
    1:
        image: /images/user-guide/integrations/loriot/loriot-uplink-edit-mode-tbel-2-pe.png
    2:
        image: /images/user-guide/integrations/loriot/loriot-uplink-edit-mode-tbel-3-pe.png

uplink-edit-java:
    0:
        image: /images/user-guide/integrations/loriot/loriot-uplink-edit-mode-java-1-pe.png 
    1:
        image: /images/user-guide/integrations/loriot/loriot-uplink-edit-mode-java-2-pe.png
    2:
        image: /images/user-guide/integrations/loriot/loriot-uplink-edit-mode-java-3-pe.png

create_downlink-tbel:
    0:
        image: /images/user-guide/integrations/loriot/loriot-downlink-converters-1-tbel-pe.png

create_downlink-java:
    0:
        image: /images/user-guide/integrations/loriot/loriot-downlink-converters-1-java-pe.png

downlink-tbel:
    0:
        image: /images/user-guide/integrations/loriot/loriot-downlink-save-changes-tbel-1-pe.png

downlink-java:
    0:
        image: /images/user-guide/integrations/loriot/loriot-downlink-save-changes-java-1-pe.png

devices:
    0:
        image: /images/user-guide/integrations/loriot/loriot_devices.png
    1:
        image: /images/user-guide/integrations/loriot/loriot_device_eui.png

send_downlink:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_add_integration_send_downlink.png

loriot_output:
    0:
        image: /images/user-guide/integrations/loriot/loriot_output.png
        title: 'In Loriot UI, go to the "Output" page and click on the "Add new output".'
    1:
        image: /images/user-guide/integrations/loriot/loriot_output_http_push.png
        title: 'Select the output type as "HTTP Push" and enter the HTTP endpoint URL taken from the integration.'

endpoint:
    0:
        image: /images/user-guide/integrations/loriot/loriot_output_http_push.png

enable_security:
    0:
        image: /images/user-guide/integrations/loriot/enable-security-1-pe.png
        title: 'Click "Add" to confirm creating integration.'

security_token:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_add_integration_output_security_token.png
    1:
        image: /images/user-guide/integrations/loriot/loriot_and_thingsboard_output_security_token_session.png

rule_chain:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_rule_chain_integration_downlink.png

shared_attributes:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_devices_all_shared_attributes.png
    1:
        image: /images/user-guide/integrations/loriot/thingsboard_devices_all_shared_attributes_update.png

event_in:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_downlink_converter_events_in.png

event_out:
    0:
        image: /images/user-guide/integrations/loriot/thingsboard_downlink_converter_events_out.png

parameters:
    0:
        image: /images/user-guide/integrations/loriot/loriot_devices_downlink_queue.png

custom_authorization:
    0:
        image: /images/user-guide/integrations/loriot/custom-authorization-pe.png


terminal:
    0:
        image: /images/user-guide/integrations/loriot/terminal.png

terminal_1:
    0:
        image: /images/user-guide/integrations/loriot/terminal_1.png

device:
    0:
        image: /images/user-guide/integrations/loriot/loriot-device-attributes-1-pe.png
    1:
        image: /images/user-guide/integrations/loriot/loriot-device-telemetry-1-pe.png

uplink_events:
    0:
        image: /images/user-guide/integrations/loriot/loriot-uplink-converter-events-1-pe.png

solution_templates:
    0:
        image: /images/user-guide/integrations/loriot/solution_templates.png

---
{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsTag="pe" %}
{% include docs/pe/user-guide/integrations/loriot.md %}

