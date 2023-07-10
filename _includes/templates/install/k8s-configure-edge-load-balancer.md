Configure the Edge load balancer if you plan to connect Edge instances to your ThingsBoard server.

To create a TCP Edge load balancer, apply the provided YAML file using the following command:

```bash
kubectl apply -f receipts/edge-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic on port 7070.

After the Edge load balancer is provisioned, you can connect Edge instances to your ThingsBoard server.

Before connecting Edge instances, you need to obtain the external IP address of the Edge load balancer. To retrieve this IP address, execute the following command:

```bash
kubectl get services | grep "EXTERNAL-IP\|tb-edge-loadbalancer"
```
{: .copy-code}

You should see output similar to the following:

```text
NAME                   TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)          AGE
tb-edge-loadbalancer   LoadBalancer   10.44.5.255   104.154.29.225   7070:30783/TCP   85m
```

Make a note of the external IP address and use it later in the Edge connection parameters as **CLOUD_RPC_HOST**.