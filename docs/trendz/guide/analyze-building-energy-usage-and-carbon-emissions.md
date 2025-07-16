---
layout: docwithnav-trendz
assignees:
  - vparomskiy
title: Analyze building energy usage and emissions tracking
description: How to optimize energy usage in the building and reduce carbon emissions

energy-analytic-dashboard:
  0:
    image: /images/trendz/guide/building_energy/energy_consumption_analytic_dashboard.png
    title: 'Dashboard for energy usage analysis of the building'

energy-consumption-by-source-table:
  0:
    image: /images/trendz/guide/building_energy/energy_sources_final_table.png
    title: 'Energy consumption by sources table in the building'
  1:
    image: /images/trendz/guide/building_energy/energy_sources_configuration.png
    title: 'Add required fields to the table configuration'
  2:
    image: /images/trendz/guide/building_energy/energy_sources_calculate_cost.png
    title: 'Compute total electricity cost for each energy source'
  3:
    image: /images/trendz/guide/building_energy/energy_sources_filtering.png
    title: 'Add filtering options to the table to enable drill down analytics'
  4:
    image: /images/trendz/guide/building_energy/energy_sources_default_sort.png
    title: 'Sort final table to total energy cost in descending order'

energy-consumption-by-areas-table:
  0:
    image: /images/trendz/guide/building_energy/energy_areas_final_table.png
    title: 'Table with total electricity consumption in different areas inside the building'

energy-compare-sources-bar:
  0:
    image: /images/trendz/guide/building_energy/energy_compare_sources_bar_configuration.png
    title: 'Comparison bar chart configuration'
  1:
    image: /images/trendz/guide/building_energy/energy_compare_sources_bar_chart.png
    title: 'Compare energy consumers on bar chart'
    
energy-compare-time-ranges:
  0:
    image: /images/trendz/guide/building_energy/energy_consumption_compare_time_ranges_configuration.png
    title: 'Add Month and Year date fields to compare electricity consumption in different time ranges'
  1:
    image: /images/trendz/guide/building_energy/energy_consumption_compare_time_ranges_filters.png
    title: 'Add filtering options to focus on important places'
  2:
    image: /images/trendz/guide/building_energy/energy_consumption_compare_time_ranges_bar.png
    title: 'Compare electricity consumption in different time ranges on bar chart'

co2_emission_card_with_trend:
  0:
    image: /images/trendz/guide/building_energy/co2_emission_transform_formula_for_energy.png
    title: 'Add calculated field to compute carbon emissions based on energy consumption'
  1:
    image: /images/trendz/guide/building_energy/co2_emission_compare_with_prev_interval.png
    title: 'Enable comparison with previous interval to see trend'
  2:
    image: /images/trendz/guide/building_energy/co2_emission_card_with_trend_and_dynamic.png
    title: 'CO2 emissions card with trend and dynamic over last 7 days'

building_energy_dashboard:
  0:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_add_new.png
    title: 'Create new dashboard in ThingsBoard'
  1:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_config.png
    title: 'Set name to - Energy consumption report'
  2:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_add_aliases.png
    title: 'Configure required dashboard aliases'
  3:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_all_buildings_alias.png
    title: 'Use All Asset by type aliases to display all buildings in the dashboard'
  4:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_add_table.png
    title: 'Add table that shows all buildings in the system'
  5:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_configure_table.png
    title: 'Connect it with buildings alias'
  6:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_row_click_for_building.png
    title: 'Add Row-click event in buildings table'
  7:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_rowclick_configuration.png
    title: 'Row click event should update filters in all widgets on the dashboard'
  8:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_add_trendz_views.png
    title: 'Add all views from Trendz into new dashboard'
  9:
    image: /images/trendz/guide/building_energy/building_electricity_dashboard_add_trendz_confg.png
    title: 'Configure Trendz views to enable fitlering by building'

---


* TOC 
{:toc}

## Introduction

In today's competitive business landscape, companies are always looking for ways to reduce costs, improve their bottom line and implement sustainable business practices.
One of the most significant expenses for many businesses is energy consumption, particularly those that operate out of large buildings.
However, without accurate data on energy usage, identifying areas for improvement can be challenging. This includes tracking elements such as carbon emission accounting, an increasingly important aspect of sustainable operations.
In this article, we will describe how to gain insights into energy usage patterns, identify areas for improvement, and implement measures to reduce costs, improve sustainability, 
and integrate carbon emission accounting into everyday business practices.

**Task definition** - create an analytic dashboard to analyze energy consumption sources in the building and identify areas for improvement.

