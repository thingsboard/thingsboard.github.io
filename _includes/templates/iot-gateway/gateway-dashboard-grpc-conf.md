![](/images/gateway/dashboard/gateway-dashboard-grpc-conf.png)

GRPC - provides GRPC configuration:
- Server port - network port on which the GRPC server will listen for incoming connections;
- Keep alive permit without calls - allow server to keep the GRPC connection alive even when there are no active RPC calls;
- Keep alive - duration (in milliseconds) between two successive keepalive ping messages when there is no active RPC call;
- Max pings without data - maximum number of keepalive ping messages that the server can send without receiving any data before it considers the connection dead;
- Keep alive timeout - maximum time (in milliseconds) the server should wait for a keepalive ping response before considering the connection dead;
- Min time between pings - minimum amount of time (in milliseconds) the server should wait between sending keepalive ping messages;
- Min ping interval without data - minimum amount of time (in milliseconds) the server should wait between sending keepalive ping messages when there is no data being sent or received.