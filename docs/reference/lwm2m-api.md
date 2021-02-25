---
layout: docwithnav
assignees:
- nick
title: LwM2M Device API Reference
description: Supported LwM2M API Reference for IoT Devices

started:
    0:
        image: /images/lwm2m/architecture.jpg 
        title: 'architecture LwM2M.'    
    1:
        image: /images/lwm2m/object_model.jpg 
        title: 'object model LwM2M.'       
    2:
        image: /images/lwm2m/procedure_client_initiated_bootstrap.jpg 
        title: 'procedure initiated client LwM2M.'    
    3:
        image: /images/lwm2m/client_registration.jpg 
        title: 'example client registration LwM2M.'    
    4:
        image: /images/lwm2m/relations_access_control_object_other_objects.jpg 
        title: 'access control object LwM2M.'

profileNoSec_create:
    0:
        image: /images/lwm2m/noSec_profile_create_Step_1.png 
        title: 'start create profile LwM2M.'    
    1:
        image: /images/lwm2m/noSec_profile_create_Step_2.png 
        title: ' input the name of device profile (for example: "lwm2mProfileNoSec").'       
    2:
        image: /images/lwm2m/noSec_profile_create_Step_3.png 
        title: 'go to the "Transport configuration" tab and select the type of device profile.'    
    3:
        image: /images/lwm2m/noSec_profile_create_Step_4.png 
        title: 'save this device profile: click the "Add" button.'    


profileNoSec_edit:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_1.png 
        title: '<i>Select</i> line with the <b>name</b> of the <b>device profile</b> to change the configuration.'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_2_3.png 
        title: '<i>Select</i> tab with <b>"Transport configuration"</b> and <i>click</i> button <b>"Toggle edit mode"</b>.'       

profileNoSec_edit_typeAfterConnect:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_3_1.png 
        title: 'configuration number <b><font color="#5f9ea0">1</font> selected</b>.'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_3_2.png 
        title: 'configuration number <b><font color="#5f9ea0">2</font> selected</b>.'       
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_3_3.png 
        title: 'configuration number <b><font color="#5f9ea0">3</font> selected</b>.'   

profileNoSec_edit_add_object:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_4_1.png 
        title: '<i>Select</i> an item <b>from</b> the list of <b>all the objects</b> ...'       
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_4_2.png 
        title: '<i>Select</i> object <b>by ID object</b> (input only number ID).'    
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_4_3.png 
        title: '<i>Select</i> object <b>by context</b> in the name object...'  

profileNoSec_edit_add_instance:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_4_4.png 
        title: '<i>Object</i> is supports <b>multiple instances</b>'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_4_5.png
        title: '<b>Start</b> add...'    
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_4_6.png
        title: '<b>Input</b> ID for new instance'     
    4:
        image: /images/lwm2m/noSec_profile_edit_Step_4_7.png
        title: '<b>Delete</b> ID instance'

profileNoSec_edit_observe:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_4_8.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>with</u> <font color="red">"Attribute"</font> <u>without</u> <font color="blue">"Telemetry"</font> <u>without</u> change <b>"Key Name"</b>'       
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_4_9.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>without</u> <font color="red">"Attribute"</font> <u>with</u> <font color="blue">"Telemetry"</font> <u>without</u> change <b>"Key Name"</b>'       
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_4_10.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>with</u> <font color="red">"Attribute"</font> <u>with</u> <font color="blue">"Telemetry"</font> <u>without</u> change <b>"Key Name"</b>'       
    4:
        image: /images/lwm2m/noSec_profile_edit_Step_4_11.png 
        title: 'For <b>observation</b> resource in an instance: to mark check <font color="blue">"Observe"</font> <u>with</u> <font color="red">"Attribute"</font> <u>with</u> <font color="blue">"Telemetry"</font> <u>with</u> change <b>"Key Name"</b>'       

profileNoSec_edit_bootstrap:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_5_1.png 
        title: '<b>Settings</b> connection to a <b>new LwM2M server</b> on the client after upgrade:<p></p> - Short identifier,<p></p> - Minimum Period...,<p></p> - Lifetime...,<p></p> - Binding (default UDP),<p></p> - Notification Storing...'       
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_5_2.png 
        title: '<b>Configuring</b> to connect to the <b>new Bootstrap server</b> on the client after upgrade:<p></p> - Security Mode,<p></p> - Host,<p></p> - Port,<p></p> - Short identifier,<p></p> - Hold off Time,<p></p> - Account after timeout'    
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_5_3.png 
        title: '<b>Configuring</b> to connect to the  new <b>LwM2M server</b> on the client after upgrade:<p></p> - Security Mode,<p></p> - Host,<p></p> - Port,<p></p> - Short identifier,<p></p> - Hold off Time,<p></p> - Account after timeout'    

