Install mqtt client for **Ubuntu**:

```bash
sudo apt-get install mosquitto-clients
```
{: .copy-code}

Install cURL for **macOS**:

```bash
brew install mosquitto-clients
```
{: .copy-code}


Replace $HOST_NAME and $ACCESS_TOKEN with corresponding values.

```bash
mosquitto_pub -d -q 1 -h "$HOST_NAME" -p "1883" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

For example, $HOST_NAME reference live demo server, access token is ABC123:

```bash
mosquitto_pub -d -q 1 -h "demo.thingsboard.io" -p "1883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":25} 
```
{: .copy-code}

For example, $HOST_NAME reference your local installation, access token is ABC123:

```bash
mosquitto_pub -d -q 1 -h "localhost" -p "1883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":25}
```
{: .copy-code}

Successful output should look similar to this one:

```text
Client mosqpub|xxx sending CONNECT
Client mosqpub|xxx received CONNACK
Client mosqpub|xxx sending PUBLISH (d0, q1, r0, m1, 'v1/devices/me/telemetry', ... (16 bytes))
Client mosqpub|xxx received PUBACK (Mid: 1)
Client mosqpub|xxx sending DISCONNECT
```

**Note:** Since ThingsBoard 3.2, you are able to use basic MQTT credentials (combination of client id, user name and password ) 
and customize **topic names** and **payload type** using Device Profile. See more info [here](/docs/user-guide/device-profiles/#mqtt-transport-type).

<br/>
<br/>
  