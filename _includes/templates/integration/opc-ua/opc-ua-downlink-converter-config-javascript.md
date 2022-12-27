Use this function:

```ruby
var data = {
    writeValues: [],
    callMethods: []
};

if (msgType === 'RPC_CALL_FROM_SERVER_TO_DEVICE') {
    if (msg.method === 'setState') {
        var targetMethod = msg.params === 'true' ? 'Start' : 'Stop';
        var callMethod = {
              objectId: 'ns=3;s=' + metadata['deviceName'],
              methodId: 'ns=3;s=' +metadata['deviceName']+'.'+targetMethod,
              args: []
        };
        data.callMethods.push(callMethod);
    }
}

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {}
};

return result;
```
{: .copy-code}

![image](/images/user-guide/integrations/opc-ua/opc-ua-downlink-converter-java.png)