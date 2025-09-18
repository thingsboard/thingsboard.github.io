---
layout: docwithnav-gw
title: Device Provisioning
description: Learn how to use ThingsBoard IoT Gateway's device provisioning feature to automatically register and obtain credentials from the platform.
---

* TOC
{:toc}

## Introduction

The **ThingsBoard IoT Gateway** supports the [device provisioning](https://thingsboard.io/docs/user-guide/device-provisioning/) feature, allowing it to **automatically register itself** on the ThingsBoard platform and obtain its credentials without manual configuration.  

This is especially useful for:  
- **Device manufacturers** — enabling mass production deployment with minimal configuration.  
- **System integrators** — simplifying field installation and avoiding manual setup per device.  

Once provisioned, the gateway uses the received credentials to connect to the platform and operate as a standard ThingsBoard device.  

---

## How it works

When the gateway starts:  
1. It checks if device credentials are already stored locally.  
2. If credentials are missing, it uses **provisioning credentials** (key & secret) to request registration from the platform.  
3. The platform:  
    - Creates a device or use existing, depending on chosen in device profile device provisioning strategy.
    - Assigns it the requested or default name.
    - Generates device credentials.
4. The gateway stores these credentials locally and uses them for all future connections.

If credentials need to be changed or regenerated, they can be removed, and the gateway will re-provision itself on the next start.  

---

## Environment variables

Provisioning parameters are configured via environment variables.  
You can define them in your `docker-compose.yml` or set them manually in your environment.  

| Variable Name                               | Required | Description |
|---------------------------------------------|----------|-------------|
| **`TB_GW_PROVISIONING_DEVICE_KEY`**         | Yes      | Provisioning device key (provided by platform administrator). |
| **`TB_GW_PROVISIONING_DEVICE_SECRET`**      | Yes      | Provisioning device secret (provided by platform administrator). |
| **`TB_GW_PROVISIONING_DEVICE_NAME`**        | No       | Name of the provisioned device in ThingsBoard. If not set, a random name will be generated. |
| **`TB_GW_PROVISIONING_DEVICE_ACCESS_TOKEN`**| No       | If set, the platform will assign this token to the device and use **Access Token** authentication. |
| **`TB_GW_PROVISIONING_DEVICE_USERNAME`**    | No       | MQTT Basic authentication username. Must be used together with password/client ID (credentials type will be **MQTT Basic**). |
| **`TB_GW_PROVISIONING_DEVICE_PASSWORD`**    | No       | MQTT Basic authentication password. Used together with username/client ID. |
| **`TB_GW_PROVISIONING_DEVICE_CLIENT_ID`**   | No       | MQTT Basic authentication client ID. |
| **`TB_GW_PROVISIONING_DEVICE_CA_CERT_FILENAME`** | No  | Name of CA certificate file in the `config/` folder. If set, the gateway will generate a client certificate and use **X.509 Certificate** authentication. |

**Note:**  
The credentials type is determined by which optional parameters you provide.  
For example:  
- `ACCESS_TOKEN` → Access Token authentication
- `USERNAME`/`PASSWORD`/`CLIENT_ID` → MQTT Basic authentication
- `CA_CERT_FILENAME` → X.509 authentication

---

## Provisioning process

1. **Start the gateway** with the provisioning variables configured.
2. The gateway sends a **provision request** with the device key and secret.
3. The platform responds with generated credentials according to the provided configuration.
4. Credentials are **saved locally** in the gateway’s config directory.
5. The gateway connects to ThingsBoard using these credentials.

---

## Resetting provisioned credentials

If you want the gateway to re-provision itself (for example, to change authentication type or rotate credentials), you can remove the stored credentials via a service RPC:

**RPC Method:** [`remove_provisioned_credentials`](/docs/iot-gateway/guides/how-to-use-gateway-rpc-methods/#remove_provisioned_credentials-rpc-method)

When executed:
- The gateway deletes the stored credentials from its config folder.
- On the next restart, it will perform the provisioning process again.

---

## Example: Using device provisioning

To use the provisioning feature you need to follow next steps:

**1. Create a Device profile**

- Go to the "**Devices profile**" page, click the "**plus**" button and select "**Create new device profile**" from drop-down menu.
- Enter device profile name and go to the **Device provisioning** tab.
- Enable provisioning by selecting "**Allow to create new devices**" option.
- Save the values of **provisioning device key** and **provisioning device secret**.
- Click "**Add**" to create device profile.

{% assign gatewayDeviceProvisioning1 = '
      ===
            image: /images/gateway/device-provisioning/gateway-device-provisioning-1-ce.png,
            title: Go to the "**Devices profile**" page, click the "**plus**" button and select "**Create new device profile**" from drop-down menu.
      ===
            image: /images/gateway/device-provisioning/gateway-device-provisioning-2-ce.png,
            title: Enter device profile name and go to the **Device provisioning** tab.
      ===
            image: /images/gateway/device-provisioning/gateway-device-provisioning-3-ce.png,
            title: Enable provisioning by selecting "**Allow to create new devices**" option. Save the values of **provisioning device key** and **provisioning device secret**. Click "**Add**" to create device profile.
      ===
            image: /images/gateway/device-provisioning/gateway-device-provisioning-4-ce.png,
            title: Device profile created.
'
%}

{% include images-gallery.liquid imageCollection=gatewayDeviceProvisioning1 %}

**2. Create a Gateway**

- Go to the "**Gateways**" page, and click the "**plus**" button in the top-right corner.
- Enter the gateway name and select the **device profile** you created above.

**3. Edit `docker-compose.yml` for the gateway**

Add the provisioning variables under environment:

```yaml
...
  environment:
    - TB_GW_PROVISIONING_DEVICE_KEY=YOUR_PROVISION_KEY
    - TB_GW_PROVISIONING_DEVICE_SECRET=YOUR_PROVISION_SECRET
    - TB_GW_PROVISIONING_DEVICE_NAME=Factory-Gateway-01
...
```
{: .copy-code}

&#42; Replace `YOUR_PROVISION_KEY` and `YOUR_PROVISION_SECRET` with the actual values from the Device profile in ThingsBoard.

{% capture difference %}
**Note**: If you&#39;re using provisioning, **remove** these legacy auth variables (if present):
`TB_GW_ACCESS_TOKEN`, `TB_GW_USERNAME`, `TB_GW_PASSWORD`, `TB_GW_CLIENT_ID`.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% assign gatewayDeviceProvisioning2 = '
    ===
        image: /images/gateway/device-provisioning/gateway-device-provisioning-5-ce.png,
        title: Go to the "**Devices profile**" page, click "**+**" and select "**Create new device profile**" from drop-down menu.
    ===
        image: /images/gateway/device-provisioning/gateway-device-provisioning-6-ce.png,
        title: Enter device profile name and go to the **Device provisioning** tab.
    ===
        image: /images/gateway/device-provisioning/gateway-device-provisioning-7-ce.png,
        title: Enable provisioning by selecting "**Allow to create new devices**" option. Save the values of **provisioning device key** and **provisioning device secret**. Click "**Add**" to create device profile.
'
%}

{% include images-gallery.liquid imageCollection=gatewayDeviceProvisioning2 %}

**4. Start the Gateway**

Execute the following command to run the Gateway:

```
docker compose up
```
{: .copy-code}

{% assign gatewayDeviceProvisioning3 = '
    ===
        image: /images/gateway/device-provisioning/gateway-device-provisioning-8-ce.png,
        title: Execute `docker compose up` command to run the Gateway.
'
%}

{% include images-gallery.liquid imageCollection=gatewayDeviceProvisioning3 %}

**5. Verify the connection**

The gateway will **auto-register** and obtain credentials from ThingsBoard. It will then connect using those credentials.

{% assign gatewayDeviceProvisioning4 = '
    ===
        image: /images/gateway/device-provisioning/gateway-device-provisioning-9-ce.png,
        title: The gateway will **auto-register** and obtain credentials from ThingsBoard. It will then connect using those credentials.
'
%}

{% include images-gallery.liquid imageCollection=gatewayDeviceProvisioning4 %}

You can check the status in the ThingsBoard UI ("**Gateways**" page / device details).

{% assign gatewayDeviceProvisioning5 = '
    ===
        image: /images/gateway/device-provisioning/gateway-device-provisioning-10-ce.png,
        title: You can check the status in the ThingsBoard UI (Gateways page / device details).
'
%}

{% include images-gallery.liquid imageCollection=gatewayDeviceProvisioning5 %}
