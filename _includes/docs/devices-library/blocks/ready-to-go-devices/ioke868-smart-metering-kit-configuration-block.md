### Device configuration

To connect and send data we should configure the device and network server.  
At first we are going to configure the device, and save required information for network server configuration.  
To add a device to network server and get information from it, we will need the following device parameters:
- **Device EUI** - device identifier
- **Application EUI** - Application identifier
- **Application Key** - Application key to identify device. We recommend to use a generated key, not from the example!

The parameters above are required for connection.  

Both, ABP and OTAA are supported by iO881A. We recommend using the OTAA process for joining the LoRaWAN network. Therefore
configure the corresponding “Application EUI” and “Application Key” and write both into the iO881A. The keys are normally generated when
creating a device on your LoRaWAN network account. Within the "WS Configurator" keys can only be written into the device. A read out of
keys is not possible due to security reasons.

![WS Configurator – LoRaWAN Tab](/images/devices-library/ws-configurator-lorawan.png)

You can now perform an initial network reachability test on the iO881A. To do so, slide the LoRaWAN activation switch to the right—this will start the join procedure. 
Verify the process either by checking for “Join Requests” on your network server or by watching the iO881A’s LED indicators.