---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Predictive occupancy monitoring for hotels
description: Analyze and predict occupancy of different zones, areas and spaces in the building

building-occupancy-dashboard:
  0:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_dashboard.png
    title: 'Real time occupancy tacking dashboard'

building-occupancy-weakly-heatmap:
  0:
    image: /images/trendz/guide/building_occupancy/hotel_hourly_occupansy_heatmap_create.png
    title: 'Create heatmap view in Trendz'
  1:
    image: /images/trendz/guide/building_occupancy/hotel_hourly_occupansy_add_dates.png
    title: 'Add date fields into heatmap view to group data by hour and day'
  2:
    image: /images/trendz/guide/building_occupancy/hotel_hourly_occupansy_calcualtion.png
    title: 'Calculate occupancy rate for each hour of the day'
  3:
    image: /images/trendz/guide/building_occupancy/hotel_hourly_occupansy_filtering.png
    title: 'Add filtering options to focus on specific area of the hotel'
  4:
    image: /images/trendz/guide/building_occupancy/hotel_weakly_occupansy_heatmap.png
    title: 'Hourly occupancy rate heatmap for the last 7 days'

building-occupancy-forecast-configuration:
  0:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_forecast_create.png
    title: 'Create building occupancy line chart'
  1:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_forecast_configuration.png
    title: 'Enable prediction and configure forecast settings'
  2:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_forecast_for_next_weak.png
    title: 'Building occupancy forecast for the next week'

building-occupancy-top-crowded-areas:
  0:
    image: /images/trendz/guide/building_occupancy/hotel_occupancu_top_crowded_areas_sorting.png
    title: 'Enable descending sorting by occupancy rate to find top crowded areas'
  1:
    image: /images/trendz/guide/building_occupancy/hotel_occupancu_top_crowded_areas.png
    title: 'Top 5 overcrowded areas in the building'

building-occupancy-dashboard-configuration:
  0:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_create_dashboard.png
    title: 'Create dashboard for analyzing building occupancy'
  1:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_configure_aliases.png
    title: 'Configure dashboard aliases to filter entities by building, floor and area'
  2:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_configure_filter_alias.png
    title: 'Configure alias for showing all available buildings'
  3:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_add_hierarchy_widget.png
    title: 'Add hierarchy widget to the dashboard'
  4:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_configure_hierarchy.png
    title: 'Configure hierarchy widget to show all floors in the building'
  5:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_enable_rowclick.png
    title: 'Enable row click event to apply filtering by selected entity'
  6:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_configure_filter_by_building.png
    title: 'Configure row click event'    
  7:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_share_view.png
    title: 'Add Trendz views on the occupancy dashboard'
  8:
    image: /images/trendz/guide/building_occupancy/hotel_occupancy_add_on_dashboard.png
    title: 'Configure Trendz views to show occupancy rate for the selected building'

---

* TOC
{:toc}

## Introduction

As a mid-sized hotel looking to improve their guest experience and reduce operational costs, our client turned to occupancy monitoring. 
They wanted to gain a better understanding of which areas of the hotel were most popular and when, in order to allocate their staff and resources more effectively.
Additionally, they were interested in reducing their environmental impact by reducing their energy usage and identifying potential issues with their HVAC system.  

**Task definition** - Analyze occupancy rates for different areas within a hotel and predict hourly occupancy rates for the upcoming week.

{% include images-gallery.html imageCollection="building-occupancy-dashboard" %}

### Implementation plan
* Compute hourly occupancy rate as a percent from max capacity for each area.
* Compute occupancy rate for the whole floor and building.
* Build a forecast for occupancy rate for the upcoming week.
* Show weekly heatmaps for each area/floor/building.
* Display top-5 overcrowded areas.
* Display top-5 underutilized areas.
* Create occupancy analysis dashboard in ThingsBoard.

### Key outcomes
* 12% reduction in utility costs.
* 15% reduction in labor costs.
* 10% increase in positive guest reviews.

## Getting started:

