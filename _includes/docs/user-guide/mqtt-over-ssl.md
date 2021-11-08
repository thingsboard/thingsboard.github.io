* TOC
{:toc}

ThingsBoard provides the ability to run MQTT server over SSL. Both one-way and two-way SSL are supported.
To enable SSL, you will need to obtain a valid or generate a self-signed SSL certificate.
Once added, you will need to specify the SSL credentials information in **thingsboard.yml** file.
See the instructions on how to generate SSL certificate and use it in your ThingsBoard installation below.
You can skip certificate generation step if you already have a certificate.

### Self-signed certificate generation

#### PEM certificate file

**Note** This step requires Linux based OS with openssl installed.

To generate server self-signed PEM certificate and private key, use the following command:

```bash
openssl req -x509 -newkey rsa:4096 -keyout mqttserver_key.pem -out mqttserver.pem -sha256 -days 365
```
{: .copy-code}

You can also add -nodes (short for no DES) if you don't want to protect your private key with a passphrase. Otherwise, it will prompt you for "at least a 4 character" password.

The **days** parameter (365) you can replace with any number to affect the expiration date. It will then prompt you for things like "Country Name", but you can just hit Enter and accept the defaults.

Add -subj '/CN=localhost' to suppress questions about the contents of the certificate (replace localhost with your desired domain).

Self-signed certificates are not validated with any third party unless you import them to the browsers previously. If you need more security, you should use a certificate signed by a certificate authority (CA).

