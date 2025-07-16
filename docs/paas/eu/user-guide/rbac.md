---
layout: docwithnav-paas-eu
title: Advanced Role-Based Access Control (RBAC) for IoT devices and applications
description:

generic-roles-example-1:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-1-pe.png
        title: 'Create a Generic Role (Resource: All, Operation: All);'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-2-pe.png
        title: 'The Generic Role is created;'
    2:
        image: /images/user-guide/security/rbac/example-generic-roles-3-pe.png
        title: 'Go to the "Users" page and navigate to the "Groups" tab. Then click on the "Entity group details" icon opposite the "Device Admins" user group of Tenant A;'
    3:
        image: /images/user-guide/security/rbac/example-generic-roles-4-pe.png
        title: 'Navigate to the "Roles" tab in the entity group details and click on the "plus" icon;'
    4:
        image: /images/user-guide/security/rbac/example-generic-roles-5-pe.png
        title: 'Choose a "Generic" role type and specify the previously created generic role. Click "Add";'
    5:
        image: /images/user-guide/security/rbac/example-generic-roles-6-pe.png
        title: 'The role is added to the "Device Admins" user group of Tenant A.'

generic-roles-example-2:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-7-pe.png
        title: 'Go to the "Customers" page and click on the "Manage customer users" icon opposite the Customer B;'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-8-pe.png
        title: 'Navigate to the "Groups" tab. Then click on the "Entity group details" icon opposite the "Device Admins" user group;'
    2:
        image: /images/user-guide/security/rbac/example-generic-roles-9-pe.png
        title: 'Navigate to the "Roles" tab in the entity group details and click on the "plus" icon;'
    3:
        image: /images/user-guide/security/rbac/example-generic-roles-10-pe.png
        title: 'Choose a "Generic" role type and specify the previously created generic role. Click "Add";'
    4:
        image: /images/user-guide/security/rbac/example-generic-roles-11-pe.png
        title: 'The role is added to the "Device Admins" user group of Customer B.'

generic-roles-example-3:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-12-pe.png
        title: 'Go to the "Users" page. Click "Login as Tenant Admin" icon next to Bob`s user account in the "Device Admins" group of Tenant A;'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-13-pe.png
        title: 'Navigate to the "Entities" section -> "Devices" page. User Bob has access to two devices: "Device A1" and "Device B1".'

generic-roles-example-4:
    0:
        image: /images/user-guide/security/rbac/example-generic-roles-14-pe.png
        title: 'Go to the "Сustomers" page of Tenant A. Then go to the "Manage customer users" page of Customer B;'
    1:
        image: /images/user-guide/security/rbac/example-generic-roles-15-pe.png
        title: 'Click "Login as Customer User" icon opposite the user Alice account;'
    2:
        image: /images/user-guide/security/rbac/example-generic-roles-16-pe.png
        title: 'Navigate to the "Entities" section -> "Devices" page. User Alice has access to only one device "Device B1".'

group-roles-example-1:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-1-pe.png
        title: 'You have two user groups: "Building A Admins" and "Building B Admins";'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-2-pe.png
        title: 'And you have two devices group: "Building A" with Device A1 inside and "Building B" with Device B1 inside.'

group-roles-example-2:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-3-pe.png
        title: 'Create a Group Role with reading/writing operations;'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-4-pe.png
        title: 'The Group Role is created.'

group-roles-example-3:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-5-pe.png
        title: 'Go to the "Devices" page and navigate to the "Groups" tab. Then click on the "Entity group details" icon opposite the devices group to which you want to add the group role;'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-6-pe.png
        title: 'Navigate to the "Permissions" tab in the entity group details and click on the "plus" icon;'
    2:
        image: /images/user-guide/security/rbac/example-group-roles-7-pe.png
        title: 'Specify the created role, user group owner, and select the user group to which you are granting access to the device group "Building A". Click "Add";'
    3:
        image: /images/user-guide/security/rbac/example-group-roles-8-pe.png
        title: 'The permission is assigned.'

group-roles-example-4:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-9-pe.png
        title: 'Click on the "Entity group details" icon opposite the "Building B" devices group to which you want to add the role;'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-10-pe.png
        title: 'Navigate to the "Permissions" tab in the entity group details and click on the "plus" icon. Specify the created role, user group owner, and select the user group to which you are granting access to the device group "Building A". Click "Add";'
    2:
        image: /images/user-guide/security/rbac/example-group-roles-11-pe.png
        title: 'The permission is assigned.'

group-roles-example-5:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-12-pe.png
        title: 'Click "Login as Tenant Admin" icon opposite the user Alice account;'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-13-pe.png
        title: 'Navigate to the "Entities" section -> "Devices" page. You will only see the device group "Building A" with Device A1 inside.'

group-roles-example-6:
    0:
        image: /images/user-guide/security/rbac/example-group-roles-14-pe.png
        title: 'Login as a user Bob. Click "Login as Tenant Admin" icon opposite the user Bob account;'
    1:
        image: /images/user-guide/security/rbac/example-group-roles-15-pe.png
        title: 'Navigate to the "Entities" section -> "Devices" page. You will only see the device group "Building B" with Device B1 inside.'

