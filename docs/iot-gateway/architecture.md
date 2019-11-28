---
layout: docwithnav
title: ThingsBoard IoT Gateway Architecture
description: Architecture of ThingsBoard IoT Gateway

---

The IoT Gateway is built on top of **Python**, however is different from similar projects that leverage OSGi technology.  
Idea is distantly similar to microservices architecture.  
The gateway supports different connectors for connection to devices or servers and converters for processing data from devices.
A list of currently implemented connectors you can see [here](/docs/iot-gateway/what-is-iot-gateway/).  
Especially, when we are talking about language APIs and existing libraries to work with serial ports, GPIOs, I2C, and new modules and sensors that are released every day.   

The Gateway provides simple integration APIs, and encapsulates common Thingsboard related tasks: device provisioning, local data persistence and delivery, message converters and other.  
For processing data from devices you also can write the custom converter, it will receive information from the device and send it to converter to convert to unified format before sending it to the ThingsBoard cluster.    

{:refdef: style="text-align: center;"}
![ThingsBoard IoT Gateway architecture](/images/gateway/python-gateway.jpg)
{: refdef}


