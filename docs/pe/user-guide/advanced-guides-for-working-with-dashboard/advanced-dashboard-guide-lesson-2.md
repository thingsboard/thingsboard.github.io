---
layout: docwithnav-pe
assignees:
- stitenko
title: Lesson 2. Dashboard states, widget actions, and Image Map widget

dashboard-lesson-2:
    0:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-1-pe.png
    1:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-2-pe.png
    2:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-3-pe.png
    3:
        src: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-4-pe.png

adding-building-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-1-pe.png
        title: 'Open the dashboard and enter its editing mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-2-pe.png
        title: 'Click on the "Manage dashboard states" icon in the upper-left corner;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-3-pe.png
        title: 'In the dialog that opens, you&#39;ll see the default state. Click the "plus" icon to add a new state;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-4-pe.png
        title: 'Use <b>${entityName}</b> as the name of the dashboard state. This way, during the action, you will transition to a state named after the entity involved in the action. Also change the state ID to "building". Click "Add".'

adding-office-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-5-pe.png
        title: 'Click the "plus" icon again;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-6-pe.png
        title: 'Again, use ${entityName} as the name of the dashboard state. Change the state ID to "office". Click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-building-and-office-states-7-pe.png
        title: 'You will now see a list that includes the root state and the newly created ones. Once both states are added, click "Save" to apply your changes.'

map-widget-navigation-between-states-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-1-pe.png
        title: 'While on the main state in the editing mode, click on the "pencil" icon of the map widget to enter its editing mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-2-pe.png
        title: 'Navigate to the "Actions" tab and click the "plus" icon to add an action;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-3-pe.png
        title: 'Select "Tooltip tag action" as action source, name it "building_details", set the action type to "Navigate to new dashboard state" and specify "building" state as "Target dashboard state". Click "Add"'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-4-pe.png
        title: 'Now in the "Actions" window, you can see the configured action. Now, all that&#39;s left is to add the "Details" line to the popup menu for transitioning to the new state. Navigate to the "Appearance" tab;'

map-widget-navigation-between-states-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-5-pe.png
        title: 'In the "Appearance" tab, find the "Tooltip" section and add a lines taken from the documentation to the existing tooltip before the ";" sign. Apply the widget settings;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-6-pe.png
        title: 'Save the dashboard.'

map-widget-navigation-between-states-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-7-pe.png
        title: 'Now, when you click on any building marker of the map widget, a tooltip with “Details” line will appear. Clicking on it will navigate you to the state of the selected building.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/map-widget-navigation-between-states-8-pe.png
        title: 'You will navigate to the state of the selected building.'

adding-action-buildings-list-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-1-pe.png
        title: 'Go back to the default state of the dashboard by clicking the "Buildings" in the top-left corner;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-2-pe.png
        title: 'Enter the editing mode of the dashboard;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-3-pe.png
        title: 'Click the "pencil" icon of the "Buildings list" widget to enter its editing mode;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-4-pe.png
        title: 'Scroll down to the "Actions" section of the menu and click "Add action";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-5-pe.png
        title: 'In the "Actions" window, click the "plus" icon in the upper-right corner to open the "Add action" dialog box;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-6-pe.png
        title: 'In the dialog, select "On row click" as the action source and give the action name. Choose "Navigate to new dashboard state" as action type. A dropdown menu for selecting the target dashboard state will appear. Choose the "building" state. Afterwards, click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-7-pe.png
        title: 'Review the configured action in the "Actions" window to ensure the source and type are correct, then click "Save";'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-8-pe.png
        title: 'Click "Apply" to save the widget settings;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-9-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper-right corner of the dashboard page.'

navigation-between-states-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-10-pe.png
        title: 'In the "Buildings List" widget, click on the "Building A" row;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-11-pe.png
        title: 'You have been moved to the "Building A" state.'

navigation-between-states-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-12-pe.png
        title: 'Similarly, click on the "Building B" row to navigate to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigation-between-states-13-pe.png
        title: 'You will be moved to the state of "Building B". By using ${entityName}, the state is automatically named after the entity that participated in the action.'

