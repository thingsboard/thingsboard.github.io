ThingsBoard service is running on Java 11. Follow this instructions to install OpenJDK 11:

```bash
sudo apt update
sudo apt install openjdk-11-jdk
```
{: .copy-code}

Please don't forget to configure your operating system to use OpenJDK 11 by default. 
You can configure which version is the default using the following command:

```bash
sudo update-alternatives --config java
```
{: .copy-code}

You can check the installation using the following command:

```bash
java -version
```
{: .copy-code}

Expected command output is:

```text
openjdk version "11.0.xx"
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (build ...)
```
