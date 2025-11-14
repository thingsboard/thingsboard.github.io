In order to add a new RPC method, follow these steps:

{% assign creatingRPC = '
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-1.png,
        title: Click the "**pencil**" icon of the "**RPC methods**" section to add a new RPC method.
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-2.png,
        title: In the opened window, click "**Add method**" to create a new RPC configuration.
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-3.png,
        title: Fill in the required fields - "**Device name filter**", "**Method filter**", "**Request topic expression**", and "**Value expression**". For two-way RPC, also configure "**Response topic expression**", "**Response topic QoS**", and "**Response timeout**". Click "**Apply**" when done.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingRPC %}