For simplicity, we will provide the device manually using the UI.

{% assign provisionDeviceCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-1-ce.png,
        title: Log in to your ThingsBoard instance and go to the **Entities > Devices** section.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-2-ce.png,
        title: Click the **“+”** button in the top-right corner and select **Add new device**.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-3-ce.png,
        title: Enter a **device name**, for example “My Device”. You can leave all other fields with their default values. Click **Add** to add the device.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-1-1-provision-device-4-ce.png,
        title: Your device has been added.
    '
%}

{% assign provisionDevicePE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-1-pe.png,
        title: Log in to your ThingsBoard instance and go to the **Entities > Devices** section.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-2-pe.png,
        title: By default, you navigate to the device group “All”. Click the **“+”** button in the top-right corner and select **Add new device**.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-3-pe.png,
        title: Enter a **device name**, for example “My Device”. You can leave all other fields with their default values. Click **Add** to add the device.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-1-1-provision-device-4-pe.png,
        title: Your first device has been added.
    '
%}

{% assign provisionDeviceEdgeCE = '
    ===
        image: /images/edge/config/general/1-provision-device-ce.webp,
        title: Log in to your ThingsBoard Edge instance and go to the **Entities > Devices** section. Click the **“+”** button in the top-right corner and select **Add new device**.
    ===
        image: /images/edge/config/general/2-provision-device-ce.webp,
        title: Enter a **device name**, for example, “My Device”. You can leave all other fields with their default values. Click **Add** to add the device.
    ===
        image: /images/edge/config/general/3-provision-device-ce.webp,
        title: Your first device has been added.
'
%}

{% assign provisionDeviceEdgePE = '
    ===
        image: /images/edge/config/general/1-provision-device-pe.webp,
        title: Log in to your ThingsBoard Edge instance and go to the **Entities > Devices** section. Click the **“+”** button in the top-right corner and select **Add new device**.
    ===
        image: /images/edge/config/general/2-provision-device-pe.webp,
        title: Enter a **device name**, for example, “My Device”. You can leave all other fields with their default values. Click **Add** to add the device.
    ===
        image: /images/edge/config/general/3-provision-device-pe.webp,
        title: Your first device has been added.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDevicePE %}
{% elsif page.docsPrefix == "pe/edge/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceEdgePE %}
{% elsif page.docsPrefix == "edge/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceEdgeCE %}
{% else %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=provisionDeviceCE %}
{% endif %} 