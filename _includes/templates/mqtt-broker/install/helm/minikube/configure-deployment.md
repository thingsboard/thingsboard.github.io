### Start Minikube

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

```text
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

```text
NAME                                     TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)                      AGE
nginx-ingress-ingress-nginx-controller   LoadBalancer   10.101.102.99    192.168.49.2     80:32023/TCP,443:32144/TCP   2m
```
