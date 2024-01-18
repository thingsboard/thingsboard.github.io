
* TOC
{:toc}

## Introduction

Rule chain - nodes are connected with each other with relations, so the outbound message from rule node is sent to next connected rule nodes.

Rule chains page displays a table of configured tenant rule chains.
You can create, export/import, delete, and mark the desired rule chain as root.

See [**Rule Engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/) documentation for more details.

### Create new rule chain

To add a new rule chain, you should:

{% include images-gallery.html imageCollection="create-rule-chain" showListImageTitles="true" %}

### Edit rule chain

You can edit the name and description rows as well as enable/disable debug mode.

{% include images-gallery.html imageCollection="edit-rule-chain" showListImageTitles="true" %}

### Export/import rule chain 

You are able to [export](#export-rule-chain) your rule chain to а JSON file and [import](#import-rule-chain) it to the same or another ThingsBoard instance.

#### Export rule chain 

In order to export rule chain, you should:

{% include images-gallery.html imageCollection="export-rule-chain" showListImageTitles="true" %}

#### Import rule chain

To import rule chain from а JSON file, you should:

{% include images-gallery.html imageCollection="import-rule-chain" showListImageTitles="true" %}

{% capture difference %}
**Note 1:**
<br>
All imported rule chain are **not root** rule chain.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
**Note 2:**
<br>
If imported rule chain contains references to other rule chains (via **Rule Chain** node), then you will need to update those references before saving rule chain.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Make rule chain root

To make rule chain root, you should:

{% include images-gallery.html imageCollection="make-rule-chain-as-root" showListImageTitles="true" %}

### Delete rule chain

You can delete a rule chain using one of the following ways:

First way:

{% include images-gallery.html imageCollection="delete-rule-chain-1" showListImageTitles="true" %}

Second way:

{% include images-gallery.html imageCollection="delete-rule-chain-2" showListImageTitles="true" %}

You can also delete multiple rule chains at once.

{% include images-gallery.html imageCollection="delete-rule-chain-3" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}