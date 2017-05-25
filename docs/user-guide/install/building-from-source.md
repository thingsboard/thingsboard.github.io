---
layout: docwithnav
assignees:
- ashvayka
title: Building from sources
description: Building Thingsboard IoT platform from sources

---

* TOC
{:toc}

This guide will help you to download and build Thingsboard from sources. Instructions listed below are tested on Ubuntu 16.04 and CentOS 7.1

#### Required tools

This section contains installation instructions for build tools.

##### Java

Thingsboard is build using Java 8. You can use [following instructions](/docs/user-guide/install/linux#java) to install Java 8.

##### Maven

Thingsboard build requires Maven 3.1.0+.

{% capture tabspec %}maven-installation
A,Ubuntu,shell,resources/maven-ubuntu-installation.sh,/docs/user-guide/install/resources/maven-ubuntu-installation.sh
B,CentOS,shell,resources/maven-centos-installation.sh,/docs/user-guide/install/resources/maven-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**Please note** that maven installation may set Java 7 as a default JVM on certain Linux machines. 
Use java installation [instructions](#java) to fix this. 

#### Source code

You can clone source code of the project from official [github repo](https://github.com/thingsboard/thingsboard).

```bash
git clone git@github.com:thingsboard/thingsboard.git
# checkout latest release branch
git checkout release-1.1
```

#### Build

Following command will build thingsboard project:

```bash
mvn clean install
```

#### Build artifacts

You can find debian, rpm and windows packages in the target folder:
 
```bash
application/target
```
 