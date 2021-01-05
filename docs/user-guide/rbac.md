---
layout: docwithnav
title: Advanced Role-Based Access Control (RBAC) for IoT devices and applications
description:  
---

{% assign feature = "Advanced RBAC for IoT devices and applications" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}


**Below you can find all the information and instructions about this feature**, or you can see the video tutorial for step-by-step instructions on how to use it.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/xpnYzSiDiJo" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 

## ThingsBoard CE vs PE security features comparison

ThingsBoard Community Edition (TB CE) supports a straight-forward security model with three main roles: System administrator, Tenant administrator, and Customer user. 
A system administrator is able to manage tenants, while a tenant administrator manages devices, dashboards, customers, and other entities that belong to a particular tenant.
Customer user is able to view dashboards and control devices that are assigned to a specific customer.
TB CE functionality is sufficient for a lot of simple use cases, especially building real-time [end-user dashboards](/docs/user-guide/ui/dashboards/).
 
ThingsBoard Professional Edition (TB PE) brings much more flexibility in terms of user, customer, and role management. 
It is designed to cover use cases for businesses and enterprises with multiple user groups that have different permissions but may interact with the same devices and assets. 

TB PE security model was significantly improved in v2.3 to enable new security features and to support advanced RBAC for IoT applications. For example:

  - ability to create a hierarchy of customers with multiple levels of sub-customers, independent users, and devices; 
  - ability to create roles with a flexible set of permissions;
  - ability to assign roles to exact user groups;
  - ability to grant specific permissions to particular user groups over precise device groups.
   
This document covers features that are exclusive to TB PE. We will start with a glossary and will provide step-by-step examples of how to configure the most popular use cases.

## Glossary
 
**Tenant**

A Tenant is a separate business-entity: an individual, or an organization that owns or produces devices and assets. A tenant can have multiple tenant administrator users and millions of customers.

**Entity**

An Entity can be a device, asset, user, dashboard, entity view, etc. Any entity is managed by ThingsBoard. See [entities and relations](/docs/user-guide/entities-and-relations/) guide for more details.

**Entity Group (EG)** 

Entity Groups are groups of entities of the same type, for example, Device Group or Asset Group. A single entity can simultaneously belong to multiple entity groups. 
For example, a thermostat device might belong to group "Thermostats", which contains all devices, and a more specific group like "Thermostats with FW v1.2.3". 

**Customer**

A Customer can be a separate business-entity: an individual, or an organization that purchases or uses tenant devices and/or assets. 
Customer can also be a division within the Tenant organization. 
Customer can have multiple users, inner customers, and millions of devices and/or assets.

**Customer Group (CG)**

The Customer group is also an EG. It has the same features as regular EG, but we have a separate term for CG to be able to easily distinct CGs and all other EGs.

**User**

Users are able to login to the ThingsBoard web interface, execute REST API calls, access devices, and assets if it's allowed. The User is also an Entity in ThingsBoard.

**User Group (UG)**

A User group is also an EG. It has the same features as regular EG, but we have a separate term for UG to be able to easily distinct UGs and all other EGs.

**Owner**

Each EG belongs to one owner. This can be either Tenant or Customer. 
Also, each Customer has only one owner. If the Customer Owner is a Tenant, it means that this is a top-level Customer.
If the Customer owner is another Customer, it means that this is a sub-customer. There might be multiple levels of Customers in ThingsBoard.

**Resource**

Anything that has a secure APIs or represents a ThingsBoard Entity is a resource. 
Examples of Entities are listed in the Entity definition above. Groups of entities are also resources, for example, Device Group, Asset Group, Dashboard Group. 
Additional resources are white-labeling, audit logs, and admin settings.

**Operation**

Operations represent actions that you might perform over Resources. 
There are generic actions like "create", "read", "write", "delete", "add to group", "remove from group". There are also specific actions like "read/write credentials".

**Role**
 
A Role contains a list of Resources and a list of allowed Operations for each of those resources. There are two Role types: Generic and Group.
There is a special resource "All" which is a shortcut to all available resource types. 
There is also a special operation "All" that is a shortcut to all possible operations.  
We will explain the differences between them later in this article.   
 
