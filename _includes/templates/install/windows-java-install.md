ThingsBoard service is running on Java 8. Follow this instructions to install OpenJDK 8.

 * Visit [Open JDK Download Page](https://adoptopenjdk.net/index.html) to download latest **OpenJDK 8 (LTS)** MSI package.
 * Run the downloaded MSI package and follow the instructions. 
 Make sure you have selected "**Add to PATH**" and "**Set JAVA_HOME variable**" options to "Will be installed on local hard drive" state.
 * Visit [PostgreSQL JDBC Download Page](https://jdbc.postgresql.org/download.html) to download PostgreSQL JDBC Driver
 * Copy downloaded file to **C:\Program Files\AdoptOpenJDK\jdk-8.0.275.1-hotspot\jre\lib\ext** and add a global variable named **CLASSPATH** with value **.;"C:\Program Files\AdoptOpenJDK\jdk-8.0.275.1-hotspot\jre\lib\ext\postgresql-42.2.18.jar"** to your system (right click on "My Computer", scroll down, "Advanced System Settings", "Advanced", "Environmental variables...", under "System variables" click "Create...").


You can check the installation using the following command (using Command Prompt):

```bash
java -version
```

Expected command output is:

```text
C:\Users\User>java -version
openjdk version "1.8.0_212"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_212-b04)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.212-b04, mixed mode)
```