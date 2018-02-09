---
layout: docwithnav
title: ThingPark Integration
description: ThingPark Integration Guide 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

ThingPark Integration allows to stream data from Actility ThingPark servers to ThingsBoard and converts binary device payloads to the ThingsBoard format.

 ![image](/images/user-guide/integrations/thingpark-integration.svg)

Configuration steps:
  
 - Create new Integration of type "ThingPark"
 
![image](/images/user-guide/integrations/thingpark.png) 

 - Copy HTTP endpoint URL from the auto-generated field in the form (highlighted with red)
 - Review official ThingPark [documentation](https://dx-api.thingpark.com/dataflow/latest/doc/index.html#uplink-data-reception)
  to learn how to provision the endpoint URL from the previous step
 - Copy AS Security Key ID and AS Security Key and use them in the form to enable validation of the signature in the API calls. 