**Group Permissions Entity (GPE)**

GPE is basically a mapping between UG, Role, and optional EG. See "Generic roles" and "Group roles" for more details.

## Customer hierarchy

ThingsBoard supports the "recursive" customer hierarchy with an unlimited number of sub-customers. 
The root-level Owner is Tenant. Each Owner may have multiple Entity Groups (EGs), User Groups (UGs), and Customer Groups (CGs).

**Note:** Each Entity has only one owner. However, Entities can belong to multiple EGs that belong to the same owner.

Since CGs can contain multiple Customers, each Customer can also own his EGs, UGs, and CGs (i.e. sub-customer groups). 
See the diagram below for a visual representation of relations between those entities. 
 
![image](/images/user-guide/security/customer-hierarchy-diagram.svg)

## Roles

Role maps Resource type to a list of allowed Operations. There are two Role types: Generic and Group.

### Generic roles

Each Role is related to one or more User Group. Each User Group has only one Owner. 
With the Generic Role, you grant UG with the same permissions over all entities that belong to the same Owner and all its' sub-customers recursively.
We use a special "connection" object called Group Permission Entity to make a connection between User Group and Generic Role.  

Let's review the diagram below. 

User Bob will be able to perform any operations over any entity that belongs to either his Tenant A or Customer B as long as any other customers and sub-customers are for the same Tenant.
However, User Alice will be able to perform any operations over any entity that belongs to only her Customer B and all it's sub-customers.
So, Alice and Bob are able to access Device B1, but only Bob is able to access Device A1.        

![image](/images/user-guide/security/generic-role-diagram.svg)

### Group roles

Group Role allows you to map a set of Permissions for a specific User Group to a particular Entity Group.
We use special "connection" object called Group Permission Entity to make a connection between User Group, Entity Group and Group Role.  

Let’s review the diagram below.

User Bob belongs to the "Tenant Administrators" group and is able to do any operations with any tenant entities. 
Basically, Bob has a full control over both Device Groups A and B. 
User Alice belongs to "Group A Administrators" and has reading/writing access to all devices in device group A. 
However, Alice will not be able to see or use devices from group B.

![image](/images/user-guide/security/group-role-diagram.svg)      

**Note:** Since Entity Group has only one Owner, you can assign Group Role to any User Group that belongs to the same Owner or any parents of the Owner.

## Examples and How-Tos

See list of configuration examples below for the most popular use cases.

### Smart Buildings: Separate User Groups per Facility

Let's assume your solution manages commercial buildings. 
Your main customer is a Building Manager that wants to monitor HVAC systems, electricity consumption, and other smart devices in the building.  
The Building Manager may want to design and share some dashboards with the end-users - office workers.
Besides, your engineers responsible for the maintenance are interested in supervising the devices state, for example, receive alerts when the battery level forgoes below certain thresholds.

To summarize those requirements in ThingsBoard terms, we should implement the following roles:
 * Supervisors - read-only access to all devices' telemetry in all the buildings, and the ability to create their custom dashboards, but no access to dashboards created by users from different user groups.
 * Facility Managers - allows provisioning new devices for each facility, setup thresholds, manage users, and configure dashboards.
 * End Users - allows having read-only access to the state of the facility where this user belongs to.

Let's configure ThingsBoard to support this use case. The instructions below assume that you have logged in as a Tenant Administrator.

**Supervisors**

We will create a separate User Group named "Supervisors", and a separate Dashboard Group "Supervisor Dashboards". 
Our goal is to allow Supervisors to manage dashboards in the "Supervisor Dashboards" group, but for all other entities in the system, they should have read-only access. 

Let's start by creating a "Supervisor Dashboards" group: 
1. In the Dashboard Groups section click on the "+" sign at the bottom right of the screen;
2. Input the name of your Device Group. In our case it's "Supervisor Dashboards";
3. Click on the "Add" button.

<img data-gifffer="/images/user-guide/security/smart-buildings-dashboards-group.gif" />

