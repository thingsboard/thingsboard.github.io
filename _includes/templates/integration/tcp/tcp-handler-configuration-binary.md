![image](/images/user-guide/integrations/tcp/tcp-handler-configuration-binary.png)

To parse payload properly, please make sure that next values are set:
- **Max Frame Length** - the maximum length of the decoded frame. An exception will be thrown if the length of the frame exceeds this value; Leave it by default for this demo - **128**; 
- **Length Field Offset** - the offset of the length field. In our case length field is 5th byte in the payload \x30\x30\x30\x30 **\x11** \x53.... So set it to **4**;
- **Length Field Length** - the length of the length field. In our case length of the length field is 1 byte ...\x30 **\x11** \x53.... So set it to **1**;
- **Length Adjustment (the compensation value to add to the value of the length field)** - the compensation value to add to the value of the length field. In our case we don't need this compensation, as length field contains correct value - **17** bytes. So leave it **0**;
- **Number of first bytes to strip out from the decoded frame** - the number of first bytes to strip out from the decoded frame. We need to skip first 5 bytes from the decoded payload, to get our data - \x30\x30\x30\x30\x11 **\x53\x4e\x2d\x30...**. So set it to **5**;
