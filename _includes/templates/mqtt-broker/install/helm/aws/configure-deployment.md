### Configure AWS tools

```bash
aws configure
```
{: .copy-code}

### Configuration overview

To deploy the EKS cluster, we recommend using a pre-defined EKS cluster configuration file.
Please download it using next command:

```bash
curl -o cluster.yml https://raw.githubusercontent.com/thingsboard/tbmq/{{ site.release.broker_branch }}/k8s/helm/aws/cluster.yml
```
{: .copy-code}

Here are the fields you can change depending on your needs:
- `region` - should be the AWS region where you want your cluster to be located (the default value is `us-east-1`)
- `availabilityZones` - should specify the exact IDs of the region's availability zones (the default value is `[ us-east-1a,us-east-1b,us-east-1c ]`)
- `instanceType` - type of the instances for node groups. Change per workload (e.g., TBMQ, Redis, Kafka).
- `desiredCapacity` - number of nodes per node group. Defaults are suggested for testing.
- `volumeType` - type of EBS volume for EC2 nodes. Defaults to `gp3`.

Refer to [Amazon EC2 Instance types](https://aws.amazon.com/ec2/instance-types/)
to choose the right instance types for your production workloads.

### PostgreSQL consideration (Optional Node Group)

TBMQ Helm chart supports external PostgreSQL, so you might not need this node group:

```yaml
  - name: tbmq-postgresql
    instanceType: c7a.large
    desiredCapacity: 1
    maxSize: 1
    minSize: 0
    labels: { role: postgresql }
    volumeType: gp3
    volumeSize: 20
```

You can safely remove this section if:

 - You're using Amazon RDS or an existing PostgreSQL service.
 - You want to keep your database outside the EKS cluster.

###  IAM setup for OIDC and AWS Load Balancer Controller

By including the following block in your `cluster.yml`, you automatically enable IAM roles for service accounts and provision the AWS Load Balancer Controller service account:

```yaml
iam:
  withOIDC: true
  serviceAccounts:
    - metadata:
        name: aws-load-balancer-controller
        namespace: kube-system
      wellKnownPolicies:
        awsLoadBalancerController: true
```

This configuration:
 - Enables [OIDC](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) integration (required for IAM roles for service accounts).
 - Automatically creates a service account with the appropriate IAM policies for the [AWS Load Balancer Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html).

This is the easiest and most integrated way to set things up when using `eksctl`.

Alternative, if you prefer not to manage IAM inside `cluster.yml`, or your organization requires manual IAM policy creation, you can set it up manually after cluster creation.

Follow these official guides from AWS: 

- [Create an IAM OIDC provider for your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)
- [Route internet traffic with AWS Load Balancer Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)

### Add-ons explained

The `addons` section in `cluster.yml` automatically installs and configures essential components that extend the base functionality of your EKS cluster.

 - **aws-ebs-csi-driver** - enables dynamic provisioning of Amazon EBS volumes using the [EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html).
   TBMQ components like Redis and Kafka require persistent storage. This driver allows Kubernetes to provision `gp3` volumes on-demand when a PersistentVolumeClaim is created.
 - **aws-efs-csi-driver** - allows your workloads to use Amazon EFS (Elastic File System) as a persistent volume via the [EFS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html).
   TBMQ doesn't require EFS, but this is useful if you want shared access to the same volume from multiple pods (e.g., for shared logs, config files, or stateful workloads with horizontal scaling).
 - **vpc-cni** - installs the [Amazon VPC CNI plugin](https://docs.aws.amazon.com/eks/latest/userguide/managing-vpc-cni.html), which enables Kubernetes pods to have native VPC networking. 
   Provides each pod with its own IP address from the VPC subnet. Essential for efficient pod-to-pod and pod-to-external communication.
 - **coredns** - provides internal DNS resolution for Kubernetes services via [CoreDNS](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/).
 - **kube-proxy** - manages network rules on each node to handle service routing, via [kube-proxy](https://kubernetes.io/docs/concepts/services-networking/service/#kube-proxy).

### Create EKS cluster

```bash
eksctl create cluster -f cluster.yml
```
{: .copy-code}

### Create GP3 storage class and make it default

{% include templates/mqtt-broker/install/aws/gp3-sc.md %}

### Attach Policy

If you've created your EKS cluster using the provided `cluster.yml`, then the following are already configured automatically:
 - OIDC provider is enabled (withOIDC: true)
 - Service account aws-load-balancer-controller is created in the kube-system namespace.
 - The account is annotated for IAM access and linked with the well-known AWS-managed policy.

However, you must manually attach the AWSLoadBalancerControllerIAMPolicy (or your custom policy) to the IAM role created by eksctl.

 - Find the role created by `eksctl`:

```bash
aws iam list-roles \
  --query "Roles[?contains(RoleName, 'eksctl-tbmq')].RoleName" \
  --output text
```
{: .copy-code}

Looks for something like:

```text
eksctl-tbmq-addon-iamserviceaccount-kube-syst-Role1-J9l4M87BqmNu
```

- Attach the policy:

Replace both `YOUR_AWS_ACCOUNT_ID` and `ROLE_NAME` with your actual AWS account ID and the IAM role name found in the previous step:

```bash
aws iam attach-role-policy \
--policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT_ID:policy/AWSLoadBalancerControllerIAMPolicy \
--role-name ROLE_NAME
```
{: .copy-code}

You can verify the attachment with:

```bash
aws iam list-attached-role-policies --role-name ROLE_NAME
```
{: .copy-code}

You should see similar output:

```text
ATTACHEDPOLICIES        arn:aws:iam::YOUR_AWS_ACCOUNT_ID:policy/AWSLoadBalancerControllerIAMPolicy     AWSLoadBalancerControllerIAMPolicy
```

### Create AWS Load Balancer Controller

To support Network Load Balancer (NLB) and Application Load Balancer (ALB) provisioning via Kubernetes annotations,
you'll need to deploy the AWS Load Balancer Controller into your EKS cluster.

```bash
helm repo add eks https://aws.github.io/eks-charts
helm repo update
```
{: .copy-code}

After that, install the controller into the `kube-system` namespace and associates it with your cluster:

```bash
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
--namespace kube-system \
--set clusterName=tbmq \
--set serviceAccount.create=false \
--set serviceAccount.name=aws-load-balancer-controller
```
{: .copy-code}

Verify that the controller is installed:

```bash
kubectl get deployment -n kube-system aws-load-balancer-controller
```
{: .copy-code}

An example output is as follows.

```text
NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
aws-load-balancer-controller   2/2     2            2           84s
```
