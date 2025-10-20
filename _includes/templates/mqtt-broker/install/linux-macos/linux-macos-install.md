{% if docsPrefix == null %}

```shell
wget https://raw.githubusercontent.com/thingsboard/tbmq/{{ site.release.broker_branch }}/msa/tbmq/configs/tbmq-install-and-run.sh &&
sudo chmod +x tbmq-install-and-run.sh && ./tbmq-install-and-run.sh
```
{: .copy-code}

{% else %}

```shell
wget https://raw.githubusercontent.com/thingsboard/tbmq-pe-docker-compose/{{ site.release.broker_branch }}/basic/tbmq-install-and-run.sh &&
sudo chmod +x tbmq-install-and-run.sh && ./tbmq-install-and-run.sh
```
{: .copy-code}

{% endif %}
