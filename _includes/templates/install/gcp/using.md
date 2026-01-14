Now you can open ThingsBoard web interface in your browser using IP address of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:
```
kubectl get ingress
```

You should see the similar picture:

![image](https://img.thingsboard.io/install/cloud/application-loadbalancers.png)

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:

```
kubectl get service
```
{: .copy-code}

You should see the similar picture:

![image](https://img.thingsboard.io/install/cloud/network-loadbalancers.png)

There are two load-balancers:
- tb-mqtt-loadbalancer - for TCP (MQTT) protocol
- tb-udp-loadbalancer - for UDP (COAP/LwM2M) protocol

Use `EXTERNAL-IP` field of the load-balancers to connect to the cluster.

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed database with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

In case of any issues you can examine service logs for errors. For example to see ThingsBoard node logs execute the following command:

```
kubectl logs -f tb-node-0
```

Or use `kubectl get pods` to see the state of the pod.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.

Execute the following command to delete **tb-node** and **load-balancers**:

```
./k8s-delete-resources.sh
```

Execute the following command to delete all data (including database):

```
./k8s-delete-all.sh
```