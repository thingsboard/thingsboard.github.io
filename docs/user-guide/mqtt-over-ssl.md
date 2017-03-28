---
layout: docwithnav
assignees:
- vsosliuk
title: MQTT over SSL
description: Launching Thingsboard with secure MQTT protocol to connect your IoT devices and projects.

---

* TOC
{:toc}

Thingsboard provides ability to run MQTT server over SSL. Both one-way and two-way SSL are supported.
To enable SSL, you will need to obtain valid or generate self-signed SSL certificate and add it to keystore.
Once added, you will need to specify keystore information in **thingsboard.yml** file.
See instructions below how to generate SSL certificate and use it in your Thingsboard installation.
You can skip certificate generation step if you already have certificate.

### Self-signed certificate generation

**Note** This step requires Linux based OS with Java installed.

Download [**server.keygen.sh**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/server.keygen.sh) from official Thingsboard repository to your working directory.

Download [**keygen.properties**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/tools/src/main/shell/keygen.properties) file to your working directory and populate it with desired values. 
For example:

```bash
DOMAIN_SUFFIX="$(hostname)"
ORGANIZATIONAL_UNIT=Thingsboard
ORGANIZATION=Thingsboard
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

The rest of the values are not important for server keystore generation 

To run server keystore generation, use following commands.
 
```bash
chmod +x server.keygen.sh
sudo ./server.keygen.sh
```

You may run this script with no arguments, or alternatively, you can specify the following optional arguments:

 - **-c \| --copy** - Specifies if the keystore should be copied to the server directory. Defaults to **true**
 - **-d \| --dir** - Server keystore directory, where the generated **SERVER_FILE_PREFIX**.jks keystore file will be copied. If specified, overrides the value from the properties file
 - **-p \| --props \| --properties** - Specifies the relative path to the properties file. Defaults to **./keygen.properties**

This script will run keytool using the configuration specified. It will generate the following output files:

 - **SERVER_FILE_PREFIX.jks** - Java keystore file. This is the file which will be used by Thingsboard MQTT Service
 - **SERVER_FILE_PREFIX.cer** - Server public key file. It will be then imported to client's .jks keystore file.
 - **SERVER_FILE_PREFIX.pub.pem** - Server public key in **PEM** format, which can be then used as a keystore or imported by non-Java clients.   

If you specified not to copy the keystore file, then upload it manually to a directory which is in server's classpath.
You may want to modify owner and permissions for the keystore file:

```bash
sudo chmod 400 /etc/thingsboard/conf/mqttserver.jks
sudo chown thingsboard:thingsboard /etc/thingsboard/conf/mqttserver.jks
```

### Server configuration

Locate your **thingsboard.yml** file and uncomment the lines after "*# Uncomment the following lines to enable ssl for MQTT*":

```bash
# MQTT server parameters
mqtt:
  bind_address: "${MQTT_BIND_ADDRESS:0.0.0.0}"
  bind_port: "${MQTT_BIND_PORT:8883}"
  adaptor: "${MQTT_ADAPTOR_NAME:JsonMqttAdaptor}"
  timeout: "${MQTT_TIMEOUT:10000}"
# Uncomment the following lines to enable ssl for MQTT
  ssl:
    key_store: mqttserver.jks
    key_store_password: server_ks_password
    key_password: server_key_password
    key_store_type: JKS
```

You may also want to change **mqtt.bind_port** to 8883 which is recommended for MQTT over SSL servers.

The **key_store** Property must point to the **.jks** file location. **key_store_password** and **key_password** must be the same as were used in keystore generation.

**NOTE:** Thingsboard supports **.p12** keystores as well. if this is the case, set **key_store_type** value to **'PKCS12'**

After these values are set, launch or restart your thingsboard server.

## Client Examples

See following resources:

 - [Device Authentication options](/docs/user-guide/device-credentials/) for authentication options overview
 - [Access Token based authentication](/docs/user-guide/access-token/) for example of **one-way SSL** connection 
 - [X.509 Certificate based authentication](/docs/user-guide/certificates/) for example of **two-way SSL** connection
