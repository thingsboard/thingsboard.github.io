* TOC
{:toc}

## Introduction

A Customer can be a separate business-entity: an individual, or an organization that purchases or uses tenant devices and/or assets. 
Customer can also be a division within the Tenant organization. 
Customer can have multiple users, inner customers, and millions of devices and/or assets.

[Tenant administrators](/docs/{{docsPrefix}}user-guide/ui/tenants/) can create customer groups and customers. 
In turn, customers have an opportunity to add and edit their own customers, users, assets, devices, entity views, and dashboards.
All of these you and your customers are able to do in the user details:
to manage such options as customer groups, [user groups](/docs/{{docsPrefix}}user-guide/ui/users/), [asset groups](/docs/{{docsPrefix}}user-guide/ui/assets/),
[device groups](/docs/{{docsPrefix}}user-guide/ui/devices/), [entity view groups](/docs/{{docsPrefix}}user-guide/entity-views/),
[dashboard groups](/docs/{{docsPrefix}}user-guide/dashboards/), [edges](/docs/pe/edge/), and [delete a customer](#delete-customer).


### Create new customer

The Tenant administrator can add a customer to his account with limited permissions. Permissions for the new customer can be configured later with the help of [Roles](/docs/{{docsPrefix}}user-guide/rbac/).

To add a new customer, you should:

{% include images-gallery.html imageCollection="customer-add-new-pe" showListImageTitles="true" %}

In this case, the new customer will be located in the "All" customer's group.
You can specify a separate group during the process of creating a customer.

Let's create another client and a separate customer group for it.

{% include images-gallery.html imageCollection="customer-add-new-2-pe" showListImageTitles="true" %}

Read more information about entity groups [here](/docs/{{docsPrefix}}user-guide/groups/).

### Edit customer

The Tenant administrator can edit the title, specify a home dashboard and edit the rest of the fields for this customer.
Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-customer-pe" showListImageTitles="true" %}

### Delete customer

The tenant administrator can delete a customer using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-customer-pe" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-customer-2-pe" showListImageTitles="true" %}

You can also delete multiple customers at once.

{% include images-gallery.html imageCollection="delete-customer-3-pe" showListImageTitles="true" %}