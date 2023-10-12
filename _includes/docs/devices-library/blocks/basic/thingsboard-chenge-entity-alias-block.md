
{% assign changeEntityAliasCE = '
    ===
        image: /images/user-guide/dashboards/alias/dashboard-edit-alias-1-ce.png,
        title: Open the dashboard and enter edit mode. Click the "Entity aliases" icon, then in the pop-up window click the "Edit alias" icon next to the alias.
    ===
        image: /images/user-guide/dashboards/alias/dashboard-edit-alias-2-ce.png,
        title: In edit alias window select your device from dropdown list and save entity alias.
    ===
        image: /images/user-guide/dashboards/alias/dashboard-edit-alias-3-ce.png,
        title: Apply all changes.
'
%}

{% assign changeEntityAliasPE = '
    ===
        image: /images/user-guide/dashboards/alias/dashboard-edit-alias-1-pe.png,
        title: Open the dashboard and enter edit mode. Click the "Entity aliases" icon, then in the pop-up window click the "Edit alias" icon next to the alias.
    ===
        image: /images/user-guide/dashboards/alias/dashboard-edit-alias-2-pe.png,
        title: In edit alias window select your device from dropdown list and save entity alias.
    ===
        image: /images/user-guide/dashboards/alias/dashboard-edit-alias-3-pe.png,
        title: Apply all changes.
'
%}

To open the imported dashboard, click on it. Then you should specify your device in entity alias of the dashboard.

To do this, follow these steps:

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=changeEntityAliasPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=changeEntityAliasCE %}
{% endif %}

Now you should be able to see the data from the device.