Execute the following command to pull the image:

```bash
docker pull thingsboard/tb-pe-tcp-udp-integration:{{ site.release.pe_full_ver }}
```
{: .copy-code}

Create a volume for the integration logs (_799 is the user ID of the non-root ThingsBoard Docker user_):

```bash
mkdir -p ~/.tb-pe-tcp-udp-integration-logs && sudo chown -R 799:799 ~/.tb-pe-tcp-udp-integration-logs
```
{: .copy-code}

Execute the following command to run the integration:

```bash
docker run -it -p 11560:11560/udp -v ~/.tb-pe-tcp-udp-integration-logs:/var/log/tb-tcp-udp-integration  \
-e "RPC_HOST=mytbedge" -e "RPC_PORT=9090" \
-e "INTEGRATION_ROUTING_KEY=YOUR_ROUTING_KEY"  -e "INTEGRATION_SECRET=YOUR_SECRET" \
--name my-tb-pe-tcp-udp-integration --network edge_docker_default --restart always thingsboard/tb-pe-tcp-udp-integration:{{ site.release.pe_full_ver }}
```
{: .copy-code}

Where: 

- **mytbedge:** The host name of the ThingsBoard Edge service.
- **9090:** The integration port. It is configured by the INTEGRATIONS_RPC_PORT environment variable in the tb-edge.yml file.
- **YOUR_ROUTING_KEY:** Replace it with the actual **integration routing key** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
- **YOUR_SECRET:** Replace it with the actual **integration secret** obtained in [Step 3](/docs/pe/edge/user-guide/integrations/remote-integrations/#step-3-save-remote-integration-credentials){: target="_blank"}.
- **docker run:** The command to run this container.
- **-it:** Attaches a terminal session with current ThingsBoard remote integration process output.
- **-p 11560:11560/udp:** Use if the exposed port is UDP.
- **-p 10560:10560:** Connect a local port 10560 to exposed internal port 10560 for the TCP integration.
- **-v ~/.tb-pe-tcp-udp-integration-logs:/var/log/tb-tcp-udp-integration:** Mounts the host's dir **~/.tb-pe-tcp-udp-integration-logs** to ThingsBoard remote integration logs directory.
- **--name tb-pe-tcp-udp-integration:** The friendly local name of this machine.
- **--network edge_docker_default:** The network name in which the **mytbedge** service operates.
- **--restart always:** The command automatically starts ThingsBoard Integration if the system reboots and restarts in case of failure.
- **thingsboard/tb-pe-tcp-udp-integration:{{ site.release.pe_full_ver }}:** The docker image.

After executing this command, you can open the logs located here: **~/.tb-pe-tcp-udp-integration-logs**.
You should be able to see INFO log messages containing your latest integration configuration that arrived from the server.

To keep the container running in the background but detach from the session terminal, press the key sequence **Ctrl+p** followed by **Ctrl+q**.

#### Reattaching, stop and start commands

To reattach to the terminal (to see ThingsBoard remote integration logs), run:

```
docker attach tb-pe-tcp-udp-integration
```
{: .copy-code}

To stop the container:

```
docker stop tb-pe-tcp-udp-integration
```
{: .copy-code}

To start the container:

```
docker start tb-pe-tcp-udp-integration
```
{: .copy-code}

