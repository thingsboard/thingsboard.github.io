In the `cluster.yml` file you can find suggested cluster configuration.
Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones
  (the default value is `[us-east-1a,us-east-1b,us-east-1c]`)
- `instanceType` - the type of the instance with TB node (the default value is `m5.xlarge`)

**Note**: if you don't make any changes to `instanceType` and `desiredCapacity` fields, the EKS will deploy {{eksNote}}.

{% capture aws-eks-vpc %}

The following command will create new VPC for your ThingsBoard cluster. This guide assumes you will create new VPC.
Although it is fine to use existing VPC and subnets as well.
You can find more information about configuring VPC for `eksctl` [here](https://eksctl.io/usage/vpc-networking/).

{% endcapture %}
{% include templates/info-banner.md content=aws-eks-vpc %}

Command to create AWS cluster:

```
eksctl create cluster -f cluster.yml
```
{: .copy-code}