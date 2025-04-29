To customize your TBMQ deployment, first download the default `values.yaml` file from the chart:

```bash
helm show values tbmq-helm-chart/tbmq-cluster > values.yaml
```
{: .copy-code}

{% capture installation-option %}

Do not modify `installation.installDbSchema` directly in the `values.yaml`.
This parameter is only required during the first installation to initialize the TBMQ database schema.
Instead, we will pass it explicitly using `--set` option in the `helm install` command.

{% endcapture %}
{% include templates/info-banner.md content=installation-option %}