ThingsBoard service is running on Java 17. To install OpenJDK 17, follow these instructions

```bash
sudo apt update && sudo apt install openjdk-17-jdk-headless
```
{: .copy-code}

Configure your operating system to use **OpenJDK 17 by default**.
You can configure the default version by running the following command:

```bash
sudo update-alternatives --config java
```
{: .copy-code}

To check the installed Java version on your system, use the following command:

```bash
java -version
```
{: .copy-code}

The expected result is:

```text
openjdk version "17.x.xx" 
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (...)
```
