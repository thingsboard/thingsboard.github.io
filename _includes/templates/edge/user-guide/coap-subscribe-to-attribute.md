**CoAP** is a light-weight IoT protocol for constrained devices. **CoAP** protocol is UDP based, but similar to HTTP it uses request-response model. 
#### Step 1. Subscribe to the Changes in Shared Device Attributes

To subscribe to changes in shared device attributes, send a GET request to the following URL:

```bash
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

* Replace the **$THINGSBOARD_HOST_NAME** with the actual hostname or IP address of your ThingsBoard Edge instance. For example:
    * If you installed **ThingsBoard** using **Docker**, use **localhost** or **127.0.0.1**.
    * If you installed **ThingsBoard** on your own server, use the **IP address** or **hostname** of that server.
    * If you are using **ThingsBoard Cloud**, enter **the URL** of the **ThingsBoard Cloud** instance, e.g. demo.thingsboard.io.
* Replace the **$ACCESS_TOKEN** with the actual access token of the device.
    * To find the device access token, go to the **Entities > Devices** section and click on the device. On the **"Device details"** page, you can copy the token by clicking the **"Copy access token"** button.
      ![image](/)

Execute the command:
```bash
coap get -o coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the update.

#### Step 2. Publish any Time-Series or Attribute Message.

To publish client-side device attributes to the **ThingsBoard Edge**, send a POST request to the following URL:

```bash
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

* **$THINGSBOARD_HOST_NAME:** The actual hostname or IP address of your ThingsBoard Edge instance
* **$ACCESS_TOKEN:** The actual access token of the device.

Publish client-side attributes update using data from [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json) file:

```bash
cat new-attributes-values.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}