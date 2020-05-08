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

Locate your **thingsboard.yml** file and set the MQTT_ENABLED value equals true.

```bash
#Local MQTT transport parameters
  mqtt:
    # Enable/disable mqtt transport protocol.
    enabled: "${MQTT_ENABLED:true}"
    bind_address: "${MQTT_BIND_ADDRESS:0.0.0.0}"
    bind_port: "${MQTT_BIND_PORT:8883}"
    timeout: "${MQTT_TIMEOUT:10000}"
    netty:
      leak_detector_level: "${NETTY_LEAK_DETECTOR_LVL:DISABLED}"
      boss_group_thread_count: "${NETTY_BOSS_GROUP_THREADS:1}"
      worker_group_thread_count: "${NETTY_WORKER_GROUP_THREADS:12}"
      max_payload_size: "${NETTY_MAX_PAYLOAD_SIZE:65536}"
      so_keep_alive: "${NETTY_SO_KEEPALIVE:false}"
    # MQTT SSL configuration
    ssl:
      # Enable/disable SSL support
      enabled: "${MQTT_SSL_ENABLED:true}"
      # SSL protocol: See http://docs.oracle.com/javase/8/docs/technotes/guides/security$
      protocol: "${MQTT_SSL_PROTOCOL:TLSv1.2}"
      # Path to the key store that holds the SSL certificate
      key_store: "${MQTT_SSL_KEY_STORE:mqttserver.jks}"
      # Password used to access the key store
      key_store_password: "${MQTT_SSL_KEY_STORE_PASSWORD:server_ks_password}"
      # Password used to access the key
      key_password: "${MQTT_SSL_KEY_PASSWORD:server_key_password}"
      # Type of the key store
      key_store_type: "${MQTT_SSL_KEY_STORE_TYPE:JKS}"
```

You may also want to change **mqtt.bind_port** to 8883 which is recommended for MQTT over SSL servers.

The **key_store** Property must point to the **.jks** file location. **key_store_password** and **key_password** must be the same as were used in keystore generation.

**NOTE:** ThingsBoard supports **.p12** keystores as well. if this is the case, set **key_store_type** value to **'PKCS12'**

After these values are set, launch or restart your thingsboard server.

## Client Examples

See following resources:

 - [Device Authentication options](/docs/user-guide/device-credentials/) for authentication options overview
 - [Access Token based authentication](/docs/user-guide/access-token/) for example of **one-way SSL** connection 
 - [X.509 Certificate based authentication](/docs/user-guide/certificates/) for example of **two-way SSL** connection
