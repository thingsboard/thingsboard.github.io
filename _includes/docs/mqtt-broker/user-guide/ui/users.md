TBMQ presently offers a single tier of user roles, namely 'Administrator'. Administrators are authorized to create, modify, and remove user accounts.

User management can be performed through TBMQ's Web UI or [REST API](/docs/mqtt-broker/user-management/), which enables users to modify user details.

* TOC
{:toc}

### Add User

To add a new User, please follow these steps:

1. On the left-hand menu, click 'Users' and then the _plus icon_ to create a new user.
2. Provide the user's email address, which must be unique within the system. The fields for first name, last name, and description are optional. Click _Add_ to create the user.

{% include images-gallery.html imageCollection="add-user-broker" %}

Note that all new users are initially created with the default password `sysadmin`. Upon first logging in, users will be required to change default password.

### Edit User

To edit the details of an existing administrator, please follow these steps:

1. Locate the desired user in the _Users_ table and click on the corresponding row.
2. Click the _Toggle edit mode_ button to modify the user's first name, last name, or description.
3. Click the _Apply changes_ button to save any modifications.

{% include images-gallery.html imageCollection="edit-user-broker" %}

Please note that users may change their own email addresses only via the _Profile_ page. 

### Delete User

Logged-in user can delete other users, but not itself. To delete user follow these steps:

1. Find the user in the _Admins_ table and click on the corresponding row.
2. Click the _Delete user_ button and confirm the action by selecting _Yes_.

{% include images-gallery.html imageCollection="delete-user-broker" %}
