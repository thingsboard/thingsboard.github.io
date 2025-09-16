In order to add a new RPC method, follow these steps:

{% assign rpcRequests = '
    ===
        image: /images/gateway/modbus-connector/rpc-requests-1-ce.png,
        title: Navigate to the "**RPC requests**" section and click the "**pencil**" icon;
    ===
        image: /images/gateway/modbus-connector/rpc-requests-2-ce.png,
        title: In the opened window click the "**Add request**";
    ===
        image: /images/gateway/modbus-connector/rpc-requests-3-ce.png,
        title: Fill in key, type, function code, objects count and address fields. Click "**Apply**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=rpcRequests %}
