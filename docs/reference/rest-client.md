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
{: .copy-code}

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
{: .copy-code}
### Basic Usage

The next sample code shows how to instantiate ThingsBoard Client, perform login and get user details of current logged in user.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Default Tenant Administrator credentials
String username = "tenant@thingsboard.org";
String password = "tenant";

// Creating new rest client and auth with credentials
RestClient client = new RestClient(url);
client.login(username, password);

// Get information of current logged in user and print it
client.getUser().ifPresent(System.out::println);

// Perform logout of current user and close the client
client.logout();
client.close();
```
{: .copy-code}

### Examples

#### Fetch tenant devices
The following sample code shows how to fetch tenant devices via page link.
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Default Tenant Administrator credentials
String username = "tenant@thingsboard.org";
String password = "tenant";

// Creating new rest client and auth with credentials
RestClient client = new RestClient(url);
client.login(username, password);

PageData<Device> tenantDevices;
PageLink pageLink = new PageLink(10);
do {
    // Fetch all tenant devices using current page link and print each of them
    tenantDevices = client.getTenantDevices("", pageLink);
    tenantDevices.getData().forEach(System.out::println);
    pageLink = pageLink.nextPageLink();
} while (tenantDevices.hasNext());

// Perform logout of current user and close the client
client.logout();
client.close();
```
{: .copy-code}

#### Fetch tenant dashboards
The following sample code shows how to fetch tenant dashboards via page link.
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Default Tenant Administrator credentials
String username = "tenant@thingsboard.org";
String password = "tenant";

// Creating new rest client and auth with credentials
RestClient client = new RestClient(url);
client.login(username, password);

PageData<DashboardInfo> pageData;
PageLink pageLink = new PageLink(10);
do {
    // Fetch all tenant dashboards using current page link and print each of them
    pageData = client.getTenantDashboards(pageLink);
    pageData.getData().forEach(System.out::println);
    pageLink = pageLink.nextPageLink();
} while (pageData.hasNext());

// Perform logout of current user and close the client
client.logout();
client.close();
```
{: .copy-code}

#### Fetch customer devices
The following sample code shows how to fetch customer devices via page link.
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";
// Perform login with default Customer User credentials
String username = "customer@thingsboard.org";
String password = "customer";
RestClient client = new RestClient(url);
client.login(username, password);

PageData<Device> pageData;
PageLink pageLink = new PageLink(10);
do {
    // Get current user
    User user = client.getUser().orElseThrow(() -> new IllegalStateException("No logged in user has been found"));
    // Fetch customer devices using current page link
    pageData = client.getCustomerDevices(user.getCustomerId(), "", pageLink);
    pageData.getData().forEach(System.out::println);
    pageLink = pageLink.nextPageLink();
} while (pageData.hasNext());

// Perform logout of current user and close the client
client.logout();
client.close();
```
{: .copy-code}

#### Count entities using Entity Data Query API

The following sample code shows how to use Entity Data Query API to count total devices, total active devices.
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with default Customer User credentials
String username = "tenant@thingsboard.org";
String password = "tenant";
RestClient client = new RestClient(url);
client.login(username, password);

// Create entity filter to get all devices
EntityTypeFilter typeFilter = new EntityTypeFilter();
typeFilter.setEntityType(EntityType.DEVICE);

// Create entity count query with provided filter
EntityCountQuery totalDevicesQuery = new EntityCountQuery(typeFilter);

// Execute entity count query and get total devices count
Long totalDevicesCount = client.countEntitiesByQuery(totalDevicesQuery);
System.out.println("Total devices by the first query: " + totalDevicesCount);

// Set key filter to existing query to get only active devices
KeyFilter keyFilter = new KeyFilter();
keyFilter.setKey(new EntityKey(EntityKeyType.ATTRIBUTE, "active"));
keyFilter.setValueType(EntityKeyValueType.BOOLEAN);

BooleanFilterPredicate filterPredicate = new BooleanFilterPredicate();
filterPredicate.setOperation(BooleanFilterPredicate.BooleanOperation.EQUAL);
filterPredicate.setValue(new FilterPredicateValue<>(true));
        
keyFilter.setPredicate(filterPredicate);

// Create entity count query with provided filter
EntityCountQuery totalActiveDevicesQuery = 
        new EntityCountQuery(typeFilter, List.of(keyFilter));
        
// Execute active devices query and print total devices count
Long totalActiveDevicesCount = client.countEntitiesByQuery(totalActiveDevicesQuery);
System.out.println("Total devices by the second query: " + totalActiveDevicesCount);
        
