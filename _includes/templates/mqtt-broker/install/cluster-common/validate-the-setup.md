Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       34.111.24.134   80      3d1h
```

Use `ADDRESS` field of the tb-broker-http-loadbalancer to connect to the cluster.

{% include templates/mqtt-broker/login.md %}
