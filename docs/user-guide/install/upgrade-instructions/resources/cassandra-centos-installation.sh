# Add cassandra repository
sudo touch /etc/yum.repos.d/datastax.repo
echo '[datastax]' | sudo tee --append /etc/yum.repos.d/datastax.repo > /dev/null
echo 'name = DataStax Repo for Apache Cassandra' | sudo tee --append /etc/yum.repos.d/datastax.repo > /dev/null
echo 'baseurl = http://rpm.datastax.com/community' | sudo tee --append /etc/yum.repos.d/datastax.repo > /dev/null
echo 'enabled = 1' | sudo tee --append /etc/yum.repos.d/datastax.repo > /dev/null
echo 'gpgcheck = 0' | sudo tee --append /etc/yum.repos.d/datastax.repo > /dev/null

# Cassandra installation
sudo yum install dsc30
# Tools installation
sudo yum install cassandra30-tools
# Start Cassandra
sudo service cassandra start
# Configure the database to start automatically when OS starts.
sudo chkconfig cassandra on