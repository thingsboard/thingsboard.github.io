Please select **Handler Type** as **BINARY**

In our example we are going to parse incoming binary payload **\x30\x30\x30\x30\x11\x53\x4e\x2d\x30\x30\x32\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x00\x00\x00** (in HEX).

According to our payload design:
- **0-3** bytes - **\x30\x30\x30\x30** - dummy bytes to show how you can skip particular prefix bytes in your payload. These bytes are included for sample purposes;
- **4** byte - **\x11** - payload length. If we convert it to decimal - **17**. So our payload in this case is limited to 17 bytes from the incoming TCP frame;
- **5-10** bytes - **\x53\x4e\x2d\x30\x30\x32** - device name. If we convert it to text - **SN-002**;
- **11-17** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
- **18-21** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
- **22-24** bytes - **\x00\x00\x00** - dummy bytes. We are going to ignore them, because payload size is **17** bytes - from **5** till **21** byte. These bytes are included for sample purposes;

we need to properly configure handler configuration to get from the incoming payload required data: **\x53\x4e\x2d\x30\x30\x32\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37** which equals to **SN-002default25.7** in text representation. 

![image](/images/user-guide/integrations/tcp/binary-handler-configuration.png)

To parse payload properly, please make sure that next values are set:
- **Max Frame Length** - the maximum length of the decoded frame. An exception will be thrown if the length of the frame exceeds this value; Leave it by default for this demo - **128**; 
- **Length Field Offset** - the offset of the length field. In our case length field is 5th byte in the payload \x30\x30\x30\x30 **\x11** \x53.... So set it to **4**;
- **Length Field Length** - the length of the length field. In our case length of the length field is 1 byte ...\x30 **\x11** \x53.... So set it to **1**;
- **Length Adjustment (the compensation value to add to the value of the length field)** - the compensation value to add to the value of the length field. In our case we don't need this compensation, as length field contains correct value - **17** bytes. So leave it **0**;
- **Number of first bytes to strip out from the decoded frame** - the number of first bytes to strip out from the decoded frame. We need to skip first 5 bytes from the decoded payload, to get our data - \x30\x30\x30\x30\x11 **\x53\x4e\x2d\x30...**. So set it to **5**;
