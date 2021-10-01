Instructions below will describe how to generate a client-side certificate and connect to the server that is running CoAP over DTLS.
You will need to have the public key of the server certificate in PEM format. 
See [following instructions](/docs/{{docsPrefix}}user-guide/coap-over-dtls/#self-signed-certificate-generation) for more details on server-side configuration.

#### Update keygen.properties file
 
Open the keygen.properties file, and update the values if needed:

```bash
DOMAIN_SUFFIX="localhost"
SUBJECT_ALTERNATIVE_NAMES="ip:127.0.0.1"
ORGANIZATIONAL_UNIT=ThingsBoard
ORGANIZATION=ThingsBoard
CITY="San Francisco"
STATE_OR_PROVINCE=CA
TWO_LETTER_COUNTRY_CODE=US

SERVER_KEYSTORE_PASSWORD=server_ks_password
SERVER_KEY_PASSWORD=server_key_password

SERVER_KEY_ALIAS="serveralias"
SERVER_FILE_PREFIX="coapserver"
SERVER_KEYSTORE_DIR="/etc/thingsboard/conf"

CLIENT_KEYSTORE_PASSWORD=password
CLIENT_KEY_PASSWORD=password

CLIENT_KEY_ALIAS="clientalias"
CLIENT_FILE_PREFIX="coapclient"
CLIENT_KEY_ALG="EC"
CLIENT_KEY_GROUP_NAME="secp256r1"
```

#### Run Client keygen script

Download and launch the [**client.keygen.sh**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/client.keygen.sh) script.

```bash
chmod +x client.keygen.sh
./client.keygen.sh
```

The script outputs the following files:

 - **CLIENT_FILE_PREFIX.jks** - Java Keystore file with the server certificate imported
 - **CLIENT_FILE_PREFIX.nopass.pem** - Client certificate file in PEM format to be used by non-java client 
 - **CLIENT_FILE_PREFIX.pub.pem** - Client public key

#### Provision Client Public Key as Device Credentials

Go to **ThingsBoard Web UI -> Devices -> Your Device -> Device Credentials**. Select **X.509 Certificate** device credentials, insert the contents of  **CLIENT_FILE_PREFIX.pub.pem** file and click save.
Alternatively, the same can be done through the REST API.

### Run DTLS X.509 Certificate CoAP Client

{% include templates/coap-dtls/coap-client-dtls.md %}

Finally, run the example script below to validate DTLS with X.509 Certificate auth and subscribe for shared attributes updates:

```bash
coap-client-openssl -v 9 -c $CERTIFICATE  -j $KEY_FILE -m get coaps://thingsboard.cloud/api/v1/attributes -B $BREAK_OPERATION_TIMEOUT -s $OBSERVE_TIMEOUT
```
{: .copy-code}

where, 

- $CERTIFICATE - certificate PEM file, e.g: client.pub.pem.
- &KEY_FILE - key PEM file, e.g: client.pk8.pem. 
- $BREAK_OPERATION_TIMEOUT - Break operation after waiting given seconds(default is 90)
- $OBSERVE_TIMEOUT - Subscribe to / Observe resource for given duration in seconds

If everything was configured correctly, the output should be like:

```bash
TODO: PUT EXAMPLE OUTPUT HERE
```