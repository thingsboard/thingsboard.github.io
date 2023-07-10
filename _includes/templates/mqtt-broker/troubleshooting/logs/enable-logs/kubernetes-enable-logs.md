For kubernetes deployment we are using <b>ConfigMap</b> kubernetes entity to provide tb-brokers with logback configuration.
So in order to update **logback.xml** you need to edit `tb-broker-configmap.yml` and execute the following command:

 ```bash
kubectl apply -f tb-broker-configmap.yml
 ```
{: .copy-code}

After 10 seconds the changes should be applied to logging configuration.
