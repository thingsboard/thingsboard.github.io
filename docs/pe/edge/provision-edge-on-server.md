---
layout: docwithnav-pe-edge
title: Provision ThingsBoard Edge on ThingsBoard PE server
description: Provision ThingsBoard Edge on ThingsBoard PE server

addEdge:
    0:
        image: /images/pe/edge/installation-add-edge-item-1.png
        title: 'Sign in to your ThingsBoard <b>PE</b> instance and navigate to the "Edge Management" -> "Instances" page. Click the "+" icon in the top right corner and select "Add Edge".'
    1:
        image: /images/pe/edge/installation-add-edge-item-2.png
        title: 'Enter a name for your edge. For instance, "My New Edge". If necessary, update the cloud endpoint. This URL should be accessible from the edge. If the edge is running in a Docker container, using "localhost" is <b>incorrect</b>. It must be the IP address of the machine where ThingsBoard <b>PE</b> is running and accessible by the edge container. If you are using the ThingsBoard <b>Cloud</b> server to evaluate the edge, leave this setting as it is. Click "Add" to create your new edge.'
    2:
        image: /images/pe/edge/installation-add-edge-item-3.png
        title: 'Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.'

copyEdgeCredentials:
    0:
        image: /images/pe/edge/installation-copy-edge-credentials-item-1.png
        title: 'Click on "Copy Edge Key" and "Copy Edge Secret" in the edge details section. This will copy your edge credentials to your clipboard. Be sure to store them in a secure location, as these values will be needed in the following steps.'
    
---

* TOC
{:toc}

## Provision the edge on ThingsBoard server

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/provision/add-edge.md %}

## Next steps

{% include templates/edge/provision/edge-installation.md %}