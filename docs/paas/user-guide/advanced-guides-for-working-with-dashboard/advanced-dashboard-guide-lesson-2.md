---
layout: docwithnav-paas
assignees:
- stitenko
title: Lesson 2. Dashboard states, widget actions, and Image Map widget

adding-building-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-1-pe.png
        title: 'Open the dashboard and enter to edit mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-2-pe.png
        title: 'Click on the "Manage dashboard states" icon in the upper-left corner;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-3-pe.png
        title: 'In the dialog that opens, you&#39;ll see the default state. Click the "plus" icon to add a new state;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-4-pe.png
        title: 'Use <b>${entityName}</b> as the name of the dashboard state. This way, during the action, you will transition to a state named after the entity involved in the action. Also change the state ID to <b>"building"</b>. Click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-5-pe.png
        title: 'Repeat the process to add an "office" state. Click the "plus" icon again;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-6-pe.png
        title: 'Again, use <b>${entityName}</b> as the name of the dashboard state. Change the state ID to <b>"office"</b>. Click "Add";'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-7-pe.png
        title: 'You will now see a list that includes the root state and the newly created ones. Once both states are added, click "Save" to apply your changes.'

map-widget-navigation-between-states-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-1-pe.png
        title: 'While on the main state in the editing mode, click on the "pencil" icon of the map widget to enter its editing mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-2-pe.png
        title: 'Navigate to the "Actions" tab and click the "plus" icon;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-3-pe.png
        title: 'Select "Tooltip tag action" as action source, name it "building_details", set the action type to "Navigation to dashboard state" and specify "building_state" as "Target dashboard state". Click "Add"'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-4-pe.png
        title: 'Now in the "Actions" window, you can see the configured action. Now, all that’s left is to add the line "Building Details" to the popup menu for transitioning to the new state. Navigate to the "Appearance" tab;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-5-pe.png
        title: 'In the "Appearance" tab, find the "Tooltip" section and add a line taken from the documentation to the existing tooltip. Apply the widget settings;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-6-pe.png
        title: 'Save the dashboard.'

map-widget-navigation-between-states-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-7-pe.png
        title: 'Click any building marker on the District Map widget. The "Building Details" line appeared in the tooltip. Click on it.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-8-pe.png
        title: 'You will navigate to the state of the selected building.'

adding-action-buildings-list-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-1-pe.png
        title: 'Go back to the default (Buildings) state of the dashboard;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-2-pe.png
        title: 'Enter editing mode of the dashboard;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-3-pe.png
        title: 'Click the "pencil" icon of the "Buildings list" widget to enter its editing mode;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-4-pe.png
        title: 'Scroll down to the "Actions" section of the menu and click "Add action";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-5-pe.png
        title: 'In the "Actions" window, click the "plus" icon in the upper right corner to open the "Add action" dialog box;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-6-pe.png
        title: 'In the dialog, select "On row click" as the action source and give the action name. Choose "Navigate to new dashboard state" as action type. A dropdown menu will appear for selecting the target dashboard state. Choose the "building" state. After, click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-7-pe.png
        title: 'Review the configured action in the "Actions" window to ensure the source and type are correct, then click "Save";'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-8-pe.png
        title: 'Click "Apply" to save the widget settings;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-9-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page.'

navigation-between-states-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-10-pe.png
        title: 'In the "Buildings List" widget, click on the "Building A" row;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-11-pe.png
        title: 'In the "Buildings List" widget, click on the "Building A" row. You must go to the Building A state. To return to the main dashboard state, click "Buildings" in the top left corner.'

navigation-between-states-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-12-pe.png
        title: 'Similarly, click on the "Building B" row to navigate to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-13-pe.png
        title: 'You will be navigated to the state of "Building B". Thanks to the use of ${entityName}, the state is named after the entity that took part in the action.'

