{% if docsPrefix == 'pe/edge/' %}
{% assign addEdge = '
    ===
        image: / ,
        title: Log in to the **ThingsBoard Professional Edition instance** and go to the **Edge Management > Instances** section. Click the **“+”** icon in the top right corner and select the **“Add new edge”** option.
    ===
        image: /,
        title: Enter a name for your Edge in the **“Name”** field and click the **“Add”** button to confirm the addition of your new Edge.
    ===
        image: /,
        title: Your new edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% else %}
{% assign addEdge = '
    ===
        image: /,
        title: Log in to the **ThingsBoard Community Edition instance** and go to the **Edge Management > Instances** section. Click the **“+”** icon in the top right corner and select the **“Add new edge”** option.
    ===
        image: /,
        title: Enter a name for your Edge in the **“Name”** field and click the **“Add”** button to confirm the addition of your new Edge.
    ===
        image: /,
        title: Your new Edge should now appear at the top of the list, as entries are sorted by creation time by default.
'%}
{% endif %}

{% include images-gallery.liquid imageCollection=addEdge showListImageTitles="true" %}