// Perform logout of current user and close the client
client.logout();
client.close();
```
{: .copy-code}

#### Query entities using Entity Data Query API
The following sample code shows how to use Entity Data Query API to get all active devices.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with default Customer User credentials
String username = "tenant@thingsboard.org";
String password = "tenant";
RestClient client = new RestClient(url);
client.login(username, password);

// Create entity filter to get only devices
EntityTypeFilter typeFilter = new EntityTypeFilter();
typeFilter.setEntityType(EntityType.DEVICE);

// Create key filter to query only active devices
KeyFilter keyFilter = new KeyFilter();
keyFilter.setKey(new EntityKey(EntityKeyType.ATTRIBUTE, "active"));
keyFilter.setValueType(EntityKeyValueType.BOOLEAN);

BooleanFilterPredicate filterPredicate = new BooleanFilterPredicate();
filterPredicate.setOperation(BooleanFilterPredicate.BooleanOperation.EQUAL);
filterPredicate.setValue(new FilterPredicateValue<>(true));

keyFilter.setPredicate(filterPredicate);

// Prepare list of queried device fields
List<EntityKey> fields = List.of(
        new EntityKey(EntityKeyType.ENTITY_FIELD, "name"),
        new EntityKey(EntityKeyType.ENTITY_FIELD, "type"),
        new EntityKey(EntityKeyType.ENTITY_FIELD, "createdTime")
);

// Prepare list of queried device attributes
List<EntityKey> attributes = List.of(
        new EntityKey(EntityKeyType.ATTRIBUTE, "active")
);

// Prepare page link
EntityDataSortOrder sortOrder = new EntityDataSortOrder();
sortOrder.setKey(new EntityKey(EntityKeyType.ENTITY_FIELD, "createdTime"));
sortOrder.setDirection(EntityDataSortOrder.Direction.DESC);
EntityDataPageLink entityDataPageLink = new EntityDataPageLink(10, 0, "", sortOrder);

// Create entity query with provided entity filter, key filter, queried fields and page link
EntityDataQuery dataQuery = 
        new EntityDataQuery(typeFilter, entityDataPageLink, fields, attributes, List.of(keyFilter));

PageData<EntityData> entityPageData;
do {
    // Fetch active devices using entities query and print them
    entityPageData = client.findEntityDataByQuery(dataQuery);
    entityPageData.getData().forEach(System.out::println);
    dataQuery = dataQuery.next();
} while (entityPageData.hasNext());

// Perform logout of current user and close client
client.logout();
client.close();
```
{: .copy-code}

#### Manage Device example

The following sample code demonstrates basic concepts of device management API (add/get/delete device, get/save device attributes).
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with default Customer User credentials
String username = "tenantg@thingsboard.org";
String password = "tenant";
RestClient client = new RestClient(url);
client.login(username, password);

// Construct device object
String newDeviceName = "Test Device";
Device newDevice = new Device();
newDevice.setName(newDeviceName);

// Create Json Object Node and set it as additional info
ObjectMapper mapper = new ObjectMapper();
ObjectNode additionalInfoNode = mapper.createObjectNode().put("description", "My brand new device");
newDevice.setAdditionalInfo(additionalInfoNode);

// Save device
Device savedDevice = client.saveDevice(newDevice);
System.out.println("Saved device: " + savedDevice);

// Find device by device id or throw an exception otherwise
Optional<DeviceInfo> optionalDevice = client.getDeviceInfoById(savedDevice.getId());
DeviceInfo foundDevice = optionalDevice
        .orElseThrow(() -> new IllegalArgumentException("Device with id " + newDevice.getId().getId() + " hasn't been found"));

// Save device shared attributes
ObjectNode requestNode = mapper.createObjectNode().put("temperature", 22.4).put("humidity", 57.4);
boolean isSuccessful = client.saveEntityAttributesV2(foundDevice.getId(), "SHARED_SCOPE", requestNode);
System.out.println("Attributes have been successfully saved: " + isSuccessful);

// Get device shared attributes
var attributes = client.getAttributesByScope(foundDevice.getId(), "SHARED_SCOPE", List.of("temperature", "humidity"));
System.out.println("Found attributes: ");
attributes.forEach(System.out::println);

// Delete the device
client.deleteDevice(savedDevice.getId());

// Perform logout of current user and close client
client.logout();
client.close();
```
{: .copy-code}

#### More examples
You can find the example to learn how to use ThingsBoard REST Client **[here](https://github.com/thingsboard/tb-ce-rest-client-example)**.

