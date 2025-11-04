{% assign feature = "Custom Menu" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

Customizing menu in ThingsBoard allows you to tailor the navigation menu to your needs, providing quick access to the most frequently used functions and dashboards.
You can add new and show/hide existing menu items.

Menu customization options:

- **Adding new menu items**: You can add new items to the menu, including links to specific dashboards, or external web pages;

- **Changing icons and names**: You can customize the icons and names for each menu item to better reflect their functionality and value to the user;

- **Reorganizing the menu**: You can drag and rearrange the order of items in the menu, optimizing the interface according to your workflows;

- **Personalized settings**: The menu can be customized individually for each tenant, customer, or their users, providing an additional level of personalization.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/U69PLwRoWyI" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Add custom menu

Before adding a custom menu in ThingsBoard, it is important to define the scope of its application, depending on who the end user is: Tenant or Customer.

Tenant scope options:
- *Not assigned* - indicates that the custom menu is not assigned to any tenant user. This option is convenient to use during the menu setup stage and can be assigned to the required tenant user afterward;
- *All tenant users* - selecting this option means that the menu will be accessible to all users at the tenant level;
- *Users list* - this option allows you to create a list of users who will have access to this menu.

Customer scope options:
- *Not assigned* - indicates that the custom menu is not assigned to any customer or customer user. This option is convenient to use during the menu setup stage and can be assigned to the required customer or customer user afterward;
- *All customer users* - selecting this option applies the custom menu to all of your customers and their users;
- *Users list* - this option allows you to apply the custom menu to a specific customer user or a list of customer users;
- *Customers list* - this option allows you to apply the custom menu to a specific customer or a list of customers and their users.

**Add new custom menu**

To add new custom menu, follow these steps:

- Go to the "Custom menu" tab of the "White labeling" page, and click the "plus" icon;
- In new window, enter custom menu name;
- Select scope: Tenant or Customer;
- Specify to whom exactly you are assigning this custom menu;
- After all settings, click "Add";

Custom menu added.

{% assign addCustomMenu = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-1-pe.png,
        title: Go to the "Custom menu" tab of the "White labeling" page, and click the "plus" icon;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-2-pe.png,
        title: In new window, enter custom menu name, select scope, and Specify to whom exactly you are assigning this custom menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-custom-menu-3-pe.png,
        title: After all settings, click "Add";
'
%}

{% include images-gallery.liquid imageCollection=addCustomMenu %}

## Custom menu configuration

### Add new menu item

You can add a new menu item that will link to a specific dashboard or an external webpage, such as a documentation page.

{% capture difference %}
**Please note:**
<br>
Before using a URL in your project, ensure that the page allows embedding in an iframe.
To do this, check the value of the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options){:target="_blank"} HTTP header. If the header is set to DENY or SAMEORIGIN, it means the page cannot be embedded in an iframe on other domains or is restricted to the same domain. If your domain needs to be allowed for embedding, it must be explicitly listed in the header.
It is recommended to check whether your domain is included among the allowed domains in the header or in the Content Security Policy (CSP) to avoid potential issues with displaying the page in an iframe.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To add new menu item, follow these steps:

- Click the "Add custom menu item" button at the bottom of the page;
- Enter the name for your menu item. Leave the item type as "Link". Now, specify the action: open a dashboard or a URL. Click "Add";
- The new menu item will be added to the bottom of the list. Drag the new item up or down by holding it from the left corner;
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
- Apply changes to the menu by clicking the "Save" button.

Now, click on the new menu item. You will navigate to the specified dashboard.

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
        title: You will navigate to the specified dashboard.
'
%}

{% include images-gallery.liquid imageCollection=addCustomMenuItemBetweenExistingItems %}

#### Adding subitem

You can place several menu items into one section. For example, devices, assets, and entity views are located in the "Entities" section.

As an example, let's add one section and place two subitems within it.

