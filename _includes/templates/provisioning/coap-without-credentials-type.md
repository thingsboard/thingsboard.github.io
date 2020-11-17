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

#### Sample application

To communicate with ThingsBoard we will use CoAPthon3 module, so we should install it:

```bash
pip3 install coapthon3 --user
```
{: .copy-code}

The application source code is available below. You may copy-paste it to a file, for example:

```bash
device-provision-example.py
```
{: .copy-code}

Now you should edit the script and change the following parameters:

```python
THINGSBOARD_HOST = "cloud.thingsboard.io"  # ThingsBoard instance host
THINGSBOARD_PORT = 1883  # ThingsBoard instance MQTT port

PROVISION_DEVICE_KEY = "PUT_PROVISION_KEY_HERE"  # Provision device key, replace this value with your value from device profile.
PROVISION_DEVICE_SECRET = "PUT_PROVISION_SECRET_HERE"  # Provision device secret, replace this value with your value from device profile.
```
{: .copy-code}

Once you have configured your provision key and secret, you may launch the application using python 3:

```bash 
python3 device-provision-example.py
```
{: .copy-code}

The application source code: 

```python

from coapthon.client.helperclient import HelperClient
from json import dumps

to_publish = {"provisionDeviceKey": "u7piawkboq8v32dmcmpp",
              "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw",
              "deviceName": "DEVICE_NAME"
              }

if __name__ == '__main__':
    client = HelperClient(server=('127.0.0.1', 5683))
    response = client.post('/api/v1/provision', dumps(to_publish))
    print(response.payload)
    client.stop()

```
{: .copy-code}