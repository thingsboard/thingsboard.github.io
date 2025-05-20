You can detach from the session terminal using the key sequence **Ctrl+p** following by **Ctrl+q**. The container will keep running in the background.

In case of any issues, you can examine service logs for errors.
For example, to see the {{serviceFullName}} container logs, execute the following command:

```
docker compose logs -f my{{serviceName}}
```
{: .copy-code}

To stop the container:
```
docker compose stop my{{serviceName}}
```
{: .copy-code}

To stop **all** containers, use the following command:
```bash
docker stop $(docker ps -q)
```
{: .copy-code}

To start the container:
```
docker compose start my{{serviceName}}
```
{: .copy-code}

To start **all** containers, use the following command:
```bash
docker start $(docker ps -aq)
```
{: .copy-code}