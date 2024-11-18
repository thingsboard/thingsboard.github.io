* TOC
{:toc}

One of the most important ThingsBoard features is the ability to create end-user dashboards.
Each end user will only see their own devices and data, enjoying all the benefits of working with their personalized dashboard. They will not see devices or any other data belonging to other customers.
As an administrator, you will always retain the access to edit and modify your dashboard. 

There are two ways a Tenant Administrator can grant a Customer access to a specific entity (such as a Device, Dashboard, Asset, etc.):

- Assign ownership: This option makes the customer the sole user able to access the specific entity and its data;
- Share the entity: Useful for allowing multiple customers to access the same entity.

In the previous lesson, we added separate states for each device and configured them to display telemetry data.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="n-button add-device">Lesson 3. Adding and configuring individual states for each device</a></p>

<br>

In this lesson, we will add two customers and configure shared access for them to the dashboard created in previous lessons.
In our case, a Customer is an individual or organization that rents an office in your building and uses the devices available there.
Each customer will have access solely to their respective rented office and the devices within it.

{% include carousel.liquid collectionMap = 'dashboard-lesson-4' nonActiveItemsVisibility = false %}

As part of our lesson, imagine two customers: Customer A rents Office A in Building A. Customer B rents Office B in the same building.

Let's create these customers and grant them the necessary access.

## Add customers

Let's start by adding two customers. 

{% include images-gallery.html imageCollection="adding-customers-1" showListImageTitles="true" %}

Similarly, create another customer named "Customer B" and add them to the "Office renters" group.

{% include images-gallery.html imageCollection="adding-customers-2" %}

## Sharing dashboard

Since both of our clients will be using the dashboard, we cannot make them both owners, but we can provide them with shared access to the dashboard. You also cannot share an individual dashboard; only the group that includes the dashboard can be shared.

{% include images-gallery.html imageCollection="share-dashboard-1" showListImageTitles="true" %}

## Changing owner of devices

Now, let's change the owners of the devices. Assign Customer A as the owner of all devices in Office A, specifically: "Indoor Air Quality Sensor", "Energy Meter", and "Water Flow Meter". Assign Customer B as the owner of the "IQA Sensor" in Office B.

{% include images-gallery.html imageCollection="change-devices-owner-1" showListImageTitles="true" %}

Similarly, assign Customer A as the owner of "EM-002" (Energy Meter) and "WM-003" (Water Flow Meter) devices, and Customer B as the owner of "AM-307" (Indoor Air Quality Sensor).

{% include images-gallery.html imageCollection="change-devices-owner-2" %}

<br>
Make sure that the devices are assigned to Customer A.

{% include images-gallery.html imageCollection="change-devices-owner-3" showListImageTitles="true" %}

Make sure that the devices are assigned to Customer B.

{% include images-gallery.html imageCollection="change-devices-owner-4" showListImageTitles="true" %}

## Access to assets

Since both Office A and Office B are located in Building A, your customers should have shared access to the building, but their access to offices should be restricted so they can only see their respective offices. Here's what we'll do:

Change the owners of Office A and Office B:

- Assign Customer A as the owner of Office A;
- Assign Customer B as the owner of Office B.

Share access to Building A:

- Share the asset Building A with both Customer A and Customer B;
- Set the permission level to "Read" for both customers, so they can access shared data about the building without seeing each other's offices.

### Changing owner of assets

{% include images-gallery.html imageCollection="change-assets-owner-1" showListImageTitles="true" %}

Make sure that the office assets are assigned to the correct customers.

{% include images-gallery.html imageCollection="change-assets-owner-2" showListImageTitles="true" %}

{% include images-gallery.html imageCollection="change-assets-owner-3" showListImageTitles="true" %}

### Sharing assets

Now we will add Building A to a group and share access to it for both customers.

{% include images-gallery.html imageCollection="share-assets-1" showListImageTitles="true" %}

We&#39;ve granted access to all the necessary customers. Time to move on to adding customer users.

## Adding a customer user

Finally, let&#39;s create one customer [user](/docs/{{docsPrefix}}user-guide/ui/users){:target="_blank"} for each customer. They will have access to our dashboards and the data to which we have granted them access.

First, let&#39;s add user Emma Johnson to Customer A:

- Go to the "Customers" page. Find your customer in the list of customers and then click on the "Manage customer users" icon;
- Navigate to the "Groups" tab and select the "Customer Users" group. This is an automatically created group of customer users with read-only permissions already granted. To learn more about permissions and [Role-Based Access Control (RBAC)](/docs/{{docsPrefix}}user-guide/rbac){:target="_blank"}, read this article;
- Click "plus" icon in the top-right corner. Enter the user&#39;s email. Additionally, specify the first and last name. Then click "Add";
- Copy the user activation link and save it to a safe place. Then click "OK";
- We added new customer user. Click on the created user to open their details, then click the big orange "pencil" icon to enter editing mode;
- Set our "Building" dashboard as default, and check "Always fullscreen" option. Finally, apply changes.

{% include images-gallery.html imageCollection="add-customer-user-1" %}

We have finished adding the user of Customer A. Similarly, add the customer user Jack Smith to Customer B.

{% include images-gallery.html imageCollection="add-customer-user-2" %}

## Reviewing the dashboard from the perspective of customer users

Next up, we&#39;ll activate the customer users and check how our dashboard looks from each user&#39;s perspective

Let&#39;s start with Client A&#39;s user - Emma Johnson.

{% include images-gallery.html imageCollection="activation-customer-user-1" showListImageTitles="true" %}

<br>
The dashboard will open, displaying only the building where your office is located — Building A. Navigate through the dashboard to ensure that your user has access only to the data you have granted them access to.

{% include images-gallery.html imageCollection="reviewing-customer-user-dashboard-1" %}

Similarly, activate the user of Customer B. They should have access to Office B in Building A and the data from the IAQ Sensor located inside the Office B.

{% include images-gallery.html imageCollection="reviewing-customer-user-dashboard-2" %}

## Conclusion

In the next lesson, which will be released very soon, we will learn how to create and manage alarms to respond to different conditions and events effectively. See you soon.