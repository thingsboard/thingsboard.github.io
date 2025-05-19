Download the installation package:

```bash
wget https://dist.thingsboard.io/tb-mqtt-integration-{{ site.release.pe_ver }}.deb
```
{: .copy-code}

Install the integration as a service:

```bash
sudo dpkg -i tb-mqtt-integration-{{ site.release.pe_ver }}.deb
```
{: .copy-code}

Open the file for editing:

```bash 
sudo nano /etc/tb-mqtt-integration/conf/tb-mqtt-integration.conf
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
- **RPC_HOST:** Enter the IP address of your Edge instance or localhost value.
- **9090:** The integration port. It is configured by the INTEGRATIONS_RPC_PORT environment variable in the tb-edge.yml file.
- **YOUR_ROUTING_KEY:** Replace it with the actual **integration routing key** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
- **YOUR_SECRET:** Replace it with the actual **integration secret** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.

Make sure to **uncomment** the export statement. See the example below:

```bash
# UNCOMMENT NEXT LINES AND PUT YOUR CONNECTION PARAMETERS:
export RPC_HOST=127.0.0.1 # THE IP ADDRESS OF YOUR EDGE INSTANCE
export RPC_PORT=9090
export INTEGRATION_ROUTING_KEY=b75**************************34d
export INTEGRATION_SECRET=vna**************mik
```

Execute the following command to start ThingsBoard integration:

```bash
sudo service tb-mqtt-integration start
```
{: .copy-code}

 - **Advanced configuration**

Once can lookup additional configuration parameters inside the yml configuration file.

Open the file for editing using the following command:

```bash 
sudo nano /etc/tb-mqtt-integration/conf/tb-mqtt-integration.conf
``` 
{: .copy-code} 

After executing this command you can open logs which are located here `/var/log/tb-mqtt-integration/`. 
You should see some INFO log messages with your latest Integration configuration that arrived from the server.
