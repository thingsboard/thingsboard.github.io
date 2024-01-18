View last logs in runtime:
 
```bash
docker compose logs -f tb-core1 tb-core2 tb-rule-engine1 tb-rule-engine2
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs -f tb-core1 tb-core2 tb-rule-engine1 tb-rule-engine2**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

If you suspect the issue is related only to rule-engine, you can filter and view only the rule-engine logs:

```bash
docker compose logs -f tb-rule-engine1 tb-rule-engine2
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs -f tb-rule-engine1 tb-rule-engine2**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

You can use <b>grep</b> command to show only the output with desired string in it. 
For example you can use the following command in order to check if there are any errors on the backend side:

```bash
docker compose logs tb-core1 tb-core2 tb-rule-engine1 tb-rule-engine2 | grep ERROR
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs tb-core1 tb-core2 tb-rule-engine1 tb-rule-engine2 \| grep ERROR**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

**Tip:** you can redirect logs to file and then analyze with any text editor:

```bash
docker compose logs -f tb-rule-engine1 tb-rule-engine2 > rule-engine.log
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:

**docker-compose logs -f tb-rule-engine1 tb-rule-engine2 > rule-engine.log**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

**Note:** you can always log into the ThingsBoard container and view logs there:

```bash
docker ps
docker exec -it NAME_OF_THE_CONTAINER bash
```
