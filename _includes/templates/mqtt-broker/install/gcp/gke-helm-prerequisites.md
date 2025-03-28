### Install and configure GCP tools

To deploy TBMQ using Helm on GKE cluster, you'll need to additionally
install [gcloud](https://cloud.google.com/sdk/downloads) tools.
See [before you begin](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster#before_you_begin)
guide for more info.

Create a new Google Cloud Platform project (recommended) or choose existing one. Make sure you have selected correct
project by executing the following command:

```bash
gcloud init
```

{: .copy-code}
