**Note**: You may optionally stop the TBMQ pods while you run the upgrade of the database with the below command.

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

This will cause downtime, but will make sure that the DB state will be consistent after the update.
Most of the updates do not require the TBMQ to be stopped.

Once completed, execute deployment of the resources again. This will cause rollout restart of the TBMQ with the newest version.

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}