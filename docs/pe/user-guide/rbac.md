---
layout: docwithnav-pe
title: Advanced Role-Based Access Control (RBAC) for IoT devices and applications
description:
redirect_from: "/docs/user-guide/rbac/"

generic-roles-example-1:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-1-pe.png
        title: 'Create a <b>Generic</b> role with <b>Resource: All</b> and <b>Operation: All</b>.'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-2-pe.png
        title: 'The Generic Role is created.'

generic-roles-example-2:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-3-pe.png
        title: 'Go to the "<b>Users</b>" page and navigate to the "<b>Groups</b>" tab. Then click on the "<b>Entity group details</b>" icon opposite the "<b>Device Admins</b>" user group of Tenant A.'
    3:
        image: /images/user-guide/security/rbac/example-generic-roles-4-pe.png
        title: 'Navigate to the "<b>Roles</b>" tab in the entity group details and click on the "<b>plus</b>" icon.'
    4:
        image: /images/user-guide/security/rbac/example-generic-roles-5-pe.png
        title: 'Choose <b>Role type</b>: <b>Generic</b>, select the role you created, and click "<b>Add</b>".'
    5:
        image: /images/user-guide/security/rbac/example-generic-roles-6-pe.png
        title: 'Bob (a member of this tenant-level group) can perform any operation on any entity that belongs to <b>Tenant A</b>, including entities under <b>Customer A</b>, <b>Customer B</b>, and their sub-customers.'

generic-roles-example-3:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-7-pe.png
        title: 'Go to the "<b>Customers</b>" page and click on the "<b>Manage customer users</b>" icon opposite the Customer B;'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-8-pe.png
        title: 'Navigate to the "<b>Groups</b>" tab. Then click on the "<b>Entity group details</b>" icon opposite the "<b>Device Admins</b>" user group;'
    2:
        image: /images/user-guide/security/rbac/example-generic-roles-9-pe.png
        title: 'Navigate to the "<b>Roles</b>" tab in the entity group details and click on the "<b>plus</b>" icon;'
    3:
        image: /images/user-guide/security/rbac/example-generic-roles-10-pe.png
        title: 'Choose <b>Role type</b>: <b>Generic</b>, select the same role, and click "<b>Add</b>".'
    4:
        image: /images/user-guide/security/rbac/example-generic-roles-11-pe.png
        title: 'Alice (a member of this <b>Customer B</b> group) can perform any operation on entities that belong <b>only to Customer B</b> and its sub-customers.'

generic-roles-example-4:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-12-pe.png
        title: 'Go to the "<b>Users</b>" page. Click "<b>Login as Tenant Admin</b>" icon next to Bob&#39;s account in the "<b>Device Admins</b>" group of Tenant A.'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-13-pe.png
        title: 'Navigate to the "<b>Entities</b>" section -> "<b>Devices</b>" page. You should see two devices available to Bob: <b>Device A1</b> and <b>Device B1</b>.'

generic-roles-example-5:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-14-pe.png
        title: 'Go to the "<b>Сustomers</b>" page of Tenant A. Then go to the "<b>Manage customer users</b>" page of Customer B.'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-15-pe.png
        title: 'Click "<b>Login as Customer User</b>" icon next to <b>Alice</b> account.'
    2:
        image: /images/user-guide/security/rbac/example-generic-roles-16-pe.png
        title: 'Navigate to the "<b>Entities</b>" section -> "<b>Devices</b>" page. User Alice has access to only one device "<b>Device B1</b>".'

group-roles-example-1:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-1-pe.png
        title: 'You have two user groups: "<b>Building A Admins</b>" and "<b>Building B Admins</b>".'

group-roles-example-2:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-2-pe.png
        title: 'And you have two devices group: "<b>Building A</b>" with <b>Device A1</b> inside and "<b>Building B</b>" with <b>Device B1</b> inside.'

group-roles-example-3:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-3-pe.png
        title: 'Create a <b>Group role</b> with <b>Read/Write</b> operations.'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-4-pe.png
        title: 'The Group role is created.'

group-roles-example-4:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-5-pe.png
        title: 'Go to the "<b>Devices</b>" page and navigate to the "<b>Groups</b>" tab. Then click on the "<b>Entity group details</b>" icon opposite the devices group to which you want to add the group role.'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-6-pe.png
        title: 'Navigate to the "<b>Permissions</b>" tab in the entity group details and click on the "<b>plus</b>" icon.'
    2:
        image: /images/user-guide/security/rbac/example-group-roles-7-pe.png
        title: 'Specify the created role, user group owner, and select the user group to which you are granting access to the device group "<b>Building A</b>". Click "<b>Add</b>".'
    3:
        image: /images/user-guide/security/rbac/example-group-roles-8-pe.png
        title: 'The permission is assigned.'

group-roles-example-5:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-9-pe.png
        title: 'Click on the "<b>Entity group details</b>" icon opposite the "<b>Building B</b>" devices group to which you want to add the role.'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-10-pe.png
        title: 'Navigate to the "<b>Permissions</b>" tab in the entity group details and click on the "plus" icon. Specify the created role, user group owner, and select the user group to which you are granting access to the device group "<b>Building B</b>". Click "Add".'
    2:
        image: /images/user-guide/security/rbac/example-group-roles-11-pe.png
        title: 'The permission is assigned.'

group-roles-example-6:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-12-pe.png
        title: 'Click "<b>Login as Tenant Admin</b>" icon opposite the user <b>Alice</b> account.'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-13-pe.png
        title: 'Navigate to the "<b>Entities</b>" section -> "<b>Devices</b>" page. You will only see the device group "<b>Building A</b>" with <b>Device A1</b> inside.'

