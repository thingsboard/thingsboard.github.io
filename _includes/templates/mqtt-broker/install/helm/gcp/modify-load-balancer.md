By default, the Helm chart deploys a standard NGINX Ingress Controller for HTTP and MQTT traffic when installing TBMQ on Kubernetes.

```yaml
loadbalancer:
  type: "nginx"
```

However, since you are deploying TBMQ Cluster on GCP GKE, you need to change this value to:

```yaml
loadbalancer:
  type: "gcp"
```

This will automatically configure:

- Plain HTTP traffic to be exposed via HTTP Load Balancer.
- Plain MQTT traffic to be exposed via TCP Load Balancer.

#### HTTPS access

The process of configuring the load balancer using Google-managed SSL certificates is described on the official [documentation page](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs).
The instructions below are extracted from the official documentation. Make sure you read prerequisites carefully before proceeding.

 - Reserve a static global IP address:

```bash
gcloud compute addresses create tbmq-http-lb-address --global
```
{: .copy-code}

 - Get the reserved static IP address:

```bash
gcloud compute addresses describe tbmq-http-lb-address --global --format="get(address)"
```
{: .copy-code}

- Configure your DNS:

You must have at least one fully qualified domain name (FQDN) configured to point to the reserved static IP address.
This is required for the managed certificate to be issued successfully.

 - Update the `values.yaml` file:

```yaml
loadbalancer:
  type: "gcp"
  http:
    enabled: true
    ssl:
      enabled: true
      # This will be the name of the ManagedCertificate resource automatically created by the Helm chart.
      certificateRef: "<your-managed-certificate-resource-name>"
      domains:
      # Must point to the reserved static IP.
      - <your-domain-name> 
      # Static IP address for the GCP HTTP(S) load balancer.
      staticIP: "tbmq-http-lb-address"
```

This will automatically issue and manage an SSL certificate via the ManagedCertificate resource created by the Helm chart and expose TBMQ securely over HTTPS.

#### MQTTS access

GCP Load Balancer does not support TLS termination for MQTT traffic.
If you want to secure MQTT communication,
you must configure Two-Way TLS (Mutual TLS or mTLS) directly on the application level (TBMQ side).
Please refer to the TBMQ Helm chart documentation for [details](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster#configuring-mutual-tls-mtls-for-mqtt) on configuring Two-Way TLS.
