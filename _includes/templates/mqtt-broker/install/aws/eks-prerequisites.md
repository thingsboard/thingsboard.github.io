#### Install and configure tools 

To deploy TBMQ on EKS cluster you'll need to install [kubectl](https://kubernetes.io/docs/tasks/tools/), 
 [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html) and 
 [awscli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) tools.

Afterward you need to configure Access Key, Secret Key and default region. 
To get Access and Secret keys please follow [this](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) guide.
The default region should be the ID of the region where you'd like to deploy the cluster.

```
aws configure
```
{: .copy-code}
