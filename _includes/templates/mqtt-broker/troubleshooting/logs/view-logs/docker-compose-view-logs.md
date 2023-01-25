View last logs in runtime:
 
```bash
docker-compose logs -f tb-mqtt-broker-1 tb-mqtt-broker-2
```

You can use **grep** command to show only the output with desired string in it. 
For example, you can use the following command in order to check if there are any errors on the backend side:

```bash
docker-compose logs tb-mqtt-broker-1 tb-mqtt-broker-2 | grep ERROR
```

**Tip:** you can redirect logs to file and then analyze with any text editor:

```bash
docker-compose logs -f tb-mqtt-broker-1 tb-mqtt-broker-2 > tb-mqtt-broker.log
```

**Note:** you can always log into the ThingsBoard MQTT Broker container and view logs there:

```bash
docker ps
docker exec -it NAME_OF_THE_CONTAINER bash
```
