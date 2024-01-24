Instructions listed below will help you to install PostgreSQL.

```bash
# Update your system
sudo yum update
```
{: .copy-code}

**For CentOS/RHEL 7:**

```bash
# Install the repository RPM:
sudo yum -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
# Install packages
sudo yum -y install epel-release yum-utils
sudo yum-config-manager --enable pgdg15
sudo yum install postgresql15-server postgresql15
# Initialize your PostgreSQL DB
sudo /usr/pgsql-15/bin/postgresql-15-setup initdb
sudo systemctl start postgresql-15
# Optional: Configure PostgreSQL to start on boot
sudo systemctl enable --now postgresql-15

```
{: .copy-code}

**For RHEL 8 and derivatives (Alma, Rocky, Oracle):**

```bash
# Install the repository RPM:
sudo yum -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
# Install packages
sudo dnf -qy module disable postgresql
sudo dnf -y install postgresql15 postgresql15-server
# Initialize your PostgreSQL DB
sudo /usr/pgsql-15/bin/postgresql-15-setup initdb
sudo systemctl start postgresql-15
# Optional: Configure PostgreSQL to start on boot
sudo systemctl enable --now postgresql-15

```
{: .copy-code}

{% include templates/install/postgres-post-install.md %}
