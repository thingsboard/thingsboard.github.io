---
layout: docwithnav
assignees:
- vbabak
title: Contribution Guide

---

* TOC
{:toc}

We are constantly looking for a feedback from our community on how to improve ThingsBoard.
If you have an idea, or you have some new features in mind, please open an issue at ThingsBoard [**GitHub issue page**](https://github.com/thingsboard/thingsboard/issues).
Please make sure that the same ticket is not already opened in the issues list (or something very similar).

Before you start any implementation please wait from the ThingsBoard team to comment on your ticket. We'll try to get back to you ASAP.

#### Required tools

To build and run ThingsBoard instance make sure that you have **Java** and **Maven** installed onto your system.

Please refer to [**Building from sources**](/docs/user-guide/install/building-from-source) section where [**Java**](/docs/user-guide/install/building-from-source/#java) and [**Maven**](/docs/user-guide/install/building-from-source/#maven) install processes are described.

To run integration and black-box tests **docker** and **docker-compose** required, please, refer to the [Running tests](/docs/user-guide/install/building-from-source/#tips-and-tricks) section.

#### Fork and build ThingsBoard repository

Once you have completed installation of required tools please fork official [**ThingsBoard repository**](https://github.com/thingsboard/thingsboard).

Now you can clone source code of the forked project. 

**NOTE:** We will refer later to the folder where you have cloned repository as **${TB_WORK_DIR}**.

If are building on Windows for the first time, you may need to run these commands to ensure the required npm dependencies are available: 
```bat 
npm install -g cross-env 
npm install -g webpack 
``` 

Before importing the project into the *IDE* please build it using **Maven** tool from the root folder:

```bash
cd ${TB_WORK_DIR}
mvn clean install -DskipTests
```

A build will generate all the *protobuf* files in the *application* module that are needed for the correct compilation in your *IDE*.

Next, import the project into your favorite *IDE* as **Maven** project. 
See separate instructions for [**IDEA**](https://www.jetbrains.com/help/idea/2016.3/importing-project-from-maven-model.html) and [**Eclipse**](https://www.baeldung.com/maven-import-eclipse).   

**NOTE:** If you are using Eclipse, after the maven project is imported to the IDE, We recommend you to disable Maven Project builder on **ui-ngx** project. This will improve the Eclipse performance *a lot*, because it will avoid Eclipse Maven builder from digging in node_modules directory (which is unnecessary and only causes Eclipse to hang). To do this, right-click on **ui-ngx** project, go to **Properties -> Builders**, and then uncheck the **Maven Project Builder** checkbox and then click **Ok**.

#### Database

By default ThingsBoard uses PostgreSQL database to store entities and timeseries data.
Alternatively, you can configure your platform to use hybrid mode - PostgreSQL for entities data and scalable Cassandra DB cluster for timeseries data. 

##### SQL Database: PostgreSQL

Please use [this link](https://wiki.postgresql.org/wiki/Detailed_installation_guides) for the PostgreSQL installation instructions.

Once PostgreSQL is installed you may want to create a new user or set the password for the main user.

{% include templates/install/create-tb-db.md %}


##### [Optional] NoSQL Database for timeseries data: Cassandra

Please refer to appropriate section where you find instructions on how to install cassandra:

 - [Cassandra installation on **Linux**](/docs/user-guide/install/linux/#cassandra)
 - [Cassandra installation on **Windows**](/docs/user-guide/install/windows/#cassandra)

Edit ThingsBoard configuration file: 

```text
/application/src/main/resources/thingsboard.yml
```

Locate and set database type configuration parameters to 'cassandra'.
 
```text
database:
  ts:
    type: "${DATABASE_TS_TYPE:cassandra}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

**NOTE:** If your Cassandra server is installed on the remote machine or it is bind to custom interface/port, you need to specify it in thingsboard.yml as well.
Please, refer to the [**configuration guide**](/docs/user-guide/install/config/) for the detailed description of **thingsboard.yml** file and what properties are used for cassandra connection configuration.

After the thingsboard.yml file was updated, please rebuild the application module so that the updated thingsboard.yml gets populated to the target directory:

```bash
cd ${TB_WORK_DIR}/application
mvn clean install -DskipTests
```

##### Create Database schema and populate demo data

In order to create the database tables, run the following:

On *Linux*:

```bash
cd ${TB_WORK_DIR}/application/target/bin/install
chmod +x install_dev_db.sh
./install_dev_db.sh
```

On *Windows*:

```bat
cd %TB_WORK_DIR%\application\target\windows
install_dev_db.bat
```

#### Running development environment

##### Running UI container in hot redeploy mode.

By default, ThingsBoard UI is served at 8080 port. However, you may want to run UI in the hot redeploy mode.

**NOTE:** This step is optional. It is required only if you are going to do changes to UI.

```bash
cd ${TB_WORK_DIR}/ui-ngx
mvn clean install -P yarn-start
```

This will launch a special server that will listen on 4200 port. All REST API and websocket requests will be forwarded to 8080 port.

##### Running server-side container

To start server-side container you can use couple options.

As a first option, you can run the main method of **org.thingsboard.server.ThingsboardServerApplication** class that is located in *application* module from your *IDE*.

As a second option, you can start the server from command line as a regular **Spring boot** application:

```bash
cd ${TB_WORK_DIR}
java -jar application/target/thingsboard-${VERSION}-boot.jar
```

##### Dry run

Navigate to http://localhost:4200/ or http://localhost:8080/ and login into ThingsBoard using demo data credentials:

 - *login* **tenant@thingsboard.org**
 - *password* **tenant**

Make sure that you are able to login and everything has started correctly.

#### Code changes

Now you are ready to start to do some changes to the codebase.
Update server-side or UI code.
Verify that changes that you have done meet your requirements and expectations from the user perspective.

##### Verify build

Before you commit your changes to the remote repository build it locally with tests run using *Maven*:

```bash
mvn clean install
```

Make sure that build is fine and all the tests are successful. Try [black-box tests](https://github.com/thingsboard/thingsboard/tree/master/msa/black-box-tests) as well.

##### Push changes to your fork

When you are done with code changes commit and push them to your forked repository with some meaningful comment:

```bash
git commit -m 'Some meaningful comment'
git push origin master
```

##### Create pull request

Please create pull request into the **master** branch by default (the additional *branch* name will be provided during the initial stage of github issue discussion if needed).

If there are some conflicts because new stuff has arrived into ThingsBoard master branch before your commit, please resolve those conflicts to continue.

Sign up contribution license agreement (CLA) and verify that remote build has been successful. The CLA is signed automatically using the github CLA bot.
 
 ![image](/images/user-guide/pr_cla.png)

Be patient, pull request may take several days to review.



#### See also

- [Rule Node Development](/docs/user-guide/contribution/rule-node-development/) guide that describes how to create your own rule nodes.

- [Widgets Development Guide](/docs/user-guide/contribution/widgets-development/) guide that describes how to create your own widgets.

## Next steps

{% assign currentGuide = "Contribution" %}{% include templates/guides-banner.md %}
