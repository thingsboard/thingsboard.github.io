### Create new dashboard
We will create a dashboard and add the most popular widgets. See the instructions below.


{% assign creatingDashboardCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-1-ce.png,
        title: Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard".
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-2-ce.png,
        title: Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-dashboard-3-ce.png,
        title: Now your dashboard should be listed first since the table sorts dashboards using the time of the creation by default. Click on the "Open dashboard" icon.
    '
%}

{% assign creatingDashboardPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-1-pe.png,
        title: Open the Dashboards page. Click on the "+" icon in the top right corner. Select "Create new dashboard".
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-2-pe.png,
        title: Input dashboard name. For example, "My New Dashboard". Click "Add" to add the dashboard.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-dashboard-3-pe.png,
        title: Now your dashboard should be listed first since the table sorts dashboards using the time of the creation by default. Click on the "Open dashboard" icon.
    '
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingDashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingDashboardCE %}
{% endif %}

### Add Entity Alias

Alias is a reference to a single entity or group of entities that are used in the widgets. An alias may be static or 
dynamic. For simplicity, we will use the “Single entity” alias that references the one and only entity (“OrangePI” in 
our case). It is possible to configure an alias that references multiple devices. For example, devices of a certain 
type or related to a certain asset. You may learn more about different aliases here.

{% assign creatingEntityAliasCE = '
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-1-ce.png,
        title: Enter edit mode. Click on the pencil button in the bottom right corner.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-2-ce.png,
        title: Click the "Entity Aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-3-ce.png,
        title: Click "Add alias".
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-4-ce.png,
        title: Input alias name, for example, "OrangePI". Select the "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on it.
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-5-ce.png,
        title: Click "Add" and then "Save".
    ===
        image: /images/helloworld/getting-started-ce/hello-world-3-1-create-empty-alias-6-ce.png,
        title: Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.
    '
%}

{% assign creatingEntityAliasPE = '
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-1-pe.png,
        title: Enter edit mode. Click on the pencil button in the bottom right corner.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-2-pe.png,
        title: Click the "Entity Aliases" icon in the top right part of the screen. You will see an empty list of Entity aliases.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-3-pe.png,
        title: Click "Add alias".
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-4-pe.png,
        title: Input alias name, for example, "OrangePI". Select the "Single entity" Filter type. Select "Device" as Type and type "My New" to enable autocomplete. Choose your device from the auto-complete and click on it.
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-5-pe.png,
        title: Click "Add" and then "Save".
    ===
        image: /images/helloworld/getting-started-pe/hello-world-3-1-create-empty-alias-6-pe.png,
        title: Finally, click "Apply changes" in the dashboard editor to save the changes. Then you should enter edit mode again.
    '
%}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingEntityAliasPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=creatingEntityAliasCE %}
{% endif %}

To add the new widget we need to select it from the widget library. Widgets are grouped into widget bundles. Each widget has a data source. This is how the widget “knows” what data to display. To see the latest value of our “cpu_usage” data that we sent during step 2, we should configure the data source.

- Enter edit mode. Click on the "Add new widget" button.
- Select the "Charts" widget bundle. Click on the header of the Entities widget. The "Add Widget" window will appear.
- Click "Add" to add the data source. A widget may have multiple data sources, but we will use only one in this case.
- Select the "OrangePI" entity alias. Then click on the input field on the right. The auto-complete with available data points will appear. Select the "cpu_usage" data point and click "Add".
- Resize the widget to make it a little bigger. Just drag the bottom right corner of the widget. You can also play with the advanced settings if you would like to edit the widget.