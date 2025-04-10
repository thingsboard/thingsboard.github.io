By default, the Helm chart deploys a standard NGINX Ingress Controller for HTTP and MQTT traffic when installing TBMQ on Kubernetes.

```yaml
loadbalancer:
  type: "nginx"
```

which is suitable for Minikube and other generic Kubernetes environments.

#### HTTPS access

Currently, HTTPS termination at the load balancer level is not implemented for the NGINX Ingress Controller. This functionality may be added in a future release.

#### MQTTS access

The NGINX Ingress Controller does not support TLS termination for TCP-based protocols like MQTT.
If you want to secure MQTT communication,
you must configure Two-Way TLS (Mutual TLS or mTLS) directly on the application level (TBMQ side).
Please refer to the TBMQ Helm chart documentation for [details](https://artifacthub.io/packages/helm/tbmq-helm-chart/tbmq-cluster#configuring-mutual-tls-mtls-for-mqtt) on configuring Two-Way TLS.
