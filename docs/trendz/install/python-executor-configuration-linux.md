---
layout: docwithnav-trendz
title: Trendz Python Executor Configuration
description: How to configure Trendz Python Executor on Linux or Mac OS

---

* TOC
{:toc}

## Overview

Trendz Python Executor is required to run:

* Python Calculation fields
* All prediction models (except Fourier Transformation)
* Code generation for Metric Explorer

Starting from version 1.14.0, the only way to run these features is via Trendz Python Executor using Docker (or Kubernetes).

## Python Executor Standalone Installation

### Step 1: Create Docker Compose File

Create the Docker Compose file with the following configuration:

```yml
services:
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
      - ~/.mytrendz-python-conf:/python-executor-config-files
      - ~/.mytrendz-python-data:/data
      - ~/.mytrendz-python-logs:/var/log/python-executor
```
{: .copy-code}

Explanation of key fields:

* `8181` - Python executor port for communication with Trendz service
* `restart: always` - automatically restarts the executor on failure or system reboot
* `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Docker image for Trendz Python Executor
* `~/.mytrendz-python-conf:/python-executor-config-files` - mounts the volume `~/.mytrendz-python-conf` to Trendz Python Executor directory with configuration files
* `~/.mytrendz-python-data:/data` - mounts the volume `~/.mytrendz-python-data` to Trendz Python Executor additional data directory
* `~/.mytrendz-python-logs:/var/log/python-executor` - mounts the volume `~/.mytrendz-python-logs` to Trendz Python Executor logs directory

### Step 2: Configuration files setup

Before starting the service, you need to create the configuration directories and files.
Execute the following commands to create the necessary folders and write the configuration files:

1. **Create directories:**
```bash
mkdir -p ~/.mytrendz-python-conf
mkdir -p ~/.mytrendz-python-data
mkdir -p ~/.mytrendz-python-logs
```
{: .copy-code}

2. **Create configuration files**:
* `~/.mytrendz-python-conf/python-executor.conf`
```bash
cat <<'EOF' > ~/.mytrendz-python-conf/python-executor.conf
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
EOF
```
{: .copy-code}
* `~/.mytrendz-python-conf/logback.xml`
```bash
cat <<'EOF' > ~/.mytrendz-python-conf/logback.xml
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
EOF
```
{: .copy-code}
* `~/.mytrendz-python-conf/requirements.txt`
```bash
cat <<'EOF' > ~/.mytrendz-python-conf/requirements.txt
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
EOF
```
{: .copy-code}

3. **Set permissions:**
   Once the files are created, execute the following commands to change the owner of the newly created folders to the docker container user (`799`).
   Note: This command requires sudo permissions:
```bash
sudo chown -R 799:799 ~/.mytrendz-python-conf
sudo chown -R 799:799 ~/.mytrendz-python-data
sudo chown -R 799:799 ~/.mytrendz-python-logs
```
{: .copy-code}


### Step 3: Start Python Executor

```bash
docker compose up -d
docker compose logs -f mypyexecutor
```
{: .copy-code}

### Step 4: Connect Trendz to Python Executor

Configure Trendz to communicate with the Python Executor.

Edit `/usr/share/trendz/conf/trendz.conf` and add:

```bash
export SCRIPT_ENGINE_TIMEOUT=30000
export SCRIPT_ENGINE_PROVIDER=DOCKER_CONTAINER
export SCRIPT_ENGINE_DOCKER_PROVIDER_URL=PYTHON_EXECUTOR_HOST:PYTHON_EXECUTOR_PORT
```
{: .copy-code}

Replace `PYTHON_EXECUTOR_HOST` and `PYTHON_EXECUTOR_PORT` with actual host and port values.

## How to Migrate Trendz Python Executor 1.13.2 to Trendz Python Executor 1.14.0

If you already have a Python Executor with a version earlier than 1.14.0 connected to Trendz, you should migrate it before updating Trendz to 1.14.0.

### Step 1. Modify Docker Compose File

Locate the `docker-compose.yml` file from which the Python Executor was launched.

Change the Python Executor image tag to version 1.14.0 and update the `volumes` section to include configuration, data, and log directories.

The final `docker-compose.yml` should look like this:

```yml
services:
  mypyexecutor:
    restart: always
    image: "thingsboard/trendz-python-executor:1.14.0"
    ports:
      - "8181:8181"
    environment:
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 5242880
    volumes:
      - ~/.mytrendz-python-conf:/python-executor-config-files
      - ~/.mytrendz-python-data:/data
      - ~/.mytrendz-python-logs:/var/log/python-executor
```
{: .copy-code}

### Step 2: Create Configuration Files

Since version 1.14.0 requires mounted configuration files that did not exist in previous versions, you must create them before restarting the container.

Please follow the instructions in `Step 2: Configuration files setup` from the installation guide above to create the necessary config files and set permissions.

### Step 3. Restart Python Executor

Restart the Python Executor to apply the changes:

```bash
docker compose up -d
docker compose logs -f mypyexecutor
```
{: .copy-code}

## How to Connect Additional Libraries to the Python Executor

If necessary, you can add additional Python libraries to the **Python Executor** and use them in your Trendz Calculation Fields or Trendz Custom Prediction Models.

For example, if you want to add the **`emoji`** library (specific version 2.2.0), follow these steps.

### Step 1. Add library to `requirements.txt`

You need to append the library name and version to the `requirements.txt` file located in your configuration directory (`~/.mytrendz-python-conf`):

```bash
echo 'emoji==2.2.0' >> ~/.mytrendz-python-conf/requirements.txt
```
{: .copy-code}

**Note:** You may need sudo permissions if the file is owned by the docker user (`799`):
```bash
echo 'emoji==2.2.0' | sudo tee -a ~/.mytrendz-python-conf/requirements.txt
```
{: .copy-code}

### Step 2. Restart the Docker Container

Find the container name and restart it:
```bash
docker compose restart mypyexecutor
```
{: .copy-code}

### Step 3. Verify Installation

Check the logs to ensure the library was installed successfully:

```bash
docker compose logs mypyexecutor
```
{: .copy-code}

You should see:

```text
Installing custom Python requirements...
Requirement already satisfied: emoji==2.2.0 in /usr/local/lib/python3.9/site-packages
```

After the container restarts, you can import and use the custom libraries in your Trendz Calculation Fields or Trendz Custom Prediction Models.

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}