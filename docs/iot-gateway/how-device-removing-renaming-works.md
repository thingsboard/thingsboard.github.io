---
layout: docwithnav-gw
title: Device Renaming/Removing Handling
description: Device Renaming/Removing Handling

---


If devices were provisioned using gateway API and later on the user with admin permissions renames or removes the device entity on ThingsBoard, the gateway will receive a notification about the change.  

This is mission critical for the gateway to keep up with actual device entity state.  

Before certain improvements, there might be cases when the gateway knew nothing about deleting or renaming of the device entity, so the physical device would sent data to non-existing endpoint.  

Starting TB v3.3.3 the platform resolves the issue using Persistent RPC to avoid above data loss scenarios. Below you may find more info on implementation of the solution.

1. Device renaming scenario    
    Gateway uses a device entity name to report telemetry from connected devices. If the entity name was changed on ThingsBoard UI, end-user could encounter the re-provisioning of the device entity (by the gateway) with an old name. With to-gateway notification about renaming this is no more the case.  


2. Device removing scenario  
    Deleting of the device entity on ThingsBoard UI caused a data loss as the gateway itself could not and cannot resolve the erasure properly. With "removed" notification sent to the gateway the latter initiates a new connect message on behalf of physical device, so the one is safe from data loss.  

RPC data examples to the gateway device:  

- Device renaming RPC:  

    ```json
    {
      "method": "gateway_device_renamed",
      "params": {"Old device name": "New device name"}
    }
    ```

- Device removal RPC:  

    ```json
    {
      "method": "gateway_device_deleted",
      "params": "Removed device name"
    }
    ```

**ThingsBoard sets 1 day as a timeout for RPC.**  
