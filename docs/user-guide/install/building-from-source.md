---
layout: docwithnav
assignees:
- ashvayka
title: Building from sources
description: Building ThingsBoard IoT platform from sources

---

* TOC
{:toc}

This guide will help you to download and build ThingsBoard from source code.

Instructions listed below are tested on Ubuntu 24.04 LTS and CentOS 8/9.

<hr>

## Required tools

This section contains installation instructions for build tools.

<b><font size="4">Java</font></b>   
ThingsBoard is built using **Java 17**.

Install Java 17 using these instructions:

- [Install Java 17 on Ubuntu](/docs/user-guide/install/ubuntu/#step-1-install-java-17-openjdk){:target="_blank"}

Verify the installation:

```bash
java -version
```
{: .copy-code}

<b><font size="4">Maven</font></b>   
ThingsBoard requires Maven 3.1.0 or newer.

{% capture tabspec %}maven-installation
A,Ubuntu,shell,resources/maven-ubuntu-installation.sh,/docs/user-guide/install/resources/maven-ubuntu-installation.sh
B,CentOS,shell,resources/maven-centos-installation.sh,/docs/user-guide/install/resources/maven-centos-installation.sh{% endcapture %}
{% include tabs.html %}

> Note: On certain Linux machines, Maven installation may set Java 7 as the default JVM. If this happens, reconfigure your system to use Java 17.

<hr>

## Source code

{% capture difference %}
**Important:** Building Docker images on Windows requires **LF** line endings.   

To build Docker image, certain scripts, configuration files and sources that will be a part of the Docker image must have **LF** line endings.   

So before cloning the repo set to _input_ the Git [core.autocrlf](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf){:target="_blank"} configuration option. 

For example, to set *core.autocrlf* globally:

`git config --global core.autocrlf input`{:.language-bash}

Failing to do so may cause runtime errors when running Docker images.

{% endcapture %}
{% include templates/info-banner.md content=difference %}

Clone the [ThingsBoard repository](https://github.com/thingsboard/thingsboard){:target="_blank"} from GitHub:

```bash
# checkout latest release branch
git clone -b {{ site.release.branch }} https://github.com/thingsboard/thingsboard.git --depth 1
cd thingsboard
```
{: .copy-code}

<hr>

## Build the Project

From the project root directory, run:

```bash
mvn clean install -DskipTests
```
{: .copy-code}

This command:
- build the project:
- skips unit and integration tests
- produces installation artifacts

## Build local Docker images (Optional)

{% include templates/info-banner.md content=difference %}

To build local Docker images for ThingsBoard services, ensure [Docker](https://docs.docker.com/engine/install/){:target="_blank"} is installed.

Then run:
```bash
mvn clean install -DskipTests -Ddockerfile.skip=false
```
{: .copy-code}

Docker images can be listed using:

```bash
docker images
```
{: .copy-code}

## Build artifacts

After a successful build, installation packages are available in:
 
```bash
application/target
```
{: .copy-code}

This directory contains:
- <span class="code-light">.deb</span> packages for Debian/Ubuntu
- <span class="code-light">.rpm</span> packages for CentOS/RHEL
- Windows installation packages

## Running tests (Optional)

This requires [Docker](https://docs.docker.com/engine/install/){:target="_blank"} and [Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}. Make sure [Docker is configured to run as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user){:target="_blank"}.

> **Note:** Master and release branches are already tested, so you can skip tests and avoid installing Docker as well.

<b><font size="4">Unit and integration tests</font></b>

Run all unit and integration tests:
```bash
mvn clean install
```
{: .copy-code}

<b><font size="4">Black-box tests</font></b>

Black-box tests are located in [https://github.com/thingsboard/thingsboard/tree/master/msa/black-box-tests](https://github.com/thingsboard/thingsboard/tree/master/msa/black-box-tests){:target="_blank"}

Follow the instructions in the corresponding [README](https://github.com/thingsboard/thingsboard/blob/master/msa/black-box-tests/README.md){:target="_blank"} to execute them.

> Estimated runtime is approximately 1 hour, depending on hardware performance.

## Tips and tricks

ThingsBoard is quite easy to build from sources on a brand-new clear environment.

Here are some tips and tricks to boost build experience: 

- [clean maven cache](https://www.baeldung.com/maven-clear-cache)
  ```bash
  rm -rf ~/.m2/repository
  ```
  {: .copy-code}

- clean gradle cache
  ```bash
  rm -rf ~/.gradle/caches/
  ```
  {: .copy-code}

- clean node modules
  ```bash
  rm -rf ui-ngx/node_modules
  ```
  {: .copy-code}

- build in parallel, format headers, build Docker images
  ```bash
  mvn -T 0.8C license:format clean install -DskipTests -Ddockerfile.skip=false
  ```
  {: .copy-code}

## Common build and runtime errors

<b><font size="4">Docker runtime error</font></b>

If you see the following error when running a locally built Docker image:

```bash
Standard_init_linux.go:175 exec user process caused no such file
```

This usually indicates incorrect [line endings](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf){:target="_blank"}.

<b><font size="3">Solution:</font></b>   
- Reconfigure Git to use LF line endings
- Re-clone the repository
- Rebuild the Docker images

Refer to the [Source code](#source-code) section above for details.
