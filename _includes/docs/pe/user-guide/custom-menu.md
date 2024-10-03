{% assign feature = "Custom Menu" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

Customizing menu in ThingsBoard allows you to tailor the navigation menu to your needs, providing quick access to the most frequently used functions and dashboards.
You can add new and show/hide existing menu items.

Menu customization options:

- **Adding new menu items**: You can add new items to the menu, including links to specific dashboards, external web pages, or other features within ThingsBoard;

- **Changing icons and names**: You can customize the icons and names for each menu item to better reflect their functionality and value to the user;

- **Reorganizing the menu**: You can drag and rearrange the order of items in the menu, optimizing the interface according to your workflows;

- **Configuring access**: The menu can be configured so that certain items are available only to specific customers or users, providing an additional level of security and personalization.

## Operations with custom menu

### Add new custom menu

For effective use of the custom menu in ThingsBoard, it is important to define the scope of its application, depending on who the end user is: Tenant or Customer.

Tenant scope options:
- Not assigned - indicates that the custom menu is not assigned to any tenant user. This option is convenient to use during the menu setup stage;
- All tenant users - selecting this option means that the menu will be accessible to all users at the tenant level;
- Users list - this option allows you to create a list of users who will have access to this menu.

Customer scope options:
- Not assigned - indicates that the custom menu is not assigned to any customer or customer user. This option is convenient to use during the menu setup stage;
- All customer users - selecting this option applies the custom menu to all of your customers and their users;
- Users list - this option allows you to apply the custom menu to a specific customer user or a list of customer users;
- Customers list - this option allows you to apply the custom menu to a specific customer or a list of customers and their users.

To add custom menu, follow these steps:

- Go to the "Custom menu" tab of the "White labeling" page, and click the "plus" icon;
- In new window, enter custom menu name;
- Select scope: Tenant or Customer;
- Choose assignee type;
- After all settings, click "Add";

Custom menu added.

{% assign addCustomMenu = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-1-pe.png,
        title: Go to the "Custom menu" tab of the "White labeling" page, and click the "plus" icon;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-2-pe.png,
        title: In new window, enter custom menu name, select scope, and choose assignee type;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-3-pe.png,
        title: After all settings, click "Add";
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addCustomMenu %}

### Manage custom menu config

Custom menu actions:

В верхней части окна ви можете cкрить/отобразить скрытые элементы, hide all menu items and reset to default menu

#### Operation with item

#### Hide all menu items

{% assign hideAllMenuItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-all-menu-items-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-all-menu-items-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=hideAllMenuItems %}

##### Hide existing menu items

To hide menu items in the ThingsBoard user interface, specify the menu items you want to hide in JSON data format in the "Custom Menu" window.

{% assign hideExistingMenuItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-existing-menu-items-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-existing-menu-items-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=hideExistingMenuItems %}

##### Edit custom menu item

{% assign editCustomMenuItem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/edit-custom-menu-item-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/edit-custom-menu-item-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
    ===
        image: /images/user-guide/white-labeling/custom-menu/edit-custom-menu-item-3-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=editCustomMenuItem %}

#### Reset to default menu

{% assign resetToDefaultMenu = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-to-default-menu-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-to-default-menu-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=resetToDefaultMenu %}

#### Show hidden items

{% assign showHiddenItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/show-hidden-items-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/show-hidden-items-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=showHiddenItems %}

#### Reset menu item back to default

{% assign resetMenuItemBackToDefault = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-menu-item-back-to-default-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-menu-item-back-to-default-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=resetMenuItemBackToDefault %}

#### Add new menu item

You can add a new menu item that will link to a specific dashboard or an external webpage, such as a documentation page.
To do this, follow these steps:

- Click the "Add custom menu item" button at the bottom of the page;
- Enter the name for your menu item. Leave the item type as "Link". Now, specify the action: open a dashboard or a URL. Click "Add";
- The new menu item will be added to the bottom of the list;
- Drag the new item up or down by holding it from the left corner;
- Apply changes to the menu by clicking the "Save" button.

Clicking on the new menu item will open the specified dashboard or webpage (depending on what you have set in the settings).

{% assign addNewMenuItem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-1-pe.png,
        title: Click the "Add custom menu item" button at the bottom of the page;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-2-pe.png,
        title: Enter the name for your menu item. Leave the item type as "Link". Now, specify the action: open a dashboard or a URL. Click "Add";
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-3-pe.png,
        title: The new menu item will be added to the bottom of the list;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-4-pe.png,
        title: Drag the new item up or down by holding it from the left corner. Apply changes to the menu by clicking the "Save" button;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-5-pe.png,
        title: Click on the new menu item;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-6-pe.png,
        title: The specified dashboard or webpage will open (depending on what you have set in the settings).
'
%}

{% include images-gallery.liquid imageCollection=addNewMenuItem %}

<br>
Alternatively, you can add a new item between existing ones:

- Hover your mouse pointer between two menu items and click "Add custom menu item";
- Enter the name for your menu item. Leave the item type as "Link". Now, specify the action: open a dashboard or a URL. Click "Add";
- A new menu item is added between existing menu items;
- Apply changes to the menu by clicking the "Save" button;
- Click on the new menu item;
- 

{% assign addCustomMenuItemBetweenExistingItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-7-pe.png,
        title: Hover your mouse pointer between two menu items and click "Add custom menu item";
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-8-pe.png,
        title: Enter the name for your menu item. Leave the item type as "Link". Now, specify the action: open a dashboard or a URL. Click "Add";
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-9-pe.png,
        title: A new menu item is added between existing menu items. Apply changes to the menu by clicking the "Save" button;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-10-pe.png,
        title: Click on the new menu item;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-item-11-pe.png,
        title: ;
'
%}

{% include images-gallery.liquid imageCollection=addCustomMenuItemBetweenExistingItems %}

##### Adding suitem

Let's create three new menu items: two items will link to dashboards and will be grouped under one section.
The third item will link to the documentation.

{% assign addSuitem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-suitem-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-suitem-2-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-suitem-3-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-suitem-4-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-suitem-5-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-suitem-6-pe.png,
        title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addSuitem %}



#### Delete menu item

{% assign deleteMenuItem1 = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/delete-menu-item-1-pe.png,
        title: Go to the "**White Labeling**" page -> "**Custom Menu**" tab. Menu items names that can be hidden are displayed in the empty "**Custom Menu**" window;
    ===
        image: /images/user-guide/white-labeling/custom-menu/delete-menu-item-2-pe.png,
    title: Please provide the menu items you want to hide in JSON data format in the "**Custom Menu**" window. Then click "**Save**".

'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=addSuitem1 %}

### Edit name

To edit the custom menu name, click the "pencil" icon in the row of this custom menu. Change the name and click "Save".

{% assign editName = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-edit-name-1-pe.png,
        title: To edit the custom menu name, click the "pencil" icon in the row of this custom menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-edit-name-2-pe.png,
        title: Change the name and click "Save".
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=editName %}

### Manage custom menu assignees

{% assign manageCustomMenuAssignees = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/manage-custom-menu-assignees-1-pe.png,
        title: To manage the users assigned to this custom menu, click the corresponding icon in the row of this user menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/manage-custom-menu-assignees-2-pe.png,
        title: From the dropdown menu, select the assignee type: "Not assigned", "All users", or "Users list"'
    ===
        image: /images/user-guide/white-labeling/custom-menu/manage-custom-menu-assignees-3-pe.png,
        title: Selected menu items are now hidden.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=manageCustomMenuAssignees %}

### Delete custom menu

{% assign deleteCustomMenu = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-delete-1-pe.png,
        title: To delete custom menu, click the corresponding icon in the row of this user menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-delete-2-pe.png,
        title: Confirm deleting.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=deleteCustomMenu %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}