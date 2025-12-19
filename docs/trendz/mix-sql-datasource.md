---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Combine data from ThingsBoard and external databases
description: Combine data from ThingsBoard and external SQL databases to compute metrics and analyze trends.

settings-add:
  0:
    image: /images/trendz/datasource/external-datasources-settings-add-1.png
    title: 'Go to <b>Settings</b>, then the <b>System</b> tab, under the <b>External Data Source</b> section, click <b>Add new data source</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-settings-add-2.png
    title: 'Fill in the form with your database connection details and click the <b>Save</b> button.'

settings-see:
  0:
    image: /images/trendz/datasource/external-datasources-settings-see-1.png
    title: 'Under the <b>External Data Source</b> section, click <b>See all data sources</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-settings-see-2.png
    title: 'Here you will see a table with two columns: <b>Data Source URL</b>, <b>Database type</b> and <b>Actions</b>.'

settings-delete:
  0:
    image: /images/trendz/datasource/external-datasources-settings-delete-1.png
    title: 'Under the <b>External Data Source</b> section, click <b>See all data sources</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-settings-delete-2.png
    title: 'Click the three dots under the <b>Actions</b> column and click <b>Delete</b>.'
  2:
    image: /images/trendz/datasource/external-datasources-settings-delete-3.png
    title: 'External datasource was deleted successfully.'

settings-edit:
  0:
    image: /images/trendz/datasource/external-datasources-settings-edit-1.png
    title: 'Click the three dots under the <b>Actions</b> column and click <b>Edit</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-settings-edit-2.png
    title: 'Edit URL/Database Type/Login/Password. Click <b>Save</b>. Confirm the update, verifying which entities would be affected.'
  2:
    image: /images/trendz/datasource/external-datasources-settings-edit-3.png
    title: 'If the database connection is established, you will see a success message; otherwise, you will see an error message.'
  
db-data:
  0:
    image: /images/trendz/datasource/external-datasources-db-data.png
    title: 'Demo data from "building_consumption" table.'

step-1:
  0:
    image: /images/trendz/datasource/external-datasources-step-1-1.png
    title: 'Go to the <b>Business Entities</b> section and click <b>Add Business Entity</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-step-1-2.png
    title: 'Enter <b>Name</b>, <b>Table Name</b>, <b>Entity Type</b> and <b>Datasource</b>.'

step-2:
  0:
    image: /images/trendz/datasource/external-datasources-step-2-1.png
    title: 'Go to the <b>Fields</b> section and click <b>Add field</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-step-2-2.png
    title: 'Enter <b>Name</b>, <b>Field Type</b>, <b>Query Type</b>, <b>Key</b> and set <b>Use Field as Business Entity Key</b>.'

step-3:
  0:
    image: /images/trendz/datasource/external-datasources-step-3-1.png
    title: 'Click <b>Add field</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-step-3-2.png
    title: 'Enter <b>Name</b>, <b>Field Type</b>, <b>Query Type</b>, <b>Key</b> and set <b>Use Field as Telemetry Timestamp</b>.'

step-4:
  0:
    image: /images/trendz/datasource/external-datasources-step-4-1.png
    title: 'Click <b>Add field</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-step-4-2.png
    title: 'Enter <b>Name</b>, <b>Field Type</b>, <b>Query Type</b> and <b>Key</b> for <b>heat_consumption</b> column.'
  2:
    image: /images/trendz/datasource/external-datasources-step-4-3.png
    title: 'Enter <b>Name</b>, <b>Field Type</b>, <b>Query Type</b> and <b>Key</b> for <b>energy_consumption</b> column.'

step-5:
  0:
    image: /images/trendz/datasource/external-datasources-step-5-1.png
    title: 'Go to the <b>Relations</b> section and click <b>Add relation</b>.'
  1:
    image: /images/trendz/datasource/external-datasources-step-5-2.png
    title: 'Enter <b>Name</b>, <b>Direction</b>, <b>Selected Business Entity</b> and set <b>Enabled</b>.'
  2:
    image: /images/trendz/datasource/external-datasources-step-5-3.png
    title: 'Click <b>Save</b>.'

step-6:
  0:
    image: /images/trendz/datasource/external-datasources-step-6-1.png
    title: 'Go to the home page. Click <b>Create View</b> and choose the <b>Table</b> view type.'
  1:
    image: /images/trendz/datasource/external-datasources-step-6-2.png
    title: 'Drag and drop the business entity name field associated with the external business entity into the column section (<b>EM building</b>).'
  2:
    image: /images/trendz/datasource/external-datasources-step-6-3.png
    title: 'Drag and drop any field from the external business entity into the column section (<b>energy_consumption</b>).'
  3:
    image: /images/trendz/datasource/external-datasources-step-6-4.png
    title: 'Select date range with data.'
  4:
    image: /images/trendz/datasource/external-datasources-step-6-5.png
    title: 'Click <b>Build Report</b>.'

---

* TOC
{:toc}
 
## Overview

The external datasource features are designed for:

* **Performance optimization**:

  * Significantly reducing load on ThingsBoard.
  * Increasing the speed of visualization builds.
  * Optimizing Trendz resource usage, allowing more data to be shown without adding additional RAM to Trendz.
* **Third-party integrations**:

  * Ability to integrate with data outside the ThingsBoard system.

## External Datasource Table Format

Currently, Trendz supports the following database providers:

* PostgreSQL (version 9.4+)
* MySQL (version 5.0+)
* MSSQL (version 2016+)
* Oracle (version 9i+)

Trendz can use a table from this datasource if:

1. The table contains a column with the Device/Asset ID.
2. The table contains a column with a bigint timestamp in ms.
3. All other columns can have any format.

## Manage External SQL Datasource

