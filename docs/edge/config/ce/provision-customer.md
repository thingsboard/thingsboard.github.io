---
layout: docwithnav
title: User Access management
description: User Access management

---
### User Access management

ThingsBoard Edge user access managements depends on the cloud version.
 
#### ThingsBoard CE User Access management
##### Tenant Administrator users
Once ThingsBoard Edge connected to ThingsBoard CE cloud every tenant administrator user will be transferred to edge and any of these users will be able to login into ThingsBoard Edge UI.

Tenant Administrator user is able to create or remove devices on the edge. 

Tenant Administrator has **read** access to all other entities that are available on the edge.   

##### Customer users
If **Edge** entity has been assigned to customer on the cloud then every customer user entity will be transferred to edge and any of these users will be able to login into ThingsBoard Edge UI.

Customer user is able to view devices on the edge he has access to on the cloud. 

Customer user has **read** access to all other entities that are assigned to edge and that he has access on the cloud.   

#### ThingsBoard PE User Access management
If ThingsBoard Edge connected to PE cloud version none of the user entities created on the Edge by default.

To be able to login into ThingsBoard Edge UI user group must be assigned to **edge** entity prior login.
Any user that will be inside assigned user group will be created on the edge (with credentials from the cloud).

User access level to ThingsBoard Edge depends on the roles that specific user has on the PE cloud instance. 
Once particular user group transferred to edge all related **Roles** and **Group Permissions** of this user group transferred as well.

If user has **READ** access to specific Device, Asset or any other group on the cloud the same **READ** access is going to be available for the user on the edge.

If user has **WRITE** access to specific **Device** group on the cloud the same **WRITE** access is going to be available for the user on the edge.

If user has **WRITE** access to other entities (except **Device**) on the cloud then during transferring this **WRITE** access will be automatically changed to **READ** access on the edge. So this user is still will be able to have access to the same set of entities that he has on the cloud, but he'll not be able to modify them on the edge. He'll be able to modify them on the cloud, and these changes will be automatically transferred to edge.

### Next Steps

{% assign currentGuide = "ProvisionCustomerFromCloudToEdge" %}{% include templates/edge/guides-banner-edge.md %}