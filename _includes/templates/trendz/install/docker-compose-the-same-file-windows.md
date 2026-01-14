Open the Docker Compose file with ThingsBoard services:

```text
docker-compose.yml
```
{: .copy-code}

Make sure that:

* the following services are present in the file:
    * trendz
    * trendz-python-executor
    * trendz-postgres
* the following volumes are present in the file:
    * trendz-conf
    * trendz-data
    * trendz-python-executor-conf
    * trendz-python-executor-data
    * trendz-postgres-data

If any of them are missing, update your Docker Compose file according to the [ThingsBoard Docker installation instructions](/docs/user-guide/install/pe/docker-windows#step-2-choose-thingsboard-queue-service).

Your Docker Compose file should be similar to the one shown in the instructions.
