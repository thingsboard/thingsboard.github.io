View last logs in runtime:
 
```bash
docker-compose logs -f tb-edge
```

You can use <b>grep</b> command to show only the output with desired string in it. 
For example, you can use the following command in order to check if there are any errors on the backend side:

```bash
docker-compose logs tb-edge | grep ERROR
```

**Tip:** you can redirect logs to file and then analyze with any text editor:

```bash
docker-compose logs -f tb-edge > tb-edge.log
```

**Note:** you can always log into the ThingsBoard Edge container and view logs there:

```bash
docker ps
docker exec -it NAME_OF_THE_CONTAINER bash
```
