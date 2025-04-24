The following commands will install Apache Cassandra and its command-line tools:

```bash
# Add Cassandra repository
echo "deb [signed-by=/etc/apt/keyrings/apache-cassandra.asc] https://debian.cassandra.apache.org 50x main" | sudo tee /etc/apt/sources.list.d/cassandra.sources.list
sudo curl -o /etc/apt/keyrings/apache-cassandra.asc https://downloads.apache.org/cassandra/KEYS
sudo apt-get update
# Cassandra installation
sudo apt-get install -y cassandra cassandra-tools
```
{: .copy-code}

To verify that Cassandra is running correctly, use the following commands to check both the node status and the system service state:

```bash
nodetool status
sudo systemctl status cassandra.service 
```
{: .copy-code}

The status column in the output should report `UN` which stands for "Up/Normal"; you may need to wait a few moments for Cassandra to initialize. Example output:

```
$ nodetool status
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address    Load        Tokens  Owns (effective)  Host ID                               Rack 
UN  127.0.0.1  114.67 KiB  16      100.0%            b8e1bd83-5280-4e48-8b17-a4548eec583b  rack1

$ sudo systemctl status cassandra.service 
● cassandra.service - LSB: distributed storage system for structured data
     Loaded: loaded (/etc/init.d/cassandra; generated)
     Active: active (running) since Thu 2025-04-24 14:04:35 UTC; 43s ago
       Docs: man:systemd-sysv-generator(8)
    Process: 9415 ExecStart=/etc/init.d/cassandra start (code=exited, status=0/SUCCESS)
      Tasks: 61 (limit: 9439)
     Memory: 4.3G (peak: 4.3G)
        CPU: 14.470s
     CGroup: /system.slice/cassandra.service
             └─9553 /usr/bin/java -ea -da:net.openhft... -XX:+UseThreadPriorities -XX:+HeapDumpOnOutOfMemoryError -Xss256k -XX:+AlwaysPreTouch -XX:+UseTLAB -XX:+ResizeTLAB -XX:+UseNUMA -XX:>
...
```

You can use Astra DB Cloud instead of installing your own Cassandra.
See how to [connect ThingsBoard to Astra DB](/docs/user-guide/install/pe/cassandra-cloud-astra-db/)