### Prerequisites
We are focusing and data analysis and visualization in this guide. So we will omit details about sensors installation and configuration. Here is a short description of the system that we will use in this guide:

* Occupancy sensors already installed in each area of the hotel and connected to ThingsBoard via LoRaWAN integration. 
* There are 3 asset types in ThingsBoard - building, floor, area. Building has relations to multiple floors, floor has relations to multiple areas and each area has related occupancy sensor. 
* Sensor reports how many people are currently in the area.
* Occupancy sensor payload - `{"ts": 1651419204000, peopleCnt": 5}`
* Each area has an attribute with maximum capacity. We will use this attribute to compute occupancy rate. Initial values are set during system provisioning.

### Step 1: Compute hourly occupancy rate as a percent from max capacity for each area
Let's start with computing occupancy rate for each area. For doing that we are using Trendz calculated field where we define formula that is based on max area capacity and historical occupancy reported by sensor. 
We use heatmap to visualize occupancy rate for each hour of the day for the last 7 days. User can change a time range to focus on real time data or historical period.

* Create Heatmap view
* Add **Date(Hour)** into `X-axis` section
* Add **Date(Day)** into `Y-axis` section
* Add **Calculated** field into `Value` section. Change Label to **Occupancy rate**
* Write function that returns occupancy rate as a percent from max capacity

```javascript
var peopleCnt = sum(occupancySensor.peopleCnt);
var maxCapacity = uniq(area.maxCapacity);

return peopleCnt / maxCapacity * 100;
```

* Set calculated field **Unit** to **%**
* Add Area, Floor and Building fields into `filter` section so user can focus on specific area of the hotel.
* Set default time range to **Last 7 days**
* Save view with name **Weekly occupancy rate heatmap**

{% include images-gallery.html imageCollection="building-occupancy-weakly-heatmap" %}

### Step 2: Compute occupancy rate for the whole floor and building
Heatmap created in _Step 1_ contains filter fields. If no filers are selected, heatmap will show occupancy rate for the whole system. Data from all areas, floors and buildings will be aggregated and displayed on the heatmap.

In real life case most probably we want to focus on specific building or area. To do that we can use filters. For example if user will select specific building in the filters - heatmap will show occupancy rate only for this building. 
In the background Trendz will perform the following steps:
* Fetch all floors for the selected building.
* Then load all areas for each floor.
* Load occupancy data for each sensor in the area.
* Apply calculation for each sensor.
* Aggregate results on hte building level.

It means that if user wants to see occupancy rate for the whole floor or building - we can use same view and just select floor or building in the filters.

### Step 3: Predict an occupancy rate for the upcoming week with hourly breakdown
Till that moment we worked with historical data. Now we will use Trendz prediction instruments to build a forecast for the upcoming week. First, we would create a line chart that shows occupancy rate for the last 7 days with hourly breakdown.

* Create Line chart view
* Add **Date(Full Hour)** into `X-axis` section
* Add **Calculated** field into `Y-axis` section. Change Label to **Occupancy rate**
* Write function that returns occupancy rate as a percent from max capacity

```javascript
var peopleCnt = sum(occupancySensor.peopleCnt);
var maxCapacity = uniq(area.maxCapacity);

return peopleCnt / maxCapacity * 100;
```

* Enable checkbox `Prediction`
  * Prediction method - **Fourier transformation** 
  * Prediction range - 7
  * Prediction unit - days
* Set calculated field **Unit** to **%**
* Add Area name into ``Series`` section - it will show occupancy rate for each area as a separate line.
* Add Area, Floor and Building fields into `filter` section so user can focus on specific area of the hotel.
* Set default time range to **Last 7 days**

Finally, we have to predict calculated **Occupancy rate** field for the next 7 days. To do that we will use **Fourier transformation** prediction method that shows good results for seasonal time series data.

* Click on  **Occupancy rate** field in the `Y-axis` section
* Enable checkbox `Prediction`
  * Prediction method - **Fourier transformation**
  * Prediction range - 7
  * Prediction unit - days
* Save view with name **Hourly occupancy forecast**

