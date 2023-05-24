---
layout: docwithnav-pe-edge
title: Provision ThingsBoard Edge on ThingsBoard PE server
description: Provision ThingsBoard Edge on ThingsBoard PE server

addEdge:
    0:
        image: /images/pe/edge/installation-add-edge-item-1.png
        title: 'Login to your ThingsBoard <b>PE</b> instance and open "Edge management" -> "Instances" page.'
    1:
        image: /images/pe/edge/installation-add-edge-item-3.png  
        title: 'Click on the "+" icon in the top right corner "Add edge".'
    2:
        image: /images/pe/edge/installation-add-edge-item-4.png
        title: 'Input edge name. For example, "My New Edge". Additionally, please update cloud endpoint if required - this URL should be accessible by the edge. If edge is running in a docker container "localhost" is always <b>wrong</b>. It must be IP address of the machine where ThingsBoard <b>PE</b> is running and accessible by the edge container. If you are using ThingsBoard <b>Cloud</b> server to evaluate edge please leave it as is. Click "Add" to add the edge.'
    3:
        image: /images/pe/edge/installation-add-edge-item-5.png
        title: 'Now your edge should be listed first, since table sort edges using created time by default.'

copyEdgeCredentials:
    0:
        image: /images/pe/edge/installation-copy-edge-credentials-item-1.png
        title: 'Click "Copy Edge key" and "Copy Edge secret" in edge details to copy your edge credentials to the clipboard and store them to some place, these values will be used in further steps.'
    
---

* TOC
{:toc}

## Provision the edge on ThingsBoard server

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/provision/add-edge.md %}

## Next steps

{% include templates/edge/provision/edge-installation.md %}