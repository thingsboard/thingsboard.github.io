---
layout: docwithnav
assignees:
- nick
title: LWM2M Device API Reference
description: Supported LWM2M API Reference for IoT Devices 

upload-models:
    0:
        image: /images/lwm2m/upload-ce.png
        title: 'Login to your ThingsBoard instance and go to System settings -> Resource Library,
                then click "+" button'
    1:
        image: /images/lwm2m/upload-1-ce.png
        title: 'Upload Resource model files'
    2:
        image: /images/lwm2m/upload-2-ce.png
        title: 'Make sure you can see new files in the list'


upload-tenant:
    0:
        image: /images/lwm2m/upload-tenant-0-ce.png
        title: 'Tenant can not delete files, uploaded by the System administrator'
    1:
        image: /images/lwm2m/upload-tenant-1-ce.png
        title: 'Tenant can Upload and overwrite Resource model files, uploaded by the System administrator for the same resource'
    2:
        image: /images/lwm2m/upload-tenant-2-ce.png
        title: 'Tenant can delete files, uploaded by himself'
    3:
        image: /images/lwm2m/upload-tenant-4-ce.png
        title: 'When Tenant deletes his files, file uploaded by the System administrator remains'

device-profile:
    0:
        image: /images/lwm2m/deviceprofile-ce.png
        title: 'Go to Device Profiles, click "+", key-in the Profile name and select or create the Rule chain, which will process messages'
    1:
        image: /images/lwm2m/deviceprofile-1-ce.png
        title: 'Select the "LwM2M" transport type from the drop-down menu'
    2:
        image: /images/lwm2m/deviceprofile-2-ce.png
        title: 'New Profile was successfully created'

device-objects:
    0:
        image: /images/lwm2m/device-objects-ce.png
        title: 'Go to Device Profiles, select "LWM2M", go to "Transport configuration" tab, click "Edit" button'
    1:
        image: /images/lwm2m/device-objects-1-ce.png
        title: 'Add objects from the drop-down menu. Objects should be uploaded to the Resource library'

data-fetch:
    0:
        image: /images/lwm2m/data-fetch-ce.png
        title: 'Tick "Attrubutes" for  data that you want to get when device connects and store it as ThingsBoard attributes'
    1:
        image: /images/lwm2m/data-fetch-1-ce.png
        title: 'Tick Telemetry and\or Observe boxes, if you would like the Server to observe them and fetch updated values'
    2:
        image: /images/lwm2m/data-fetch-3-ce.png
        title: 'Save changes'

device-credentials:
    0:
        image: /images/lwm2m/device-credentials-ce.png
        title: 'Default is No Security mode'
    1:
        image: /images/lwm2m/device-credentials-1-ce.png
        title: 'Add device credentials: Pre shared Key'
    2:
        image: /images/lwm2m/device-credentials-2-ce.png
        title: 'Add device credentials: Raw Public Key'
    3:
        image: /images/lwm2m/device-credentials-3-ce.png
        title: 'Add device credentials: X.509 certificate'

nosecurity-credentials:
    0:
        image: /images/lwm2m/device-credentials-ce.png
        title: 'With No Security mode, Endpoint Client Name is used to identify the device'

wakaama-terminal:
    0:
        image: /images/lwm2m/wakaama-terminal.png
        title: 'Terminal window with Wakaama client'
    1:
        image: /images/lwm2m/wakaama-terminal-1-ce.png
        title: 'You can see the last message in the Transport Log section'

device-objects-ce:
    0:
        image: /images/lwm2m/key-name-ce.png
        title: 'Open the transport configuration settings'
    1:
        image: /images/lwm2m/key-name-1-ce.png
        title: 'Open LwM2M model settings'

otafirmware-transport:
    0:
        image: /images/lwm2m/otafirmware-transport-ce.png
        title: 'Open the device transport configuration settings'
    1:
        image: /images/lwm2m/otafirmware-transport-1-ce.png
        title: 'Select the firmware update strategy'

sota:
    0:
        image: /images/lwm2m/sota-ce.png
        title: 'Select the software update strategy from the drop down menu'

object-attributes:
    0:
        image: /images/lwm2m/object-attrib-1-ce.png
        title: 'Open the device profile configuration page, LwM2M model section'
    1:
        image: /images/lwm2m/object-attrib-2-ce.png
        title: 'Add new attribute'
    2:
        image: /images/lwm2m/object-attrib-3-ce.png
        title: 'Click to open the drop-down list'
    3:
        image: /images/lwm2m/object-attrib-4-ce.png
        title: 'Select the attribute from the list'
    4:
        image: /images/lwm2m/object-attrib-5-ce.png
        title: 'Key-in the value and save'
    5:
        image: /images/lwm2m/object-attrib-6-ce.png
        title: 'Save the device profile configuration'

---

{% include get-hosts-name.html %}
{% include docs/reference/lwm2m-api.md %}