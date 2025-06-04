The following commands will install Apache Cassandra and its command-line tools:

```bash
# Import GPG key
sudo rpm --import https://downloads.apache.org/cassandra/KEYS 
# Add Cassandra repository
sudo tee /etc/yum.repos.d/cassandra.repo > /dev/null <<EOF
[cassandra]
name=Apache Cassandra
baseurl=https://redhat.cassandra.apache.org/50x/
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://downloads.apache.org/cassandra/KEYS
EOF

# Install packages
sudo dnf -y update
sudo dnf -y install cassandra cassandra-tools chkconfig
# Start service
sudo systemctl daemon-reexec
sudo systemctl start cassandra.service
# Configure Cassandra to start on boot
sudo chkconfig cassandra on
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
UN  127.0.0.1  136.29 KiB  16      100.0%            60ae50fd-8914-44a1-a397-b716b7d4b37c  rack1

$ sudo systemctl status cassandra.service 
● cassandra.service - LSB: distributed storage system for structured data
     Loaded: loaded (/etc/rc.d/init.d/cassandra; generated)
     Active: active (running) since Thu 2025-04-24 12:22:11 UTC; 11min ago
       Docs: man:systemd-sysv-generator(8)
    Process: 34716 ExecStart=/etc/rc.d/init.d/cassandra start (code=exited, status=0/SUCCESS)
   Main PID: 34819 (java)
      Tasks: 62 (limit: 50538)
     Memory: 4.3G
        CPU: 17.792s
     CGroup: /system.slice/cassandra.service
             └─34819 /usr/lib/jvm/java-17-openjdk-17.0.14.0.7-2.el9.x86_64/bin/java -ea -da:net.openhft... -XX:+UseThreadPriorities -XX:+HeapDumpOnOutOfMemoryError -Xss256k -XX:+AlwaysPreTo>
...
```

You can use Astra DB Cloud instead of installing your own Cassandra.
See how to [connect ThingsBoard to Astra DB](/docs/user-guide/install/pe/cassandra-cloud-astra-db/)
