|---
| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-|-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **PUT_PROVISION_KEY_HERE**                   | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **PUT_PROVISION_SECRET_HERE**                | Provisioning device secret, you should take it from configured device profile. | 
| credentialsType           | **MQTT_BASIC**                               | Credentials type parameter.                                                    |
| username                  | **DEVICE_USERNAME_HERE**                     | Username for device in ThingsBoard.                                            |
| password                  | **DEVICE_PASSWORD_HERE**                     | Password for device in ThingsBoard.                                            |
| clientId                  | **DEVICE_CLIENT_ID_HERE**                    | Client id for device in ThingsBoard.                                           |
|---

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "PUT_PROVISION_KEY_HERE",
  "provisionDeviceSecret": "PUT_PROVISION_SECRET_HERE",
  "credentialsType": "MQTT_BASIC",
  "username": "DEVICE_USERNAME_HERE",
  "password": "DEVICE_PASSWORD_HERE",
  "clientId": "DEVICE_CLIENT_ID_HERE"
}
```

Provisioning response example:

```json
{
  "credentialsType":"MQTT_BASIC",
  "credentialsValue": {
    "clientId":"DEVICE_CLIENT_ID_HERE",
    "userName":"DEVICE_USERNAME_HERE",
    "password":"DEVICE_PASSWORD_HERE"
    },
  "status":"SUCCESS"
}
```


#### Sample script

To communicate with ThingsBoard we will use Paho MQTT module, so we should install it:

```bash
pip3 install paho-mqtt --user
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

from paho.mqtt.client import Client
from json import dumps, loads

RESULT_CODES = {
    1: "incorrect protocol version",
    2: "invalid client identifier",
    3: "server unavailable",
    4: "bad username or password",
    5: "not authorised",
    }



def collect_required_data():
    config = {}
    print("\n\n", "="*80, sep="")
    print(" "*10, "\033[1m\033[94mThingsBoard device provisioning with basic authorization example script.\033[0m", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard \033[93mhost\033[0m or leave it blank to use default (thingsboard.cloud): ")
    config["host"] = host if host else "thingsboard.cloud"
    port = input("Please write your ThingsBoard \033[93mport\033[0m or leave it blank to use default (1883): ")
    config["port"] = int(port) if port else 1883
    config["provision_device_key"] = input("Please write \033[93mprovision device key\033[0m: ")
    config["provision_device_secret"] = input("Please write \033[93mprovision device secret\033[0m: ")
    device_name = input("Please write \033[93mdevice name\033[0m or leave it blank to generate: ")
    if device_name:
        config["device_name"] = device_name
    config["clientId"] = input("Please write \033[93mclient Id\033[0m: ")
    config["username"] = input("Please write \033[93musername\033[0m: ")
    config["password"] = input("Please write \033[93mpassword\033[0m: ")
    print("\n", "="*80, "\n", sep="")
    return config


class ProvisionClient(Client):
    PROVISION_REQUEST_TOPIC = "/provision/request"
    PROVISION_RESPONSE_TOPIC = "/provision/response"

    def __init__(self, host, port, provision_request):
        super().__init__()
        self._host = host
        self._port = port
        self._username = "provision"
        self.on_connect = self.__on_connect
        self.on_message = self.__on_message
        self.__provision_request = provision_request

    def __on_connect(self, client, userdata, flags, rc):  # Callback for connect
        if rc == 0:
            print("[Provisioning client] Connected to ThingsBoard ")
            client.subscribe(self.PROVISION_RESPONSE_TOPIC)  # Subscribe to provisioning response topic
            provision_request = dumps(self.__provision_request)
            print("[Provisioning client] Sending provisioning request %s" % provision_request)
            client.publish(self.PROVISION_REQUEST_TOPIC, provision_request)  # Publishing provisioning request topic
        else:
            print("[Provisioning client] Cannot connect to ThingsBoard!, result: %s" % RESULT_CODES[rc])

    def __on_message(self, client, userdata, msg):
        decoded_payload = msg.payload.decode("UTF-8")
        print("[Provisioning client] Received data from ThingsBoard: %s" % decoded_payload)
        decoded_message = loads(decoded_payload)
        provision_device_status = decoded_message.get("status")
        if provision_device_status == "SUCCESS":
            self.__save_credentials(decoded_message["credentialsValue"])
        else:
            print("[Provisioning client] Provisioning was unsuccessful with status %s and message: %s" % (provision_device_status, decoded_message["errorMsg"]))
        self.disconnect()

    def provision(self):
        print("[Provisioning client] Connecting to ThingsBoard (provisioning client)")
        self.__clean_credentials()
        self.connect(self._host, self._port, 60)
        self.loop_forever()

    def get_new_client(self):
        client_credentials = loads(self.__get_credentials())
        new_client = None
        if client_credentials:
            new_client = Client(client_id=client_credentials["clientId"])  # Setting client id
            new_client.username_pw_set(client_credentials["userName"], client_credentials["password"])  # Setting username and password for ThingsBoard client
            print("[Provisioning client] Read credentials from file.")
        else:
            print("[Provisioning client] Cannot read credentials from file!")
        return new_client

    @staticmethod
    def __get_credentials():
        new_credentials = None
        try:
            with open("credentials", "r") as credentials_file:
                new_credentials = credentials_file.read()
        except Exception as e:
            print(e)
        return new_credentials

    @staticmethod
    def __save_credentials(credentials):
        with open("credentials", "w") as credentials_file:
            credentials_file.write(dumps(credentials))

    @staticmethod
    def __clean_credentials():
        open("credentials", "w").close()


def on_tb_connected(client, userdata, flags, rc):  # Callback for connect with received credentials
    if rc == 0:
        print("[ThingsBoard client] Connected to ThingsBoard with credentials: username: %s, password: %s, client id: %s" % (client._username.decode(), client._password.decode(), client._client_id.decode()))
    else:
        print("[ThingsBoard client] Cannot connect to ThingsBoard!, result: %s" % RESULT_CODES[rc])


if __name__ == '__main__':
    config = collect_required_data()

    THINGSBOARD_HOST = config["host"]  # ThingsBoard instance host
    THINGSBOARD_PORT = config["port"]  # ThingsBoard instance MQTT port

    PROVISION_REQUEST = {"provisionDeviceKey": config["provision_device_key"],
                         # Provision device key, replace this value with your value from device profile.
                         "provisionDeviceSecret": config["provision_device_secret"],
                         # Provision device secret, replace this value with your value from device profile.
                         "credentialsType": "MQTT_BASIC",
                         "username": config["username"],
                         "password": config["password"],
                         "clientId": config["clientId"],
                         }
    if config.get("device_name") is not None:
        PROVISION_REQUEST["deviceName"] = config["device_name"]
    provision_client = ProvisionClient(THINGSBOARD_HOST, THINGSBOARD_PORT, PROVISION_REQUEST)
    provision_client.provision()  # Request provisioned data
    tb_client = provision_client.get_new_client()  # Getting client with provisioned data
    if tb_client:
        tb_client.on_connect = on_tb_connected  # Setting callback for connect
        tb_client.connect(THINGSBOARD_HOST, THINGSBOARD_PORT, 60)
        tb_client.loop_forever()  # Starting infinity loop
    else:
        print("Client was not created!")
```
{: .copy-code}
