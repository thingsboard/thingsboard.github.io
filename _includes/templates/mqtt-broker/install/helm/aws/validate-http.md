Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          CLASS    HOSTS   ADDRESS                                                            PORTS   AGE
my-tbmq-cluster-http-lb       <none>   *       k8s-tbmq-mytbmq-000aba1305-222186756.eu-west-1.elb.amazonaws.com   80      3d1h
```

Use `ADDRESS` field of the `my-tbmq-cluster-http-lb` to connect to the cluster.

{% include templates/mqtt-broker/login.md %}