{% include images-gallery.html imageCollection="energy-analytic-dashboard" %}

### Implementation plan
* Create a table with energy consumption data breakdown by source (HVAC, lighting, plug loads, elevators, etc.)
* Create similar table but with breakdown by areas inside a building (offices, meeting rooms, kitchen, storage, etc.)
* Stacked bar chart to compare energy consumption by source.
* Stacked bar chart to compare current and previous year with monthly breakdown.
* Calculate carbon emissions in a building
* Create ThingsBoard dashboard to visualize data with filtering options

## Getting started:

### Prerequisites
Energy meters already installed in the building and connected to ThingsBoard via MQTT API. To simplify data aggregation and analysis, each meter has 2 attributes:
* `sourceType` - name of energy consumption source (HVAC, lighting, plug loads, elevators, etc.). There are multiple meters with the same source.
* `area` - name of the area where it is installed  (office, meeting room, hall kitchen, etc.). There are multiple meters in the area.

Energy meters has relations to the Building asset. Each building has relation to the Customer. Such relations simplify data aggregation and analysis on different levels - we can track metrics for specific building or for all buildings of specific customer.

### Step 1: Table with energy consumption by source
We have many different energy consumption sources in the building. To understand energy usage structure we will compute following metrics for each consumption source type:

* Energy consumed in kWh
* Price in USD
* CO2 emissions in kg

This table report should be able to show data for any building and any time range. Also user should be able to filter data by source type, area and building. Let's get started:

* Create table view in Trendz
* Add `energyMeter.sourceType` into columns section - it allows to split readings from energy meters by source type of the meter.
* Add `energyMeter.usageKWH` into columns section with aggregation `SUM` - this field shows total energy usage for each source.
* Add calculated field with label **Price**, set unit to `$` and decimals to `2`. Here is a code to calculate total price for each source based on the energy price in the building:

```javascript
var price = uniq(building.energyPrice);
var totalUsage = sum(energyMeter.usageKWH);

return totalUsage * price;
```

* Add calculated field with label **CO2 emissions**, set unit to `kg CO2e` and decimals to `1`

```javascript
var emissionConversionFactor = 0.21233;
var totalUsage = sum(energyMeter.usageKWH);

return totalUsage * emissionConversionFactor;
```

To make it easier to end users to understand the report lets sort it descending by default and add filter options:

* Add `energyMeter.sourceType` into filters section
* Add `energyMeter.area` into filters section
* Add `building` into filters section
* Open view settings, `General` section and configure default sorting
  * Click on `Sort order`
  * Enable descending sorting
  * Sort column - `usageKWH`
* Set default time range - this month
* Save report with the name **Energy consumption by source**

Report is ready, latter we will add it to the dashboard.

{% include images-gallery.html imageCollection="energy-consumption-by-source-table" %}

### Step 2: Table with energy consumption by area
Similar table report can be created, but in this case we will focus on areas instead of source types. For making that we should repeat the same steps as in the previous table report. 
The only difference is to use `energyMeter.area` instead of `energyMeter.sourceType` field. Save view with the following name - **Energy consumption by area**. 

{% include images-gallery.html imageCollection="energy-consumption-by-areas-table" %}

### Step 3: Compare energy usage by source type
Tables created in previous steps are usefull to get exact numbers about energy usage. But they are not ideal for quick compare of different consumption sources. To make it easier to compare energy usage by source type we will create a stacked bar chart.

* Create bar chart in Trendz
* Add `energyMeter.sourceType` into X-axis section
* Add `energyMeter.usageKWH` into Y-axis section
* Add `building` into filters section
* Set default time range - this month
* Open view settings, `General` section and configure default sorting
  * Click on `Sort order`
  * Enable descending sorting
  * Sort column - `usageKWH`
* Make bar chart horizontal by enabling `Horizontal Bar` checkbox in view settings
* Save report with the name **Bar: energy use compare by sources**

With such visualization it would be much quicker and easier understand top consumers in the system.

{% include images-gallery.html imageCollection="energy-compare-sources-bar" %}

### Step 4: Compare current and previous year energy usage with monthly breakdown
To better understand year over year and month over month dynamic of energy usage we will create a bar chart that will show monthly consumption. Also we will split it into multiple series to compare monthly energy consumption in different years.
Here is a description how to do that:

