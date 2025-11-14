# Update your system
sudo yum update
# Install the repository RPM:
sudo yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
# Install packages
sudo yum install postgresql11-server postgresql11-contrib
# Initialize your PostgreSQL DB
sudo /usr/pgsql-11/bin/postgresql-11-setup initdb
sudo systemctl start postgresql-11
# Optional: Configure PostgreSQL to start on boot
sudo systemctl enable postgresql-11