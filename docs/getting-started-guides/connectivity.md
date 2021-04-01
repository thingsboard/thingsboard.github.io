---
layout: docwithnav
assignees:
- ikulikov
title: Connectivity diagram
description: Understand how to connect your IoT devices to ThingsBoard

---

{% capture connectivityContent %}
ThingsBoard provides a lot of device connectivity options. The diagram below is designed to provide a visual overview of existing options and help you to choose the correct option for your devices. 
In case you have not found out how to connect your device using the diagram or something is not clear, please [contact us](/docs/contact-us/) and help us to improve this guide.
{% endcapture %}
{% include templates/info-banner.md content=connectivityContent %}

{% include mermaid-graph.html 
graphId="connectivityGraph" 
file="resources/connectivity.mm" 
links-json="resources/connectivity-links.json" %}

