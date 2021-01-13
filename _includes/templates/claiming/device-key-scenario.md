
This procedure requires device to generate the Secret Key based on some trigger event. 
For example, once device is booted or when some physical button is pressed. 
Once the Secret Key is generated, it is valid for certain period of time. 
The device sends Claiming Information to the server which contains both the Secret Key and the duration of the validity of the key.

{% capture cache-living-time %}
By default, you can set the expiration date as the date and time the request was received plus 1 day as the maximum value.  
To add more time, you should increase the value of the parameter **caffeine.specs.claimDevices.timeToLiveInMinutes** in thingsboard.yaml file.{% endcapture %}
{% include templates/info-banner.md content=cache-living-time %}

ThingsBoard server stores Claiming Information for the duration of the validity of the key. See diagram below.

![image](/images/user-guide/claiming-devices/device-side-key-diagram.png)

Device may send Claiming Information to TB using all supported transport protocols. The message body has two parameters: **secretKey** and **durationMs**, which may be optionally specified. 
The **secretKey** parameter adds security to the claiming process.
The **durationMs** parameter determines the expiration of claiming time.
In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

In order to enable claiming devices feature a system parameter **security.claim.allowClaimingByDefault** (see [configuration guide](/docs/user-guide/install/config/)) 
should be set to **true**, otherwise a server-side **claimingAllowed** attribute with the value **true** is obligatory for provisioned devices.

Please see the Device API references to get the information about the message structure and topics/URLs to which to send the claiming messages.
You can use the MQTT Gateway API that allows initiating claiming of multiple devices per time as well.

 - [MQTT Device API](/docs/reference/mqtt-api/#claiming-devices)
 - [CoAP Device API](/docs/reference/coap-api/#claiming-devices)
 - [HTTP Device API](/docs/reference/http-api/#claiming-devices)
 - [MQTT Gateway API](/docs/reference/gateway-mqtt-api/#claiming-devices-api)
 

Once the Claiming Info is sent, device may display the Secret Key either in plain text or using the QR code. User should scan this key and use it to send the Claiming Request.
Claiming Request consists of the device Name and Secret Key. You may use MAC address or other unique property as the device Name. 
See instructions how to send the Claiming Request [here](/docs/user-guide/claiming-devices/#device-claiming-api-request).   

**Note:** The Secret Key may also be an empty string. This is useful if your device does not have any way to display the Secret Key. 
For example, you may allow to claim device within 30 seconds after the claim button is pressed on the device. In this case user needs to know the device Name (MAC address, etc) only.

Server validates the Claiming Request and replies with the Claiming Response. Claiming Response contains status of the Claiming operation and Device ID if the operation was successful.

Once Claiming Information is provisioned, Customer User may use [Claim Device](/docs/user-guide/claiming-devices/#device-claiming-widget) widget.   
