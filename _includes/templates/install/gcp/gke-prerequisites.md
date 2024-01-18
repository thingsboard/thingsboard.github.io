#### Install and configure tools 

To deploy ThingsBoard on GKE cluster you'll need to install
[`kubectl`](https://kubernetes.io/docs/tasks/tools/) and [`gcloud`](https://cloud.google.com/sdk/downloads) tools.
See [before you begin](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster#before_you_begin) guide for more info.

Create new Google Cloud Platform project (recommended) or choose existing one. 

Make sure you have selected correct project by executing the following command:

```bash
gcloud init
```
{: .copy-code}

#### Enable GCP services

Enable the GKE and SQL services for your project by executing the following command:

```bash
gcloud services enable container.googleapis.com sql-component.googleapis.com sqladmin.googleapis.com
```
{: .copy-code}