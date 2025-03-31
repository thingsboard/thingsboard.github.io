By default, the Helm chart uses:

```yaml
loadbalancer:
  type: "nginx"
```

Since you are deploying TBMQ Cluster on AWS EKS, you need to change this value to:

```yaml
loadbalancer:
  type: "aws"
```

This will automatically configure:

- Plain HTTP traffic to be exposed via AWS ALB.
- Plain MQTT traffic to be exposed via AWS NLB.
