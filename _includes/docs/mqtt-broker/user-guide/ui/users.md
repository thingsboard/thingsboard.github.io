{% if docsPrefix == null %}
TBMQ provides a single user role: **Administrator**. Administrators have full permissions to create, update, and delete user accounts.
{% endif %}

{% if docsPrefix == "pe/" %}
TBMQ PE includes two predefined user roles: **Administrator** and **Viewer**. For a detailed explanation of role-based access control, see [RBAC](/docs/pe/mqtt-broker/security/rbac/).
{% endif %}

User management can be performed through TBMQ's Web UI or [REST API](/docs/{{docsPrefix}}mqtt-broker/user-management/).

* TOC
{:toc}

## Add user

To add a new User, please follow these steps:

1. On the left-hand menu, click 'Users' and then the _plus icon_ to create a new user.
2. Provide the user's email address, which must be unique within the system. The fields for first name, last name, and description are optional. Click _Add_ to create the user.

{% include images-gallery.html imageCollection="add-user-broker" %}

Note that all new users are initially created with the default password `sysadmin`. Upon logging in, users will be prompted to change the default password.

## Edit user

To edit the details of an existing administrator, please follow these steps:

1. Locate the desired user in the _Users_ table and click on the corresponding row.
2. Click the _Toggle edit mode_ button to modify the user's first name, last name, or description.
3. Click the _Apply changes_ button to save any modifications.

{% include images-gallery.html imageCollection="edit-user-broker" %}

## Delete user

Logged-in user can delete other users, but not itself. To delete the user, follow these steps:

1. Find the user in the _Users_ table and click on the corresponding row.
2. Click the _Delete user_ button and confirm the action by selecting _Yes_.

{% include images-gallery.html imageCollection="delete-user-broker" %}

## Login as another user

TBMQ allows Admin users to securely log in as other users automatically, without requiring their credentials or manual authentication.

1. Find the user in the _Users_ table (you can only log in as other users).
2. Click the _Login_ button in the corresponding row.

{% include images-gallery.html imageCollection="login-as-user" %}

{% if docsPrefix == "pe/" %}
## User created via OAuth 2.0

{% include templates/mqtt-broker/security/user-password.md %}

{% endif %}
