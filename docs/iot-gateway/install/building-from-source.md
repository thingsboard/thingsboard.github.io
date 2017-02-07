---
layout: docwithnav
assignees:
- ikulikov
title: Building from sources

---

This guide will help you to download and build Thingsboard IoT Gateway from sources. Instructions listed below are tested on Ubuntu 16.04 and CentOS 7.1

#### Required tools

This section contains installation instructions for build tools.

##### Java

Thingsboard IoT Gateway is build using Java 8. You can use [following instructions](/docs/iot-gateway/install/linux#step-1-install-java-8) to install Java 8.

##### Maven

Thingsboard IoT Gateway build requires Maven 3.1.0+.

{% capture tabspec %}maven-installation
A,Ubuntu,shell,resources/maven-ubuntu-installation.sh,/docs/iot-gateway/install/resources/maven-ubuntu-installation.sh
B,CentOS,shell,resources/maven-centos-installation.sh,/docs/iot-gateway/install/resources/maven-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**Please note** that maven installation may set Java 7 as a default JVM on certain Linux machines. 
Use java installation [instructions](#java) to fix this. 

#### Source code

You can clone source code of the project from official [github repo](https://github.com/thingsboard/thingsboard-gateway).

```bash
git clone git@github.com:thingsboard/thingsboard-gateway.git
# checkout latest release branch
git checkout release-1.0
```

#### Build prerequisites

We assume you have already build Thingsboard from sources using this [guide](/docs/user-guide/install/building-from-source/). 
The gateway project requires some maven dependencies that will be available after local Thingsboard build.  

#### Build

Following command will build gateway project:

```bash
mvn clean install
```

#### Build artifacts

You can find debian, rpm and windows packages in the target folder:
 
```bash
thingsboard-gateway/target
```
 