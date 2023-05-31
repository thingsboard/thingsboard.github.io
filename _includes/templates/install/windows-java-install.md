ThingsBoard service is running on Java 11. Follow this instructions to install OpenJDK 11.

 * Visit [Open JDK Download Page](https://adoptopenjdk.net/index.html) to download latest **OpenJDK 11 (LTS)** MSI package.
 * Run the downloaded MSI package and follow the instructions. 
 Make sure you have selected "**Add to PATH**" and "**Set JAVA_HOME variable**" options to "Will be installed on local hard drive" state.
 * Visit [PostgreSQL JDBC Download Page](https://jdbc.postgresql.org/download/) to download PostgreSQL JDBC Driver
 * Copy downloaded file to **C:\Program Files\AdoptOpenJDK\jdk-11.0.10.9-hotspot\jre\lib\ext** and add a global variable named **CLASSPATH** with value **.;"C:\Program Files\AdoptOpenJDK\jdk-11.0.10.9-hotspot\jre\lib\ext\postgresql-42.2.18.jar"** to your system (right click on "My Computer", scroll down, "Advanced System Settings", "Advanced", "Environmental variables...", under "System variables" click "Create...").
 * If the **jre** folder does not exists under **"C:\Program Files\AdoptOpenJDK\jdk-11.0.10.9-hotspot"** path, create this folder and all required sub-folders


You can check the installation using the following command (using Command Prompt):

```bash
java -version
```
{: .copy-code}

Expected command output is:

```text
C:\Users\User>java -version
openjdk version "11.0.xx"
OpenJDK Runtime Environment (AdoptOpenJDK)(...)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(...)
```
