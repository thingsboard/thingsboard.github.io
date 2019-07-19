Instructions listed below will help you to install PostgreSQL.

```bash
# Update your system
sudo yum update
# Install the repository RPM:
sudo yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
# Install packages
sudo yum install postgresql96-server postgresql96-contrib
# Initialize your PostgreSQL DB
sudo /usr/pgsql-9.6/bin/postgresql96-setup initdb
sudo systemctl start postgresql-9.6
# Optional: Configure PostgreSQL to start on boot
sudo systemctl enable postgresql-9.6
```

{% include templates/install/postgres-post-install.md %}