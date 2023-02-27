
* TOC
{:toc}

## Customers overview

A Customer is a separate business entity, individual, or organization that purchases or uses tenant devices and assets. The Customer may have multiple users and millions of devices and assets.

### Adding a Customer

As a Tenant administrator, you can add a new Customer using the following steps.

1. Navigate to the left-hand menu and select Customers.

   ![image](/images/user-guide/ui/customers/ce/customers-select.png)

2. Click the plus icon in the upper right corner of the screen.

   ![image](/images/user-guide/ui/customers/ce/add-new-customer.png)

3. In the opened window, fill in the title of the Customer. Also, you can optionally indicate country name, city, address, and phone number. 
Click Add to save the data of the newly created Customer.

   ![image](/images/user-guide/ui/customers/ce/customers-menu.png)

4. Tenant administrator can directly **manage users, assets, devices, dashboards, and edges** from the Customer details page by clicking the related tab. 
The Tenant administrator can also copy the customer ID from these details. All the information can be edited by clicking the pencil icon. 

In addition, Tenant can optionally assign the home dashboard and select the toolbar's visibility in the Customer details window, as shown below.

You can also click the Question mark in the upper right corner, and you will be redirected to the user guide for more information.


   ![image](/images/user-guide/ui/customers/ce/customer-tabs.png)


To assign assets to the Customer, click **Manage assets**. Select the asset from the entity list and click Assign. 
All the assigned assets will be visible to the Customer.

   
To assign devices to the Customer, click **Manage devices**. Select the device from the Entity drop-down list and click Assign. 
All the assigned devices will be visible to the Customer.

To assign dashboard to the Customer, click **Manage dashboard**. Select the dashboard from the Entity list and click Assign. 
All the assigned dashboards will be visible to the Customer.

To assign edges to the Customer, click **Manage edges**. Select the edge from the entity list and click Assign. 
All the assigned edges will be visible to the Customer.

The Tenant administrator has the right to **Delete Customer** in one of the following ways:

1) Click Delete customer tab on the Customer details page.

   ![image](/images/user-guide/ui/customers/ce/deleting-customer.png) 

2) Click on the Bin icon on the Customers list, as shown in the picture below.
   
   ![image](/images/user-guide/ui/customers/ce/deleting-customer-1.png)
   
As a Tenant administrator, you can add one or more Customers and Customer Users. 
Moreover, you can provide specific viewing permissions and assign different devices and dashboards to Customer users.


{% capture difference %}
**IMPORTANT:**
<br>
If you delete the Customer, all the data related to this role, as well as the level itself, will be lost.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Adding a Customer User

To add a Customer User, select Manage users tab and click the plus icon to add a new user.

   ![image](/images/user-guide/ui/customers/ce/add-user.png)

Learn more about the Customer user creation process  [here](/docs/{{docsPrefix}}user-guide/ui/users).


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
