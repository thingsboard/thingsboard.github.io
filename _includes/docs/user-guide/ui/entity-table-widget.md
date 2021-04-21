
* TOC
{:toc}

## Introduction

Advanced settings of the Entities Table widget allows [adjusting the title of the widget](#1-entities-table-title), [changing visibility of objects on widget](#2-checkbox-settings), 
[customizing the columns](#3-the-columns-settings), [setting up the pagination](#4-the-pagination),
[sorting the data](#5-sorting-data-in-the-table-widget) and [changing style of widget rows](#6-row-style-function).

To enter the sdvanced mode and start adjusting the settings above, you should:

1. Clicking the "pencil" icon ("Enter edit mode") at the bottom right of the screen;
2. Click on the Pencil icon ("Edit widget") in the upper right corner of the Entity Table widget itself;
3. Go to the Advanced cell.

{% include images-gallery.html imageCollection="enter-advanced-mode" %}


## 1. Entities table title

ThingsBoard has no name restrictions, either in symbols or in a number of characters.
Nevertheless, in case the title is too long, it will not display completely in the Entity Table widget, but will be terminated with three dots.
However, after applying the changes and opening the widget in full-screen mode, you will be able to see the full name of the widget.
For example, let’s use something simple for the title like “The Name of the Widget”:

1. Enter the desired title in the title bar;
2. Click the orange checkmark in the upper right corner.

The title has become visible.

{% include images-gallery.html imageCollection="entities-table-title" %}

## 2. Checkbox settings

{% include images-gallery.html imageCollection="checkboxes" %}

- Enable entities search

If the checkbox is checked, the magnifying glass in the upper right corner of the widget allows you to search for widget entities.

{% include images-gallery.html imageCollection="entities-search" %}

- Enable select columns to display

If the checkbox is checked, the black bars in the upper right corner of the widget allow you to choose which columns you prefer to hide and which to display.

{% include images-gallery.html imageCollection="columns-to-display" %}

- Always display header

If the checkbox is checked, the widget header is always visible when we scroll through the list of entities. If the box is not checked, the widget header remains at the top.

{% include images-gallery.html imageCollection="display-header" %}

- Always display actions column

If the checkbox is checked, the row action cell is always visible when we scroll through the widget's telemetry. When unchecked, the row action cell remains at the end of the row.

{% include images-gallery.html imageCollection="actions-column" %}

- Display entity name column

If the checkbox is checked, the entity name column is visible. If it's unchecked, it will be hidden.

{% include images-gallery.html imageCollection="entity-name-column" %}

## 3. The columns settings

#### 3.1. Entity column title

To change the title of the column, you should:

1. Enter the text in the corresponding line;
2. Click the orange checkmark in the upper right corner.

An entity column title has been changed.

{% include images-gallery.html imageCollection="entity-column-title" %}

#### 3.2. Displaying an entity label column

If the checkbox “Display entity label column” is checked, you can add the label column and name it.
After clicking on the orange checkmark in the upper right corner, the label column with the custom name will appear in the widget.

{% include images-gallery.html imageCollection="entity-label-column" %}

#### 3.3. Displaying an entity type column

The checkbox "Displaying entity type column" is responsible for appearing/hiding the corresponding column.
By default, an entity type column is shown, but you can hide it by unchecking the box.
To apply changes click the orange checkmark in the upper right corner.

{% include images-gallery.html imageCollection="entity-type-column" %}


## 4. The Pagination

By default, the widget shows how many items per page can be visible and how many pages there are in general. Displaying this information is optional.
It changes by checking/unchecking the checkbox called “Display pagination”.
If the checkbox is disabled, the information about items per page and number of pages won’t be displayed.
To apply the changes, click the orange checkmark in the upper right corner.

{% include images-gallery.html imageCollection="paggination-off" %}

**Please, note** to understand the next settings, we need to enable the “Display pagination” checkbox to see the number of items per a page.

By default, **the page size** is set to 10 items per page.
If you need to change this number, you should:

1. Enter the numbers manually or use the arrows at the end of the line.
2. Click the orange checkmark in the upper right corner to apply the changes.

The page will now have the desired number of items as shown in our table widget.

{% include images-gallery.html imageCollection="page-size" %}

## 5. Sorting data in the table widget

By default, the data in the Table widget is sorted in ascending order.
If the values in the column are in lowercase (for example entityName/entityType), then the sorting will be done according to the alphabetical ordering rules.

{% include images-gallery.html imageCollection="sortingorder-name" %}

If you’d like to sort the data, for instance, by the telemetry data key type (temperature, humidity, etc.),
you can do this by inputting the name of your value in the default sort order row.
In the example, the temperature is used:

![image](/images/user-guide/ui/widgets/entitywidget-advanced/temperature.png)

As was mentioned, the default sort order is ascending. If you need to make the sort order descending, you should:

1. Type the **“-” (minus)** symbol in front of the data key name in the Default sort order line.
2. Be sure to click on the orange checkmark in the upper right corner to apply the changes to see the difference.

Now, the telemetry data is sorted in the descending order we needed.

{% include images-gallery.html imageCollection="sorting-data" %}

## 6. Row style function

Since version 3.2.2, the opportunity to change style of widget rows depending on their conditions appeared. Let's see how it works on the simple example:  
assume we need to observe which device is active and which is not. To make our mission easier, 


{% include images-gallery.html imageCollection="style-function" %}

```ruby
result = {background:"white"};
if (entity.active == "false") {
   result.background = '#00FF00';
} else {
   result.background = '#00f';
}
return result;
```

## 7. Saving changes

For the changes to be applied and saved, you have to click the orange checkmark in the lower right corner of the dashboard.

Then you can be sure that the changes to the table widget are applied and saved correctly.

{% include images-gallery.html imageCollection="saving-changes" %}


