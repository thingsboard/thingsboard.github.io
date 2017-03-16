---
layout: docwithnav
assignees:
- vbabak
title: Contribution Guide

---

* TOC
{:toc}

We are constantly looking for a feedback from our community on how to improve **Thingsboard**.
If you have an idea how to improve **Thingsboard** or you have some new features in mind, please open an issue at **Thingsboard** [github issue page](https://github.com/thingsboard/thingsboard/issues).
But please make sure that the same ticket is not already opened in the issues list (or something very similar).

Before you start any implementation please wait from the **Thingsboard** committer team response on your ticket. We'll try to get back to you ASAP.

#### Required tools

To build and run **Thingsboard** instance make sure that you hava **Java** and **Maven** installed onto your system.

Please refer to [Building from sources](/docs/user-guide/install/building-from-source) section where [Java](/docs/user-guide/install/building-from-source/#java) and [Maven](/docs/user-guide/install/building-from-source/#maven) install processes are described.

#### Fork and build Thingsboard repository

Once you have completed installation of required tools please fork [Thingsboard repository](https://github.com/thingsboard/thingsboard).

Now you can clone source code of the forked project:

```bash
git clone git@github.com:${YOUR_GITHUB_USERNAME}/thingsboard.git
```

We'll refer later to the folder where you have cloned repository as **${FORKED_THINGSBOARD_FOLDER}**.

Before importing project into *IDE* please build it using **Maven** tool from the root folder:

```bash
cd ${FORKED_THINGSBOARD_FOLDER}
mvn clean install -DskipTests
```

Build will create all other appropriate *protobuf* files in *application* module that needed for correct compilation in Eclipse *IDE*.

As next step import project into your favorite *IDE* as **Maven** project.

#### Cassandra installation and configuration

Before you run **Thingsboard** application server you need to install cassandra and provision **Thingsboard** schema inside it.

##### Database installation

Please refer to appropriate section where you find instructions on how to install cassandra:

 - Linux users [Linux cassandra install](/docs/user-guide/install/linux/#cassandra)
 - Windows users [Windows cassandra install](/docs/user-guide/install/windows/#cassandra)

##### Provision Schema

Once Cassandra is installed, you can execute following scripts:

```bash
cqlsh -f ${FORKED_THINGSBOARD_FOLDER}/dao/src/main/resources/schema.cql
cqlsh -f ${FORKED_THINGSBOARD_FOLDER}/dao/src/main/resources/system-data.cql
cqlsh -f ${FORKED_THINGSBOARD_FOLDER}/dao/src/main/resources/demo-data.cql
```

This command will provision **Thingsboard** schema.

##### Thingsboard configuration

When database and schema are in place please update **Thingsboard** configuration properties for cassandra connection.

These properties are located in **${FORKED_THINGSBOARD_FOLDER}/application/src/main/resources/thingsboard.yml** file.

Please refer [here](/docs/user-guide/install/config/) for the detail description of **thingsboard.yml** file and what properties are used for cassandra connection configuration.

#### Running development environment

##### Running server-side container

To start server-side container please run main method of **org.thingsboard.server.ThingsboardServerApplication** class that is located in *application* module from the *IDE*.

##### Running UI container

To start UI container you'll need to install **Node.js** first. Once **Node.js** installed you can start container by executing next command:

```bash
cd ${FORKED_THINGSBOARD_FOLDER}/ui
node server.js
```

Navigate to http://localhost:3000/ and login into **Thingsboard** using demo data credentials:

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

##### Create pull request from your fork to Thingsboard repository

Once you code is in your forked repository you are ready to create pull request to **Thingsboard** repository.
Please create pull request into **master** branch by default (if needed additional *branch* name will be provided during initial stage of github issue discussion).

If there are some conflicts because new stuff has arrived into **Thingsboard** master branch before your commit please resolve conflicts to continue.

Next you'll need to sign up contribution agreement and verify that remote build has been successful.

Be patient, pull request may take several days to review.

Congratulations, you are done now!

Welcome to **Thingsboard** contributors team!