background-image-building-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-1-pe.png
        title: 'Switch to the "building" state and enter the dashboard editing mode.Click the "Manage layouts" button in the upper-left corner of the dashboard toolbar;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-2-pe.png
        title: 'In the small window that opens, click the "gear" icon to open layout settings;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-3-pe.png
        title: 'Find the "Background image" section and click "Browse from gallery";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-4-pe.png
        title: 'Upload Your Image by clicking the "Upload image" button in the top-right corner of the window that opens;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-5-pe.png
        title: 'Drop an image in the appropriate field, or upload it from a folder on your computer. Then, click "Upload";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-6-pe.png
        title: 'Apply changes by clicking the "Save" button in the lower-right corner;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-7-pe.png
        title: 'Click "Save" in the bottom-right corner of the dialog box;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-building-state-8-pe.png
        title: 'Make sure that the background of the "building" state has been successfully updated. Save the dashboard.'

adding-markdown-card-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-1-pe.png
        title: 'Open your dashboard and enter edit mode;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-2-pe.png
        title: 'Click the "+ Add widget" button at the top of the screen;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-3-pe.png
        title: 'Find the "Cards" widgets bundle and click on it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-4-pe.png
        title: 'Select the "Markdown/HTML Card" widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-5-pe.png
        title: 'Now we need to add an alias to define the entities from which the data will be extracted. In the "Alias" field, enter a name for it - "Selected entity", and click "Create a new one";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-6-pe.png
        title: 'Specify a filter type - "Entity from dashboard state", and click the "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-7-pe.png
        title: 'Add data keys such as "address", "contactPerson", "email", and "phone";'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-8-pe.png
        title: 'Navigate to the "Appearance" tab. Turn on the "Use markdown/HTML value function" option, and fill in the "Use markdown/HTML value function" and "Markdown/HTML CSS" sections using the values from the documentation;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-9-pe.png
        title: 'Navigate to the "Widget card" tab, turn off "Enable fullscreen" and "Enable data export" options, and then click "Add" to confirm adding the widget;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-markdown-card-widget-10-pe.png
        title: 'We have added an information card about the building. Resize the widget to your liking, and save the dashboard.'

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

copy-paste-map-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-4-pe.png
        title: 'Now, we should change the data source to display only the selected building. Click the “pencil” icon on the map widget to open its settings;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-5-pe.png
        title: 'Change the data source to the "Selected entity" alias to focus the map on the selected building;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-6-pe.png
        title: 'Go to the "Appearance" tab, find the "Tooltip" section, and delete the code fragment from the tooltip function as shown in the screenshot. Confirm all changes;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-7-pe.png
        title: 'Place the widget in the upper-right corner of the dashboard and adjust its size. Save the dashboard by clicking "Save".'

copy-paste-map-widget-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-8-pe.png
        title: 'In the "Building list" widget, click on the row of any building to transition to its state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/copy-paste-map-widget-9-pe.png
        title: ' Building A&#39;s state'

adding-office-attributes-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-1-pe.png
        title: 'Go to the "Assets" page and click on the "Office A" to open its details. Navigate to the "Attributes" tab and click the "plus" icon to add a new attribute;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-2-pe.png
        title: 'Enter "floor" as the key name, select "Integer" as the value type, and input the floor number. Click "Add".'

adding-office-attributes-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-3-pe.png
        title: 'Similarly, add the "phone", "email", "address", and "officeManager" attributes. After adding these attributes, your attributes list for "Office A" should look like this.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-attributes-4-pe.png
        title: 'After adding attributes, your attributes list for "Office B" should look like this.'

