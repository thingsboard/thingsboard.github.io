Execute the following command to deploy plain http load balancer:

```bash
kubectl apply -f receipts/http-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see the similar output:

```text
NAME                     CLASS    HOSTS   ADDRESS         PORTS   AGE
tbmq-http-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```
