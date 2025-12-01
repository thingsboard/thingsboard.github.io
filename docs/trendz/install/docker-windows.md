---
layout: docwithnav-trendz
assignees:
  - ashvayka
title: Installing ThingsBoard Trendz Analytics using Docker (Windows)
description: Installing ThingsBoard Trendz Analytics using Docker (Windows)

---

* TOC 
{:toc}


This guide will help you to install and start Trendz Analytics using Docker on Windows.

## Prerequisites

{% include templates/trendz/install/docker-requirements-windows.md %}

## Installation Steps

### Step 1. Activate Trendz Add-on on ThingsBoard

{% include templates/trendz/install/activate-trendz-license.md %}

### Step 2. Docker Compose setup

Create a docker compose file for Trendz Analytics service:

```text
docker-compose.yml
```
{: .copy-code}

Add the following configuration to the YAML file.

```yml
services:
  mytrendz:
    depends_on:
      - postgres
      - mypyexecutor
    restart: always
    image: "thingsboard/trendz:{{ site.release.trendz_ver }}"
    ports:
      - "8888:8888"
    environment:
      TRENDZ_LICENSE_INSTANCE_DATA_FILE: /data/license.data
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/trendz
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SCRIPT_ENGINE_PROVIDER: DOCKER_CONTAINER
      SCRIPT_ENGINE_DOCKER_PROVIDER_URL: mypyexecutor:8181
      SCRIPT_ENGINE_TIMEOUT: 30000
    volumes:
      - ./.mytrendz-conf:/trendz-config-files
      - ./.mytrendz-data:/data
      - ./.mytrendz-logs:/var/log/trendz
  mypyexecutor:
    restart: always
    image: "thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}"
    ports:
      - "8181:8181"
    environment:
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 5242880
    volumes:
      - ./.mytrendz-python-conf:/python-executor-config-files
      - ./.mytrendz-python-data:/data
      - ./.mytrendz-python-logs:/var/log/python-executor
  postgres:
    restart: always
    image: "postgres:15"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: trendz
      POSTGRES_PASSWORD: postgres
    volumes:
      - ./.mytrendz-data/db:/var/lib/postgresql/data
```
{: .copy-code}

Where:

- `8888:8888` - connect local port 8888 to exposed internal HTTP port 8888
- `./.mytrendz-conf:/trendz-config-files` - mounts the volume `./.mytrendz-conf` to Trendz directory with the configuration files
- `./.mytrendz-data:/data` - mounts the volume `./.mytrendz-data` to Trendz data directory
- `./.mytrendz-data/db:/var/lib/postgresql/data` - mounts the volume `./.mytrendz-data/db` to Postgres data directory
- `./.mytrendz-logs:/var/log/trendz` - mounts the volume `./.mytrendz-logs` to Trendz logs directory
- `mytrendz` - name of the Trendz Docker service
- `--restart always` - automatically start Trendz in case of system reboot and restart in case of failure.
- `thingsboard/trendz:{{ site.release.trendz_ver }}` - Trendz docker image
- `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Trendz python script executor docker image
- `SCRIPT_ENGINE_TIMEOUT` - Python script execution timeout

### Step 3. Configuration files setup

Before starting the services, you need to create the configuration directories and files.
Execute the following commands in `PowerShell` to create the necessary folders and write the configuration files:

1. **Create directories**
```powershell
New-Item -ItemType Directory -Force -Path .\.mytrendz-conf
New-Item -ItemType Directory -Force -Path .\.mytrendz-data
New-Item -ItemType Directory -Force -Path .\.mytrendz-logs
New-Item -ItemType Directory -Force -Path .\.mytrendz-python-conf
New-Item -ItemType Directory -Force -Path .\.mytrendz-python-data
New-Item -ItemType Directory -Force -Path .\.mytrendz-python-logs
```
{: .copy-code}

2. **Create Trendz configuration files**:

* `.\.mytrendz-conf\trendz.conf`
```powershell
Set-Content -Path .\.mytrendz-conf\trendz.conf -Value @'
export LOG_FILENAME=trendz.out
export LOADER_PATH=/usr/share/trendz/conf