* Create bar chart in Trendz
* Add `Date` field with type `MONTH` into X-axis section - it allows to split data by months
* Add `energyMeter.usageKWH` into Y-axis section
* Add `Date` field with type `YEAR` into Series section - it allows to split data by year
* Add `energyMeter.sourceType` into filters section
* Add `energyMeter.area` into filters section
* Add `building` into filters section
* Set default time range - last 3 years
* Save report with the name **Bar: compare year-to-year energy usage**

Such visualization allows to quickly identify months with high energy consumption and compare it with previous year to understand year to year dynamic.

{% include images-gallery.html imageCollection="energy-compare-time-ranges" %}


### Step 5: Calculate carbon emissions and show dynamic over last 6 months
Final card should show overall CO2 footprint of the building to simplify carbon emission accounting. Showing only 1 metric is not interesting because it does not describe the whole picture. Since we work on energy usage analysis let's add additional insights to this card.
First one would be a comparison with the previous time period. Second one would be a dynamic of carbon emissions over the last 6 months as a sparkline chart.

* Create `Card with line chart` view in Trendz
* Add calculated field with label **CO2 emissions**, set unit to `kg CO2e` and decimals to `1`

```javascript
var emissionConversionFactor = 0.21233;
var totalUsage = sum(energyMeter.usageKWH);

return totalUsage * emissionConversionFactor;
```

* Set default time range to this month

Now we have card with CO2 emissions for the current month and with daily breakdown which would highlight abnormal behaviour and trend line. Now let's enable comparison:

* Open `General` view settings 
* Set checkbox `Enable comparison` to `true`
* Set card title to **CO2 emissions**
* Save view with name **Card: CO2 emissions insights**

Now our card has comparison of CO2 emissions. Value that we see is in percent compared to the previous time period. By default, value is green if it is higher than previous period and red if it is lower. 
But we can reverse color schema by enabling `Reverse compariosn colors` in view settings.

{% include images-gallery.html imageCollection="co2_emission_card_with_trend" %}

### Step 6: Create energy consumption analytic dashboard in ThingsBoard
In final step we will connect all views that we created into 1 interactive dashboard for our users. That dashboard can be shared with all our customers and it will show only data that is relevant to the user. They would be able to use filters to select buildings, 
consumption sources and areas. We begin with adding all Trendz views that we created on one dashboard in ThingsBoard:

* In ThingsBoard create dashboard with name **Energy consumption report**
* In Trendz: for each widget that we created in previous steps:
  * Click on `Share to ThingsBoard` button and copy `Add on Dashboard`.
  * Select **Energy consumption report** dashboard.
  * Enable **Create alias** checkbox.
  * Select `Building` as a filter.
* Return to ThingsBoard **Energy consumption report** dashboard and tune dashboard layout.

Then we would create dashboard aliases that will be used to filter data in the dashboard.

* Create new alias **All buildings** - this alias would hold all buildings that are visible to the user.
  * Filter type - **Asset type**
  * Asset type - **Building**
* Create new alias **Selected entity** - this alias would hold an Entity that user clicked on.
  * Filter type - **Entity from dashboard state**
  * State entity parameter name - `selectedEntity`

Finally, we have to add hierarchy widget that will show all buildings/floors/areas in the hotel and allow user to select specific area. Once user would click on entity - **Filtered areas** alias will refresh and load all areas for the selected entity.
After that all Trendz widgets on the dashboard would be updated because they use **Filtered areas** alias as a datasource. As a result user will see occupancy data for the selected areas.

* Add ThingsBoard table widget `Cards` -> `Entities table` to the dashboard. It will show all buildings that are visible for the user.
  * Set datasource alias to **All buildings**
  * Latest data key - **Name**
* Add `On row click` action for entity table widget. It will update `selectedEntity` parameter in the dashboard state.
  * Action type - `Update current dashboard state`
  * State entity parameter name - `selectedEntity`
* For all Trendz widgets on the dashboard set datasource alias to `selectedEntity`.
* Save dashboard.

{% include images-gallery.html imageCollection="building_energy_dashboard" %}

## Summary
Reducing energy consumption and carbon emissions is crucial for businesses looking to improve their bottom line and sustainability. 
To achieve this, gaining insights into energy usage patterns and identifying areas for improvement is essential. 
By following the implementation plan outlined in this article, businesses can create an analytic dashboard to visualize their energy consumption data by source and areas inside the building, 
compare current and previous years with monthly breakdown, and compute CO2 emissions. These steps can help businesses reduce costs, improve sustainability, 
and contribute to a more sustainable future. By taking a proactive approach to energy consumption, businesses can position themselves for long-term success in a competitive business landscape.
