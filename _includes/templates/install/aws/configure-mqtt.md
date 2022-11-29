Configure MQTT load balancer if you plan to use MQTT protocol to connect devices.

Create TCP load balancer using following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

##### One-way TLS

The simplest way to configure MQTTS is to make your MQTT load balancer (AWS NLB) to act as a TLS termination point.
This way we setup the one-way TLS connection, where the traffic between your devices and load balancers is encrypted, and the traffic between your load balancer and MQTT Transport is not encrypted.
There should be no security issues, since the ALB/NLB is running in your VPC.
The only major disadvantage of this option is that you can't use "X.509 certificate" MQTT client credentials, since information about client certificate is not transferred from the load balancer to the ThingsBoard MQTT Transport service.

To enable the **one-way TLS**:

Use [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to create or import SSL certificate. Note your certificate ARN.

Edit the load balancer configuration and replace *YOUR_MQTTS_CERTIFICATE_ARN* with your certificate ARN:

```bash
nano receipts/mqtts-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy plain https load balancer:

```bash
kubectl apply -f receipts/mqtts-load-balancer.yml
```
{: .copy-code}

##### Two-way TLS

The more complex way to enable MQTTS is to obtain valid (signed) TLS certificate and configure it in the MQTT Transport. The main advantage of this option is that you may use it in combination with "X.509 certificate" MQTT client credentials.

To enable the **two-way TLS**:

Follow [this guide](/docs/user-guide/mqtt-over-ssl/) to create a **.pem** file with the SSL certificate.
Store the file as *server.pem* in the working directory.

You'll need to create a config-map with your PEM file, you can do it by calling command:

```
kubectl create configmap tb-mqtts-config \
 --from-file=server.pem=YOUR_PEM_FILENAME \
 --from-file=mqttserver_key.pem=YOUR_PEM_KEY_FILENAME \
 -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

* where **YOUR_PEM_FILENAME** is the name of your **server certificate file**.
* where **YOUR_PEM_KEY_FILENAME** is the name of your **server certificate private key file**. 

Then, uncomment all sections in the '{{tbServicesFile}}' file that are marked with "Uncomment the following lines to enable two-way MQTTS".

Execute command to apply changes:

```
kubectl apply -f {{tbServicesFile}}
```
{: .copy-code}

Finally, deploy the "transparent" load balancer:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}


