In order to start cluster monitoring - Grafana and Prometheus services, please edit configuration file:

```bash
nano .env
```
{: .copy-code}

You'll need to make sure that `MONITORING_ENABLED` variable set to `true`:

```bash
MONITORING_ENABLED=true
```

After deployment, you will be able to reach Prometheus at `http://localhost:9090` and Grafana at `http://localhost:3000` (default login is `admin` and password `foobar`).