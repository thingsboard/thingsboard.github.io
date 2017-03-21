---
layout: docwithnav
assignees:
- vbabak
title: Contribution Guide
description: Thingsboard IoT Platform contribution guide

---

* TOC
{:toc}

We are constantly looking for a feedback from our community on how to improve Thingsboard.
If you have an idea or you have some new features in mind, please open an issue at Thingsboard [**github issue page**](https://github.com/thingsboard/thingsboard/issues).
Зlease make sure that the same ticket is not already opened in the issues list (or something very similar).

Before you start any implementation please wait from the Thingsboard team to comment on your ticket. We'll try to get back to you ASAP.

#### Required tools

To build and run Thingsboard instance make sure that you hava **Java** and **Maven** installed onto your system.

Please refer to [**Building from sources**](/docs/user-guide/install/building-from-source) section where [**Java**](/docs/user-guide/install/building-from-source/#java) and [**Maven**](/docs/user-guide/install/building-from-source/#maven) install processes are described.

#### Fork and build Thingsboard repository

Once you have completed installation of required tools please fork official [**Thingsboard repository**](https://github.com/thingsboard/thingsboard).

Now you can clone source code of the forked project. 

**NOTE:** We will refer later to the folder where you have cloned repository as **${TB_WORK_DIR}**.

Before importing project into *IDE* please build it using **Maven** tool from the root folder:

```bash
cd ${TB_WORK_DIR}
mvn clean install -DskipTests
```

Build will create all other appropriate *protobuf* files in the *application* module that needed for correct compilation in your *IDE*.

As next step import project into your favorite *IDE* as **Maven** project. 
See separate instructions for [**IDEA**](https://www.jetbrains.com/help/idea/2016.3/importing-project-from-maven-model.html) and [**Eclipse**](http://javapapers.com/java/import-maven-project-into-eclipse/).   

#### Cassandra installation and configuration

Before you run Thingsboard application server you need to install cassandra and provision Thingsboard keyspace.

##### Database installation

Please refer to appropriate section where you find instructions on how to install cassandra:

 - [Cassandra installation on **Linux**](/docs/user-guide/install/linux/#cassandra)
 - [Cassandra installation on **Windows**](/docs/user-guide/install/windows/#cassandra)

##### Provision Schema

Once Cassandra is installed, you can execute following scripts:

```bash
cqlsh -f ${TB_WORK_DIR}/dao/src/main/resources/schema.cql
cqlsh -f ${TB_WORK_DIR}/dao/src/main/resources/system-data.cql
cqlsh -f ${TB_WORK_DIR}/dao/src/main/resources/demo-data.cql
```

This commands will provision Thingsboard schema, system and demo data.

##### Thingsboard configuration

**NOTE:** This step is optional. It is required only if your Cassandra server is installed on remote machine or is bind to custom interface/port.

Update Thingsboard configuration properties located in 
**${TB_WORK_DIR}/application/src/main/resources/thingsboard.yml** file and specify cassandra connection parameters.

Refer to [**configuration guide**](/docs/user-guide/install/config/) for the detail description of **thingsboard.yml** file and what properties are used for cassandra connection configuration.

#### Running development environment

##### Running UI container in hot redeploy mode.

By default, Thingsboard UI is served at 8080 port. However, you may want to run UI in the hot redeploy mode.

**NOTE:** This step is optional. It is required only if you are going to do changes to UI.
 
To start UI container in hot redeploy mode you will need to execute next command:

```bash
cd ${TB_WORK_DIR}/ui
mvn clean install -P npm-start
```

This will launch special server that will listen on [http://localhost:3000/](http://localhost:3000/) by default. All REST API and websocket requests will be forwarded to 8080 port. 

##### Running server-side container

To start server-side container please run main method of **org.thingsboard.server.ThingsboardServerApplication** class that is located in *application* module from your *IDE*.

##### Dry run

Navigate to [http://localhost:8080/](http://localhost:8080/) or [http://localhost:3000/](http://localhost:3000/) (in case of UI hot redeploy mode) and login into Thingsboard using demo data credentials:

 - *login* **tenant@thingsboard.org**
 - *password* **tenant**

Make sure that you are able to login and everything has started correctly.

#### Code changes

Now you are ready to start to do some changes to the codebase.
Update server-side or UI code.
Verify that changes that you have done met your requirements and expectations from user perspective.

##### Verify build

Before you commit your changes to remote repository build it locally with tests run using *Maven*:

```bash
mvn clean install
```

Make sure that build is fine and all the tests are successful.

##### Push changes to your fork

When you are done with code changes commit and push them to your forked repository with some meaningful comment:

```bash
git commit -m 'Some meaningful comment'
git push origin master
```

##### Create pull request

Please create pull request into **master** branch by default (if needed additional *branch* name will be provided during initial stage of github issue discussion).

If there are some conflicts because new stuff has arrived into Thingsboard master branch before your commit, please resolve those conflicts to continue.

Sign up contribution license agreement (CLA) and verify that remote build has been successful. The CLA is signed atumatically using github CLA bot.
 
 ![image](/images/user-guide/pr_cla.png)

Be patient, pull request may take several days to review.