group-roles-example-7:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-14-pe.png
        title: 'Login as a user Bob. Click "<b>Login as Tenant Admin</b>" icon opposite the user <b>Bob</b> account.'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-15-pe.png
        title: 'Navigate to the "<b>Entities</b>" section -> "<b>Devices</b>" page. You will only see the device group "<b>Building B</b>" with <b>Device B1</b> inside.'

supervisors-add-dashboard-group:
    0:
        image: /images/user-guide/security/rbac/supervisors-add-dashboard-group-1-pe.png
        title: 'Navigate to the "<b>Groups</b>" tab in the "<b>Dashboards</b>" page and click "<b>plus</b>" icon to create new dashboard group. Input the name of your dashboard group. In our case it&#39;s "<b>Supervisor Dashboards</b>". Click on the "<b>Add</b>" button.'
    1:
        image: /images/user-guide/security/rbac/supervisors-add-dashboard-group-2-pe.png
        title: 'Dashboard group "<b>Supervisor Dashboards</b>" has been created.'

supervisors-create-generic-role:
    0:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-1-pe.png
        title: 'Create new generic role. Fill in all required fields and click "<b>Add</b>".'
    1:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-2-pe.png
        title: 'New generic role has been created.'

supervisors-create-group-role:
    0:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-3-pe.png
        title: 'Create new group role. Fill in all required fields and click "<b>Add</b>".'
    1:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-4-pe.png
        title: 'New group role has been created.'

supervisors-assign-roles-to-supervisors-group:
    0:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-1-pe.png
        title: 'Navigate to the "Users" page -> "Groups" tab and click on the plus sign (Add entity group) at the top right of the screen. Input the name - "Supervisors", then click on the Add" button.'
    1:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-2-pe.png
        title: 'The "Supervisors" user group is created. Click on it.'
    2:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-3-pe.png
        title: 'Click on the "pencil" icon to open entity group details. Navigate to the "Roles" tab and click on the "plus" icon at the right top of the opened menu.'
    3:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-4-pe.png
        title: 'Select role type - "Generic" and select previously created role - "All Entities Read-only". Then, click "Add".'
    4:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-5-pe.png
        title: 'Again press the "+" sign. This time select role type - "Group" and select role - "Entity Group Administrator". For a group owner select "Tenant", for a entity type select "Dashboard", and select entity group - "Supervisor Dashboard". Click "Add".'
    5:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-6-pe.png
        title: 'We have assigned these roles to the Supervisors group.'

supervisors-add-new-user:
    0:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-1-pe.png
        title: 'Navigate to the "Customers" page and click on the "+" sign (Add customer) at the top right of the screen. Input the title "Building A" and click "Add".'
    1:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-3-pe.png
        title: 'Click on the "Manage customer users" icon opposite the "Building A" customer.'
    2:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-4-pe.png
        title: 'Navigate to the "Groups" tab and click on the "Customer Administrators" user group.'
    3:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-5-pe.png
        title: 'Click on the "+" sign at the top right of the screen. Input email address, for instance, we can use janesmith@thingsboard.io, and click "Add".'
    4:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-6-pe.png
        title: 'In the opened window you can see the user activation link, click "OK".'
    5:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-7-pe.png
        title: 'Customer user Jane has been created.'

supervisors-end-users:
    0:
        image: /images/user-guide/security/rbac/supervisors-end-users-1-pe.png
        title: 'Login as customer user Jane Smith.'
    1:
        image: /images/user-guide/security/rbac/supervisors-end-users-3-pe.png
        title: 'Go to the "Dashboards" page, click on the "plus" icon in the top right corner. Select "Create new dashboard". Input dashboard name (for example, "End User Dashboard"). Click "Add" to create the dashboard.'
    2:
        image: /images/user-guide/security/rbac/supervisors-end-users-4-pe.png
        title: 'Open created dashboard and enter edit mode.'
    3:
        image: /images/user-guide/security/rbac/supervisors-end-users-5-pe.png
        title: 'Click "Add new widget" button.'
    4:
        image: /images/user-guide/security/rbac/supervisors-end-users-6-pe.png
        title: 'Select "Cards" widgets bundle.'
    5:
        image: /images/user-guide/security/rbac/supervisors-end-users-7-pe.png
        title: 'Select "Simple card" widget.'
    6:
        image: /images/user-guide/security/rbac/supervisors-end-users-9-pe.png
        title: 'In the "Datasources" section select the type as "Function" and the key as "Random". Click "Add".'
    7:
        image: /images/user-guide/security/rbac/supervisors-end-users-10-pe.png
        title: 'The widget has been created. Save the dashboard.'

supervisors-create-read-only-user:
    0:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-1-pe.png
        title: 'Select "Customer Users" on the "Groups" tab on the "Users" page of the user Jane.'
    1:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-2-pe.png
        title: 'Click "+" at the top right of the screen to add new user. Input email address, for example, we will use bob@thingsboard.io, then click "Add".'
    2:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-3-pe.png
        title: 'In the opened window you can see the user activation link, click "OK".'
    3:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-5-pe.png
        title: 'Now, click on the created user. At the right top of the screen you shall see the "pen" icon. Click on it to enter edit mode.'
    4:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-6-pe.png
        title: 'Check the box "Always fullscreen" and choose "End User Dashboard" in the "Default dashboard" line. Then save changes.'
    5:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-7-pe.png
        title: 'Now login as customer user Bob.'
    6:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-8-pe.png
        title: 'Dashboard will open full screen. User Bob will not have access to the administration panel to the left. Bob is not allowed to perform any server-side API calls, only browsing the data.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/rbac.md %}