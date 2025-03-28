* TOC
{:toc}

This guide outlines steps to secure connections between ThingsBoard and Edge instances using gRPC connections over TLS/SSL.

You can configure SSL termination in two ways: by utilizing the built-in SSL capabilities of the platform for gRPC traffic or by employing an external load balancer as the termination point.

The instructions are divided into two main parts: configuring the server side (platform) and the client side (edge).

## Server SSL Configuration

Choose between the built-in mechanism or using a load balancer for SSL termination for gRPC traffic. Use the content toggle below to select and view the instructions for each option.

{% capture contenttogglespec %}
Build-in mechanism%,%build_in%,%templates/edge/user-guide/grpc-over-ssl-build-in.md%br%
Load Balancer%,%load_balancer%,%templates/edge/user-guide/grpc-over-ssl-load-balancer.md{% endcapture %}

{% include content-toggle.html content-toggle-id="platformOption" toggle-spec=contenttogglespec %}

## Configuring Edge to Use SSL Connection

### Ubuntu or CentOS/RHEL

To enable SSL communication on the Edge for Ubuntu or CentOS/RHEL installations, execute the following command:

```bash
sudo sh -c 'cat <<EOL >> /etc/tb-edge/conf/tb-edge.conf
export CLOUD_RPC_SSL_ENABLED=true
EOL'
```
{: .copy-code}

If you are using self-signed certificates, it is necessary to add the server-side public certificate to the Edge's configuration to verify the server's certificate:

```bash
sudo sh -c 'cat <<EOL >> /etc/tb-edge/conf/tb-edge.conf
export CLOUD_RPC_SSL_CERT=certFile.crt
EOL'
```
{: .copy-code}

To apply these changes, restart the Edge:

```bash
sudo systemctl restart tb-edge
```
{: .copy-code}

### Docker

In Docker setups, make sure the **CLOUD_RPC_SSL_ENABLED** variable in the `docker-compose.yml` file is set to 'true'. 
If using self-signed certificates, also set **CLOUD_RPC_SSL_CERT** accordingly.

After making these changes, restart the ThingsBoard Edge docker container with the command:

```bash
docker compose restart mytbedge
```
{: .copy-code}