Download the installation package:

```bash
wget https://dist.thingsboard.io/tb-tcp-udp-integration-{{ site.release.pe_ver }}.rpm
```
{: .copy-code}

Install the integration as a service:

```bash
sudo rpm -Uvh tb-tcp-udp-integration-{{ site.release.pe_ver }}.rpm
```
{: .copy-code}

Open the file for editing:

```bash 
sudo nano /etc/tb-tcp-udp-integration/conf/tb-tcp-udp-integration.conf
``` 
{: .copy-code}

Locate the following configuration block:

```bash
# UNCOMMENT NEXT LINES AND PUT YOUR CONNECTION PARAMETERS:
# export RPC_HOST=thingsboard.cloud
# export RPC_PORT=9090
# export INTEGRATION_ROUTING_KEY=YOUR_INTEGRATION_KEY
# export INTEGRATION_SECRET=YOUR_INTEGRATION_SECRET
```
Enter your configuration parameters:
- **RPC_HOST:** Use the Edge instance’s IP address, or **localhost** if it's running on the same machine.
- **9090:** The integration port. It is configured by the INTEGRATIONS_RPC_PORT environment variable in the tb-edge.yml file.
{% if page.url contains "udp" or page.url contains "tcp" %}
- **YOUR_ROUTING_KEY:** Replace it with the actual **integration routing key**.
- **YOUR_SECRET:** Replace it with the actual **integration secret**.
{% elsif page.url contains "remote-integrations" %}
- **YOUR_ROUTING_KEY:** Replace it with the actual **integration routing key** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
- **YOUR_SECRET:** Replace it with the actual **integration secret** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
{% endif %}

Make sure to **uncomment** the export statement. See the example below:

```bash
# UNCOMMENT NEXT LINES AND PUT YOUR CONNECTION PARAMETERS:
export RPC_HOST=127.0.0.1 # THE IP ADDRESS OF YOUR EDGE INSTANCE
export RPC_PORT=9090
export INTEGRATION_ROUTING_KEY=b75**************************34d
export INTEGRATION_SECRET=vna**************mik
```

Start the ThingsBoard integration:

```bash
sudo service tb-tcp-udp-integration start
```
{: .copy-code}

#### Advanced configuration

You can find and update additional configuration parameters in the **tb-tcp-udp-integration.conf** file.

To open the file for editing, use the following command:

```bash 
sudo nano /etc/tb-tcp-udp-integration/conf/tb-tcp-udp-integration.conf
``` 
{: .copy-code} 

After updating the configuration, you can check the logs in **/var/log/tb-tcp-udp-integration/** to verify that the integration is running correctly.
Look for **INFO** log messages that show the latest integration configuration received from the server.