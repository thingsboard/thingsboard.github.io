Before performing initial installation you can configure the type of database to be used with ThingsBoard.
In order to set database type change the value of `DATABASE` variable in `.env` file: 

```bash
nano .env
```
{: .copy-code}

to one of the following:

- `postgres` - use PostgreSQL database;
- `hybrid` - use PostgreSQL for entities database and Cassandra for timeseries database;

**NOTE**: According to the database type corresponding docker service will be deployed (see `docker-compose.postgres.yml`, `docker-compose.hybrid.yml` for details).