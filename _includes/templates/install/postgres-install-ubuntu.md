Instructions listed below will help you to install PostgreSQL.

```bash
# Automated repository configuration:
sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh

# install and launch the postgresql service:
sudo apt update
sudo apt -y install postgresql-16
sudo service postgresql start
```
{: .copy-code}

{% include templates/install/postgres-post-install.md %}
