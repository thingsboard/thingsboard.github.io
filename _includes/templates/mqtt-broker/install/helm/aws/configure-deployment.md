### Install and configure AWS tools

To deploy TBMQ using Helm on EKS cluster, you'll need to additionally install the following tools:

- [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- [awscli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

Afterward, you need to configure Access Key, Secret Key and default region.
To get Access and Secret keys, please follow [this](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) guide.
The default region should be the ID of the region where you'd like to deploy the cluster.

```bash
aws configure
```
{: .copy-code}


### cluster.yml + Configure and create EKS cluster

TODO: update this section.

### Create AWS load-balancer controller

Once the cluster is ready, you'll need to create AWS load-balancer controller.
You can do it by following [this](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) guide.