You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

In case of any issues you can examine service logs for errors. For example to see ThingsBoard Edge node logs execute the following command:
```
docker-compose logs -f mytbedge
```
{: .copy-code}

To stop the container:
```
docker-compose stop
```
{: .copy-code}

To start the container:
```
docker-compose start
```
{: .copy-code}