Next configure MQTT server to [enable SSL](#server-configuration) and use newly generated [PEM certificate](#pem-certificate-file-1). 

#### Java keystore

**Note** This step requires Linux based OS with Java installed.

Download [**server.keygen.sh**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/server.keygen.sh) from the official ThingsBoard repository to your working directory.

Download [**keygen.properties**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/keygen.properties) file to your working directory and populate it with desired values. 
For example:

```bash
DOMAIN_SUFFIX="$(hostname)"
SUBJECT_ALTERNATIVE_NAMES="ip:127.0.0.1"
ORGANIZATIONAL_UNIT=ThingsBoard
ORGANIZATION=ThingsBoard
CITY="San Francisco"
STATE_OR_PROVINCE=CA
TWO_LETTER_COUNTRY_CODE=US

SERVER_KEYSTORE_PASSWORD=server_ks_password
SERVER_KEY_PASSWORD=server_key_password

SERVER_KEY_ALIAS="serveralias"
SERVER_FILE_PREFIX="mqttserver"
SERVER_KEYSTORE_DIR="/etc/thingsboard/conf/"
SERVER_KEY_ALG="RSA"
SERVER_KEY_SIZE="2048"

CLIENT_KEYSTORE_PASSWORD=password
CLIENT_KEY_PASSWORD=password

CLIENT_TRUSTSTORE="client_truststore"
CLIENT_KEY_ALIAS="clientalias"
CLIENT_FILE_PREFIX="mqttclient"
CLIENT_KEY_ALG="RSA"
CLIENT_KEY_SIZE="2048"
```

where 

 - **DOMAIN_SUFFIX** - Corresponds to **CN** value of the certificate. Must correspond to the target server domain (wildcards are allowed). Defaults to the current hostname 
 - **ORGANIZATIONAL_UNIT** - Corresponds to **OU** value of the certificate.
 - **ORGANIZATION** - Corresponds to **O** value of the certificate.
 - **CITY** - Corresponds to **L** value of the certificate.
 - **STATE_OR_PROVINCE** - Corresponds to **ST** value of the certificate.
 - **TWO_LETTER_COUNTRY_CODE** - Corresponds to **C** value of the certificate.
 - **SERVER_KEYSTORE_PASSWORD** - Server Keystore password
 - **SERVER_KEY_PASSWORD** - Server Key password. May or may not be the same as SERVER_KEYSTORE_PASSWORD
 - **SERVER_KEY_ALIAS** - Server key alias. Must be unique within the keystore
 - **SERVER_FILE_PREFIX** - Prefix to all server keygen-related output files
 - **SERVER_KEYSTORE_DIR** - The default location where the key would be optionally copied. Can be overriden by -d option in **server.keygen.sh** script or entered manually upon the scrip run

The rest of the values are not important for the server keystore generation 

To run the server keystore generation, use following commands.
 
```bash
chmod +x server.keygen.sh
sudo ./server.keygen.sh
```

You may run this script with no arguments, or alternatively, you can specify the following optional arguments:

 - **-c \| --copy** - Specifies if the keystore should be copied to the server directory. Defaults to **true**
 - **-d \| --dir** - Server keystore directory, where the generated **SERVER_FILE_PREFIX**.jks keystore file will be copied. If specified, overrides the value from the properties file
 - **-p \| --props \| --properties** - Specifies the relative path to the properties file. Defaults to **./keygen.properties**

This script will run keytool using the configuration specified. It will generate the following output files:

 - **SERVER_FILE_PREFIX.jks** - Java keystore file. This is the file which will be used by ThingsBoard MQTT Service
 - **SERVER_FILE_PREFIX.cer** - Server public key file. It will be then imported to client's .jks keystore file.
 - **SERVER_FILE_PREFIX.pub.pem** - Server public key in **PEM** format, which can be then used as a keystore or imported by non-Java clients.   

If you specified not to copy the keystore file, then upload it manually to a directory which is in server's classpath.
You may want to modify owner and permissions for the keystore file:

```bash
sudo chmod 400 /etc/thingsboard/conf/mqttserver.jks
sudo chown thingsboard:thingsboard /etc/thingsboard/conf/mqttserver.jks
```

Next configure MQTT server to [enable SSL](#server-configuration) and use newly generated [Keystore](#java-keystore-1).

### Server configuration

Locate your **thingsboard.conf** file and set the MQTT_SSL_ENABLED value equals true.

You can add the next row for to the **thingsboard.conf**, so that the MQTT over SSL will be enabled.  
```bash 
...
export MQTT_SSL_ENABLED=true

```

You may also want to change **mqtt.ssl.bind_port** to 8883 which is recommended for MQTT over SSL servers.

The MQTT bind port can be changed with the next row within the **thingsboard.conf** being added:

```bash
...
export MQTT_SSL_BIND_PORT=8883

```

Further SSL configuration depends on certificate storage format: either [PEM certificate file](#pem-certificate-file-1) or [Java keystore](#java-keystore-1).

#### PEM certificate file

In the **thingsboard.conf** file set the MQTT_SSL_CREDENTIALS_TYPE value equals to PEM.

```bash 
...
export MQTT_SSL_CREDENTIALS_TYPE=PEM

```

Set the MQTT_SSL_PEM_CERT value to point your PEM server certificate file (for ex. mqttserver.pem):

```bash 
...
export MQTT_SSL_PEM_CERT=mqttserver.pem

```

**Please note:** If your PEM server certificate file already includes a private key, you can skip the next step.

Set the MQTT_SSL_PEM_KEY value to point your PEM server key file (for ex. mqttserver_key.pem):

```bash 
...
export MQTT_SSL_PEM_KEY=mqttserver_key.pem

```

Finally, if your server private key requires password, set the MQTT_SSL_PEM_KEY_PASSWORD value:

```bash 
...
export MQTT_SSL_PEM_KEY_PASSWORD=server_key_password

```

The final configuration might look like this:

**thingsboard.conf:**
```bash
...
export MQTT_SSL_ENABLED=true
export MQTT_SSL_BIND_PORT=8883
export MQTT_SSL_CREDENTIALS_TYPE=PEM
export MQTT_SSL_PEM_CERT=mqttserver.pem
export MQTT_SSL_PEM_KEY=mqttserver_key.pem
export MQTT_SSL_PEM_KEY_PASSWORD=server_key_password
...
``` 

After these values are set, launch or restart your ThingsBoard server.

#### Java keystore

In the **thingsboard.conf** file set the MQTT_SSL_CREDENTIALS_TYPE value equals to KEYSTORE.

```bash 
...
export MQTT_SSL_CREDENTIALS_TYPE=KEYSTORE

```

The **MQTT_SSL_KEY_STORE** variable must point to the **.jks** file location. **MQTT_SSL_KEY_STORE_PASSWORD** and **MQTT_SSL_KEY_PASSWORD** must be the same as were used in keystore generation.

**NOTE:** ThingsBoard supports **.p12** keystores as well. if this is the case, set **MQTT_SSL_KEY_STORE_TYPE** value to **'PKCS12'**

The next combination of the **keygen.properties** example was used to generate a proper .jks and .pem in a case of the ThingsBoard uses the next default **thingsboard.conf** with the enchantments being specified below.   
This example is based on the default ThingsBoard installation. 

**thingsboard.conf:**
```bash
...
export MQTT_SSL_ENABLED=true
export MQTT_SSL_BIND_PORT=8883
export MQTT_SSL_CREDENTIALS_TYPE=KEYSTORE
export MQTT_SSL_KEY_STORE=mqttserver.jks
export MQTT_SSL_KEY_STORE_PASSWORD=server_ks_password
export MQTT_SSL_KEY_PASSWORD=server_key_password
...
``` 

**keygen.properties:** 
```bash
DOMAIN_SUFFIX=localhost
ORGANIZATIONAL_UNIT=Thingsboard
ORGANIZATION=Thingsboard
CITY=SF
STATE_OR_PROVINCE=CA
TWO_LETTER_COUNTRY_CODE=US

SERVER_KEYSTORE_PASSWORD=server_ks_password
SERVER_KEY_PASSWORD=server_key_password

SERVER_KEY_ALIAS="serveralias"
SERVER_FILE_PREFIX="mqttserver"
SERVER_KEYSTORE_DIR="/etc/thingsboard/conf"

CLIENT_KEYSTORE_PASSWORD=password
CLIENT_KEY_PASSWORD=password

CLIENT_KEY_ALIAS="clientalias"
CLIENT_FILE_PREFIX="mqttclient"
```

After completing the setup, start or restart the ThingsBoard server.

## Client Examples

See following resources:

 - [Device Authentication options](/docs/{{docsPrefix}}user-guide/device-credentials/) for authentication options overview
 - [Access Token based authentication](/docs/{{docsPrefix}}user-guide/access-token/) for example of **one-way SSL** connection 
 - [X.509 Certificate based authentication](/docs/{{docsPrefix}}user-guide/certificates/) for example of **two-way SSL** connection
