ThingsBoard's internal MQTT client includes a retransmission mechanism designed to improve reliability for message types that require acknowledgment.  
This mechanism applies specifically to the following MQTT message types:
- **PUBLISH** (only for QoS 1 or 2)
- **SUBSCRIBE**
- **UNSUBSCRIBE**
- **PUBREL** (only for QoS 2)

When one of these messages is sent, the client waits for an acknowledgment within a configurable delay period.  
If no acknowledgment is received, the message is retransmitted. The delay between retransmissions follows an **exponential backoff** strategy, starting from an initial delay and doubling with each attempt.  
A **jitter factor** introduces random variance into the delay to help prevent synchronized retries.

For example, if the retransmission configuration is set to **three attempts**, with an **initial delay of 5,000 ms** and a **jitter factor of 0.15**, the retransmission attempts would be scheduled at approximately **5,000 ms**, **10,000 ms**, and **20,000 ms**, each adjusted by ±15% jitter.  
If no acknowledgment is received after the final attempt, the system waits through the next scheduled delay—based on exponential backoff with jitter—before finally considering the message **undeliverable and dropping it**.

{% if include.show-yml-config == true %}
You can configure retransmission parameters globally in the `thingsboard.yml` file. These settings affect **all MQTT clients** on the platform:

```yaml
mqtt:
  client:
    retransmission:
      max_attempts: "${TB_MQTT_CLIENT_RETRANSMISSION_MAX_ATTEMPTS:3}"
      initial_delay_millis: "${TB_MQTT_CLIENT_RETRANSMISSION_INITIAL_DELAY_MILLIS:5000}"
      jitter_factor: "${TB_MQTT_CLIENT_RETRANSMISSION_JITTER_FACTOR:0.15}"
```
{% endif %}