deviceNoSec_create:
    0:
        image: /images/lwm2m/noSec_device_create_Step_1.png
        title: '<b> - start:</b> click <+> button, <p></p><b> - input the name</b> of device (for example: "LwNoSec00000000"), <p></p><b> - select transport type:</b> "LWM2M",<p></p><b> - select existing device profile</b> (for example: "lwm2mProfileNoSec").'       
    1:
        image: /images/lwm2m/noSec_device_create_Step_2.png
        title: '<b>Add credential</b>: <p></p>- <b>to mark</b> check <font color="red">"Add credential"</font><p></p>- <b>select</b> Credentials type (<b>"LwM2M Credentials"</b>)<p></p>- <b>input</b> <b><font color="blue">"LwM2M Security config key"</font></b> (<b>endPoint</b> of LwM2M Client/PSK identity of LwM2M Client (<b>"Public Key or Identity"</b>))<p></p> - <b>edit</b> "LwM2M Security <b>config</b>"'    

deviceNoSec_create_security_config:
    0:
        image: /images/lwm2m/noSec_device_create_security_Step_1.png
        title: '<b>- edit</b>: <b>"Client Security Config"</b>.'    
    1:
        image: /images/lwm2m/noSec_device_create_security_Step_2.png
        title: '<b>- edit</b>: <b>"Bootstrap Client"</b>: <font color="blue">BOOTSTRAP SERVER</font>.'       
    2:
        image: /images/lwm2m/noSec_device_create_security_Step_3.png
        title: '- <b>edit</b>: <b>"Bootstrap Client"</b>: <font color="blue">LWM2M SERVER</font>,  <p></p> - <b><font color="blue">save</font></b>: <i>Security config info</i> after finish edit.'

deviceNoSec_create_save:
    0:
        image: /images/lwm2m/noSec_device_create_Step_3.png
        title: '- click <font color="blue">"Add"</font> button.'

---

* TOC
{:toc}
  
