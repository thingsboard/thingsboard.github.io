The `gp3` EBS volume type is the recommended default for Amazon EKS, offering better performance, cost efficiency, and flexibility compared to `gp2`.

Please download the storage class configuration file:

```bash
curl -o gp3-def-sc.yml https://raw.githubusercontent.com/thingsboard/tbmq/{{ site.release.broker_branch }}/k8s/helm/aws/gp3-def-sc.yml
```
{: .copy-code}

Apply the configuration:

```bash
kubectl apply -f gp3-def-sc.yml
```
{: .copy-code}

If a `gp2` StorageClass exists, it may conflict with `gp3`. You can either make `gp2` storage class non-default:

```bash
kubectl patch storageclass gp2 -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```
{: .copy-code}

Or delete the `gp2` StorageClass (if unused):

```bash
kubectl delete storageclass gp2
```
{: .copy-code}

Check the `gp3` storage class available and marked as default:

```bash
kubectl get sc
```
{: .copy-code}

You should see the similar output:

```text
NAME            PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
gp3 (default)   ebs.csi.aws.com   Delete          WaitForFirstConsumer   true                   30s
```
