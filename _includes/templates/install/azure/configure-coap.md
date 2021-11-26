Configure CoAP load balancer if you plan to use CoAP protocol to connect devices.

Create CoAP load balancer using following command:

```bash
kubectl apply -f receipts/coap-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all UDP traffic for the following ports:

 * 5683 - CoAP server non-secure port
 * 5684 - CoAP server secure DTLS port.

#### CoAP over DTLS

This type of the load balancer requires you to provision and maintain valid SSL certificate on your own.
Follow the generic [CoAP over DTLS](/docs/{{docsPrefix}}user-guide/coap-over-dtls) guide
to configure required environment variables in the *{{tbServicesFile}}* file.
