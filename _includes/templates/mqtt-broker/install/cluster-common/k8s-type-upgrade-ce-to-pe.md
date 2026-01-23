### Upgrade from TBMQ CE to TBMQ PE (v2.2.0)

To upgrade your existing **TBMQ Community Edition (CE)** to **TBMQ Professional Edition (PE)**, ensure you are running the latest **TBMQ CE {{site.release.broker_full_ver}}** version before starting the process.
Merge your current configuration with the latest [TBMQ PE K8S scripts](https://github.com/thingsboard/tbmq-pe-k8s/tree/{{ site.release.broker_branch }}).
Do not forget to [configure the license key](#configure-the-license-key).

Run the following commands, including the upgrade script to migrate PostgreSQL database data from CE to PE:

```bash
./k8s-delete-tbmq.sh
./k8s-upgrade-tbmq.sh --fromVersion=ce
./k8s-deploy-tbmq.sh
```
{: .copy-code}
