Please refer to the official [TimescaleDB installation page](https://docs.timescale.com/self-hosted/latest/install/installation-linux/) on RHEL/CentOS distros and follow the instructions in accordance with your installed PostgreSQL version.

After package installation, you need to create TimescaleDB extension in your ThingsBoard database:
```bash
sudo su - postgres
psql -d thingsboard
CREATE EXTENSION IF NOT EXISTS timescaledb;
\q
#Then, press “Ctrl+D” to return to main user console.
```