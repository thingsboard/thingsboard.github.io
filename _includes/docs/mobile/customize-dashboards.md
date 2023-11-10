{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

* TOC
{:toc}

## Overview

{{appPrefix}} allows configuring how dashboards list will look in mobile application home screen.
All configuration options related to mobile app are available in dashboard details form. 

## Dashboard image

You can configure dashboard image for mobile app in dashboard details form:

{% if docsPrefix == 'pe/' %}
1. Go to the **Dashboard groups** through the main menu on the left of the screen;
2. Open target dashboard group;
{% else %}
1. Go to the **Dashboards** through the main menu on the left of the screen;
{% endif %}
2. Click on the dashboard you want to modify;
3. In the opened dashboard details click **edit** button;
4. Upload desired image to **Dashboard image** field;
5. Click **Apply changes** button;

{% include images-gallery.html imageCollection="dashboard-image" %}

## Dashboard order

You can configure dashboards order in mobile app home screen:

{% if docsPrefix == 'pe/' %}
1. Go to the **Dashboard groups** through the main menu on the left of the screen;
2. Open target dashboard group;
{% else %}
1. Go to the **Dashboards** through the main menu on the left of the screen;
{% endif %}
2. Click on the dashboard you want to modify;
3. In the opened dashboard details click **edit** button;
4. Input desired order in the **Dashboard order in mobile application** field;
5. Click **Apply changes** button;

{% include images-gallery.html imageCollection="dashboard-order" %}

## Hide dashboard in mobile app

You can hide particular dashboards from mobile app home screen:

{% if docsPrefix == 'pe/' %}
1. Go to the **Dashboard groups** through the main menu on the left of the screen;
2. Open target dashboard group;
{% else %}
1. Go to the **Dashboards** through the main menu on the left of the screen;
{% endif %}
2. Click on the dashboard you want to modify;
3. In the opened dashboard details click **edit** button;
4. Check **Hide dashboard in mobile application** checkbox;
5. Click **Apply changes** button;

{% include images-gallery.html imageCollection="hide-dashboard" %}
