* TOC
{:toc}

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="n-button add-device">Lesson 3. Charts and card widgets</a></p>

<br>

One of the most important ThingsBoard features is the ability to create end-user dashboards. 
The end user will only see their own devices and data, will enjoy all the benefits of working with the dashboard, and should not see devices or any other data belonging to another customer.
And you, as an administrator, will always have access to edit and modify your dashboard. 

In this lesson, we will create two Customers and configure their access so that they can interact with the dashboard we developed in previous lessons, but they will only see their own office and the data for devices within that office.

There are two options for how Tenant Administrator can give access to a certain Entity (Device, Dashboard, Asset, etc.) for a Customer:

- Assign the Customer as the owner of the entity. This option ensures that only this customer can access the entity and its data.
- Share the entity with the Customer. This option is useful for sharing a single entity with multiple customers.

Let's share the created dashboard and its data with the customers.

### Add a customers

Let's start with adding two customers. In our case, a Customer is an individual or organization that rents an office in your building and uses the devices available there.

{% include images-gallery.html imageCollection="adding-customers-1" showListImageTitles="true" %}

Similarly, create another customer named "Customer B" and add them to the "Office renters" group.

{% include images-gallery.html imageCollection="adding-customers-2" %}

### Changing the owner of devices

Let's agree that Customer A rents Office A in Building A, while Customer B rents Office B in the same building.

Assign Customer A as the owner of the "Indoor Air Quality Sensor", "Energy Meter", and "Water Flow Meter" devices, and assign Customer B as the owner of the "IQA Sensor".

{% include images-gallery.html imageCollection="change-devices-owner-1" showListImageTitles="true" %}

Make sure that the devices is assigned to Customer A.

{% include images-gallery.html imageCollection="change-devices-owner-2" showListImageTitles="true" %}

Make sure that the devices is assigned to Customer B.

{% include images-gallery.html imageCollection="change-devices-owner-3" showListImageTitles="true" %}

### Sharing dashboard

Since multiple customers will use the dashboard, we cannot make them both owners, but we can share access to them. You also cannot share an individual dashboard, only the group that includes this dashboard.

{% include images-gallery.html imageCollection="share-dashboard-1" showListImageTitles="true" %}

### Sharing assets

Offices A and B are located in Building A. Your customers should have shared access to Building A but should not be able to see each other's offices. 
Therefore, we will we need to change the owners for "Office A" and "Office B", and share the asset "Building A"  with customers.

First, let's change the owners of the offices.

{% include images-gallery.html imageCollection="change-assets-owner-1" showListImageTitles="true" %}

Let's share the "Building A" asset.

{% include images-gallery.html imageCollection="share-assets-1" showListImageTitles="true" %}

### Add a customer user

User is an entity that can log in to the ThingsBoard web interface, execute REST API calls, access devices, assets and other entities if they have permissions to do so.
Finally, let’s create a user that will belong to the customer and will have read-only access to the dashboard and the device itself. You may optionally configure the dashboard to appear just after the user login to the platform web UI.

{% include images-gallery.html imageCollection="add-customer-user-1" showListImageTitles="true" %}

Activate the customer user.

{% include images-gallery.html imageCollection="add-customer-user-2" showListImageTitles="true" %}

### Making dashboard public

Creating dashboards for end-users is one of the most important features in ThingsBoard. 
It is very useful. The end-user will be able to enjoy all the benefits of working with the dashboard. 
And you, as an administrator, will always have access to edit and modify your dashboard. 
Let's share the created dashboard with the customer.

Делается это просто. В Asset group -> Guide click on button “Make entity group public”
Тоже самое делаете с Device group Guide & Dashboard group Guide. У группы появился значек – “Public”. Переходим в группу и справа появился button “Publick dashboard link”.
Copy this link & отправьте this link конечному пользователю. Когда он перейдет по ссылке, у него откроется созданный вами dashboard. И он сможет воспользоваться проделанной вами работой.