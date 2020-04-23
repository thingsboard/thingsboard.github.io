#### Azure Service Bus Configuration

To access Azure Service Bus, you first need to create an [Azure account](https://azure.microsoft.com/).

To work with Service Bus service you will need to create a Service Bus Namespace using [this instruction](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-create-namespace-portal).

Create Shared Access Signature using [this instruction](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-create-namespace-portal).

You will need to change following Queue type parameter in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
  type: "${TB_QUEUE_TYPE:service-bus}"
```

Add your credentials in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml).  Don’t forget to replace “YOUR_NAMESPACE_NAME”, "YOUR_SAS_KEY_NAME" and "YOUR_SAS_KEY" with your **real Service Bus credentials.**

```bash
queue:
...
  service_bus:
    namespace_name: "${TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME:YOUR_NAMESPACE_NAME}"
    sas_key_name: "${TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME:YOUR_SAS_KEY_NAME}"
    sas_key: "${TB_QUEUE_SERVICE_BUS_SAS_KEY:YOUR_SAS_KEY}"
```

If need you can configure default Service Bus parameters in [thingsboard.yml](/docs/user-guide/install/config/#thingsboardyml):

```bash
queue:
...
  service_bus:
...
    max_messages: "${TB_QUEUE_SERVICE_BUS_MAX_MESSAGES:1000}"
```
