1. Open the ThingsBoard in your browser and log in.
2. Go to "**Entities**" > "**Gateways**" tab in the sidebar and click on "**+**" button. Fill in "**Name**" and "**Device profile**" fields and click "**Create**" button.
3. Start gateway using launch command.
4. Gateway created. Click on "Connectors" button.
5. Click on "**+**" button to add a new connector. Select "**BACnet**" connector type, fill in the "**Name**" field and click "**Add**" button.
6. In the created connector go to "**Devices**" tab and delete default device. Click on "Add device" button:
   1. Fill in the "**Host**" and "**Port**" fields (you can find this information in the T3000 software).
   2. Fill in the "**Device name**" and "**Device profile name**" with "**Temco Е3С-6СЕ**" and "**default**" respectively. Poll period set to 3000 ms (you can change it according to your purpose).
   3. Click on "**Time series pencil**" button, in the opened window click on "**Add time series**" button and fill in the "**Key**" field with "**temperature**", 
      "**Object ID**" with "**Analog Input**" and "**0**", click "**Apply**" button.
   4. Add humidity time series in the same way, where "**humidity**": Analog Input 1, Present Value.
   5. Click "**Add**" button.
7. Click on "**Save**" button.
