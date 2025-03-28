#### Prerequisites

* Have a proxy server (**HTTP** or **HTTPS**) with its address, port, and credentials (if required).
* Consider the addresses that should bypass the proxy (e.g., internal resources).
* Have **Java 17** installed.
* **ThingsBoard Edge** is installed and running.

#### Step 1. Modify Configuration File

To configure **ThingsBoard Edge** behind proxy running on debian-based installation (e.g., Ubuntu), modify the **tb-edge.conf** file:

```bash
sudo tee -a /etc/tb-edge/conf/tb-edge.conf > /dev/null <<EOL
#Enable the proxy
export CLOUD_RPC_PROXY_ENABLED=true

#Set the proxy server host and port
export CLOUD_RPC_PROXY_HOST="proxy_host"
export CLOUD_RPC_PROXY_PORT="proxy_port"
EOL
```
{: .copy-code}

* Replace _proxy_host_ and _proxy_port_ with your proxy's hostname and port.
* If there are hosts that should bypass the proxy (e.g., local network addresses), set <non_proxy_hosts> using a format like: localhost|127.0.0.1|yourdomain.com

##### Configure Authentication (If Required)

If your proxy requires authentication, add the following parameters:

```bash
#(Optional) Add authentication if required
export CLOUD_RPC_PROXY_USERNAME="proxy_username"
export CLOUD_RPC_PROXY_PASSWORD="proxy_password"
```
{: .copy-code}

* Replace _proxy_user_ and _proxy_password_ with your actual credentials.

##### Verify the Changes (Optional)

To verify the changes, run the following command:

```bash
cat /etc/tb-edge/conf/tb-edge.conf
```
{: .copy-code}

#### Step 2. Restart ThingsBoard Edge

For the changes to take effect, restart the service after modifying the **tb-edge.conf** file:

```bash
sudo service tb-edge restart
```
{: .copy-code}

Once the **Edge** service is started, open the **Edge UI** at [http://localhost:8080](http://localhost:8080){: target="_blank"}. Use the **tenant credentials** to log in.

{% capture docker-deployment %}
If the Edge HTTP bind port was changed to **18080** during Edge installation, access the **ThingsBoard Edge** instance at [http://localhost:18080](http://localhost:18080){: target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=docker-deployment %}

#### Troubleshooting

**ThingsBoard Edge** logs stored in the following directory:

```bash
/var/log/tb-edge
```
To check if there are any errors on the service side:

```bash
cat /var/log/tb-edge/tb-edge.log | grep ERROR
```
{: .copy-code}

Check connectivity:

```bash
curl -x http://proxy_host:proxy_port https://your_tb_cloud_url
```
{: .copy-code}

* Replace _proxy_host_ and _proxy_port_ with your proxy's hostname and port.

Confirm that the service can reach the proxy server:

```bash
ping proxy_host
traceroute proxy_host
```
{: .copy-code}

* Replace _proxy_host_ with your proxy's hostname.

### Next Steps

{% include templates/edge/guides-banner-edge.md %}