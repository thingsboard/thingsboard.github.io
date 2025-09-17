---
layout: docwithnav
assignees:
- ashvayka
title: Building from sources
description: Building ThingsBoard IoT platform from sources

---

* TOC
{:toc}

This guide will help you to download and build ThingsBoard from sources. Instructions listed below are tested on Ubuntu 24.04 LTS
and CentOS 8/9

## Required tools

This section contains installation instructions for build tools.

### Java

ThingsBoard is built using Java 17. You can use [following instructions](/docs/user-guide/install/ubuntu/#step-1-install-java-17-openjdk) to install Java 17.

### Maven

ThingsBoard build requires Maven 3.1.0+.

{% capture tabspec %}maven-installation
A,Ubuntu,shell,resources/maven-ubuntu-installation.sh,/docs/user-guide/install/resources/maven-ubuntu-installation.sh
B,CentOS,shell,resources/maven-centos-installation.sh,/docs/user-guide/install/resources/maven-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**Please note** that Maven installation may set Java 7 as a default JVM on certain Linux machines. 
Use Java installation [instructions](#java) to fix this. 

## Source code

{% capture windows_line_endings %}
**NOTE: Building Docker image on Windows machine**

To build Docker image, certain scripts, configuration files and sources that will be a part of the Docker image must have **LF** line endings.
So before cloning the repo set to _input_ the Git [core.autocrlf](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf) configuration option.

For example, to set *core.autocrlf* globally:

`git config --global core.autocrlf input`{:.language-bash}
{% endcapture %}
{% include templates/warn-banner.md content=windows_line_endings %}

You can clone source code of the project from the official [github repo](https://github.com/thingsboard/thingsboard).

```bash
# checkout latest release branch
git clone -b {{ site.release.branch }} https://github.com/thingsboard/thingsboard.git --depth 1
cd thingsboard
```
{: .copy-code}

## Build

Run the following command from the ThingsBoard folder to build the project:

```bash
mvn clean install -DskipTests
```
{: .copy-code}

## Build local Docker images

{% include templates/warn-banner.md content=windows_line_endings %}

Make sure that [Docker](https://docs.docker.com/engine/install/) is installed.

```bash
mvn clean install -DskipTests -Ddockerfile.skip=false
```
{: .copy-code}

## Build artifacts

You can find debian, rpm and windows packages in the target folder:
 
```bash
application/target
```
{: .copy-code}

## Running tests

We are using [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) to run all kinds of integration and [black-box tests](https://github.com/thingsboard/thingsboard/tree/master/msa/black-box-tests).

Please, manage [Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) to run tests properly.

Master and release branches are already tested, so you can skip tests and avoid installing Docker as well.

Run all unit and integration tests:

```bash
mvn clean install
```
{: .copy-code}

To run black-box tests, please refer [black-box tests readme](https://github.com/thingsboard/thingsboard/blob/master/msa/black-box-tests/README.md).

Estimated time is about 1 hour on AMD Ryzen 5 3600 (6-cores), 32GB DDR4, fancy SSD and shiny weather. Actual time may vary and depends on particular hardware performance.

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

## Build and runtime errors

- If you see such errors when running locally-built Docker image, re-clone the repo with **LF** [file ending](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf) and re-build the image.
To fix this read [Source code](#source-code) section.

```bash
Standard_init_linux.go:175 exec user process caused no such file
```
{: .copy-code}