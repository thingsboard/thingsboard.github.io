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
 The ThingsBoard Rest Client helps you interact with ThingsBoard REST API from your Java application.
 With Rest Client you can create assets, devices, relations between them, customers, users and other entities from ThingsBoard.
 
 The recommended method for installing the Rest Client is with a build automation tool, like Maven.
  
### REST Client CE
#### Dependencies review
Main dependencies that are used in the project:

```xml
    <dependencies>
        <dependency>
            <groupId>org.thingsboard</groupId>
            <artifactId>rest-client</artifactId>
            <version>2.5.0-SNAPSHOT</version>
        </dependency>
    </dependencies>

    <repositories>
        <repository>
            <id>thingsboard</id>
            <url>https://repo.thingsboard.io/artifactory/libs-release-public</url>
        </repository>
    </repositories>
```
#### Source code review

You can find the example application **[here](https://github.com/YevhenBondarenko/rest-client-example/tree/feature/rest-client-example-ce)**.

```java
        // credentials for thingsboard
        String username = "tenant@thingsboard.org";
        String password = "tenant";

        // url for thingsboard
        String url = "http://localhost:8080";

        // creating new rest client and auth with credentials
        RestClient client = new RestClient(url);
        client.login(username, password);

        // creating asset
        Asset asset = new Asset();
        asset.setName("building_1");
        asset.setType("building");
        asset = client.saveAsset(asset);

        // creating device
        Device device = new Device();
        device.setName("thermometer_1");
        device.setType("thermometer");
        device = client.saveDevice(device);

        // creating relation from device to asset
        EntityRelation relation = new EntityRelation();
        relation.setFrom(device.getId());
        relation.setTo(asset.getId());
        relation.setType("default_relation");
        relation = client.saveRelation(relation);
```


### REST Client PE
#### Dependencies review
Main dependencies that are used in the project:

```xml
    <dependencies>
        <dependency>
            <groupId>org.thingsboard</groupId>
            <artifactId>rest-client</artifactId>
            <version>2.5.0PE-SNAPSHOT</version>
        </dependency>
    </dependencies>

    <repositories>
        <repository>
            <id>thingsboard</id>
            <url>https://repo.thingsboard.io/artifactory/libs-release-public</url>
        </repository>
    </repositories>
```

#### Source code review

You can find the example application **[here](https://github.com/YevhenBondarenko/rest-client-example/tree/feature/rest-client-example-pe)**.

```java
        // credentials for thingsboard
        String username = "tenant@thingsboard.org";
        String password = "tenant";

        // url for thingsboard
        String url = "http://localhost:8080";

        // creating new rest client and auth with credentials
        RestClient client = new RestClient(url);
        client.login(username, password);

        // creating customer
        Customer customer = new Customer();
        customer.setTitle("Customer_1");
        customer = client.saveCustomer(customer);

        // getting default customer group "Customer Users"
        List<EntityGroupInfo> customerGroups = client.getEntityGroupsByOwnerAndType(customer.getId(), EntityType.USER);
        EntityGroupInfo customerUsersGroup = customerGroups
                .stream()
                .filter(entityGroupInfo -> entityGroupInfo.getName().equals("Customer Users"))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Group not found"));

        // creating asset
        Asset asset = new Asset();
        asset.setName("building_1");
        asset.setType("building");
        asset = client.saveAsset(asset);

        // creating entity group for assets
        EntityGroup entityGroup = new EntityGroup();
        entityGroup.setName("buildings");
        entityGroup.setType(EntityType.ASSET);
        entityGroup = client.saveEntityGroup(entityGroup);

        // adding asset to entity group
        client.addEntitiesToEntityGroup(entityGroup.getId(), Collections.singletonList(asset.getId()));

        // creating role for user group
        Role role = client.createGroupRole("read_only", Arrays.asList(Operation.READ_ATTRIBUTES, Operation.READ_TELEMETRY));

        // creating permissions for user group with role by entity group with assets
        GroupPermission groupPermission = new GroupPermission();
        groupPermission.setEntityGroupId(entityGroup.getId());
        groupPermission.setRoleId(role.getId());
        groupPermission.setUserGroupId(customerUsersGroup.getId());
        groupPermission.setEntityGroupId(entityGroup.getId());
        groupPermission.setEntityGroupType(EntityType.ASSET);
        groupPermission = client.saveGroupPermission(groupPermission);
    }
```
 