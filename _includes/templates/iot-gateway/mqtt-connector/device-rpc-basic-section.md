In order to add a new RPC method, follow these steps:

{% assign creatingRPC = '
    ===
        image: /images/gateway/mqtt-connector/mqtt-gateway-configuring-11-ce.png,
        title: Click the "**Add mapping**" under "**Requests mapping**" section to add new server side rpc command.
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-1.png,
        title: Choose the "**Request type**": `With response` or `Without response`.
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-3.png,
        title: Fill in the required fields - "**Device name filter**", "**Method filter**", "**Request topic expression**", and "**Value expression**".
    ===
        image: /images/gateway/mqtt-connector/mqtt-rpc-overview-2.png,
        title: For two-way RPC, also configure "**Response topic expression**", "**Response topic QoS**", and "**Response timeout**". Click "**Add**" when done.
    '
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingRPC %}