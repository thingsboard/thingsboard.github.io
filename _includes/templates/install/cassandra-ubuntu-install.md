The following commands will install Apache Cassandra and its command-line tools:

```bash
# Add Cassandra repository
echo "deb [signed-by=/etc/apt/keyrings/apache-cassandra.asc] https://debian.cassandra.apache.org 50x main" | sudo tee -a /etc/apt/sources.list.d/cassandra.sources.list
sudo curl -o /etc/apt/keyrings/apache-cassandra.asc https://downloads.apache.org/cassandra/KEYS
sudo apt-get update

## Cassandra installation
sudo apt-get install cassandra cassandra-tools
```
{: .copy-code}

To verify that Cassandra is running, check the node status:

```bash
nodetool status
```
{: .copy-code}
The status column in the output should report `UN` which stands for "Up/Normal".

You can use Astra DB Cloud instead of installing your own Cassandra.
See how to [connect ThingsBoard to Astra DB](/docs/user-guide/install/pe/cassandra-cloud-astra-db/)
