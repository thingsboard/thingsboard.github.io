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
        title: '1. start create profile LwM2M.'    
    1:
        image: /images/lwm2m/noSec_profile_create_Step_2.png 
        title: '1. input the name of device profile (for example: "lwm2mProfileNoSec").'       
    2:
        image: /images/lwm2m/noSec_profile_create_Step_3.png 
        title: '1. go to the "Transport configuration" tab and select the type of device profile.'    
    3:
        image: /images/lwm2m/noSec_profile_create_Step_4.png 
        title: '1. save this device profile: click the "Add" button.'    


profileNoSec_edit:
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_1.png 
        title: 'Select with the name of the device profile to change the configuration.'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_2_3.png 
        title: 'Select tab "Transport configuration" and click button "Toggle edit mode".'       

profileNoSec_edit_typeAfterConnect:      
    1:
        image: /images/lwm2m/noSec_profile_edit_Step_3_1.png 
        title: 'configuration number 1 selected.'    
    2:
        image: /images/lwm2m/noSec_profile_edit_Step_3_2.png 
        title: 'configuration number 2 selected.'       
    3:
        image: /images/lwm2m/noSec_profile_edit_Step_3_3.png 
        title: 'configuration number 3 selected.'    

step1:
    0:
        image: /images/user-guide/oauth-2-support/1-create-credentials.png


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
#### Start transport LwM2M (configuration in yml)

Thingsboard supports **1 LwM2M server and 1 Bootstrap-Server simultaneously**.

* `start` transport LwM2M with `Server` without Bootstrap-Server
    
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:true}"
            ...
            server:
                id: "${LWM2M_SERVER_ID:123}"
                bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
                bind_port_no_sec: "${LWM2M_BIND_PORT_NO_SEC:5685}"
                secure:
                    bind_address_security: "${LWM2M_BIND_ADDRESS_SECURITY:0.0.0.0}"
                    bind_port_security: "${LWM2M_BIND_PORT_SECURITY:5686}" 
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
            server:
                id: "${LWM2M_SERVER_ID:123}"
                bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
                bind_port_no_sec: "${LWM2M_BIND_PORT_NO_SEC:5685}"
                secure:
                    bind_address_security: "${LWM2M_BIND_ADDRESS_SECURITY:0.0.0.0}"
                    bind_port_security: "${LWM2M_BIND_PORT_SECURITY:5686}" 
            ...
            bootstrap:
                enable: "${LWM2M_BOOTSTRAP_ENABLED:true}"
                id: "${LWM2M_SERVER_ID:111}"
                bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
                bind_port_no_sec: "${LWM2M_BIND_PORT_NO_SEC_BS:5687}"
                secure:
                    bind_address_security: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
                    bind_port_security: "${LWM2M_BIND_PORT_SEC_BS:5688}"
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

Thingsboard, through its configuration settings, also allows you to choose to work with either one of the servers options, or selectively.

The Security Mode Resource in the Security Object determines what credentials are being used by the LwM2M Client and
the LwM2M Server or LwM2M Bootstrap-Server, respectively. 

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

<a name="link-2-security-modes"> </a>   

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

#### Device and Device profile LwM2M (common config for all LwM2M Security mode)
##### LwM2M Device profile: create and configuration (`NoSec`)

