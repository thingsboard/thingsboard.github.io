Please select **Handler Type** as **TEXT**

In our example we are going to split incoming text payload **SN-002,default,temperature,25.7\n\rSN-002,default,humidity,69** into two different messages

- **SN-002,default,temperature,25.7**
- **SN-002,default,humidity,69**

Newline delimiter (**\n\r**) will be used to split payload into multiple messages.

![image](/images/user-guide/integrations/tcp/text-handler-configuration.png)

To parse payload properly, please make sure that next values are set:
- **Max Frame Length** - the maximum length of the decoded frame. An exception will be thrown if the length of the frame exceeds this value; Leave it by default for this demo - **128**; 
- **Strip Delimiter** - whether the decoded frame should strip out the delimiter or not. Please check it to drop newline delimiter from the payload;
- **Message Separator** - specify it to **System Line Separator** - in this case newline symbol will be used as delimiter;
