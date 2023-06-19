
* TOC
{:toc}

## Introduction

Rule Chain - nodes are connected with each other with relations, so the outbound message from rule node is sent to next connected rule nodes.

Rule Chains Administration UI page displays a table of configured tenant rule chains.
You are able to do following operations:

 - Import Or Create new Rule Chain
 - Export Rule Chain to JSON
 - Mark Rule Chain as **Root Rule Chain**
 - Delete the Rule Chain
 
See [**Rule Engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/) documentation for more details.

### Create new rule chain

To add a new rule chain, you should:

{% include images-gallery.html imageCollection="create-rule-chain" showListImageTitles="true" %}

### Rule chains export/import

#### Rule chain export

You are able to export your rule chain to а JSON file and import it to the same or another ThingsBoard instance.

In order to export rule chain, you should:

{% include images-gallery.html imageCollection="export-rule-chain" showListImageTitles="true" %}

#### Rule chain import

To import rule chain from а JSON file, you should:

{% include images-gallery.html imageCollection="import-rule-chain" showListImageTitles="true" %}

{% capture difference %}
**Note 1:**
<br>
All imported Rule chains are **Not** Root Rule Chains.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
**Note 2:**
<br>
If imported Rule Chain contains references to other Rule Chains (via **Rule Chain** node), then you will need to update those references before saving Rule Chain.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Edit rule chain

You can edit the name and description rows as well as enable/disable debug mode.

{% include images-gallery.html imageCollection="edit-rule-chain" showListImageTitles="true" %}

### Make rule chain as root

To make rule chain as root, you should:

{% include images-gallery.html imageCollection="make-rule-chain-as-root" showListImageTitles="true" %}

### Delete rule chain

You can delete a rule chain using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-rule-chain-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-rule-chain-1" showListImageTitles="true" %}

You can also delete multiple rule chains at once.

{% include images-gallery.html imageCollection="delete-rule-chain-3" showListImageTitles="true" %}

### Troubleshooting

Possible issues while importing the rule:

 - References to other Rule Chains via **Rule Chain** node should be updated before saving changes.
