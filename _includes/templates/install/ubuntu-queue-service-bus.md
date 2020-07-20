{% include templates/install/queue-service-bus-config.md %}

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don't forget to replace “YOUR_NAMESPACE_NAME” with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key":**

```bash
export TB_QUEUE_TYPE=service-bus
export TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME=YOUR_NAMESPACE_NAME
export TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME=YOUR_SAS_KEY_NAME
export TB_QUEUE_SERVICE_BUS_SAS_KEY=YOUR_SAS_KEY

# These params affect the number of requests per second from each partitions per each queue!!!
export TB_QUEUE_TRANSPORT_REQUEST_POLL_INTERVAL_MS=1000
export TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS=1000
export TB_QUEUE_CORE_POLL_INTERVAL_MS=1000
export REMOTE_JS_RESPONSE_POLL_INTERVAL_MS=1000
export TB_QUEUE_RULE_ENGINE_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_MAIN_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_HP_POLL_INTERVAL_MS=1000
export TB_QUEUE_RE_SQ_POLL_INTERVAL_MS=1000
export TB_QUEUE_TRANSPORT_NOTIFICATIONS_POLL_INTERVAL_MS=1000
```
{: .copy-code}
