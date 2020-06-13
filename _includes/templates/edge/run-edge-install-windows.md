
Launch windows shell (Command Prompt) as Administrator. Change directory to your ThingsBoard Edge installation directory.

Execute **install.bat** script to install ThingsBoard Edge as a Windows service (or run **"install.bat --loadDemo"** to install and add demo data).
This means it will be automatically started on system startup. 
Similar, **uninstall.bat** will remove ThingsBoard from Windows services.
The output should be similar to this one:
  
  ```text
C:\Program Files (x86)\thingsboard-edge>install.bat --loadDemo
Detecting Java version installed.
CurrentVersion 18
Java 1.8 found!
Installing Thingsboard Edge...
...
ThingsBoard Edge installed successfully!
```
