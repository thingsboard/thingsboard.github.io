---
layout: docwithnav-paas
assignees:
- ashvayka
title: Customers
description: ThingsBoard Customers management

customer-add-new-pe:
    0:
        image: /images/user-guide/ui/customers/pe/create-customer-1-pe.png
        title: 'Navigate to the "Customers" page. By default, you navigate to the customer group "All". Then click the plus sign in the upper right corner of the screen;'
    1:
        image: /images/user-guide/ui/customers/pe/create-customer-2-pe.png
        title: 'In the opened dialog box, enter the name of the new customer. Additionally, you can input personal details for the customer and assign a home dashboard. Then click "Add";'
    2:
        image: /images/user-guide/ui/customers/pe/create-customer-3-pe.png
        title: 'New customer is created. You can add as many customers as you want in the same way.'

customer-add-new-2-pe:
    0:
        image: /images/user-guide/ui/customers/pe/create-customer-4-pe.png
        title: 'Navigate to the "Customers" page. Click the "+" sign to add a new customer. Input the customer title. Additionally, you can input personal details for the customer and assign a home dashboard. Then, click on "Next: Owner and groups" button;'
    1:
        image: /images/user-guide/ui/customers/pe/create-customer-5-pe.png
        title: 'If desired, you can assign a different owner for this customer. We will leave this option unchanged. Enter a name for the new group and click "Create a new one!";'
    2:
        image: /images/user-guide/ui/customers/pe/create-customer-6-pe.png
        title: 'In the opened dialog box, click "Add" to create a new customers group;'
    3:
        image: /images/user-guide/ui/customers/pe/create-customer-7-pe.png
        title: 'Now, click "Add" to create a new customer;'
    4:
        image: /images/user-guide/ui/customers/pe/create-customer-8-pe.png
        title: 'The customer has been created and is located in the "My Customers" group. You can navigate to this group by clicking on its name.'

add-customer-user:
    0:
        image: /images/user-guide/ui/customers/pe/create-customer-user-1-pe.png
        title: 'Navigate to the "Customers" page. Then click on the "Manage customer users" icon located in the customer`s row to whom you want to add a customer user;'
    1:
        image: /images/user-guide/ui/customers/pe/create-customer-user-2-pe.png
        title: 'Click the plus sign in the upper right corner of the screen. In the opened dialog box, enter the email address, first and last name of the user. Then choose activation method: display activation link or send activation link via email. Then click "Add";'
    2:
        image: /images/user-guide/ui/customers/pe/create-customer-user-3-pe.png
        title: 'If you selected the option "Show activation link", copy the link address and send it to the user. Click "OK";'
    3:
        image: /images/user-guide/ui/customers/pe/create-customer-user-4-pe.png
        title: 'New customer user is created.'

edit-customer-pe:
    0:
        image: /images/user-guide/ui/customers/pe/edit-customer-1-pe.png
        title: 'Click on the customer to open their details. Click the "pencil" icon to enter edit mode;'
    1:
        image: /images/user-guide/ui/customers/pe/edit-customer-2-pe.png
        title: 'Edit the fields. For example, you can specify a home dashboard for this customer and all its customer users. After that, save all changes;'
    2:
        image: /images/user-guide/ui/customers/pe/edit-customer-3-pe.png
        title: 'You have updated customer information.'

edit-customer-user:
    0:
        image: /images/user-guide/ui/customers/pe/edit-customer-user-1-pe.png
        title: 'Click on the customer user to open their details. Click the "pencil" icon to enter edit mode;'
    1:
        image: /images/user-guide/ui/customers/pe/edit-customer-user-2-pe.png
        title: 'Edit the fields. For example, you can specify a customer`s phone number. After editing, save all changes;'
    2:
        image: /images/user-guide/ui/customers/pe/edit-customer-user-3-pe.png
        title: 'You have updated customer user information.'

delete-customer-pe:
    0:
        image: /images/user-guide/ui/customers/pe/delete-customer-1-pe.png
        title: 'Click a trash icon can opposite the customer`s name you want to delete;'
    1:
        image: /images/user-guide/ui/customers/pe/delete-customer-2-pe.png
        title: 'Confirm deleting the customer in the dialog box.'

delete-customer-2-pe:
    0:
        image: /images/user-guide/ui/customers/pe/delete-customer-3-pe.png
        title: 'Click on the customer that you want to delete. In the customer details, click "Delete customer" button;'
    1:
        image: /images/user-guide/ui/customers/pe/delete-customer-4-pe.png
        title: 'Confirm deleting the customer in the dialog box.'

delete-customer-3-pe:
    0:
        image: /images/user-guide/ui/customers/pe/delete-customer-5-pe.png
        title: 'Mark one or multiple customers you want to delete. Click on the trash bin icon in the top right corner;'
    1:
        image: /images/user-guide/ui/customers/pe/delete-customer-6-pe.png
        title: 'Confirm deleting customers in the dialog box.'

delete-customer-user-1:
    0:
        image: /images/user-guide/ui/customers/pe/delete-customer-user-1-pe.png
        title: 'Navigate to the "Customers" page. Then click on the "Manage customer users" icon located on the customer`s row whose customer user you want to delete;'
    1:
        image: /images/user-guide/ui/customers/pe/delete-customer-user-2-pe.png
        title: 'Click a trash icon can opposite the name of the customer user you want to delete. Confirm deleting the customer user in the dialog box.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/customers-pe.md %}