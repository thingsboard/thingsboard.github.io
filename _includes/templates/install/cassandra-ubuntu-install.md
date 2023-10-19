Instructions listed below will help you to install Cassandra.

```bash
# Add cassandra repository
echo "deb https://debian.cassandra.apache.org 41x main" | sudo tee /etc/apt/sources.list.d/cassandra.sources.list
curl https://downloads.apache.org/cassandra/KEYS | sudo apt-key add -
sudo apt-get update
## Cassandra installation
sudo apt-get install cassandra
## Tools installation
sudo apt-get install cassandra-tools
```

You can use Astra DB cloud instead installing your own Cassandra.
See how to [connect ThingsBoard to Astra DB](/docs/user-guide/install/pe/cassandra-cloud-astra-db/)
