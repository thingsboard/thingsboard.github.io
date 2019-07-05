Instructions listed below will help you to install PostgreSQL.

```bash
# Update your system
sudo yum update
# Install packages
sudo yum install postgresql-server postgresql-contrib
# Initialize your PostgreSQL DB
sudo postgresql-setup initdb
sudo systemctl start postgresql
# Optional: Configure PostgreSQL to start on boot
sudo systemctl enable postgresql
```

{% include templates/install/postgres-post-install.md %}