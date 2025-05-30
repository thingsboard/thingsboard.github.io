You can detach from the session terminal using the key sequence **Ctrl+p** following by **Ctrl+q**. The container will keep running in the background.

In case of any issues, you can examine service logs for errors.
For example, to see the {{serviceFullName}} container logs, execute the following command:

```
docker compose logs -f my{{serviceName}}
```
{: .copy-code}

To **stop** the container, run:
```
docker compose stop my{{serviceName}}
```
{: .copy-code}

To **start** the container, run:
```
docker compose start my{{serviceName}}
```
{: .copy-code}

To **stop and clean** up the docker compose environment, and delete all related data, run:
```bash
docker compose down -v
```
{: .copy-code}

To **recreate** the containers, volumes, and network, run: 
```bash
docker compose up -d
```
{: .copy-code}