{% include docs/user-guide/ui/aliases.md %}

### Group entities

This alias allows choosing a single group of entities, which can be a customer group, an asset group, or a device group.
**Please note** that when you choose a group, the group Id is hard-coded to the dashboard config.
So, if you export and import the dashboard to another server, the alias will not work. **We recommend to use "Entities by group name" alias in most of the cases.**  
In this example, an alias was created that filters the device group, which in this case is Irrigation systems.

Let's learn how to add a Group entities alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Group entities_ filter type.
   From the Type drop-down menu, Select the _Device_ and enter the name of the needed entity group of devices (start typing it and it will be found automatically).
5. After configuring the alias, click the "Add" button in the lower right corner.
6. We can now see that a new alias has been added. Click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="group-entities" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type, select the name of the created alias from the list, and add telemetry.
4. Click the "Add" button in the lower right corner of the dialog box.
5. Widget with alias that filters a group of devices, which in this case is Irrigation systems, has been added.
6. Don't forget to save all the changes by clicking on the big orange checkmark in the lower right corner of the screen.

{% include images-gallery.html imageCollection="group-entities-1" %}

### Entity group list

This alias allows choosing several entity groups manually without entering a query, which can be device groups,
asset groups, entity view groups, customer groups, dashboard groups, or user groups.
In this example, an alias was created that filters a list of device groups, which in this case are ‘Irrigation systems’ and ‘Moisture sensors’.

