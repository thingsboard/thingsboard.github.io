
ThingsBoard Edge uses PostgreSQL database as a local storage.

{% include templates/install/postgres-install-ubuntu.md %}

Then, connect to the "postgres" database as the "postgres" user:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

Create the ThingsBoard Edge database named "tb_edge" :
```bash
CREATE DATABASE tb_edge;
```
{: .copy-code}

Press "Ctrl+D" twice to exit PostgreSQL.