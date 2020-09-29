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


## Professional Edition REST Client

In order to add REST Client to your Maven/Gradle project, you should use the following dependency:
 
```xml
<dependencies>
    <dependency>
        <groupId>org.thingsboard</groupId>
        <artifactId>rest-client</artifactId>
        <version>{{ site.release.pe_full_ver}}</version>
    </dependency>
</dependencies>
```

Note: The REST Client is built on top of Spring RestTemplate and thus depends on Spring Web (5.1.5.RELEASE at the moment of writing this article).

In order to download the REST Client dependency, you should add the following repository to your project. 

```xml
<repositories>
    <repository>
        <id>thingsboard</id>
        <url>https://repo.thingsboard.io/artifactory/libs-release-public</url>
    </repository>
</repositories>
```

### Source code review

You can find the example application **[here](https://github.com/thingsboard/tb-pe-rest-client-example)**.

```java
// ThingsBoard REST API URL
final String url = "http://localhost:8080";

// Default System Administrator credentials
final String username = "sysadmin@thingsboard.org";
final String password = "sysadmin";

// creating new rest restClient and auth with system administrator credentials
restClient = new RestClient(url);
login(username, password);

// Creating Tenant
Tenant tenant = new Tenant();
tenant.setTitle("Test Tenant");
tenant = restClient.saveTenant(tenant);

final String tenantUsername = "testtenant@thingsboard.org";
final String tenantPassword = "testtenant";

// Created User for Tenant
User tenantUser = new User();
tenantUser.setAuthority(Authority.TENANT_ADMIN);
tenantUser.setEmail(tenantUsername);
tenantUser.setTenantId(tenant.getId());

tenantUser = restClient.saveUser(tenantUser, false);
restClient.activateUser(tenantUser.getId(), tenantPassword);

// login with Tenant
login(tenantUsername, tenantPassword);

// Loading Widget from file
// Path widgetFilePath = Paths.get("src/main/resources/custom_widget.json");
// JsonNode widgetJson = mapper.readTree(Files.readAllBytes(widgetFilePath));
// loadWidget(widgetJson);

// Loading Rule Chain from file
// Path ruleChainFilePath = Paths.get("src/main/resources/rule_chain.json");
// JsonNode ruleChainJson = mapper.readTree(Files.readAllBytes(ruleChainFilePath));
// loadRuleChain(ruleChainJson, false);

// Creating Dashboard Group on the Tenant Level
EntityGroup sharedDashboardsGroup = new EntityGroup();
sharedDashboardsGroup.setName("Shared Dashboards");
sharedDashboardsGroup.setType(EntityType.DASHBOARD);
sharedDashboardsGroup = restClient.saveEntityGroup(sharedDashboardsGroup);

// Loading Dashboard from file
JsonNode dashboardJson = mapper.readTree(RestClientExample.class.getClassLoader().getResourceAsStream("watermeters.json"));
Dashboard dashboard = new Dashboard();
dashboard.setTitle(dashboardJson.get("title").asText());
dashboard.setConfiguration(dashboardJson.get("configuration"));
dashboard = restClient.saveDashboard(dashboard);

// Adding Dashboard to the Shared Dashboards Group
restClient.addEntitiesToEntityGroup(sharedDashboardsGroup.getId(), Collections.singletonList(dashboard.getId()));

// Creating Customer 1
Customer customer1 = new Customer();
customer1.setTitle("Customer 1");
customer1 = restClient.saveCustomer(customer1);

Device waterMeter1 = new Device();
waterMeter1.setCustomerId(customer1.getId());
waterMeter1.setName("WaterMeter1");
waterMeter1.setType("waterMeter");
waterMeter1 = restClient.saveDevice(waterMeter1);

// Update device token
DeviceCredentials deviceCredentials = restClient.getDeviceCredentialsByDeviceId(waterMeter1.getId()).get();
deviceCredentials.setCredentialsId("new_device_token");
restClient.saveDeviceCredentials(deviceCredentials);

// Fetching automatically created "Customer Administrators" Group.
EntityGroupInfo customer1Administrators = restClient.getEntityGroupInfoByOwnerAndNameAndType(customer1.getId(), EntityType.USER, "Customer Administrators").get();

// Creating Read-Only Role
Role readOnlyRole = restClient.createGroupRole("Read-Only", Arrays.asList(Operation.READ, Operation.READ_ATTRIBUTES, Operation.READ_TELEMETRY, Operation.READ_CREDENTIALS));

// Assigning Shared Dashboards to the Customer 1 Administrators
GroupPermission groupPermission = new GroupPermission();
groupPermission.setRoleId(readOnlyRole.getId());
groupPermission.setUserGroupId(customer1Administrators.getId());
groupPermission.setEntityGroupId(sharedDashboardsGroup.getId());
groupPermission.setEntityGroupType(sharedDashboardsGroup.getType());
groupPermission = restClient.saveGroupPermission(groupPermission);

// Creating User for Customer 1 with default dashboard from Tenant "Shared Dashboards" group.
String userEmail = "user@thingsboard.org";
String userPassword = "secret";
User user = new User();
user.setAuthority(Authority.CUSTOMER_USER);
user.setCustomerId(customer1.getId());
user.setEmail(userEmail);
ObjectNode additionalInfo = mapper.createObjectNode();
additionalInfo.put("defaultDashboardId", dashboard.getId().toString());
additionalInfo.put("defaultDashboardFullscreen", false);
user.setAdditionalInfo(additionalInfo);
user = restClient.saveUser(user, false);
restClient.activateUser(user.getId(), userPassword);

restClient.addEntitiesToEntityGroup(customer1Administrators.getId(), Collections.singletonList(user.getId()));
```
