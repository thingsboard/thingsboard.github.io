### Self-signed certificates generation

Use instructions below to generate your own certificate files. Useful for tests, but time consuming and not recommended for production.

#### PEM certificate file

**Note** This step requires Linux based OS with openssl installed.

To generate a server self-signed PEM certificate and private key, use the following command:

```bash
openssl ecparam -out server_key.pem -name secp256r1 -genkey
openssl req -new -key server_key.pem -x509 -nodes -days 365 -out server.pem 
```
{: .copy-code}

You can also add -nodes (short for no DES) if you don't want to protect your private key with a passphrase. Otherwise, it will prompt you for "at least a 4 character" password.

The **days** parameter (365) you can replace with any number to affect the expiration date. It will then prompt you for things like "Country Name", but you can just hit Enter and accept the defaults.

Add -subj '/CN=localhost' to suppress questions about the contents of the certificate (replace localhost with your desired domain).

Self-signed certificates are not validated with any third party unless you import them to the browsers previously. If you need more security, you should use a certificate signed by a certificate authority (CA).

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

SERVER_KEYSTORE_PASSWORD=password
SERVER_KEY_PASSWORD=password

SERVER_KEY_ALIAS="serveralias"
SERVER_FILE_PREFIX="server"
SERVER_KEY_ALG="EC"
SERVER_KEY_GROUP_NAME="secp256r1"
SERVER_KEYSTORE_DIR="/etc/thingsboard/conf"

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
