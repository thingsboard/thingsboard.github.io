ThingsBoard service is running on Java 8. Follow this instructions to install OpenJDK 8:

```bash
sudo yum install java-1.8.0-openjdk
```

Please don't forget to configure your operating system to use OpenJDK 8 by default. 
You can configure which version is the default using the following command:

```bash
sudo update-alternatives --config java
```

You can check the installation using the following command:

```bash
java -version
```

Expected command output is:

```text
openjdk version "1.8.0_xxx"
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (build ...)
```