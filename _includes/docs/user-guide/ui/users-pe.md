* TOC
{:toc}

In ThingsBoard, a **User** is an entity with credentials to access the platform.   
Users in [ThingsBoard Professional Edition](https://thingsboard.io/products/thingsboard-pe/){:target="_blank"} benefit from an extended [access control model](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} that enables the creation of flexible, multi-level organizational structures with fine-grained control over entities, resources, dashboards, and more.

**Key characteristics of users:**
- **Ownership**: Each user belongs to a specific [Tenant](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} or [Customer](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}.
- **Access control**: A [Role-Based Access Control (RBAC)](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} model defines user permissions, including rights to read, write, and manage entities, resources, dashboards, and more.
- **User groups**: A user can belong to one or more user [groups](/docs/{{docsPrefix}}user-guide/groups/){:target="_blank"}, which simplifies bulk permission management.

This model allows ThingsBoard to scale efficiently for large organizations and IoT projects with multiple users and complex access requirements.

## Creating new user

To create a new user in ThingsBoard:
- Log in as a **Tenant Administrator** or **Customer Administrator**.
- Navigate to the "**Users**" section from the left-hand menu.
- Click the "**Add user**" button in the top-right corner.
- Fill in the user form:
  - **Email**: the user&#39;s email address (used as the login username).
  - **Optional fields**: enter additional details such as **first name**, **last name**, and **phone number**.
- (Optional) Adjust the **activation method**:
  - **Display activation link** – generates an activation URL that must be manually copied and sent to the user so they can activate their account.
  - **Send activation email** – sends an email invitation to the user with a link to set their password.
    {% if docsPrefix == "pe/" %}> Note: Outgoing email settings must be properly configured using a System Administrator account for activation emails to be delivered successfully.{% endif %}
- (Optional) **Assign ownership** and place the user into a **specific user group** with the appropriate [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}.
- Click "**Add**" to create the user.

User has been created. 

> If you selected the "Display activation link" option, you need to copy the activation link and send it to the user so they can activate their account.

{% include images-gallery.html imageCollection="create-user-pe" %}

## Log in as user

You can temporarily access the platform on behalf of a new user, which is useful for verifying permissions or troubleshooting access issues.   
To log in on behalf of a user:

- Go to the Users list.
- Click the **"login" icon** next to the desired user's name.

> **Note**: In this example, the user has read-only permissions. They can view resources such as dashboards or devices, but cannot add, edit, or delete any objects.

{% include images-gallery.html imageCollection="log-in-as-user" %}

## User activation

Once the user receives an <b>activation link</b> (via email or any other method), they can activate their account by following these steps:
- <b>Click the activation link</b>, or copy and paste it into your browser’s address bar and press <b>Enter</b>.
- You will be prompted to <b>create a password</b>.
  - Enter the desired password <b>twice</b> to confirm.
  - Click "</b>Create Password</b>".

After completing this step, the user will log in to their instance and gain access to resources according to the permissions assigned to them.

{% include images-gallery.html imageCollection="user-activation" %}

## Manage owner and groups

You can change a user's <b>owner</b> or assign them to one or more [user groups](#user-group). To do this:
- Click on the user to open their <b>detailed profile</b>.
- Click the "<b>Manage owner and groups</b>" button.
- Perform the required actions:
  - Select a <b>new owner</b> or the user from the dropdown list.
  - Add the user to one or more <b>existing user groups</b>, or [create a new group](#create-new-user-group) if needed.
- Click "<b>Update</b>" to confirm and apply the changes.

> **Note**: Changes to <b>group membership</b> and <b>ownership</b> take effect immediately and impact the user’s access permissions based on the roles associated with the new configuration.

{% include images-gallery.html imageCollection="user-manage-owner-and-groups" %}

> You can reassign or revoke the ownership change of user if needed.

## Deleting user

A user with sufficient permissions can delete other users from the system.

To delete a user:
- Navigate to the <b>Users</b> page.
- Click the <b>"trash bin" icon</b> (🗑)️ at the end of the row for the user you wish to remove.
- Confirm the deletion in the dialog window.

> **Note**: Deleting a user <b>does not affect entities, dashboards, or data</b> previously created by that user.
The user will be removed from all user groups, including the special "<b>All</b>" group, which every user is a member of by default.

{% include images-gallery.html imageCollection="delete-user" %}

## User group

A **User group** is a mechanism for grouping users who share the same level of access to ThingsBoard resources. It enables centralized management of access to entities, dashboards, widgets, and more.

> A single user can belong to multiple user groups simultaneously.

> Each group defines roles and permissions, which are inherited by all its members.

In ThingsBoard PE, predefined user groups are automatically created for each level (Tenant / Customer):

- For **Tenant level**:
  - **Tenant Administrators** – includes users with full access to all tenant resources.
  - **Tenant Users** – includes users with `read-only` permissions.
- For **Customer level**:
  - **Customer Administrators** – includes users who act as Customer Administrators and have full access to all entities owned by that customer.
  - **Customer Users** – standard customer users with `read-only` permissions.

A Tenant Admin or Customer Admin can create new users directly within these groups, and users will automatically inherit the appropriate access level.

<br><b><font size="3">The "All" group</font></b>

There is also a special built-in user group called "All". This group does not have any [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} assigned by default.

A user created without being added to a specific group (or assigned only to the "All" group) will not have any access rights and will not see any entities or dashboards.

This is useful during the initial creation of new users, who will later be assigned to the appropriate user groups.

### Create new user group

Tenant Administrators and Customer Administrators can create user groups and [configure permissions](#assigning-permissions-to-user-group) for those groups.   
To create a new user group:
- From the **Users** screen, navigate to the "**Groups**" tab.
- Click the "**+**" (**Add entity group**) icon in the upper-right corner.
- Enter the **name** for the new user group.
- Click "**Add**" to create the group.

Once created, you can add users to this group and configure group-level permissions to control access to specific entities, dashboards, or features.

{% include images-gallery.html imageCollection="add-user-group" %}

### Assigning permissions to user group

To configure user permissions for a new group using [roles](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}, follow these steps:
- In the "<b>Groups</b>" tab of the Users section, click the <b>"pencil" (✏️) icon</b> next to the desired user group.
- In the group details view, navigate to the "<b>Roles</b>" tab. 
- Click <b>"+" (Add)</b> to assign a role to the group.
- In the dialog window:
  - Select the <b>role type</b> (Generic or Group).
  - Choose the <b>specific role</b> you have previously created.
  - Click "<b>Add</b>" to apply the role to the group.

Once completed, all users in this group will inherit the <b>permissions defined by the selected role</b>.

{% include images-gallery.html imageCollection="assigning-permissions-to-user-group" %}

### Deleting user group

A user with sufficient permissions can delete a user group.

> Deleting a group does not remove the users associated with it — they will remain in the system.

> Since a user can belong to multiple groups, they may still retain access through other groups, and every user is always a member of the special “All” group by default.

To delete a user group:
- From the <b>Users</b> screen, navigate to the "<b>Groups</b>" tab.
- Click the <b>"trash bin" icon</b> (🗑)️ at the end of the row for the group you want to delete.
- Confirm the deletion in the dialog prompt.

> **Note**: Deleting a group will revoke its associated permissions from all users who were part of that group.

{% include images-gallery.html imageCollection="delete-user-group" %}