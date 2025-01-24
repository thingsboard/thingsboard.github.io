---
layout: docwithnav-paas
assignees:
- stitenko
title: Lesson 1. Visualizing assets data using OpenStreet Map and Entities table widgets

adding-assets-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-assets-1-pe.png
        title: 'Go to the "Assets" page. By default, you&#39;ll be redirected to the "All" device group. Click the "plus" icon located in the top right corner of the table. Select "Add new asset" from the drop-down menu to start adding your first asset;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-assets-2-pe.png
        title: ' In the opened window, input the asset name "Building A". Now we need to create a new asset profile. In the corresponding field, enter a name for it - "building", and click "Create a new one!";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-assets-3-pe.png
        title: 'Click the "Add" button to confirm the asset profile creation;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-assets-4-pe.png
        title: 'Now click "Add" to finalize adding the asset;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-assets-5-pe.png
        title: 'Congratulations! You&#39;ve added your first asset.'

adding-assets-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-assets-6-pe.png
        title: 'Similarly, add the asset "Building B". Also, add the assets "Office A" and "Office B" with the asset type "office".'

adding-devices-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-devices-1-pe.png
        title: 'Navigate to the "Devices" page. By default, you&#39;ll be redirected to the "All" device group. Click the "plus" icon located in the top-right corner of the table. Select "Import device" from the drop-down menu;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-devices-2-pe.png
        title: 'Drag the CSV file into the import window and click "Continue";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-devices-3-pe.png
        title: 'Select CSV delimiter and click "Continue";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-devices-4-pe.png
        title: 'Map the data between the columns of the uploaded file and the data types in the ThingsBoard platform. Click "Continue";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-devices-5-pe.png
        title: 'Finally, click "OK";'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-devices-6-pe.png
        title: 'Four new devices should be successfully created: "SD-001" (Indoor Air Quality Sensor), "EM-002" (Energy Meter), "WM-003" (Water Flow Meter), and "AM-307" (IAQ Sensor).'

relations-from-building-to-office:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-building-to-office-1-pe.png
        title: 'Return to the "Assets" page and click on the "Building A" to open the details window. Navigate to the "Relations" tab, ensure the direction is "From", and click the "plus" icon to add new relation;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-building-to-office-2-pe.png
        title: 'Select the type "Assets", and specify "Office A" and "Office B" in the list of entities. Click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-building-to-office-3-pe.png
        title: 'Now you can see the created outbound relations of Building A.'

relations-from-office-to-device-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-office-to-device-1-pe.png
        title: 'Click on "Office A" and navigate to the "Relations" tab. Ensure the direction is "From" and click the "plus" icon;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-office-to-device-2-pe.png
        title: 'Select the type "Device" and specify "SD-001" (Indoor Air Quality Sensor), "EM-002" (Energy Meter), and "WM-003" (Water Flow Meter) in the list of entities. Click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-office-to-device-3-pe.png
        title: 'Now your devices are "related" to "Office A" asset;'

relations-from-office-to-device-2:
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/relations-from-office-to-device-4-pe.png
        title: 'Similarly, establish relation between the "AM-307" (IAQ Sensor) device and "Office B" asset.'

adding-dashboard:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/dashboard-group-1-pe.png
        title: 'Go to the "Dashboards" page and navigate to the "Groups" tab. Click the "plus" icon to create a new dashboard group. Name it "Buildings" and click "Add";'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/dashboard-group-2-pe.png
        title: 'Open the created dashboard group;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-dashboard-1-pe.png
        title: 'Click the "plus" icon in the upper-right corner of the screen to add new dashboard. Enter the title for the dashboard - "Buildings" and click "Add";'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-dashboard-2-pe.png
        title: 'Your first dashboard has been successfully added. It will open automatically after adding. Save the dashboard by clicking the "Save" button in the upper-right corner of the screen.'

