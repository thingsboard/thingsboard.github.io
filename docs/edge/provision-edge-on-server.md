---
layout: docwithnav-edge
title: Provision ThingsBoard Edge on ThingsBoard CE server
description: Provision ThingsBoard Edge on ThingsBoard CE server

addEdge:
    0:
        image: /images/edge/installation-add-edge-item-1.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open "Edge management" -> "Instances" page.'
    1:
        image: /images/edge/installation-add-edge-item-2.png  
        title: 'Click on the "+" icon in the top right corner. Select "Add new edge".'
    2:
        image: /images/edge/installation-add-edge-item-3.png
        title: 'Input edge name. For example, "My New Edge". Click "Add" to add the edge.'
    3:
        image: /images/edge/installation-add-edge-item-4.png
        title: 'Now your edge should be listed first, since table sort edges using created time by default.'

copyEdgeCredentials:
    0:
        image: /images/edge/installation-copy-edge-credentials-item-1.png
        title: 'Click "Copy Edge key" and "Copy Edge secret" in edge details to copy your edge credentials to the clipboard and store them to some place, these values will be used in further steps.'

---

* TOC
{:toc}

## Provision the edge on ThingsBoard server

{% include templates/edge/provision/add-edge.md %}

## Next steps

{% assign docsPrefix = "edge/" %}
{% include templates/edge/provision/edge-installation.md %}
