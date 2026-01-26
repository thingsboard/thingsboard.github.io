* TOC
{:toc}

The ThingsBoard REST API Client helps you interact with ThingsBoard REST API from your Java application.
With Rest Client you can programmatically create assets, devices, customers, users and other entities and their relations in ThingsBoard.
 
The recommended method for installing the Rest Client is with a build automation tool, like Maven. 
The version of the REST Client depends on the version of the platform that you are using.   

<hr>

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
{: .copy-code}

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
{: .copy-code}

<hr>

### Basic Usage

#### Authentication with API Key

{% assign sinceVersion = "4.3" %}
{% include templates/since.md %}

You can authenticate using an API key without the need for login/logout operations:

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Your API key
String apiKey = "YOUR_API_KEY_VALUE";

// Creating new rest client with API key authentication
RestClient client = RestClient.withApiKey(url, apiKey);

// Get information of current user and print it
client.getUser().ifPresent(System.out::println);

// Close the client when done
client.close();
```
{: .copy-code}

<hr>

#### Authentication with credentials (deprecated)

Alternatively, you can create a ThingsBoard Client instance, authenticate, and retrieve the data of the currently logged-in user.

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

<hr>

## Examples

#### Authentication with API Key

{% assign sinceVersion = "4.3" %}
{% include templates/since.md %}

Alternatively, you can authenticate using an API key without the need for login/logout operations:

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Your API key
String apiKey = "YOUR_API_KEY_VALUE";

// Creating new rest client with API key authentication
RestClient client = RestClient.withApiKey(url, apiKey);

// Get information of current user and print it
client.getUser().ifPresent(System.out::println);

// Close the client when done
client.close();
```
{: .copy-code}

<hr>

## Examples

The examples below demonstrate how to use the API with standard username/password authentication.
If you prefer to use an API key, simply replace the lines:

```java
String username = "tenant@thingsboard.org";
String password = "tenant";
RestClient client = new RestClient(url);
client.login(username, password);
```

with the API key initialization:

```java
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);
```

The rest of the logic remains exactly the same.

### Get user permissions

The examples below demonstrate authentication using an API key.

If you prefer to use username/password authentication, simply replace the following lines:

```java
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);
```

with:

```java
String username = "tenant@thingsboard.org";
String password = "tenant";
RestClient client = new RestClient(url);
client.login(username, password);
```

The rest of the logic remains exactly the same.

> Don&#39;t forget to replace <span class="code-light">YOUR_API_KEY_VALUE</span> with your actual [API key](/docs/{{docsPrefix}}user-guide/security/api-keys/){:target="_blank"}.

### Get user permissions

The following sample code shows how to get allowed permissions of current logged in user and then check sample permission.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with API key
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);

// Get if user has generic read permission on device entities
AllowedPermissionsInfo permissionsInfo = client.getAllowedPermissions().orElseThrow();
boolean hasDeviceReadPermission = 
        permissionsInfo.getUserPermissions().hasGenericPermission(Resource.DEVICE, Operation.READ);
System.out.println("Has generic devices read permission: " + hasDeviceReadPermission);
        
// Perform logout of current user and close client
client.close();
```
{: .copy-code}

<hr>

### Fetch user devices

The following sample code shows how to fetch tenant devices via page link.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Authentication using an API key
String apiKey = "YOUR_API_KEY_VALUE";

// Creating new rest client and auth with API key
RestClient client = RestClient.withApiKey(url, apiKey);

PageData<Device> tenantDevices;
PageLink pageLink = new PageLink(10);
do {
    // Fetch all tenant devices using current page link and print each of them
    tenantDevices = client.getUserDevices("", pageLink);
    tenantDevices.getData().forEach(System.out::println);
    pageLink = pageLink.nextPageLink();
} while (tenantDevices.hasNext());

// Perform logout of current user and close the client
client.close();
```
{: .copy-code}

<hr>

### Fetch tenant dashboards

The following sample code shows how to fetch tenant dashboards via page link.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Authentication using an API key
String apiKey = "YOUR_API_KEY_VALUE";

// Creating new rest client and auth with API key
RestClient client = RestClient.withApiKey(url, apiKey);

PageData<DashboardInfo> pageData;
PageLink pageLink = new PageLink(10);
do {
    // Fetch all tenant dashboards using current page link and print each of them
    pageData = client.getTenantDashboards(pageLink);
    pageData.getData().forEach(System.out::println);
    pageLink = pageLink.nextPageLink();
} while (pageData.hasNext());

// Perform logout of current user and close the client
client.close();
```
{: .copy-code}

<hr>

### Fetch entity groups

The following sample code shows how to fetch entity groups.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with Customer User API key
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);

// Iterate over all available entity group types
for (EntityType type : EntityType.values()) {
    // Fetch all entity groups of specified type and print them
    List<EntityGroupInfo> entityGroupsByType = client.getEntityGroupsByType(type);
    entityGroupsByType.forEach(System.out::println);
}
        
// Perform logout of current user and close client
client.close();
```
{: .copy-code}

<hr>

### Count entities using Entity Data Query API

The following sample code shows how to use Entity Data Query API to count total devices, total active devices.
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with default Customer User API key
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);

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
client.close();
```
{: .copy-code}

<hr>

### Query entities using Entity Data Query API

The following sample code shows how to use Entity Data Query API to get all active devices.

```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with default Customer User API key
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);

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
client.close();
```
{: .copy-code}

<hr>

### Manage Device example

The following sample code demonstrates basic concepts of device management API (add/get/delete device, get/save device attributes).
```java
// ThingsBoard REST API URL
String url = "http://localhost:8080";

// Perform login with default Customer User API key
String apiKey = "YOUR_API_KEY_VALUE";
RestClient client = RestClient.withApiKey(url, apiKey);

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
client.close();
```
{: .copy-code}

<hr>

## Some useful code snippets

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

// create API key for Tenant User
ApiKeyInfo apiKeyInfo = new ApiKeyInfo();
apiKeyInfo.setUserId(tenantUser.getId());
apiKeyInfo.setDescription(tenantUsername + " API key");
 ApiKey savedApiKey = restClient.saveApiKey(apiKeyInfo);

// API key value of Tenant User
String apiKeyValue = savedApiKey.getValue();

// re-init restClient with Tenant User's API key
restClient = RestClient.withApiKey(url, apiKeyValue);

// Loading Widget from file
Path widgetFilePath = Paths.get("src/main/resources/custom_widget.json");
JsonNode widgetJson = mapper.readTree(Files.readAllBytes(widgetFilePath));
loadWidget(widgetJson);

// Loading Rule Chain from file
Path ruleChainFilePath = Paths.get("src/main/resources/rule_chain.json");
JsonNode ruleChainJson = mapper.readTree(Files.readAllBytes(ruleChainFilePath));
loadRuleChain(ruleChainJson, false);

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
{: .copy-code}

<hr>

### More examples

You can find the example application [here](https://github.com/thingsboard/tb-pe-rest-client-example){:target="_blank"}.
