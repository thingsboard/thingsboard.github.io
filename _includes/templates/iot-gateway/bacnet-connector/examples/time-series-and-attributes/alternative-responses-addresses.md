Let's review more examples of alternative responses addresses.

This field allows you to specify an alternative address for responses from the device.
It is useful when the gateway and BACnet device are located in different networks.

For example, if gateway running via the docker container and the BACnet device is located in the local network under 
192.168.1.200:45606, you can specify the IP address of the BACnet device in the alternative responses addresses field.
```json
"altResponsesAddresses": ["192.168.1.200"]
```

This is important because bacpypes provide APDU to the gateway without port number, so the connector can't determine if  
it is an allowed device. In this case, the connector will use the alternative address to determine that it is an allowed 
device.
