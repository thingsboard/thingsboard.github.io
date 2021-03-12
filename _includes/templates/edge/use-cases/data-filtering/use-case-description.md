Let's assume you have a vehicle with mounted IoT monitoring system connected to ThingsBoard **Edge**. 
You want to collect all messages from the device on the edge and push to the cloud only data related to business logic. 
For example, mileage readings may help to track how many miles left to travel till the next oil change. 

The In-vehicle monitoring system has 10 sensors:
* Distance
* Gas consumption
* Vehicle speed
* Engine temperature
* Ambient temperature
* Tire temperature
* Pressure in each tire (4x)

ThingsBoard Edge has the following responsibilities:
 * **Collects readings** from 10 sensors
 * **Pushes to the cloud** only "distance" readings

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.
