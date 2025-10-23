Configure MQTT load balancer to be able to use MQTT protocol to connect devices.

Create TCP load balancer using the following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

#### MQTT over SSL

Follow [this guide](https://thingsboard.io/docs/user-guide/mqtt-over-ssl/) to create a .pem file with the SSL certificate. Store the file as _server.pem_ in the working directory.

You’ll need to create a config-map with your PEM file, you can do it by calling command:

```bash
kubectl create configmap tbmq-mqtts-config \
 --from-file=server.pem=YOUR_PEM_FILENAME \
 --from-file=mqttserver_key.pem=YOUR_PEM_KEY_FILENAME \
 -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

* where **YOUR_PEM_FILENAME** is the name of your **server certificate file**.
* where **YOUR_PEM_KEY_FILENAME** is the name of your **server certificate private key file**.

Then, uncomment all sections in the ‘tbmq.yml’ file that are marked with “Uncomment the following lines to enable two-way MQTTS”.

Execute command to apply changes:

```bash
kubectl apply -f tbmq.yml
```
{: .copy-code}
