This guide uses **Minikube** as the reference environment for the self-hosted kubernetes deployment.
If you're deploying TBMQ in self-managed cluster without cloud-specific load balancer integrations, Minikube provides a simple way to test the setup end-to-end.

### Install and configure tools

To deploy TBMQ cluster, you will need to install [kubectl](https://kubernetes.io/docs/tasks/tools/),
[helm](https://helm.sh/docs/intro/install/), and [minikube](https://kubernetes.io/docs/tasks/tools/#minikube) tools.

### Start minikube

```bash
minikube start
```
{: .copy-code}

### Install NGINX Ingress Controller

To expose HTTP(S) services in a generic Kubernetes environment like Minikube, you need to install the NGINX Ingress Controller. 
This example installs it using Helm and configures it with a LoadBalancer service type:

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx \
  --set controller.admissionWebhooks.enabled=false \
  --set controller.service.type=LoadBalancer
```
{: .copy-code}

This will deploy the NGINX ingress controller in the default namespace and configure it to expose traffic externally via a LoadBalancer service.
Before continuing, make sure the ingress controller pod is running and ready:

```bash
kubectl get pods -n default
```
{: .copy-code}

You should see something like:

```bash
NAME                                                     READY   STATUS    RESTARTS   AGE
nginx-ingress-ingress-nginx-controller-xxxxx             1/1     Running   0          1m
```

### Start Minikube Tunnel

Since Minikube doesn’t natively support external LoadBalancer services, you need to create a tunnel to expose them outside the cluster. 
This is required for accessing services like the NGINX Ingress Controller and TBMQ’s MQTT LoadBalancer.

Run the following command in a separate terminal:

```bash
minikube tunnel
```
{: .copy-code}

This command requires administrative privileges and may prompt for your password. 
It will create a network route on your machine and assign an external IP to the NGINX LoadBalancer service.

After starting the tunnel, verify that the NGINX Ingress Controller received an EXTERNAL-IP:

```shell
kubectl get svc -n default
```
{: .copy-code}

Example output:

```bash
NAME                                     TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)                      AGE
nginx-ingress-ingress-nginx-controller   LoadBalancer   10.101.102.99    192.168.49.2     80:32023/TCP,443:32144/TCP   2m
```

### Add the TBMQ Cluster Helm Repository

Before installing the chart, add the TBMQ Helm repository to your local Helm client:

```bash
helm repo add tbmq-helm-chart https://shvaykad.github.io/tbmq-helm-chart
helm repo update
```
{: .copy-code}

### Retrieve and Modify Default Chart Values

To customize your TBMQ deployment, download the default `values.yaml` from the chart and update it as needed:

```bash
helm show values tbmq-helm-chart/tbmq-cluster > values.yaml
```
{: .copy-code}

> **Note:** Do not modify `installation.installDbSchema` directly in the `values.yaml`.
This parameter is only required during the first installation to initialize the TBMQ database schema.
Instead, we will pass it explicitly using `--set` option in the `helm install` command.

By default, the chart uses `loadbalancer.type: "nginx"`, which is suitable for Minikube and other generic Kubernetes environments.

### Create a namespace:

It's a good practice to create a dedicated namespace for your TBMQ cluster deployment:

```bash
kubectl create namespace tbmq
```
{: .copy-code}

```bash
kubectl config set-context --current --namespace=tbmq
```
{: .copy-code}

This sets tbmq as the default namespace for your current context, so you don’t need to pass --namespace to every command.

### Install the TBMQ Helm Chart

Now you’re ready to install TBMQ using the Helm chart.
Make sure you're in the same directory as your customized `values.yaml` file.


```bash
helm install my-tbmq-cluster tbmq-helm-chart/tbmq-cluster \
  -f values.yaml \
  --set installation.installDbSchema=true
```
{: .copy-code}

> **Tip:** `my-tbmq-cluster` is the Helm release name. 
You can change it to any name of your choice, which will be used to reference this deployment in future Helm commands.

Once installed, you should see output similar to the following:

```bash
NAME: my-tbmq-cluster
LAST DEPLOYED: Wed Mar 26 17:42:49 2025
NAMESPACE: tbmq
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
TBMQ Cluster my-tbmq-cluster will be deployed in few minutes.
Info:
Namespace: tbmq
```

### Validate MQTT LoadBalancer

If minikube tunnel is running, you should notice that a new service appears in the list, exposing MQTT traffic externally:

```bash
Status:	
	machine: minikube
	pid: 35528
	route: 10.96.0.0/12 -> 192.168.49.2
	minikube: Running
	services: [nginx-ingress-ingress-nginx-controller, my-tbmq-cluster-mqtt-lb]
```

The service `my-tbmq-cluster-mqtt-lb` is the LoadBalancer used for MQTT communication. You can retrieve its `EXTERNAL-IP` with:

```bash
kubectl get svc my-tbmq-cluster-mqtt-lb
```
{: .copy-code}

You should see the similar picture:

```bash
NAME                      TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                                                       AGE
my-tbmq-cluster-mqtt-lb   LoadBalancer   10.101.27.40   10.101.27.40   1883:31041/TCP,8084:30151/TCP,8883:30188/TCP,8085:32706/TCP   41m
```
{: .copy-code}

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.

### Validate HTTP access

```bash
kubectl get ingress my-tbmq-cluster-http-lb
```
{: .copy-code}

You should see the similar picture:

```bash
NAME                      CLASS   HOSTS   ADDRESS         PORTS   AGE
my-tbmq-cluster-http-lb   nginx   *       10.111.137.85   80      47m
```

Use `ADDRESS` field of the `my-tbmq-cluster-http-lb` to connect to the cluster.

You should see TBMQ login page. Use the following default credentials for System Administrator:

**Username:**

```
sysadmin@thingsboard.org
```
{: .copy-code}

**Password:**

```
sysadmin
```
{: .copy-code}

On the first user log-in you will be asked to change the default password to the preferred one and then re-login using the new credentials.

### Troubleshooting

In case of any issues, you can examine service logs for errors. For example, to see TBMQ logs, execute the following command:

```bash
kubectl logs -f my-tbmq-cluster-tbmq-node-0
```
{: .copy-code}

Use the next command to see the state of all statefulsets.

```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/quick-reference/) command reference for more details.