Let's learn how to add an Entity group list alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity group list_ filter type.
5. Select the Device and input device groups. Click "Add" in the lower right corner of the dialog box.
6. After adding the first alias, click the "Add alias" button again.
7. Enter a name for the alias, select a _Group entities_ filter type.
8. Move the slider to use a dashboard state entity as an entity group.
9. In the Default state entity group, Select the _Device_ type and Irrigation system as entity group.
10. Click "Add" in the lower right corner of the dialog box.
11. After adding both aliases, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-group-list" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type and _Entity group list_ alias. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click the "pencil" icon in the upper right corner to enter the widget editing mode.
5. Move to the Action cell and click a "+" icon to add a new action.
6. In the Add widget dialog, select an [action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
7. Enter the name of the action.
8. If necessary, select the icon representing the button to perform the action.
9. Select the _Update current dashboard state_ action type and click "Add" to add a new action to the widget.
10. After successfully adding the action, click the large orange checkmark in the upper right of the screen to apply the changes.
11. Now, add a widget on which action will be performed by clicking the orange "+" icon in the lower right corner of the screen and choosing a "Paper" icon ("Create new widget").
12. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
13. Input data source: Entity type and _group entities_ alias and add telemetry. Click "Add" in the lower right corner.
14. After adding both widgets, click the checkmark in the lower right corner of the screen.

To execute an action and filter aliases by device groups, click the action cell button.

{% include images-gallery.html imageCollection="entity-group-list-1" %}


### Entity group name

This alias allows choosing multiple entity name groups that begin with an entered query, which can be device group(s),
asset group(s), entity view group(s), customer group(s), dashboard group(s) or user group(s). In this example, an alias filters device groups whose names start with ‘Irrigation’.

For this example, an empty device group named 'Irrigation machines' was created.

Let's learn how to add an Entity group name alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select an _Entity group name_ filter type.
5. Select the Device and enter the beginning of the group name, for example, "Irrigation". Click "Add" in the lower right corner.
6. After adding the first alias, click the "Add alias" button again.
7. Enter a name for the alias, select a _Group entities_ filter type.
8. Move the slider to use a dashboard state entity as an entity group.
9. In the Default state entity group, Select the _Device_ type and _Irrigation system_ as an entity group.
10. Click "Add" in the lower right corner of the dialog box.
11. After adding both aliases, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entity-group-name" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type and _Entity group name_ alias. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click the "pencil" icon in the upper right corner to enter the widget editing mode.
5. Move to the Action cell and click a "+" icon to add a new action.
6. In the Add widget dialog, select an [action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.)
7. Enter the name of the action.
8. If necessary, select the icon representing the button to perform the action.
9. Select the _Update current dashboard state_ action type and click "Add" to add a new action to the widget.
10. After successfully adding the action, click big orange tick mark in the upper right of the screen to apply the changes.
11. Now, add a widget on which action will be performed by clicking the orange "+" icon in the lower right corner of the screen and choosing a "Paper" icon ("Create new widget").
12. In the opened widget bundles selection, click "Cards system". There select the Entity table widget.
13. Input data source: Entity type and _group entities_ alias and add telemetry. Click "Add" in the lower right corner.
14. After adding both widgets, click the checkmark in the lower right corner of the screen.

{% include images-gallery.html imageCollection="entity-group-name-1" %}

### Entities by group name

This alias allows choosing entities by entering the exact full name of an entity group. This entity can be device group(s), asset group(s), entity view group(s), customer group(s), dashboard group(s), or user group(s).
The difference between Entities by group name and Group entities is that the first one resolved the group by the specified name while the second one uses hard-coded group ID.
More important, during the lookup of entities, this alias will use information about the current user. So, if you share the dashboard with multiple customers,
and would like each customer to see devices that belong to him, you should use this alias instead of "Group entities".

Let's learn how to add an _Entities by group name_ alias:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Entities by group name e_ filter type.
5. Choose entity type and enter the exact full name of the entity group. Click "Add" in the lower right corner of the dialog box.
6. After the alias has been added, click "Save" in the lower right corner of the dialog box.

{% include images-gallery.html imageCollection="entities-by-group-name" %}
<br>

Now let's use the added alias in a widget:
1. Click the "Add new widget" icon in the center of the screen.
2. In the opened widget bundles selection, click "Cards system". There select the _Entities table_ widget.
3. Input data source: Entity type and _Entities by group name_ alias. Click "Add" in the lower right corner to add a widget.
4. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

{% include images-gallery.html imageCollection="entities-by-group-name-1" %}

### Owner of entity from dashboard state

This alias allows displaying owners of the devices, assets, entities, etc. Commonly used when there is a hierarchy of customers and it is needed to see what devices belong to whom.

Let's learn how to add an Owner of entity from dashboard state alias, create a widget with it and configure an action to use it:
1. Enter dashboard editing mode.
2. In the upper right corner of the window, click the "Entity alias" icon.
3. In the opened Entity aliases window, click the "Add alias" button on the left side of the dialog box.
4. In the opened dialog _Add alias_, enter a name for the alias, select a _Owner of entity from dashboard state_ filter type. Click "Add".
5. After saving _Owner of entity from dashboard state_ alias, click "Add alias" again to add one more alias.
6. In the opened dialog _Add alias_, enter a name for the alias, select a _Device type_ filter type, set default device type and enter the beginning of the device names. Click "Add".
7. After adding both aliases, click "Save" in the lower right corner of the dialog box.

8. Click the "Add new widget" icon in the center of the screen.
9. In the opened widget bundles selection dialog, click "Cards system". There select the Entity table widget.
10. Input data source: Entity type and _Device type_ alias. Click "Add" in the lower right corner to add a widget.
11. After a widget with alias that filters entities by devices which names start with Owner test, click a "Pencil" icon in the upper right of the widget.
12. Move to the Actions cell, click a "+" icon to add an action.
13. Select an [action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-sources) which is responsible for each entity separately (action cell button, on row click etc.). Enter the action name.
14. Select the _Update current dashboard state_ action type and set default state as a target dashboard state. Click "Add" to add a new action to the widget.
15. After successfully adding the action, click big orange tick mark in the upper right of the screen to apply the changes.

16. Click a big orange "+" icon in the lower right of the screen. Among appeared icons, click a "paper" icon to create a new widget.
17. In the opened widget bundles selection dialog, click "Cards system". There select the _Entities table_ widget.
18. Input data source: Entity type and _Owner of entity from dashboard state_ alias. Click "Add" in the lower right corner to add a widget.
19. After adding the widget, click a big tick icon in the lower right corner of the screen to save all applied changes.

By clicking on a row, the action will be executed, so an owner of the corresponding entity will be displayed on the widget on the same dashboard state.

{% include images-gallery.html imageCollection="owner-of-entity-from-dashboard-state" %}
