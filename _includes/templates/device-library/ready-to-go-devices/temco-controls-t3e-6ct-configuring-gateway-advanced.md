1. Open the ThingsBoard in your browser and log in.
2. Go to "**Entities**" > "**Gateways**" tab in the sidebar and click on "**+**" button. Fill in "**Name**" and "**Device profile**" fields and click "**Create**" button.
3. Start gateway using launch command.
4. Gateway created. Click on "Connectors" button.
5. Click on "**+**" button to add a new connector. Select "**BACnet**" connector type, fill in the "**Name**" field, disable filling configuration with default values and click "**Add**" button.
6. In the created connector go to "**Advanced**" section and paste the following json configuration:
    ```json
    {
     "application": {
       "objectName": "TB_gateway",
       "host": "0.0.0.0",
       "port": "47808",
       "objectIdentifier": 599,
       "maxApduLengthAccepted": 1476,
       "segmentationSupported": "segmentedBoth",
       "vendorIdentifier": 15
     },
     "devices": [
       {
         "altResponsesAddresses": [],
         "host": "YOUR_HOST",
         "port": 47808,
         "deviceInfo": {
           "deviceNameExpression": "T3E-6CT",
           "deviceNameExpressionSource": "constant",
           "deviceProfileExpressionSource": "constant",
           "deviceProfileExpression": "default"
         },
         "pollPeriod": 3000,
         "timeseries": [
           {
             "key": "humidity",
             "objectType": "analogInput",
             "objectId": 0,
             "propertyId": "presentValue"
           },
           {
             "key": "temperature",
             "objectType": "analogInput",
             "objectId": 1,
             "propertyId": "presentValue"
           }
         ],
         "attributes": [],
         "attributeUpdates": [],
         "serverSideRpc": []
       }
     ]
   }
    ```
    {:.copy-code.expandable-10}
7. Click on "**Save**" button.