- First, let's add a section. Start adding a new menu item. Name it "My dashboards", select the "Section" item type, and click "Add";
- Custom item with "Section" type added. The "+ Add subitem" button appeared under the section "My dashboards". Click it to add a subitem to this section;
- Enter "Dashboard A" as menu item name, and specify the dashboard;
- Subitem added. As you can see, it is located in the "My dashboards" section by hierarchy;
- Add another one menu item. Name it "Dashboard B" and specify your second dashboard. Save the changes;

In the left menu, a section called "My dashboards" has appeared. Click on it to expand. Inside, you will find two menu subitems that link to your dashboards. Click on the "Dashboard A" menu item. The corresponding dashboard will open.
Now click on the "Dashboard B" menu item to navigate to the second dashboard.

{% assign addSubitem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-1-pe.png,
        title: First, let&#39;s add a section. Start adding a new menu item;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-2-pe.png,
        title: Name it "My dashboards", select the "Section" item type, and click "Add";
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-3-pe.png,
        title: Custom item with "Section" type added. The "+ Add subitem" button appeared under the section "My dashboards". Click it to add a subitem to this section;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-4-pe.png,
        title: Enter "Dashboard A" as menu item name, and specify the dashboard. Click "Add";
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-5-pe.png,
        title: Subitem added. As you can see, it is located in the "My dashboards" section by hierarchy;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-6-pe.png,
        title: Add another one menu item. Name it "Dashboard B" and specify your second dashboard. Save the changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-7-pe.png,
        title: In the left menu, a section called "My dashboards" has appeared. Click on it to expand. Inside, you will find two menu subitems that link to the dashboards. Click on the "Dashboard A" menu item. The corresponding dashboard will open;
    ===
        image: /images/user-guide/white-labeling/custom-menu/add-subitem-8-pe.png,
        title: Now click on the "Dashboard B" menu item to navigate to the second dashboard.
'
%}

{% include images-gallery.liquid imageCollection=addSubitem %}

### Edit menu item

To edit menu item, click the "pencil" icon in the row of the menu item you want to edit. Make the necessary changes, click "Apply", and then save changes. The item configuration has been changed.

{% assign editMenuItem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/edit-menu-item-1-pe.png,
        title: Click the "pencil" icon in the row of the menu item you want to edit;
    ===
        image: /images/user-guide/white-labeling/custom-menu/edit-menu-item-2-pe.png,
        title: Make the necessary changes, and click "Apply". Then save changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/edit-menu-item-3-pe.png,
        title: The item configuration has been changed.
'
%}

{% include images-gallery.liquid imageCollection=editMenuItem %}

{% capture difference %}
**Please note:**
You can change the action only for custom menu item.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Reset to default menu

You can reset all your changes to the default state by pressing the "Reset to default menu" button, and click "Save" to apply changes.

{% assign resetToDefaultMenu = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-to-default-menu-1-pe.png,
        title: You can reset all your changes to the default state by pressing the "Reset to default menu" button;
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-to-default-menu-2-pe.png,
        title: Apply changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-to-default-menu-3-pe.png,
        title: The menu has been reset to the default state.
'
%}

{% include images-gallery.liquid imageCollection=resetToDefaultMenu %}

### Reset menu item back to default

You can reset a menu item to its default state by clicking the "broom" icon in the row of the menu item, and click "Save" to apply changes.

{% assign resetMenuItemBackToDefault = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-menu-item-back-to-default-1-pe.png,
        title: You can reset a menu item to its default state by clicking the "broom" icon in the row of the menu item;
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-menu-item-back-to-default-2-pe.png,
        title: Apply changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/reset-menu-item-back-to-default-3-pe.png,
        title: The menu item has been reset to the default state.
'
%}

{% include images-gallery.liquid imageCollection=resetMenuItemBackToDefault %}

### Hide existing menu items

To hide menu items in the ThingsBoard user interface, switch the "Hidden/Visible" toggle to "Hidden" in the row of the menu item you want to hide.

{% assign hideExistingMenuItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-existing-menu-items-1-pe.png,
        title: To hide menu items in the ThingsBoard user interface, switch the "Hidden/Visible" toggle to "Hidden" in the row of the menu item you want to hide. For example, hide the "Plan and Billing" and "Dashboards" menu items. Then save the changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-existing-menu-items-2-pe.png,
        title: As you can see, the menu items we marked as "Hidden" has disappeared from the left menu.
'
%}

