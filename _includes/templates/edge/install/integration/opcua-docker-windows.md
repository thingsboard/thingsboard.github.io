Windows users should use a docker-managed volume for the remote integration logs. 
Before executing docker, create the docker volume (for ex. **tb-opc-ua-integration-logs**). 
Open the **Docker Quickstart Terminal** and run the following command:

``` 
docker volume create tb-pe-opc-ua-integration-logs
```
{: .copy-code}

Run the integration using the following command:

```bash
docker run -it -v tb-pe-opc-ua-integration-logs:/var/log/tb-opc-ua-integration `
-e "RPC_HOST=mytbedge" -e "RPC_PORT=9090" `
-e "INTEGRATION_ROUTING_KEY=YOUR_ROUTING_KEY"  -e "INTEGRATION_SECRET=YOUR_SECRET" `
--name my-tb-pe-opc-ua-integration --network edge_docker_default --restart always thingsboard/tb-pe-opc-ua-integration:{{ site.release.pe_full_ver }}
```
{: .copy-code}

Where: 

- **mytbedge:** The host name of the ThingsBoard Edge service.
- **9090:** The integration port. It is configured by the INTEGRATIONS_RPC_PORT environment variable in the tb-edge.yml file.
- **YOUR_ROUTING_KEY:** Replace it with the actual **integration routing key** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
- **YOUR_SECRET:** Replace it with the actual **integration secret** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
- **docker run:** The command to run this container.
- **-it:** Attaches a terminal session with current ThingsBoard remote integration process output.
- **-v tb-pe-opc-ua-integration-logs:/var/log/tb-opc-ua-integration:** Mounts the host's dir **~/.tb-pe-opc-ua-integration-logs** to ThingsBoard remote integration logs directory.
- **--name tb-pe-opc-ua-integration:** The friendly local name of this machine.
- **--network edge_docker_default:** The network name in which the **mytbedge** service operates.
- **--restart always:** The command automatically starts ThingsBoard Integration if the system reboots and restarts in case of failure.
- **thingsboard/tb-pe-opc-ua-integration:{{ site.release.pe_full_ver }}:** The docker image.

After executing this command, you can open the logs located here: **~/.tb-pe-opc-ua-integration-logs**.
You should be able to see INFO log messages containing your latest integration configuration that arrived from the server.

To keep the container running in the background but detach from the session terminal, press the key sequence **Ctrl+p** followed by **Ctrl+q**.

#### Reattaching, stop and start commands

To reattach to the terminal (to see ThingsBoard remote integration logs), run:

```
docker attach tb-pe-opc-ua-integration
```
{: .copy-code}

To stop the container:

```
docker stop tb-pe-opc-ua-integration
```
{: .copy-code}

To start the container:

```
docker start tb-pe-opc-ua-integration
```
{: .copy-code}

