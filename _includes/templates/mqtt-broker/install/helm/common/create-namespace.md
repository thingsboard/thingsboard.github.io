It's a good practice to create a dedicated namespace for your TBMQ cluster deployment:

```bash
kubectl create namespace tbmq
```
{: .copy-code}

```bash
kubectl config set-context --current --namespace=tbmq
```
{: .copy-code}

This sets tbmq as the default namespace for your current context, so you don’t need to pass --namespace to every
command.