Use this function:

```ruby
var data = {
    writeValues: [],
    callMethods: []
};

if (msgType === 'RPC_CALL_FROM_SERVER_TO_DEVICE') {
    if (msg.method === 'setState') {
        var targetMethod = msg.params === 'true' ? 'Start' : 'Stop';
        var writeValue = {
              nodeId: 'ns=' + metadata['cs_namespaceIndex'] +';s=' + metadata['deviceName'],
              value: msg.params
        };
        data.writeValues.push(writeValue);
        var callMethod = {
              objectId: 'ns=' + metadata['cs_namespaceIndex'] +';s=' + metadata['deviceName'],
              methodId: 'ns=' + metadata['cs_namespaceIndex'] +';s=' + metadata['deviceName']+'.'+targetMethod,
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
{: .copy-code.expandable-10}

![image](/images/user-guide/integrations/opc-ua/opc-ua-downlink-converter-tbel.png)