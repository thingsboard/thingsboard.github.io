 {% capture info %}
<br>
**INFO: To use this feature, you should configure [MQTT over SSL in ThingsBoard](/docs/user-guide/mqtt-over-ssl/)**  
{% endcapture %}
{% include templates/info-banner.md content=info %}

|---
| **Parameter**             | **Example value**                            | **Description**                                                                |
|:-|:-|-
| *deviceName*              | **DEVICE_NAME**                              | Device name in ThingsBoard.                                                    |
| *provisionDeviceKey*      | **PUT_PROVISION_KEY_HERE**                   | Provisioning device key, you should take it from configured device profile.    |
| *provisionDeviceSecret*   | **PUT_PROVISION_SECRET_HERE**                | Provisioning device secret, you should take it from configured device profile. | 
| credentialsType           | **X509_CERTIFICATE**                         | Credentials type parameter.                                                    |
| hash                      | **MIIB........AQAB**                         | Public key X509 hash for device in ThingsBoard.                                |
|---

Provisioning request data example:
 
```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "PUT_PROVISION_KEY_HERE",
  "provisionDeviceSecret": "PUT_PROVISION_SECRET_HERE",
  "credentialsType": "X509_CERTIFICATE",
  "hash": "MIIB........AQAB"
}
```

Provisioning response example:

```json
{
  "deviceId":"3b829220-232f-11eb-9d5c-e9ed3235dff8",
  "credentialsType":"X509_CERTIFICATE",
  "credentialsId":"f307a1f717a12b32c27203cf77728d305d29f64694a8311be921070dd1259b3a",
  "credentialsValue":"MIIB........AQAB",
  "provisionDeviceStatus":"SUCCESS"
}
```


### MQTT Example script

To use this script put your **mqttserver.pub.pem** (public key of the server) into the folder with script. 

```python

import ssl
from datetime import datetime, timedelta
from cryptography import x509
from cryptography.x509.oid import NameOID
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa
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
    print(" "*10, "\033[1m\033[94mThingsBoard device provisioning with X509 certificate authorization example script. MQTT API\033[0m", sep="")
    print("="*80, "\n\n", sep="")
    host = input("Please write your ThingsBoard \033[93mhost\033[0m or leave it blank to use default (thingsboard.cloud): ")
    config["host"] = host if host else "thingsboard.cloud"
    port = input("Please write your ThingsBoard \033[93mSSL port\033[0m or leave it blank to use default (8883): ")
    config["port"] = int(port) if port else 8883
    config["provision_device_key"] = input("Please write \033[93mprovision device key\033[0m: ")
    config["provision_device_secret"] = input("Please write \033[93mprovision device secret\033[0m: ")
    device_name = input("Please write \033[93mdevice name\033[0m or leave it blank to generate: ")
    if device_name:
        config["device_name"] = device_name
    print("\n", "="*80, "\n", sep="")
    return config

def generate_certs(ca_certfile="mqttserver.pub.pem"):
    root_cert = None
    try:
        with open(ca_certfile, "r") as ca_file:
            root_cert = x509.load_pem_x509_certificate(str.encode(ca_file.read()), default_backend())
    except Exception as e:
        print("Failed to load CA certificate: %r" % e)
    if root_cert is not None:
        private_key = rsa.generate_private_key(
            public_exponent=65537, key_size=2048, backend=default_backend()
            )
        new_subject = x509.Name([
        x509.NameAttribute(NameOID.COMMON_NAME, "localhost")
    ])
        certificate = (
            x509.CertificateBuilder()
            .subject_name(new_subject)
            .issuer_name(new_subject)
            .public_key(private_key.public_key())
            .serial_number(x509.random_serial_number())
            .not_valid_before(datetime.utcnow())
            .not_valid_after(datetime.utcnow() + timedelta(days=365*10))
            .add_extension(x509.BasicConstraints(ca=True, path_length=None), critical=True)
            .sign(private_key=private_key, algorithm=hashes.SHA256(), backend=default_backend())
        )

        with open("cert.pem", "wb") as cert_file:
            cert_file.write(certificate.public_bytes(encoding=serialization.Encoding.PEM))

        with open("key.pem", "wb") as key_file:
            key_file.write(private_key.private_bytes(encoding=serialization.Encoding.PEM,
                                                     format=serialization.PrivateFormat.TraditionalOpenSSL,
                                                     encryption_algorithm=serialization.NoEncryption(),
                                                ))


def read_cert():
    cert = None
    key = None
    try:
        with open("cert.pem", "r") as cert_file:
            cert = cert_file.read()
        with open("key.pem", "r") as key_file:
            key = key_file.read()
    except Exception as e:
        print("Cannot read certificate with error: %r" % e)
    return cert, key


class ProvisionClient(Client):
    PROVISION_REQUEST_TOPIC = "/provision/request"
    PROVISION_RESPONSE_TOPIC = "/provision/response"

    def __init__(self, host, port, provision_request):
        super().__init__()
        self._host = host
        self._port = port
        self._username = "provision"
        self.tls_set(ca_certs="mqttserver.pub.pem", tls_version=ssl.PROTOCOL_TLSv1_2)
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
            if decoded_message["credentialsValue"] == cert.replace("-----BEGIN CERTIFICATE-----\n", "")\
                                                          .replace("-----END CERTIFICATE-----\n", "")\
                                                          .replace("\n", ""):
                print("[Provisioning client] Provisioning success! Certificates are saved.")
                self.__save_credentials(cert)
            else:
                print("[Provisioning client] Returned certificate is not equal to sent one.")
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
            new_client.tls_set(ca_certs="mqttserver.pub.pem", certfile="cert.pem", keyfile="key.pem", cert_reqs=ssl.CERT_REQUIRED,
                               tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)
            new_client.tls_insecure_set(False)
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
        print("[ThingsBoard client] Connected to ThingsBoard with credentials: username: %s, password: %s, client id: %s" % (client._username, client._password, client._client_id))
    else:
        print("[ThingsBoard client] Cannot connect to ThingsBoard!, result: %s" % RESULT_CODES[rc])


if __name__ == '__main__':

    config = collect_required_data()

    THINGSBOARD_HOST = config["host"]  # ThingsBoard instance host
    THINGSBOARD_PORT = config["port"]  # ThingsBoard instance MQTT port

    PROVISION_REQUEST = {"provisionDeviceKey": config["provision_device_key"],  # Provision device key, replace this value with your value from device profile.
                         "provisionDeviceSecret": config["provision_device_secret"],  # Provision device secret, replace this value with your value from device profile.
                         "credentialsType": "X509_CERTIFICATE",
                         }
    if config.get("device_name") is not None:
        PROVISION_REQUEST["deviceName"] = config["device_name"]
    generate_certs()  # Generate certificate and key
    cert, key = read_cert()  # Read certificate and key
    PROVISION_REQUEST["hash"] = cert
    if PROVISION_REQUEST.get("hash") is not None:
        provision_client = ProvisionClient(THINGSBOARD_HOST, THINGSBOARD_PORT, PROVISION_REQUEST)
        provision_client.provision()  # Request provisioned data
        tb_client = provision_client.get_new_client()  # Getting client with provisioned data
        if tb_client:
            tb_client.on_connect = on_tb_connected  # Setting callback for connect
            tb_client.connect(THINGSBOARD_HOST, THINGSBOARD_PORT, 60)
            tb_client.loop_forever()  # Starting infinity loop
        else:
            print("Client was not created!")
    else:
        print("Cannot read certificate.")

```
{: .copy-code}
