---
layout: docwithnav
assignees:
- vsosliuk
title: MQTT Security Configuration

---

* TOC
{:toc}

Thingsboard provides ability to run MQTT over SSL. Both one-way and two-way SSL are supported

## Enabling MQTT SSL

### Generate server key

If you haven't already, generate server keystore.
In the source code dir, navigate to **./tools/src/main/shell/**, find the **keygen.properties** file, and populate it with the desired values:

{% capture tabspec %}mqtt-ssl-configuration-thingsboard
A,keygen.properties,shell,resources/mqtt-ssl-configuration-keygen.properties,/docs/user-guide/mqtt-ssl-configuration-keygen.properties{% endcapture %}
{% include tabs.html %}

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

To run server keystore generation, launch **./server.keygen.sh** script. 

You may run this script with no arguments, or alternatively, you can specify the followith optional arguments:

 - **-c \| --copy** - Specifies if the keystore should be copied to the server directory. Defaults to **true**
 - **-d \| --dir** - Server keystore directory, where the generated **SERVER_FILE_PREFIX**.jks keystore file will be copied. If specified, overrides the value from the properties file
 - **-p \| --props \| --properties** - Specifies the relative path to the properties file. Defaults to **./keygen.properties**

This script will run keytool using the configuration specified. It will generate the following output files:

 - **SERVER_FILE_PREFIX.jks** - Java keystore file. This is the file which will be used by Thingsboard MQTT Service
 - **SERVER_FILE_PREFIX.cer** - Server public key file. It will be then imported to client's .jks keystore file.
 - **SERVER_FILE_PREFIX.pub.pem** - Server public key in **PEM** format, which can be then used as a keystore or imported by non-Java clients.   

If you specified not to copy the keystore file, then upload it manually to a directory which is in server's classpath.

### Configure Server MQTT SSL

Locate your **thingsboard.yml** file and uncomment the lines after **# Uncomment the following lines to enable ssl for MQTT**:


{% capture tabspec %}mqtt-ssl-configuration-thingsboard
A,thingsboard.yml,shell,resources/mqtt-ssl-configuration-thingsboard.yml,/docs/user-guide/mqtt-ssl-configuration-thingsboard.yml{% endcapture %}
{% include tabs.html %}


The **key_store** Property must point to the **.jks** file location. **key_store_password** and **key_password** must be the same as were used in keystore generation.

**NOTE:** Thingsboard supports **.p12** keystores as well. if this is the case, set **key_store_type** value to **'PKCS12'**

After these values are set, launch or restart your thingsboard server.

## MQTT SSL Client. 

### Authentication types

Thingsboard supports two types of authentication: Access Token Based and X.509 Certificate based. Access Token Based authentication is used in unsecure andone-way SSL mode. 
X.509 Certificate based is used in two-way SSL mode.

### Access Token Based Authentication

Access Token Based Authentication is the default device authentication type. Once the device is created in thingsboard, the default ACCESS_TOKEN is generated. It can be changed afterwards.
In order to connect the device to a server using Access Token Based Authentication, the client must specify the ACCESS_TOKEN as MQTT username.
 
In order to run one-way MQTT SSL, the client must import the server certificate (.cer or .pem) to it's trust store. Otherwise connection will fail with the 'Unknown CA' error, unless the certificate is signed by an authorised CA and client knows about it.

#### Run One-Way MQTT SSL Python Client
**./tools/src/main/shell/** directory contains **onewaysslmqttclient.py** Python client, which uses **SERVER_FILE_PREFIX.pub.pem**  certificate and Access Token Based authentication:  

{% capture tabspec %}mqtt-ssl-configuration-keygen-python
A,onewaysslmqttclient.py,shell,resources/mqtt-ssl-configuration-onewaysslmqttclient.py,/docs/user-guide/mqtt-ssl-configuration-onewaysslmqttclient.py{% endcapture %}
{% include tabs.html %}
 
Run the script:

{% capture tabspec %}mqtt-ssl-configuration-keygen
A,python onewaysslmqttclient.py,shell,resources/mqtt-ssl-configuration-run-onewaysslmqttclient.sh,/docs/user-guide/mqtt-ssl-configuration-run-onewaysslmqttclient.sh{% endcapture %}
{% include tabs.html %}         

If everything was configured correctly, the output should be like:

{% capture tabspec %}mqtt-ssl-configuration-output
A,onewaysslmqttclient.py output,shell,resources/mqtt-ssl-configuration-onewaysslmqttclient-output.txt,/docs/user-guide/mqtt-ssl-configuration-onewaysslmqttclient-output.txt{% endcapture %}
{% include tabs.html %}

### X.509 Certificate Based Authentication

X.509 Certificate Based Authentication is used in Two-Way SSL connection. In this case, the certificate itself is the client's  ID, thus, Access Token is no longer needed.

#### Update the keygen.properties file
 
Open the keygen.properties file, and update the values if needed:

{% capture tabspec %}mqtt-ssl-configuration-thingsboard-keygen-client
A,keygen.properties,shell,resources/mqtt-ssl-configuration-keygen.client.properties,/docs/user-guide/mqtt-ssl-configuration-keygen.client.properties{% endcapture %}
{% include tabs.html %}

#### Run Client keygen script

Launch the client keygen script:

{% capture tabspec %}mqtt-ssl-configuration-securemqttclient-keygen
A,keygen.properties,shell,resources/mqtt-ssl-configuration-securemqttclient.keygen.sh,/docs/user-guide/mqtt-ssl-configuration-securemqttclient.keygen.sh{% endcapture %}
{% include tabs.html %}

The script outputs the following files:

 - **CLIENT_FILE_PREFIX.jks** - Java Keystore file with server certificate imported
 - **CLIENT_FILE_PREFIX.nopass.pem** - The client certificate file in PEM format to be used by non-java client 
 - **CLIENT_FILE_PREFIX.pub.pem** - Client public key

#### Save Client Public Key in Device Credentials

Go to thingsboard GUI, click on Device Credentials, Select X.509 Certificate device credentials, insert the contents of  **CLIENT_FILE_PREFIX.pub.pem**  and click save.
Alternatively, the same can be done through the REST API.

#### Run Two-Way MQTT SSL Python Client
 **./tools/src/main/shell/** directory contains **twowaysslmqttclient.py** Python client, which uses **SERVER_FILE_PREFIX.pub.pem**  certificate and X.509 client certificate from **mqttclient.nopass.pem**   
 
{% capture tabspec %}mqtt-ssl-configuration-twoway-python
A,twowaysslmqttclient.py,shell,resources/mqtt-ssl-configuration-twowaysslmqttclient.py,/docs/user-guide/mqtt-ssl-configuration-twowaysslmqttclient.py{% endcapture %}
{% include tabs.html %}

Run the script:

{% capture tabspec %}mqtt-ssl-configuration-twoway
A,python twowaysslmqttclient.py,shell,resources/mqtt-ssl-configuration-run-twowaysslmqttclient.sh,/docs/user-guide/mqtt-ssl-configuration-run-twowaysslmqttclient.sh{% endcapture %}
{% include tabs.html %}  

If everything was configured correctly, the output should be like:

{% capture tabspec %}mqtt-ssl-configuration-output-twoway
A,twowaysslmqttclient.py output,shell,resources/mqtt-ssl-configuration-twowaysslmqttclient-output.txt,/docs/user-guide/mqtt-ssl-configuration-twowaysslmqttclient-output.txt{% endcapture %}
{% include tabs.html %}

To run Java client, import **CLIENT_FILE_PREFIX.jks** file as follows:

{% capture tabspec %}mqtt-ssl-java-twoway-client
A,MqttSslClient.java,shell,resources/MqttSslClient.java,/docs/user-guide/SMqttSslClient.java{% endcapture %}
{% include tabs.html %}