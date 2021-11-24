Configure MQTT load balancer if you plan to use MQTT protocol to connect devices.

Create TCP load balancer using following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

#### MQTT over SSL

This type of the load balancer requires you to provision and maintain valid SSL certificate on your own.
Follow the generic [MQTT over SSL](/docs/{{docsPrefix}}user-guide/mqtt-over-ssl) guide
to configure required environment variables in the *{{tbServicesFile}}* file.