adding-buildings-images:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/upload-buildings-images-1-pe.png
        title: 'Go to the "Image gallery" page in the "Resources" section. To upload a new image, click the "Upload image" button in the top-right corner of the screen;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/upload-buildings-images-2-pe.png
        title: 'Select an image for Building A or simply drag it to the "Upload image" window and click "Upload" button;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/upload-buildings-images-3-pe.png
        title: 'The image for Building A has been uploaded. Similarly, upload the image for Building B.'

embed-buildings-images:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/embed-buildings-images-1-pe.png
        title: 'After uploading, click the "Embed image" icon next to each building&#39;s image;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/embed-buildings-images-2-pe.png
        title: 'Note down the unique links provided for these images. These will be used later in the buildings&#39; attributes.'
    
adding-building-attributes-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-1-pe.png
        title: 'Go to the "Assets" page and click on the "Building A" to open its details window. Navigate to the "Attributes" tab and click the "plus" icon to add new attribute;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-2-pe.png
        title: 'We&#39;ll start with the coordinates for Building A: enter "latitude" as the key name, select "Double" as the value type, and input the latitude coordinates. Click "Add";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-3-pe.png
        title: 'Click the "plus" icon again to add another attribute. Enter "longitude" as the key name, select the "Double" as the value type, and input the building&#39;s longitude coordinates. Click "Add";'

adding-building-attributes-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-4-pe.png
        title: 'Add the "address" attribute with the appropriate value for Building A;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-5-pe.png
        title: 'Add the "email" attribute with the appropriate value for Building A;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-6-pe.png
        title: 'Add the "phone" attribute with the appropriate value for Building A;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-7-pe.png
        title: 'Add the "buildingImage" attribute. Use the link to the image of Building A as the value;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-8-pe.png
        title: 'Add the "contactPerson" attribute with the appropriate value for Building A.'
      
adding-building-attributes-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-9-pe.png
        title: 'Your attributes list for Building A should look like the one on the screen.'

adding-building-attributes-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-server-attributes-10-pe.png
        title: 'The attributes list for Building B should look like the one on the screen.'

adding-maps-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-1-pe.png
        title: 'Open the "Buildings" dashboard that you have created. Click the "Add widget" button at the top of the screen or click the large "Add new widget" icon in the center of the screen (if this is your first widget on this dashboard);'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-2-pe.png
        title: 'Find the "Maps" widgets bundle and click on it;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-3-pe.png
        title: 'Select the "OneStreet Map" widget;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-4-pe.png
        title: 'Now we need to add an alias to define the entities from which the data will be extracted. In the "Alias" field, enter a name for it - "Buildings", and click "Create a new one";'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-5-pe.png
        title: 'Select a filter type - "Asset type". Then specify the "buildings" asset type and click the "Add" button in the lower right corner. This alias will display all assets of the "buildings" type in the widget;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-6-pe.png
        title: 'In the widget settings, add the following attributes as data keys: "latitude", "longitude", "address", "email", "phone", and "buildingImage";'

adding-maps-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-7-pe.png
        title: 'Navigate to the "Appearance" tab and change OpenStreet map provider to "CartoDB.Positron";'

adding-maps-widget-3:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-8-pe.png
        title: 'Scroll to the "Label" section. Add the label to the appropriate field by taking it from the documentation;'

adding-maps-widget-4:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-9-pe.png
        title: 'A little further down, find the "Tooltip" section. Turn on the "Use tooltip function" option, and add tooltip function by taking it from the documentation;'

adding-maps-widget-5:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-10-pe.png
        title: 'In the "Marker image" section, turn off the "Use marker image function" option and add a custom marker image. To do this, click "Browse from gallery" and choose a new marker image (upload your own marker image or use an example image);'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-11-pe.png
        title: 'Set the marker image size to 60 pixels. Then, navigate to the "Widget card" tab;'

