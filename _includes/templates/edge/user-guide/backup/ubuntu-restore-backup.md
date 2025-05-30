Stop the **ThingsBoard Edge** service (if it's still running):

```bash
sudo systemctl stop tb-edge
```
{: .copy-code}

To restore the **PostgreSQL database** from a backup file, run the following command: 

```bash
 sudo -u postgres psql tb_edge < tb_edge.sql.bak
 ```
{: .copy-code}

Start the **ThingsBoard Edge** service:

```bash
sudo systemctl start tb-edge
```
{: .copy-code}


