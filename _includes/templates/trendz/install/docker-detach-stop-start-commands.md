You can detach from session terminal using `Ctrl-p` `Ctrl-q` key sequence - the container will keep running in the background.

In case of any issues, you can examine service logs for errors.
For example, to see Trendz container logs, execute the following command:

```
docker compose logs -f trendz
```
{: .copy-code}

To stop the container:

```
docker compose stop trendz
```
{: .copy-code}

To start the container:

```
docker compose start trendz
```
{: .copy-code}
