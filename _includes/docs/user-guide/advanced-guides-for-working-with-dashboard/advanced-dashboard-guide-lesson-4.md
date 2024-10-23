* TOC
{:toc}

One of the most important ThingsBoard features is the ability to create end-user dashboards. 
The end user will only see their own devices and data, will enjoy all the benefits of working with the dashboard, and should not see devices or any other data belonging to another customer.
And you, as an administrator, will always have access to edit and modify your dashboard. 

There are two options for how Tenant Administrator can give access to a certain Entity (Device, Dashboard, Asset, etc.) for a Customer:

- Assign Ownership: This option makes the customer the sole user able to access the specific entity and its data;
- Share the entity: Useful for allowing multiple customers to access a single entity.

In the previous lesson, we added separate states for each device and configured them to display telemetry data.

<br>
<p><a href="/docs/{{docsPrefix}}user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-3/" class="n-button add-device">Lesson 3. Adding and configuring individual states for each device</a></p>

<br>

In this lesson, we will add two customers and configure shared access for them to the dashboard created in previous lessons.
In our case, a Customer is an individual or organization that rents an office in your building and uses the devices available there.
Each customer will have access solely to their respective rented office and the devices within.

{% include carousel.liquid collectionMap = 'dashboard-lesson-4' nonActiveItemsVisibility = false %}

As part of our lesson, imagine two customers: Customer A rents Office A in Building A. Customer B rents Office B in the same building.

Let's create these customers and grant them the necessary access.

## Add a customers

Let's start with adding two customers. 

{% include images-gallery.html imageCollection="adding-customers-1" showListImageTitles="true" %}

Similarly, create another customer named "Customer B" and add them to the "Office renters" group.

{% include images-gallery.html imageCollection="adding-customers-2" %}

## Sharing dashboard

Since both of our clients will be using the dashboard, we cannot make them both owners, but we can provide them with shared access to the dashboard. You also cannot share an individual dashboard, only the group that includes this dashboard.

{% include images-gallery.html imageCollection="share-dashboard-1" showListImageTitles="true" %}

## Changing owner of devices

Now let's change the owners of the devices. Assign Customer A as the owner of all devices in Office A, specifically: "Indoor Air Quality Sensor", "Energy Meter", and "Water Flow Meter", and assign Customer B as the owner of the "IQA Sensor" in Office B.

{% include images-gallery.html imageCollection="change-devices-owner-1" showListImageTitles="true" %}

Similarly, assign Customer A as the owner of the devices "EM-002" (electricity meter) and "WM-003" (water consumption meter), and Customer B as the owner of "AM-307" (indoor air quality sensor).

{% include images-gallery.html imageCollection="change-devices-owner-2" %}

<br>
Make sure that the devices is assigned to Customer A.

{% include images-gallery.html imageCollection="change-devices-owner-3" showListImageTitles="true" %}

Make sure that the devices is assigned to Customer B.

{% include images-gallery.html imageCollection="change-devices-owner-4" showListImageTitles="true" %}

## Access to assets

Since both offices are in Building A, your customers should have shared access to Building A, but should not be able to see each other&#39;s offices.
Therefore, we will we need to change the owners for "Office A" and "Office B", and share the asset "Building A" with your customers.

### Changing owner of assets

{% include images-gallery.html imageCollection="change-assets-owner-1" showListImageTitles="true" %}

Make sure that the office assets are assigned to the customers.

{% include images-gallery.html imageCollection="change-assets-owner-2" showListImageTitles="true" %}

{% include images-gallery.html imageCollection="change-assets-owner-3" showListImageTitles="true" %}

### Sharing assets

Now we will add Building A to a group and share access to it for both customers.

{% include images-gallery.html imageCollection="share-assets-1" showListImageTitles="true" %}

All accesses are granted. Time to move on to adding customer users.

## Adding a customer user

Finally, let&#39;s create one customer [user](/docs/{{docsPrefix}}user-guide/ui/users){: .copy-code} for each customer. They will have access to our dashboard and the data to which we have granted them access.

First, we add user Emma Johnson to Customer A.

{% include images-gallery.html imageCollection="add-customer-user-1" showListImageTitles="true" %}

We have finished adding the user of Customer A. Similarly, add the customer user Jack Smith to Customer B.

{% include images-gallery.html imageCollection="add-customer-user-2" %}

## Reviewing the dashboard from the perspective of customer users

Now we move on to activating the customer users and check how our dashboard looks from the perspective of each user. 

Let&#39;s start with Client A&#39;s user - Emma Johnson.

{% include images-gallery.html imageCollection="activation-customer-user-1" showListImageTitles="true" %}

<br>
The dashboard will open, displaying only the building where your office is located — Building A. Navigate through the dashboard to ensure that your user has access only to the data you have granted them access to.

{% include images-gallery.html imageCollection="reviewing-customer-user-dashboard-1" %}

Similarly, activate the user of Customer B. He should have access to Office B in Building A and the data from the IAQ Sensor located inside the Office B.

{% include images-gallery.html imageCollection="reviewing-customer-user-dashboard-2" %}