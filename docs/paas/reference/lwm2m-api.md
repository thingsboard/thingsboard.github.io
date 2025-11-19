---
layout: docwithnav-paas
assignees:
- nick
title: LwM2M Device API Reference
description: Supported LwM2M API Reference for IoT Devices

upload-models:
    0:
        image: /images/lwm2m/upload-lwm2m-models-1-pe.png
        title: 'Log in to your ThingsBoard PE instance as a System administrator. Navigate to the "Resources library" page under the "Resources" section. Click the "+" (Add resource) button in the top-right corner of the window.'
    1:
        image: /images/lwm2m/upload-lwm2m-models-2-pe.png
        title: 'Upload one or more LwM2M model files. Click "Add" to complete the upload.'
    2:
        image: /images/lwm2m/upload-lwm2m-models-3-pe.png
        title: 'Once uploaded, you should see the new models listed in the Resources library.'

create-lwm2m-device-profile:
    0:
        image: /images/lwm2m/create-lwm2m-device-profile-1-pe.png
        title: 'Go to the "Device profiles" page under the "Profiles" section. Click the "+" (Add device profile) button in the top-right corner of the window, and in the pop-up menu, select "Create new device profile".'
    1:
        image: /images/lwm2m/create-lwm2m-device-profile-2-pe.png
        title: 'Enter a name for the profile.'
    2:
        image: /images/lwm2m/create-lwm2m-device-profile-3-pe.png
        title: 'Navigate to the "Transport configuration" tab. Select "LWM2M" as the transport type from the dropdown menu. Then, click "Add" to create the device profile.'
    3:
        image: /images/lwm2m/create-lwm2m-device-profile-4-pe.png
        title: 'The new profile has been successfully created.'

device-objects:
    0:
        image: /images/lwm2m/choose-lwm2m-objects-1-pe.png
        title: 'Select the previously created LwM2M profile. Go to the "Transport configuration" tab. Click the "Edit" button.'
    1:
        image: /images/lwm2m/choose-lwm2m-objects-2-pe.png
        title: 'Add objects from the drop-down list. The objects must be preloaded into the Resource library beforehand.'

configure-mapping-1:
    0:
        image: /images/lwm2m/configure-mapping-1-pe.png
        title: 'For the Device object (#3_1.2), check the "Attribute" box for resource #0 (Manufacturer), resource #1 (Model Number) and resource #2 (Serial Number) so that the server can track these values, receive updates, and store them as attributes in ThingsBoard.'
    1:
        image: /images/lwm2m/configure-mapping-2-pe.png
        title: 'For the Connectivity Monitoring object (#4_1.3), check the "Telemetry" and/or "Observe" boxes for resource #2 (Radio Signal Strength) and resource #3 (Link Quality) so that the server can track these values, receive updates, and store them as telemetry in ThingsBoard.'
    2:
        image: /images/lwm2m/configure-mapping-3-pe.png
        title: 'For the Firmware Update object (#5_1.1), check the "Telemetry" and/or "Observe" boxes for resource #3 (State) and resource #5 (Update Result) so that the server can track these values, receive updates, and store them as telemetry in ThingsBoard.'
    3:
        image: /images/lwm2m/configure-mapping-4-pe.png
        title: 'For the Location object (#6_1.0), check the "Attribute" box for resource #0 (Latitude) and resource #1 (Longitude) so that the server can track these values, receive updates, and store them as attributes in ThingsBoard. Then, save changes.'

configure-mapping-2:
    0:
        image: /images/lwm2m/configure-mapping-5-pe.png
        title: 'By default, the <b>Initialize attributes and telemetry using Observe strategy</b> option is <b>disabled</b>, which means attributes and telemetry are initialized by reading their values <b>one by one</b>; when <b>enabled</b>, they are initialized by subscribing to their values <b>using the selected Observe strategy</b>.'

configure-mapping-3:
    0:
        image: /images/lwm2m/configure-mapping-6-pe.png
        title: 'By default, the <b>observe strategy</b> is set to <b>Single</b>, but you can switch to <b>Composite all</b> or <b>Composite by object</b> to reduce traffic or group resources more efficiently. Then, click "Save" to apply the changes.'

