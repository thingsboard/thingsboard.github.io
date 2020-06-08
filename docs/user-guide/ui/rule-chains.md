---
layout: docwithnav
assignees:
- vparomskiy
title: Rule Chains
description: ThingsBoard Rule Chains management

---

* TOC
{:toc}

## Rule Chains page

Rule Chains Administration UI page displays a table of configured tenant rule chains.
You are able to do following operations:

 - Import Or Create new Rule Chain
 - Export Rule Chain to JSON
 - Mark Rule Chain as **Root Rule Chain**
 - Delete the Rule Chain
 
See [**Rule Engine**](/docs/user-guide/rule-engine-2-0/re-getting-started/) documentation for more details.

![image](/images/user-guide/ui/rule-chain-page.png)

## Rule Chains import/export

#### Rule Chain export

You are able to export your rule chain to JSON format and import it to the same or another ThingsBoard instance.

In order to export rule chain, you should navigate to the **Rule Chains** page and click on the export button located on the particular rule chain row.
 
![image](/images/user-guide/ui/export-rule-chain.png)

#### Rule import

Similar, to import the rule chain you should navigate to the **Rule Chains** page and click on the "+" button located in the top-right corner of the **Rule chains** table and then choose "Import rule chain" option. 

![image](/images/user-guide/ui/rule-import.png)

**Note 1:** All imported Rule chains are **Not** Root Rule Chains.
 
**Note 2:** If imported Rule Chain contains references to other Rule Chains (via **Rule Chain** node), then you will need to update those references before saving Rule Chain. 

#### Troubleshooting

Possible issues while importing the rule:

 - References to other Rule Chains via **Rule Chain** node should be updated before saving changes.
