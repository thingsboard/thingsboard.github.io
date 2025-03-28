Execute the following command to deploy thirdparty compnents (zookeeper, kafka, redis) and main ThingsBoard microservices: *tb-node*, *tb-web-ui* and *js-executors*:

```
./k8s-deploy-resources.sh
```
{: .copy-code}

After few minutes you may call `kubectl get pods`. If everything went fine, you should be able to
see `tb-node-0` pod in the `READY` state.

You should also deploy the transport microservices. Omit the protocols that you don't use in order to save resources:

### HTTP Transport (optional)

```
kubectl apply -f transports/tb-http-transport.yml
```
{: .copy-code}

### MQTT transport (optional)

```
kubectl apply -f transports/tb-mqtt-transport.yml
```
{: .copy-code}

### CoAP transport (optional)

```
kubectl apply -f transports/tb-coap-transport.yml
```
{: .copy-code}

### LwM2M transport (optional)

```
kubectl apply -f transports/tb-lwm2m-transport.yml
```
{: .copy-code}

### SNMP transport (optional)

```
kubectl apply -f transports/tb-snmp-transport.yml
```
{: .copy-code}