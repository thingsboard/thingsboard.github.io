---
layout: docwithnav
assignees:
- ashvayka
title: REST Client
description: Supported REST API Reference for server-side integration of your java projects

---
 * TOC
 {:toc}
 
## REST Client

The ThingsBoard REST API Client helps you interact with ThingsBoard REST API from your Java application.
With Rest Client you can programmatically create assets, devices, customers, users and other entities and their relations in ThingsBoard.
 
The recommended method for installing the Rest Client is with a build automation tool, like Maven. 
The version of the REST Client depends on the version of the platform that you are using.   
  
## Community Edition REST Client

In order to add REST Client to your Maven/Gradle project, you should use the following dependency:
 
```xml
<dependencies>
    <dependency>
        <groupId>org.thingsboard</groupId>
        <artifactId>rest-client</artifactId>
        <version>{{ site.release.ce_full_ver}}</version>
    </dependency>
</dependencies>
```

Note: The REST Client is built on top of Spring RestTemplate and thus depends on Spring Web (5.1.5.RELEASE at the moment of writing this article).

In order to download the REST Client dependency, you should add the following repository to your project. Alternatively, you can build REST Client from [sources](https://github.com/thingsboard/thingsboard/tree/master/rest-client). 

```xml
<repositories>
    <repository>
        <id>thingsboard</id>
        <url>https://repo.thingsboard.io/artifactory/libs-release-public</url>
    </repository>
</repositories>
```
### Source code review

You can find the example application **[here](https://github.com/thingsboard/tb-ce-rest-client-example)**.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Default Tenant Administrator credentials
String username = "tenant@thingsboard.org";
String password = "tenant";

// Creating new rest client and auth with credentials
RestClient client = new RestClient(url);
client.login(username, password);

// Creating an Asset
Asset asset = new Asset();
asset.setName("Building 1");
asset.setType("building");
asset = client.saveAsset(asset);

// creating a Device
Device device = new Device();
device.setName("Thermometer 1");
device.setType("thermometer");
device = client.saveDevice(device);

// creating relations from device to asset
EntityRelation relation = new EntityRelation();
relation.setFrom(asset.getId());
relation.setTo(device.getId());
relation.setType("Contains");
client.saveRelation(relation);
```
