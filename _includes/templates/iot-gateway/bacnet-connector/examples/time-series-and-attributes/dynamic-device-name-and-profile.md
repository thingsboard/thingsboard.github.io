Let’s review more examples of device name expression and device profile expression fields.

These fields allow for the dynamic construction of a formatted device name/profile using values extracted from a JSON object. 
You can specify variables to access the relevant fields in the JSON.

You can use the following variables to extract specific device information:
- **objectName** - extracts the device's object name (e.g., "Main Controller");
- **vendorId** - extracts the device's vendor ID, typically a numeric identifier representing the manufacturer (e.g., "1234");
- **objectId** - extracts the device's unique object identifier (e.g., "999");
- **address** - extracts the device's network address (e.g., "192.168.1.1").

**Examples:**
- "**Device ${objectName}**" If the objectName variable exists and contains "**objectName": "Main Controller**", 
  the device on platform will have the following name: **Device Main Controller**;
- "**Vendor: ${vendorId}**" If the vendorId variable exists and contains **"vendorId": 1234**, the device on platform 
  will have the following name: **Vendor: 1234**;
- "**Device ID: ${objectId} at ${address}**" If the objectId variable exists and contains **"vendorId": 999** and 
  address variable exists and contains **"address": "192.168.1.1"**, the device on platform will have the following 
  name: **Device ID: 999 at 192.168.1.1**.

You can find full list of available variables in
the [Advanced configuration](/docs/iot-gateway/config/bacnet/#available-variables-for-device-nameprofile-expressions) section.
