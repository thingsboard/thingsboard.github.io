---
layout: docwithnav
assignees:
- ashvayka
title: Entity Views
description: IoT device and asset entity views
redirect_from: "/docs/user-guide/ui/entity-views"
---

* TOC
{:toc}

## Feature Overview

ThingsBoard(TB) Entity Views (EVs) are available since v2.2. This feature was requested by many TB users. 
Similar to SQL database views, that limit the degree of exposure of the underlying tables to the outer world, 
TB EVs limit the degree of exposure of the Device or Asset [telemetry](/docs/user-guide/telemetry/) and [attributes](/docs/user-guide/attributes/) to the [Customers](/docs/user-guide/ui/customers/).
As a Tenant Administrator, you are able to create multiple EVs per Device or Asset and assign them to different Customers.

Supported use cases:
 
 - **Share** specific device or asset data with multiple Customers simultaneously. Prior EVs feature it was not possible due to restrictions of TB security model.
 - Allow particular Customer users to see collected data (e.g. sensor readings) but **hide debug info** like battery level, system errors, etc.
 - Device-as-a-Service (**DaaS**) model where data collected by the device at different periods of time belongs to different Customers.

## Architecture

Entity View contains the following information:

 - **TenantId** - represents link to the owner of the view;
 - **CustomerId** - represents link to the customer that has access to the the view;
 - **EntityId** - represents link to the target device or asset;
 - **Name and type** - regular ThingsBoard entity fields that are used for display and search purposes;
 - **Start and end time** - represents time interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval; 
 - **Timeseries keys** - list of timeseries data keys that will be accessible to the viewer;
 - **Attribute keys** - list of attribute names that will be accessible to the viewer;

![image](/images/user-guide/entity-views/new-entity-view.png) 
 
It is important to understand how TB handles telemetry and attribute update and how this changes affect Entity Views.
  
#### Timeseries data view
 
All timeseries data is stored in the database on behalf of target entity. There is no timeseries data duplication to any of the Entity Views. 
When user opens a dashboard or perform a REST API call on behalf of the entity view id, the following actions take place:
     
 - Request start and end time stamps are validated and adjusted to fit into Entity View start and end time. 
 Thus, if Dashboard is trying to fetch 1 year of data, but EV is configured to access only 6 month of data.
 - Request timeseries data keys are validated and adjusted based on timeseries data keys provisioned in the Entity View.
 Thus, if Dashboard is trying to fetch the telemetry keys that are forbidden for this particular view, it will fail to do so. 
 
#### Attributes view
 
Entity View will automatically copy specified attributes from Target Entity each time you save or update this entity view. 
For performance reasons target entity attributes are not propagated to entity view on each attribute change. 
You can enable automatic propagation by configuring "copy to view" rule node in your rule chain and linking "Post attributes" and "Attributes Updated" 
messages to the new rule node. 
 
![image](/images/user-guide/entity-views/rule-chain.png) 

## Future improvements

There are following features in ThingsBoard Road Map:

 - Add ability to enable/disable RPC requests to the device view;
 - Add ability to configure list of alarms that are accessible(propagated) for particular view.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}



 


 
    
