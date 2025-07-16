Edit the **ThingsBoard Edge** configuration file by running this command:

```bash
echo 'export JAVA_OPTS="$JAVA_OPTS -Xms512M -Xmx1G"' | sudo tee -a /etc/tb-edge/conf/tb-edge.conf
```
{: .copy-code}

This sets (or updates) the environment variable JAVA_OPTS by appending two options to its current value:
* **Xms512M:** Sets the initial heap size of the Java Virtual Machine (JVM) to 512 Megabytes.
* **Xmx1G:** Sets the maximum heap size that the JVM is allowed to use to 1 Gigabyte.

We recommend that you adjust these parameters according to your server resources. 
It should be set to at least 2G (gigabytes) and increased accordingly if additional RAM is available. 
Typically, you should set it to 1/2 of your total RAM if you are not running any other memory-intensive processes (e.g. Cassandra), or 1/3 otherwise.