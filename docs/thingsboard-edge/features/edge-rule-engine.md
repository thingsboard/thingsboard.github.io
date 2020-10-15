---
layout: docwithnav
title: ThingsBoard Edge Rule Engine
description: ThingsBoard Edge Rule Engine

---

### Edge Rule Engine

ThingsBoard Edge uses separate [ThingsBoard Rule Engine framework](/docs/user-guide/rule-engine-2-0/re-getting-started/) for building event-based workflows on the edge side and communicating with cloud.
You can find **Edge Rule chains** in the menu by clicking on **Rule chains** button toggle. 

![image](/images/thingsboard-edge/nodes/rule-chains-menu.png)

**Edge Rule chains** framework is almost the same as **Core Rule chains**, except few differences mentioned below.
 
#### Rule nodes

 * Only **Edge rule chains** has rule node [**Push to cloud**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud)
 * Only **Core rule chains** has rule node [**Push to edge**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-edge)

#### Default edge rule chains

Tenant administrator is able to make edge rule chain **default**. 
Rule chain with activated default flag will be added to default list and assigned to newly created edge(s).

![image](/images/thingsboard-edge/nodes/make-default.png)

![image](/images/thingsboard-edge/nodes/default.png)

#### Export/Import edge rule chain

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance ([see detailed how-to instruction here](/docs/user-guide/ui/rule-chains/#rule-chains-importexport)).

Keep in mind, **you won't be able to import Core rule chain to the Edge rule chain and vice versa**.
