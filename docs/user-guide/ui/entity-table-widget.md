---
layout: docwithnav
assignees:
- ashvayka 
title: Advanced Settings of the Entities Table Widget
description: Advanced Settings of the Entities Table Widget
  
---

* TOC
{:toc}

## Introduction

Advanced Settings of the Entity Table widget allows:

- [Adjusting the Title of the widget](#the-table-title);
- [Altering the columns](#the-column-settings);
- [Setting up the pagination](#the-pagination);
- [Configuring data sorting](#sorting-the-data-in-the-table-widget).

To enter the Advanced mode and start adjusting the settings above, you should start by clicking on the Pencil icon ("Enter edit mode") at the bottom right of the screen:
![image](/images/user-guide/ui/widgets/entitywidget-advanced/enter-the-advncd.png)

After, click on the Pencil icon ("Edit widget") at the upper right corner of the Entity Table widget itself:
![image](/images/user-guide/ui/widgets/entitywidget-advanced/pencil-edit-enter.png)

Then, go to the Advanced cell:
![image](/images/user-guide/ui/widgets/entitywidget-advanced/entitytable-advncd.png)

## 1. the Table Title

ThingsBoard doesn't have any restrictions associated with the name, both in symbols and character limit. 
Nevertheless, in case the title is too long, it won’t be shown completely on the Entity Table widget, but it will be finished with the three dots. 
However, after applying the changes and opening the widget in fullscreen mode, you will be able to see the full name of the widget.
For example let’s use something simple for the title like “The Name of the Widget”.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/table-widgetname-advncd.png)

After clicking on the orange checkmark in the upper right corner, the changed title will become visible.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/namechanged-table-advncd.png)

## 2. The Columns Settings

These checkboxes allow you to customize the ability to search entities in the widget as well as the ability to select the columns you want to display, 
and the display of an entity name column.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/table-name-options.png)

### 2.1. Entity Column Title

You can change the title of the Column by inputting the text for it in the appropriate line:

![image](/images/user-guide/ui/widgets/entitywidget-advanced/appropriate-line-clumn-title.png)

After clicking on the orange checkmark in the upper right corner, the changed Column Title will be seen.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/column-name-changed.png)

### 2.2. Displaying an entity label column

When the checkbox “Display entity label column” is checked, you are receiving an opportunity to add the label column and name it.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/lanelcolumn-name-input.png)

After clicking on the orange checkmark in the upper right corner, the label column with the custom name will appear in the widget.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/labelcolumn-added.png)

### 2.3. Displaying an entity type column

The checkbox "Displaying entity type column" is responsible for appearing/hiding the appropriate column. 
The Entity type column is shown by default, but you can disable this feature by unchecking the box, therefore it will be hidden.
To apply changes click on the orange checkmark in the upper right corner.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/entitytypecolumn-notabletosee.png)

## 3. The Pagination

By default, the Widget shows how many items per page can be visible and how many pages there are in general. 
The displaying of this information is optional. It changes by checking/unchecking the box called “Display pagination”. 
If the box will be unchecked the information about items per page and number of pages won’t be displayed.
To apply the changes click on the orange checkmark in the upper right corner.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/paggination-off.png)


**Please, note:** to understand the next settings, we need to check the “Display pagination” box back to see the number of items per page.

### 3.1. The page size

The page size by default is set to 10 items per page. 
If you need to change this number you can type the digits manually or use the arrows at the end of the line to do it for you.
To apply the changes click on the orange checkmark in the upper right corner. Now, there will be 15 items per page as is shown on our Table Widget.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/paggination15.png)

To apply the changes click on the orange checkmark in the upper right corner. Now, there are 15 items per page as it is shown on the Entity Table Widget.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/15done.png)

## 4. Sorting the data in the Table Widget

### 4.1. The default sorting order

The default sorting order for the data in the Table widget is ascending. 
If the values in the column are lowercase (for example entityName/entityType), then sorting will be done according to the rules of alphabetical order.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/sortingorder-name.png)

If you’d like to sort the data, for instance, by the telemetry data key type (temperature, humidity, etc.), 
you can do this by inputting the name of your value in the Default sort order line. 
In the example, the temperature is used, so it looks like this:

![image](/images/user-guide/ui/widgets/entitywidget-advanced/temperature.png)

As was mentioned, the default sort order is ascending.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/ascendingorder.png)

### 4.2. The descending sorting order 

If you need to make the sort order descending, 
you should type the **“-” (minus)** symbol in front of the data key name in the Default sort order line.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/descending-minus.png)

Be sure to click on the orange checkmark in the upper right corner to apply the changes to see the difference. 
Now, the telemetry data is sorted in the descending order we needed.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/descending-done.png)


## Saving the changes

For the changes to be applied and saved, you necessarily need to click on the orange checkmark in the bottom right corner of the screen.

![image](/images/user-guide/ui/widgets/entitywidget-advanced/saving-changes.png)

After doing this, you can be positively sure that the changes to the Table Widget are applied and saved correctly. 


