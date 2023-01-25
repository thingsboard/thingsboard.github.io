For kubernetes deployment we are using <b>ConfigMap</b> kubernetes entity to provide tb-brokers with logback configuration.
So in order to update <b>logback.xml</b> you need to do the following:

 ```bash
edit tb-broker-configmap.yml
kubectl apply -f tb-broker-configmap.yml
 ```

After 10 seconds the changes should be applied to logging configuration.