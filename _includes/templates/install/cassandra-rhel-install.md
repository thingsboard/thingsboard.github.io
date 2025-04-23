Create and edit the Cassandra repository file:

```bash
sudo nano /etc/yum.repos.d/cassandra.repo
```
{: .copy-code}

Paste the following content into the file:

```ini
[cassandra]
name=Apache Cassandra
baseurl=https://redhat.cassandra.apache.org/50x/
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://downloads.apache.org/cassandra/KEYS
```
{: .copy-code}

The following commands will install Apache Cassandra and its command-line tools; confirm GPG key imports if prompted:

```bash
# Install packages
sudo dnf update
sudo dnf install cassandra cassandra-tools
# Start service
sudo systemctl daemon-reload
sudo service cassandra start
# Optional: Configure Cassandra to start on boot
sudo dnf install chkconfig
sudo chkconfig cassandra on
```
{: .copy-code}

To verify that Cassandra is running, check the node status:

```bash
nodetool status
```
{: .copy-code}
The status column in the output should report `UN` which stands for "Up/Normal"; you may need to wait a few moments for Cassandra to initialize.

You can use Astra DB Cloud instead of installing your own Cassandra.
See how to [connect ThingsBoard to Astra DB](/docs/user-guide/install/pe/cassandra-cloud-astra-db/)

