Please refer to the official [TimescaleDB installation page](https://docs.timescale.com/latest/getting-started/installation/ubuntu/installation-apt-ubuntu) on Ubuntu distros and follow the instructions in accordance with your installed PostgreSQL version.

After package installation, you need to create TimescaleDB extension in your ThingsBoard database:
```bash
psql -U postgres -h localhost -d thingsboard
CREATE EXTENSION IF NOT EXISTS timescaledb;
\q
```