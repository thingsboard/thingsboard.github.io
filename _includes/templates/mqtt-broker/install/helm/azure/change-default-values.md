By default, the Helm chart deploys a standard NGINX Ingress Controller for HTTP and MQTT traffic when installing TBMQ on Kubernetes.

```yaml
loadbalancer:
  type: "nginx"
```

Since you are deploying TBMQ Cluster on Azure AKS, you need to change this value to:

```yaml
loadbalancer:
  type: "azure"
```

This will automatically configure:

- Plain HTTP traffic to be exposed via Azure Application Gateway.
- Plain MQTT traffic to be exposed via Azure Load Balancer.

#### HTTPS access

To enable TLS for HTTP traffic,
you must set `loadbalancer.http.ssl.enabled` to `true`
and update the `loadbalancer.http.ssl.certificateRef` with name of the SSL certificate already configured in your Azure Application Gateway.

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

#### MQTTS access

Azure Load Balancer does not support TLS termination for MQTT traffic.
If you want to secure MQTT communication,
you must configure Two-Way TLS (Mutual TLS or mTLS) directly on the application level (TBMQ side).
Please refer to the TBMQ Helm chart documentation for [details](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster#configuring-mutual-tls-mtls-for-mqtt) on configuring Two-Way TLS.