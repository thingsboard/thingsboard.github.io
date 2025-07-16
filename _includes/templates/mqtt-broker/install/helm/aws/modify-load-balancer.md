By default, the Helm chart deploys a standard NGINX Ingress Controller for HTTP and MQTT traffic when installing TBMQ on Kubernetes.

```yaml
loadbalancer:
  type: "nginx"
```

Since you are deploying the TBMQ cluster on AWS EKS, you need to change this value to:

```yaml
loadbalancer:
  type: "aws"
```

This will automatically configure:

- Plain HTTP traffic to be exposed via AWS Application Load Balancer (ALB).
- Plain MQTT traffic to be exposed via AWS Network Load Balancer (NLB).

#### HTTPS access

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate. Note your certificate ARN.

Next, you must set `loadbalancer.http.ssl.enabled` to `true`
and update the `loadbalancer.http.ssl.certificateRef` with the ACM certificate ARN configured before.

See the example below:

```yaml
loadbalancer:
  type: "aws"
  http:
    enabled: true
    ssl:
      enabled: true
      certificateRef: "<your-acm-certificate-arn-for-alb>"
```

#### MQTTS access

##### TLS termination (One-way TLS)

The simplest way to configure MQTTS is to make your MQTT load balancer (AWS NLB) to act as a TLS termination point.
This way we set up the one-way TLS connection, where the traffic between your devices and load balancers is encrypted, and the traffic between your load balancer and TBMQ is not encrypted.
There should be no security issues, since the ALB/NLB is running in your VPC.
The only major disadvantage of this option is that you can’t use “X.509 certificate” MQTT client credentials,
since information about client certificate is not transferred from the load balancer to the TBMQ.

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate. Note your certificate ARN.

Next, you must set `loadbalancer.mqtt.tlsTermination.enabled` to `true`
and update the `loadbalancer.mqtt.tlsTermination.certificateRef` with the ACM certificate ARN configured before.

See the example below:

```yaml
loadbalancer:
  type: "aws"
  mqtt:
    enabled: true
    tlsTermination:
      enabled: true
      certificateRef: "<your-acm-certificate-arn-for-nlb>"
```

##### Mutual TLS (Two-Way TLS or mTLS)

The more complex way to enable MQTTS is to obtain valid (signed) TLS certificate and configure it in the TBMQ.
The main advantage of this option is that you may use it in combination with “X.509 certificate” MQTT client credentials.

Please refer to the TBMQ Helm chart documentation for [details](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster#configuring-mutual-tls-mtls-for-mqtt) on configuring Two-Way TLS.

{% capture tls-termination %}

TLS Termination configuration will be ignored if `loadbalancer.mqtt.mutualTls.enabled` is set to `true`.

{% endcapture %}
{% include templates/info-banner.md content=tls-termination %}
