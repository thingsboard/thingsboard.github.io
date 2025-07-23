* TOC
{:toc}

## Introduction

A **Customer** in ThingsBoard can represent a distinct business entity — either an **individual or an organization** — that **purchases or uses the tenant’s devices and/or assets**. 
A customer can also act as a **department or subdivision** within the tenant&#39;s organization.
Customers can scale from small units to large ecosystems with **many users, sub-customers**, and **a large number of devices and assets**.

[Tenant Administrators](/docs/{{docsPrefix}}user-guide/ui/tenants/) have the ability to create customer groups as well as individual customers.

Customers, once created, can manage their own environment, including:
- Creating and managing customer users
- Adding and editing devices, assets, dashboards and other entities.

## Create new customer

The tenant administrator can add a new customer using the following steps.

{% include images-gallery.html imageCollection="customer-add-new-pe" showListImageTitles="true" %}

In this case, the new customer will be located in the "All" customer's group.
You can specify a separate group during the process of creating a customer.

Let's create another client and a separate customer group for it.

{% include images-gallery.html imageCollection="customer-add-new-2-pe" showListImageTitles="true" %}

Read more information about entity groups [here](/docs/{{docsPrefix}}user-guide/groups/).

## Create customer user

The tenant administrator can add a customer user to his account with limited permissions. Permissions for the new customer user can be configured later with the help of [Roles](/docs/{{docsPrefix}}user-guide/rbac/).

{% include images-gallery.html imageCollection="add-customer-user" showListImageTitles="true" %}

## Edit customer or customer user

The Tenant administrator can edit the title, specify a home dashboard and edit the rest of the fields for the customer.
Let’s see how to do this:

{% include images-gallery.html imageCollection="edit-customer-pe" showListImageTitles="true" %}

Also, you can edit customer user information.

The steps are similar to how we edit the customer:

{% include images-gallery.html imageCollection="edit-customer-user" showListImageTitles="true" %}

## Delete customer or customer user

The tenant administrator can delete a customer along with all its customer users using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-customer-pe" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-customer-2-pe" showListImageTitles="true" %}

You can also delete multiple customers at once.

{% include images-gallery.html imageCollection="delete-customer-3-pe" showListImageTitles="true" %}

Also, you can delete any customer user from the customer. The steps are the same as when deleting a customer.

{% include images-gallery.html imageCollection="delete-customer-user-1" showListImageTitles="true" %}
