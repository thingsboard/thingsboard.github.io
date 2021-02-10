---
layout: docwithnav
assignees:
- nick
title: LwM2M Device API Reference
description: Supported LwM2M API Reference for IoT Devices

step1:
    0:
        image: /images/user-guide/oauth-2-support/1-create-credentials.png

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
        title: 'input the name of device profile (for example: "lwm2mProfileNoSec").'       
    2:
        image: /images/lwm2m/noSec_profile_create_Step_3.png 
        title: 'go to the "Transport configuration" tab and select the type of device profile.'    
    3:
        image: /images/lwm2m/noSec_profile_create_Step_4.png 
        title: 'save this device profile: click the "Add" button.'    


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

---

* TOC
{:toc}

## Getting started
{% include images-gallery.html imageCollection="step1" preview="false" max-width="100%" %}
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
* about `LwM2M DTLS-based Security` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=19).
* about `LwM2M Interface:` **Bootstrap Interface**, **Registration Interface**, <i>Device Management & Service Enablement Interface</i>, <i>Information Reporting Interface (**Observe**)</i>, 
<i>Queue Mode Operation</i>, <i>Registration Update Trigger</i>, <i>Bootstrap Trigger</i> [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=41), 
* about currently five `Security modes` are defined: [namely](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=21).
* about `Credential Types` LwM2M [5.2.9. Credential Types](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=23).
* about `Endpoint Client Name` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=22) or 
[here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=31).
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

### Configuration and start transport LwM2M

#### LwM2M Thingsboard Security configuration
Thingsboard supports **4 LwM2M Security mode simultaneously**.

```ruby
    - 0: Pre-Shared Key mode + 3: NoSec mode
    - 1: Raw Public Key mode + 3: NoSec mode
    - 2: Certificate mode + 3: NoSec mode
    - 3: NoSec mode (always runs when starting one of the security modes {0, 1, 2})   
```

Thingsboard supports **6 LwM2M servers simultaneously**.

* LwM2M Servers **3, each with one of 4 security modes** {0...3} and 

* LwM2M Bootstrap-Servers **3, each with one of 4 security modes.**

Thingsboard, through its configuration settings, also allows you to choose to work with either one of the servers options, or selectively.

The Security Mode Resource in the Security Object determines what credentials are being used by the LwM2M Client and
the LwM2M Server or LwM2M Bootstrap-Server, respectively. 

#### Start transport LwM2M 
* `start` transport LwM2M with `Server` without Bootstrap-Server
    
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:true}"
            bootstrap:
                enable: "${BOOTSTRAP:false}"
    ...
```
* `start` transport LwM2M with `Server` and `Bootstrap-Server`
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            enabled: "${LWM2M_ENABLED:true}"
            bootstrap:
                enable: "${BOOTSTRAP:true}"
    ...
```
* `do not start` transport  LwM2M
```ruby
    thingsboard/application/src/main/resources/thingsboard.yml
    ...
        lwm2m:
            bootstrap:
                bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
                bind_port_no_sec_psk: "${LWM2M_BIND_PORT_NO_SEC_BS:5691}"
                bind_port_no_sec_rpk: "${LWM2M_BIND_PORT_NO_SEC_BS:5693}"
                bind_port_no_sec_x509: "${LWM2M_BIND_PORT_NO_SEC_BS:5695}"
    ...
```
#### NoSec mode
    * **no security** communications:
```json
    {"3": "NoSec mode"}
```
##### LwM2M Server configuration
LwM2M transport **Server** supports from **1** to **3** servers (and / or):
```ruby
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        server:
            bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
            bind_port_no_sec_psk: "${LWM2M_BIND_PORT_NO_SEC_PSK:5685}"
            bind_port_no_sec_rpk: "${LWM2M_BIND_PORT_NO_SEC_RPK:5687}"
            bind_port_no_sec_x509: "${LWM2M_BIND_PORT_NO_SEC_X509:5689}"
...
```
##### LwM2M Bootstrap-Server configuration
LwM2M transport Bootstrap-Server supports from **1** to **3** servers (and / or).
```ruby
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        server:
            bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
            bind_port_no_sec_psk: "${LWM2M_BIND_PORT_NO_SEC_PSK:5685}"
            bind_port_no_sec_rpk: "${LWM2M_BIND_PORT_NO_SEC_RPK:5687}"
            bind_port_no_sec_x509: "${LWM2M_BIND_PORT_NO_SEC_X509:5689}"
...
```
##### LwM2M Device profile create and configuration

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
    

