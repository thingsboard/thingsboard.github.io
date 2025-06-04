Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar output:

```text
NAME                          CLASS    HOSTS   ADDRESS              PORTS   AGE
my-tbmq-cluster-http-lb       <none>   *       <your-domain-name>   80      3d1h
```

Use `ADDRESS` field of the my-tbmq-cluster-http-lb to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

### Validate HTTPS access (if configured)

Check that the domain name is configured correctly using dig:

```bash
dig <your-domain-name>
```
{: .copy-code}

Sample output:

```text

; <<>> DiG 9.11.3-1ubuntu1.16-Ubuntu <<>> <your-domain-name>
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
kubectl describe managedcertificate <your-managed-certificate-resource-name>
```
{: .copy-code}

The Certificate will be eventually provisioned if you have configured domain records properly. Use `<your-domain-name>` to connect to the cluster.
