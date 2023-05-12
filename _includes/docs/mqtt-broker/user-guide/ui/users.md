The ThingsBoard MQTT Broker presently offers a single tier of user roles, namely 'Administrator'. Administrators are authorized to create, modify, and remove user accounts.

User management can be performed through the ThingsBoard MQTT Broker's Web UI or [REST API](/docs/mqtt-broker/user-management/), which enables users to modify user details.

* TOC
{:toc}

## Add User

To add a new User, please follow these steps:

1. On the left-hand menu, click 'Users' and then the _plus icon_ to create a new user.

[image]

2. Provide the user's email address, which must be unique within the system. The fields for first name, last name, and description are optional. Click _Add_ to create the user.

[image]

Note that all new users are initially created with the default password `sysadmin`. Upon first logging in, users will be required to change default password.

## Edit User

To edit the details of an existing administrator, please follow these steps:

1. Locate the desired user in the _Users_ table and click on the corresponding row.
   [image]
2. Click the _Toggle edit mode_ button to modify the user's first name, last name, or description.
   [image]
3. Click the _Apply changes_ button to save any modifications.
   [image]

Please note that users may change their own email addresses only via the _Profile_ page. Refer to the [docs]() for further information.

## Delete User

To delete an administrator, follow these steps:

[image]

To delete user click follow these steps:
1. Find the user in the _Admins_ table and click on the corresponding row.
   [image]
2. Click the _Delete user_ button and confirm the action by selecting _Yes_.
   [image]

Please note, that logged-in user can delete other users, but not itself.
