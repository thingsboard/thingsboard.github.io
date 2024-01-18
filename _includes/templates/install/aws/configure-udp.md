Configure UDP load balancer if you plan to use CoAP or LwM2M protocol to connect devices.

Create UDP load balancer using following command:

```bash
kubectl apply -f receipts/udp-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all UDP traffic for the following ports:

 * 5683 - CoAP server non-secure port
 * 5684 - CoAP server secure DTLS port.
 * 5685 - LwM2M server non-secure port.
 * 5686 - LwM2M server secure DTLS port.
 * 5687 - LwM2M bootstrap server DTLS port.
 * 5688 - LwM2M bootstrap server secure DTLS port.

#### CoAP over DTLS

This type of the load balancer requires you to provision and maintain valid SSL certificate on your own.
Follow the generic [CoAP over DTLS](/docs/{{docsPrefix}}user-guide/coap-over-dtls) guide
to configure required environment variables in the *{{tbServicesFile}}* file.

#### LwM2M over DTLS

This type of the load balancer requires you to provision and maintain valid SSL certificate on your own.
Follow the generic [LwM2M over DTLS](/docs/{{docsPrefix}}user-guide/ssl/lwm2m-over-dtls/) guide
to configure required environment variables in the *{{tbServicesFile}}* file.
