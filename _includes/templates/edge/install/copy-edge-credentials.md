Click on **Copy Edge Key** and **Copy Edge Secret** in the edge details section.
This will copy your edge credentials to your clipboard.
Be sure to store them in a secure location, as these values will be needed in the following steps.

{% if docsPrefix == 'pe/edge/' %}
{% assign copyEdgeCredentials = '
    ===
        image: /images/pe/edge/installation-copy-edge-credentials-item-1.png
'%}
{% else %}
{% assign copyEdgeCredentials = '
    ===
        image: /images/edge/installation-copy-edge-credentials-item-1.png
'%}
{% endif %}

{% include images-gallery.liquid imageCollection=copyEdgeCredentials %}