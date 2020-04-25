#### Azure Service Bus Configuration

To access Azure Service Bus, you first need to create an [Azure account](https://azure.microsoft.com/).

To work with Service Bus service you will need to create a Service Bus Namespace using [this instruction](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-create-namespace-portal).

Create Shared Access Signature using [this instruction](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-create-namespace-portal).

##### ThingsBoard Configuration

Edit ThingsBoard configuration file

```text
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

Add the following lines to the configuration file. Don’t forget to replace “YOUR_NAMESPACE_NAME” with your **real Service Bus namespace name**, and "YOUR_SAS_KEY_NAME", "YOUR_SAS_KEY" with your **real Service Bus credentials:**

```bash
export TB_QUEUE_TYPE=service-bus
export TB_QUEUE_SERVICE_BUS_NAMESPACE_NAME=YOUR_NAMESPACE_NAME
export TB_QUEUE_SERVICE_BUS_SAS_KEY_NAME=YOUR_SAS_KEY_NAME
export TB_QUEUE_SERVICE_BUS_SAS_KEY=YOUR_SAS_KEY
```
