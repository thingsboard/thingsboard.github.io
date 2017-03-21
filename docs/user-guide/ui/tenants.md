---
layout: docwithnav
assignees:
- ashvayka
title: Tenants
description: Thingsboard Tenants management

---

* TOC
{:toc}

Thingsboard support [Multitenancy](https://en.wikipedia.org/wiki/Multitenancy) out-of-the-box. 
You can treat Thingsboard tenant as a separate business-entity: individual or organization who owns or produce devices.

**System administrator** is able to create tenant entities.

![image](/images/user-guide/ui/tenants.png)

System administrator is also able to create multiple [users](/docs/user-guide/ui/users) with **Tenant Administrator** role for each tenant by pressing "Manage Tenant Admins" button in Tenant details.
 
![image](/images/user-guide/ui/manage-tenant-admins.png) 
 
Tenant Administrator is able to do following actions:
 
 - Provision and Manage [Devices](/docs/user-guide/ui/devices).
 - Create and Manage [Customers](/docs/user-guide/ui/customers).
 - Create and Manage [Dashboards](/docs/user-guide/ui/dashboards).
 - Configure [Rules](/docs/user-guide/ui/rules) and [Plugins](/docs/user-guide/ui/plugins)
 - Add or modify default widgets using [Widget Library](/docs/user-guide/ui/widget-library).
 
 All actions listed above are available using [REST API](/docs/reference/rest-api/)