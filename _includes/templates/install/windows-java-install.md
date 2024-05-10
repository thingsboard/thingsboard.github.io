ThingsBoard service is running on Java 17. Follow this instructions to install OpenJDK 17.

 * Visit [Open JDK Download Page](https://adoptium.net). Go to "Other platforms and versions", select "Operating System" as "Windows" and "Architecture" as "x64" and download latest **JDK .msi** package. 
 * Run the downloaded MSI package and follow the instructions. 
 Make sure you have selected "**Add to PATH**" and "**Set JAVA_HOME variable**" options to "Will be installed on local hard drive" state.
 * Visit [PostgreSQL JDBC Download Page](https://jdbc.postgresql.org/download/) to download PostgreSQL JDBC Driver. Choose the latest available option.
 * Create the folder **C:\Program Files\JDBC** and copy downloaded file there. Then, add a new global variable - run PowerShell as an administrator and execute the following command. Do not forget to change "postgresql-42.2.18.jar" in the command to match the downloaded version.
 ```powershell
[System.Environment]::SetEnvironmentVariable("CLASSPATH", '.;"C:\Program Files\JDBC\postgresql-42.2.18.jar"', [System.EnvironmentVariableTarget]::Machine)
```
{: .copy-code}


You can check the installation using the following command (using Command Prompt):

```bash
java -version
```
{: .copy-code}

Expected command output is:

```text
C:\Users\User>java -version
openjdk version "17.x.xx"
OpenJDK Runtime Environment (AdoptOpenJDK)(...)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(...)
```