background-image-building-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-1-pe.png
        title: 'Click the "Manage layouts" button in the upper left corner of the dashboard toolbar;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-2-pe.png
        title: 'In the small window that opens, click the "gear" icon to open layout settings;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-3-pe.png
        title: 'Find the "Background image" section and click "Browse from gallery";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-4-pe.png
        title: 'Upload Your Image by clicking the "Upload image" button in the top right corner of the window that opens;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-5-pe.png
        title: 'Drop an image in the appropriate field, or upload it from a folder on your computer. Then, click "Update";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-6-pe.png
        title: 'Apply changes by clicking the "Save" button in the lower right corner;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-7-pe.png
        title: 'Click "Save" in the bottom right corner of the dialog box;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-8-pe.png
        title: 'Make sure that the background of the "building" state has been successfully updated. Save the dashboard by clicking the "Save" button in the upper right corner.'

access-token:
    0:
        image: /images/user-guide/guides/visualizing-assets-data/adding-new-state-and-navigation-between-states/access-token-1-pe.png
        title: 'You will find the access token in the device details.'

adding-markdown-card-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-1-pe.png
        title: 'Open your dashboard and enter edit mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-2-pe.png
        title: 'Find the "Cards" widgets bundle and click on it;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-3-pe.png
        title: 'Select the "Markdown/HTML Card" widget;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-4-pe.png
        title: 'Go to the "Devices" page of the "Entities" section on the sidebar. Click on the "Thermostat" and navigate to the "Attributes" tab. Select "Server attributes", and click "plus" icon;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-5-pe.png
        title: 'Add latitude coordinates as attribute key: name it <b>xPos</b>, select value type - "Double", and specify value: specify coordinates. Click "Add";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-6-pe.png
        title: 'Add longitude coordinates as attribute key: name it <b>yPos</b>, value type - "Double", value: specify coordinates. Click "Add".'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-7-pe.png
        title: 'Go to the "Devices" page of the "Entities" section on the sidebar. Click on the "Thermostat" and navigate to the "Attributes" tab. Select "Server attributes", and click "plus" icon;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-8-pe.png
        title: 'Fill in the "Markdown/HTML Template" and "Markdown/HTML CSS" sections using the values from the documentation;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-9-pe.png
        title: 'Navigate to the "Widget card" tab, disable "Enable fullscreen" and "Enable data export" options. Click "Add" to confirm adding the widget;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-10-pe.png
        title: 'We have added an information card about the building.'

copy-paste-map-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-1-pe.png
        title: 'Return to the default state of your dashboard where the original map widget is located. Enter dashboard editing mode by clicking the "Edit mode" button on the toolbar on the right;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-2-pe.png
        title: 'Copy the map widget: right-click on the map widget and select “Copy” from the context menu;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-3-pe.png
        title: 'Go to the building state. Paste the map widget: right-click on the dashboard area and select “Paste” to place the copied widget on the dashboard;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-4-pe.png
        title: 'Now, we should change the data source to display only the selected building. Click the “pencil” icon on the map widget to open its settings;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-5-pe.png
        title: 'Change the data source to the alias "Selected entity" to focus the map on the selected building;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-6-pe.png
        title: 'Go to the "Appearance" tab, find the "Tooltip" section, and delete the specified code fragment as shown in the screenshot;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-7-pe.png
        title: 'Resize the widget and save the dashboard;'

copy-paste-map-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-8-pe.png
        title: 'Click on any office row to transition to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-9-pe.png

adding-office-attributes-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-1-pe.png
        title: 'Go to the "Assets" page and click on the "Building A" to open its details window. Navigate to the "Attributes" tab and click the "plus" icon to add new attribute;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-2-pe.png
        title: 'Enter "Floor" as the key name, select "String" as the value type, and input the floor number. Click "Add".'

adding-office-attributes-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-3-pe.png
        title: 'Office A.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-4-pe.png
        title: 'Office B.'

