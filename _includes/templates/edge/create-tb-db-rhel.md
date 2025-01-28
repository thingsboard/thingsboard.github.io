#### Modifying PostgreSQL's Authentication Method (Optional)

Since **ThingsBoard Edge** uses the **PostgreSQL** database for local storage, configuring **MD5 authentication** ensures that only authenticated users or applications can access the database, thus protecting your data.
After configuring the password, edit the **pg_hba.conf** file to use **MD5 hashing** for authentication instead of the default method (**ident**) for local **IPv4 connections**.

Edit the **pg_hba.conf** file: 

```bash
sudo nano /var/lib/pgsql/16/data/pg_hba.conf
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

Finally, restart the **PostgreSQL** service to initialize the new configuration:

```bash
sudo systemctl restart postgresql-16.service
```
{: .copy-code}

Connect to the database to create **ThingsBoard Edge DB**:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

Run the following command to create the database:

```bash
CREATE DATABASE tb_edge;
```
{: .copy-code}

Press **“Ctrl+D”** twice to exit PostgreSQL.