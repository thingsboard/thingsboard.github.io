We recommend deploying Bitnami Kafka from Helm. For that, review the `kafka` folder.

```bash
ls kafka/
```
{: .copy-code}

You can find there _default-values-kafka.yml_ file - default values downloaded from [Bitnami artifactHub](https://artifacthub.io/packages/helm/bitnami/kafka). And _values-kafka.yml_ file with modified values.
We recommend keeping the first file untouched and making changes to the second one only. This way the upgrade process to the next version will go more smoothly as it will be possible to see diff.

To add the Bitnami helm repo:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
```
{: .copy-code}

To install Bitnami Kafka execute the following command:

```bash
helm install kafka -f kafka/values-kafka.yml bitnami/kafka --version 29.3.4
```
{: .copy-code}

Wait up to several minutes until Kafka pods are up and running.