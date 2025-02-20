#### Modify PostgreSQL's Authentication Method (Optional)

Since **ThingsBoard Edge** uses the **PostgreSQL** database for local storage, configuring **MD5 authentication** ensures that only authenticated users or applications can access the database, thus protecting your data.
After configuring the password, edit the **pg_hba.conf** file to use **MD5 hashing** for authentication instead of the default method (**ident**) for local **IPv4 connections**.

To replace **ident** with **md5**, run the following command:
```
sudo sed -i 's/^host\s\+all\s\+all\s\+127\.0\.0\.1\/32\s\+ident/host    all             all             127.0.0.1\/32            md5/' /var/lib/pgsql/16/data/pg_hba.conf
```
{: .copy-code}

Then run the command that will restart the **PostgreSQL** service to apply configuration changes, connect to the database as a postgres user, and create the **ThingsBoard Edge database (tb_edge)**.
To connect to the **PostgreSQL** database, enter the PostgreSQL **password**.

```bash
sudo systemctl restart postgresql-16.service && psql -U postgres -d postgres -h 127.0.0.1 -W -c "CREATE DATABASE tb_edge;"
```
{: .copy-code}