export JAVA_OPTS="$JAVA_OPTS -Dplatform=deb -Dinstall.data_dir=/usr/share/trendz/data"
export JAVA_OPTS="$JAVA_OPTS -Xlog:gc=debug:file=/var/log/trendz/gc.log -XX:+IgnoreUnrecognizedVMOptions  -XX:+PrintGCDateStamps"
export JAVA_OPTS="$JAVA_OPTS -XX:+PrintHeapAtGC -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10"
export JAVA_OPTS="$JAVA_OPTS -XX:GCLogFileSize=10M -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
export JAVA_OPTS="$JAVA_OPTS -XX:CMSWaitDuration=10000 -XX:+UseParNewGC -XX:+CMSParallelRemarkEnabled -XX:+CMSParallelInitialMarkEnabled"
export JAVA_OPTS="$JAVA_OPTS -XX:+CMSEdenChunksRecordAlways -XX:CMSInitiatingOccupancyFraction=75 -XX:+UseCMSInitiatingOccupancyOnly"

export JAVA_OPTS="$JAVA_OPTS -Xms2000m -Xmx2000m"
export JAVA_OPTS="$JAVA_OPTS -Xss1m"
export JAVA_OPTS="$JAVA_OPTS -XX:MaxMetaspaceSize=256m"
export JAVA_OPTS="$JAVA_OPTS -XX:MaxDirectMemorySize=256m"
export JAVA_OPTS="$JAVA_OPTS -XX:+HeapDumpOnOutOfMemoryError"
export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
export JAVA_OPTS="$JAVA_OPTS -XX:+AlwaysPreTouch"
'@
```
{: .copy-code}
* `.\.mytrendz-conf\logback.xml`
```powershell
Set-Content -Path .\.mytrendz-conf\logback.xml -Value @'
<!DOCTYPE configuration>
<configuration scan="true" scanPeriod="10 seconds">

    <appender name="fileLogAppender"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>/var/log/trendz/trendz.log</file>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>/var/log/trendz/trendz.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <maxFileSize>100MB</maxFileSize>
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>
        <encoder>
            <Pattern>
                %green(%d{yyyy-MM-dd} | %d{HH:mm:ss.SSS}) | %highlight(%-5level) [%cyan(%-35thread)] %-60yellow(%C{1}): %msg %n%throwable
            </Pattern>
        </encoder>
    </appender>

    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <Pattern>
                %green(%d{yyyy-MM-dd} | %d{HH:mm:ss.SSS}) | %highlight(%-5level) [%cyan(%-40thread)] %-60yellow(%C{1}): %msg %n%throwable
            </Pattern>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="fileLogAppender"/>
        <appender-ref ref="STDOUT"/>
    </root>

    <logger name="org.thingsboard.trendz" level="INFO" />

</configuration>
'@
```
{: .copy-code}

3. **Create Python Executor configuration files**:
* `.\.mytrendz-python-conf\python-executor.conf`
```powershell
Set-Content -Path .\.mytrendz-python-conf\python-executor.conf -Value @'
export LOG_FILENAME=python-executor.out
export LOADER_PATH=/usr/share/python-executor/conf

export JAVA_OPTS="$JAVA_OPTS -Dplatform=deb"
export JAVA_OPTS="$JAVA_OPTS -Xlog:gc=debug:file=/var/log/python-executor/gc.log -XX:+IgnoreUnrecognizedVMOptions -XX:+PrintGCDateStamps"
export JAVA_OPTS="$JAVA_OPTS -XX:+PrintHeapAtGC -XX:+PrintTenuringDistribution -XX:+PrintGCApplicationStoppedTime -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10"
export JAVA_OPTS="$JAVA_OPTS -XX:GCLogFileSize=10M -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
export JAVA_OPTS="$JAVA_OPTS -XX:CMSWaitDuration=10000 -XX:+UseParNewGC -XX:+CMSParallelRemarkEnabled -XX:+CMSParallelInitialMarkEnabled"
export JAVA_OPTS="$JAVA_OPTS -XX:+CMSEdenChunksRecordAlways -XX:CMSInitiatingOccupancyFraction=75 -XX:+UseCMSInitiatingOccupancyOnly"

