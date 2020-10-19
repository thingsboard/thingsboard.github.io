---
layout: docwithnav
title: ThingsBoard Edge Rule Engine
description: ThingsBoard Edge Rule Engine

---

### Edge Rule Engine

ThingsBoard Edge uses the same [ThingsBoard Rule Engine framework](/docs/user-guide/rule-engine-2-0/re-getting-started/) for building event-based workflows on the edge side and communicating with cloud.

Starting from **2.6.0 version** ThingsBoard CE/PE version has two types of rule chains:
 - **Core** rule chains - rule chains that are executed on the cloud and basically are the same rule chains that were prior version 2.6.0
 - **Edge** rule chains - rule chains that are executed on the edge only. These rule chains configured using cloud UI, but never executed on the cloud. Once configuration completed and rule chain updated all changes are going to be transferred to edge. 

![image](/images/thingsboard-edge/nodes/rule-chains-menu.png)

Once Edge Rule Chain configured on the cloud it could be pushed/assigned to edge for execution.

Please refer to [**Entities management on cloud**](/docs/thingsboard-edge/features/sync/#entities-management-on-cloud) to assign rule chain to edge.

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

![image](/images/thingsboard-edge/nodes/make-default.png)

![image](/images/thingsboard-edge/nodes/default.png)

#### Export/Import edge rule chain

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance ([see detailed how-to instruction here](/docs/user-guide/ui/rule-chains/#rule-chains-importexport)).

### Next Steps

{% include templates/thingsboard-edge/next-steps.md %}