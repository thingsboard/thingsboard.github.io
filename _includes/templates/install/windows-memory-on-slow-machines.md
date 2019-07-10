Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\thingsboard.xml
``` 
{: .copy-code}


Locate the following lines to the configuration file. 

```xml
    <startargument>-Xms512m</startargument>
    <startargument>-Xmx1024m</startargument>
```
{: .copy-code}

and change them to 

```xml
    <startargument>-Xms256m</startargument>
    <startargument>-Xmx256m</startargument>
```
{: .copy-code}