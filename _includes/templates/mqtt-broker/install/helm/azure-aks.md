### Install and configure AZ tools

{% include templates/mqtt-broker/install/azure/aks-helm-prerequisites.md %} 

### Define environment variables

{% include templates/mqtt-broker/install/azure/aks-define-env-variables.md %}

### Configure and create AKS cluster

{% include templates/mqtt-broker/install/azure/aks-configure-and-create-cluster.md %}

### Update the context of kubectl

{% include templates/mqtt-broker/install/azure/aks-update-kubectl-ctx.md %}

### Add the TBMQ Cluster Helm Repository

{% include templates/mqtt-broker/install/helm/common/add-helm-repo.md %}

### Retrieve and modify default chart values

{% include templates/mqtt-broker/install/helm/common/retrieve-and-modify-default-chart-values.md %}

By default, the Helm chart uses:

```yaml
loadbalancer:
  type: "nginx"
```

Since you are deploying TBMQ Cluster on AKS, you need to change this value to:

```yaml
loadbalancer:
  type: "azure"
```

This will automatically configure:

 - Plain HTTP traffic to be exposed via Azure Application Gateway.
 - Plain MQTT traffic to be exposed via Azure Load Balancer.

#### HTTP(S) access

To enable TLS for HTTP traffic, you need to configure the `appgw-ssl-certificate` reference in the Helm chart.
See the example below:

```yaml
loadbalancer:
  type: "azure"
  http:
    enabled: true
    ssl:
      enabled: true
      certificateRef: "<your-appgw-ssl-certificate-name>"
```

Where `certificateRef` must be set to the name of the SSL certificate already configured in your Azure Application Gateway.

#### MQTT(S) access

Azure Load Balancer does not support TLS termination for MQTT traffic. 
If you want to secure MQTT communication,
you must configure Two-Way TLS (Mutual TLS or mTLS) directly on the application level (TBMQ side).
Please refer to the TBMQ Helm chart documentation for [details](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster#configuring-mutual-tls-mtls-for-mqtt) on configuring Two-Way TLS.

### Create namespace

{% include templates/mqtt-broker/install/helm/common/create-namespace.md %}

### Install the TBMQ Helm chart

{% include templates/mqtt-broker/install/helm/common/install-chart.md %}

### Validate the setup

Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```

{: .copy-code}

You should see the similar picture:

```text
NAME                          CLASS    HOSTS   ADDRESS         PORTS   AGE
my-tbmq-cluster-http-lb       <none>   *       34.111.24.134   80      3d1h
```

Use `ADDRESS` field of the `my-tbmq-cluster-http-lb` to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

#### Validate MQTT access

To connect to the cluster via MQTT you will need to get corresponding service IP. You can do this with the command:

```bash
kubectl get services
```

{: .copy-code}

You should see the similar picture:

```text
NAME                          TYPE           CLUSTER-IP       EXTERNAL-IP              PORT(S)                         AGE
my-tbmq-cluster-mqtt-lb       LoadBalancer   10.100.119.170   *******                  1883:30308/TCP,8883:31609/TCP   6m58s
```

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.

### Troubleshooting

{% include templates/mqtt-broker/install/helm/common/helm-setup-troubleshooting.md %}