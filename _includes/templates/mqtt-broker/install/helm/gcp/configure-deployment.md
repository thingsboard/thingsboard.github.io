### Configure GCP tools

See [before you begin](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster#before_you_begin)
guide for more info.

Create a new Google Cloud Platform project (recommended) or choose existing one. Make sure you have selected correct
project by executing the following command:

```bash
gcloud init
```
{: .copy-code}

### Enable GKE service

```bash
gcloud services enable container.googleapis.com
```
{: .copy-code}

### Define environment variables

{% include templates/mqtt-broker/install/helm/gcp/define-env-variables.md %}

### Configure and create GKE cluster

{% include templates/install/gcp/regional-gke-cluster.md %}

### Update the context of kubectl

{% include templates/install/gcp/update-kubectl-zone.md %}
