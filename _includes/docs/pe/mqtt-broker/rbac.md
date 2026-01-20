* TOC
{:toc}

**Role-Based Access Control (RBAC)** in TBMQ PE provides a structured and secure way to manage access to broker features 
and operations through predefined [user roles](/docs/pe/mqtt-broker/user-guide/ui/users/). 
This system enables administrators to grant appropriate permissions to users based on their role within the organization.

### Available Roles

TBMQ PE introduces two predefined user roles:

* **Admin**: Full access to all broker features.
* **Viewer**: Read-only access to all broker data — without the ability to perform changes or administrative actions.

### Benefits

* **Enhanced security**: Limit access to sensitive broker features based on user responsibilities.
* **Simplified administration**: Easily assign predefined roles to users without managing granular permissions.
* **Compliance and auditing**: Support best practices in access control by separating duties between administrative and observability roles.

### Use Cases

* Assign the **Admin** role to team members responsible for configuring or maintaining the broker environment.
* Grant the **Viewer** role to operations or monitoring personnel who need visibility into system health and client behavior without risking configuration changes.