offices-list-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-1-pe.png
        title: 'Return to our dashboard, and navigate to the "building" state for either Office A or Office B. Enter dashboard editing mode, and click the "+ Add widget";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-2-pe.png
        title: 'Select the "Entities table" widget from the "Tables" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-3-pe.png
        title: 'Now we need to add an alias to define the entities from which the data will be extracted. In the "Alias" field, enter a name for it - "Building offices", and click "Create a new one";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-4-pe.png
        title: 'We will use the "Asset search query" alias type, turn on the "Use dashboard state entity as root" option, set "Max relation level" to 1, relation type to "Contains," and specify "office" asset type. Finally, click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-5-pe.png
        title: 'Add the "floor" and "phone" data keys;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-offices-list-widget-6-pe.png
        title: 'Change the card title to "Offices list", uncheck all buttons except "Search" in the "Show card buttons" section, and click "Add";'
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
        title: 'Enter dashboard editing mode, and click the "pencil" icon on the "Offices list" widget to start editing it;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-2-pe.png
        title: 'Scroll to the "Actions" section of the menu and click "Add action";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-3-pe.png
        title: 'In the "Actions" window, click the "plus" icon in the upper-right corner to bring up the "Add action" dialog box;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-4-pe.png
        title: 'In the "Add action" dialog, select "On row click" as the action source and enter the action name. Choose "Navigate to new dashboard state" as the action type. A dropdown menu will appear for selecting the target dashboard state. Choose the "office" state. Afterwards, click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-5-pe.png
        title: 'Review the configured action in the "Actions" window to ensure the source and type are correct, then click "Save";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-6-pe.png
        title: 'Click "Apply" to save the widget settings;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-7-pe.png
        title: 'Save the dashboard by clicking "Save" in the upper-right corner of the dashboard page.'

navigate-to-office-state-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-8-pe.png
        title: 'Click on the "Office A" row in the "Offices list" widget;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/navigate-to-office-state-9-pe.png
        title: 'You have navigated to the "Office A" state.'

background-image-office-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/background-image-office-state-1-pe.png
        title: 'Add a background image for office state.'

adding-office-markdown-card-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-1-pe.png
        title: 'Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-2-pe.png
        title: 'Select the "Markdown/HTML Card" from the "Cards" widgets bundle;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-3-pe.png
        title: 'Specify the "Selected entity" alias as the data source and add the following data keys: "floor," "officeManager," "email," and "phone". Then, click "Add datasource" to add another datasource;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-4-pe.png
        title: 'Input "Entity with relation to dashboard state (asset)" as alias name. Then, click "Create a new one!";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-5-pe.png
        title: 'Specify "Relation type" as filter type. Turn on "Use dashboard state entity as root" option. Set the direction to "To", and maximum relation level to "1";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-6-pe.png
        title: 'Add a relation filter: set "Contains" as relation type, and "Asset" as entity type. Then, click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-7-pe.png
        title: 'Add "Address" to the data keys row;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-8-pe.png
        title: 'Navigate to the "Appearance" tab. Turn on "Use markdown/HTML value function" option. Fill in the "Markdown/HTML value function" and "Markdown/HTML CSS" sections with the appropriate values, using those provided in the documentation;'
    8:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-9-pe.png
        title: 'Navigate to the "Widget card" tab, turn off "Enable fullscreen" and "Enable data export" options. Click "Add" to confirm adding the widget;'
    9:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-10-pe.png
        title: 'Resize the widget to your liking. Afterwards, save the dashboard;'
    10:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-office-markdown-card-widget-11-pe.png
        title: 'We have added an information card about the office.'

device-coordinates-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-1-pe.png
        title: 'Go to the "Devices" page of the "Entities" section on the sidebar. Click on the "Indoor Air Quality Sensor" and navigate to the "Attributes" tab. Select "Server attributes", and click "plus" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-2-pe.png
        title: 'Enter "xPos" as key name, select "Double" as the value type, and specify the coordinates for the x-position. Then, click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-3-pe.png
        title: 'Click "plus" icon again to add another attribute key. Enter "yPos" as the key name, select "Double" as the value type, and specify the coordinates for the x-position. Click "Add";'
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
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/device-coordinates-7-pe.png
        title: 'The list of attributes for the "IAQ Sensor" device should look like this.'

