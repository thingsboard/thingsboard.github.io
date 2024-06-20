Imagine you have a vehicle equipped with an IoT monitoring system connected to ThingsBoard **Edge**. Your goal is to gather all device messages on the **Edge** and selectively send only business logic-related data to the cloud. 
For example, mileage readings can help track how many miles are left until the next oil change.

The in-vehicle monitoring system includes 10 sensors:
* Distance
* Gas consumption
* Vehicle speed
* Engine temperature
* Ambient temperature
* Tire temperature
* Pressure in each tire (4x)
* 
ThingsBoard **Edge** has the following responsibilities:
* Collecting readings from all 10 sensors
* Sending only "distance" readings to the cloud

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.
