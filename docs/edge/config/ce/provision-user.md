---
layout: docwithnav-edge
title: User Access management
description: User Access management

---

![image](/images/coming-soon.jpg)

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

### Next Steps

{% assign currentGuide = "ProvisionUserFromCloudToEdge" %}
{% assign docsPrefix = "edge/" %}
{% include templates/edge/guides-banner-edge.md %}