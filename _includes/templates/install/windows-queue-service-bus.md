{% include templates/install/queue-service-bus-config.md %}

##### ThingsBoard Configuration

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

and locate "queue:" block. Make sure the queue type is "service-bus", and don't forget to replace "YOUR_NAMESPACE_NAME" with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials. Note: "YOUR_SAS_KEY_NAME" it is "SAS Policy", "YOUR_SAS_KEY" it is "SAS Policy Primary Key":**

```yml
queue:
  type: "${TB_QUEUE_TYPE:service-bus}"
...
  service_bus:
    namespace_name: "${TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME:YOUR_NAMESPACE_NAME}"
    sas_key_name: "${TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME:YOUR_SAS_KEY_NAME}"
    sas_key: "${TB_QUEUE_SERVICE_BUS_SAS_KEY:YOUR_SAS_KEY}"
    max_messages: "${TB_QUEUE_SERVICE_BUS_MAX_MESSAGES:1000}"
```
