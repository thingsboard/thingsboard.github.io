---
layout: docwithnav-pe
assignees:
- ashvayka
title: Customers
description: ThingsBoard Customers management
customers-pe:
    0:
        image: /images/user-guide/ui/customers/PE/customer-pe.png
        title: 'Customer can manage the account at its own level: devices, rule chains, assets, etc.'

customer-addnew-pe:
    0:
        image: /images/user-guide/ui/customers/PE/add-new-customer-pe.png
        title: 'Click the plus sign in the upper right corner of the screen. In the opened dialog box, enter a name of the new customer and click Add;'
    1:
        image: /images/user-guide/ui/customers/PE/add-new-customer-1-pe.png
        title: 'In the same way, you can add as many customers as you want and manage customer account'

edit-customer-pe:
    0:
        image: /images/user-guide/ui/customers/PE/edit-customer-pe.png
        title: ''
    1:
        image: /images/user-guide/ui/customers/PE/edit-customer-1-pe.png
        title: ''

deleting-customer-pe:
    0:
        image: /images/user-guide/ui/customers/PE/deleting-customer-pe.png
        title: 'Click a trash can opposite to the customer name and confirm deleting an account in the dialog box.'
    1:
        image: /images/user-guide/ui/customers/PE/deleting-customer-1-pe.png
        title: 'In the customer details, select Delete customer and confirm deleting an account in the dialog box.'

---

* TOC
{:toc}

## Introduction

[Tenant administrators](/docs/pe/user-guide/ui/tenants/) can create customer groups and customers. In turn, a customer can manage the account at its own level: devices, rule chains, assets, etc.

{% include images-gallery.html imageCollection="customers-pe" %}

##### Add new customer

Customer can add a custom user to his account with limited rights that customer can adjust in user details.
To add a new customer:
1. Click the plus sign in the upper right corner of the screen. In the opened dialog box, enter a name of the new customer, adjust white labeling ability, 
   dashboard configuration and personal information. After entering, click Add;
2. You can add as many customers as you want in the same way. Opposite to the customer names, you can manage customer account fastly.

{% include images-gallery.html imageCollection="customer-addnew-pe" %}

##### Edit customer

Customers have an opportunity to add and edit their own customers, users, assets, devices, entity views, and dashboards. 
All of these you and your customers are able to do in the user details: 
to manage such options as customer groups, [user groups](/docs/pe/user-guide/ui/users/), [asset groups](/docs/pe/user-guide/ui/assets/), 
[device groups](/docs/pe/user-guide/ui/devices/), [entity view groups](/docs/pe/user-guide/entity-views/),
[dashboard groups](/docs/user-guide/dashboards/), and delete a customer.

{% include images-gallery.html imageCollection="edit-customer-pe" %}

##### Deleting customer

You can delete a customer account from ThingsBoard in two ways:
1. Click a trash can opposite to the customer name and confirm deleting an account in the dialog box.
2. In the customer details, select Delete customer and confirm deleting an account in the dialog box.

{% include images-gallery.html imageCollection="deleting-customer-pe" %}

