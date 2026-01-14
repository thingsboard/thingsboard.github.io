#### Validate Web UI access

Now you can open ThingsBoard web interface in your browser using DNS name of the load balancer.

You can see DNS name (the `ADDRESS` column) of the HTTP load-balancer using command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

![image](https://img.thingsboard.io/install/cloud/aws-application-loadbalancers.png)

Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin

If you installed DataBase with demo data (using `--loadDemo` flag) you can also use the following credentials:

- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### Validate MQTT/CoAP access

To connect to the cluster via MQTT or COAP you'll need to get corresponding service, you can do it with command:

```bash
kubectl get service
```
{: .copy-code}

You should see the similar picture:

![image](https://img.thingsboard.io/install/cloud/aws-network-loadbalancers.png)


There are two load-balancers:
- tb-mqtt-loadbalancer-external - for MQTT protocol
- tb-coap-loadbalancer-external - for COAP protocol

Use `EXTERNAL-IP` field of the load-balancers to connect to the cluster.

#### Troubleshooting

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```bash
kubectl logs -f tb-node-0
```
{: .copy-code}

Or use `kubectl get pods` to see the state of the pods.
Or use `kubectl get services` to see the state of all the services.
Or use `kubectl get deployments` to see the state of all the deployments.
See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for details.