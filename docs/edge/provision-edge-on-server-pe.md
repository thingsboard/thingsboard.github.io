---
layout: docwithnav-edge
title: Provision ThingsBoard Edge on ThingsBoard PE server
description: Provision ThingsBoard Edge on ThingsBoard PE server

addEdge:
    0:
        image: /images/edge/installation-add-edge-item-1-pe.png
        title: 'Login to your ThingsBoard <b>PE</b> instance and open "Edge groups" page.'
    1:
        image: /images/edge/installation-add-edge-item-2-pe.png
        title: 'Click on the icon "Open" of the group "All".'
    2:
        image: /images/edge/installation-add-edge-item-3-pe.png  
        title: 'Click on the "+" icon in the top right corner "Add edge".'
    3:
        image: /images/edge/installation-add-edge-item-4-pe.png
        title: 'Input edge name and license key (from Step 1). For example, "My New Edge" and "Bsn3L4B089aXXZEiwf2glid". Additionally, please update cloud endpoint if required - this URL should be accessible by the edge. If edge is running in a docker container "localhost" is always <b>wrong</b>. It must be IP address of the machine where ThingsBoard <b>PE</b> is running and accessible by the edge container. If you are using ThingsBoard <b>Cloud</b> server to evaluate edge please set it as <b>https://thingsboard.cloud</b>. Click "Add" to add the edge.'
    4:
        image: /images/edge/installation-add-edge-item-5-pe.png
        title: 'Now your edge should be listed first, since table sort edges using created time by default.'

copyEdgeCredentials:
    0:
        image: /images/edge/installation-copy-edge-credentials-item-1-pe.png
        title: 'Click "Copy Edge key" and "Copy Edge secret" in edge details to copy your edge credentials to the clipboard and store them to some place, these values will be used in further steps.'
    
---

* TOC
{:toc}

## Step 1: Obtain and configure license key

{% include templates/edge/provision/obtain-license.md %}

## Step 2: Provision the edge on ThingsBoard server

{% include templates/edge/provision/add-edge.md %}

## Next steps

{% include templates/edge/provision/next-steps.md %}