---
layout: docwithnav
assignees:
- vsosliuk
title: MQTT over SSL
description: Launching ThingsBoard with secure MQTT protocol to connect your IoT devices and projects.

---

* TOC
{:toc}

ThingsBoard provides the ability to run MQTT server over SSL. Both one-way and two-way SSL are supported.
To enable SSL, you will need to obtain a valid or generate a self-signed SSL certificate and add it to the keystore.
Once added, you will need to specify the keystore information in **thingsboard.yml** file.
See the instructions on how to generate SSL certificate and use it in your ThingsBoard installation below.
You can skip certificate generation step if you already have a certificate.

### Self-signed certificate generation

**Note** This step requires Linux based OS with Java installed.

Download [**server.keygen.sh**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/server.keygen.sh) from the official ThingsBoard repository to your working directory.

Download [**keygen.properties**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/keygen.properties) file to your working directory and populate it with desired values. 
For example:

```bash
DOMAIN_SUFFIX="$(hostname)"
ORGANIZATIONAL_UNIT=ThingsBoard
ORGANIZATION=ThingsBoard
CITY=San Francisco
STATE_OR_PROVINCE=CA
TWO_LETTER_COUNTRY_CODE=US

SERVER_KEYSTORE_PASSWORD=server_ks_password
SERVER_KEY_PASSWORD=server_key_password

SERVER_KEY_ALIAS="serveralias"
SERVER_FILE_PREFIX="mqttserver"
SERVER_KEYSTORE_DIR="/etc/thingsboard/conf/"

CLIENT_KEYSTORE_PASSWORD=password
CLIENT_KEY_PASSWORD=password

CLIENT_TRUSTSTORE="client_truststore"
CLIENT_KEY_ALIAS="clientalias"
CLIENT_FILE_PREFIX="mqttclient"
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

### Server configuration

Locate your **thingsboard.conf** file and set the MQTT_SSL_ENABLED value equals  true.

You can add the next row for to the **thingsboard.conf**, so that the MQTT over SSL will be enabled.  
```bash 
...
export MQTT_SSL_ENABLED=true

```

You may also want to change **mqtt.bind_port** to 8883 which is recommended for MQTT over SSL servers.

The MQTT bind port can be changed with the next row within the **thingsboard.conf** being added:

```bash
...
export MQTT_BIND_PORT=8883

```

The **key_store** Property must point to the **.jks** file location. **key_store_password** and **key_password** must be the same as were used in keystore generation.

**NOTE:** ThingsBoard supports **.p12** keystores as well. if this is the case, set **key_store_type** value to **'PKCS12'**

After these values are set, launch or restart your ThingsBoard server.

### Example of configuration 
The next combination of the **keygen.properties** example was used to generate a proper .jks and .pem in a case of the ThingsBoard uses the next default **thingsboard.conf** with the enchantments being specified below.   
This example is based on the default ThingsBoard installation of the **2.5 version**. 


**thingsboard.conf:**
```bash
...
export MQTT_SSL_ENABLED=true
export MQTT_BIND_PORT=8883
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


## Client Examples

See following resources:

 - [Device Authentication options](/docs/user-guide/device-credentials/) for authentication options overview
 - [Access Token based authentication](/docs/user-guide/access-token/) for example of **one-way SSL** connection 
 - [X.509 Certificate based authentication](/docs/user-guide/certificates/) for example of **two-way SSL** connection
