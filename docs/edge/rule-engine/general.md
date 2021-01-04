---
layout: docwithnav
title: ThingsBoard Edge Rule Engine
description: ThingsBoard Edge Rule Engine

---

### Edge Rule Engine

ThingsBoard Edge uses the same [ThingsBoard Rule Engine framework](/docs/user-guide/rule-engine-2-0/re-getting-started/) for building event-based workflows on the edge side and communicating with cloud.

Starting from **3.3.0 version** ThingsBoard CE/PE server has two types of rule chains:
 - **Core** rule chains - rule chains that are executed on the cloud and basically are the same rule chains that were prior **3.3.0** version 
 - **Edge** rule chains - rule chains that are executed on the Edge only. These rule chains configured using ThingsBoard CE/PE server UI, but never executed on the server instance. Once configuration completed and rule chain saved all changes are going to be transferred to Edge. 

![image](/images/edge/nodes/rule-chains-menu.png)

Once Edge Rule Chain configured on the cloud it could be pushed/assigned to edge for execution.

Please refer to [**Entities management on cloud**](/docs/edge/features/sync/#entities-management-on-cloud) to assign rule chain to edge.

**Edge Rule chains** framework is almost the same as **Core Rule chains**, except few differences mentioned below.
 
### Edge Rule nodes

#### Push to cloud node

This node is available for usage only inside **Edge** rule chains.
Please refer for the [**details**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud) of this node.

#### Push to edge node

This node is available for usage only inside **Core** rule chains.
Please refer for the [**details**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-edge) of this node.

### Default edge rule chains

Tenant administrator is able to set specific **Edge** rule chains as **default**. 

**Default** edge rule chain will be assigned and transferred to newly created edge(s) automatically.

![image](/images/edge/nodes/make-default.png)

![image](/images/edge/nodes/default.png)

#### Export/Import edge rule chain

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance ([see detailed how-to instruction here](/docs/user-guide/ui/rule-chains/#rule-chains-importexport)).

### Next Steps

{% assign currentGuide = "EdgeRuleEngineOverview" %}{% include templates/edge/guides-banner-edge.md %}