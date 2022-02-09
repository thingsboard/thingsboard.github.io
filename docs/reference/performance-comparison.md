---
layout: docwithnav
title: ThingsBoard Performance on different AWS instances
description: ThingsBoard Performance on different AWS instances results

postgres-only-1000:
    0:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/queue-stats.png  
        title: 'Thingsboard queue stats'
    1:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/api-usage.png
        title: 'Thingsboard API usage'
    2:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/htop.png
        title: 'htop'
    3:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/jmx-visualvm-monitoring.png
        title: 'JMX VisualVM monitoring'
    4:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    5:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/aws-instance-monitoring.png
        title: 'AWS instance monitoring'
    6:
        image: /images/reference/performance-aws-instances/method/t3-medium/postgres/aws-storage-monitoring.png
        title: 'AWS storage monitoring'

---

{% include /docs/reference/performance-comparison.md %}
