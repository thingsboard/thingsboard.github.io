Execute the following command to deploy the broker:

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}

After a few minutes, you may execute the next command to check the state of all pods.

```bash
kubectl get pods
```
{: .copy-code}

If everything went fine, you should be able to see `tb-broker-0` and `tb-broker-1` pods. Every pod should be in the `READY` state.