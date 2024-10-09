
* TOC
{:toc}

The **Keep Alive** feature is designed to ensure that client remains connected to the broker and maintains an active session, even if no messages are being exchanged for a period of time. 
Think of it as a heartbeat that reassures the broker that the client is still alive and functioning properly. 

The minimum value is 0 which means the Keep Alive mechanism is off, the maximum - 65535 seconds (~18h).

The broker will **close connection** in case there will be no MQTT control packet sent from the client **within one and a half times the Keep Alive** time period.

### How Keep Alive works
The **Keep Alive** interval is set when a client connects to the broker, in the `CONNECT` packet.

If the Keep Alive interval **is set to 60 seconds**, the client must  send any MQTT control packet (e.g., a `PINGREQ`, `PUBLISH`, or `SUBSCRIBE`) within **90 seconds** (60 * 1.5) to inform the broker that it’s still connected. 

If the client fails to do so, the broker assumes the client is disconnected, and it will **terminate the connection** and trigger a **[Last Will message](/docs/mqtt-broker/user-guide/last-will)** (if set) to inform about unexpected disconnection.

### When to turn off Keep Alive
Setting the **Keep Alive interval to 0** means that the feature is not working and there is no Keep Alive timeout for the connection. 
Basically, the client is telling the broker that it will not send `PINGREQ` packets and doesn’t expect the broker to monitor the connection for inactivity.

For example, an IoT device that is always sending data at a regular rate might not need a Keep Alive check since the frequent data transmission inherently keeps the connection active. 

Key implications of disabling Keep Alive:
* **No periodic ping**. The client won’t send any periodic `PINGREQ` packets, and the broker won’t expect them. The connection is considered always active unless explicitly disconnected. 
* **Risk of undetected disconnections**. Since the broker does not monitor the client’s activity, if the client disconnects unexpectedly (due to a network failure or other issues), the broker won’t detect it until it tries to send a message to the client.

### When to use Keep Alive
The Keep Alive feature functions much like a check-in system where one party regularly confirms their presence to prevent others from assuming something has gone wrong.
If the client fails to send these keep-alive signals within the expected interval, the broker considers it disconnected and may trigger to terminate connection or to publish a Last Will message.

In IoT, the Keep Alive interval is critical for maintaining reliable and consistent connections, especially in situations where network stability is a concern or devices may not always be actively transmitting data. For example:
* **Smart home**. Devices like thermostats or smart lights might not be constantly sending data. However, by using the Keep Alive feature, they can periodically send a signal to the broker to confirm they’re still connected, even during idle times.
* **Smart farming**. Sensors that monitor weather conditions may not constantly transmit data but will still periodically send keep-alive pings to confirm they are still functioning. If a sensor fails to do so, the broker may alert the farmer, allowing for timely intervention before any important data is lost.
