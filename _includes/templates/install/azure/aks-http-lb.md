Configure HTTP(S) Load Balancer to access web interface of your ThingsBoard instance. Basically you have 3 possible options of configuration:

   - http - Load Balancer without HTTPS support. Recommended for development. The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
   - https - Load Balancer with HTTPS support. Recommended for production. Acts as an SSL termination point. You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.
   
See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

Execute the following command to deploy plain http load balancer:

```
kubectl apply -f receipts/http-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-http-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```
Now, you may use the address (the one you see instead of 34.111.24.134 in the command output) to access HTTP web UI (port 80) and connect your devices via HTTP API Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### HTTPS Load Balancer

For using ssl certificates we can add our certificate directly in Azure ApplicationGateWay using command:
```
az network application-gateway ssl-cert create \
   --resource-group $(az aks show --name $TB_CLUSTER_NAME --resource-group $AKS_RESOURCE_GROUP --query nodeResourceGroup | tr -d '"') \
   --gateway-name $AKS_GATEWAY\
   --name ThingsBoardHTTPCert \
   --cert-file YOUR_CERT \
   --cert-password YOUR_CERT_PASS
```
{: .copy-code}

After we added certificate to Application Load balancer we can execute: 
```
kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:
```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-https-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```


{% capture https_lb_device_api_warn %}
**NOTE**: The load balancer will redirect all HTTP traffic to HTTPS. Devices that do not support HTTPS will not be able to connect to ThingsBoard.
If you would like to support such devices, you may either deploy separate load balancer for HTTP transport (recommended)
or disable the redirect behavior by changing the *appgw.ingress.kubernetes.io/ssl-redirect* setting in the *https-load-balancer.yml* file.

{% endcapture %}
{% include templates/warn-banner.md content=https_lb_device_api_warn %}