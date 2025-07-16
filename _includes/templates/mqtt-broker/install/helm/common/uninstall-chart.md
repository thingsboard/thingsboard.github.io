To uninstall the TBMQ Helm chart, run the following command:

```bash
helm delete my-tbmq-cluster
```
{: .copy-code}

This command removes all TBMQ components associated with the release from the namespace set in your current Kubernetes context.

The `helm delete` command removes only the logical resources of the TBMQ cluster.
To fully clean up all persistent data, you may also need to manually delete the associated Persistent Volume Claims (PVCs) after uninstallation:

```bash
kubectl delete pvc -l app.kubernetes.io/instance=my-tbmq-cluster
```
{: .copy-code}
