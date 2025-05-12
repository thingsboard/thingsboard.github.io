In case of any issues, you can examine service logs for errors. For example, to see TBMQ logs, execute the following command:

```bash
kubectl logs -f my-tbmq-cluster-tbmq-node-0
```
{: .copy-code}

Use the next command to see the state of all statefulsets.

```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/quick-reference/) command reference for more details.