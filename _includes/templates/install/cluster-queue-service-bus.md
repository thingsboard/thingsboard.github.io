{% include templates/install/queue-service-bus-config.md %}

Configure ThingsBoard environment file:

```text
sudo nano .env
```
{: .copy-code}

Check following line:**

```.env
TB_QUEUE_TYPE=service-bus
```
{: .copy-code}

Configure Service Bus environment file for ThingsBoard queue service:

```text
sudo nano queue-service-bus.env
```
{: .copy-code}

Don't forget to replace “YOUR_NAMESPACE_NAME” with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key":**

```.env
TB_QUEUE_TYPE=service-bus
TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME=YOUR_NAMESPACE_NAME
TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME=YOUR_SAS_KEY_NAME
TB_QUEUE_SERVICE_BUS_SAS_KEY=YOUR_SAS_KEY
```