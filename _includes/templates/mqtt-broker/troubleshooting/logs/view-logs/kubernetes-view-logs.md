View all pods of the cluster:

```bash
kubectl get pods
```
{: .copy-code}

View last logs for the desired pod:
 
```bash
kubectl logs -f POD_NAME
```
{: .copy-code}

To view TBMQ logs use command:

```bash
kubectl logs -f tb-broker-0
```
{: .copy-code}

You can use <b>grep</b> command to show only the output with desired string in it. 
For example, you can use the following command in order to check if there are any errors on the backend side:

```bash
kubectl logs -f tb-broker-0 | grep ERROR
```
{: .copy-code}

If you have multiple nodes you could redirect logs from all nodes to files on your machine and then analyze them: 

```bash
kubectl logs -f tb-broker-0 > tb-broker-0.log
kubectl logs -f tb-broker-1 > tb-broker-1.log
```
{: .copy-code}

**Note:** you can always log into TBMQ container and view logs there:

```bash
kubectl exec -it tb-broker-0 -- bash
cat /var/log/thingsboard-mqtt-broker/thingsboard-mqtt-broker.log
```
{: .copy-code}
