Then, press "Ctrl+D" to return to main user console.

After configuring the password, edit the pg_hba.conf to use MD5 authentication with the postgres user.

Edit pg_hba.conf file: 

```bash
sudo nano /var/lib/pgsql/15/data/pg_hba.conf
```
{: .copy-code}

Locate the following lines:

```text
# IPv4 local connections:
host    all             all             127.0.0.1/32            ident
```

Replace `ident` with `md5`:

```text
host    all             all             127.0.0.1/32            md5
```

Finally, you should restart the PostgreSQL service to initialize the new configuration:

```bash
sudo systemctl restart postgresql-15.service
```
{: .copy-code}

Connect to the database to create ThingsBoard Edge DB:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

Execute create database statement

```bash
CREATE DATABASE tb_edge;
\q
```
{: .copy-code}