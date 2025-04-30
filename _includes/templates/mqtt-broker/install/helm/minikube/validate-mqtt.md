If minikube tunnel is running, you should notice that a new service appears in the list, exposing MQTT traffic externally:

```text
Status:	
	machine: minikube
	pid: 35528
	route: 10.96.0.0/12 -> 192.168.49.2
	minikube: Running
	services: [nginx-ingress-ingress-nginx-controller, my-tbmq-cluster-mqtt-lb]
```

The service `my-tbmq-cluster-mqtt-lb` is the LoadBalancer used for MQTT communication. You can retrieve its `EXTERNAL-IP` with:

```bash
kubectl get svc my-tbmq-cluster-mqtt-lb
```
{: .copy-code}

You should see the similar picture:

```text
NAME                      TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                                                       AGE
my-tbmq-cluster-mqtt-lb   LoadBalancer   10.101.27.40   *******        1883:31041/TCP,8084:30151/TCP,8883:30188/TCP,8085:32706/TCP   41m
```
{: .copy-code}

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.
