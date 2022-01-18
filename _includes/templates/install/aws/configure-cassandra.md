Using Cassandra is an optional step. 
We recommend to use Cassandra if you plan to insert more than 5K data points per second or would like to optimize storage space.

##### Provision additional node groups

Provision additional node groups that will be hosting Cassandra instances. 
You may change the machine type. At least 4 vCPUs and 16GB of RAM is recommended.

We will create **3** separate node pools with **1** node per zone. 
Since we plan to use ebs disks, we don't want k8s to launch a pod in the zone where the corresponding disk is not available.
Those zones will have the same node label. We will use this label to target deployment of our stateful set.

Deploy **3** nodes of type **m5.xlarge** in different zones. You may change the zones to correspond to your region:

```bash
eksctl create nodegroup --config-file=<path> --include='cassandra-*'
```
{: .copy-code}

{% assign tbCassandraRegionComments = ". Don't forget to replace *YOUR_AWS_REGION* with the name of your AWS region. " %}
{% assign tbCassandraRegion = "YOUR_AWS_REGION" %}
{% include templates/install/cassandra-k8s-common.md %}