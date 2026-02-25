#### Prerequisites

* Have a proxy server (**HTTP** or **HTTPS**) with its address, port, and credentials (if required).
* Have **ThingsBoard Edge** installed and running, and **ThingsBoard Cloud** accessible.
* Have [Docker](https://docs.docker.com/engine/install/){: target="_blank"} and [Docker Compose](https://docs.docker.com/compose/install/){: target="_blank"} installed on your machine.

{% capture docker-deployment %}
To proceed with proxy configuration, set the terminal in the directory which contains the **docker-compose.yml** file.
{% endcapture %}
{% include templates/info-banner.md content=docker-deployment %}

#### Step 1. Stop Docker Container

Stop the currently running **TB Edge** container (if it’s still running):

```bash
docker compose stop
```
{: .copy-code}

#### Step 2. Modify the .yml File

Update the **docker-compose.yml** file with the proxy settings. 

To open the file, use: 
```bash
sudo nano docker-compose.yml
```
{: .copy-code}

Enter the following lines into the "environment" block within the file:
```yml
      HTTP_PROXY: http://proxy_user:proxy_password@<proxy_host:proxy_port
      HTTPS_PROXY: http://proxy_user:proxy_password@<proxy_host:proxy_port
      NO_PROXY: localhost,127.0.0.1,postgres,PUT_YOUR_CLOUD_IP
```
{: .copy-code}
* Specify the proxy server for **HTTP** and **HTTPS** connections in the **HTTP_PROXY** and **HTTPS_PROXY** lines, correspondingly 
  * _For example: HTTP_PROXY=http://user:password@proxy.example.com:8080_
* List addresses that should bypass the proxy in the **NO_PROXY** line 
  * _For example: NO_PROXY=localhost,127.0.0.1,postgres,thingsboard.cloud_

The expected result:
{% include images-gallery.html imageCollection="configs" %}
#### Step 3 Restart the Containers

To start this docker compose, run the following command:

```bash
docker compose up -d && docker compose logs -f mytbedge
```
{: .copy-code}

Once the **Edge** service is started, open the **Edge UI** at [http://localhost:8080](http://localhost:8080){: target="_blank"}. Use the **tenant credentials** to log in.

{% capture docker-deployment %}
If the Edge HTTP bind port was changed to **18080** during Edge installation, access the **ThingsBoard Edge** instance at [http://localhost:18080](http://localhost:18080){: target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=docker-deployment %}

#### Troubleshooting

Confirm that the proxy environment variables are correctly set in the **docker-compose.yml** file:

```bash
echo $HTTP_PROXY
echo $HTTPS_PROXY
echo $NO_PROXY
```
{: .copy-code}

If the variables are not set, check if they are correctly applied in the container:

```bash
docker exec -it container_name printenv | grep -i proxy
```
{: .copy-code}
If missing, ensure that they are properly defined in **docker-compose.yml**.

Once the container is running, verify if it can access the internet via the proxy:

```bash
docker exec -it container_name curl -I https://google.com
```
{: .copy-code}

If the request fails, it may indicate incorrect proxy settings or connectivity issues.

Check Docker container logs for any additional proxy-related errors:

```bash
docker logs container_name
```
{: .copy-code}

Check connectivity:

```bash
curl -x http://proxy_host:proxy_port https://your_tb_cloud_url
```
{: .copy-code}

### Next Steps

{% include templates/edge/guides-banner-edge.md %}