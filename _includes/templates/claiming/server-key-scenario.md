Let's assume you have thousands of NB IoT/LoRaWAN/Sigfox devices connected using one of ThingsBoard [Integrations](/docs/user-guide/integrations/).
The integration layer will automatically provision them in ThingsBoard. 
Assuming Tenant Admin knows the list of DevEUIs (LoRaWAN) or any other device identifiers, 
it is possible to generate a random Secret Key per device and upload this key to ThingsBoard as a server-side attribute using [REST API](https://thingsboard.io/docs/reference/rest-api/) or UI.
Once this is done, tenant admin can email those keys to the Customer, or put them inside the device package box. 

![image](/images/user-guide/claiming-devices/server-side-key-diagram.png)

In order to provision device Secret Key, Tenant Administrator should set server-side attribute "claimingData" like the following value:

```json
{"secretKey": "YOUR_SECRET_KEY", "expirationTime": 1640995200000}
``` 

, where expiration date is the end of the time when the device can be claimed that is 01/01/2022 as a unix timestamp with milliseconds precision.

Once server-side attribute is provisioned, Customer User may use [Claim Device](/docs/user-guide/claiming-devices/#device-claiming-widget) widget.  
