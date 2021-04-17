---
layout: docwithnav-edge
assignees:
- ababak
title: Edges
description: ThingsBoard IoT Edge management

---


ThingsBoard support following edge management features using Web UI and [REST API](/docs/reference/rest-api/).

* TOC
{:toc}

## Add and delete edges

Tenant administrator is able to register new edges or delete them from ThingsBoard cloud service.

![image](/images/edge/help/edges.png)

## Get edge Id, key and secret
  
Tenant administrator and customer users are able to copy:
 - **Edge id** to clipboard using "Copy Edge Id" button
 - **Edge key** and **Edge secret** using buttons "Copy edge key", "Copy edge secret".

![image](/images/edge/help/edge-copy-credentials.png)

## Assign edge to customers

Tenant administrator is able to assign edges to certain [customer](/docs/edge/help/customers/).
This will allow Customer users to fetch edge data using REST APIs or Web UI.
 
 ![image](/images/edge/help/assign-edge-to-customer.png)
 
## Assign entities to edge

Tenant administrator is able to assign/unassign to the edge following entity groups/entities: user(s), asset(s), device(s), entity view(s), dashboard(s), rule chain(s).

In case of using **ThingsBoard Professional Edition** also [scheduler events](/docs/user-guide/scheduler/) could be assigned to the edge.

 ![image](/images/edge/overview/cloud-management2.png)
 
## Create edge rule chains and rule nodes

Tenant administrator is able to create edge [rule engine](/docs/user-guide/rule-engine-2-0/re-getting-started/).

![image](/images/edge/help/edge-rulechains.png)

## Make rule chain default

Tenant administrator is able to make edge rule chain [default](/docs/edge/overview/#default-edge-rule-chains).

![image](/images/edge/nodes/make-default.png)

## Add edge rule nodes

Tenant administrator is able to add [Push to cloud](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud) and [Push to edge](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-edge) nodes.

## Manage edge attributes

Tenant administrator and customer users are able to manage edge server-side [attributes](/docs/user-guide/attributes).
 
## Browse edge events
  
Tenant administrator and customer users are able to browse events related to particular edge using "Events" tab.

Each edge has **Downlink** event type with message history from cloud to edge.

 ![image](/images/edge/help/edge-events.png)

## Manage edge relations
 
Tenant administrator and customer users are able to manage edge [relations](/docs/user-guide/entities-and-relations).

 ![image](/images/edge/help/edge-relations.png)
  