View last logs in runtime:
 
```bash
docker-compose logs -f tb-core1 tb-core2 tb-rule-engine1 tb-rule-engine2
```

If you suspect the issue is related only to rule-engine, you can filter and view only the rule-engine logs:

```bash
docker-compose logs -f tb-rule-engine1 tb-rule-engine2
```

You can use <b>grep</b> command to show only the output with desired string in it. 
For example you can use the following command in order to check if there are any errors on the backend side:

```bash
docker-compose logs tb-core1 tb-core2 tb-rule-engine1 tb-rule-engine2 | grep ERROR
```

**Tip:** you can redirect logs to file and then analyze with any text editor:

```bash
docker-compose logs -f tb-rule-engine1 tb-rule-engine2 > rule-engine.log
```

**Note:** you can always log into the ThingsBoard container and view logs there:

```bash
docker ps
docker exec -it NAME_OF_THE_CONTAINER bash
```
