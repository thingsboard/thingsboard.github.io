View last logs in runtime:
 
```bash
docker compose logs -f tb-edge
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs -f tb-edge**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

You can use <b>grep</b> command to show only the output with desired string in it. 
For example, you can use the following command in order to check if there are any errors on the backend side:

```bash
docker compose logs tb-edge | grep ERROR
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs tb-edge \| grep ERROR**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

**Tip:** you can redirect logs to file and then analyze with any text editor:

```bash
docker compose logs -f tb-edge > tb-edge.log
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs -f tb-edge > tb-edge.log**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

**Note:** you can always log into the ThingsBoard Edge container and view logs there:

```bash
docker ps
docker exec -it NAME_OF_THE_CONTAINER bash
```
{: .copy-code}