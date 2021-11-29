## Upgrading to new ThingsBoard version

Merge your local changes with the latest release branch from the repo you have used in the [Step 1](#step-1-clone-thingsboard-ce-k8s-scripts-repository).


In case when database upgrade is needed, execute the following commands:

```bash
 ./k8s-upgrade-tb.sh --fromVersion=[FROM_VERSION]
```
{: .copy-code}

Where:

- `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/upgrade-instructions) for valid `fromVersion` values.

Note: You may optionally stop the tb-node pods while you run the upgrade of the database. This will cause downtime, but will make sure that the DB state will be consistent after the update.
Most of the updates do not require the tb-nodes to be stopped.

Once completed, execute deployment of the resources again. This will cause rollout restart of the thingsboard components with the newest version.

```yaml
./k8s-deploy-resources.sh
```