* <a name="link-create-profileNoSec"></a>To create a new LwM2M device profile, follow the instructions 
    step by step:<sup>[[link](#link-create-profileNoSec)]</sup>
```ruby 
    name device profile: "lwm2mProfileNoSec", Transport configuration: "LWM2M"
```    
    {% include images-gallery.html imageCollection="profileNoSec_create" showListImageTitles="true" %}

    
* <a name="link-config-profileNoSec"></a>Configuration LwM2M device profile: start 
    <sup>[[link](#link-config-profileNoSec)]</sup>
```ruby 
    name device profile: "lwm2mProfileNoSec", Tab: "Transport configuration"
```    
    {% include images-gallery.html imageCollection="profileNoSec_edit" showListImageTitles="true" %} 
       
* <a name="link-config-profileNoSec_typeStart"></a>Configuration LwM2M device profile: changing type start after connect Client LwM2M 
    <sup>[[link](#link-config-profileNoSec_typeStart)]</sup>
```ruby 
    config number 1 for start Client: "Only Observe Request to the client after registration (Default)"
    config number 2 for start Client: "Read&Observe Request to the client after registration 
                                       + Request to the client after registration for All resource values"
    config number 3 for start Client: "Read&Observe Request to the client after registration 
                                       + Request to the client after registration to read values only as attributes or telemetry"
```    
    {% include images-gallery.html imageCollection="profileNoSec_edit_typeAfterConnect" showListImageTitles="true" %}
    
##### LwM2M Device: create and configuration (`NoSec`)

* <a name="link-create-deviceNoSec"></a>To create a new LwM2M device profile, follow the instructions 
    step by step:<sup>[[link](#link-create-deviceNoSec)]</sup>
```ruby 
    name device profile: "lwm2mProfileNoSec", Transport configuration: "LWM2M"
```    
    {% include images-gallery.html imageCollection="profileNoSec_create" showListImageTitles="true" %}

    
* <a name="link-config-deviceNoSec"></a>Configuration LwM2M device profile: start 
    <sup>[[link](#link-config-deviceNoSec)]</sup>
```ruby 
    name device profile: "lwm2mProfileNoSec", Tab: "Transport configuration"
```    
    {% include images-gallery.html imageCollection="profileNoSec_edit" showListImageTitles="true" %} 
       
* <a name="link-config-deviceNoSec_typeStart"></a>Configuration LwM2M device profile: changing type start after connect Client LwM2M 
    <sup>[[link](#link-config-deviceNoSec_typeStart)]</sup>
```ruby 
    config number 1 for start Client: "Only Observe Request to the client after registration (Default)"
    config number 2 for start Client: "Read&Observe Request to the client after registration 
                                       + Request to the client after registration for All resource values"
    config number 3 for start Client: "Read&Observe Request to the client after registration 
                                       + Request to the client after registration to read values only as attributes or telemetry"
```    
    {% include images-gallery.html imageCollection="profileNoSec_edit_typeAfterConnect" showListImageTitles="true" %}
    

#### Certificate mode (`X509`)
* LwM2M Server configuration<sup>[[link](#link-4-security-modes)]</sup>
* create device 
    
#### Raw Public Key mode (`RPK`)
* LwM2M Server configuration<sup>[[link](#link-3-security-modes)]</sup>
* create device 

    
#### Pre-Shared Key mode (`PSK`)
* LwM2M Server configuration<sup>[[link](#link-2-security-modes)]</sup>
* create device 
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
    
#### NoSec mode (`NoSec`)
* LwM2M Server configuration<sup>[[link](#link-2-security-modes)]</sup>
* create device 




#### LwM2M client
##### Device for LwM2M client on thingsboard`s Server/Bootstrap-Server

Lightweight Machine to Machine (LwM2M) is an application layer protocol based on CoAP/UDP, and is designed to expose various resources for reading, writing and executing via an LwM2M server in a very lightweight environment.

Architecturally, LwM2M is a client-server protocol. The IOT device plays the role of the client while the server is the Device Management server where devices register, making them available to be managed. The communication between the two is bidirectional; a device reports back information either as a response to a request the server initiates or on a predefined time interval.

!!! TO DO.
In order to setup one of those tools, you can use instructions in our [Hello World](/docs/getting-started-guides/helloworld/) guide.


##### LwM2M client start and tests

!!! TO "DO new client-application".

In order to setup one of those tools, you can use instructions in our [Create and start LwM2M Client](/docs/getting-started-guides/helloworld/) guide.


## Telemetry upload API

In order to publish telemetry data to ThingsBoard server node, send PUBLISH message to the following topic:
 
```
v1/devices/me/telemetry
```

The simplest supported data formats are:

```json
{"key1":"value1", "key2":"value2"}
```

or

```json
[{"key1":"value1"}, {"key2":"value2"}]
```

**Please note** that in this case, the server-side timestamp will be assigned to uploaded data!

In case your device is able to get the client-side timestamp, you can use following format:


```json
{"ts":1451649600512, "values":{"key1":"value1", "key2":"value2"}}
```

In the example above, we assume that "1451649600512" is a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) with milliseconds precision.
For example, the value '1451649600512' corresponds to 'Fri, 01 Jan 2016 12:00:00.512 GMT'

{% capture tabspec %}mqtt-telemetry-upload
A,Mosquitto,shell,resources/mosquitto-telemetry.sh,/docs/reference/resources/mosquitto-telemetry.sh
B,MQTT.js,shell,resources/mqtt-js-telemetry.sh,/docs/reference/resources/mqtt-js-telemetry.sh
C,telemetry-data-as-object.json,json,resources/telemetry-data-as-object.json,/docs/reference/resources/telemetry-data-as-object.json
D,telemetry-data-as-array.json,json,resources/telemetry-data-as-array.json,/docs/reference/resources/telemetry-data-as-array.json
E,telemetry-data-with-ts.json,json,resources/telemetry-data-with-ts.json,/docs/reference/resources/telemetry-data-with-ts.json{% endcapture %}
{% include tabs.html %}

 
## Attributes API

ThingsBoard attributes API allows devices to

* Upload [client-side](/docs/user-guide/attributes/#attribute-types) device attributes to the server.
* Request [client-side](/docs/user-guide/attributes/#attribute-types) and [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
* Subscribe to [shared](/docs/user-guide/attributes/#attribute-types) device attributes from the server.
 
##### Publish attribute update to the server

In order to publish client-side device attributes to ThingsBoard server node, send PUBLISH message to the following topic:
```
v1/devices/me/attributes
```

{% capture tabspec %}mqtt-attributes-upload
A,Mosquitto,shell,resources/mosquitto-attributes-publish.sh,/docs/reference/resources/mosquitto-attributes-publish.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-publish.sh,/docs/reference/resources/mqtt-js-attributes-publish.sh
C,new-attributes-values.json,json,resources/new-attributes-values.json,/docs/reference/resources/new-attributes-values.json{% endcapture %}
{% include tabs.html %}

##### Request attribute values from the server

In order to request client-side or shared device attributes to ThingsBoard server node, send PUBLISH message to the following topic:

```
v1/devices/me/attributes/request/$request_id
```

where **$request_id** is your integer request identifier.
Before sending PUBLISH message with the request, client need to subscribe to 

```
v1/devices/me/attributes/response/+
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% capture tabspec %}mqtt-attributes-request
A,MQTT.js,shell,resources/mqtt-js-attributes-request.sh,/docs/reference/resources/mqtt-js-attributes-request.sh
B,mqtt-js-attributes-request.js,javascript,resources/mqtt-js-attributes-request.js,/docs/reference/resources/mqtt-js-attributes-request.js
C,Result,json,resources/attributes-response.json,/docs/reference/resources/attributes-response.json{% endcapture %}
{% include tabs.html %}

**Please note**, the intersection of client-side and shared device attribute keys is a bad practice! 
However, it is still possible to have same keys for client, shared or even server-side attributes.

##### Subscribe to attribute updates from the server

In order to subscribe to shared device attribute changes, send SUBSCRIBE message to the following topic:

```
v1/devices/me/attributes
```

When a shared attribute is changed by one of the server-side components (such as the REST API or the Rule Chain), the client will receive the following update: 

```json
{"key1":"value1"}
```

{% capture tabspec %}mqtt-attributes-subscribe
A,Mosquitto,shell,resources/mosquitto-attributes-subscribe.sh,/docs/reference/resources/mosquitto-attributes-subscribe.sh
B,MQTT.js,shell,resources/mqtt-js-attributes-subscribe.sh,/docs/reference/resources/mqtt-js-attributes-subscribe.sh{% endcapture %}
{% include tabs.html %}

## RPC API

### Server-side RPC

In order to subscribe to RPC commands from the server, send SUBSCRIBE message to the following topic:

```
v1/devices/me/rpc/request/+
```

Once subscribed, the client will receive individual commands as a PUBLISH message to the corresponding topic:

```
v1/devices/me/rpc/request/$request_id
```

where **$request_id** is an integer request identifier.

The client should publish the response to the following topic:

```
v1/devices/me/rpc/response/$request_id
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% capture tabspec %}mqtt-rpc-from-server
A,MQTT.js,shell,resources/mqtt-js-rpc-from-server.sh,/docs/reference/resources/mqtt-js-rpc-from-server.sh
B,mqtt-js-rpc-from-server.js,javascript,resources/mqtt-js-rpc-from-server.js,/docs/reference/resources/mqtt-js-rpc-from-server.js{% endcapture %}  
{% include tabs.html %}

### Client-side RPC

In order to send RPC commands to server, send PUBLISH message to the following topic:

```
v1/devices/me/rpc/request/$request_id
```

where **$request_id** is an integer request identifier.
The response from server will be published to the following topic:

```
v1/devices/me/rpc/response/$request_id
```

The following example is written in javascript and is based on mqtt.js. 
Pure command-line examples are not available because subscribe and publish need to happen in the same mqtt session.

{% capture tabspec %}mqtt-rpc-from-client
A,MQTT.js,shell,resources/mqtt-js-rpc-from-client.sh,/docs/reference/resources/mqtt-js-rpc-from-client.sh
B,mqtt-js-rpc-from-client.js,javascript,resources/mqtt-js-rpc-from-client.js,/docs/reference/resources/mqtt-js-rpc-from-client.js{% endcapture %}  
{% include tabs.html %}

## Claiming devices

Please see the corresponding article to get more information about the [Claiming devices](/docs/user-guide/claiming-devices) feature.

In order to initiate claiming device, send PUBLISH message to the following topic:

```
v1/devices/me/claim
```

The supported data format is:

```json
{"secretKey":"value", "durationMs":60000}
```

**Please note** that the above fields are optional. In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

## Device provisioning

Please see the corresponding article to get more information about the [Device provisioning](/docs/user-guide/device-provisioning) feature.  

In order to initiate device provisioning, send Provisioning request to the following topic:
 
```
/provision
```

Also, you should set **username** or **clientId** to *provision*. 

The supported data format is:

```json
{
  "deviceName": "DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw"
}
```
  
## Protocol customization

MQTT transport can be fully customized for specific use-case by changing the corresponding [module](https://github.com/thingsboard/thingsboard/tree/master/transport/mqtt).


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}

```ruby
  # Some Rack handlers (Thin, Rainbows!) implement an extended body object protocol, however,
  # some middleware (namely Rack::Lint) will break it by not mirroring the methods in question.
  # This middleware will detect an extended body object and will make sure it reaches the
  # handler directly. We do this here, so our middleware and middleware set up by the app will
  # still be able to run.
  class ExtendedRack < Struct.new(:app)
    def call(env)
      result, callback = app.call(env), env['async.callback']
      return result unless callback and async?(*result)
      after_response { callback.call result }
      setup_close(env, *result)
      throw :async
    end
```
{% include images-gallery.html imageCollection="step1" preview="false" max-width="100%" %}