{% include images-gallery.liquid imageCollection=hideExistingMenuItems %}

To display the hidden menu item again, switch the "Hidden/Visible" toggle to "Visible" and save the changes.

<br>
*Hide all menu items*

If you want to start configuring the menu from scratch, you can hide all menu items by clicking the "Hide all menu items" button at the top of the window. 

{% assign hideAllMenuItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-all-menu-items-1-pe.png,
        title: You can hide all menu items by clicking the "Hide all menu items" button at the top of the window. Apply changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/hide-all-menu-items-2-pe.png,
        title: All menu items are hidden, except for "Home".
'
%}

{% include images-gallery.liquid imageCollection=hideAllMenuItems %}

{% capture difference %}
**Please note:**
The only menu item you cannot hide is "Home".
{% endcapture %}
{% include templates/info-banner.md content=difference %}

*Show hidden items*

By default, hidden menu items are displayed in the custom menu config window. To hide them, toggle the "Show hidden items" switch to "Off".

{% assign showHiddenItems = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/show-hidden-items-1-pe.png,
        title: By default, hidden menu items are displayed in the custom menu config window. To hide them, toggle the "Show hidden items" switch to "Off";
    ===
        image: /images/user-guide/white-labeling/custom-menu/show-hidden-items-2-pe.png,
        title: A hidden menu item is concealed from the custom menu configuration window.
'
%}

{% include images-gallery.liquid imageCollection=showHiddenItems %}

### Delete menu item

To delete the custom menu item, click the "trash" icon in the row of the menu item you want to remove. Then save the changes.

{% assign deleteMenuItem = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/delete-menu-item-1-pe.png,
        title: To delete the custom menu item, click the "trash" icon in the row of the menu item you want to remove. Then save the changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/delete-menu-item-2-pe.png,
        title: Your custom menu item has been deleted.
'
%}

{% include images-gallery.liquid imageCollection=deleteMenuItem %}

{% capture difference %}
**Please note:**
You can delete only custom item. Default items cannot be deleted, only [hidden](#hide-existing-menu-items).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Edit custom menu name

To edit the custom menu name, click the "pencil" icon in the row of this custom menu. Change the name and click "Save".

{% assign editName = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-edit-name-1-pe.png,
        title: To edit the custom menu name, click the "pencil" icon in the row of this custom menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-edit-name-2-pe.png,
        title: Change the name and click "Save";
    ===
        image: /images/user-guide/white-labeling/custom-menu/custom-menu-edit-name-3-pe.png,
        title: The custom menu name has been changed.
'
%}

{% include images-gallery.liquid imageCollection=editName %}

## Manage custom menu assignees

To manage the users assigned to this custom menu, click the corresponding icon in the row of this user menu. From the dropdown menu, change the assignee type and save changes. Assignee type changed.

{% assign manageCustomMenuAssignees = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/manage-custom-menu-assignees-1-pe.png,
        title: To manage the users assigned to this custom menu, click the corresponding icon in the row of this user menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/manage-custom-menu-assignees-2-pe.png,
        title: From the dropdown menu, change the assignee type and save changes;
    ===
        image: /images/user-guide/white-labeling/custom-menu/manage-custom-menu-assignees-3-pe.png,
        title: Assignee type changed.
'
%}

{% include images-gallery.liquid imageCollection=manageCustomMenuAssignees %}

## Delete custom menu

To delete custom menu, click the corresponding icon in the row of this user menu, and confirm the deletion by clicking "Yes".

{% assign deleteCustomMenu = '
    ===
        image: /images/user-guide/white-labeling/custom-menu/delete-custom-menu-1-pe.png,
        title: To delete custom menu, click the corresponding icon in the row of this user menu;
    ===
        image: /images/user-guide/white-labeling/custom-menu/delete-custom-menu-2-pe.png,
        title: Confirm the deletion by clicking "Yes".
'
%}

{% include images-gallery.liquid imageCollection=deleteCustomMenu %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}