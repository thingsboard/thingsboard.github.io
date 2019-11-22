---
layout: docwithnav
title: ThingPark Integration
description: ThingPark Integration Guide 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}


ThingPark Integration allows to stream data from Actility ThingPark servers to ThingsBoard and converts binary device payloads to the ThingsBoard format.

 ![image](/images/user-guide/integrations/thingpark-integration.svg)

Configuration steps:
- Review official  ThingPark DX Dataflow API reference documentation:
    
[documentation](https://dx-api.thingpark.com/dataflow/latest/doc/index.html#uplink-data-reception).

- Go through the procedure of your registration and registration of your device on the ThingPark Wireless OSS intelligent logger (Actility).

[Procedure of your registration and registration of your device](https://thingparkenterprise.eu.actility.com/tpe/#/login).

- Check the connection and operation of your device to the ThingPark Wireless OSS intelligent logger (Actility).

[Check the connection and operation of your device](https://thingparkenterprise.eu.actility.com/thingpark/wlogger/gui/).

- To create a new Integration on the ThingsBoard platform with the ThingPark Wireless OSS intelligent logger (Actility) platform, click on the link.   
 
[Create new Integration of type "ThingPark"](/docs/samples/abeeway/tracker.md)

<br>

## Next steps
 
 {% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
