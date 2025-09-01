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

## Usage example

To use the provisioning feature you need to follow next steps:

1. **Create a device profile** in ThingsBoard with provisioning enabled. 
2. Save the **provisioning device key** and **provisioning device secret** from the profile.
3. Configure your `docker-compose.yml` or environment variables with the provisioning parameters.

    ```yaml
    ...
        environment:
          TB_GW_PROVISIONING_DEVICE_KEY: "YOUR_PROVISION_KEY"
          TB_GW_PROVISIONING_DEVICE_SECRET: "YOUR_PROVISION_SECRET"
          TB_GW_PROVISIONING_DEVICE_NAME: "Factory-Gateway-01"
    ...
    ```
    {: .copy-code}

    **Note:**

    - Replace `YOUR_PROVISION_KEY` and `YOUR_PROVISION_SECRET` with actual values from device profile in ThingsBoard.
    - Remove `TB_GW_ACCESS_TOKEN`, `TB_GW_USERNAME`, `TB_GW_PASSWORD`, and `TB_GW_CLIENT_ID` if you want to use provisioning feature.

4. Start the gateway.
5. The gateway will automatically register itself and get credentials from ThingsBoard.
6. The gateway will connect to ThingsBoard using the provisioned credentials, you can check it in the ThingsBoard UI.  

**CAROUSEL WITH IMAGES**
