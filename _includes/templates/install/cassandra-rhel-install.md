Instructions listed below will help you to install Cassandra. 

```bash
# Add cassandra repository
cat << EOF | sudo tee /etc/yum.repos.d/cassandra.repo > /dev/null
[cassandra]
name=Apache Cassandra
baseurl=https://redhat.cassandra.apache.org/41x/
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://downloads.apache.org/cassandra/KEYS
EOF

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