add-office-plan-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-1-pe.png
        title: 'Go to the "Image gallery" page of the "Resources" section. Click "Upload image" button. This will open a new window for uploading the image. Here, you can either drag and drop your office plan image file or select it through a file explorer. Then, click "Upload";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-2-pe.png
        title: 'Once the upload is successful and your image appears in the gallery, look for the "Embed image" icon next to the image. Click this to get a unique link that directly references your uploaded image;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-3-pe.png
        title: 'Copy the unique link to this image;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-4-pe.png
        title: 'Go to the "Assets" page of the "Entities" section, and click on the "Office A". Navigate to the "Attributes" tab, and click the "plus" icon to add a new attribute. Name this attribute "office-plan", choose "String" as the value type, and paste the previously copied link into the value field. Click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-5-pe.png
        title: 'We have added a new attribute with a link to the image of the office plan.'

add-office-plan-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/add-office-plan-6-pe.png
        title: 'We have added a new attribute with a link to the image of the office plan.'
  
adding-image-map-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-1-pe.png
        title: 'Switch to Office A or Office B state and enter dashboard editing mode;'    
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-2-pe.png
        title: 'Click the "Add widget" button at the top of the screen;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-3-pe.png
        title: 'Select the "Image Map" widget in the "Maps" widgets bundle;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-4-pe.png
        title: 'Now we need to add an alias to define the entities from which the data will be extracted. In our case, the root entity is the selected office. In the "Alias" field, enter a name for it - "Office sensors", and click "Create a new one";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-5-pe.png
        title: 'Select the filter type "Device search query", enable the option "Use dashboard state entity as root", set "Max relation level" to 1, relation type to "Contains", and list the device types: "air-sensor", "energy-sensor", and "water-sensor". Click "Add";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-6-pe.png
        title: 'Add "xPos", "yPos", and "type" as data keys;'

adding-image-map-widget-2:
    0:
      image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-7-pe.png
      title: 'Now, set the previously uploaded office plan image as the background of the widget. Navigate to the "Appearance" tab, and scroll to the "Map provider settings" section. Specify "Selected entity" as the image URL source entity alias, and the "office-plan" as the image URL source entity attribute;'

adding-image-map-widget-label:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-8-pe.png
        title: 'Scroll down a bit to locate the "Label" section. Please copy the label content from the documentation and insert it into the label field of the widget;'

adding-image-map-widget-tooltip:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-9-pe.png
        title: 'In the "Tooltip" section, keep only ${entityName}, which is responsible for the device name. Delete everything else;'

adding-image-map-widget-marker-image:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-10-pe.png
        title: 'Copy marker image function from the documentation and paste it into the "Marker image function" field, and remove default markers;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-11-pe.png
        title: 'Now we need to add new marker images. Click "Browse from gallery";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-12-pe.png
        title: 'Upload new markers for each device type;'

adding-image-map-widget-title:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-13-pe.png
        title: 'Navigate to the "Widget card" tab and change the title to "Office plan";'

adding-image-map-widget-css:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-14-pe.png
        title: 'Scroll to the "Advanced widget style" section. This area allows you to modify in-depth widget settings. Input the following CSS code to the "Widget CSS" section. This CSS will make the background of the label opaque;'

adding-image-map-uncheck-option:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-15-pe.png
        title: 'Turn off the "Enable data export" option in the "Card buttons" section, and click "Add" to complete adding the Image Map widget;'

adding-image-final:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-16-pe.png
        title: 'The "Office Plan" widget has been added. Move the widget to the right corner and adjust its size as shown in the screenshot.'

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

image-map-widget:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-20-pe.png
        title: 'Office A plan: The floor plan displays the devices placed within it.'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-image-map-widget-21-pe.png
        title: 'Office B plan: The floor plan also shows the devices positioned within it.'

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
        title: 'Change the card title to "Office sensors list", uncheck all buttons except "Search" in the "Show card buttons" section, and click "Add";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-5-pe.png
        title: 'Position and resize the "Office sensors list" widget to your liking. Afterwards, save the dashboard.'

adding-office-list-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/adding-devices-list-widget-6-pe.png
        title: 'The office state should look like this.'

dashboard-final-lesson-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-1-pe.png
        title: 'Default state;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-2-pe.png
        title: 'Building state'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-3-pe.png
        title: 'Office A state'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-2/dashboard-final-lesson-2-4-pe.png
        title: 'Office B state'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-2.md %}