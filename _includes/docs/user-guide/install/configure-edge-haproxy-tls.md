ThingsBoard supports securing the connection between the platform and edge instances by running the gRPC connection over TLS/SSL.

We will use HAProxy as the termination point for the TLS connection between the edges and the platform.

First, we need to change the default binding port for edge connectivity of the platform to port 7071. 
This allows us to configure HAProxy to listen on the default 7070 port and forward connections to the 7071 port on the platform.

Please execute the following command to update the edge bind port on the platform:

```bash
sudo sh -c 'cat <<EOL >> /etc/thingsboard/conf/thingsboard.conf

export EDGES_RPC_PORT=7071
EOL'
```
{: .copy-code}

To apply the changes, the ThingsBoard platform must be restarted:

```bash
sudo systemctl restart thingsboard
```
{: .copy-code}

Next, add the TLS configuration for HAProxy by executing the following command to update its config file:

```bash
sudo sh -c 'cat <<EOL >> /etc/haproxy/haproxy.cfg

# Edge gRPC TLS (optional)
listen grpc_front
    bind *:7070 ssl crt /usr/share/tb-haproxy/default.pem crt /usr/share/tb-haproxy/certs.d/ ciphers ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM alpn h2,http/1.1
    mode tcp

    option clitcpka
    option tcplog

    default_backend grpc_backend 

backend grpc_backend
    mode tcp
    server grpc 127.0.0.1:7071
EOL'
```
{: .copy-code}