adding-maps-widget-6:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-12-pe.png
        title: 'In the "Card style" section, turn off the "Display widget title" option;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-13-pe.png
        title: 'Set the padding value to "0" and click "Advanced widget style" row to open it;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-14-pe.png
        title: 'Copy the CSS from the documentation and paste it into the "Widget CSS" section;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-15-pe.png
        title: 'Turn off the "Enable data export" option, and click "Add" to confirm editing widget.'

adding-maps-widget-7:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-16-pe.png
        title: 'Congratulations, we have added your first widget, that displays our two buildings. Move the widget to the top-right corner of the dashboard and resize it by grabbing any corner and dragging it. After adjusting the placement and size of the widget, click the "Save" button in the top-right corner to save the dashboard.'

adding-maps-widget-8:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-maps-widget-17-pe.png
        title: 'Now click on any building image to display a tooltip with information about it.'

adding-entities-table-widget-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-1-pe.png
        title: 'Switch to dashboard editing mode by clicking the "Edit mode" button on the toolbar on the right;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-2-pe.png
        title: 'Click the "Add widget" button at the top of the screen;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-3-pe.png
        title: 'Find the "Tables" widget bundle and click on it;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-4-pe.png
        title: 'Select the "Entities table" widget;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-5-pe.png
        title: 'In the "Datasources" section, switch to the "Entity alias" option and specify the previously created alias "Buildings" as the data source. Furthermore, add the "address" key in the "Columns" section;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-6-pe.png
        title: 'Change the card title to "Buildings list", uncheck all buttons of the "Show card buttons" section, and click "Add";'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-7-pe.png
        title: 'Resize the "Entities table" widget to your liking. Afterwards, save the dashboard.'

adding-entities-table-widget-2:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/adding-entities-table-widget-8-pe.png
        title: 'Now on our dashboard, we have two widgets: the first widget displays the locations of our buildings on the map, and the second one lists the buildings.'

background-image-building-state:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-1-pe.png
        title: 'To customize the layout of the dashboard, enter it edit mode and click the "Manage layouts" button located in the upper-left corner of the dashboard toolbar;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-2-pe.png
        title: 'A window for layout management will appear. Here, locate and click on the "gear" icon, labeled "Layout settings". This action opens the layout settings window;'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-3-pe.png
        title: 'Scroll to the "Background image" section within the settings. Click "Browse from gallery" to open the image selection interface;'
    3:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-4-pe.png
        title: 'If your desired image is not already uploaded, click the "Upload image" button found in the top-right corner of the Image gallery window;'
    4:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-5-pe.png
        title: 'You can either drag and drop an image into the designated field or select an image to upload from a folder on your computer. Once selected, an image preview will display, allowing you to ensure it&#39;s the correct choice before proceeding. Confirm the upload by clicking the "Upload" button. Your new image will now be a part of the Image gallery;'
    5:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-6-pe.png
        title: 'Save your new layout settings to apply the background image to the "Buildings" state of your dashboard;'
    6:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-7-pe.png
        title: 'Confirm all changes by clicking the "Save" button located in the lower-right corner of the settings window;'
    7:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/background-image-8-pe.png
        title: 'Ensure that the background of your dashboard has been updated.'

dashboard-settings-css:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/dashboard-settings-css-1-pe.png
        title: 'Click the "Settings" button in the dashboard toolbar;'
    1:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/dashboard-settings-css-2-pe.png
        title: 'Scroll to the "Advanced settings" section and add the CSS to the "Dashboard CSS" section as shown in the screenshot. Click "Save";'
    2:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/dashboard-settings-css-3-pe.png
        title: 'As you can see, the widget corners are now rounded, and the background is slightly transparent. Save the dashboard by clicking the "Save" button in the upper-right corner of the page.'

dashboard-final-lesson-1:
    0:
        image: /images/user-guide/advanced-guides-for-working-with-dashboard/lesson-1/lesson-1-pe.png

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/advanced-guides-for-working-with-dashboard/advanced-dashboard-guide-lesson-1.md %}