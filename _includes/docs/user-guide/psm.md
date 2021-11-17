* TOC
{:toc}

You can set the PSM in the device profile or device configuration. This feature is available for [CoAP](/docs/{{docsPrefix}}reference/coap-api/) and [LWM2M](/docs/{{docsPrefix}}reference/lwm2m-api/) only.
After you send an RPC request to this device, the request will be saved in the database for the time you configured and the device will receive the request and send the response when it is turned on again.  
In addition, every time you send the Persistent RPC, the response will contain RPC ID. Whenever you need to find a specific RPC and view its states and responses, you can do it with that ID through the database.
