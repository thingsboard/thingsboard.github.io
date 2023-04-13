
* TOC
{:toc}
## Tenants overview

ThingsBoard supports [Multitenancy](https://en.wikipedia.org/wiki/Multitenancy) out-of-the-box.
You can treat ThingsBoard Tenant as a separate business-entity: individual or organization who owns or produces devices.

The **System administrator** is able to create one or more tenant entities.
Tenant may have multiple tenant administrator users and enormous number of customers, devices and assets.

### Adding a Tenant 

To add a new **Tenant**, please follow the instructions below:

Select **Tenants** from the menu on the left. Then, click plus icon to add a new Tenant.

![image](/images/user-guide/ui/tenants/add-tenant1.png)

In the opened window, you can edit all the Tenant information. You should fill in the title and tenant profile here.
Optionally, include the country, city, address, phone number, and email address.


Learn more about tenant profiles [here](/docs/{{docsPrefix}}user-guide/tenant-profiles).


![image](/images/user-guide/ui/tenants/add-tenant-window.png) 

On the Tenant details page, you as the System administrator can view the attributes, the latest telemetry, assign the home dashboard, and copy the tenant ID.


![image](/images/user-guide/ui/tenants/tenant-details.png) 

### Adding a Tenant Administrator

The **System administrator** is also able to create multiple users with **Tenant administrator** role in each tenant.

To add the Tenant administrator follow the instructions below:

In the Tenant you created click **Manage tenant admins**, and then click plus icon to add a new user.

![image](/images/user-guide/ui/tenants/add-user.png)

In the newly created user details window, the System administrator can edit the data and use the following action tabs:

1) **Disable the User account**.

2) **Display activation link** shows the activation link for the Tenant administrator user.

3) **Resend activation** resends the account activation email to the user’s email box.

4) **Login as Tenant administrator** opens the Thingsboard platform from the Tenant administrator UI.

5) The System Administrator can also **Delete user** from both the user details page and tenant admins list. 


![image](/images/user-guide/ui/tenants/user-details.png)    

Learn more about user creating process [here](/docs/{{docsPrefix}}user-guide/ui/users).

### Login as a Tenant Administrator

If necessary, you can log in as the Tenant administrator to view the user interface from his perspective.
To do this you need to open Tenant Admins list and click on the arrow opposite the user account.

![image](/images/user-guide/ui/tenants/login-as-tenant.png)


The Tenant Administrator is able to do following actions:

- Provision and Manage [Devices](/docs/{{docsPrefix}}user-guide/ui/devices).
- Provision and Manage [Assets](/docs/{{docsPrefix}}user-guide/ui/assets).
- Create and Manage [Customers](/docs/{{docsPrefix}}user-guide/ui/customers).
- Create and Manage [Dashboards](/docs/{{docsPrefix}}user-guide/ui/dashboards).
- Configure [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).
- Add or modify default widgets using [Widget Library](/docs/{{docsPrefix}}user-guide/ui/widget-library).

All actions listed above are available using [REST API](/docs/{{docsPrefix}}reference/rest-api/).

### Deleting a Tenant

In addition, there is an option to delete the Tenant using the action tab in Tenant details window.

![image](/images/user-guide/ui/tenants/delete1.png)


Alternatively, after selecting the required Tenant, you can delete him straight from the Tenants list with all its users, as seen in the image below.

![image](/images/user-guide/ui/tenants/delete-tenant2.png)

Moreover, you can delete the Tenant from the list of Tenants together with all of its users by simply clicking the trash can icon, as seen below.

![image](/images/user-guide/ui/tenants/delete3.png)

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}