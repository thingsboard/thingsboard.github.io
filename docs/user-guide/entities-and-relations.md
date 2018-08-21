---
layout: docwithnav
assignees:
- ashvayka
title: Entities and Relations
description: IoT asset management using ThingsBoard entities and relations feature

---

* TOC
{:toc}

## Entities Overview

ThingsBoard provides the user interface and REST API to provision and manage multiple entity types and their relations in your IoT application.
ThingsBoard provides three types of entities:


<table>
  <thead>
      <tr>
          <td colspan="2"><strong>1- Business entities</strong></td>
      </tr>
  </thead>
  <tbody>
<tr>
          <td><b>Tenants</b></td>
          <td>You can treat the tenant as an independent business-entity: individual or organization that owns or produces devices and assets. Tenant may have multiple tenant administrator users and millions of customers.</td>
      </tr>
      <tr>
          <td><b>Customers</b></td>
          <td>The customer entity is also an independent business-entity: individual or organization that purchases or uses the tenant devices and/or assets. Customer may have multiple users and millions of devices and/or assets.</td>
      </tr>
      <tr>
          <td><b>Users</b></td>
          <td>Users are able to browse dashboards and manage entities.</td>
      </tr>
   </tbody>
</table>



<table>
  <thead>
      <tr>
          <td colspan="2"><strong>2. IoT Entities</strong></td>
      </tr>
  </thead>
  <tbody>
<tr>
          <td><b>Devices</b></td>
          <td>Basic IoT entities that may produce telemetry data and handle RPC commands from the server-side application to the device and vice versa, so you can send commands/requests to the device and receive data from it. For example sensors, actuators, switches.</td>
      </tr>
      <tr>
          <td><b>Assets</b></td>
          <td>Abstract IoT entities that may be related to other devices and assets. For example factory, field, vehicle.</td>
      </tr>
      <tr>
          <td><b>Alarms</b></td>
          <td>Triggered by the events that identify issues with your assets, devices or other entities.</td>
      </tr>
      <tr>
          <td><b>Dashboards</b></td>
          <td>To visualize your IoT data and enable you to control particular devices through user interface.</td>
      </tr>

   </tbody>
</table>


<table>
  <thead>
      <tr>
          <td colspan="2"><strong>3. Rule Engine Entities</strong></td>
      </tr>
  </thead>
  <tbody>
<tr>
          <td><b>Rule Node</b></td>
          <td>Processing units for the incoming messages, entity lifecycle events ... etc.</td>
      </tr>
      <tr>
          <td><b>Rule Chain</b></td>
          <td>Logic unit of the related Rule Nodes.</td>
      </tr>
   </tbody>
</table>



<table  style="width: 60%">
   <thead>
     <tr>
	 <td colspan="2"><strong><em>Note:</em> Each entity provided by ThingsBoard supports: </strong></td>
     </tr>
   </thead>
   <tbody>
      <tr>
          <td><b>Attributes</b></td>
          <td>Static and semi-static key-value pairs associated with entities. For example, serial number, model and firmware version.</td>
      </tr>
      <tr>
          <td><b>Telemetry data</b></td>
          <td>Time-series data points available for storage, querying and visualization. For example temperature, humidity and battery level.</td>
      </tr>
      <tr>
          <td><b>Relation</b></td>
          <td>Directed connections to other entities. For example, “contains”, “manages”, “owns” and “produces”.</td>
      </tr>
   </tbody>
</table>



Additionally, devices and assets have a type. This allows you to distinguish them and process data from them in a different way.

This guide gives you an overview for the features listed above, provides some useful links to get more details and shows you a real-life example about how to use these features.

## Real-life application

The easiest way to understand the concepts of ThingsBoard is to implement your first ThingsBoard application.
Let's assume we want to build an application that collects data from soil moisture and temperature sensors,
visualize this data on the dashboard, detect issues, raise alarms and control the irrigation.

Let's also assume we want to support multiple fields with hundreds of sensors. Fields may be also grouped by the Geo regions.

We believe the following logical steps should be used to build such application:

### Step 1: Provision entities and relations

We are going to set up the following hierarchy of assets and devices:


 ![image](/images/user-guide/entities-and-relations.svg)


The following video will show you how to provision the region and fields assets and their relations using ThingsBoard Web UI

<br>


<div id="video">
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/C-JoOfTBeT0" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<br>

The following video will show you how to provision devices and their relations with assets using ThingsBoard Web UI

<br>

<div id="video">
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/BUFinxvzIo4" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<br>

You can automate these actions using ThingsBoard REST API. You can provision the new asset using POST request to the following URL

```shell
http(s)://host:port/api/asset
```

For example:

{% capture tabspec %}create-asset
A,create-asset.sh,shell,resources/create-asset.sh,/docs/user-guide/resources/create-asset.sh
B,create-asset.json,json,resources/create-asset.json,/docs/user-guide/resources/create-asset.json{% endcapture %}
{% include tabs.html %}

**Note:** in order to execute this request, you will need to substitute **$JWT_TOKEN** with a valid JWT token.
This token should belong to a user with the **TENANT_ADMIN** role. You can use the [REST API Auth](/docs/reference/rest-api/#rest-api-auth) guide to get the token.

Also, you can provision the new relation using a POST request to the following URL

```shell
http(s)://host:port/api/relation
```

For example

{% capture tabspec %}create-relation
A,create-relation.sh,shell,resources/create-relation.sh,/docs/user-guide/resources/create-relation.sh
B,create-relation.json,json,resources/create-relation.json,/docs/user-guide/resources/create-relation.json{% endcapture %}
{% include tabs.html %}

**Note:** Don't forget to replace $FROM_ASSET_ID and $TO_ASSET_ID with valid asset ids.
**Note:** One can relate any entities. For example, assets to devices or assets to users.
You can receive them as a result of previous REST API call or use Web UI.


### Step 2: Assign attributes to assets

ThingsBoard provides the ability to assign attributes to entities and manage them.
This topic is covered in the [Working with device attributes](/docs/user-guide/attributes) guide.


### Step 3: Upload telemetry data from devices

ThingsBoard provides the ability to work with telemetry data for devices and other entities.
This topic is covered in the [Working with telemetry data](/docs/user-guide/telemetry) guide.

### Step 4: Creating Rules for Alarms

ThingsBoard provides the ability to raise alarms using rule engine for devices and other entities.
This topic is covered in the [Working with alarms](/docs/user-guide/alarms) guide.

### Step 5: Design your dashboard

Please [import](/docs/user-guide/ui/dashboards/#dashboard-import) the following [**dashboard**](/docs/user-guide/resources/region_fields_dashboard.json) that demonstrates Map, Alarm, Entity Table and Charts widgets.
