### Create new dashboard
We will create a dashboard and add the most popular widgets. See the instructions below.

{% assign creatingNewDashboardPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-1-pe.png,
        title: Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard";
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-2-pe.png,
        title: Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-3-pe.png,
        title: Your dashboard should be listed first since the table sorts dashboards using the time of the creation by default. Click on the "Open dashboard" icon.
    '
%}

{% assign creatingNewDashboardCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-1-ce.png,
        title: Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard";
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-2-ce.png,
        title: Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-3-ce.png,
        title: Your dashboard should be listed first since the table sorts dashboards using the creation time of the creation by default. Click on the "Open dashboard" icon.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingNewDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingNewDashboardCE %}
{% endif %}

### Add Entity Alias

Alias is a reference to a single entity or group of entities that are used in the widgets. An alias may be static or 
dynamic. We will use the 'Single entity' alias, referring to a single entity. In this case, '{{deviceName}}'. It is possible to configure an alias that references multiple devices. For example, devices of a certain 
type or related to a certain asset. You may learn more about different aliases here.

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
        title: Enter an alias name (for example, "My Device"). Choose "Single entity" as the Filter type, select "Device" for Type, and begin typing "My New" to trigger autocomplete suggestions;
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-5-ce.png,
        title: Click "Add" and then "Save";
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-6-ce.png,
        title: Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.
    '
%}

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
        title: Enter an alias name (for example, "My Device"). Choose "Single entity" as the Filter type, select "Device" for Type, and begin typing "My New" to trigger autocomplete suggestions;
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-5-pe.png,
        title: Click "Add" and then "Save";
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-6-pe.png,
        title: Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.
    '
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" or docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingEntityAliasPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingEntityAliasCE %}
{% endif %}

To add the new widget, we need to select it from the widget library. The widgets are grouped into widget bundles. 
Each widget has a data source. It is how the widget “knows” what data to display. We should configure the data source 
to see the latest value of our “cpu_usage” data that we sent during step 2.

- Enter edit mode. Click on the "Add new widget" button;
- Select the "Charts" widget bundle. Click on the header of the Entities widget. The "Add Widget" window will appear;
- Click "Add" to add the data source. A widget may have multiple data sources, but we will use only one;
- Select the "{{deviceName}}" entity alias. Then click on the input field on the right. The auto-complete with available data points will appear. Select the "cpu_usage" data point and click "Add";
- To enlarge the widget by dragging its bottom right corner. Feel free to explore advanced settings for additional widget modifications.