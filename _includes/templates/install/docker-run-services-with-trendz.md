Bring up all containers (including Trendz containers) in detached mode, then follow the ThingsBoard logs:

```bash
docker compose --profile trendz up -d && docker compose logs -f thingsboard-pe
```
{: .copy-code}