export JAVA_OPTS="$JAVA_OPTS -Xms512m -Xmx512m"
export JAVA_OPTS="$JAVA_OPTS -XX:MaxMetaspaceSize=128m"
export JAVA_OPTS="$JAVA_OPTS -XX:MaxDirectMemorySize=128m"
export JAVA_OPTS="$JAVA_OPTS -XX:+HeapDumpOnOutOfMemoryError"
export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
export JAVA_OPTS="$JAVA_OPTS -XX:+AlwaysPreTouch"
'@
```
{: .copy-code}
* `.\.mytrendz-python-conf\logback.xml`
```powershell
Set-Content -Path .\.mytrendz-python-conf\logback.xml -Value @'
<!DOCTYPE configuration>
<configuration scan="true" scanPeriod="10 seconds">

    <appender name="fileLogAppender"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>/var/log/python-executor/python-executor.log</file>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>/var/log/python-executor/python-executor.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <maxFileSize>100MB</maxFileSize>
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>
        <encoder>
            <Pattern>
                %green(%d{yyyy-MM-dd} | %d{HH:mm:ss.SSS}) | %highlight(%-5level) [%cyan(%-35thread)] %-60yellow(%C{1}): %msg %n%throwable
            </Pattern>
        </encoder>
    </appender>

    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <Pattern>
                %green(%d{yyyy-MM-dd} | %d{HH:mm:ss.SSS}) | %highlight(%-5level) [%cyan(%-40thread)] %-60yellow(%C{1}): %msg %n%throwable
            </Pattern>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="fileLogAppender"/>
        <appender-ref ref="STDOUT"/>
    </root>

    <logger name="org.springframework.web.socket" level="INFO" />
    <logger name="org.thingsboard.trendz.pythonexecutor" level="DEBUG" />
    <logger name="org.thingsboard.trendz.pythonexecutor.service.engine.PythonScriptEngine" level="INFO" />

</configuration>
'@
```
{: .copy-code}
* `.\.mytrendz-python-conf\requirements.txt`
```powershell
Set-Content -Path .\.mytrendz-python-conf\requirements.txt -Value @'
# Mounted
pandas==2.0.3
numpy==1.24.3
scikit-learn==1.3.0
matplotlib==3.7.2
seaborn==0.12.2
requests==2.31.0
pytz==2023.3
plotly==5.15.0
statsmodels==0.14.0
scipy==1.11.1
joblib==1.3.2
'@
```
{: .copy-code}

### Step 4. Running service

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following commands to up this docker compose directly:

```powershell
docker compose up -d
docker compose logs -f mytrendz
```
{: .copy-code}

After executing this command you can open `http://{your-host-ip}:8888` in your browser (for ex. `http://localhost:8888`). You should see Trendz login page.

### Step 5. Sync ThingsBoard With Trendz

{% include templates/trendz/install/sync-with-tb.md %}

## Authentication

{% include templates/trendz/install/authentication.md %}

## Detaching, stop and start commands

{% assign serviceName = "trendz" %}
{% assign serviceFullName = "Trendz" %}
{% include templates/install/docker/detaching-stop-start-commands.md %}

## Upgrade Trendz Service

Below is an example of how to upgrade from 1.14.0 to {{ site.release.trendz_ver }}

* Create a dump of your database:

```powershell
docker compose exec postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose exec postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* Set upgradeversion variable to your **previous** Trendz version.

```powershell
docker compose exec mytrendz sh -c "echo '1.14.0' > /data/.upgradeversion" 
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) execute next command:
<br>**docker-compose exec mytrendz sh -c "echo '1.14.0' > /data/.upgradeversion"**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

* After this you need to update docker-compose.yml as in [Step 2](#docker-compose-setup) but with {{ site.release.trendz_ver }} instead of 1.14.0:

* Restart Trendz container

```powershell
docker compose stop mytrendz
docker compose up -d
```
{: .copy-code}

{% capture dockerComposeStandalone %}
If you still rely on Docker Compose as docker-compose (with a hyphen) here is the list of the above commands:
<br>**docker-compose stop mytrendz**
<br>**docker-compose up -d**
{% endcapture %}
{% include templates/info-banner.md content=dockerComposeStandalone %}

To upgrade Trendz to the latest version those steps can be done immediately from old version to the latest without doing it **for each intermediate version** (as opposed to ThingsBoard, where this is required).

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues-windows.md %}

## Post-installation steps

{% include templates/trendz/install/post-installation-steps.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}