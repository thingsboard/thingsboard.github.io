* TOC
{:toc}

## Overview

Identity access and management (IAM) is essential for today’s business security strategy. 
Many IAM systems use a method known as role-based access control (RBAC) to assign permissions for who can do what within specified IT resources.

Role-Based Access Control (RBAC) allows to create and grant advanced access by assigning a set of permissions. 
RBAC roles refer to the levels of access that users may have. Access to resources can be limited to specific operations, such as viewing, creating, writing, or deleting data. 
Similarly, you can restrict access to sensitive information, increasing business security.

## ThingsBoard CE vs PE security features comparison

### ThingsBoard Community Edition

![image](/images/user-guide/security/rbac/TB_CE.png)

ThingsBoard Community Edition supports a straight-forward security model with three main roles: *System administrator*, *Tenant administrator*, and *Customer user*. 
A system administrator is able to manage tenants, while a tenant administrator manages devices, dashboards, customers, and other entities that belong to a particular tenant.
Customer user is able to view dashboards and control devices that are assigned to a specific customer.
ThingsBoard Community Edition functionality is sufficient for a lot of simple use cases, especially building real-time [end-user dashboards](/docs/{{docsPrefix}}user-guide/dashboards/).

### ThingsBoard Professional Edition

![image](/images/user-guide/security/rbac/TB_PE.png)

ThingsBoard Professional Edition brings much more flexibility in terms of user, customer, and role management. 
It is designed to cover use cases for businesses and enterprises with multiple user groups that have different permissions but may interact with the same devices and assets. 

ThingsBoard supports the "recursive" customer hierarchy with tens of thousands of sub-customers.
The root-level Owner is Tenant. Each Owner may have multiple Entity Groups, User Groups, and Customer Groups.

Since Customer Groups can contain multiple Customers, each Customer can also own his Entity Groups, User Groups, and Customer Groups (i.e. sub-customer groups).

{% capture difference %}
**Note:** Each Entity has only one owner. However, Entities can belong to multiple Entity Groups that belong to the same owner.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The ThingsBoard Professional Edition security model support advanced RBAC for IoT applications and includes security features such as:

  - ability to create a hierarchy of customers with multiple levels of sub-customers, independent users, and devices; 
  - ability to create roles with a flexible set of permissions;
  - ability to assign roles to exact user groups;
  - ability to grant specific permissions to particular user groups over precise device groups.

This document covers features that are exclusive to ThingsBoard Professional Edition. We will start with a glossary and will provide step-by-step examples of how to configure the most popular use cases.

## Glossary

**Tenant**

A [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/) is a separate business-entity: an individual, or an organization that owns or produces devices and assets. A tenant can have multiple tenant administrator users and millions of customers.

**Customer**

A [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/) can be a separate business-entity: an individual, or an organization that purchases or uses tenant devices and/or assets. 
Customer can also be a division within the Tenant organization. 
Customer can have multiple users, inner customers, and millions of devices and/or assets.

**Customer Group**

The Customer group is also an Entity Group. It has the same features as regular Entity Group, but we have a separate term for Customer Group to be able to easily distinct Customer Groups and all other Entity Groups.

**User**

Users are able to login to the ThingsBoard web interface, execute REST API calls, access devices, and assets if it's allowed. The User is also an Entity in ThingsBoard.

**User Group**

A User group is also an Entity Group. It has the same features as regular Entity Group, but we have a separate term for User Group to be able to easily distinct User Groups and all other Entity Groups.

**Entity**

An Entity can be a device, asset, user, dashboard, entity view, etc. Any entity is managed by ThingsBoard. See [entities and relations](/docs/{{docsPrefix}}user-guide/entities-and-relations/) guide for more details.

**Entity Group**

[Entity Groups](/docs/{{docsPrefix}}user-guide/groups/) are groups of entities of the same type, for example, Device Group or Asset Group. A single entity can simultaneously belong to multiple entity groups.
For example, a thermostat device might belong to group "Thermostats", which contains all devices, and a more specific group like "Thermostats with FW v1.2.3".

**Owner**

