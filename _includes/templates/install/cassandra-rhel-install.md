Instructions listed below will help you to install Cassandra. 

```bash
# Add cassandra repository
sudo touch /etc/yum.repos.d/cassandra.repo
echo '[cassandra]' | sudo tee --append /etc/yum.repos.d/cassandra.repo > /dev/null
echo 'name=Apache Cassandra' | sudo tee --append /etc/yum.repos.d/cassandra.repo > /dev/null
echo 'baseurl=https://downloads.apache.org/cassandra/redhat/40x/' | sudo tee --append /etc/yum.repos.d/cassandra.repo > /dev/null
echo 'gpgcheck=1' | sudo tee --append /etc/yum.repos.d/cassandra.repo > /dev/null
echo 'repo_gpgcheck=1' | sudo tee --append /etc/yum.repos.d/cassandra.repo > /dev/null
echo 'gpgkey=https://downloads.apache.org/cassandra/KEYS' | sudo tee --append /etc/yum.repos.d/cassandra.repo > /dev/null

# Cassandra installation
sudo yum install cassandra
# Tools installation
sudo yum install cassandra-tools
# Start Cassandra
sudo service cassandra start
# Configure the database to start automatically when OS starts.
sudo chkconfig cassandra on
```

You can use Astra DB cloud instead installing your own Cassandra.
See how to [connect ThingsBoard to Astra DB](/docs/user-guide/install/pe/cassandra-cloud-astra-db/)

