---
layout: docwithnav
title: Provision ThingsBoard Edge on ThingsBoard PE/CE server
description: Provision ThingsBoard Edge on ThingsBoard CE server

addEdgePE:
    0:
        image: /images/edge/installation-add-edge-item-1-pe.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open "Edge groups" page.'
    1:
        image: /images/edge/installation-add-edge-item-2-pe.png
        title: 'Click on the icon "Open" of the group "All".'
    2:
        image: /images/edge/installation-add-edge-item-3-pe.png  
        title: 'Click on the "+" icon in the top right corner "Add edge".'
    3:
        image: /images/edge/installation-add-edge-item-4-pe.png
        title: 'Input edge name and license key (from Step 1). For example, "My New Edge" and "Bsn3L4B089aXXZEiwf2glidK" (beta key). Additionally, please update cloud endpoint if required - this URL should be accessible by the edge. If edge is running in a docker container "localhost" is always <b>wrong</b>. It must be IP address of the machine where ThingsBoard <b>CE</b> is running and accessible by the edge container. If you are using ThingsBoard <b>Live Demo</b> server to evaluate edge please leave it as <b>https://demo.thingsboard.io</b>. Click "Add" to add the edge.'
    4:
        image: /images/edge/installation-add-edge-item-5-pe.png
        title: 'Now your edge should be listed first, since table sort edges using created time by default.'
    
copyEdgeCredentialsPE:
    0:
        image: /images/edge/installation-copy-edge-credentials-item-1-pe.png
        title: 'Click "Copy Edge key" and "Copy Edge secret" in edge details to copy your edge credentials to the clipboard and store them to some place, these values will be used in further steps.'

addEdgeCE:
    0:
        image: /images/edge/installation-add-edge-item-1-ce.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open "Edge Instances" page.'
    1:
        image: /images/edge/installation-add-edge-item-2-ce.png  
        title: 'Click on the "+" icon in the top right corner. Select "Add new edge".'
    2:
        image: /images/edge/installation-add-edge-item-3-ce.png
        title: 'Input edge name and license key (from Step 1). For example, "My New Edge" and "Bsn3L4B089aXXZEiwf2glidK" (beta key). Additionally, please update cloud endpoint if required - this URL should be accessible by the edge. If edge is running in a docker container "localhost" is always <b>wrong</b>. It must be IP address of the machine where ThingsBoard <b>CE</b> is running and accessible by the edge container. If you are using ThingsBoard <b>Live Demo</b> server to evaluate edge please leave it as <b>https://demo.thingsboard.io</b>. Click "Add" to add the edge.'
    3:
        image: /images/edge/installation-add-edge-item-4-ce.png
        title: 'Now your edge should be listed first, since table sort edges using created time by default.'
    
copyEdgeCredentialsCE:
    0:
        image: /images/edge/installation-copy-edge-credentials-item-1-ce.png
        title: 'Click "Copy Edge key" and "Copy Edge secret" in edge details to copy your edge credentials to the clipboard and store them to some place, these values will be used in further steps.'

---

* TOC
{:toc}

## Prerequisites
  
{% capture prerequisitestogglespec %}
ThingsBoard Professional Edition%,%prerequisites-pe%,%templates/edge/getting-started/prerequisites-pe.md%br%
ThingsBoard Community Edition%,%prerequisites-ce%,%templates/edge/getting-started/prerequisites-ce.md{% endcapture %}
{% include content-toggle.html content-toggle-id="prerequisites" toggle-spec=prerequisitestogglespec %}

## Obtain and configure license key

{% include templates/edge/obtain-license.md %}

## Provision the edge on ThingsBoard server

{% capture addedgetogglespec %}
ThingsBoard Professional Edition%,%addedge-pe%,%templates/edge/add-edge-pe.md%br%
ThingsBoard Community Edition%,%addedge-ce%,%templates/edge/add-edge-ce.md{% endcapture %}
{% include content-toggle.html content-toggle-id="addedge" toggle-spec=addedgetogglespec %}

## Next steps

Once ThingsBoard **Edge** provisioned on ThingsBoard **CE** server please follow [Installation Guide](/docs/edge/install/installation-options/) - this guide will help you to install ThingsBoard **Edge** and connect it to ThingsBoard **CE** server.

