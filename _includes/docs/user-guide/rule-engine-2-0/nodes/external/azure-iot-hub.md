<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.5.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-iot-hub.png)

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-iot-hub-config.png)

- **Topic** - for more information about IoT Hub topic use [link](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#sending-device-to-cloud-messages).
- **Hostname** - Azure IoT Hub Hostname.
- **Device ID** - Your Device ID from Azure IoT Hub.
- **Credentials** - Azure IoT Hub connection credentials. Can be either *Shared Access Signature* or *PEM*.

Different Authentication credentials are supported for Azure IoT Hub:

- Shared Access Signature - SAS Key is used for Authentication
- PEM - PEM certificates are used for Authentication

If **Shared Access Signature** credentials type is selected, the following configuration should be provided:
- SAS Key - it is key from your device in [Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#symmetric-key-authentication)
- CA certificate file, by default used Baltimore certificate. More about certificates [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#tlsssl-configuration)

If **PEM** credentials type is selected, the following configuration should be provided:

- CA certificate file, by default used Baltimore certificate. More about certificates [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#tlsssl-configuration)
- Certificate file
- Private key file
- Private key password

[X.509 CA-signed authentication](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#x509-ca-signed-authentication)

[CACertificates instruction](https://github.com/Azure/azure-iot-sdk-c/tree/master/tools/CACertificates)

<br>

**Published body** - Node will send full Message payload to the Azure IoT Hub device.
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the Azure IoT Hub.

In case of successful message publishing, original Message will be passed to the next nodes via **Success** chain,
otherwise **Failure** chain is used.
