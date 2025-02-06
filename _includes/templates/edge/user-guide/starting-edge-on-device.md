{% assign addEdgePE = '
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/1-instance-section-pe.webp ,
        title: Log in to the **ThingsBoard Professional Edition instance** and go to the **Edge Management > Instances** section. Click the **“+”** icon in the top right corner and select the **“Add new edge”** option.
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/2-add-new-edge-pe.webp,
        title: Enter a name for your Edge in the **“Name”** field and click the **“Add”** button to confirm the addition of your new Edge.
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/3-done-pe.webp,
        title: Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.
'
%}

{% assign addEdgeCE = '
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/1-instance-section.webp,
        title: Log in to the **ThingsBoard Community Edition instance** and go to the **Edge Management > Instances** section. Click the **“+”** icon in the top right corner and select the **“Add new edge”** option.
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/2-add-new-edge.webp,
        title: Enter a name for your Edge in the **“Name”** field and click the **“Add”** button to confirm the addition of your new Edge.
    ===
        image: https://img.thingsboard.io/edge/user-guide/edge-install/3-done.webp,
        title: Your new Edge should now appear at the top of the list, as entries are sorted by creation time by default.
'
%}


{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=addEdgePE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=addEdgeCE %}
{% endif %}

