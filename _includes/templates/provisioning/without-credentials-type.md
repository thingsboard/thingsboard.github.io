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

### MQTT Example script

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


THINGSBOARD_HOST = "mqtt.thingsboard.cloud"  # ThingsBoard instance host
THINGSBOARD_PORT = 1883  # ThingsBoard instance MQTT port

PROVISION_DEVICE_KEY = "PUT_PROVISION_KEY_HERE"  # Provision device key, replace this value with your value from device profile.
PROVISION_DEVICE_SECRET = "PUT_PROVISION_SECRET_HERE"  # Provision device secret, replace this value with your value from device profile.


PROVISION_REQUEST = {"provisionDeviceKey": PROVISION_DEVICE_KEY,
                     "provisionDeviceSecret": PROVISION_DEVICE_SECRET,
                     "deviceName": "DEVICE_NAME"
                     }


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
        client_credentials = self.__get_credentials()
        new_client = None
        if client_credentials:
            new_client = Client()
            new_client.username_pw_set(client_credentials)
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
            credentials_file.write(credentials)

    @staticmethod
    def __clean_credentials():
        open("credentials", "w").close()


def on_tb_connected(client, userdata, flags, rc):  # Callback for connect with received credentials
    if rc == 0:
        print("[ThingsBoard client] Connected to ThingsBoard with credentials: %s" % client._username)
    else:
        print("[ThingsBoard client] Cannot connect to ThingsBoard!, result: %s" % RESULT_CODES[rc])


if __name__ == '__main__':
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


### HTTP Example script

{% highlight python %}
from requests import post


to_publish = {"provisionDeviceKey": "u7piawkboq8v32dmcmpp",
              "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw",
              "deviceName": "DEVICE_NAME"
              }


if __name__ == '__main__':
    response = post("http://127.0.0.1:8080/api/v1/provision", json=to_publish)
    print(response.json())

{% endhighlight %}
{: .copy-code}

### CoAP Example script

To communicate with ThingsBoard we will use asyncio and aiocoap modules, so we should install it: <br><br>

<b>pip3 install asyncio aiocoap --user</b>

<br><br>

{% highlight python %}


import logging
import asyncio

from aiocoap import Context, Message, Code
from json import loads, dumps

THINGSBOARD_HOST = "127.0.0.1"
THINGSBOARD_PORT = "5683"

logging.basicConfig(level=logging.INFO)


to_publish = {"provisionDeviceKey": "u7piawkboq8v32dmcmpp",
"provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw",
"deviceName": "DEVICE_NAME"
}


async def process():
server_address = "coap://" + THINGSBOARD_HOST + ":" + str(THINGSBOARD_PORT)

    client_context = await Context.create_client_context()
    await asyncio.sleep(2)
    try:
        msg = Message(code=Code.POST, payload=str.encode(dumps(to_publish)), uri=server_address+'/api/v1/provision')
        request = client_context.request(msg)
        try:
            response = await asyncio.wait_for(request.response, 60000)
        except asyncio.TimeoutError:
            raise Exception("Request timed out!")

        if response is None:
            raise Exception("Response is empty!")

        decoded_response = loads(response.payload)
        logging.info("Received response: %s", decoded_response)
        received_token = decoded_response.get("credentialsValue")
        logging.info(received_token)
    except Exception as e:
        logging.error(e)
    finally:
        await client_context.shutdown()

if __name__ == '__main__':
asyncio.run(process())





{% endhighlight %}