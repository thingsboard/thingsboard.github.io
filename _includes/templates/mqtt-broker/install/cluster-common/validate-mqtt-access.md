To connect to the cluster via MQTT, you will need to get the corresponding service IP. You can do this with the command:

```bash
kubectl get services
```
{: .copy-code}

You should see the similar picture:

```text
NAME                     TYPE           CLUSTER-IP       EXTERNAL-IP              PORT(S)                         AGE
tbmq-mqtt-loadbalancer   LoadBalancer   10.100.119.170   *******                  1883:30308/TCP,8883:31609/TCP   6m58s
```

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.
