Execute the following command to delete the EKS cluster:

```bash
eksctl delete cluster -r us-east-1 -n tbmq -w
```
{: .copy-code}

{% capture delete-cluster %}

Make sure to update the cluster name `-n` and region `-r` if your configuration uses different values.

{% endcapture %}
{% include templates/info-banner.md content=delete-cluster %}
