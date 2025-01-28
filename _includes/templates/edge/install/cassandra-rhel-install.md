In order to run Cassandra, install **Java 11**:
```bash
sudo apt install openjdk-11-jdk
```
{: .copy-code}

Set **Java 17** as the default version (required for ThingsBoard Edge):
```bash
sudo update-alternatives --config java
```
{: .copy-code}

Add the Cassandra **repository**:
```bash
sudo nano /etc/yum.repos.d/cassandra.repo
```
{: .copy-code}

Add the following content:
```ini
[cassandra]
name=Apache Cassandra
baseurl=https://redhat.cassandra.apache.org/50x/
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://downloads.apache.org/cassandra/KEYS
```
{: .copy-code}
* **50x** for Cassandra 5.0 version series.

Update package index if necessary: 
```bash
sudo yum update
```
{: .copy-code}

Install Cassandra:
```bash
sudo yum install cassandra
```
{: .copy-code}

Start Cassandra service:
```bash
sudo service cassandra start
```
{: .copy-code}
