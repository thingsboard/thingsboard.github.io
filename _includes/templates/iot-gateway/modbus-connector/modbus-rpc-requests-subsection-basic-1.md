{% assign rpcRequests = '
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/rpc-requests-1-ce.png,
        title: To add new requests mapping, navigate to the "RPC requests" section and click the "pencil" icon;
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/rpc-requests-2-ce.png,
        title: In the opened window click the "Add request";
    ===
        image: https://img.thingsboard.io/gateway/modbus-connector/rpc-requests-3-ce.png,
        title: Fill in key, type, function code, objects count and address fields. Click "Apply".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rpcRequests %}

The table below describes the RPC request parameters:

| **Parameter** | **Description**                                                       |
|:--------------|:----------------------------------------------------------------------
| Key           | RPC method name                                                       |
| Type          | Type of value                                                         | 
| Function code | The function to use in data processing, specifically Modbus functions |
| Objects count | Count of objects to write or read                                     | 
| Address       | Object address                                                        |
| ---           