configure-mapping-observe-strategy:
    0:
        image: /images/lwm2m/configure-mapping-observe-strategy-1-pe.png
        title: 'For the All object of models choose **Composite All**. All resources from all objects are observed via a single Composite Observe request.'
    1:
        image: /images/lwm2m/configure-mapping-observe-strategy-2-pe.png
        title: 'For the All object of models choose  **Composite by Object**. Resources are grouped per object type and each group is observed separately.'

device-credentials:
    0:
        image: /images/lwm2m/device-credentials-lwm2m-1-pe.png
        title: 'ThingsBoard supports four types of credentials: "Pre-Shared Key (PSK)", "Raw Public Key (RPK)", "X.509 Certificate" and "No Security".'

no-security-credentials:
    0:
        image: /images/lwm2m/device-credentials-lwm2m-2-pe.png
        title: 'Start creating a new device.'
    1:
        image: /images/lwm2m/device-credentials-lwm2m-3-pe.png
        title: 'Enter device name and assign it the previously created LwM2M device profile. Then, go to the "Credentials" tab.'
    2:
        image: /images/lwm2m/device-credentials-lwm2m-4-pe.png
        title: 'Choose "No Security" as the credential type. Enter the Endpoint Client Name — this will be used to identify the device on the network. Click "Add".'
    3:
        image: /images/lwm2m/device-credentials-lwm2m-5-pe.png
        title: 'The device has been added.'

transport-log:
    0:
        image: /images/lwm2m/connect-the-device-1-pe.png
        title: 'You can view logs of communication under the "transportLog" event of the "Latest telemetry" tab.'

change-attribute-key-name:
    0:
        image: /images/lwm2m/change-key-name-1-pe.png
        title: 'Open the device profile transport configuration.'
    1:
        image: /images/lwm2m/change-key-name-2-pe.png
        title: 'On the "LWM2M Model" tab select the target object and expand the "Attributes" list. Tick the "Attribute" checkbox on the desired attribute and input the custom name for the key. Then, save changes.'

ota-firmware-update-strategy:
    0:
        image: /images/lwm2m/ota-update-strategy-1-pe.png
        title: 'Open the devices transport configuration settings.'
    1:
        image: /images/lwm2m/ota-firmware-update-strategy-2-pe.png
        title: 'Select the firmware update strategy, and save changes. Without Object 19.'
    2:
        image: /images/lwm2m/ota-firmware-update-strategy-3-pe.png
        title: 'Select the firmware update strategy, and save changes. With Object 19.'

software-update-strategy:
    0:
        image: /images/lwm2m/ota-update-strategy-1-pe.png
        title: 'Open the devices transport configuration settings.'
    1:
        image: /images/lwm2m/ota-software-update-strategy-2-pe.png
        title: 'Select the software update strategy from the drop down menu, and save changes. Without Object 19.'
    2:
        image: /images/lwm2m/ota-software-update-strategy-3-pe.png
        title: 'Select the software update strategy from the drop down menu, and save changes. With Object 19.'

object-attributes:
    0:
        image: /images/lwm2m/configure-notification-attributes-1-pe.png
        title: 'Open the LwM2M device profile details page, and enter edit mode.'
    1:
        image: /images/lwm2m/configure-notification-attributes-2-pe.png
        title: 'Select the object instance that you want to configure. Tick in the "Attribute" and "Observe" checkbox, and click "+" icon button to add the attribute.'
    2:
        image: /images/lwm2m/configure-notification-attributes-3-pe.png
        title: 'Click "Add attribute" button.'
    3:
        image: /images/lwm2m/configure-notification-attributes-4-pe.png
        title: 'Select the required attribute and enter its value. Then, click "Save".'
    4:
        image: /images/lwm2m/configure-notification-attributes-5-pe.png
        title: 'Save the device profile configuration.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/reference/lwm2m-api.md %}