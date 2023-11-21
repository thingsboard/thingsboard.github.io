
* TOC
{:toc}

## User overview

There are three levels of roles on the ThingsBoard platform. It is possible to create a user on each level.


These roles are as follows:

1) **System administrator**. The System administrator can create a tenant administrator user.

2) **Tenant administrator**. The Tenant administrator can create a customer user.

3) **Customer user**. The Customer user has read permissions to view dashboards and other entities assigned by the Tenant administrator. The Customer user by himself doesn’t create any customers and subcustomers.

{% capture difference %}
**Important:**
<br>
In Thingsboard Professional Edition, the Customer can create other customer users and subcustomers.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

The instructions below give an overview of adding the user on each level.

### System administrator

If you are the **System administrator,** you can create the user in [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants) by the following steps.

1. Go to Tenants on the left-hand menu. Navigate to Tenant admins, and click plus icon to add a new user.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/tenant-user-add.png)

2. Fill in the email and select the activation method in the Add User window. 
The system administrator can also add the name and description optionally. Afterward click Add.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/user-add-window.png)

3. If you selected the **activation link method,** click the arrow to copy this link and insert it in the browser or to any messenger used by the user. An example of an activation link is provided below.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/user-activation-link.png)

4. If you selected send **activation mail option,** then you need to check your email box and find the message about the Thingsboard account activation. 
Click Activate Your Account, and follow the easy password-creating process.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/account-activation-email.png)

{% capture difference %}
**NOTE:**
<br>
To receive an email from ThingsBoard, you should set up a mail server at the system administrator level in advance.
Check out the [mail settings](/docs/{{docsPrefix}}user-guide/ui/mail-settings) instructions.
{% endcapture %}
{% include templates/info-banner.md content=difference %}


After a user is created, the system administrator can use the action tabs on the tenant details page.

They are as follows:

1) **Disable the User account**.

2) **Display activation link** will show the activation link for the Tenant administrator user.

3) **Resend activation** will resend the account activation email to the user's email box.

4) **Login as Tenant administrator** opens the Thingsboard platform from the Tenant administrator UI. 

5) The System Administrator can also **delete** the Tenant administrator from the tenants' users list.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/user-tenant-tabs.png)

When the admin clicks Disable User Account, he will see a message in the top left corner saying that the user account has been successfully disabled, and the tab will change to Enable User Account. 
See the picture below.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/user-account-disabled.png)

If the user with a disabled account tries to access the platform, he will see the following error message.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/error-message.png)

Similarly, when the admin clicks Enable User Account, he will see the message in the top left corner that the user account has been successfully enabled. The tab will change to Disable User Account. See the picture below.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/user-account-enabled.png)

### Tenant administrator

As a **Tenant administrator**, you can add a new user using the following steps.

1. Go to Customers. Navigate to Customer Users, and click the plus icon to add a new user. 

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/customer-user-add.png)

2. Be sure to fill in the email and select the activation method in the Add User window.
The Tenant administrator can add the name and description optionally. When done, click Add.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/customer-user-add-window.png)

3. When the user is created, the Tenant Administrator can use the action tabs on the user details page. 

They are as follows:

1) **Disable the User account.** How to disable the account was mentioned above.  

2) **Display activation link** will show the activation link for the Customer user.

3) **Resend activation** will resend the account activation email to the user's email box. 

4) **Login as a Customer user** lets the Tenant administrator open the Thingsboard platform from the user UI. 

5) The Tenant Administrator can also **delete the Customer user** from the customers’ list.


   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/customer-user-account-disable.png)

The Tenant administrator can optionally assign the default dashboard and set the fullscreen mode, as shown in the picture below.


   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/default-dashboard-assigned.png)

Likewise, the Tenant administrator can optionally assign the home dashboard for the Customer user and hide the dashboard toolbar, as shown in the picture below.


   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/home-dashboard-assigned.png) 

**IMPORTANT**: There is no need to assign a default dashboard and home dashboard together since the default dashboard will be the first one a user sees when he logs into his account.

If any questions arise, click the Question mark in the upper right corner.

### Customer User UI

#### Default dashboard as the home page

When the Customer user logs into his account, the default dashboard is the first he sees. If the Tenant administrator sets the fullscreen default dashboard, the Customer user will see the dashboard without the lefthand menu, as in the example below. 
The dashboard toolbar will always be available for the user, and he can switch to another dashboard, if one is assigned, and set realtime ranges for himself.
Additionally, there is an option to export this dashboard.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/default-dashboard.png) 


Customer users can switch between the left-hand menu tabs to view all the assets, devices, entities, edges, and dashboards assigned by the Tenant administrator if the fullscreen mode is not check-marked.
The dashboard example is shown below.

   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/default-dashboard-not-fullscreen-1.png) 


#### Home dashboard as the home page

If the Tenant administrator assigns the dashboard as the home dashboard, then the Customer user will see this dashboard on his home page.
If Hide home dashboard toolbar is selected, then the Customer user will see the home dashboard without the toolbar.
The dashboard with the disabled toolbar is shown below.

  ![image](https://img.thingsboard.io/user-guide/ui/users/ce/home-dashboard-no-toolbar.png)    

The dashboard with the enabled toolbar is shown in the picture below. The user can set real-time ranges and export the dashboard.


   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/home-dashboard-toolbar.png)

The Customer user can also optionally hide the home dashboard toolbar or change the home dashboard in his profile settings.
   
   ![image](https://img.thingsboard.io/user-guide/ui/users/ce/profile-window.png)  

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}