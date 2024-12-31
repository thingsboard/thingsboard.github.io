---
layout: docwithnav-paas
assignees:
- nick
title: LWM2M Device API Reference
description: Supported LwM2M API Reference for IoT Devices

upload-models:
    0:
        image: /images/lwm2m/upload-pe.png
        title: 'Login to your ThingsBoard instance and go to System settings -> Resource Library,
        then click "+" button'
    1:
        image: /images/lwm2m/upload-1-pe.png
        title: 'Upload Resource model files'
    2:
        image: /images/lwm2m/upload-2-pe.png
        title: 'Make sure you can see new files in the list'


upload-tenant:
    0:
        image: /images/lwm2m/upload-tenant-0-pe.png
        title: 'Tenant can not delete files, uploaded by the System administrator'
    1:
        image: /images/lwm2m/upload-tenant-1-pe.png
        title: 'Tenant can Upload and overwrite Resource model files, uploaded by the System administrator for the same resource'
    2:
        image: /images/lwm2m/upload-tenant-2-pe.png
        title: 'Tenant can delete files, uploaded by himself'
    3:
        image: /images/lwm2m/upload-tenant-3-pe.png
        title: 'Try to delete file'
    4:
        image: /images/lwm2m/upload-tenant-4-pe.png
        title: 'When Tenant deletes his files, file uploaded by the System administrator remains'

device-profile:
    0:
        image: /images/lwm2m/deviceprofile-pe.png
        title: 'Go to Device Profiles, click "+", key-in the Profile name and select or create the Rule chain, which will process messages'
    1:
        image: /images/lwm2m/deviceprofile-1-pe.png
        title: 'Select the "LwM2M" transport type from the drop-down menu'
    2:
        image: /images/lwm2m/deviceprofile-2-pe.png
        title: 'New Profile was successfully created'

device-objects:
    0:
        image: /images/lwm2m/device-objects-pe.png
        title: 'Go to Device Profiles, select "LWM2M", go to "Transport configuration" tab, click "Edit" button'
    1:
        image: /images/lwm2m/device-objects-1-pe.png
        title: 'Add objects from the drop-down menu. Objects should be uploaded to the Resource library'

data-fetch:
    0:
        image: /images/lwm2m/data-fetch-pe.png
        title: 'Tick "Attrubutes" for  data that you want to get when device connects and store it as ThingsBoard attributes'
    1:
        image: /images/lwm2m/data-fetch-1-pe.png
        title: 'Tick Telemetry and\or Observe boxes, if you would like the Server to observe them and fetch updated values'
    2:
        image: /images/lwm2m/data-fetch-3-pe.png
        title: 'Save changes'

device-credentials:
    0:
        image: /images/lwm2m/device-credentials-pe.png
        title: 'Default is No Security mode'
    1:
        image: /images/lwm2m/device-credentials-1-pe.png
        title: 'Add device credentials: Pre-shared Key'
    2:
        image: /images/lwm2m/device-credentials-2-pe.png
        title: 'Add device credentials: Raw Public Key'
    3:
        image: /images/lwm2m/device-credentials-3-pe.png
        title: 'Add device credentials: X.509 certificate'

nosecurity-credentials:
    0:
        image: /images/lwm2m/device-credentials-pe.png
        title: 'With No"-"Security mode, Endpoint Client Name is used to identify the device'

wakaama-terminal:
    0:
        image: /images/lwm2m/wakaama-terminal.png
        title: 'Terminal window with Wakaama client'
    1:
        image: /images/lwm2m/wakaama-terminal-1-pe.png
        title: 'You can see the last message in the Transport Log section'

device-objects-ce:
    0:
        image: /images/lwm2m/key-name-pe.png
        title: 'Open the transport configuration settings'
    1:
        image: /images/lwm2m/key-name-1-pe.png
        title: 'Open LwM2M model settings'

otafirmware-transport:
    0:
        image: /images/lwm2m/otafirmware-transport-pe.png
        title: 'Open the devices transport configuration settings'
    1:
        image: /images/lwm2m/otafirmware-transport-1-pe.png
        title: 'Select the firmware update strategy'

sota:
    0:
        image: /images/lwm2m/sota-pe.png
        title: 'Select the software update strategy from the drop down menu'

object-attributes:
    0:
        image: /images/lwm2m/object-attrib-1-pe.png
        title: 'Open the device profile configuration page, LwM2M model section'
    1:
        image: /images/lwm2m/object-attrib-2-pe.png
        title: 'Add new attribute'
    2:
        image: /images/lwm2m/object-attrib-3-pe.png
        title: 'Click to open the drop-down list'
    3:
        image: /images/lwm2m/object-attrib-4-pe.png
        title: 'Select the attribute from the list'
    4:
        image: /images/lwm2m/object-attrib-5-pe.png
        title: 'Key-in the value and save'
    5:
        image: /images/lwm2m/object-attrib-6-pe.png
        title: 'Save the device profile configuration'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/reference/lwm2m-api.md %}
