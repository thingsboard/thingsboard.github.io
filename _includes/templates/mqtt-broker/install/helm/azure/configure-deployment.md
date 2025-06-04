### Configure AZ tools

After installation is done, you need to login to the cli using the next command:

```bash
az login
```
{: .copy-code}

### Define environment variables

{% include templates/mqtt-broker/install/helm/azure/define-env-variables.md %}

### Configure and create AKS cluster

{% include templates/mqtt-broker/install/azure/aks-configure-and-create-cluster.md %}

### Update the context of kubectl

{% include templates/mqtt-broker/install/azure/aks-update-kubectl-ctx.md %}