## Getting started
### LwM2M basics: architecture, terminology,  definitions.
[LwM2M](https://en.wikipedia.org/wiki/OMA_LWM2M) is a device management protocol designed for sensor networks and the demands of a machine-to-machine (M2M) environment. 
For simplicity, we will manually provision the device using the UI.
* about LwM2M [here](https://omaspecworks.org/what-is-oma-specworks/iot/lightweight-m2m-lwm2m/). 
 
**The network architecture** used by the LwM2M protocol operates on a client-server basis and includes **three elements**: the LwM2M **server**, the LwM2M **bootstrap/download server**, and the LwM2M **client**, as shown in the next figure.

    {% include images-gallery.html imageCollection="started" showListImageTitles="true" %} 


**You can find more information:**
* about `LwM2M specification` is freely available [here](http://openmobilealliance.org/wp/index.html).
* about `LwM2M Technical Specification Transport Bindings` (v1.2) [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf).
* about `CoAP Transport Bindings` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=62). 
* about `binding mode`: whether the device is always connected or not, whether it uses UDP: example [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=44) 
and [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=63).

```ruby
    The URIs indicate the way how messages are transported (which is mapped to the binding modes).
    - U (UDP)
    - T (TCP)
    - S (SMS)
    - N (Non-IP)
    - The LwM2M Server URI encodes the binding mode in the URI scheme.
    coap(s):// -> U
    coap(s)+tcp// -> T
    For S you have a tel URI scheme and for N it depends what non-IP transport you use.
```

* about `LwM2M Security` and Security Requirements [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=18).
* pre-shared keys for secure DTLS ***PSK***  communications:    
    ```ruby
        If a LwM2M Server supports the pre-shared key credentials it MUST support the following:
        TLS_PSK_WITH_AES_128_CCM_8, as defined in [RFC6655] and mandated in [RFC7925]
        TLS_PSK_WITH_AES_128_CBC_SHA256, as defined in [RFC5487].
        The LwM2M Client SHOULD NOT use the TLS_PSK_WITH_AES_128_CBC_SHA256 ciphersuite as [RFC7457] has
        identified security attacks against these TLS/DTLS ciphersuites.
    ```
    **TLS_PSK_WITH_AES_128_CCM_8**, as defined in [RFC6655](https://www.ietf.org/rfc/rfc6655.txt).
    
    **TLS_PSK_WITH_AES_128_CBC_SHA256**, as defined in [RFC5487](https://www.ietf.org/rfc/rfc5487.txt).
    
    **~~TLS_PSK_WITH_AES_128_CBC_SHA256~~** ciphersuite as [RFC7457](https://www.ietf.org/rfc/rfc7457.txt).
    
    * about Pre-Shared Keys LwM2M [5.2.9.1. Pre-Shared Keys](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=23).
    * Clients and Servers MUST support arbitrary `PSK Identities` of up to 128 bytes, as mandated in [RFC7925](https://www.ietf.org/rfc/rfc7925.txt).
* raw public keys for secure DTLS ***RPK***  communications:
    ```ruby
        If a LwM2M Server supports the raw public key credentials it MUST support the following:
        TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8, as defined in [RFC6655] and mandated in [RFC7925]
        TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256, as defined in [RFC5289]
        The LwM2M Client SHOULD NOT use the TLS_PSK_WITH_AES_128_CBC_SHA256 ciphersuite as [RFC7457] has
        identified security attacks against these TLS/DTLS ciphersuites.
    ```    

    **TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8**, as defined in [RFC6655](https://www.ietf.org/rfc/rfc6655.txt).
    
    **TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8**, as defined in [RFC7925](https://www.ietf.org/rfc/rfc7925.txt).
    
    **TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256**, as defined in [RFC5289](https://www.ietf.org/rfc/rfc5289.txt).
    
    **~~TLS_PSK_WITH_AES_128_CBC_SHA256~~** ciphersuite as [RFC7457](https://www.ietf.org/rfc/rfc7457.txt).
      
    * about Raw Public Keys LwM2M [5.2.9.2. Raw Public Keys](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=24).
*  X.509 Certificates Keys for secure DTLS ***X.509***  communications:
    
    ```ruby
        If a LwM2M Server supports X.509 Certificate mode it MUST support:
        TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8, as defined in [RFC7251] and mandated in [RFC7925]
        TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256, as defined in [RFC5289]
        The LwM2M Client SHOULD NOT use the TLS_PSK_WITH_AES_128_CBC_SHA256 ciphersuite as [RFC7457] has
        identified security attacks against these TLS/DTLS ciphersuites.
        A LwM2M v1.1 or v1.2 Client MUST support TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 and MAY support additional
        ciphersuites. Ciphersuites SHOULD have ECDSA authentication and SHOULD have ECDHE key exchange.
    ```
    **TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8**, as defined in [RFC7251](https://www.ietf.org/rfc/rfc7251.txt).
       
    * about X.509 Certificates Keys LwM2M [5.2.9.3. X.509 Certificates](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=25).


* about the file format and get help on how to generate an X509 certificate and a publicKey or privateKey [here](https://github.com/eclipse/leshan/wiki/Credential-files-format).
* about `LwM2M DTLS-based Security` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=19).
* about `LwM2M Interface:` **Bootstrap Interface**, **Registration Interface**, <i>Device Management & Service Enablement Interface</i>, <i>Information Reporting Interface (**Observe**)</i>, 
<i>Queue Mode Operation</i>, <i>Registration Update Trigger</i>, <i>Bootstrap Trigger</i> [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=41), 
* about currently five `Security modes` are defined: [namely](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=21).
* about `Credential Types` LwM2M [5.2.9. Credential Types](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=23).
* about `Endpoint Client Name` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=22) or 
[here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=31).
or [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=36).

<a name="link-example-endpoint-names"> </a>
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

### Start transport LwM2M with different security configuration settings

#### Transport LwM2M (configuration in yml)

Thingsboard supports **1 LwM2M server and 1 Bootstrap-Server simultaneously**.

Thingsboard, through its configuration settings, also allows you to choose to work with either one of the servers options, or selectively.

The Security Mode Resource in the Security Object determines what credentials are being used by the LwM2M Client and
the LwM2M Server or LwM2M Bootstrap-Server, respectively.

!!! TO DO.
* about `Description of all parameters` for starting the transport and their default in the **thingsboard.yml** configuration file in the **lwm2m** section can be viewed here.[configurable](/docs/user-guide/install/config/#lwm2m-transport-settings).


* `start` transport LwM2M with `Server` without Bootstrap-Server
    
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
* `start` transport LwM2M with `Server` and `Bootstrap-Server`
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
* `do not start` transport  LwM2M
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:false}"
    ...
```

#### Security servers transport LwM2M (configuration LwM2M server and Bootstrap-Server in yml)
Thingsboard supports **4 LwM2M Security mode simultaneously**.

```json
  {
    "0": "Pre-Shared Key mode",
    "1": "Raw Public Key mode",
    "2": "Certificate mode",
    "3": "NoSec mode"
  }
```

* LwM2M Server **with one of 4 or all security modes** {0...3} and 

* LwM2M Bootstrap-Servers **with one of 4 or all security modes**  {0...3}.

##### `Host`&`Port` for Servers
```ruby
thingsboard/application/src/main/resources/thingsboard.yml
...
  lwm2m:
    ...
    server:
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

<a name="link-4-security-modes"> </a>

##### `4 security` modes  (`NoSec` + `PSK` + `RPK` + `X509`)
*   *NoSec mode (`NoSec`) + Pre-Shared Key mode (`PSK`) + Raw Public Key mode (`RPK`) + Certificate mode (`X509`) communications:*
    * Server security configuration for these modes is always enabled if `X509` mode information is available and free of errors.
        1. `key_store_path_file: "${KEY_STORE_PATH_FILE:}"` loading is not an error or 
        1. Default key_store_path_file: "/usr/share/thingsboard/conf/credentials/serverKeyStore.jks" loading is not an error.
    * You need information about lwm2m server's `certificates` and bootstrap server's certificates (`X509`)       
        ```ruby
        thingsboard/application/src/main/resources/thingsboard.yml
        ...
            lwm2m:
                ...
                secure:
                    # Certificate_x509:
                    key_store_type: "${LWM2M_KEYSTORE_TYPE:JKS}"
                    # Default for key_store_path_file: "/usr/share/thingsboard/conf/credentials/serverKeyStore.jks"
                    key_store_path_file: "${KEY_STORE_PATH_FILE:}"
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
        * Information about parameters of LwM2M `Server`:
        
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
        
        These parameters: ***public_x***, ***public_y*** and ***private_encoded*** You can use for the next Security servers configuration: `3 security` modes if you will only use `3 security` modes<sup>[[link](#link-3-security-modes)]</sup> and copy and paste these lines into the appropriate thingsboard/application/src/main/resources/thingsboard.yml section.
        
        These parameters: 
        * ***Public Key (Hex)***:, ***Private Key (Hex)*** You must use for the security mode `RPK` to create deviceProfile tab Bootstrap and run LwM2M client (config client).
        * ***X509 Certificate (Hex)***: You must use for the security mode `X509` to create deviceProfile You must use to create deviceProfile tab Bootstrap and run LwM2M client (config client).        

<a name="link-3-security-modes"> </a>
   
##### `3 security` modes (`NoSec` + `PSK` + `RPK`)

*   *NoSec mode (`NoSec`) + Pre-Shared Key mode (`PSK`) + Raw Public Key mode (`RPK`) communications:*
    * Server security configuration for these modes is always enabled if `X509` mode information is not available or is in error.  
       1. Default for `key_store_path_file: "/usr/share/thingsboard/conf/credentials/serverKeyStore.jks"` loading is error and
       1. `key_store_path_file: "${KEY_STORE_PATH_FILE:}"` loading is error.
    *  You need information about server's `publicKey`, server's `privateKey`, bootstrap server's `publicKey`  and  bootstrap server's  `privateKey` (`RPK`):
        ```ruby
        thingsboard/application/src/main/resources/thingsboard.yml
        ...
          lwm2m:
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
        * Information about parameters of LwM2M `Server`:
        
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
        * ***Public Key (Hex)***:, ***Private Key (Hex)*** You must use for the security mode `RPK` to create deviceProfile tab Bootstrap and run LwM2M client (config client).
<a name="link-2-security-modes"></a><br><br>
          
##### `2 security` modes (`NoSec` + `PSK`)
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
          lwm2m:
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
        * Information about parameters of LwM2M `Server`:
        
          ```ruby
            - uses [PSK]: serverNoSecureURI : [0.0.0.0:5685], serverSecureURI : [0.0.0.0:5686]
          ```

        * Information about parameters of `BootStrap` Server:
        
          ```ruby
            - Bootstrap Server uses [PSK]: serverNoSecureURI : [0.0.0.0:5687], serverSecureURI : [0.0.0.0:5688]
          ```
 
#### Thingsboard: Device profile LwM2M and Device LwM2M
##### NoSec mode (`NoSec`)
###### LwM2M Server configuration
* about `LwM2M Server configuration` [here](#link-2-security-modes)

###### Device profile LwM2M: create and configuration
```ruby 
    name device profile: "lwm2mProfileNoSec", Transport configuration: "LWM2M"
```
<ol start="1">
<li> <i>LwM2M device</i> <b>create new</b>: follow the instructions step by step:</li>    
  {% include images-gallery.html imageCollection="profileNoSec_create" showListImageTitles="true" %}  
</ol>
<a name="link-profileNoSec-edit-config"></a><br><br>
* *LwM2M device profile configuration*:<sup>[[link](#link-profileNoSec-edit-config)]</sup>    
```ruby 
    name device profile: "lwm2mProfileNoSec", Tab: "Transport configuration"
```
<ol start="2">
<li> <i>wM2M device profile configuration</i> <b>edit start</b>: follow the instructions step by step:</li>    
  {% include images-gallery.html imageCollection="profileNoSec_edit" showListImageTitles="true" %}  
</ol>
<a name="link-profileNoSec-edit-settings-type-start"></a><br><br>
* *LwM2M device profile configuration*: <b>setting type start Client LwM2M</b> after connect:
```ruby 
    config number 1 for start Client: "Only Observe Request to the client after registration (Default)"
    config number 2 for start Client: "Read&Observe Request to the client after registration 
                                       + Request to the client after registration for All resource values"
    config number 3 for start Client: "Read&Observe Request to the client after registration 
                                       + Request to the client after registration to read values only as attributes or telemetry"
```
<ol start="3">
<li> <i>LwM2M device profile configuration</i>: <b>changing type start</b> Client LwM2M after connect:</li>    
   {% include images-gallery.html imageCollection="profileNoSec_edit_typeAfterConnect" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec-edit-settings-observe"></a><br><br>
* *LwM2M device profile configuration*: setting resources <b>observe</b> in instances on LwM2M client objects after connect:

    * [Add a new object](#link-profileNoSec_edit_add_object) to <font color="green">"Object list":</font>
        * If <font color="blue">"Object list"</font> **is empty** or there is **no need object** in "Object list",
           you can <font color="blue">Add a new object</font> to <font color="green">"Object list"</font> in the following ways:      
            * *Select* an item **from** the list of **all the objects**.      
            * *Select* object **by ID object** (input only number ID) **from** the list of **filtered the objects**.      
            * *Select* an object **by context in the object name** (enter any alphabetic or numeric characters from the object name)
              **from** the list of **filtered the objects**.
              
              ```ruby
              After "Add new object", if not "Add observation" to this object, and run "Save":
              - this Object will "not" be saved in the configuration of this "device profile".
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
            - use the {Key Name} "value" as parameter to display the resource values in the attributes or telemetry section as a [key].
              By default, this is the name of the resource, in Camel format. 

            You can change the {Key Name} "value" to your own.
            ```
    * [Edit Bootstrap](#link-profileNoSec_edit_bootstrap) client:
      * **Setting** connection to the **new LwM2M server** on the client after upgrade.
      * **Configuring** (security key, host, port ...) to connect to the **new Bootstrap server** on the client after upgrade.
      * **Configuring** (security key, host, port ...) to connect to the **new LwM2M server** on the client after upgrade.
    * Control [Config (format Json value)](#link-profileNoSec_edit-json-noSec) for Device profile:
    * <font color="blue">"Save":</font> 
        * <font color="blue">"Save"  <font color="black">or <font color="red">"Cancel"</font> after any configuration <b>change</b> to "LWM2M Model".

<a name="link-profileNoSec_edit_add_object"></a><br><br>
<ol start="4">
<li> <i>LwM2M device profile configuration</i>: <font color="blue">Add a new object</font> to <font color="green">"Object list"</font>:</li>    
    {% include images-gallery.html imageCollection="profileNoSec_edit_add_object" showListImageTitles="true" %}
</ol>  

<a name="link-profileNoSec_edit_add_instance"></a><br><br>
<ol start="5">
<li> <i>LwM2M device profile configuration</i>: <font color="blue">Add a new instance</font> to object:</li>    
    {% include images-gallery.html imageCollection="profileNoSec_edit_add_instance" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec_edit_observe"></a><br><br>
<ol start="6">
<li> <font color="blue">Add observation</font> resource in instance:</li>   
      {% include images-gallery.html imageCollection="profileNoSec_edit_observe" showListImageTitles="true" %}
</ol>

<a name="link-profileNoSec_edit_bootstrap"></a><br><br>
<ol start="7">
<li> <font color="blue">Edit Bootstrap</font> client:</li>  
      {% include images-gallery.html imageCollection="profileNoSec_edit_bootstrap" showListImageTitles="true" %}
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
        "lwm2mServer": {
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
      "clientLwM2mSettings": {
        "clientOnlyObserveAfterConnect": true,
        "clientUpdateValueAfterConnect": true
      }
    }
```

###### Device LwM2M: create and configuration

```ruby 
    Example:
    name device: "LwNoSec00000000", 
    Credentials type: "LwM2M Credentials"
    LwM2M Security config key: "LwNoSec00000000"
```

* *S*earching** for **Security configuration** of the LwM2M device and **identifying** the <b><font color="green">LwM2M client</font></b> with the <b><font color="blue">LwM2M device</font></b> in the <b><font color="blue">LwM2M thingsboard transport</font></b> is performed using the <b><font color="red">KEY</font></b> that we have to input to the field: [<b>"LwM2M Security config key"</b> (add/edit Device`s LwM2M credential)](#link-deviceNoSec-create).
    * "LwM2M Security config key" value:
        * for all security modes except PSK,  is [Endpoint Client Name](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=22)
        * for security mode PSK is identity: [The "Public Key or Identity" Resource MUST be used to store the PSK identity of LwM2M Client](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=24)
<a name="link-deviceNoSec-create"></a><br><br>
<ol start="1">
<li> <i>LwM2M device</i> <b>create new</b>: follow the instructions step by step:</li>    
  {% include images-gallery.html imageCollection="deviceNoSec_create" showListImageTitles="true" %}
</ol>

<a name="link-deviceNoSec-security-config"></a><br><br>
<ol start="2">
<li> <i>LwM2M device</i> <b>crate/edit security configuration</b>: follow the instructions:</li>
  {% include images-gallery.html imageCollection="deviceNoSec_create_security_config" showListImageTitles="true" %}
</ol>

<ol start="3">
<li> <i>LwM2M device</i> <b><font color="blue">save</font></b> <b>new/edit</b>:</li>
  {% include images-gallery.html imageCollection="deviceNoSec_create_save" showListImageTitles="true" %}
</ol>

<a name="link-deviceNoSec-security-config-json"></a>
<ol start="4">
<li>  Example <font color="blue">Security Config for Device</font>font> (format Json value, No Security Key mode):</li>
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
        "lwm2mServer": {
          "securityMode": "NO_SEC",
          "clientPublicKeyOrId": "",
          "clientSecretKey": ""
        }
      }
     }
```


##### Pre-Shared Key mode (`PSK`)
* LwM2M Server configuration<sup>[[link](#link-2-security-modes)]</sup>
###### Device profile LwM2M: create and configuration
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

###### Device LwM2M: create and configuration

##### Raw Public Key mode (`RPK`)
* LwM2M Server configuration<sup>[[link](#link-3-security-modes)]</sup>
###### Device profile LwM2M: create and configuration

###### Device LwM2M: create and configuration



###### Device LwM2M: create and configuration

##### Certificate mode (`X509`)
* LwM2M Server configuration<sup>[[link](#link-4-security-modes)]</sup>
###### Device profile LwM2M: create and configuration

###### Device LwM2M: create and configuration
    

##### LwM2M client start and tests

```ruby
        Lightweight Machine to Machine (LwM2M) is an application layer protocol based on CoAP/UDP, 
    and is designed to expose various resources for reading, writing and executing via an LwM2M server in a very lightweight environment.
        Architecturally, LwM2M is a client-server protocol. 
        The IOT device plays the role of the client while the server is the Device Management server where devices register, 
    making them available to be managed. 
    
        The communication between the two is bidirectional; a device reports back information either as a response 
    to a request the server initiates or on a predefined time interval.
```    
* !!! TO DO.
    
    In order to setup one of those tools, you can use instructions in our [Hello World](/docs/getting-started-guides/helloworld/) guide.
  
* !!! TO DO "new client-application".
    
    In order to setup one of those tools, you can use instructions in our [Create and start LwM2M Client](/docs/getting-started-guides/helloworld/) guide.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
