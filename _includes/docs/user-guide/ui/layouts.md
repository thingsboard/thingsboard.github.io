* TOC
{:toc}

Dashboard layouts organize how widgets appear on the dashboard grid. 
Each dashboard state can have its own layout type, settings, and breakpoints, 
which helps create tailored visual presentations for different IoT use cases and screen resolutions.

To modify layouts for a specific [state](/docs/user-guide/dashboards/#states), follow these steps:

1. Enter [edit mode](/docs/user-guide/dashboards/#edit-mode) by clicking the "Edit" button.
2. Click the "Layouts" button located in the upper left corner of the dashboard window. This will open the layout management window.

   {% include images-gallery.html imageCollection="layout-1" %}

In the "Manage Layouts" window, you can select the layout type suitable for your needs:

- **Default**: A flexible, general-purpose layout.
- **SCADA**: Best suited for displaying SCADA HMIs (Human-Machine Interfaces).
- **Divider**: Useful for separating sections visually.

Breakpoints allow you to create responsive layouts that adapt to different screen sizes. 
You can add and configure breakpoints to ensure your dashboard looks perfect on any device.
Further details on setting up each layout type and configuring breakpoints will be discussed below.

## Layout types

The platform supports three layout types: Default, SCADA, and Divider. Each dashboard [state](/docs/user-guide/dashboards/#states) has exactly one layout type configured.

##### Default layout

The `Default` layout is a general-purpose layout that fits most dashboards. 
This layout type supports screen breakpoints for responsive design.

##### SCADA

The `SCADA` layout is designed for creating SCADA HMIs (Human-Machine Interfaces). 
SCADA HMIs typically consist of scalable widgets called SCADA symbols. 
However, you can also combine SCADA symbols with over 500 existing ThingsBoard [widgets](/docs/user-guide/widgets/) on the same layout. 
This layout type also supports screen breakpoints for responsive design.

##### Divider

The legacy `Divider` layout lets you split one `Default` layout into two sub-layouts: left and right. 
You can configure the width of these sub-layouts using either a fixed pixel value or a percentage of the screen width. 
Most layout parameters available for the `Default` layout are also supported by the sub-layouts. 
However, sub-layouts do not support breakpoints at this time.

## Breakpoints

Breakpoints were introduced in ThingsBoard 3.7.1. 
They allow you to define different layout settings and widgets based on the screen width of the end-user.

Each dashboard [state](/docs/user-guide/dashboards/#states) has a `Default` breakpoint. 
This layout is used if no other breakpoints match the current screen resolution.

You can define the following breakpoints:

* Desktop (xl) - min 1920px, max 5000px;
* Desktop (lg) - min 1280px, max 1919px;
* Laptop (md) - min 960px, max 1279px;
* Tablet (sm) - min 600px, max 959px;
* Mobile (xs) - max 599px;

##### Adding a Breakpoint

To add a breakpoint, open the "Manage Layouts" window and click the '+' button in the breakpoints table. 
When adding a new breakpoint, you can select the corresponding screen resolution and copy both widgets and layout settings from another breakpoint.

TODO: screens

You can click the "gears" icon to open the layout settings for that breakpoint.

{% include images-gallery.html imageCollection="layout-2" %}

You can also click the "waste-bin" icon to delete a breakpoint.

TODO: screens

##### Switching between Breakpoints

When a user opens the dashboard, the appropriate breakpoint layout is automatically selected based on the screen resolution.

When editing the dashboard, users can switch between layouts using the combobox located in the top-left corner of the screen.

TODO: screens

##### Breakpoints demo dashboard

We have prepared a demo dashboard with all possible breakpoints configured. 
This playground dashboard allows you to switch between different breakpoints in edit mode. 
You can also change the screen resolution in your browser's developer tools to see how layouts change when crossing certain screen resolution breakpoints.

[//]: # (TODO: link to the dashboard.json)

See how the same dashboard looks on different screen types:

[//]: # (TODO: gallery with dashboard screenshots)

##### Widget References vs Widget Copies

**Widget References**

When working with multiple breakpoints, it's important to understand the difference between a widget reference and a widget copy.

By default, when a new breakpoint layout is created, all widgets from the source layout are copied by reference. 
For example, if two breakpoints—Default and Desktop (xl)—reference the same chart widget, any changes made to the widget configuration will be synchronized between both layouts. 
However, changes to the widget's position and size are independent for each layout.

In edit mode, you can identify a referenced widget by the presence of a "Reference" button in the widget's edit panel.

TODO: Two screens of the same widget on two different layouts, based on the "layout test" dashboard, highlighting the breakpoint and the "Reference" button. Link to download the test dashboard.

To copy a widget by reference, right-click on the widget and select "Copy reference" (Ctrl+R):

[//]: # (TODO: screen)

To paste the widget as a reference in another breakpoint layout, right-click on the empty space and select "Paste reference" (Ctrl+I).

[//]: # (TODO: screen)

**Widget Copies**

A widget copy is a complete and independent copy of the widget configuration. Changes made to the copied widget will not affect the original widget.

To copy a widget, right-click on the widget and select "Copy" (Ctrl+C):

[//]: # (TODO: screen)

To paste the widget in another breakpoint layout, right-click on the empty space and select "Paste" (Ctrl+V).

[//]: # (TODO: screen)

## Layout settings

*Columns count*

While editing the Dashboard, specifically the size and space of your widgets, you can notice a whitish grid on a gray background.
These are columns that determine how many widgets can fit horizontally on a Dashboard.
By default, the number of columns is 24. You can increase or decrease their number. The minimum number of columns is 10. The maximum number is 1000 columns.

{% include images-gallery.html imageCollection="columns" %}

*Margin between widgets*

This margin type determines how much space is between widgets.
By default, the margin is set to 10. You can remove it by setting the _Margin between widgets_ field to 0 or increasing the margin, meaning the distance between widgets. The maximum allowable margin is 50.

{% include images-gallery.html imageCollection="margin" %}

*Auto fill layout height*

By default, the _Auto fill layout height_ checkbox is unchecked so that you can freely adjust the size of the widgets.
If you tick this option, all the widgets on the Dashboard will fill in vertically in the space of the screen.

{% include images-gallery.html imageCollection="autofill" %}

*Background color*

The Background color option allows you to customize the color that you'd like to be on the Dashboard's background.
To change it, click on the background color row. In the pop-up window with sliders choose the needed color and wished transparency. Then, press "Save" to apply changes.
After saving, you can see the customized background.

{% include images-gallery.html imageCollection="background-settings" %}

*Background image*

This option allows setting the picture as a background. To do this, you should drop an image in the appropriate field, or upload it from a folder on your computer.
Once you select it, an image preview will appear on the left of the Settings window.
To adjust the position of the image more precisely, click the drop-down menu and choose how exactly the picture will fill the background space.
For instance, let's choose "Cover" and click "Save" to see how the background has changed.

{% include images-gallery.html imageCollection="background-image" %}

*Mobile layout settings*

By default, the *Auto fill layout height* checkbox is unchecked so that you can freely adjust the size of the widgets on your mobile device.
If you tick this option, all the widgets on the Dashboard will fill in vertically in the space of the screen.

*Mobile row height* determines how tall you’d like your widgets to be on your mobile device.
By default, the height is set to 70px, but you can make it smaller or larger. The minimum Mobile row height is 5px, and the maximum allowable value is 200px.
<br>

#### Divider

If we toggle the "Divider" checkbox, we divide the dashboard into two separate parts. For each part, we are able to configure their own settings and interface.

{% include images-gallery.html imageCollection="layout-3" %}

Just to see how it can look like, let's set up both layouts in completely different ways.
Let's add a background image to the left layout and apply a new background color to the right layout.
And we resize the window in a certain percentage ratio to each other (it is just an example and definitely not a recommendation).
After setting the parameters, click the "Save" button in the Layouts window to see the changes.
After setting the parameters, click the "Save" button in the Layouts window to see the changes.

{% include images-gallery.html imageCollection="layout-4" %}