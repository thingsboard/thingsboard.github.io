You should also deploy the transport microservices. Omit the protocols that you don't use in order to save resources:

##### HTTP Transport (optional)

```
kubectl apply -f transports/tb-http-transport.yml
```
{: .copy-code}

##### MQTT transport (optional)

```
kubectl apply -f transports/tb-mqtt-transport.yml
```
{: .copy-code}

##### CoAP transport (optional)

```
kubectl apply -f transports/tb-coap-transport.yml
```
{: .copy-code}

##### LwM2M transport (optional)

```
kubectl apply -f transports/tb-lwm2m-transport.yml
```
{: .copy-code}

##### SNMP transport (optional)

```
kubectl apply -f transports/tb-snmp-transport.yml
```
{: .copy-code}