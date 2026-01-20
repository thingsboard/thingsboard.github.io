TBMQ v2.1.0 introduces enhancements, including a new Integration Executor microservice and bumped versions for third-party services.

#### Add Integration Executor microservice

This release adds support for external integrations via the new [Integration Executor](/docs/{{docsPrefix}}mqtt-broker/integrations/) microservice.

To retrieve the latest configuration files, including those for Integration Executors, pull the updates from the release branch. 
Follow the steps outlined in the [run upgrade instructions](#run-upgrade) up to the execution of the upgrade script (do not execute **.sh** commands yet).

The `cluster.yml` file has been updated to include the new managed node group specifically for Integration Executor pods.

```yaml
  - name: tbmq-ie
    instanceType: m7a.large
    desiredCapacity: 2
    maxSize: 2
    minSize: 1
    labels: { role: tbmq-ie }
    ssh:
      allow: true
      publicKeyName: 'dlandiak' # Note, use your own public key name here
```

To create it, execute the following command:

```shell
eksctl create nodegroup --config-file=cluster.yml
```
{: .copy-code}

You may choose to skip creating dedicated instances for Integration Executors. 
If so, you can skip this step, but you must update the **nodeSelector** section in the `tbmq-ie.yml` file accordingly.

```yaml
  nodeSelector:
    role: tbmq-ie
```

Change the role from **"tbmq-ie"** to **"tbmq"** to deploy Integration Executor pods on the same AWS EC2 instances as the TBMQ pods.

#### Update third-party services

{% include templates/mqtt-broker/upgrade/upgrade-third-parties-for-2.1.0-release-aws-cluster.md %}