The first step is to tell Trendz how to connect to your external SQL database.

### Add External SQL Datasource

To add a new external SQL datasource:

* Go to **Settings**, then the **System** tab.
* Under the **External Data Source** section, click **Add new data source**.
* Fill in the form with your database connection details:

  * URL in JDBC format
  * Database Type
  * Login
  * Password
* Click the **Save** button.

If a database connection is established, you will see a success message; otherwise, you will see an error message.

{% include images-gallery.html imageCollection="settings-add" %}

### See All External Datasources

To see all external datasources:

* Go to **Settings**, then the **System** tab.
* Under the **External Data Source** section, click **See all data sources**.

Here you will see a table with three columns: **Data Source URL**, **Database type** and **Actions**.

{% include images-gallery.html imageCollection="settings-see" %}

To delete an external datasource:

* Click the three dots under the **Actions** column.
* Click **Delete**.
* Confirm the deletion, verifying which entities would be affected.

{% include images-gallery.html imageCollection="settings-delete" %}

To edit an external datasource:

* Click the three dots under the **Actions** column.
* Click **Edit**.
* Edit URL/Database Type/Login/Password.
* Confirm the update, verifying which entities would be affected.

If the database connection is established, you will see a success message; otherwise, you will see an error message.

{% include images-gallery.html imageCollection="settings-edit" %}

## Define External Business Entity

To use tables from external data sources, you need to add an external business entity.
You can read more about business entities [here](/docs/trendz/business-entities).

Here are 6 simple steps to create such a business entity:

For demonstration purposes, we will create an external business entity to pull data from the following PostgreSQL table:

```sql
CREATE TABLE IF NOT EXISTS building_consumption (
    id UUID PRIMARY KEY,
    building_id UUID NOT NULL,
    heat_consumption BIGINT NOT NULL,
    energy_consumption BIGINT NOT NULL,
    ts BIGINT NOT NULL
);
```

{% include images-gallery.html imageCollection="db-data" %}

### Step 1: Add External Business Entity

* Go to the **Business Entities** section.
* Click **Add Business Entity**.
* Enter any name that you want to see in the left section (*Building Consumption Data*).
* Set **Entity Type** to "External".
* Enter the table name from which you want to retrieve data (*building_consumption*). Note: table names are case-sensitive.
* Choose the datasource from which you want to retrieve data.

{% include images-gallery.html imageCollection="step-1" %}

### Step 2: Add Key Entity Field

* Go to the **Fields** tab.
* Click **Add field**
* Enter any name that you want to see in the fields section (*Building ID*).
* Choose **String** as the field type.
* Choose **Attribute** as the query type.
* In the Key field, enter the column name that contains Device/Asset IDs from the specified table (*building_id*). Note: column names are case-sensitive.
* Check the box **Use Field as Business Entity Key**.

{% include images-gallery.html imageCollection="step-2" %}

### Step 3: Add Timestamp Entity Field

* Click **Add field**.
* Enter any name that you want to see in the fields section (*Timestamp*).
* Choose **Numeric** as the field type.
* Choose **Telemetry** as the query type.
* In the Key field, enter the column name containing the timestamp in ms for the data from the specified table (*ts*). Note: column names are case-sensitive.
* Check the box **Use Field as Telemetry Timestamp**.

{% include images-gallery.html imageCollection="step-3" %}

### Step 4: Add Other Telemetry Entity Fields

* Click **Add field**.
* Enter any name that you want to see in the fields section (*Heat Consumption* / *Energy Consumption*).
* Choose the appropriate field type for the data.
* Choose **Telemetry** as the query type.
* In the Key field, enter the column name of the data you want to use from the specified table (*heat_consumption* / *energy_consumption*). Note: column names are case-sensitive.

Repeat Step 4 as many times as you need to add columns.
To remove the current field, click the delete button in the upper-right corner.
You can read more about the business entities tab [here](/docs/trendz/business-entities).

{% include images-gallery.html imageCollection="step-4" %}

### Step 5: Add Relations to ThingsBoard Business Entity

* Go to the **Relations** tab.
* Click **Add relation**.
* Enter any name (*External*).
* Set direction to **TO**.
* Select the business entity you want to connect the external business entity with, the key column from Step 2 should contain the ID of the device/asset associated with the chosen business entity (*EM building*).
* Check the **Enabled** box.
* Click **Save**.

{% include images-gallery.html imageCollection="step-5" %} 

### Step 6: Verify by Building a Simple View

Now you can create views associated with the external business entity.
Note: in the view, it is necessary to use at least one entity from ThingsBoard.

You can build the simplest view to verify that everything is set up properly:

* Go to the home page.
* Click **Create View** and choose the **Table** view type.
* Drag and drop the business entity name field associated with the external business entity into the column section (*EM building*).
* Drag and drop any field from the external business entity into the column section (*energy_consumption*).
* Select date range with data.
* Click **Build Report**.

If the view is successfully built, then the external business entity was successfully set up.
If any errors occur during the build, please validate Steps 1–6.

**Important to highlight:** Trendz can use data from an external datasource only together with related data from ThingsBoard. It could be just item names or other data.

{% include images-gallery.html imageCollection="step-6" %}

## Security and Data Visibility

Trendz ensures that users only see data they are permitted to access. Data from external SQL tables is filtered based on asset/device IDs,
matching the permissions already set in ThingsBoard.

When combining ThingsBoard and external data in visualizations, Trendz uses the entity links to filter external data. 
For example, if an external table stores maintenance history for factory machines, users will only see maintenance details for machines they have access to in ThingsBoard.

This approach ensures data security and provides accurate insights based solely on accessible data.

## Next Steps
 
{% assign currentGuide = "" %}{% include templates/trndz-guides-banner.md %}
 