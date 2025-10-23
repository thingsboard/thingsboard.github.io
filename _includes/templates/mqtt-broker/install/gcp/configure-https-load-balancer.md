The process of configuring the load balancer using Google-managed SSL certificates is described on the official [documentation page](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs).
The instructions below are extracted from the official documentation. Make sure you read [prerequisites](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs#prerequisites) carefully before proceeding.

```bash
gcloud compute addresses create {{staticIP}} --global
```
{: .copy-code}

Replace the *PUT_YOUR_DOMAIN_HERE* with a valid domain name in the *https-load-balancer.yml* file:

```bash
nano receipts/https-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy secure http load balancer:

```bash
 kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see a similar output:

```text
NAME                      CLASS    HOSTS   ADDRESS         PORTS   AGE
tbmq-https-loadbalancer   gce      *       34.111.24.134   80      7m25s
```

Now, **assign the domain name** you have used to the load balancer IP address (the one you see instead of 34.111.24.134 in the command output).

Check that the domain name is configured correctly using dig:

```bash
dig YOUR_DOMAIN_NAME
```
{: .copy-code}

Sample output:

```text

; <<>> DiG 9.11.3-1ubuntu1.16-Ubuntu <<>> YOUR_DOMAIN_NAME
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12513
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;YOUR_DOMAIN_NAME.	IN	A

;; ANSWER SECTION:
YOUR_DOMAIN_NAME. 36 IN	A	34.111.24.134

;; Query time: 0 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: Fri Nov 19 13:00:00 EET 2021
;; MSG SIZE  rcvd: 74

```

Once assigned, wait for the Google-managed certificate to finish provisioning. This might take up to 60 minutes. You can check the status of the certificate using the following command:

```bash
kubectl describe managedcertificate managed-cert
```
{: .copy-code}

Certificate will be eventually provisioned if you have configured domain records properly.
