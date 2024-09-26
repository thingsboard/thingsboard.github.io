After configuring the password, connect to the database to create thingsboard DB:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

Execute create database statement

```bash
CREATE DATABASE thingsboard;
```
{: .copy-code}

Then, press "Ctrl+D" twice to exit PostgreSQL.
