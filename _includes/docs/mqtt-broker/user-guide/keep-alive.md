
* TOC
{:toc}

The **Keep Alive** feature is designed to ensure that client remains connected to the broker and maintains an active session, even if no messages are being exchanged for a period of time. 
Think of it as a heartbeat that reassures the broker that the client is still alive and functioning properly. 

The Keep Alive interval is expressed in seconds and can range from 0 (Keep Alive mechanism is off) to a maximum of 65535 seconds (18 hours, 12 minutes, and 15 seconds).

The broker will **close connection** in case there will be no MQTT control packet sent from the client **within one and a half times the Keep Alive** time period.

## Half-Open TCP Connections in MQTT

A significant issue in networked systems, including MQTT, is the occurrence of half-open TCP connections. 
This happens when the network connection between the client and broker is disrupted (e.g., due to a network failure), and one party (usually the broker) is unaware that the connection has been lost. 
In this scenario, the client might be disconnected, but the broker still considers the connection active, creating a half-open state.

The Keep Alive mechanism helps mitigate the problem of half-open TCP connections. 
By enforcing periodic communication between the client and broker, it ensures that even if no data messages are being sent, 
the connection status is constantly checked. 
If the broker does not receive a keep-alive signal (like a PINGREQ) within the expected interval, 
it can correctly assume that the client is no longer reachable, preventing the connection from remaining in a half-open state indefinitely.

## How Keep Alive works

The Keep Alive interval is set when a client connects to the broker, in the `CONNECT` packet.

If the Keep Alive interval **is set to 60 seconds**, the client must  send any MQTT control packet (e.g., a `PINGREQ`, `PUBLISH`, `SUBSCRIBE`, etc.) within **90 seconds** (60 * 1.5) to inform the broker that it’s still connected. 

If the client fails to do so, the broker assumes the client is disconnected, and it will **terminate the connection** and trigger a **[Last Will message](/docs/{{docsPrefix}}mqtt-broker/user-guide/last-will)** (if set) to inform about unexpected disconnection.

Normally, when the client sends a `PINGREQ` to maintain the connection, the broker responds with a `PINGRESP`, confirming that the connection is still alive and the client is functioning properly. 
This exchange ensures the connection remains healthy even when no data is being transmitted.

In TBMQ, the `MQTT_KEEP_ALIVE_MONITORING_DELAY_MS` environment variable defines the interval at which the broker checks for inactive client connections. 
By default, this check occurs every second. If a dead connection is detected, the broker terminates the connection, providing "KEEP_ALIVE_TIMEOUT" as the reason.

## When to turn off Keep Alive

Setting the **Keep Alive interval to 0** means that the feature is not working and there is no Keep Alive timeout for the connection. 
Basically, the client is telling the broker that it will not send `PINGREQ` packets and doesn’t expect the broker to monitor the connection for inactivity.

For example, an IoT device that is always sending data at a regular rate might not need a Keep Alive check since the frequent data transmission inherently keeps the connection active. 

Key implications of disabling Keep Alive:

* **No periodic ping**. The client won’t send any periodic `PINGREQ` packets, and the broker won’t expect them. The connection is considered always active unless explicitly disconnected. 
* **Risk of undetected disconnections**. Since the broker does not monitor the client’s activity, if the client disconnects unexpectedly (due to a network failure or other issues), the broker won’t detect it until it tries to send a message to the client.

{% capture difference %}
We generally recommend keeping the Keep Alive mechanism enabled. Only consider turning it off if absolutely necessary and you fully understand the implications.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## When to use Keep Alive

The Keep Alive feature functions much like a check-in system where one party regularly confirms their presence to prevent others from assuming something has gone wrong.
If the client fails to send these keep-alive signals within the expected interval, the broker considers it disconnected and may trigger to terminate connection or to publish a Last Will message.

In IoT, the Keep Alive interval is critical for maintaining reliable and consistent connections, especially in situations where network stability is a concern or devices may not always be actively transmitting data. 
For example:

* **Smart home**. Devices like thermostats or smart lights might not be constantly sending data. However, by using the Keep Alive feature, they can periodically send a signal to the broker to confirm they’re still connected, even during idle times.
* **Smart farming**. Sensors that monitor weather conditions may not constantly transmit data but will still periodically send keep-alive pings to confirm they are still functioning. If a sensor fails to do so, the broker may alert the farmer, allowing for timely intervention before any important data is lost.

## Client Take-Over in MQTT

Client Take-Over refers to the scenario where two clients with the same **clientId** attempt to connect to the broker simultaneously. 
According to the MQTT protocol, the broker supports only one active connection per **clientId**. 
If a new client connects using the same **clientId** as an existing session, the broker will terminate the connection of the old client and allow the new client to take over the session. 
This mechanism ensures that only one instance of a client is active at any given time, which helps avoid conflicting sessions or duplicate messages.

This take-over process also plays a role in maintaining session continuity and handling situations where a device may reconnect after a network failure. 
If the original client has been disconnected without the broker knowing (e.g., due to a half-open TCP connection), 
the new connection will forcefully close the outdated session and establish a fresh one.
