This configuration section contains settings of the OPC-UA server connection, such as:
- **Server endpoint url** - hostname or ip address of OPC-UA server;
- **Timeout in milliseconds** - timeout in seconds for connecting to OPC-UA server;
- **Security policy** - security policy (**Basic128Rsa15**, **Basic256**, **Basic256Sha256**);
- **Scan period in milliseconds** - period in milliseconds to rescan the server;
- **Poll period** - period in milliseconds to poll the server;
- **Subscription check period in milliseconds** - period to check the subscriptions in the OPC-UA server;
- **Enable subscription** - if true - the gateway will subscribe to interesting nodes and wait for data update and if false - the gateway will rescan OPC-UA server every **scanPeriodInMillis**;
- **Show map** - show nodes on scanning **true** or **false**.

![image](/images/gateway/opc-ua-connector/opc-ua-application-basic-certificates-1-ce.png)
