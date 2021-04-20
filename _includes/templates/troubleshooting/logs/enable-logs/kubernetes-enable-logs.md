For kubernetes deployment we are using <b>ConfigMap</b> kubernetes entity to provide tb-nodes with logback configuration.
So in order to update <b>logback.xml</b> you need to do the following:

 ```bash
edit common/tb-node-configmap.yml
kubectl apply -f common/tb-node-configmap.yml
 ```

After 10 seconds the changes should be applied to logging configuration.