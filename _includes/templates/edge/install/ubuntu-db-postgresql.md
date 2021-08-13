
ThingsBoard Edge uses PostgreSQL database as a local storage.

{% include templates/install/postgres-install-ubuntu.md %}

Then, press "Ctrl+D" to return to main user console and connect to the database to create ThingsBoard Edge DB:

```text
psql -U postgres -d postgres -h 127.0.0.1 -W
CREATE DATABASE tb_edge;
\q
```