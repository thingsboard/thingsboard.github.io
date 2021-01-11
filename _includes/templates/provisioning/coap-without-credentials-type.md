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
{: .copy-code}

Provisioning response example:

```json
{
  "status":"SUCCESS",
  "credentialsType":"ACCESS_TOKEN",
  "credentialsValue":"sLzc0gDAZPkGMzFVTyUY"
}
```
{: .copy-code}


#### Sample script

To communicate with ThingsBoard we will use CoAPthon3 module, so we should install it:

```bash
pip3 install coapthon3 --user
```
{: .copy-code}

The script source code is available below. You may copy-paste it to a file, for example:

```bash
device-provision-example.py
```
{: .copy-code}

Now you should run the script and follow the steps inside.  
You may launch the script using python 3:  

```bash 
python3 device-provision-example.py
```
{: .copy-code}

The script source code: 

```python

from coapthon.client.helperclient import HelperClient
from json import loads, dumps


def collect_required_data():
    config = {}
    print("\n\n", "="*80, sep="")
    print(" "*10, "\033[1m\033[94mThingsBoard device provisioning without authorization example script. CoAP API\033[0m", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard \033[93mhost\033[0m or leave it blank to use default (thingsboard.cloud): ")
    config["host"] = host if host else "thingsboard.cloud"
    port = input("Please write your ThingsBoard \033[93mCoAP port\033[0m or leave it blank to use default (5683): ")
    config["port"] = int(port) if port else 5683
    config["provision_device_key"] = input("Please write \033[93mprovision device key\033[0m: ")
    config["provision_device_secret"] = input("Please write \033[93mprovision device secret\033[0m: ")
    device_name = input("Please write \033[93mdevice name\033[0m or leave it blank to generate: ")
    if device_name:
        config["device_name"] = device_name
    print("\n", "="*80, "\n", sep="")
    return config


# Example for message to ThingsBoard
to_publish = {
  "stringKey": "value1",
  "booleanKey": True,
  "doubleKey": 42.0,
  "longKey": 73,
  "jsonKey": {
    "someNumber": 42,
    "someArray": [1, 2, 3],
    "someNestedObject": {"key": "value"}
  }
}

if __name__ == '__main__':

    config = collect_required_data()

    THINGSBOARD_HOST = config["host"]  # ThingsBoard instance host
    THINGSBOARD_PORT = config["port"]  # ThingsBoard instance MQTT port

    PROVISION_REQUEST = {"provisionDeviceKey": config["provision_device_key"],  # Provision device key, replace this value with your value from device profile.
                         "provisionDeviceSecret": config["provision_device_secret"],  # Provision device secret, replace this value with your value from device profile.
                         }
    if config.get("device_name") is not None:
        PROVISION_REQUEST["deviceName"] = config["device_name"]
    client = HelperClient(server=(THINGSBOARD_HOST, THINGSBOARD_PORT))
    response = client.post('/api/v1/provision', dumps(PROVISION_REQUEST))
    client.stop()
    decoded_response = loads(response.payload)
    print("Received response: ")
    print(decoded_response)
    received_token = decoded_response.get("credentialsValue")
    if received_token is not None:
        thingsboardClient = HelperClient(server=(THINGSBOARD_HOST, THINGSBOARD_PORT))
        response = thingsboardClient.post('/api/v1/%s/telemetry' % (received_token,), dumps(to_publish))
        print("[THINGSBOARD CLIENT] Response from Thingsboard.")
        print(response)
        thingsboardClient.stop()
    else:
        print("Failed to get access token from response.")
        print(decoded_response.get("errorMsg"))

```
{: .copy-code}
