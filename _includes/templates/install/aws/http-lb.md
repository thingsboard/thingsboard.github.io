
Configure HTTP(S) Load Balancer to access web interface of your ThingsBoard instance. Basically you have 2 possible options of configuration:

* http - Load Balancer without HTTPS support. Recommended **for development.**
  The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended **for production.** Acts as an SSL termination point.
  You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

Execute the following command to deploy plain http load balancer:

```bash
kubectl apply -f receipts/http-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                   CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-http-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```

Now, you may use the address (the one you see instead of 34.111.24.134 in the command output) to access HTTP web UI (port 80) and connect your devices via [HTTP API](/docs/{{docsPrefix}}reference/http-api/)
Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer

#### HTTPS Load Balancer

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate. Note your certificate ARN.

Edit the load balancer configuration and replace *YOUR_HTTPS_CERTIFICATE_ARN* with your certificate ARN:

```bash
nano receipts/https-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy plain https load balancer:

```bash
kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}