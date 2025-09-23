---
layout: docwithnav-pe-mqtt-broker
title: Managing domain
description: Domain managing through TBMQ

register-domain:
  0:
    image: /images/user-guide/domain/adding-new-domain-1-pe.png
    title: 'Go to the "OAuth 2.0" page of the "Security" section. On the "Domains" tab click the "plus" icon;'
  1:
    image: /images/user-guide/domain/adding-new-domain-2-pe.png
    title: 'Enter valid domain name in the "Domain name" field and click "Add" button;'
  2:
    image: /images/user-guide/domain/adding-new-domain-3-pe.png
    title: 'You can see your domain name on the "Domains" tab.'

login-with-domain:
  0:
    image: /images/user-guide/domain/domain-login-1-pe.png
    title: 'Now you can use your domain name to access ThingsBoard web interface and services. Try to login by entering the chosen domain name in the browser address line.'

domain-details:
  0:
    image: /images/user-guide/domain/domain-details-1-pe.png
    title: 'To view details about a registered domain, simply click on it to open the domain details dialog. Switch to editing mode by clicking the large orange button;'
  1:
    image: /images/user-guide/domain/domain-details-2-pe.png
    title: 'Make the required modifications. Confirm and save your changes by clicking the "Apply changes" button.'

delete-domain:
  0:
    image: /images/user-guide/domain/delete-domain-1-pe.png
    title: 'To delete the domain click "Delete" button on the "Domain" tab;'
  1:
    image: /images/user-guide/domain/delete-domain-2-pe.png
    title: 'In the confirmation dialog, click "Yes" if you are sure you want to delete the domain.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/pe/mqtt-broker/domains.md %}