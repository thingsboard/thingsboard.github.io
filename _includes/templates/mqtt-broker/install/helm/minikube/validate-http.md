```bash
kubectl get ingress my-tbmq-cluster-http-lb
```
{: .copy-code}

You should see the similar picture:

```text
NAME                      CLASS   HOSTS   ADDRESS         PORTS   AGE
my-tbmq-cluster-http-lb   nginx   *       10.111.137.85   80      47m
```

Use `ADDRESS` field of the `my-tbmq-cluster-http-lb` to connect to the cluster.

{% include templates/mqtt-broker/login.md %}
