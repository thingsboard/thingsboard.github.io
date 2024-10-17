* TOC
{:toc}

## Use Case description

As a Tenant, I would like to pre-provision my devices via script or UI. My customers purchase devices directly from me or through the distributors.
I would like my customers to claim their devices based on the QR code or similar technique, once they get physical access to the device.

Once device is claimed, the customer becomes its owner and customer users may access device data as well as control the device.   

## Device Claiming scenarios
 
ThingsBoard User can claim the device if they "know" the device Name and Secret Key. 
The Secret Key is optional, always has an expiration time, and may also change over time. 

The Secret Key may be provisioned in two different ways:

1. *Device-side key* scenario - Device contains **expirationTime** server attribute with expiration timestamp. The device sends claiming request to ThingsBoard with claiming data and only after this customer is able to claim device by using device claiming widget.   
2. *Server-side key* scenario - Device contains **claimingData** server attribute with claiming data and customer claim device using claim device widget.  

See below for more details.

{% capture claimingscenariotogglespec %}
Claiming using <b>device-side</b> key scenario%,%deviceside%,%templates/claiming/device-key-scenario.md%br%
Claiming using <b>server-side</b> key scenario%,%serverside%,%templates/claiming/server-key-scenario.md%br%{%endcapture%}
{% include content-toggle.liquid content-toggle-id="claimingscenario" toggle-spec=claimingscenariotogglespec %}

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}

## Device Claiming Permissions in PE

It is important to know that in the case of the PE version the user that is trying to claim the specific device must have the necessary permissions to do so.
In this case, the needed permission is the following:

- **Resource: Device**
- **Operation: Claim devices**

Let's add the above permission for a custom claiming user group.

{% include images-gallery.html imageCollection="device-claiming-permissions-in-pe-carousel" showListImageTitles="true" %} 

{% endif %}

## Device Claiming Widget

{% include images-gallery.html imageCollection="device-claiming-widget-carousel" showListImageTitles="true" %} 

## Device Claiming API Request

The Claiming Request is sent as a POST request to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim
```
{: .copy-code}

The supported data format is:

```json
{
  "secretKey":"value"
}
```
{: .copy-code}

**Note:** the message does not contain **durationMs** parameter and the **secretKey** parameter is optional.

Whenever claiming is succeed the device is being assigned to the specific customer. The **claimingAllowed** attribute is automatically deleted in case the system parameter **allowClaimingByDefault** is **false**.

In addition, there is a possibility to reclaim the device, which means the device will be unassigned from the customer. The **claimingAllowed** attribute will appear again in case the **allowClaimingByDefault** is **false**. 

See the following for more details regarding the above steps. 

## Device Reclaiming API Request

In order to reclaim the device, you can send DELETE request to the following URL (Don't forget to replace device name with the correct name):

```shell
curl -X DELETE {{httpsUrl}}/api/customer/device/$DEVICE_NAME/claim
```
{: .copy-code}

You will receive the response like the following one:

```json
{
  "result": {},
  "setOrExpired": true
}
```
{: .copy-code}

## Python example scripts

In this section you may get examples of code for claiming device feature.  
We will use **tb-mqtt-client** python module to connect and claim device.  
You are able to install it using the following command:  

```bash
pip3 install tb-mqtt-client --user
```
{: .copy-code}

### Basic claiming example

Let's assume we have a device on tenant level and configured customer, like it is described above.  
At the moment, we want to connect the device and send claiming request to assign it to customer.  

Case description:
We have a device on ThingsBord with a name **Test claiming device**.  
The device has access token credentials - **Eypdinl1gUF5fSerOPJF**.  

We should [download the script](/docs/user-guide/resources/claiming-device/basic_claiming_example.py) below and run it to send claiming request to the server.  

```python
#
# Copyright © 2016-2024 The Thingsboard Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

from tb_device_mqtt import TBDeviceMqttClient

def collect_required_data():
    config = {}
    print("\n\n", "="*80, sep="")
    print(" "*20, "ThingsBoard basic device claiming example script.", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard server hostname or leave it blank to use default (thingsboard.cloud): ")
    config["host"] = host if host else "{{mqttHostName}}"
    token = ""
    while not token:
        token = input("Please write accessToken for device: ")
        if not token:
            print("Access token is required!")
    config["token"] = token
    config["secret_key"] = input("Please write secret key for claiming request: ")
    if not config["secret_key"]:
        print("Please make sure that you have claimingData in server attributes for device to use this feature without device secret in the claiming request.")
    duration_ms = input("Please write duration in milliseconds for claiming request or leave it blank to use default (30000): ")
    config["duration_ms"] = int(duration_ms) if duration_ms else 30000
    print("\n", "="*80, "\n", sep="")
    return config


if __name__ == '__main__':
    config = collect_required_data()
    client = TBDeviceMqttClient(config["host"], username=config["token"])
    client.connect()
    rc = client.claim(secret_key=config["secret_key"], duration=config["duration_ms"]).get()
    if rc == 0:
        print("Claiming request was sent, now you should use claiming device widget to finish the claiming process.")

```
{:.copy-code.expandable-20}

Then we are able to use [Device Claiming Widget](#device-claiming-widget).

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}
