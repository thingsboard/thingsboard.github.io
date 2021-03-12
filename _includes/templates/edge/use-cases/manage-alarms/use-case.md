Let's assume you have a warehouse with two devices connected to ThingsBoard **Edge**: 
* DHT22 temperature sensor
* Air Conditioner 

ThingsBoard Edge has the following responsibilities:
 * **Collects temperature readings** from the DHT22 sensor
 * **Creates and updates alarms** if the temperature in the warehouse is higher than 50 °C
 * In case if the temperature becomes critical, ThingsBoard Edge turns on the cooler system by **sending RPC call requests** to the Air Conditioner device
 * **Pushes telemetry to the cloud**

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. 
You can use this tutorial as a basis for much more complex scenarios.