offices-list-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-1-pe.png
        title: 'Return to our dashboard, enter dashboard editing mode, and click the "Add widget" button to add new widget;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-2-pe.png
        title: 'Select the "Entities table" widget in the "Tables" widget bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-3-pe.png
        title: 'Now we need to add an alias to define the entities from which the data will be extracted. Here, we will use the alias type "Asset search query." This alias allows displaying assets of specified profiles to a specified level that are linked to the root entity. In our case, the root entity is the selected building. In the "Alias" field, enter a name for it - "Building offices", and click "Create a new one";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-4-pe.png
        title: 'Select the filter type "Asset search query," enable the option "Use dashboard state entity as root," set "Max relation level" to 1, relation type to "Contains," and select "offices" asset type. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-5-pe.png
        title: 'Add "floor", and "phone" data keys;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-6-pe.png
        title: 'Change the card title to "Offices list", uncheck all buttons except "Search" of the "Show card buttons" section, and click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-7-pe.png
        title: 'Move the widget to an empty space and resize it. After that, save the dashboard.'

offices-list-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-8-pe.png
        title: 'The building state should look like this.'

navigate-to-office-state-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-1-pe.png
        title: 'While in dashboard editing mode, click the "plus" icon on the "Offices list" widget to start editing it;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-2-pe.png
        title: 'Scroll down to the "Actions" section of the menu and click "Add action";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-3-pe.png
        title: 'In the "Actions" window, click the "plus" icon in the upper right corner to bring up the "Add action" dialog box;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-4-pe.png
        title: 'In the "Add action" dialog, select "On row click" as the action source and give the action name. Choose "Navigate to new dashboard state" as action type. A dropdown menu will appear for selecting the target dashboard state. SChoose the "office" state. After, click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-5-pe.png
        title: 'Review the configured action in the "Actions" window to ensure the source and type are correct, then click "Save";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-6-pe.png
        title: 'Click "Apply" to save the widget settings;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-7-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper right corner of the dashboard page.'

navigate-to-office-state-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-8-pe.png
        title: 'In the "Offices list" widget, click on the "Office A" row;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-9-pe.png
        title: 'You have transitioned to the "Office A" state.'

background-image-office-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-office-state-1-pe.png
        title: 'Add a background image for office state.'

adding-office-markdown-card-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-1-pe.png
        title: 'Click the large "Add new widget" icon in the center of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-2-pe.png
        title: 'Select the "Markdown/HTML Card" from the "Cards" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-3-pe.png
        title: 'In the "Data Sources" section, set the alias "Selected entity" as the data source and add "address," "floor," "officeManager," "email," and "phone" as data keys;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-4-pe.png
        title: 'Navigate to the "Appearance" tab. Fill in the "Markdown/HTML Template" and "Markdown/HTML CSS" sections with the appropriate values, using those provided in the documentation;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-5-pe.png
        title: 'Navigate to the "Widget card" tab, disable "Enable fullscreen" and "Enable data export" options. Click "Add" to confirm adding the widget;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-6-pe.png
        title: 'Resize the widget to your liking. After, save the dashboard.'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-7-pe.png
        title: 'We have added an information card about the office.'

device-coordinates-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-1-pe.png
        title: 'Go to the "Devices" page in the "Entities" section on the sidebar. Click on the "Indoor Air Quality Sensor" and navigate to the "Attributes" tab. Select "Server attributes", and click "plus" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-2-pe.png
        title: 'Enter <b>xPos</b> as key name, select value type - "Double", and specify value: the coordinates for the x-position. Click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-3-pe.png
        title: 'Click "plus" icon again to add another attribute key: name it <b>yPos</b>, value type - "Double", value: specify the coordinates for the y-position. Click "Add".'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-4-pe.png
        title: 'You have now successfully added the xPos and yPos attributes for the Indoor Air Quality Sensor.'

device-coordinates-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-5-pe.png
        title: 'The list of attributes for the "Energy Meter" device should look like this.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-6-pe.png
        title: 'The list of attributes for the "Water Flow Meter" device should look like this.'

add-office-plan:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-1-pe.png
        title: 'Go to the "Image gallery" page of the "Resources" section. Click "Upload image" button. A new window will open for uploading images. Drag and drop the office plan image file into the window, then click "Upload";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-2-pe.png
        title: 'Once the image is uploaded, find it in the gallery. Click the "Embed image" icon next to the uploaded office plan image;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-3-pe.png
        title: 'Copy the unique link to this image;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-4-pe.png
        title: 'Go to the "Assets" page in the "Entities" section, and select "Office A". Navigate to the "Attributes" tab, and click the "plus" icon to add a new attribute. Name it "<b>office-plan</b>", set the value type to "String", and paste the copied link to the office plan image as the value. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-5-pe.png
        title: 'A new attribute with a link to the image of the office plan has been added.'

