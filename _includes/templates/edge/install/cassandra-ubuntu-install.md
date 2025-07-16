The instructions listed below will help you to install **Cassandra**.

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

In order to run Cassandra, install **Java 11**.

```bash
sudo apt install openjdk-11-jdk-headless
```
{: .copy-code}

Set **Java 17** as the default version (required for **ThingsBoard Edge**):
```bash
sudo update-alternatives --config java
```
{: .copy-code}

Edit the Cassandra **configuration file**:
```
sudo sed -i 's|#JAVA_HOME=/usr/local/jdk6|JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64|' /usr/share/cassandra/cassandra.in.sh
```
{: .copy-code}

Then, restart **Cassandra**:
```bash
sudo service cassandra stop && sudo service cassandra start
```
{: .copy-code}


