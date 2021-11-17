#### One-way TLS

The simplest way to configure MQTTS is to make your MQTT load balancer (AWS NLB) to act as a TLS termination point.
This way we setup the one-way TLS connection, where the traffic between your devices and load balancers is encrypted, and the traffic between your load balancer and MQTT Transport is not encrypted.
There should be no security issues, since the ALB/NLB is running in your VPC.
The only major disadvantage of this option is that you can't use "X.509 certificate" MQTT client credentials, since information about client certificate is not transferred from the load balancer to the ThingsBoard MQTT Transport service.

To enable the **one-way TLS**:

* Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate.
* Locate 2 places marked as "Uncomment the following lines to enable one-way MQTTS" in the "routes.yml" and paste certificate's ARN instead of **YOUR_MQTTS_CERTIFICATE_ARN**.

#### Two-way TLS

The more complex way to enable MQTTS is to obtain valid (signed) TLS certificate and configure it in the MQTT Transport. The main advantage of this option is that you may use it in combination with "X.509 certificate" MQTT client credentials.

To enable the **two-way TLS**:

Follow [this guide](/docs/user-guide/mqtt-over-ssl/) to create a **.jks** file with the SSL certificate.
Afterwards, you need to set **MQTT_SSL_KEY_STORE_PASSWORD** and **MQTT_SSL_KEY_PASSWORD** environment variables in the `tb-services.yml` file
to the corresponding key-store and certificate key passwords.

You'll need to create a config-map with your JKS file, you can do it by calling command:

```
kubectl create configmap tb-mqtts-config \
             --from-file=server.jks=YOUR_JKS_FILENAME.jks -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

where **YOUR_JKS_FILENAME** is the name of your **.jks** file. Then, uncomment all sections in the '{{eksTbServicesFile}}' file that are marked with "Uncomment the following lines to enable two-way MQTTS".
Also, uncomment sections in the 'routes.yml' file that is marked with the same "Uncomment the following lines to enable two-way MQTTS" comment.