To install **PostgreSQL**, follow the instructions below.

Update your system:
```bash
sudo dnf update
```
{: .copy-code}

Install the repository RPM:

* **For CentOS/RHEL 8:**

```bash
sudo dnf -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```
{: .copy-code}

* **For CentOS/RHEL 9:**

```bash
sudo dnf -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```
{: .copy-code}

Install packages and initialize PostgreSQL. The PostgreSQL service will automatically start every time the system boots up.

```bash
sudo dnf -qy module disable postgresql && \
sudo dnf -y install postgresql16 postgresql16-server postgresql16-contrib && \
sudo /usr/pgsql-16/bin/postgresql-16-setup initdb && \
sudo systemctl enable --now postgresql-16
```
{: .copy-code}

{% include templates/install/postgres-post-install.md %}
