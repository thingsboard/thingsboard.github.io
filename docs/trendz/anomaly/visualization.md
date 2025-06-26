---
layout: docwithnav-trendz
title: Anomaly Visualization
description: Visualize detected anomalies.

---

* TOC
{:toc}

## Anomalies View Report

The Anomaly View Report is a fully configured solution for anomaly visualization. The view functionality is quite 
similar to the Review tab in the anomaly model details (read more about the Review tab [here](/docs/trendz/anomaly/overview#review-tab)).

You can customize the view using the following settings:
- **Default Anomaly Selection:** Sets the default anomaly selected when opening the view.
  - Options: `last`, `max score index`
  - Location: *Settings → General → Default anomaly selection*

- **Hide Anomalies List:** Hides the anomalies list widget from the view.
  - Location: *Settings → View mode fields → Hide anomalies list*

- **Hide Anomalies Chart:** Hides the anomalies chart widget from the view.
  - Location: *Settings → View mode fields → Hide anomalies chart*

- **Timerange:** Sets the time range used for the anomalies view.
  - Location: Upper central section of the view

- **Filters:** Selects which items will be shown in the widget.
  - Location: Upper left section of the view

## Anomaly View Field

Trendz provides low-level tools for anomaly visualization via **Anomaly Fields**, which can be used to build custom dashboards and insights.

To use anomaly fields:

1. Open any view (e.g., timeseries, card, bar chart).
2. Drag and drop the **Anomaly Field** onto the canvas.
3. Click on it to configure its properties.

### Field Properties

- **Anomaly:** (`SCORE`, `SCORE_INDEX`) Select which anomaly metric to visualize:
  - `SCORE`: Like *temperature* - shows anomaly intensity at a point in time.
  - `SCORE_INDEX`: Like *area* - accumulates across anomaly duration to show total impact.

- **Model:** Select an active anomaly model. Only active models are available for visualization.

- **Aggregation:** Defines how values are combined across time or entities:
  - For **SCORE**:
    - Recommended: `MAX`, `LATEST`, `COUNT`
    - Not recommended: `SUM`, `AVG`, `MIN`, `UNIQ`
  - For **SCORE_INDEX**:
    - Recommended: `COUNT`, `SUM`, `UNIQ`, `LATEST`
    - Acceptable but less sensitive: `AVG`, `MIN`

  Use `MAX` for `SCORE` to catch peak anomaly intensity.
  Use `SUM` for `SCORE_INDEX` to visualize the full anomaly footprint.

- **Label (Anomaly):** field name as shown in the chart legend.

- **Chart Type:** Choose from: `bar`, `line`, or `area`

Anomaly fields are ideal for building flexible visualizations across time and devices without storing anomalies in ThingsBoard.

## Anomaly Business Entity Fields

Available **only when "Save to TB" is enabled** (See [this section](/docs/trendz/anomaly/save-to-tb.md) for more on saving to ThingsBoard).

To use:
1. Open any view.
2. Navigate to a business entity linked to an anomaly model.
3. Drag and drop the following fields:
  - `{Model Name} SCORE`
  - `{Model Name} SCORE INDEX`

- Use **Anomaly Fields** when you need to **count anomalies** or avoid saving them to TB.
- Use **Business Entity Fields** when anomalies are saved, and you want precise control.

## Best Practices

Use the following guidance to choose the right tool for visualizing and analyzing anomalies in Trendz:

- **If you want a simple, plug-and-play anomaly visualization:**  
  - Use **Anomaly Report**.
- **If you need flexible visualizations and don’t want to save anomalies to ThingsBoard:**  
  - Use **Anomaly Fields**.
- **If you need fine control over which anomalies are saved to ThingsBoard:** 
  - Use **Anomaly Business Entity Fields**.

## Next Steps

{% assign currentGuide = "AnomalyDetection" %}{% include templates/trndz-guides-banner.md %}
