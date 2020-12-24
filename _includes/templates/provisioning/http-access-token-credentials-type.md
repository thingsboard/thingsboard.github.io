|---
| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-|-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **PUT_PROVISION_KEY_HERE**                   | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **PUT_PROVISION_SECRET_HERE**                | Provisioning device secret, you should take it from configured device profile. | 
| credentialsType           | **ACCESS_TOKEN**                             | Credentials type parameter.                                                    |
| token                     | **DEVICE_ACCESS_TOKEN**                      | Access token for device in ThingsBoard.                                        |
|---

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "PUT_PROVISION_KEY_HERE",
  "provisionDeviceSecret": "PUT_PROVISION_SECRET_HERE",
  "credentialsType": "ACCESS_TOKEN",
  "token": "DEVICE_ACCESS_TOKEN"
}
```

Provisioning response example:

```json
{
  "credentialsType":"ACCESS_TOKEN",
  "credentialsValue":"DEVICE_ACCESS_TOKEN",
  "status":"SUCCESS"
}
```

#### Sample script

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


from requests import post
from json import dumps


def collect_required_data():
    config = {}
    print("\n\n", "="*80, sep="")
    print(" "*10, "\033[1m\033[94mThingsBoard device provisioning with access token authorization example script. HTTP API\033[0m", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard \033[93murl\033[0m or leave it blank to use default (https://thingsboard.cloud): ")
    config["host"] = host if host else "https://thingsboard.cloud"
    port = input("Please write your ThingsBoard \033[93mHTTP port\033[0m or leave it blank to use default (80): ")
    config["port"] = int(port) if port else 80
    config["provision_device_key"] = input("Please write \033[93mprovision device key\033[0m: ")
    config["provision_device_secret"] = input("Please write \033[93mprovision device secret\033[0m: ")
    config["token"] = input("Please write \033[93mdevice access token\033[0m: ")
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
                         "credentialsType": "ACCESS_TOKEN",
                         "token": config["token"],
                         }
    if config.get("device_name") is not None:
        PROVISION_REQUEST["deviceName"] = config["device_name"]
    response = post("%s:%i/api/v1/provision" % (THINGSBOARD_HOST, THINGSBOARD_PORT), json=PROVISION_REQUEST)
    decoded_response = response.json()
    print("Received response: ")
    print(decoded_response)
    received_token = decoded_response.get("credentialsValue")
    if received_token is not None:
        response = post('%s:%i/api/v1/%s/telemetry' % (THINGSBOARD_HOST, THINGSBOARD_PORT, received_token,), dumps(to_publish))
        print("[THINGSBOARD CLIENT] Response code from Thingsboard.")
        print(response.status_code)
    else:
        print("Failed to get access token from response.")
        print(decoded_response.get("errorMsg"))


```
{: .copy-code}