Historical data for each area visualized with solid line and forecast is shown with dashed line. 

{% include images-gallery.html imageCollection="building-occupancy-forecast-configuration" %}

### Step 4: Bar chart with top-5 overcrowded/underutilized areas in the hotel
Tom-5 bar charts are a good option to better understand our system on a big time range. We can compare assets and understand which areas are overcrowded and which are underutilized. Let's start with overcrowded areas.

* Create Bar chart view
* Add **Area name** into `X-axis` section
* Add **Occupancy rate** into `Y-axis` section. Reuse calculated field from Step 1.
* Open View settings 
  * Set sorting to **Descending**
  * Set `Limit` to 5
  * Enable Horizontal bar chart
* Add Area, Floor and Building fields into `filter` section so user can focus on specific area of the hotel.
* Set default time range to **Last 7 days**
* Save view with name **top-5 overcrowded areas**

Almost the same steps should be done for a bar chart with top-5 underutilized areas in the hotel. Just change sorting to **Ascending** and change view name to **top-5 underutilized areas**.

{% include images-gallery.html imageCollection="building-occupancy-top-crowded-areas" %}

### Step 5: Create occupancy analysis dashboard in ThingsBoard
All Trendz analytic charts are ready and we can create user dashboard in ThingsBoard. Note that user can have access to multiple hotels and we want to create a dashboard that will work for all of them. User should have an ability to select a hotel, floor and area.
At first, we will add all Trendz views on the dashboard: 

* In ThingsBoard create dashboard with name **Occupancy analysis**
* In Trendz: for each widget that we created in previous steps:
  * Click on `Share to ThingsBoard` button and copy `Add on Dashboard`.
  * Select **Occupancy analysis** dashboard.
  * Enable **Create alias** checkbox.
  * Select **Area name** as a filter.
* Return to ThingsBoard **Occupancy analysis** dashboard and tune dashboard layout.

Then we would create dashboard aliases that will be used to filter data in the dashboard.

* Create new alias **All buildings** - this alias would hold all buildings that are visible to the user. 
  * Filter type - **Asset type**
  * Asset type - **Building**
* Create new alias **Selected entity** - this alias would hold an Entity that user clicked on.
  * Filter type - **Entity from dashboard state**
  * State entity parameter name - **selectedEntity**
* Create new alias **Filtered areas** - this alias would hold all Areas that user want to focus on. 
  * Filter type - **Asset search query**
  * Enable **Root entity** checkbox with entity parameter name - **selectedEntity**
  * Enable checkbox **Fetch last level relation only**
  * Direction - From
  * Max relation level - 3 
  * Asset types - **Area**

Finally, we have to add hierarchy widget that will show all buildings/floors/areas in the hotel and allow user to select specific area. Once user would click on entity - **Filtered areas** alias will refresh and load all areas for the selected entity. 
After that all Trendz widgets on the dashboard would be updated because they use **Filtered areas** alias as a datasource. As a result user will see occupancy data for the selected areas.

* Add hierarchy widget `Cards` -> `Entities hierarchy` to the dashboard. It will show all buildings/floors/areas in the hotel.
  * Set datasource alias to **All buildings**
  * Latest data key - **Name**
* Add `On node selected` action for hierarchy widget. It will update `selectedEntity` parameter in the dashboard state.
  * Action type - **Update current dashboard state**
  * State entity parameter name - **selectedEntity**
* For all Trendz widgets on the dashboard set datasource alias to **Filtered areas**.
* Save dashboard.

{% include images-gallery.html imageCollection="building-occupancy-dashboard-configuration" %}

## Summary
In conclusion, the implementation of occupancy monitoring technology helped our client to achieve their goals of improving guest experience, reducing operational costs, and minimizing their environmental footprint. 
By leveraging real-time data and predictive analytics, they were able to optimize their staffing levels, allocate their resources more effectively, and reduce their energy usage. 
The key outcomes of this implementation included a reduction in utility and labor costs, as well as an increase in positive guest reviews.