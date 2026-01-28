Bring up all containers (including Trendz containers) as a single Compose project in detached mode, then follow the ThingsBoard logs:

```bash
docker compose -f docker-compose.yml -f docker-compose-trendz.yml up -d
docker compose -f docker-compose.yml -f docker-compose-trendz.yml logs -f thingsboard-pe
```
{: .copy-code}
