To customize your TBMQ deployment, download the default `values.yaml` from the chart and update it as needed:

```bash
helm show values tbmq-helm-chart/tbmq-cluster > values.yaml
```

{: .copy-code}

> **Note:** Do not modify `installation.installDbSchema` directly in the `values.yaml`.
> This parameter is only required during the first installation to initialize the TBMQ database schema.
> Instead, we will pass it explicitly using `--set` option in the `helm install` command.