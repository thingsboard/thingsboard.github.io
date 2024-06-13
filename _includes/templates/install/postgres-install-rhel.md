Instructions listed below will help you to install PostgreSQL.

```bash
# Update your system
sudo dnf update
```
{: .copy-code}

Install the repository.

**For CentOS/RHEL 8:**

```bash
# Install the repository RPM:
sudo dnf -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```
{: .copy-code}

**For CentOS/RHEL 9:**

```bash
# Install the repository RPM:
sudo dnf -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```
{: .copy-code}

Install the package.

```bash
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