Each Entity Group belongs to one owner. This can be either Tenant or Customer. 
Also, each Customer has only one owner. If the Customer Owner is a Tenant, it means that this is a top-level Customer.
If the Customer owner is another Customer, it means that this is a sub-customer. There might be multiple levels of Customers in ThingsBoard.

**Resource**

Anything that has the secure APIs or represents a ThingsBoard Entity is a resource. 
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

Group Permissions Entity is basically a mapping between User Group, Role, and optional Entity Group. See [Generic roles](/docs/{{docsPrefix}}user-guide/rbac/#generic-roles) and [Group roles](/docs/{{docsPrefix}}user-guide/rbac/#group-roles) for more details.

## Roles

<b>Roles</b> are sets of rights and permissions that determine what actions a user—or a user group—can perform in the system. They simplify permission management by letting administrators assign and adjust permissions for entire groups or for individual users.

A role maps each <b>resource type</b> to a list of <b>allowed operations</b>. You can find the [full list of resource types](#permissions) in the <b>Resources</b> reference.

Let&#39;s use the diagram below to see how roles work.

![image](/images/user-guide/security/rbac/roles.png)

- <b>User group 1</b> with the <b>Read device only</b> role has access <b>only to devices</b>. They can <b>view</b> devices but <b>cannot delete, edit, or add</b> devices. They do not have access to any other object types.
- <b>User group 2</b> has two roles: <b>Read device only</b> and <b>Dashboards & widgets administrator</b>.
  The <b>Dashboards & widgets administrator</b> role allows users to <b>create, delete, and edit</b> widgets and dashboards.
  Combined with <b>Read device only</b>, users can <b>view data</b> from the devices they&#39;re allowed to access and <b>visualize that data</b> on their dashboards.
- <b>User group 3</b> with the <b>Access to all resources</b> role can <b>create, edit, and delete</b> all object types, such as devices, dashboards, assets, and customers.

In ThingsBoard Professional Edition, there are two role types: [Generic](/docs/{{docsPrefix}}user-guide/rbac/#generic-role) and [Group](/docs/{{docsPrefix}}user-guide/rbac/#group-role). Each type comes with its own permission model.

### Creating a new role

Open the **Roles** page of the **Security** section.
- Click the "**plus**" button in the top right corner.
- Enter the **name** 
- Choose the **role type**:
  - **Generic** - a reusable permission set that applies **recursively** within the scope where you assign it (Tenant / Customer / Sub-customer).
  - **Group** — a permission set that you link to a **specific entity group** for a **specific user group**.
- Select the **permissions** (resource + allowed operations), then click "**Save**".

![image](/images/user-guide/security/rbac/add-generic-role.png)

Now let&#39;s look at each type of role separately.

### Generic role

<b><font size="3">What is a Generic roles?</font></b>

A <b>Generic role</b> is a set of permissions that applies <b>recursively</b> to all entities within a chosen scope — <b>Tenant</b>, <b>Customer</b>, or <b>Sub-customer</b> (including all descendants).

ThingsBoard uses a linking object called a <b>Group Permission Entity (GPE)</b> to assign a Generic role to a <b>user group</b>. The GPE binds who (the user group) to what (the scope) with which rights (the role&#39;s permissions).

#### Example

Let&#39;s look at an example to see how the generic role works depending on where it&#39;s assigned.

<br>

![image](/images/user-guide/security/rbac/generic-role.svg)

<br><b><font size="3">We have:</font></b>

- **Devices:**
  - **Device A1** — at Tenant A level
  - **Device B1** — at Customer B level

- **Users:**
  - **Bob** in Device Administrators group at Tenant A
  - **Alice** in Device Administrators group at Customer B

<br><b><font size="3">Goal of the example:</font></b>

- Grant **Bob** (Tenant A scope) permission to perform any operation on any entity under Customer A, including entities under Customer B and its sub-customers.
- Grant **Alice** (Customer B scope) permission to perform any operation on entities only within Customer B and its sub-customers.

<br><b><font size="4">Step 1 — Create the Generic role</font></b>

- Create a **Generic** role with **Resource: All** and **Operation: All**.

{% include images-gallery.html imageCollection="generic-roles-example-1" %}

<b><font size="4">Step 2 — Assign Generic role to the Tenant user group (Bob)</font></b>

- Go to the "**Users**" page and navigate to the "**Groups**" tab.
- Open **Entity group details** for the "**Device Admins**" group of **Tenant A**.
- Navigate to the "**Roles**" tab and click "**+**".
- Choose **Role type**: **Generic**, select the role you created, and click "**Add**".

Bob (a member of this tenant-level group) can perform any operation on any entity that belongs to **Tenant A**, including entities under **Customer A**, **Customer B**, and their sub-customers.

{% include images-gallery.html imageCollection="generic-roles-example-2" %}

<b><font size="4">Step 3 — Assign Generic role to the Customer user group (Alice)</font></b>

- Go to "**Customers**" page and click **Manage customer users** next to **Customer B**.
- Open the "**Groups**" tab and then **Entity group details** for **Device Admins** group.
- Navigate to the "**Roles**" tab and click "**+**".
- Choose **Role type**: **Generic**, select the same role, and click "**Add**".

Alice (a member of this **Customer B** group) can perform any operation on entities that belong **only to Customer B** and its sub-customers.

{% include images-gallery.html imageCollection="generic-roles-example-3" %}

<br><b><font size="4">Verify access</font></b>

**Sign in as Bob:**

{% include images-gallery.html imageCollection="generic-roles-example-4" showListImageTitles="true" %}

**Now login as user Alice:**

{% include images-gallery.html imageCollection="generic-roles-example-5" showListImageTitles="true" %}

<br><b><font size="4">Outcome</font></b>

- **Both Alice and Bob** have access to **Device B1**.
- **Only Bob** has access to **Device A1** (because his role is assigned at the tenant level).

<hr>

#### Permissions

Please check out resource types and corresponding operations listed below.

| **Resource**                  | **Operations**                                                                                                                                                                                                                                                                                     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| All                           | "All", "Add to Group", "Assign to Tenant", "Change Owner", "Claim Device", "Create", "Delete", "Impersonate", "RPC Call", "Read", "Read Attributes", "Read Credentials", "Read Telemetry", "Remove from Group", "Share Group", "Write", "Write Attributes", "Write Credentials", "Write Telemetry" | By selecting the "All" resource, you grant permission to perform the selected operations on all entities owned by one owner.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| API Usage State               | "All", "Read", "Read Telemetry"                                                                                                                                                                                                                                                                    | API Usage layout is in the main menu of the ThingsBoard platform. API Usage shows full statistics on the platform. Learn more about API Usage [here](/docs/{{docsPrefix}}user-guide/ui/aliases/#api-usage-state).                                                                                                                                                                                                                                                                                                                                           |
| Alarm                         | “All”, “Create”, “Read”, “Write”                                                                                                                                                                                                                                                                   | Alarms are the platform messages with a specific severity that appear when alarm rules are not observed. You can grant permissions to view and manage alarms. Check out Alarms in more detail [here](/docs/{{docsPrefix}}user-guide/alarms/).                                                                                                                                                                                                                                                                                                               |
| Asset                         | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Assets - abstract IoT entities that may be related to other devices and assets. For example, factory, field, vehicle. To know more about the Assets check the article [here](/docs/{{docsPrefix}}user-guide/ui/assets/).                                                                                                                                                                                                                                                                                                                                    |
| Asset Group                   | "All", "Add to Group", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Remove from Group", "Share Group", "Write", "Write Attributes", "Write Telemetry"                                                                                                                         | Multiple assets can be combined into an asset group. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                                                                                                                                                                                                                                                                 |
| Asset Profile                 | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Asset profile contains common settings for multiple assets. To know more about the asset profiles check the article [here](/docs/{{docsPrefix}}user-guide/asset-profiles/).                                                                                                                                                                                                                                                                                                                                                                                 |
| Audit Log                     | "All" and "Read"                                                                                                                                                                                                                                                                                   | Audit logs provide opportunity to track user actions. It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc. Check out the article about audit log [here](/docs/{{docsPrefix}}user-guide/audit-log/).                                                                                                                                                                                                                                                                                                         |
| Billing                       | "All", "Read" and "Write"                                                                                                                                                                                                                                                                          | Billing information tab allows managing current payment method (credit or debit card details) and billing details such as company name and billing address used for invoicing.                                                                                                                                                                                                                                                                                                                                                                              |
| Blob Entity                   | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Binary large object entity in the reporting feature, in order to store Dashboard states snapshots of different content types. Blob Entity information represents an object that contains base information about the blob entity (name, type, content type, etc.). Access to blob entity can be used for generating reports from the dashboard in .pdf, png, and jpeg formats.                                                                                                                                                                               |
| Converter                     | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Data Converters is a part of the Platform Integrations feature. There are Uplink and Downlink data converters. The role is created with permissions for both of these converters. Check the article about data converters [here](/docs/{{docsPrefix}}user-guide/integrations/#data-converters).                                                                                                                                                                                                                                                             |
| Customer                      | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Customer is a separate business entity, individual, or organization that purchases or uses tenant devices and assets. Check out the information in more detail [here](/docs/{{docsPrefix}}user-guide/ui/customers/).                                                                                                                                                                                                                                                                                                                                        |
| Customer Group                | "All", "Add to Group", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Remove from group", "Share group", "Write", "Write Attributes", "Write Telemetry"                                                                                                                         | Tenant administrators can create customer groups and assign the role with specific permissions. The access to Customer or Customer Group level gives the possibility to seе the data available on the upper level. For example, these permissions could be useful for data aggregation. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                              |
| Dashboard                     | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Dashboard is a visual display of the specific data. Dashboards display data from many entities: devices, assets, etc. Dashboards can be assigned to customers. Find out more information about a dashboards [here](/docs/{{docsPrefix}}user-guide/dashboards/).                                                                                                                                                                                                                                                                                             |
| Dashboard Group               | "All", "Add to Group", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Remove from Group", "Share Group", "Write", "Write Attributes", "Write Telemetry"                                                                                                                         | You can create several dashboards and unite them to Dashboard Group, for each entity you can create a role with permissions. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                                                                                                                                                                                         |
| Device                        | "All", "Assign to Tenant", "Change Owner", "Claim Devices", "Create", "Delete", "RPC Call", "Read", "Read Attributes", "Read Credentials", "Read Telemetry", "Write", "Write Attributes", "Write Credentials", "Write Telemetry"                                                                   | Devices are basic IoT entities that can produce telemetry data and handle RPC commands. For example, they can be sensors, actuators, switches and any other gauges. Find out more information about a device [here](/docs/{{docsPrefix}}user-guide/ui/devices/).                                                                                                                                                                                                                                                                                            |
| Device Group                  | "All", "Add to Group", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Remove from Group", "Share Group", "Write", "Write Attributes", "Write Telemetry"                                                                                                                         | Multiple devices can be combined into a device group. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                                                                                                                                                                                                                                                                |
| Device Profile                | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Device profile contains common settings for multiple devices. Find out more information about a device profile [here](/docs/{{docsPrefix}}user-guide/device-profiles/).                                                                                                                                                                                                                                                                                                                                                                                     |
| Edge                          | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | ThingsBoard Edge is an extension of the ThingsBoard platform designed for local data processing and device management in a distributed IoT environment. ThingsBoard Edge supports offline operation when there is no access to the cloud-based ThingsBoard server. Find out more information about Edge [here](/docs/edge/getting-started-guides/what-is-edge/).                                                                                                                                                                                            |
| Edge Group                    | "All", "Add to Group", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Remove from Group", "Share Group", "Write", "Write Attributes", "Write Telemetry"                                                                                                                         | Multiple edge instances can be combined into an edge group. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                                                                                                                                                                                                                                                          |
| Entity View                   | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Entity View is the ThingsBoard feature, which limits the degree of exposure of the device or asset telemetry and attributes to the customers. Learn more about Entity Views [here](/docs/{{docsPrefix}}user-guide/entity-views/).                                                                                                                                                                                                                                                                                                                           |
| Entity View Group             | "All", "Add to Group", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Remove from Group", "Share Group", "Write", "Write Attributes", "Write Telemetry"                                                                                                                         | Multiple entity views can be combined into an entity view group. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                                                                                                                                                                                                                                                     |
| Group Permission              | "All", "Create", "Delete", "Read", "Write"                                                                                                                                                                                                                                                         | Group permission is a mapping between user group, entity group (optional) and group role. In other words, it represents which permission user will have to entity group. For example: User group A has READ permission to device group B.                                                                                                                                                                                                                                                                                                                   |
| Integration                   | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | Integration is the process of connecting and interacting ThingsBoard with other systems or devices to exchange and manage data. To know more about the Integrations check the article [here](/docs/{{docsPrefix}}user-guide/integrations/).                                                                                                                                                                                                                                                                                                                 |
| Notification                  | "All", "Create", "Delete", "Read", "Write"                                                                                                                                                                                                                                                         | A notification is a message that informs users about specific events or updates. Each notification may be delivered using multiple delivery methods: Web, SMS, Email, or Slack. Learn more about notification [here](/docs/{{docsPrefix}}user-guide/notifications/).                                                                                                                                                                                                                                                                                        |
| OTA package                   | "All", "Change Owner", "Create", "Delete", "Read", "Read Attributes", "Read Telemetry", "Write", "Write Attributes", "Write Telemetry"                                                                                                                                                             | OTA Package is a heavy weight object that includes main information about the OTA Package and also data. It allows you to upload and distribute over-the-air(OTA) updates to devices. As a tenant administrator, you may upload firmware or software packages to the OTA repository. Learn more about OTA Package [here](/docs/{{docsPrefix}}user-guide/ota-updates/).                                                                                                                                                                                      |
| Profile                       | “All”, “Read”, “Write”, “Create”, “Delete”                                                                                                                                                                                                                                                         | With these permissions, the user can edit their profile information and change the login password for their ThingsBoard instance.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Queue                         | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | With these permissions, the user can edit a queue or create a new one, as well as choose the existing queue from the list. Learn more about queue [here](/docs/pe/user-guide/rule-engine-2-5/queues/).                                                                                                                                                                                                                                                                                                                                                      |
| Resource                      | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | The resource library allows you to store and organize files, providing efficient resource management and facilitating their reusability.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Role                          | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | Roles in ThingsBoard define a set of permissions and access rights assigned to users to perform specific actions in the system. Roles allow limiting or granting access to functionality and data based on the user’s role.                                                                                                                                                                                                                                                                                                                                 |
| Rule Chain                    | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | Rule Chain in ThingsBoard is a sequence of rules and actions applied to data received from devices or other sources. Rule Chains automate data processing, enable decision-making based on specific conditions, and perform actions such as notifications, device state changes, and other operations. Rule Chains can be configured to process and route data for various purposes, simplifying the development and deployment of IoT logic in the ThingsBoard system. Learn more about rule chain [here](/docs/{{docsPrefix}}user-guide/ui/rule-chains/). |
| Scheduler Event               | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | Scheduler allows to schedule various types of events with flexible schedule configuration. Scheduler events page displays current configured scheduler events. Learn more about Scheduler Event [here](/docs/{{docsPrefix}}user-guide/scheduler/).                                                                                                                                                                                                                                                                                                          |
| Tenant                        | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | Thingsboard tenant is an individual user or organization that has a separate space to manage their devices and data within the ThingsBoard platform. Learn more about users [here](/docs/{{docsPrefix}}user-guide/ui/tenants/).                                                                                                                                                                                                                                                                                                                             |
| User                          | “All”, “Change Owner”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                                                             | User is an entity that can log in to the ThingsBoard web interface, execute REST API calls, access devices, assets and other entities if they have permissions to do so. Learn more about users [here](/docs/{{docsPrefix}}user-guide/ui/users/).                                                                                                                                                                                                                                                                                                           |
| User Group                    | “All”, “Add to Group”, “Create”, “Delete”, “Read”, “Read Attributes”, “Read Telemetry”, “Remove from Group”, “Share Group”, “Write”, “Write Attributes”, “Write Telemetry”                                                                                                                         | User group is group of users of the same level with the same permissions. One user can simultaneously belong to several user groups. Multiple users can be combined into an user group. To know more about the entity groups check the article [here](/docs/{{docsPrefix}}user-guide/groups/).                                                                                                                                                                                                                                                              |
| Version Control               | “All”, “Delete”, “Read”, “Write”                                                                                                                                                                                                                                                                   | ThingsBoard Version Control service provides the ability to export and restore ThingsBoard Entities using Git. Learn more about Version Control [here](/docs/{{docsPrefix}}user-guide/version-control/).                                                                                                                                                                                                                                                                                                                                                    |
| White Labeling                | “All”, “Read”, “Write”                                                                                                                                                                                                                                                                             | Permissions to white labeling allows to configure your company or product logo and color scheme in a short period of time. Learn more about White Labeling [here](/docs/{{docsPrefix}}user-guide/white-labeling/).                                                                                                                                                                                                                                                                                                                                          |
| Widget Type and Widget Bundle | “All”, “Create”, “Delete”, “Read”, “Write”                                                                                                                                                                                                                                                         | There are five widget types in ThingsBoard, each widget definition represents a specific type of widget. Widgets are grouped into widget bundles according to their purposes. To learn more about Widgets please read [here](/docs/{{docsPrefix}}user-guide/ui/widget-library/).                                                                                                                                                                                                                                                                            |

### Group role

<b><font size="3">What is a Group role?</font></b>

A group role defines a set of permissions for a <b>specific user group</b> over a <b>specific entity group</b>.

The link "who → to what → with which rights" is created via <b>GPE (Group Permission Entry)</b> — a join object between the <b>user group</b>, the <b>entity group</b>, and the <b>group role</b>.

#### Example

Let&#39;s consider an example to better understand how a group role works.

<br>

![image](/images/user-guide/security/rbac/group-role.svg)

<br><b><font size="3">We have:</font></b>

- <b>User groups:</b>
  - "<b>Building A Admins</b>" (includes <b>Alice<b>)
  - "<b>Building B Admins</b>" (includes <b>Bob</b>)

{% include images-gallery.html imageCollection="group-roles-example-1" %}

- <b>Device groups</b>:
  - "<b>Building A</b>" (with <b>Device A1</b>)
  - "<b>Building B</b>" (with <b>Device B1</b>)

{% include images-gallery.html imageCollection="group-roles-example-2" %}

<br><b><font size="3">Objective of this example:</font></b>
- Grant <b>Bob</b> (Building B Admins) <b>read/write</b> permissions for devices in the "<b>Building B</b>" group, with <b>no access</b> to devices in the "<b>Building A</b>" group.
- Grant <b>Alice</b> (Building A Admins) <b>read/write</b> permissions for devices in the "<b>Building A</b>" group, with <b>no access</b> to devices in the "<b>Building B</b>" group.

<br><b><font size="4">Step 1 — Create the Group role</font></b>

- Create a <b>Group role</b> with <b>Read/Write</b> operations (for devices/device groups).

{% include images-gallery.html imageCollection="group-roles-example-3" %}

<br><b><font size="4">Step 2 — Assign the Group role to the "Building A" device group</font></b>

- Go to the "<b>Devices</b>" → "<b>Groups</b>" tab.
- Open Entity group details for "<b>Building A</b>".
- In the "<b>Permissions</b>" tab, click "<b>+</b>".
- Select the <b>created role</b>, set the <b>Owner</b>, choose <b>user group "Building A Admins"</b>, and click "<b>Add</b>".

Permission assigned.

{% include images-gallery.html imageCollection="group-roles-example-4" %}

<br><b><font size="4">Step 3 — Assign the Group role to the "Building B" device group</font></b>

Repeat at the same for "<b>Building B</b>" device group:

- In "<b>Building B</b>" device group details → "<b>Permissions</b>" tab → click "<b>+</b>".
- Select the same <b>role</b>, set <b>Owner</b>, choose <b>user group "Building B Admins"</b>, and click "<b>Add</b>".

Permission assigned.

{% include images-gallery.html imageCollection="group-roles-example-5" %}

<br><b><font size="4">Verify access</font></b>

So, user Alice and all users in the group "Building A Admins" only have access to <b>Device A1</b>. Login as user Alice to verify this.
- Go to the "<b>Users</b>" page of <b>Tenant A</b>.
- Click "<b>Login as Tenant Admin</b>" icon next to <b>Alice</b> account.
- Open "<b>Devices</b>" page - you see only "<b>Building A</b>" group with <b>Device A1</b> inside.

{% include images-gallery.html imageCollection="group-roles-example-6" %}

Same thing with user Bob. User Bob and all users in the group "Building B Admins" only have access to <b>Device B1</b>.
- Go to the "<b>Users</b>" page of <b>Tenant A</b>.
- Click "<b>Login as Tenant Admin</b>" icon next to <b>Bob</b> account.
- Open "<b>Devices</b>" page - you see only "<b>Building B</b>" group with <b>Device B1</b> inside.

{% include images-gallery.html imageCollection="group-roles-example-7" %}

In this way, group roles allow you to flexibly manage access to resources at the group level, rather than at the level of individual users or individual devices.

{% capture difference %}
**Note:** Since an entity group has a single Owner, you can assign a group role only to user groups that belong to the same Owner or any of its parents.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Solution example for smart buildings: separate user groups per facility

Let&#39;s assume your solution manages commercial buildings. 
Your main customer is a Building Manager that wants to monitor HVAC systems, electricity consumption, and other smart devices in the building.  
The Building Manager may want to design and share some dashboards with the end-users - office workers.
Besides, your engineers responsible for the maintenance are interested in supervising the device's state, for example, receive alerts when the battery level forgoes below certain thresholds.

To summarize those requirements in ThingsBoard terms, we should implement the following roles:
 * **Supervisors** - read-only access to all devices' telemetry in all the buildings, and the ability to create their custom dashboards, but no access to dashboards created by users from different user groups.
 * **Facility Managers** - allows provisioning new devices for each facility, setup thresholds, manage users, and configure dashboards.
 * **End Users** - allows having read-only access to the state of the facility where this user belongs to.

Let's configure ThingsBoard to support this use case. The instructions below assume that you have logged in as a Tenant Administrator.

**Supervisors**

We will create a separate *user group* named "Supervisors", a separate *dashboard group* "Supervisor Dashboards" and one *dashboard*.
Our goal is to allow supervisors to manage dashboards in the "Supervisor Dashboards" group, but for all other entities in the system, they should have read-only access.

Let&#39;s start by creating a "Supervisor Dashboards" group:
1. Navigate to the "Groups" tab in the "Dashboards" page and click "plus" button to create new entity group;
2. Input the name of your dashboard group. In our case, it's "Supervisor Dashboards". Click on the "Add" button;
3. New dashboard group "Supervisor Dashboards" has been created.

{% include images-gallery.html imageCollection="supervisors-add-dashboard-group" %}

[//]: # (<img data-gifffer="/images/user-guide/security/smart-buildings-dashboards-group.gif">)

Next we should create two roles to implement this use case:

 * "All Entities Read-only" - the **generic role** that will allow access to all entities' data except device credentials.
1. Navigate to the "Security" section -> "Roles" page and click on the "+" sign at the top right of the screen;
2. Input the role name - "All Entities Read-only";
3. Select role type - "Generic";
4. In the "Permissions" section select "All" for the "Resources";
5. select operations: "Read", "Read Attributes" and "Read Telemetry";
6. Click on the lowest "Add" button, the one without a "+" sign.

{% include images-gallery.html imageCollection="supervisors-create-generic-role" %}

[//]: # (<img data-gifffer="/images/user-guide/security/smart-buildings-role1.gif"> )

 * "Entity Group Administrator" - the **group role** that allows all operations for the group.
1. Again, click the "plus" icon in the upper right corner of the "Roles" page screen;
2. Input the role name - "Entity Group Administrator";
3. Select role type - "Group";
4. In the "Permissions" section select "All" operations;
5. Click on the "Add" button.

{% include images-gallery.html imageCollection="supervisors-create-group-role" %}

[//]: # (<img data-gifffer="/images/user-guide/security/smart-buildings-role2.gif">)

Now let's assign those roles to the "Supervisors" group.
1. Navigate to the "Users" page -> "Groups" tab and click on the "+" sign (Add entity group) at the top right of the screen;
2. Input the name - "Supervisors", then click on the "Add" button. The "Supervisors" user group is created. Click on it;
3. Click on the "pencil" icon to open entity group details;
4. Navigate to the "Roles" tab and click on the "plus" icon at the right top of the opened menu;
5. Select role type - "Generic" and select previously created role - "All Entities Read-only". Then, click "Add";
6. Again press the "+" sign. This time select role type - "Group" and select role - "Entity Group Administrator". For a group owner select "Tenant", for a entity type select "Dashboard", and select entity group - "Supervisor Dashboard". Click "Add". We have assigned these roles to the Supervisors group.

{% include images-gallery.html imageCollection="supervisors-assign-roles-to-supervisors-group" %}

[//]: # (<img data-gifffer="/images/user-guide/security/smart-buildings-user-group.gif">)

**Facility Managers**

We will create a separate customer entity for each building or group of buildings. We will add the Facility Manager user account to the default "Customer Administrators" user group which is automatically created for each customer.
Now, as Facility Manager, we can log in, design dashboards, provision devices, and end-users.
1. Navigate to the "Customers" page and click on the "+" sign (Add customer) at the top right of the screen;
2. Input the title "Building A" and click "Add";
3. Click on the "Manage customer users" icon opposite the "Building A" customer;
4. Navigate to the "Groups" tab and click on the "Customer Administrators" user group;
5. Click on the "+" sign at the top right of the screen. Input email address, for instance, we can use _janesmith@thingsboard.io_, and click "Add";
6. In the opened window you can see the user activation link, click "OK";
7. Customer user Jane has been created.

{% include images-gallery.html imageCollection="supervisors-add-new-user" %}

[//]: # (<img data-gifffer="/images/user-guide/security/smart-buildings-building-a.gif">  )

**End Users**

Let's log in as customer user Jane Smith (created in a previous guide), Building A administrator, and create a dashboard.
1. Login as customer user Jane Smith;
2. Go to the "Dashboards" page, and click on the "plus" icon in the top right corner. Select "Create new dashboard";
3. Input dashboard name. For example, "End User Dashboard". Click "Add" to create the dashboard;
4. Open created dashboard and enter edit mode;
5. Click "Add new widget" and select "Simple card" widget in "Cards" widgets bundle;
9. In this example, we will generate random temperature values in the widget. In the "Datasources" section select the type as "Function" and the key as "Random". Click "Add";
10. The widget has been created. Save the dashboard.

{% include images-gallery.html imageCollection="supervisors-end-users" %}

[//]: # (![image]&#40;/images/user-guide/security/smart-buildings-building-a-dashboards.png&#41;)

Now, let's create a Read-only User. Let's assume we want to assign "End User Dashboard" to him and make sure that this Dashboard will open full screen once the user is logged in.
So, our read-only user will not have access to the administration panel to the left, since they are still not allowed to perform any server-side API calls, except read-only browsing the data.
1. Select "Customer Users" on the "Groups" tab of the "Users" page;
2. Click "+" at the top right of the screen to add new user;
3. Input email address, for example, we will use _bob@thingsboard.io_, then click "Add";
4. In the opened window you can see the user activation link, click "OK";
5. Now, click on the created user;
6. At the right top of the screen you shall see the "pen" icon. Click on it to enter edit mode;
7. Check the box "Always fullscreen" and choose "End User Dashboard" in the "Default dashboard" line. Then save changes;
8. Login as customer user Bob. Dashboard will open full screen. User Bob will not have access to the administration panel to the left.
Bob is not allowed to perform any server-side API calls, only browsing the data.

{% include images-gallery.html imageCollection="supervisors-create-read-only-user" %}

[//]: # (<img data-gifffer="/images/user-guide/security/smart-buildings-read-only-user.gif">)

## Video tutorial

You can watch the video tutorial for step-by-step instructions on role-based access control.

<br>
<div id="video">
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/xpnYzSiDiJo" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
