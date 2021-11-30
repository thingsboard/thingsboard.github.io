
* TOC
{:toc}

### SNMP Basics

Simple Network Management Protocol (SNMP) is an Internet Standard Protocol used for collecting information from managed
devices and for sending information to modify the behavior of these devices.

SNMP architecture is made up of SNMP managers and SNMP agents. SNMP agents are programs that run on devices that are
connected to the network. SNMP agents expose management data on managed systems as variables. The variables accessible
via SNMP are organized in hierarchies. These hierarchies are described as a management information base (MIB). MIBs
describe the structure of a management data of a device subsystem; they use a hierarchical namespace containing object
identifiers (OID). Each OID identifies a variable that can be read or set via SNMP. Agent takes information from the MIB
and hands it over to the SNMP manager once a query has been made. SNMP manager is a system that has responsibility of
communication with connected SNMP agents. SNMP manager queries agents, receives responses from agents and sets agent
variables. ThingsBoard SNMP transport acts as a manager. Relationship between a manager and an agent is based on
messages and commands. Types of commands used by the transport are "GET" and "SET". Each SNMP message contains a
protocol data unit (PDU).

SNMP operates in the application layer of the Internet protocol suite. SNMP messages may be transported via User
Datagram Protocol (UDP) or Transmission Control Protocol (TCP): you may configure this via `SNMP_UNDERLYING_PROTOCOL`
environment variable.

Three significant versions of SNMP have been developed and deployed. SNMP v1 is the original version of the protocol.
More recent versions, SNMP v2c and SNMP v3, feature improvements in performance, flexibility and security. ThingsBoard
supports them all.

### Device profile configuring

Foremost, you should configure SNMP device profile: specify request timeout (timeout in milliseconds before a confirmed
request is resent or timed out), number of retries (to be performed before a request is timed out), and the main part -
communication configs.

Here is an example of a device profile configuration:

{% include images-gallery.html imageCollection="deviceProfileConfiguring1" %}

We will talk about possible types of the configs a bit later, after taking a look at SNMP device
configuring.

### Device configuring

Regardless of the version of your SNMP device, you have to specify a host and a port.

As for security in SNMP, SNMP v1 and v2c send a password (community string) over the network in clear-text, and SNMP v3
supports authentication and data encryption.

So, for versions 1 and 2c you must set a community string. Configuration example for such SNMP devices:

{% include images-gallery.html imageCollection="deviceConfiguring1" %}

Let's move further to the third version of SNMP. ThingsBoard uses "authPriv" security level, which enables both
authentication and encryption. Used security model is USM (User-based Security Model).

There are following properties to configure for your SNMP v3 device (in addition to host and port):

- username
- security name
- context name
- authentication protocol (which is basically a name of a hash-function used to hash an authentication passphrase;
  supported ones are SHA-1, SHA-224/256/384/512 and MD5)
- authentication passphrase
- privacy protocol (algorithm for data encryption; DES (CBC mode) and AES-128/192/256 are supported)
- privacy passphrase
- engine id

Here is a sample of a config for version 3:

{% include images-gallery.html imageCollection="deviceConfiguring2" %}

### Telemetry

As was mentioned, there should be certain communication configs in your SNMP device profile configuration, and for
telemetry querying you need to have one as well. For this type of config you have to specify some mappings and querying
frequency. Mappings are needed so that we can map a received value for the OID to specific telemetry key after parsing
it as a specified data type.

Here is an example:

{% include images-gallery.html imageCollection="deviceProfileConfiguring2" %}

By the way, supported data types are: `LONG`, `DOUBLE`, `BOOLEAN` and `STRING` (for SNMP, a received variable value with
configured data type of `JSON` will be treated as a regular string).

For this and other querying configs a method type that is being used is `GET`.

### Attributes

#### Client-side attributes

To set up querying of an SNMP device attributes you may add another communication config. This config, the same as for
telemetry, should contain mappings and required querying frequency.

A sample:

{% include images-gallery.html imageCollection="deviceProfileConfiguring3" %}

#### Shared attributes

In order to make your SNMP device receive updates of some shared attributes, you may add another communication config to
your SNMP device profile:

{% include images-gallery.html imageCollection="deviceProfileConfiguring4" %}

For this one you only need to configure mappings: to which OID an updated shared attribute's value will be set. In this
case, a key in the mapping is the name of a shared attribute. By the way, the used SNMP method is `SET`.

For this type of config (as well as for another ones with a `SET` type of used SNMP method) a data type is needed to
decide what type of SNMP variable to send in a PDU. We use `INTEGER` (or `Integer32`, a signed 32-bit integer)
for `LONG` data type, and `OCTET STRING` for all other data types.

### Server-side RPC

To send custom SNMP request you may use RPC feature. First, you should configure some key mappings in a device profile
to use in RPC command:

{% include images-gallery.html imageCollection="deviceProfileConfiguring5" %}

After that, we are able to use configured mappings' keys in our RPC commands:

```json
{
  "method": "GET",
  "params": {
    "key": "systemInfo"
  }
}
```

As you see, for the "method" field you must specify an SNMP method type: `GET` or `SET`. For this one, we would send a
"GET" SNMP request to OID "1.2.3.0.9.2.8.1" and parse a response as a string, and then route it to a next Rule Node in
following format:

```json
{
  "systemInfo": "SNMP device"
}
```

Here is an example for "SET" RPC command:

```json
{
  "method": "SET",
  "params": {
    "key": "lastUpdateTime",
    "value": "12901200312"
  }
}
```

In this case, we will send a "SET" SNMP request to the configured in the mappings OID ("1.2.3.0.6.4.3.1") with the value
of "12901200312" as OCTET STRING.

Notice, that for "SET" request you have to specify some value in your RPC command.

### Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
