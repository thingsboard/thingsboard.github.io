You can detach from session terminal using `Ctrl-p` `Ctrl-q` key sequence - the container will keep running in the background.

In case of any issues you can examine service logs for errors.
For example to see {{serviceFullName}} container logs execute the following command:

```
docker compose logs -f my{{serviceName}}
```
{: .copy-code}

To stop the container:

```
docker compose stop my{{serviceName}}
```
{: .copy-code}

To start the container:

```
docker compose start my{{serviceName}}
```
{: .copy-code}

{% capture dockerComposeStandalone %}
Docker Compose as docker-compose (with a hyphen) is deprecated. It is recommended to use Docker Compose V2 instead.
<br>If you still rely on docker compose as standalone here is the list of the above commands:
<br>**docker-compose logs -f my{{serviceName}}**
<br>**docker-compose stop my{{serviceName}}**
<br>**docker-compose start my{{serviceName}}**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}