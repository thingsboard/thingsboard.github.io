If something goes wrong, you can stream the ThingsBoard container logs in real time:

```bash
docker compose -f docker-compose.yml -f docker-compose-trendz.yml logs -f thingsboard-pe
```
{: .copy-code}

Stream the Trendz container logs in real time:

```bash
docker compose -f docker-compose.yml -f docker-compose-trendz.yml logs -f trendz
```
{: .copy-code}

Bring down every container defined in your Compose files:

```bash
docker compose -f docker-compose.yml -f docker-compose-trendz.yml down
```
{: .copy-code}

Launch all services in detached mode:

```bash
docker compose -f docker-compose.yml -f docker-compose-trendz.yml up -d
```
{: .copy-code}
