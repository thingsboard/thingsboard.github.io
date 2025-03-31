By default, the Helm chart deploys a standard NGINX Ingress Controller for HTTP and MQTT traffic when installing TBMQ on Kubernetes.

```yaml
loadbalancer:
  type: "nginx"
```

which is suitable for Minikube and other generic Kubernetes environments.