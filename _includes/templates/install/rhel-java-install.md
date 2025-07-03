ThingsBoard service is running on Java 17. Follow this instructions to install OpenJDK 17:

```bash
sudo dnf install java-17-openjdk
```
{: .copy-code}

Please don't forget to configure your operating system to use OpenJDK 17 by default. 
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
openjdk version "17.x.xx"
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (build ...)
```
