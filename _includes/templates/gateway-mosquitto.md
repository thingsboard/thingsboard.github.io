We will use Mosquitto MQTT broker for the demonstration purposes. See Mosquitto [downloads page](https://mosquitto.org/download/) for instructions how to install this broker.

**NOTE:** Mosquitto and ThingsBoard use the same port (1883) for MQTT service by default. If you want to use ThingsBoard and Mosquitto on the same host, you need to change the mqtt port in one of the servers.
See corresponding [ThingsBoard](/docs/user-guide/install/config/) or [Mosquitto](https://mosquitto.org/man/mosquitto-conf-5.html) documentation for more details.

Since we use ThingsBoard [demo instance](https://demo.thingsboard.io/signup) hosted in the cloud, we will install Mosquitto MQTT broker locally and use the default service configuration.

If you decide to use other MQTT broker that is deployed to the external host or has specific security configuration, please edit **mqtt-config.json** file and modify connection parameters.
See MQTT extension [configuration guide](/docs/iot-gateway/mqtt/) for more details.
