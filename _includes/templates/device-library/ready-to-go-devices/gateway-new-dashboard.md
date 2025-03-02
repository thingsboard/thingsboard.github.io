### Create new dashboard
We will create a dashboard and add the most popular widgets. See the instructions below.


{% assign creatingDashboardCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-1-ce.png,
        title: Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard";
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-2-ce.png,
        title: Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-3-ce.png,
        title: Your dashboard should be listed first since the table sorts dashboards using the creation time by default. Click on the "Open dashboard" icon.
    '
%}

{% assign creatingDashboardPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-1-pe.png,
        title: Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard";
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-2-pe.png,
        title: Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-3-pe.png,
        title: Your dashboard should be listed first since the table sorts dashboards using the creation time by default. Click on the "Open dashboard" icon.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingDashboardCE %}
{% endif %}

### Add Entity Alias

Alias is a reference to a single entity or group of entities that are used in the widgets. An alias may be static or 
dynamic. We will use the "Single entity" alias, referring to a single entity. In this case, "{{deviceName}}". It is possible to configure an alias that references multiple devices. For example, devices of a certain 
type or related to a certain asset. You may learn more about different aliases here.

{% assign creatingEntityAliasPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-1-pe.png,
        title: Enter edit mode. Click on the pencil button in the bottom right corner;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-2-pe.png,
        title: Click the "Entity Aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-3-pe.png,
        title: Click "Add alias";
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-4-pe.png,
        title: Enter an alias name. Choose "Single entity" as the Filter type, select "Device" for Type, and begin typing "My New" to trigger autocomplete suggestions;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-5-pe.png,
        title: Click "Add" and then "Save";
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-6-pe.png,
        title: Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.
    '
%}

{% assign creatingEntityAliasCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-1-ce.png,
        title: Enter edit mode. Click on the pencil button in the bottom right corner;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-2-ce.png,
        title: Click the "Entity Aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-3-ce.png,
        title: Click "Add alias";
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-4-ce.png,
        title: Enter an alias name. Choose "Single entity" as the Filter type, select "Device" for Type, and begin typing "My New" to trigger autocomplete suggestions;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-5-ce.png,
        title: Click "Add" and then "Save";
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-6-ce.png,
        title: Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingEntityAliasPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingEntityAliasCE %}
{% endif %}

To add the new widget, we need to select it from the widget library. The widgets are grouped into widget bundles. 
Each widget has a data source. It is how the widget “knows” what data to display.