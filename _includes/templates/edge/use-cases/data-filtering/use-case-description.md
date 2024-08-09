This use case demonstrates how to configure an "in-vehicle IoT monitoring system" connected to ThingsBoard **Edge** platform. 

The goal is to collect data from various sensors, process it locally on the **Edge**, and selectively push relevant data (e.g., mileage readings) to the cloud. This setup ensures efficient tracking of the remaining mileage until the next oil change.

To achieve this, we will configure the "Edge Root Rule Chain" to process sensor readings locally on the ThingsBoard **Edge** platform. This setup will handle inputs from all 10 sensors and use a rule node to filter and forward only the distance readings (mileage) to the cloud.

The "in-vehicle monitoring system" includes 10 sensors:
* Distance
* Gas consumption
* Vehicle speed
* Engine temperature
* Ambient temperature
* Tire temperature
* Pressure in each tire (4x)

ThingsBoard **Edge** has the following responsibilities:
* Collecting readings from all 10 sensors
* Sending only "distance" readings to the cloud

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.