##### LwM2M Device create and configuration


#### Pre-Shared Key mode
```json
{"0": "Pre-Shared Key mode"}
```
* about Pre-Shared Keys LwM2M [5.2.9.1. Pre-Shared Keys](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=23).
* pre-shared keys for secure DTLS **PSK**  communications:
The "Public Key or Identity" Resource MUST be used to store the PSK identity, described in [RFC7925](https://www.ietf.org/rfc/rfc7925.txt).
Information about the current status of this document, any errata, and how to provide feedback on it may be obtained at  [RFC7925  (TLS/DTLS)](http://www.rfc-editor.org/info/rfc7925).
Clients and Servers MUST support arbitrary PSK Identities of up to 128 bytes, as mandated in [RFC7925](https://www.ietf.org/rfc/rfc7925.txt).

##### LwM2M Server configuration
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        server:
            secure:
                bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
                start_psk: "${START_SERVER_PSK:true}"
                bind_port_psk: "${LWM2M_BIND_PORT_SEC_PSK:5686}"
                private_s: "${LWM2M_SERVER_PRIVATE_S:274671fe40ce937b8a6352cf0a418e8a39e4bf0bb9bf74c910db953c20c73802}"
...
```
After start server (**PSK** communications) and create private key:
```
 Server uses PSK -> private key : 
  security key : [3041020100301306072a8648ce3d020106082a8648ce3d030107042730250201010420274671fe40ce937b8a6352cf0a418e8a39e4bf0bb9bf74c910db953c20c73802] 
```
##### LwM2M Bootstrap-Server configuration:

##### LwM2M Server configuration

##### LwM2M Device create and configuration
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
##### LwM2M Profile create and configuration


#### Raw Public Key mode
* about Raw Public Keys LwM2M [5.2.9.2. Raw Public Keys](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=24).
* private key and certificate for DTLS **RPK** communications:
 ```json
 {"1": "Raw Public Key mode"}
 ```
##### LwM2M Server configuration
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        server:
            secure:
                bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
                start_rpk: "${START_SERVER_RPK:true}"
                bind_port_rpk: "${LWM2M_BIND_PORT_SEC_RPK:5688}"
                public_x: "${LWM2M_SERVER_PUBLIC_X:405354ea8893471d9296afbc8b020a5c6201b0bb25812a53b849d4480fa5f069}"
                public_y: "${LWM2M_SERVER_PUBLIC_Y:30c9237e946a3a1692c1cafaa01a238a077f632c99371348337512363f28212b}"
                private_s: "${LWM2M_SERVER_PRIVATE_S:274671fe40ce937b8a6352cf0a418e8a39e4bf0bb9bf74c910db953c20c73802}"
...
```
After start server (**RPK** communications) and create public and private key:
```
Server uses RPK : 
 Elliptic Curve parameters  : [secp256r1 [NIST P-256, X9.62 prime256v1] (1.2.840.10045.3.1.7)] 
 Public x coord : [405354ea8893471d9296afbc8b020a5c6201b0bb25812a53b849d4480fa5f069] 
 Public y coord : [30c9237e946a3a1692c1cafaa01a238a077f632c99371348337512363f28212b] 
 Public Key (Hex): [3059301306072a8648ce3d020106082a8648ce3d03010703420004405354ea8893471d9296afbc8b020a5c6201b0bb25812a53b849d4480fa5f06930c9237e946a3a1692c1cafaa01a238a077f632c99371348337512363f28212b] 
 Private Key (Hex): [3041020100301306072a8648ce3d020106082a8648ce3d030107042730250201010420274671fe40ce937b8a6352cf0a418e8a39e4bf0bb9bf74c910db953c20c73802]
```
##### LwM2M Bootstrap-Server configuration:

##### LwM2M Server configuration

##### LwM2M Device create and configuration

##### LwM2M Profile create and configuration

#### Certificate mode
* about X.509 Certificates Keys LwM2M [5.2.9.3. X.509 Certificates](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=25).
* **X.509** communications:
  ```json
  {"2": "Certificate mode"}
  ```
 ##### LwM2M Server configuration
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        secure:
            key_store_type: "${LWM2M_KEYSTORE_TYPE:JKS}"
            # Default:  key_store_path_file: "${KEY_STORE_PATH_FILE:/usr/share/thingsboard/conf/credentials/serverKeyStore.jks}"
            key_store_path_file: "${KEY_STORE_PATH_FILE:}"
            key_store_password: "${LWM2M_KEYSTORE_PASSWORD_SERVER:server_ks_password}"
            root_alias: "${LWM2M_SERVER_ROOT_CA:rootca}"
        server:
            secure:
                bind_address: "${LWM2M_BIND_ADDRESS:0.0.0.0}"
                start_rpk: "${START_SERVER_RPK:true}"
                bind_port_rpk: "${LWM2M_BIND_PORT_SEC_RPK:5690}"
                alias: "${LWM2M_KEYSTORE_ALIAS_SERVER:server}"
...
```

After start server (**X509/b> communications) and read certificate from serverKeyStore.jks:

```
Server uses X509 : 
 X509 Certificate (Hex): [308202b93082025ea003020102020828c8227829593afc300a06082a8648ce3d04030230793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b3009060355040613025541301e170d3231303132383131313135385a170d3232303132383131313135385a30793119301706035504030c106c6f63616c686f73742073657276657231143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b30090603550406130255413059301306072a8648ce3d020106082a8648ce3d030107034200048e086784254cce72b85769b0fec08b0c7240dd332f8bedbf7125f69bd0cccb91e05936a296910ece9cfc49de1b4e621bcc185bfc2c9b87d17441f48503374cafa381cf3081cc3081aa0603551d230481a230819f8014158ea631c13353ff398cd1a0d72effabf62f8212a17da47b30793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b300906035504061302554182085ef53a90aa7cdc14301d0603551d0e04160414cdfe3005f5edb0a378e9e917b35bd1091c18c498300a06082a8648ce3d0403020349003046022100835c8a5c8e1fb031aa4e582660c4c5cb176364a7a2c05d93506028b0864f0a87022100bad537b98e46fa56c0d5d9cb8a75c0ff9c83a3c2f2f6dcf1f78cbc5a02813e09] 
 Private Key (Hex): [308193020100301306072a8648ce3d020106082a8648ce3d0301070479307702010104200b7c6f6ed87fdb5ed3465ae0250d2f1327892dbe2aa247ada55789cbebf72f94a00a06082a8648ce3d030107a144034200048e086784254cce72b85769b0fec08b0c7240dd332f8bedbf7125f69bd0cccb91e05936a296910ece9cfc49de1b4e621bcc185bfc2c9b87d17441f48503374caf]
```
##### LwM2M Bootstrap-Server configuration:

##### LwM2M Server configuration

##### LwM2M Device create and configuration

##### LwM2M Profile create and configuration

#### LwM2M Bootstrap-Server configuration:
* start transport LwM2M with Bootstrap-Server
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
         bootstrap:
              enable: "${BOOTSTRAP:true}"
...
```
LwM2M transport Bootstrap-Server supports from **1** to **4** servers (and / or):
##### NoSec mode
* **no security** communications: 
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
    bootstrap:
          bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
          bind_port_no_sec_psk: "${LWM2M_BIND_PORT_NO_SEC_BS:5691}"
          bind_port_no_sec_rpk: "${LWM2M_BIND_PORT_NO_SEC_BS:5693}"
          bind_port_no_sec_x509: "${LWM2M_BIND_PORT_NO_SEC_BS:5695}"
...
```
##### Pre-Shared Key mode
* pre-shared keys for secure DTLS **PSK** communications: 
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        bootstrap:
            secure:
                bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
                    start_psk: "${START_SERVER_PSK_BS:true}"
                    bind_port_psk: "${LWM2M_BIND_PORT_SEC_PSK_BS:5692}"
                    private_s: "${LWM2M_SERVER_PRIVATE_S_BS:9dbdbb073fc63570693a9aaf1013414e261c571f27e27fc6a8c1c2ad9347875a}"
...
```


##### Raw Public Key mode
* private key and certificate for DTLS **RPK** communications:
 
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        bootstrap:
            secure:
                 bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
                 start_rpk: "${START_SERVER_RPK_BS:true}"
                 bind_port_rpk: "${LWM2M_BIND_PORT_SER_RPK_BS:5694}"
                 # Only RPK: Public & Private Key
                 public_x: "${LWM2M_SERVER_PUBLIC_X_BS:993ef2b698c6a9c0c1d8be78b13a9383c0854c7c7c7a504d289b403794648183}"
                 public_y: "${LWM2M_SERVER_PUBLIC_Y_BS:267412d5fc4e5ceb2257cb7fd7f76ebdac2fa9aa100afb162e990074cc0bfaa2}"
                 private_s: "${LWM2M_SERVER_PRIVATE_S_BS:9dbdbb073fc63570693a9aaf1013414e261c571f27e27fc6a8c1c2ad9347875a}"
...
```
After start server (**RPK** communications) and create public and private key:
```
Bootstrap uses RPK : 
 Elliptic Curve parameters  : [secp256r1 [NIST P-256, X9.62 prime256v1] (1.2.840.10045.3.1.7)] 
 Public x coord : [993ef2b698c6a9c0c1d8be78b13a9383c0854c7c7c7a504d289b403794648183] 
 Public y coord : [267412d5fc4e5ceb2257cb7fd7f76ebdac2fa9aa100afb162e990074cc0bfaa2] 
 Public Key (Hex): [3059301306072a8648ce3d020106082a8648ce3d03010703420004993ef2b698c6a9c0c1d8be78b13a9383c0854c7c7c7a504d289b403794648183267412d5fc4e5ceb2257cb7fd7f76ebdac2fa9aa100afb162e990074cc0bfaa2] 
 Private Key (Hex): [3041020100301306072a8648ce3d020106082a8648ce3d0301070427302502010104209dbdbb073fc63570693a9aaf1013414e261c571f27e27fc6a8c1c2ad9347875a]
```
##### Certificate mode
* **X.509** communications:
 
```
thingsboard/application/src/main/resources/thingsboard.yml
...
    lwm2m:
        ...
        secure:
            key_store_type: "${LWM2M_KEYSTORE_TYPE:JKS}"
            # Default     key_store_path_file: "${KEY_STORE_PATH_FILE:/usr/share/thingsboard/conf/credentials/serverKeyStore.jks}"
            key_store_path_file: "${KEY_STORE_PATH_FILE:}"
            key_store_password: "${LWM2M_KEYSTORE_PASSWORD_SERVER:server_ks_password}"
            root_alias: "${LWM2M_SERVER_ROOT_CA:rootca}"
        bootstrap
            secure:
                bind_address: "${LWM2M_BIND_ADDRESS_BS:0.0.0.0}"
                start_x509: "${START_SERVER_X509_BS:true}"
                bind_port_x509: "${LWM2M_BIND_PORT_SEC_X509_BS:5696}"
                # Only Certificate_x509:
                alias: "${LWM2M_KEYSTORE_ALIAS_BOOTSTRAP:bootstrap}"
...
```

After start server (**X509/b> communications) and read certificate from serverKeyStore.jks:

```
BootStrap uses X509 : 
 X509 Certificate (Hex): [308202bb30820261a0030201020208d8248857bfa14dbf300a06082a8648ce3d04030230793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b3009060355040613025541301e170d3231303132383131313135385a170d3232303132383131313135385a307c311c301a06035504030c136c6f63616c686f737420626f6f74737472617031143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b30090603550406130255413059301306072a8648ce3d020106082a8648ce3d030107034200048e1890ce4d9467180bfb36e36e143efeac4090a6b148b206808212fa06721294669d3bdb20b94dc007d3dca99ea80bc33d6c6d5aa73d11b41398866d642295c1a381cf3081cc3081aa0603551d230481a230819f8014158ea631c13353ff398cd1a0d72effabf62f8212a17da47b30793119301706035504030c106c6f63616c686f737420726f6f74434131143012060355040b0c0b5468696e6773626f61726431143012060355040a0c0b5468696e6773626f617264310d300b06035504070c044b7969763114301206035504080c0b4b796976204f626c617374310b300906035504061302554182085ef53a90aa7cdc14301d0603551d0e04160414a3a12d8e61d21c468760adb23051c345e08575e6300a06082a8648ce3d040302034800304502200a5bd0dd60352373c4f62384b462aa79149066514e010e6f2a2ddfedb37961a20221008c21921bb0d186097cfa58dbe29f5c17d9211275f66c28a0c5878321b12b84fd] 
 Private Key (Hex): [308193020100301306072a8648ce3d020106082a8648ce3d030107047930770201010420b5426e3ec61e9848087191d79ecee14cd6426a2ef6263b8d2a031f8ffeb9630fa00a06082a8648ce3d030107a144034200048e1890ce4d9467180bfb36e36e143efeac4090a6b148b206808212fa06721294669d3bdb20b94dc007d3dca99ea80bc33d6c6d5aa73d11b41398866d642295c1]
```

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