We should create two roles to implement this use case:

 * "All Entities Read-only" - the **generic role** that will allow access to all entities' data except device credentials. 
1. In the Roles section click on the "+" sign at the bottom right of the screen;
2. Input the name "All Entities Read-only";
3. You should choose "Generic" for the Role type;
4. In the Permissions for Resources choose "All";
5. For the Operations input "Read", "Raed Attributes", and "Read Telemetry";
6. Click on the lowest "Add" button, the one without a "+" sign.  

<img data-gifffer="/images/user-guide/security/smart-buildings-role1.gif" /> 
 
 * "Entity Group Administrator" - the **group role** that allows all operations for the group. 
1. In the Roles section click on the “+” sign at the bottom right of the screen;
2. Input the name “Entity Group Administrator”;
3. You should choose “Group” for the Role type;
4. In the Permissions for Operations choose “All”;
5. Click on the “Add” button.

<img data-gifffer="/images/user-guide/security/smart-buildings-role2.gif" />
  
Now let's assign those roles to the "Supervisors" group. 
1. In the User Groups section click on the "+" sign (Add Entity Group) at the bottom right of the screen;
2. Input the name "Supervisors", then click on the "Add" button. You'll see the created "Supervisors" Group;
3. Click on the created "Supervisors" Group;
4. In the opened menu click on the "Pen" sign at the top of the screen;
5. Choose "Roles" and click on the "+" sign at the right top of the opened menu;
6. Choose "Generic" for a Role Type and "All Entities Read-only" in the Options. Click "Add";
7. Again press the "+" sign at the top of the opened window;
8. This time choose "Group" for a Role Type and "Entity Group Administrator" for a Role;
9. For a Group Owner choose "Tenant", for a Type choose "Dashboard", and click on the "Supervisor Dashboard" in the Entity Group.

<img data-gifffer="/images/user-guide/security/smart-buildings-user-group.gif" />
 
**Facility Managers**

We will create a separate Customer entity for each building or group of buildings. We will add the Facility Manager user account to the default "Customer Administrators" group which is automatically created for each Customer.
Now, as Facility Manager, we can log in, design dashboards, provision devices, and end-users.  
1. In the Customer Hierarchy click on the "+" sign (Add Customer) at the top right of the screen;
2. Input the Title "Building A" and click "Add";
3. At the left top of the screen you, shall see the blue icon "All". Click on it;
4. In the drop-down menu follow the path: Building A --> User Groups --> Customer Administrators;
5. On the right side of the screen should have been opened "Customers Administrators: Users", click on the "+" sign at the top right of the screen;
6. Input email address, for instance, we can use _alice@thingsboard.oi_, and click "Add";
7. In the opened window you can see the User Activation Link, click "ok".  

<img data-gifffer="/images/user-guide/security/smart-buildings-building-a.gif" />  

**End Users**

Let's log in as Alice (created in a previous guide), Building A administrator, and create several dashboards.
1. Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard".
2. Input dashboard name. For example, "End User Dashboard". Click "Add" to add the dashboard.
3. Now your dashboard should be listed first, since the table sort dashboards using created time by default.
      
![image](/images/user-guide/security/smart-buildings-building-a-dashboards.png)

Now, let's create a Read-only User. Let's assume we want to assign "End User Dashboard" to him and make sure that this Dashboard will open full screen once the user is logged in. 
So, our read-only user will not have access to the administration panel to the left, since they are still not allowed to perform any server-side API calls, except read-only browsing the data.  
1. Choose Customer User in the User Group section;
2. Click "+" at the top right of the screen;
3. Input email address, for example, we will use bob@thingsboard.io, click "Add";
4. In the opened window you can see the User Activation Link, click "ok";
5. Now, click at the created User;
6. At the right top of the screen you shall see the "Pen" icon, click on it;
7. Check the box "Always full screen" and choose "End User Dashboard" in the Select Dashboard menu.

<img data-gifffer="/images/user-guide/security/smart-buildings-read-only-user.gif" />

### DaaS: Device as a Service

TODO: Stay tuned, this doc will be available upon v2.3 release.
    
## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}