supervisors-add-dashboard-group:
    0:
        image: /images/user-guide/security/rbac/supervisors-add-dashboard-group-1-pe.png
        title: 'Navigate to the "Groups" tab in the "Dashboards" page and click "plus" icon to create new dashboard group. Input the name of your dashboard group. In our case it’s "Supervisor Dashboards". Click on the "Add" button;'
    1:
        image: /images/user-guide/security/rbac/supervisors-add-dashboard-group-2-pe.png
        title: 'Dashboard group "Supervisor Dashboards" has been created.'

supervisors-create-generic-role:
    0:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-1-pe.png
        title: 'Create new generic role. Fill in all required fields and click "Add";'
    1:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-2-pe.png
        title: 'New generic role has been created.'

supervisors-create-group-role:
    0:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-3-pe.png
        title: 'Create new group role. Fill in all required fields and click "Add";'
    1:
        image: /images/user-guide/security/rbac/supervisors-create-two-roles-4-pe.png
        title: 'New group role has been created.'

supervisors-assign-roles-to-supervisors-group:
    0:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-1-pe.png
        title: 'Navigate to the "Users" page -> "Groups" tab and click on the plus sign (Add entity group) at the top right of the screen. Input the name - "Supervisors", then click on the Add" button;'
    1:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-2-pe.png
        title: 'The "Supervisors" user group is created. Click on it;'
    2:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-3-pe.png
        title: 'Click on the "pencil" icon to open entity group details. Navigate to the "Roles" tab and click on the "plus" icon at the right top of the opened menu;'
    3:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-4-pe.png
        title: 'Select role type - "Generic" and select previously created role - "All Entities Read-only". Then, click "Add";'
    4:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-5-pe.png
        title: 'Again press the "+" sign. This time select role type - "Group" and select role - "Entity Group Administrator". For a group owner select "Tenant", for a entity type select "Dashboard", and select entity group - "Supervisor Dashboard". Click "Add";'
    5:
        image: /images/user-guide/security/rbac/supervisors-assign-roles-to-supervisors-group-6-pe.png
        title: 'We have assigned these roles to the Supervisors group.'

supervisors-add-new-user:
    0:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-1-pe.png
        title: 'Navigate to the "Customers" page and click on the "+" sign (Add customer) at the top right of the screen. Input the title "Building A" and click "Add";'
    1:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-3-pe.png
        title: 'Click on the "Manage customer users" icon opposite the "Building A" customer;'
    2:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-4-pe.png
        title: 'Navigate to the "Groups" tab and click on the "Customer Administrators" user group;'
    3:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-5-pe.png
        title: 'Click on the "+" sign at the top right of the screen. Input email address, for instance, we can use janesmith@thingsboard.io, and click "Add";'
    4:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-6-pe.png
        title: 'In the opened window you can see the user activation link, click "OK";'
    5:
        image: /images/user-guide/security/rbac/supervisors-add-new-user-7-pe.png
        title: 'Customer user Jane has been created.'

supervisors-end-users:
    0:
        image: /images/user-guide/security/rbac/supervisors-end-users-1-pe.png
        title: 'Login as customer user Jane Smith;'
    1:
        image: /images/user-guide/security/rbac/supervisors-end-users-3-pe.png
        title: 'Go to the "Dashboards" page, click on the "plus" icon in the top right corner. Select "Create new dashboard". Input dashboard name (for example, "End User Dashboard"). Click "Add" to create the dashboard.'
    2:
        image: /images/user-guide/security/rbac/supervisors-end-users-4-pe.png
        title: 'Open created dashboard and enter edit mode;'
    3:
        image: /images/user-guide/security/rbac/supervisors-end-users-5-pe.png
        title: 'Click "Add new widget" button;'
    4:
        image: /images/user-guide/security/rbac/supervisors-end-users-6-pe.png
        title: 'Select "Cards" widgets bundle;'
    5:
        image: /images/user-guide/security/rbac/supervisors-end-users-7-pe.png
        title: 'Select "Simple card" widget;'
    6:
        image: /images/user-guide/security/rbac/supervisors-end-users-9-pe.png
        title: 'In the "Datasources" section select the type as "Function" and the key as "Random". Click "Add".'
    7:
        image: /images/user-guide/security/rbac/supervisors-end-users-10-pe.png
        title: 'The widget has been created. Save the dashboard.'

supervisors-create-read-only-user:
    0:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-1-pe.png
        title: 'Select "Customer Users" on the "Groups" tab on the "Users" page of the user Jane;'
    1:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-2-pe.png
        title: 'Click "+" at the top right of the screen to add new user. Input email address, for example, we will use bob@thingsboard.io, then click "Add";'
    2:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-3-pe.png
        title: 'In the opened window you can see the user activation link, click "OK";'
    3:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-5-pe.png
        title: 'Now, click on the created user. At the right top of the screen you shall see the "pen" icon. Click on it to enter edit mode;'
    4:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-6-pe.png
        title: 'Check the box "Always fullscreen" and choose "End User Dashboard" in the "Default dashboard" line. Then save changes;'
    5:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-7-pe.png
        title: 'Now login as customer user Bob;'
    6:
        image: /images/user-guide/security/rbac/supervisors-create-read-only-user-8-pe.png
        title: 'Dashboard will open full screen. User Bob will not have access to the administration panel to the left. Bob is not allowed to perform any server-side API calls, only browsing the data.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/user-guide/rbac.md %}