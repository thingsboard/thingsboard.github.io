You can configure additional settings like: TLS connection, polling time, byte order and word order, and other. The table below describes the parameters for this purpose:

| **Parameter**                       | **Default value**  | **Description**                                                               |
|:------------------------------------|:-------------------|-------------------------------------------------------------------------------
| Connection timeout (s)              | **35**             | Timeout in seconds for connecting to Modbus server                            |
| Byte order                          | **LITTLE**         | Order of bytes to read                                                        |
| Word order                          | **LITTLE**         | The order of words when reading several registers                             |
| Retries                             | **true**           | Retrying sending data to the master. The values can be either: true or false  |
| Retries on empty                    | **true**           | Retrying sending data to the master if it is empty                            |
| Retries on invalid                  | **true**           | Retrying sending data to the master if it is failed                           |
| Poll period (ms)                    | **5000**           | Period in milliseconds to check the attributes and the telemetry on the slave |
| Connect attempt time (ms)           | **5000**           | A waiting period in milliseconds before connecting to the master              |
| Connect attempt count               | **5**              | The number of connection attempts made through the ThingsBoard gateway        |
| Wait after failed attempts (ms)     | **300000**         | A waiting period in milliseconds before trying to send data to the master     |
| ---                                 

{% assign advancedConnectionSettings = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-1-ce.png,
        title: Click on the "**Advanced connection settings**" subsection to open it;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-2-ce.png,
        title: Make the necessary settings.
'
%}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=advancedConnectionSettings %}

Also, you can configure TLS connection (can be used only for TCP/UDP connection type). The table below describes the parameters required to configure TLS connection:

| **Parameter**                   | **Description**                                             |
|:--------------------------------|:------------------------------------------------------------
| Path to client certificate file | Path to certificate file in filesystem with gateway         |
| Path to private key file        | Path to private key file                                    | 
| Password                        | Server password                                             |
| Server hostname                 | Server hostname (Should match with hostname in certificate) |
| ---                             

![image](https://img.thingsboard.io/gateway/modbus-connector/tls-connection.png)
