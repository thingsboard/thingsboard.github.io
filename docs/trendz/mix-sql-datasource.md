---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Combine data from ThingsBoard and external databases
description: Combine data from ThingsBoard and external SQL databases to compute metrics and analyze trends.
---

* TOC
{:toc}

ThingsBoard is a reliable platform to manage your IoT entities – from devices and assets to customers and users. All these entities produce data: attributes and telemetry information, stored and organized neatly in the system.
Trendz lets you look at the data, calculate metrics, spot unusual patterns, and even predict what might happen next. But IoT solution is limited by data reported from sensors, there are other systems that can provide useful data for your business. 
To support such cases we updated Trendz to work with more than just ThingsBoard data. You can now also pull data from external SQL databases into Trendz. 
This means you can combine data from ThingsBoard with data from other systems and look at everything together in one place.

**For example:** if you have machine performance data in ThingsBoard and maintenance logs or factory production rates in an external SQL database, you can merge and analyze them together in Trendz. 

In this article, we'll show you how this new feature works, give you some examples of how it can be helpful, and walk you through the setup process step by step. Let’s get started!

## Add external SQL datasource
First step is to tell Trendz how to connect to your external SQL database.

* Got to **Settings** -> **External data sources**
* Click **Add new datasource** button
* Fill in the form with your database connection details like, url, login and password. For example
  * **URL**: `jdbc:postgresql://localhost:5432/externaldb`
  * **Login**: `postgres`
  * **Password**: `postgres`
* Save changes

## Define external Business Entity
Next step is to tell Trendz what data you want to pull from your external SQL database. Trendz has a concept of `Business Entity` that represents a group of ThingsBoard entities, like device/asset/customer. 
Trendz also supports 'external' business entities that are not stored in ThingsBoard, but in external SQL database. Note that business entity is not a single entity or row in the table, 
but a definition of a group of entities with same common parameters - type, attributes, telemetry fields. Finally, business entities are connected between each other with relations or foreign keys. All this information represent a `topology graph` in Trendz.

To add exeternal business entity in Trendz topology follow these steps:
* Go to **Business Entities** page in Trendz
* Click **Add business entity** button
* Configure `Criteria` tab
  * `Name` - name of the business entity 
  * `Entity type` = **EXTERNAL** - this is how Trendz knows that this business entity is not stored in ThingsBoard
  * `Datasource` - select datasource that you added in previous step
  * `Table` - type name of the table that should be used to pull data from
* Configure `Fields` tab
  * For each column in a table create a separate field under business entity
  * `Name` - name of the field
  * `Key` - column name in the table
  * `Query type` = **TELEMETRY**
  * For timestamp field in external table you must enable `Use Field as Telemetry Timestamp` checkbox

Finally, we need to tell Trendz how external Business Entity conencted with other entities in ThignsBoard. For example, if you have a table with `device_id` column, you can use it to connect external business entity with ThingsBoard devices.

* Configure `Relations` tab
  * Click **Add relation** button
  * `Name` - set name of the relation
  * `Direction` - set to **FROM**
  * `Selected business entity` - select related ThingsBoard business entity from the list
  * Enable created relation
* Save changes

## Security and data visibility
With the exciting capability to pull data from both ThingsBoard and external SQL tables into Trendz, it's essential that we address an important aspect: security and data visibility. 
Users should be confident that their data remains protected and is shown only to those with the right permissions. Here's how it works:

An external SQL table might have information for various entities in our system. When creating visualizations in Trendz that combine data from ThingsBoard and these external tables, we prioritize ensuring that users only see what they're allowed to see.
ThingsBoard already has a system in place where specific user permissions are set for each entity. Trendz taps into these permissions. 
Because Trendz understands how the external SQL table links to entities in ThingsBoard, it can smartly filter data from the external sources.

To give a clearer picture, consider this: Let's say we have an external SQL table storing maintenance history for every machine in a factory. 
Each of these machines is also registered as an entity in ThingsBoard. 
Now, if certain users are only given access to specific machines in ThingsBoard, when they view a Trendz visualization that combines machine data and maintenance history, they'll only see the maintenance details for the machines they have access to.

In this case, if we want to see what was an average maintenance period for factory equiment, Trendz will provide us with an average value based on the data that we have access to. 
In essence, this setup ensures that data remains secure and visible only to the right eyes, maintaining a seamless and trusted user experience.

## Data grouping and aggregation
In this part we want to explain how Trendz mix data from ThignsBoard and external SQL datasources. To make it we will use a simple example: 
Imagine you want to see a report showing the total maintenance duration for each type of equipment maintenance, broken down monthly for the past year. 
We already have `Equipment` entity in ThingsBoard and `Maintenance` entity in external SQL database. And we alredy configured Trendz topology graph to connect these two entities via relation.

To build such report we need to create a new visualization in Trendz, probably stacked bar chart nad add following fields into it:
* Equipment serial number (from ThingsBoard) set to `uniq` aggregation.
* Maintenance type (a text column from an external SQL table) with `uniq` aggregation.
* Duration (an integer column from the same external SQL table) with `sum` aggregation.

Here is a simplified process how Trendz will build this report:
* Fetch list of equipment entities form ThignsBoard that are visible to current user.
* Build SQL query to fetch data from external SQL table. This query will have `WHERE` clause to filter data only for equipment entities that we fetched from ThingsBoard.
* Add configured filter conditions, time grouping and aggregation functions to the query.

Final query will look like this:
```sql
SELECT
  date_trunc('month', start_at) AS month_start,
  maintenance_type,
  SUM(duration) AS total_duration
FROM
  maintenance_history
WHERE
  equipment_id IN (:ids)
  AND start_at > '2022-01-01'
  AND start_at < '2023-01-01'
GROUP BY
  maintenance_type,
  date_trunc('month', start_at);
```

## Save incoming telemetry from ThingsBoard into external SQL table
Certain telemetry formats can be difficult to fetch for reporting. At times, retrieving and aggregating data can consume a lot of time, affecting performance. 
One effective solution is to utilize external SQL tables. ThingsBord Rule Engine is a palce where we define how incoming telemetry streams are processed in the ssytem. 
By duplicating the incoming telemetry from Rule Engine into custom SQL table, we ensure the data is in an easily accessible format and properly configured indexes further enhance data fetching speeds.
By registering this table as external business entity in Trendz, we can build reports faster, and utilize the flexibility Trendz offers for data visualization and analysis.

Here is a brief concept how to make it happen:
* Transform and Enrich Incoming Data: Before storing, enhance inciming telemetry event in ThingsBoard Rule Engine to suit your reporting needs.
* Create custom rule node in Rule Engine: This node's job will be to save the telemetry data into the external SQL table.
* Migrate historical data into the external SQL table: This step is optional, but if you want to build reports on historical data that you already have, you'll need to migrate it into the external SQL table.