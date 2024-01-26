This guide provides instructions on how to secure connections between ThingsBoard and Edge instances using gRPC connections over TLS/SSL. 

It is divided into two parts: configuring the server side (the platform) and the client side (the edge).

#### TLS configuration of the platform

The guide suggests using HAProxy as the TLS termination point for the platform.

{% capture contenttogglespec %}
Ubuntu Server%,%ubuntu%,%templates/edge/user-guide/grpc-over-ssl-ubuntu.md%br%
CentOS/RHEL Server%,%rhel%,%templates/edge/user-guide/grpc-over-ssl-rhel.md{% endcapture %}

{% include content-toggle.html content-toggle-id="platformOption" toggle-spec=contenttogglespec %}

#### Configuring Edge to Use TLS Connection

##### Ubuntu or CentOS/RHEL

To enable TLS communication on the Edge, execute the following command on Ubuntu or CentOS/RHEL installations:

```bash
sudo sh -c 'cat <<EOL >> /etc/tb-edge/conf/tb-edge.conf
export CLOUD_RPC_SSL_ENABLED=true
EOL'
```
{: .copy-code}


To apply the changes, the Edge must be restarted:

```bash
sudo systemctl restart tb-edge
```
{: .copy-code}

##### Docker

For Docker setups, ensure that the **CLOUD_RPC_SSL_ENABLED** variable in the **docker-compose.yml** file is set to 'true'.

After this change, the ThingsBoard Edge docker container needs to be restarted using the command:

```bash
docker compose restart mytbedge
```
{: .copy-code}