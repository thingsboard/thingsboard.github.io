We will create a dashboard, add a table and a chart widget to see temperature data on cloud and edge. See instructions below.

### Step 5.1 Create Empty Dashboard

{% include images-gallery.html imageCollection="step51" showListImageTitles="true" %}

### Step 5.2 Add Entity Alias

Alias is a reference to single entity or group of entities that is used in the widgets.
Alias may be static or dynamic. For simplicity, we will use "Single entity" alias reference one and only one entity ("My New Device" in our case).
It is possible to configure an alias that reference multiple devices. For example, devices of a certain type or related to a certan asset.
You may learn more about different aliases [here](/docs/user-guide/ui/aliases/).

{% include images-gallery.html imageCollection="step52" showListImageTitles="true" %}

### Step 5.3 Add Table Widget

To add the table widget we need to select it from the widget library. Widgets are grouped into widget bundles.
Each widget has a data source. This is how widget "knows" what data to display.
To see the latest value of our "temperature" data that we sent during step 2, we should configure the data source.

{% include images-gallery.html imageCollection="step53" showListImageTitles="true" %}

Congratulations! You have added first widget. Now you can send new telemetry reading and it will immediately appear in the table.

### Step 5.4 Add Chart Widget

To add the chart widget we need to select it from the widget library.
Chart widget displays multiple historical values of the same data key ("temperature" in our case).
We should also configure the time window to use the chart widget.

{% include images-gallery.html imageCollection="step54" showListImageTitles="true" %}

You have added chart widget. Now you can send new telemetry reading and it will immediately appear in the chart. Let's provision this dashboard to the edge to see temperature data from the device on the edge as well. 
