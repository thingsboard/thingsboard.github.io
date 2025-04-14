To ensure high availability and proper scheduling in your EKS-based TBMQ cluster,
you must assign TBMQ components to specific node groups using the `nodeSelector` field in your Helm `values.yml`.

Your `cluster.yml` already defines dedicated node groups with role-based labels.
For example for `tbmq-node` mananged node group you have:

```yaml
labels: { role: tbmq }
```

You must map each component to the appropriate node group using these labels.

Here’s how to explicitly assign each component:

- TBMQ Broker:

```yaml
tbmq:
  nodeSelector:
    role: tbmq
```
{: .copy-code}

- TBMQ Integration Executor:

```yaml
tbmq-ie:
  nodeSelector:
    role: tbmq-ie
```
{: .copy-code}

- Kafka Controller Nodes:

```yaml
kafka:
  controller:
    nodeSelector:
      role: kafka
```
{: .copy-code}

- Redis Cluster Nodes:

```yaml
redis-cluster:
  redis:
    nodeSelector:
      role: redis
```
{: .copy-code}

- PostgreSQL (if not using external DB):

```yaml
postgresql:
  primary:
    nodeSelector:
      role: postgresql

  backup:
    cronjob:
      nodeSelector:
        role: postgresql
```
{: .copy-code}