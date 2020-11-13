---
layout: docwithnav
title: Provisioning devices
description: IoT device management using ThingsBoard provisioning devices feature

---

* TOC
{:toc}

## Use Case description

Case 1:
        As a Tenant, I would like to decrease time for my devices configurations via script. My devices has predefined configurations to connect to platform.      
        But at the same time, I wanna configure them as separated devices on platform with their unique credentials.    

Case 2:
        As a Tenant, I would like to decrease time for my devices configurations via script. My devices doesn't have predefined configurations to connect to platform.      
        And I wanna create device credentials from the device.

### Device profile configuration

In order to use provisioning feature, we should configure device profile to enable provisioning feature and get provision device key and provision device secret.

1. Create device profile or open the existing one. We will use existing one.     
Open the device profile and go to tab *Device provisioning*.  

2. Select strategy for device provisioning. There are 2 strategies for device provisioning feature: [Allow create new devices strategy](#allow-create-new-devices-strategy) and  [Check pre provisioned devices strategy](#check-pre-provisioned-devices-strategy)

3. Send Provisioning request from device to ThingsBoard

4. Server validates the Provisioning Request and replies with the Provisioning Response.  
Provisioning Response contains status of the provisioning operation, device id, credentials type and credentials data if the operation was successful.  

### Provisioning request

Using provisioning feature you are able to provide credentials from device to ThingsBoard.

Please see the Device API references to get the information about the message structure and topics/URLs to which to send the provisioning messages.

 - [MQTT Device API](/docs/reference/mqtt-api/#device-provisioning)  
 - [CoAP Device API](/docs/reference/coap-api/#device-provisioning)  
 - [HTTP Device API](/docs/reference/http-api/#device-provisioning)  
 

Once the provisioning response sent and device was created, ThingsBoard creates device with server attribute *provisionState* and sets it to *provisioned*.    

There are 2 strategies for device provisioning:  

#### Check pre provisioned devices strategy

When ThingsBoard receives provision request, it will check existing devices using device name, provisioning key and secret. If device exists, ThingsBoard will return it credentials.  

*Note* If device is not exist in ThingsBoard, it will not be created and you will receive the error in the provisioning response.  

Example for device provisioning request with this strategy.

| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **PUT_PROVISION_KEY_HERE**                   | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **PUT_PROVISION_SECRET_HERE**                | Provisioning device secret, you should take it from configured device profile. | 
|-

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "PUT_PROVISION_KEY_HERE",
  "provisionDeviceSecret": "PUT_PROVISION_SECRET_HERE"
}
```

Provisioning response example (It can be different, depends on credentials type of device in ThingsBoard. Responses are the same like if you use [allow create device strategy with credential type parameter](#allow-create-new-devices-strategy)):

```json
{
  "deviceId":"97a20840-2287-11eb-9872-652e146ea052",
  "credentialsType":"ACCESS_TOKEN",
  "credentialsId":"sLzc0gDAZPkGMzFVTyUY",
  "provisionDeviceStatus":"SUCCESS"
}
```

Where:
*credentialsId* - Access token for device in ThingsBoard.  


#### Allow create new devices strategy

When ThingsBoard receives provision request and device with it will be created. Device credentials will be returned to the device in the provisioning response.  
  
This strategy allows to provide device credentials in the provisioning request.  
Using this strategy, you are able to add parameter *credentialsType* into provisioning request and device will be created with credentials that you sent.  

Additional parameters depend on *credentialsType*.  
Available values for *credentialType*:  

{% capture credentialstogglespec %}
Without credentialsType%,%without%,%templates/provisioning/without-credentials-type.md%br%
ACCESS_TOKEN%,%access-token%,%templates/provisioning/access-token-credentials-type.md%br%
MQTT_BASIC%,%mqtt-basic%,%templates/provisioning/mqtt-basic-credentials-type.md%br%
X509_CERTIFICATE%,%x509-certificate%,%templates/provisioning/x509-certificate-credentials-type.md{% endcapture %}
{% include content-toggle.html content-toggle-id="provisioning" toggle-spec=credentialstogglespec %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}