adding-image-map-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-1-pe.png
        title: 'Go to the office state and enter dashboard editing mode;'    
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-2-pe.png
        title: 'Click the "Add widget" button at the top of the screen;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-3-pe.png
        title: 'Select the "Image Map" widget in the "Maps" widgets bundle;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-4-pe.png
        title: 'Now we need to add an alias to define the entities from which the data will be extracted. Here, we will use the alias type "Device search query." This alias allows displaying devices of specified profiles to a specified level that are linked to the root entity. In our case, the root entity is the selected office. In the "Alias" field, enter a name for it - "Office sensors", and click "Create a new one";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-5-pe.png
        title: 'Select the filter type "Device search query," enable the option "Use dashboard state entity as root," set "Max relation level" to 1, relation type to "Contains," and list the device types: smart sensor, energy sensor, and water sensor. Click "Add";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-6-pe.png
        title: 'Add "xPos", "yPos", and "type" as data keys;'

adding-image-map-widget-2:
    0:
      image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-7-pe.png
      title: 'Navigate to the "Appearance" tab. Scroll to the "Map provider settings" section. Specify "Selected entity" as the alias, and the "office-plan" attribute that contains the URL of the image;'

adding-image-map-widget-label:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-8-pe.png
        title: 'Scroll down a bit to locate the "Label" section. Please copy the label content from the documentation and insert it into the label field of the widget;'

adding-image-map-widget-tooltip:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-9-pe.png
        title: 'Scroll down a bit more to find the "Tooltip" section. Enable the "Use tooltip function" option. Then, copy the tooltip content from the documentation and paste it into the "Tooltip function" field of the widget;'

adding-image-map-widget-marker-image:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-10-pe.png
        title: 'Use marker image function. Copy marker image function from the documentation and paste it into the "Marker image function" field;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-11-pe.png
        title: 'Now we need to add new marker images. Remove default markers and click "Browse from gallery";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-12-pe.png
        title: 'Upload new markers or select it from the your image gallery;'

adding-image-map-widget-title:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-13-pe.png
        title: 'Navigate to the "Widget card" tab and change the title to "Office plan";'

adding-image-map-widget-css:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-14-pe.png
        title: 'Scroll to the "Advanced widget style" section. This area allows you to make deeper widget settings. Input the following CSS code to the "Widget CSS" section. This CSS will make the background of the label opaque;'

adding-image-map-uncheck-option:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-15-pe.png
        title: 'Uncheck the "Enable data export" option in the "Card buttons" section, and click "Add" to complete adding the Image Map widget;'

adding-image-final:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-16-pe.png
        title: 'Congratulations! The Image Map widget has been added. Adjust the size of the widget to suit your needs, and save dashboard.'

automatic-height-layout-filling:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-17-pe.png
        title: 'Go to the "Layout settings";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-18-pe.png
        title: 'Enable the "Auto fill layout height" option, and click "Save";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-19-pe.png
        title: 'Apply layouts settings and save the dashboard;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-20-pe.png
        title: 'As you can see, the Image Map widget has filled the entire height of the dashboard.'

adding-office-list-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-1-pe.png
        title: 'While in dashboard editing mode, click the "+ Add widget";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-2-pe.png
        title: 'Select the "Entities table" widget in the "Tables" widget bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-3-pe.png
        title: 'Specify the previously created "Office sensors" alias as datasource, replace the key "name" with "label";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-4-pe.png
        title: 'Change the card title to "Office sensor list", uncheck all buttons except "Search" of the "Show card buttons" section, and click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-5-pe.png
        title: 'Position and resize the "Entities table" widget to your liking. After, save the dashboard.'

adding-office-list-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-6-pe.png
        title: 'The office state should look like this.'

dashboard-final-lesson-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-1-pe.png
        title: 'Main state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-2-pe.png
        title: 'Building state'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-3-pe.png
        title: 'Office state'
---

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2.md %}
