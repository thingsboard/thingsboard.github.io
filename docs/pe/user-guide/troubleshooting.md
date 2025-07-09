---
layout: docwithnav-pe
title: Troubleshooting
description: ThingsBoard IoT Platform troubleshooting

metrics-dashboards:
  0:
    image: /images/user-guide/troubleshooting/attributes-cache-grafana.webp
    title: 'Statistics about Attributes cache efficiency.'
  1:
    image: /images/user-guide/troubleshooting/core-and-js-metrics-grafana.webp
    title: 'Statistics about requests to TB Core and JS processors.'
  2:
    image: /images/user-guide/troubleshooting/db-metrics-grafana.webp
    title: 'Statistics about `attributes` and `timeseries` persistence to the PostgreSQL.'
  3:
    image: /images/user-guide/troubleshooting/rule-engine-latency-grafana.webp
    title: 'Statistics about time it took to process messages inside of the Rule Engine.'
  4:
    image: /images/user-guide/troubleshooting/rule-engine-metrics-grafana.webp
    title: 'Statistics about processing of the message inside of the Rule Engine.'
  5:
    image: /images/user-guide/troubleshooting/single-service-metrics-grafana.webp
    title: 'Separate statistics for each service. You can choose the service in the upper left corner.'
  6:
    image: /images/user-guide/troubleshooting/transport-metrics-grafana.webp
    title: 'Statistics about messages in Transport services.'
  7:
    image: /images/edge/user-guide/troubleshooting/downlinks-state-grafana.webp
    title: 'The state of downlink messages from Cloud to Edge'
---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/troubleshooting.md %}