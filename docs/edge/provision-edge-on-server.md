---
layout: docwithnav-edge
title: Provision ThingsBoard Edge on ThingsBoard CE server
description: Provision ThingsBoard Edge on ThingsBoard CE server

addEdge:
    0:
        image: /images/edge/installation-add-edge-item-1.png
        title: 'Sign in to your ThingsBoard <b>CE</b> instance and navigate to the "Edge Management" -> "Instances" page. Click the "+" icon in the top right corner and select "Add Edge".'
    1:
        image: /images/edge/installation-add-edge-item-2.png
        title: 'Enter a name for your edge. For instance, "My New Edge". Click "Add" to confirm the creation of your new edge.'
    2:
        image: /images/edge/installation-add-edge-item-3.png
        title: 'Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.'

copyEdgeCredentials:
    0:
        image: /images/edge/installation-copy-edge-credentials-item-1.png
        title: 'Click on "Copy Edge Key" and "Copy Edge Secret" in the edge details section. This will copy your edge credentials to your clipboard. Be sure to store them in a secure location, as these values will be needed in the following steps.'

---

* TOC
{:toc}

## Provision the edge on ThingsBoard server

{% include templates/edge/provision/add-edge.md %}

## Next steps

{% assign docsPrefix = "edge/" %}
{% include templates/edge/provision/edge-installation.md %}
