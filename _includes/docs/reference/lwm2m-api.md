* TOC
{:toc}

## LWM2M basics: architecture, terminology,  definitions.
[LWM2M](https://en.wikipedia.org/wiki/OMA_LWM2M) is a device management protocol designed for sensor networks and the demands of a machine-to-machine (M2M) environment.
For simplicity, we will manually provision the device using the UI.
* about LWM2M [here](https://omaspecworks.org/what-is-oma-specworks/iot/lightweight-m2m-LWM2M/).

**The network architecture** used by the LWM2M protocol operates on a client-server basis and includes **three elements**: the LWM2M **server**, the LWM2M **bootstrap/download server**, and the LWM2M **client**, as shown in the next figure.

    {% include images-gallery.html imageCollection="started" showListImageTitles="true" %} 

<a name="link-lwm2m-resource-model-main"> </a><br><br>

**You can find more information:**
* [`LWM2M Resource Model`](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#7-1-0-71-Resource-Model).
    * [`LwM2M Object and Resource Registry`](http://openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html).
    * `LWM2M Resource Model files default` (format: xml; from: <font color="blue">/org/eclipse/leshan/leshan-core/.../leshan-core-....jar!/models/</font>):
        * [ObjectID:  <b>0</b>; Name: LWM2M Security](http://openmobilealliance.org/release/ObjLwM2M_Security/V1_2-20201110-A/OMA-SUP-XML_0-V1_2-20201110-A.xml).
        * [ObjectID:  <b>1</b>; Name: LwM2M Server](http://openmobilealliance.org/release/ObjLwM2M_Server/V1_2-20201110-A/OMA-SUP-XML_1-V1_2-20201110-A.xml).
        * [ObjectID:  <b>2</b>; Name: LwM2M Access Control](http://openmobilealliance.org/release/ObjLwM2M_ACL/V1_1-20201110-A/OMA-SUP-XML_2-V1_1-20201110-A.xml).
        * [ObjectID:  <b>3</b>; Name: Device](http://openmobilealliance.org/release/ObjLwM2M_Device/V1_2-20201110-A/OMA-SUP-XML_3-V1_2-20201110-A.xml).
        * [ObjectID:  <b>4</b>; Name: Connectivity Monitoring](http://openmobilealliance.org/release/ObjLwM2M_Conn_Mon/V1_3-20201110-A/OMA-SUP-XML_4-V1_3-20201110-A.xml).
        * [ObjectID:  <b>5</b>; Name: Firmware Update](http://openmobilealliance.org/release/ObjLwM2M_Firmware/V1_1-20201110-A/OMA-SUP-XML_5-V1_1-20201110-A.xml).
        * [ObjectID:  <b>6</b>; Name: Location](http://openmobilealliance.org/release/ObjLwM2M_Location/V1_0_3-20201110-A/OMA-SUP-XML_6-V1_0-20201110-A.xml).
        * [ObjectID:  <b>7</b>; Name: Connectivity Statistics](http://openmobilealliance.org/release/ObjLwM2M_Conn_Stat/V1_0_5-20201110-A/OMA-SUP-XML_7-V1_0-20201110-A.xml).
          <a name="link-lwm2m-resource-model-ather"> </a><br><br>
    * `LWM2M Resource Model files ather` (format: xml; example):
        * [ObjectID: <b>21</b>; Name: LwM2M COSE](http://openmobilealliance.org/release/ObjLwM2M_OSCORE/V1_1-20201110-A/OMA-SUP-XML_21-V1_1-20201110-A.xml).
        * [ObjectID: <b>23</b>; Name: LwM2M COSE](http://openmobilealliance.org/release/ObjLwM2M_COSE/V1_0-20201110-A/OMA-SUP-XML_23-V1_0-20201110-A.xml).
        * [ObjectID: <b>24</b>; Name: MQTT Server](http://openmobilealliance.org/release/ObjLwM2M_MQTT_Server/V1_0-20201110-A/OMA-SUP-XML_24-V1_0-20201110-A.xml).
        * [ObjectID: <b>25</b>; Name: LwM2M Gateway](http://openmobilealliance.org/release/ObjLwM2M_Gateway/V1_0-20201110-A/OMA-SUP-XML_25-V1_0-20201110-A.xml).
        * [ObjectID: <b>26</b>; Name: LwM2M Gateway Routing](http://openmobilealliance.org/release/ObjLwM2M_Routing/V1_0-20201110-A/OMA-SUP-XML_26-V1_0-20201110-A.xml).
        * [ObjectID: <b>27</b>; Name: 5GNR Connectivity](http://openmobilealliance.org/release/ObjLwM2M_5GNR_Conn/V1_0-20201110-A/OMA-SUP-XML_27-V1_0-20201110-A.xml).
* about `LWM2M interface` [here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#6-0-6-Interfaces).
* about `LWM2M relationship between operations and interfaces` [here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#Table-6-1-Relationship-of-operations-and-interfaces).
* about `LWM2M Device Management and Service Enablement Interface` [here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#6-3-0-63-Device-Management-and-Service-Enablement-Interface).
    * about `Device Management` (Read, Write, Create, Delete, Execute... operations)[here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#10-1-5-0-B15-Device-Management-and-Service-Enablement-Interface).
    * about `Information Reporting` (Observe, Notify, Cancel Observation...  operations)  [here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#10-1-5-0-B15-Device-Management-and-Service-Enablement-Interface).
    * about `LwM2M Object: Firmware Update`[here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#13-6-0-E6-LwM2M-Object-Firmware-Update).
* about `LWM2M Technical Specification Transport Bindings` (v1.2) [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf).
* about `LWM2M binding mode` [here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#6-2-1-2-0-6212-Behaviour-with-Current-Transport-Binding-and-Modes)
* about `CoAP Transport Bindings` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=62).
* about `binding mode`: whether the device is always connected or not, whether it uses UDP: example [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=44)
  and [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=63).

```ruby
    The URIs indicate the way how messages are transported (which is mapped to the binding modes).
    - U (UDP)
    - T (TCP)
    - S (SMS)
    - N (Non-IP)
    - The LWM2M Server URI encodes the binding mode in the URI scheme.
    coap(s):// -> U
    coap(s)+tcp// -> T
    For S you have a tel URI scheme and for N it depends what non-IP transport you use.
```

* about `LWM2M Security` and Security Requirements [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=18).
* pre-shared keys for secure DTLS ***PSK***  communications:
    ```ruby
        If a LWM2M Server supports the pre-shared key credentials it MUST support the following:
        TLS_PSK_WITH_AES_128_CCM_8, as defined in [RFC6655] and mandated in [RFC7925]
        TLS_PSK_WITH_AES_128_CBC_SHA256, as defined in [RFC5487].
        The LWM2M Client SHOULD NOT use the TLS_PSK_WITH_AES_128_CBC_SHA256 ciphersuite as [RFC7457] has
        identified security attacks against these TLS/DTLS ciphersuites.
    ```
  **TLS_PSK_WITH_AES_128_CCM_8**, as defined in [RFC6655](https://www.ietf.org/rfc/rfc6655.txt).

  **TLS_PSK_WITH_AES_128_CBC_SHA256**, as defined in [RFC5487](https://www.ietf.org/rfc/rfc5487.txt).

  **~~TLS_PSK_WITH_AES_128_CBC_SHA256~~** ciphersuite as [RFC7457](https://www.ietf.org/rfc/rfc7457.txt).

    * about Pre-Shared Keys LWM2M [5.2.9.1. Pre-Shared Keys](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=23).
    * Clients and Servers MUST support arbitrary `PSK Identities` of up to 128 bytes, as mandated in [RFC7925](https://www.ietf.org/rfc/rfc7925.txt).
* raw public keys for secure DTLS ***RPK***  communications:
    ```ruby
        If a LWM2M Server supports the raw public key credentials it MUST support the following:
        TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8, as defined in [RFC6655] and mandated in [RFC7925]
        TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256, as defined in [RFC5289]
        The LWM2M Client SHOULD NOT use the TLS_PSK_WITH_AES_128_CBC_SHA256 ciphersuite as [RFC7457] has
        identified security attacks against these TLS/DTLS ciphersuites.
    ```    

  **TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8**, as defined in [RFC6655](https://www.ietf.org/rfc/rfc6655.txt).

  **TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8**, as defined in [RFC7925](https://www.ietf.org/rfc/rfc7925.txt).

  **TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256**, as defined in [RFC5289](https://www.ietf.org/rfc/rfc5289.txt).

  **~~TLS_PSK_WITH_AES_128_CBC_SHA256~~** ciphersuite as [RFC7457](https://www.ietf.org/rfc/rfc7457.txt).

    * about Raw Public Keys LWM2M [5.2.9.2. Raw Public Keys](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=24).
      <a name="link-x-509-certificate"></a><br><br>
*  X.509 Certificates Keys for secure DTLS ***X.509***  communications:

    ```ruby
        If a LWM2M Server supports X.509 Certificate mode it MUST support:
        TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8, as defined in [RFC7251] and mandated in [RFC7925]
        TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256, as defined in [RFC5289]
        The LWM2M Client SHOULD NOT use the TLS_PSK_WITH_AES_128_CBC_SHA256 ciphersuite as [RFC7457] has
        identified security attacks against these TLS/DTLS ciphersuites.
        A LWM2M v1.1 or v1.2 Client MUST support TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 and MAY support additional
        ciphersuites. Ciphersuites SHOULD have ECDSA authentication and SHOULD have ECDHE key exchange.
    ```
   **TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8**, as defined in [RFC7251](https://www.ietf.org/rfc/rfc7251.txt).

    * about X.509 Certificates Keys LWM2M [5.2.9.3. X.509 Certificates](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=25).


* about the file format and get help on how to generate an X509 certificate and a publicKey or privateKey [here](https://github.com/eclipse/leshan/wiki/Credential-files-format).
* about `LWM2M DTLS-based Security` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=19).
* about `LWM2M Interface:` **Bootstrap Interface**, **Registration Interface**, <i>Device Management & Service Enablement Interface</i>, <i>Information Reporting Interface (**Observe**)</i>,
  <i>Queue Mode Operation</i>, <i>Registration Update Trigger</i>, <i>Bootstrap Trigger</i> [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=41),
* about currently five `Security modes` are defined: [namely](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=21).
* about `Credential Types` LWM2M [5.2.9. Credential Types](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=23).
* about `Endpoint Client Name`
  [here](https://md2html-tool.com/docs/OpenMobileAlliance/Test_LwM2M_v1_1/development/bb80921/TS_Core/OMA-TS-LightweightM2M_Core-V1_1_1-2019MMDD-D_full.html#7-3-1-0-731-Endpoint-Client-Name) and
  [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=22) and
  [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=31) and
  or [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=36).

Example: during the tests used the next `Client's Endpoint Names` (for `PSK security mode`, you must additionally use the `Endpoint Identity Client`):
```json
{
    "NoSec mode": [
        {"Client Endpoint Name": "LwNoSec00000000"},
        {"Client Endpoint Name": "LwNoSec00019999"}
    ],    
    "Pre-Shared Key mode": [
        {"Client Endpoint Name": "LwPSK00000000"},
        {"Endpoint Identity Client": "LwPSK00000000-identity"},
        {"Client Endpoint Name": "LwPSK00001999"},
        {"Endpoint Identity Client": "LwPSK00001999-identity"}
    ],    
    "Raw Public Key mode": [
        {"Client Endpoint Name": "LwRPK00000000"},
        {"Client Endpoint Name": "LwRPK00001999"}
    ],   
    "Certificate mode": [
        {"Client Endpoint Name": "LwX50900000000"},
        {"Client Endpoint Name": "LwX50900019999"}
    ]
}
```

## Thingsboard transport LWM2M

### Introduction
When connecting a client, Thingsboard transport LWM2M uses the **Coap** protocol with **UDP** connection(by default);

The main purpose of ThingsBoard LWM2M Transport,  is to:
* perform connection and authorization;
* receive the information about resource values and **Observe** these values over a secure channel to ThingsBoard in the required format (**Attributes** or/and **Telemetry**).
* accept commands from ThingsBoard to **Observe** the current values of the **resources** of the LWM2M client, to **Change** the current values of resources if they are editable (have the **"RW"** flag) and transmit these commands to the LWM2M client

In order to track the history of resource changes, use <b><a href="/docs/{{docsPrefix}}user-guide/telemetry/">ThingsBoard Telemetry</a></b>.

If you need to store only the last values of the resources, use <b><a href="/docs/{{docsPrefix}}user-guide/attributes/">ThingsBoard Attributes</a></b>.

In order to start ThingsBoard LWM2M transport, it is required to:

1. Enable LWM2M transport <b>[config transport for start](#link-transport-config)</b>. This will start LWM2M transport with the **LWM2M** server only.
2. (Optional) Enable **"BootStrap Server"** <b>[config transport for start](#link-transport-bootstrap-config)</b> This will start LWM2M transport with the **LWM2M** and **"BootStrap Server"**.

If the LWM2M client starts in normal mode, it connects to the **"LWM2M Server"**.

If the LWM2M client starts in bootstrap mode, it connects to the **"BootStrap Server"**.

The security configuration for both servers is described <sup><b>[Security servers transport](#security-servers-transport-lwm2m)</b></sup>

In order to connect LWM2M Client to ThingsBoard, it is necessary to **configure in the ThingsBoard**:

* `LWM2M Resource Model` - for **Devices** and **Device profiles**, so that device objects can be parsed according to the common characteristics of instances and resources.<sup><b>[Thingsboard: LWM2M Resource Model](#thingsboard-lwm2m-resource-model)</b></sup>
* `Device Profile` - for devices so that devices can be grouped according to common characteristics.<sup><b>[device-profile: creation and configuration](#thingsboard-lwm2m-device-profile-and-device-creation-and-configuration)</b></sup>
* `Device` with the transport type **LWM2M** to collect information received from the LWM2M client.<sup><b>[device: creation and configuration](#lwm2m-device)</b></sup>

  **Note:** The Device must have a **link to** the already created **Device Profile**

After the creation of the **Device profile**, the **Observe** of the **Device** may be configured, depending on models.<sup><b>[device profile: setting resources observe](#link-profileNoSec-edit-settings-observe)</b></sup>

After the creation, the **Device** needs to be configured, depending on the type of security that the LWM2M client uses.<sup><b>[device crate/edit security](#link-deviceNoSec-security-config)</b></sup>

After the initial connection, a strategy is executed in order to get the values of the client resources. One of the three strategies can be configured:

* **Strategy # 1** (default):

    * Send **Observe resources** Request to the client, those **resources** that are **marked as observation** in the **Device profile** and which exist on the LWM2M client

* **Strategy # 2**:

    * After the registration, request the client to read all the resource values for all objects that the LWM2M client has
    * then execute **Strategy # 1**.

The Strategy configuration details can be found <sup><b>[setting strategy types](#link-profileNoSec-edit-settings-type-start)</b></sup>.

Here is an example of how to *create* and *configure* a **Device Profile** and a ThingsBoard **Device** and also set up the *Observe* of the resource **"batteryLevel"** of a LWM2M Object **"Device"** for the LWM2M client.<sup><b>[link](#link-example-NoSec-create-new)</b></sup>


### Features settings configuration in thingsboard.yml

Thingsboard supports **1 LWM2M server and 1 Bootstrap-Server simultaneously**.

Thingsboard, through its configuration settings, also allows you to choose to work with either one of the servers options, or selectively.

The Security Mode Resource in the Security Object determines what credentials are being used by the LWM2M Client and
the LWM2M Server or LWM2M Bootstrap-Server, respectively.

{% if docsPrefix == 'paas/' %}

{% else %}
* about `Description of all parameters` for starting the transport and their default in the **thingsboard.yml** configuration file in the **LWM2M** section can be viewed [here](/docs/{{docsPrefix}}user-guide/install/config/#lwm2m-transport-settings).
{% endif %}

<a name="link-transport-config"></a><br><br>

* `start` transport LWM2M with `Server` without Bootstrap-Server

```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:true}"
            ...
            bootstrap:
                enable: "${LWM2M_BOOTSTRAP_ENABLED:false}"
    ...
```
<a name="link-transport-bootstrap-config"></a><br><br>
* `start` transport LWM2M with `Server` and `Bootstrap-Server`
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:true}"
            ...
            bootstrap:
                enable: "${LWM2M_BOOTSTRAP_ENABLED:true}"
    ...
```
* `do not start` transport  LWM2M
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:false}"
    ...
```

### Security servers transport LWM2M
#### Add `Key Store File`
If the servers are using security configuration `4 security modes (NoSec + PSK + RPK + X509)` for mode = "2": "Certificate mode" or mode = "1": "Public key mode"

uses the public and private key value from the X509 certificate.

Certificate requirements [here](#link-x-509-certificate).

After starting the servers, the transport receives information about the **public** and **private keys** for each server from the **serverKeyStore.jks** file.

The **serverKeyStore.jks** file is uploaded to the server at startup from the specified path or from the database:
* in the configuration from **thingsboard.yml** (parameter: **key_store_path_file**)
* in the application **download line** (parameter: **key_store_path_file**)
* is **saved** in the database by the **system administrator**.

Other parameters must be specified in thingsboard.yml: **key_store_type**, **key_store_password**, **root_alias**.

Example:
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
      lwm2m:
      ...
        secure:
          key_store_type: "${LWM2M_KEYSTORE_TYPE:JKS}"
          # Default:   key_store_path_file: "${KEY_STORE_PATH_FILE:/common/transport/lwm2m/src/main/resources/credentials/serverKeyStore.jks"
          key_store_path_file: "${KEY_STORE_PATH_FILE:}"
          key_store_password: "${LWM2M_KEYSTORE_PASSWORD_SERVER:server_ks_password}"
          root_alias: "${LWM2M_SERVER_ROOT_CA:rootca}"
     ...
     
    thingsboard/transport/lwm2m/src/main/resources/tb-lwm2m-transport.yml
    ...
      lwm2m:
      ...
        secure:
          key_store_type: "${LWM2M_KEYSTORE_TYPE:JKS}"
          # Default:   key_store_path_file: "${KEY_STORE_PATH_FILE:/transport/lwm2m/src/main/data/credentials/serverKeyStore.jks}"
          key_store_path_file: "${KEY_STORE_PATH_FILE:}"
          key_store_password: "${LWM2M_KEYSTORE_PASSWORD_SERVER:server_ks_password}"
          root_alias: "${LWM2M_SERVER_ROOT_CA:rootca}"
     ...
```

`TO DO`  Add serverKeyStore.jks to database in pictures:

**After updating** the serverKeyStore.jks file, the **transport must be restarted** for the new settings of the public and private keys for each of the servers to take effect.

#### Configuration LWM2M server and Bootstrap-Server
Thingsboard supports **4 LWM2M Security mode simultaneously**.

```json
  {
    "0": "Pre-Shared Key mode",
    "1": "Raw Public Key mode",
    "2": "Certificate mode",
    "3": "NoSec mode"
  }
```

* LWM2M Server **with one of 4 or all security modes** {0...3} and

* LWM2M Bootstrap-Servers **with one of 4 or all security modes**  {0...3}.

#### `Host`&`Port` for Servers
```ruby
thingsboard/application/src/main/resources/thingsboard.yml
...
  LWM2M:
    ...
    server:After starting the servers, the transport receives 
      bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
      bind_port_no_sec: "${LWM2M_BIND_PORT_NO_SEC:5685}"
      secure:
        bind_address_security: "${LWM2M_BIND_ADDRESS_SECURITY:0.0.0.0}"
        bind_port_security: "${LWM2M_BIND_PORT_SECURITY:5686}"
        ...
    bootstrap:
      ...  
      bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
      bind_port_no_sec: "${LWM2M_BIND_PORT_NO_SEC_BS:5687}"
      secure:
        bind_address_security: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
        bind_port_security: "${LWM2M_BIND_PORT_SEC_BS:5688}"
...
```

#### `4 security` modes  (`NoSec` + `PSK` + `RPK` + `X509`)
*   *NoSec mode (`NoSec`) + Pre-Shared Key mode (`PSK`) + Raw Public Key mode (`RPK`) + Certificate mode (`X509`) communications:*
    * Server security configuration for these modes is always enabled if `X509` mode information is available and free of errors.
        1. `Key Store File` is of type `JKS` and loading from DataBase is not an error.<sup><b>[Add <b>Key Store File</b>](#add-key-store-file-to-database)</b></sup>
    * You need information about LWM2M server's `certificates` and bootstrap server's certificates (`X509`)
        ```ruby
        thingsboard/application/src/main/resources/thingsboard.yml
        ...
            LWM2M:
                ...
                secure:
                    # Certificate_x509:
                    key_store_type: "${LWM2M_KEYSTORE_TYPE:JKS}"
                    key_store_password: "${LWM2M_KEYSTORE_PASSWORD_SERVER:server_ks_password}"
                    root_alias: "${LWM2M_SERVER_ROOT_CA:rootca}"
                    ...
                server:
                    ...
                    secure:
                    ...
                    # Only Certificate_x509:
                    alias: "${LWM2M_KEYSTORE_ALIAS_SERVER:server}"
                bootstrap:
                    ...
                    secure:
                    ...
                    # Only Certificate_x509:
                    alias: "${LWM2M_KEYSTORE_ALIAS_BOOTSTRAP:bootstrap}"
        ...
        ```
    * After start servers (`X509` communications) and read certificate from serverKeyStore.jks:
        * Information about parameters of LWM2M `Server`:

          ```ruby
            - Server uses [X509]: serverNoSecureURI : [0.0.0.0:5685], serverSecureURI : [0.0.0.0:5686]
            - X509 Certificate (Hex): [308202b83082025ea00302010202088baee46c9cb8157b300a06082a8648ce3d04030230793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b3009060355040613025541301e170d3231303231323134333430385a170d3232303231323134333430385a30793119301706035504030c106c6f63616c686f73742073657276657231143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b30090603550406130255413059301306072a8648ce3d020106082a8648ce3d0301070342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721ba381cf3081cc3081aa0603551d230481a230819f8014d74dade094ce4181eb438697663b963e4cafbf0aa17da47b30793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b30090603550406130255418208bfb738674fef7fe0301d0603551d0e041604141cb500d9542379c5421c628a74f2ccb82d4213d8300a06082a8648ce3d0403020348003045022100c8cac820f0e689c0828c74a58cd8ea5746daa74f35d9edea176a71f0b58d05fc0220508af1e946f92e141d9c87c645a8190a37a8ac46838ddbd079405f86092adeb7]
            - Public Key (Hex): [3059301306072a8648ce3d020106082a8648ce3d0301070342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b] 
            - Private Key (Hex): [308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420dc774b309e547ceb48fee547e104ce201a9c48c449dc5414cd04e7f5cf05f67ba00a06082a8648ce3d030107a1440342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b], 
            public_x: "${LWM2M_SERVER_PUBLIC_X:05064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f358}" 
            public_y: "${LWM2M_SERVER_PUBLIC_Y:5eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b}" 
            private_encoded: "${LWM2M_SERVER_PRIVATE_ENCODED:308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420dc774b309e547ceb48fee547e104ce201a9c48c449dc5414cd04e7f5cf05f67ba00a06082a8648ce3d030107a1440342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b}" 
          ```

        * Information about parameters of `BootStrap` Server:

          ```ruby
            - Bootstrap Server uses [X509]: serverNoSecureURI : [0.0.0.0:5687], serverSecureURI : [0.0.0.0:5688]
            - X509 Certificate (Hex): [308202ba30820261a00302010202082a35febb06ff50c8300a06082a8648ce3d04030230793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b3009060355040613025541301e170d3231303231323134333430385a170d3232303231323134333430385a307c311c301a06035504030c136c6f63616c686f737420626f6f74737472617031143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b30090603550406130255413059301306072a8648ce3d020106082a8648ce3d030107034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34a381cf3081cc3081aa0603551d230481a230819f8014d74dade094ce4181eb438697663b963e4cafbf0aa17da47b30793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b30090603550406130255418208bfb738674fef7fe0301d0603551d0e04160414b545646915fcc4be2173be49bb26bdb1663062bf300a06082a8648ce3d040302034700304402202f379736e4191e3fd28efb82bc7d0cbec3fb597e78b66db648a3c0734d5bf29d0220052b34e6bd5f8a7356126bb91e367dd04bdef628750cd31c8a7707e91134cc8c]
            - Public Key (Hex): [3059301306072a8648ce3d020106082a8648ce3d030107034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34] 
            - Private Key (Hex): [308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104205ecafd90caa7be45c42e1f3f32571632b8409e6e6249d7124f4ba56fab3c8083a00a06082a8648ce3d030107a144034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34],
            public_x: "${LWM2M_SERVER_PUBLIC_X_BS:5017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f91}" 
            public_y: "${LWM2M_SERVER_PUBLIC_Y_BS:3fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34}" 
            private_encoded: "${LWM2M_SERVER_PRIVATE_ENCODED_BS:308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104205ecafd90caa7be45c42e1f3f32571632b8409e6e6249d7124f4ba56fab3c8083a00a06082a8648ce3d030107a144034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34}" 
          ```

      These parameters: ***public_x***, ***public_y*** and ***private_encoded*** You can use for the next Security servers configuration: `3 security` modes if you will only use [<b>3 security modes</b>](#3-security-modes-nosec--psk--rpk) and copy and paste these lines into the appropriate thingsboard/application/src/main/resources/thingsboard.yml section.

      These parameters:
        * ***Public Key (Hex)***:, ***Private Key (Hex)*** You must use for the security mode `RPK` to create deviceProfile tab Bootstrap and run LWM2M client (config client).
        * ***X509 Certificate (Hex)***: You must use for the security mode `X509` to create deviceProfile You must use to create deviceProfile tab Bootstrap and run LWM2M client (config client).

#### `3 security` modes (`NoSec` + `PSK` + `RPK`)

*   *NoSec mode (`NoSec`) + Pre-Shared Key mode (`PSK`) + Raw Public Key mode (`RPK`) communications:*
    * Server security configuration for these modes is always enabled if `X509` mode information is not available or is in error.
        1. Default for `key_store_path_file: "/usr/share/thingsboard/conf/credentials/serverKeyStore.jks"` loading is error and
        1. `key_store_path_file: "${KEY_STORE_PATH_FILE:}"` loading is error.
    *  You need information about server's `publicKey`, server's `privateKey`, bootstrap server's `publicKey`  and  bootstrap server's  `privateKey` (`RPK`):
        ```ruby
        thingsboard/application/src/main/resources/thingsboard.yml
        ...
          LWM2M:
            ...
            server:
              ...
              secure:
                ...
                # Only for RPK: Public & Private Key. If the keystore file is missing or not working
                public_x: "${LWM2M_SERVER_PUBLIC_X:05064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f358}"
                public_y: "${LWM2M_SERVER_PUBLIC_Y:5eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b}"
                private_encoded: "${LWM2M_SERVER_PRIVATE_ENCODED:308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420dc774b309e547ceb48fee547e104ce201a9c48c449dc5414cd04e7f5cf05f67ba00a06082a8648ce3d030107a1440342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b}"
                ...
            bootstrap:
              ...
              secure:
                ...
                public_x: "${LWM2M_SERVER_PUBLIC_X_BS:5017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f91}"
                public_y: "${LWM2M_SERVER_PUBLIC_Y_BS:3fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34}"
                private_encoded: "${LWM2M_SERVER_PRIVATE_ENCODED_BS:308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104205ecafd90caa7be45c42e1f3f32571632b8409e6e6249d7124f4ba56fab3c8083a00a06082a8648ce3d030107a144034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34}"
        ...
        ```

    * After start servers (`RPK` communications) and read parameters key from thingsboard/application/src/main/resources/thingsboard.yml:
        * Information about parameters of LWM2M `Server`:

          ```ruby
            - Server uses [RPK]: serverNoSecureURI : [0.0.0.0:5685], serverSecureURI : [0.0.0.0:5686]
            - Public Key (Hex): [3059301306072a8648ce3d020106082a8648ce3d0301070342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b] 
            - Private Key (Hex): [308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420dc774b309e547ceb48fee547e104ce201a9c48c449dc5414cd04e7f5cf05f67ba00a06082a8648ce3d030107a1440342000405064b9e6762dd8d8b8a52355d7b4d8b9a3d64e6d2ee277d76c248861353f3585eeb1838e4f9e37b31fa347aef5ce3431eb54e0a2506910c5e0298817445721b], 
          ```

        * Information about parameters of `BootStrap` Server:

          ```ruby
            - Bootstrap Server uses [RPK]: serverNoSecureURI : [0.0.0.0:5687], serverSecureURI : [0.0.0.0:5688]
            - Public Key (Hex): [3059301306072a8648ce3d020106082a8648ce3d030107034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34] 
            - Private Key (Hex): [308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104205ecafd90caa7be45c42e1f3f32571632b8409e6e6249d7124f4ba56fab3c8083a00a06082a8648ce3d030107a144034200045017c87a1c1768264656b3b355434b0def6edb8b9bf166a4762d9930cd730f913fc4e61bcd8901ec27c424114c3e887ed372497f0c2cf85839b8443e76988b34], 
          ```

      These parameters:
        * ***Public Key (Hex)***:, ***Private Key (Hex)*** You must use for the security mode `RPK` to create deviceProfile tab Bootstrap and run LWM2M client (config client).
          <a name="link-2-security-modes"></a><br><br>

#### `2 security` modes (`NoSec` + `PSK`)
*   *NoSec mode (`NoSec`) + Pre-Shared Key mode (`PSK`) communications:*
    * Server security configuration for these modes is always enabled if `X509` and `RPK` mode information is not available or is in error.
        1. Default for `key_store_path_file: "/usr/share/thingsboard/conf/credentials/serverKeyStore.jks"` loading is error and
        1. `key_store_path_file: "${KEY_STORE_PATH_FILE:}"` loading is error and
        1. Information about  server (`RPK`) or about bootstrap server (`RPK`)  is missing in yml:
        * Information about  server's `publicKey` or   server's  `privateKey`;
        * Information about bootstrap server's `publicKey`  or  bootstrap server's  `privateKey`.
        ```ruby
        thingsboard/application/src/main/resources/thingsboard.yml
        ...
          LWM2M:
            ...
            server:
              ...
              secure:
                ...
                # Only for RPK: Public & Private Key. If the keystore file is missing or not working
                public_x: "${LWM2M_SERVER_PUBLIC_X:}"
                public_y: "${LWM2M_SERVER_PUBLIC_Y:}"
                private_encoded: "${LWM2M_SERVER_PRIVATE_ENCODED:}"
                ...
            bootstrap:
              ...
              secure:
                ...
                public_x: "${LWM2M_SERVER_PUBLIC_X_BS:}"
                public_y: "${LWM2M_SERVER_PUBLIC_Y_BS:}"
                private_encoded: "${LWM2M_SERVER_PRIVATE_ENCODED_BS:}"
        ...
        ```
    * After start servers (`RPK` communications) and read parameters key from thingsboard/application/src/main/resources/thingsboard.yml:
        * Information about parameters of LWM2M `Server`:

          ```ruby
            - uses [PSK]: serverNoSecureURI : [0.0.0.0:5685], serverSecureURI : [0.0.0.0:5686]
          ```

        * Information about parameters of `BootStrap` Server:

          ```ruby
            - Bootstrap Server uses [PSK]: serverNoSecureURI : [0.0.0.0:5687], serverSecureURI : [0.0.0.0:5688]
          ```

### Thingsboard: `LWM2M Resource Model`
* About LWM2M Resource Model [here](#link-lwm2m-resource-model-main)

#### Add common LWM2M Resource Model by the System Admin
The general list of models for all devices must be uploaded by the System administrator before starting the server.
It is used for devices and device profiles so that device objects can be analyzed according to the common characteristics of instances and resources.
The tenant can use his own model for each object.

**Note:**     
If the system does not have a common list of models for all devices,                
then the transport will use the **minimum** set of models provided from *LESHAN LIBRARY*<sup><b>[/org/eclipse/leshan/leshan-core/.../leshan-core-....jar!/models/](#link-lwm2m-resource-model-main)</b></sup>

*Add common LWM2M Resource Model by the System Admin: follow the instructions step by step:*

    {% include images-gallery.html imageCollection="addResourcesModel_common" showListImageTitles="true" %}


#### Add LWM2M resource model by the Tenant
The Tenant has the option to add their own variations of the LWM2M Resource Model.

Tenant shares a common list of LWM2M Resource Models and his list of models together.

If **the tenant adds a model** with an ID that is already in the common list of LWM2M Resource Models, then the model with this ID will be added to the list of models for the tenant instead of a model from common list of LWM2M Resource Models.

When **delete the Tenant**, everything related to the Tenant **is deleted** (including: **LWM2M Device Profiles**, **LWM2M Devices** and Tenant`s  list of LWM2M **Resource Models**.

*Add LWM2M resource model by the Tenant: follow the instructions step by step:*

    {% include images-gallery.html imageCollection="addResourcesModel_tenant" showListImageTitles="true" %}

**Note:**<br>
The Tenant and the System Admin can add a model with an ID that is unique to the tenant’s LWM2M Resource Model list (**ObjectID** and **ObjectVersion**).<br>

```ruby
    3_V_1_1.xml
        <LWM2M xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"...
            <Object ObjectType="MODefinition">
                <Name>Device</Name>
                <ObjectID>3</ObjectID>
                <ObjectURN>urn:oma:lwm2m:oma:3:1.1</ObjectURN>
                <LWM2MVersion>1.1</LWM2MVersion>
                <ObjectVersion>1.1</ObjectVersion>
            ...
        </LWM2M> 

    3_V_1_2.xml
        <LWM2M xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"...
            <Object ObjectType="MODefinition">
                <Name>Device</Name>
                <ObjectID>3</ObjectID>
                <ObjectURN>urn:oma:lwm2m:oma:3:1.2</ObjectURN>
                <LWM2MVersion>1.2</LWM2MVersion>
                <ObjectVersion>1.1</ObjectVersion>
            ...
        </LWM2M>    
```

If the version of the object is not specified in the model, the default model version value is used for this model: ObjectModel.**DEFAULT_VERSION** = "**1.0**";

```ruby
    3.xml
        <LWM2M xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"...
            <Object ObjectType="MODefinition">
                <Name>Device</Name>
                <ObjectID>3</ObjectID>
                <ObjectURN>urn:oma:lwm2m:oma:3</ObjectURN>
                <LWM2MVersion>1.1</LWM2MVersion>
            ...
        </LWM2M> 
```

### Thingsboard: `LWM2M Device Profile` and `Device` creation and configuration
#### NoSec mode (`NoSec`)
##### LWM2M Server configuration
* 2 security modes (NoSec + PSK) [here](#link-2-security-modes)
##### LWM2M Device profile
Parameters for **new Device profile LWM2M**, type: **LWM2M**:
* **Name** (example): **"LWM2MProfileNoSec"**.

``` 
    Input parameters (example):
        Device profile detailsa -> Name: "LWM2MProfileNoSec", 
        Transport configuration -> Transport type: "LWM2M"
```
<ol start="1">
<li> <i>LWM2M device</i> <b>create new</b>: follow the instructions step by step:</li>    
  {% include images-gallery.html imageCollection="profileNoSec_create" showListImageTitles="true" %}  
</ol>
<a name="link-profileNoSec-edit-config"></a><br><br>
<ol start="2">
<li> <i>wM2M device profile configuration</i> <b>edit start</b>: follow the instructions step by step:</li>    
  {% include images-gallery.html imageCollection="profileNoSec_edit" showListImageTitles="true" %}  
</ol>

<a name="link-profileNoSec-edit-settings-observe"></a><br><br>
* *LWM2M device profile configuration*: setting resources <b>observe</b> in instances on LWM2M client objects after connect:

    * [Add a new object](#link-profileNoSec_edit_add_object) to <font color="green">"Object list":</font>
        * If <font color="blue">"Object list"</font> **is empty** or there is **no need object** in "Object list",
          you can <font color="blue">Add a new object</font> to <font color="green">"Object list"</font> in the following ways:
            * *Select* an item **from** the list of **all the objects**.
            * *Select* object **by ID object** (input only number ID) **from** the list of **filtered the objects**.
            * *Select* an object **by context in the object name** (enter any alphabetic or numeric characters from the object name)
              **from** the list of **filtered the objects**.

              ```ruby
              After performing the action "Add a new object" or "Add a new instance", 
              if you do "not" perform the action "Add observation" to this object/istance, and run "Save":
                - this object / instance "not" will be saved in the configuration of this "device profile".
              ```  
    * [Add a new instance](#link-profileNoSec_edit_add_instance) to object:
        * After <font color="blue">Add a new object <font color="black">to  <font color="green">"Object list"</font>, this <i>Object</i> has an instance with <i>ID=0</i> <b>always</b>.
        * If *Object* is **supports multiple instances**, then an instance with **ID** no more than **65535** can be added to this *Object*.
        * **Instances** in an *Object* by **ID** are **unique**.
    * [Add observation](#link-profileNoSec_edit_observe) resource in instance:
        * for resource in instance of object to object LWM2M from <font color="green">"Object list"</font>:
            * to **mark** check: <font color="blue">"Observe" <font color="black">+ <font color="red">"Attribute" <font color="black">+ change/or no change <b>"Key Name"</b>.</font>
            * to **mark** check: <font color="blue">"Observe" <font color="black">+ <font color="blue">"Telemetry" <font color="black">+ change/or no change <b>"Key Name"</b>.</font>
            * to **mark** check: <font color="blue">"Observe" <font color="black">+ <font color="red">"Attribute" <font color="black">+ <font color="blue">"Telemetry" <font color="black">+ change/or no change <b>"Key Name"</b>.</font>

            ```ruby
            Thingsboard:
            - uses the {Key Name} "value" as parameter to display the resource values in the attributes or telemetry section as a [key].
              By default, this is the name of the resource, in camelcase format. 

            You can change the {Key Name} "value" to your own.
            ```
    * [Edit Bootstrap](#link-profileNoSec_edit_bootstrap) client:
        * **Setting** connection to the **new LWM2M server** on the client after upgrade.
        * **Configuring** (security key, host, port ...) to connect to the **new Bootstrap server** on the client after upgrade.
        * **Configuring** (security key, host, port ...) to connect to the **new LWM2M server** on the client after upgrade.
    * Control [Config (format Json value)](#link-profileNoSec_edit-json-noSec) for Device profile:
    * <font color="blue">"Save":</font>
        * <font color="blue">"Save"  <font color="black">or <font color="red">"Cancel"</font> after any configuration <b>change</b> to "LWM2M Model".

<a name="link-profileNoSec_edit_add_object"></a><br><br>
<ol start="3">
<li> <i>LWM2M device profile configuration</i>: <font color="blue">Add a new object</font> to <font color="green">"Object list"</font>:</li>    
    {% include images-gallery.html imageCollection="profileNoSec_edit_add_object" showListImageTitles="true" %}
</ol>  

<a name="link-profileNoSec_edit_add_instance"></a><br><br>
<ol start="4">
<li> <i>LWM2M device profile configuration</i>: <font color="blue">Add a new instance</font> to object:</li>    
    {% include images-gallery.html imageCollection="profileNoSec_edit_add_instance" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec_edit_observe"></a><br><br>
<ol start="5">
<li> <font color="blue">Add observation</font> resource in instance:</li>   
      {% include images-gallery.html imageCollection="profileNoSec_edit_observe" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec_edit_bootstrap"></a><br><br>
<ol start="6">
<li> <font color="blue">Edit Bootstrap</font> client:</li>  
      {% include images-gallery.html imageCollection="profileNoSec_edit_bootstrap" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec-edit-settings-type-start"></a><br><br>
* *LWM2M device profile configuration*: <b>setting strategy types after initial Client connection</b> after connect:
```ruby 
    strategy number 1 for start Client: "Only Observe Request to the client after the initial connection (Default)"
    strategy number 2 for start Client: "Read Request to the client for All resource values and 
                                         Observe Request to the client after registration"
```
<ol start="7">
<li> <i>LWM2M device profile configuration</i>: <b>changing type start</b> Client LWM2M after connect:</li>    
   {% include images-gallery.html imageCollection="profileNoSec_edit_typeAfterConnect" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec_edit-json-noSec"></a><br><br>
<ol start="8">
<li>Example <font color="blue">Config (format Json value)</font> for Device profile (No Security Key mode):</li>
</ol>

```json
    {
      "observeAttr": {
        "keyName": {
          "/3/0/2": "serialNumber",
          "/3/0/3": "firmwareVersion",
          "/3/0/9": "batLevel01InMedmoryTest",
          "/3/0/13": "currentTime",
          "/3/0/14": "utcOffset",
          "/4/0/0": "networkBearer",
          "/3303/0/5700": "sensorValue00",
          "/3303/1/5604": "maxRangeValue",
          "/3303/1/5700": "sensorValue",
          "/3303/123/5700": "sensorValue00",
          "/3303/123/5701": "sensorUnits"
        },
        "observe": [
          "/3/0/9",
          "/3/0/13",
          "/3/0/14",
          "/4/0/0",
          "/3303/0/5700",
          "/3303/1/5604",
          "/3303/1/5700",
          "/3303/123/5700",
          "/3303/123/5701"
        ],
        "attribute": [
          "/3/0/2",
          "/3/0/9",
          "/3/0/13",
          "/3/0/14",
          "/4/0/0",
          "/3303/1/5604",
          "/3303/123/5701"
        ],
        "telemetry": [
          "/3/0/3",
          "/3/0/9",
          "/3/0/13",
          "/3303/0/5700",
          "/3303/1/5700",
          "/3303/123/5700"
        ]
      },
      "bootstrap": {
        "servers": {
          "binding": "U",
          "shortId": 123,
          "lifetime": 300,
          "notifIfDisabled": true,
          "defaultMinPeriod": 1
        },
        "LWM2MServer": {
          "host": "localhost",
          "port": 5685,
          "serverId": 123,
          "securityMode": "NO_SEC",
          "serverPublicKey": "",
          "bootstrapServerIs": false,
          "clientHoldOffTime": 1,
          "bootstrapServerAccountTimeout": 0
        },
        "bootstrapServer": {
          "host": "0.0.0.0",
          "port": 5687,
          "serverId": 111,
          "securityMode": "NO_SEC",
          "serverPublicKey": "",
          "clientHoldOffTime": 1,
          "bootstrapServerAccountTimeout": 0
        }
      },
      "clientLWM2MSettings": {
        "clientOnlyObserveAfterConnect": true,
        "clientUpdateValueAfterConnect": true
      }
    }
```

##### LWM2M Device

```ruby 
    Example:
    name device: "LwNoSec00000000", 
    Credentials type: "LWM2M Credentials"
    LWM2M Security config key: "LwNoSec00000000"
```

* **searching** for **Security configuration** of the LWM2M device and **identifying** the <b><font color="green">LWM2M client</font></b> with the <b><font color="blue">LWM2M device</font></b> in the <b><font color="blue">LWM2M thingsboard transport</font></b> is performed using the <b><font color="red">KEY</font></b> that we have to input to the field: [<b>"LWM2M Security config key"</b> (add/edit Device`s LWM2M credential)](#link-deviceNoSec-create).
    * "LWM2M Security config key" value:
        * for all security modes except PSK,  is [Endpoint Client Name](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=22)
        * for security mode PSK is identity: [The "Public Key or Identity" Resource MUST be used to store the PSK identity of LWM2M Client](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=24)
          <a name="link-deviceNoSec-create"></a><br><br>
<ol start="1">
<li> <i>LWM2M device</i> <b>create new</b>: follow the instructions step by step:</li>    
  {% include images-gallery.html imageCollection="deviceNoSec_create" showListImageTitles="true" %}
</ol>

<a name="link-deviceNoSec-security-config"></a><br><br>
<ol start="2">
<li> <i>LWM2M device</i> <b>crate/edit security configuration</b>: follow the instructions:</li>
  {% include images-gallery.html imageCollection="deviceNoSec_create_security_config" showListImageTitles="true" %}
</ol>

<ol start="3">
<li> <i>LWM2M device</i> <b><font color="blue">save</font></b> <b>new/edit</b>:</li>
  {% include images-gallery.html imageCollection="deviceNoSec_create_save" showListImageTitles="true" %}
</ol>

<a name="link-deviceNoSec-security-config-json"></a>
<ol start="4">
<li>  Example <font color="blue">Security Config for Device</font> (format Json value, No Security Key mode):</li>
</ol>

```json
     {
      "client": {
        "securityConfigClientMode": "NO_SEC",
        "endpoint": "",
        "identity": "",
        "key": "",
        "x509": false
      },
      "bootstrap": {
        "bootstrapServer": {
          "securityMode": "NO_SEC",
          "clientPublicKeyOrId": "",
          "clientSecretKey": ""
        },
        "LWM2MServer": {
          "securityMode": "NO_SEC",
          "clientPublicKeyOrId": "",
          "clientSecretKey": ""
        }
      }
     }
```

#### Pre-Shared Key mode (`PSK`)
##### LWM2M Server configuration
* 2 security modes (NoSec + PSK) [here](#link-2-security-modes)

##### LWM2M Device profile
Example   value  for Client (Pre-Shared Key mode):
 ```json
 {
   "client": {
     "securityConfigClientMode": "PSK",
     "endpoint": "LwPsk00000000",
     "identity": "LwPsk00000000_identity",
     "key": "011b69a96ba580f57b3ca8718da03b906ea39b3add998c4ce0e25464be12494d",
     "x509": false
   }
}
 ```

##### LWM2M Device

#### Raw Public Key mode (`RPK`)
##### LWM2M Server configuration
* 3 security modes (NoSec + PSK + RPK) [here](#3-security-modes-nosec--psk--rpk)

##### LWM2M Device profile

##### LWM2M Device



##### Device LWM2M: creation and configuration

#### Certificate mode (`X509`)
##### LWM2M Server configuration
* 4 security modes (NoSec + PSK + RPK + X509) [here](#4-security-modes--nosec--psk--rpk--x509)

##### LWM2M Device profile

##### LWM2M Device


### Examples and tests
<a name="link-example-NoSec-create-new"></a><br><br>
#### Example creation and configuration `Device LWM2M` and `Device profile` LWM2M with Observe `Resource`
```ruby
    Parameters of LWM2M Client:
        endpoint:       "LwNoSec00000000"
        security mode:  "NoSec"
        
        Parameters for the Observe:   
            Object Name:    "Device"
            Object Id =     "3"
            Instance Id =   "0"
            Resource Id =   "9"
            Resource Name:  "batteryLevel"
        Note: Observe from LWM2M Client to ThingsBoard Telemetry
    
    Parameters of Device LWM2M:
        Name:               "LwNoSec00000000"
        security mode:      "NoSec"
        
    Parameters of LWM2M Device Profile:
        Name:                   "lwm2mProfileNoSec"
        Transport type:         "LWM2M"
        Type strategy:          "Strategy #1"
        Servers security mode   "NoSec"
```

#### LWM2M client start and tests

```ruby
        Lightweight Machine to Machine (LWM2M) is an application layer protocol based on CoAP/UDP, 
    and is designed to expose various resources for reading, writing and executing via an LWM2M server in a very lightweight environment.
        Architecturally, LWM2M is a client-server protocol. 
        The IOT device plays the role of the client while the server is the Device Management server where devices register, 
    making them available to be managed. 
    
        The communication between the two is bidirectional; a device reports back information either as a response 
    to a request the server initiates or on a predefined time interval.
```    
* !!! TO DO.

  In order to setup one of those tools, you can use instructions in our [Hello World](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.

* !!! TO DO "new client-application".

  In order to setup one of those tools, you can use instructions in our [Create and start LWM2M Client](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
