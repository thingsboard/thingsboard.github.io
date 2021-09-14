* TOC
{:toc}

## Overview

In this guide, you will find info on how to set up logging for your ThingsBoard installation and configuring it according to your needs.

## ThingsBoard logging

Logging configures in the **logback.xml** file stored at **/etc/thingsboard/conf/** location.

The main logger in ThingsBoard is named “fileLogAppender“

It could have different values:
* TRACE
* DEBUG
* INFO
* WARN
* ERROR

By default, ThingsBoard is configured to INFO level. 
However, for testing/debugging purposes, you can change the log level to DEBUG at the:

```
<root level="DEBUG">
    <appender-ref ref="fileLogAppender"/>
</root>
```
{: .copy-code}

##  Log related configuration

Additionally, you can configure a few more log related things, such as:

#### Logging path

You can save logs to target storage.  
To be able to do it, you should change the logging path under the
```
<file>/var/log/thingsboard/thingsboard.log</file>
```
line inside the \<appender name="fileLogAppender" class="ch.qos.logback.core.rolling.RollingFileAppender"\> block. 

#### Max File Size

You can configure the maximum size of the log file.  
To be able to do it, you should change the maxFileSize under the
```
<maxFileSize>100MB</maxFileSize>
```
line inside the \<appender name="fileLogAppender" class="ch.qos.logback.core.rolling.RollingFileAppender"\> block.

#### Max History

You can configure the maximum number of log files which would be stored/saved.  
To be able to do it, you should change the maxHistory under the
```
<maxHistory>30</maxHistory>
```
line inside the \<appender name="fileLogAppender" class="ch.qos.logback.core.rolling.RollingFileAppender"\> block.

#### Total Size Cap

You can configure the limit size of all log files.  
To be able to do it, you should change the totalSizeCap under the
```
<totalSizeCap>3GB</totalSizeCap>
```
line inside the \<appender name="fileLogAppender" class="ch.qos.logback.core.rolling.RollingFileAppender"\> block.

## Additional components logging

In case you need to investigate a specific part of the ThingsBoard application, you can enable DEBUG logging for specific features instead of the DEBUG level for all applications.  
To add a specific log of some specific functionality you can use the following pattern (add the next line before root logger at the logback.xml):
```
<logger name="package/class_name" level="DEBUG"> </logger>
```

For example, you need to check MQTT. Add the following line before the root logger at the logback.xml:
```
<logger name="org.thingsboard.server.transport.mqtt" level="DEBUG"> </logger>
```

**Please, note:**
the DEBUG logging level generates a lot of log data and can affect the history of your log files. 
In case you need to store logs for your application, back up all log files before switching to the DEBUG log level.