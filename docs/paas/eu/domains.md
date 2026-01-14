---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: Managing domain
description: Domain managing through EU ThingsBoard Cloud

register-domain:
    0:
        image: https://img.thingsboard.io/user-guide/domain/adding-new-domain-1-paas-eu.png
        title: 'Go to the "OAuth 2.0" page of the "Security" section. On the "Domains" tab click the "plus" icon;'
    1:
        image: https://img.thingsboard.io/user-guide/domain/adding-new-domain-2-paas-eu.png
        title: 'Enter valid domain name in the "Domain name" field and click "Add" button;'
    2:
        image: https://img.thingsboard.io/user-guide/domain/adding-new-domain-3-paas-eu.png
        title: 'Here you will find a reminder to add CNAME records to the DNS configuration of your domain. Click the "I&#39;ve added CNAME records" button. The domain verification and certificate provisioning will start;'
    3:
        image: https://img.thingsboard.io/user-guide/domain/adding-new-domain-4-paas-eu.png
        title: 'If succeeded, you will see your domain name on the "Domains" tab.'

login-with-domain:
    0:
        image: https://img.thingsboard.io/user-guide/domain/domain-login-1-paas-eu.png
        title: 'Now you can use your domain name to access EU ThingsBoard Cloud web interface and services. Try to login by entering the chosen domain name in the browser address line.'

domain-details:
    0:
        image: https://img.thingsboard.io/user-guide/domain/domain-details-1-paas-eu.png
        title: 'To view details about a registered domain, simply click on it to open the domain details dialog;'
    1:
        image: https://img.thingsboard.io/user-guide/domain/domain-details-2-paas-eu.png
        title: 'This dialog provides information about registered domain CNAME record and issued "SSL certificate" details including current validity period (Not before and Not after).'

delete-domain:
    0:
        image: https://img.thingsboard.io/user-guide/domain/delete-domain-1-paas-eu.png
        title: 'To delete the registered domain click "trash" icon in the domai&#39;s row you want to delete.'
    1:
        image: https://img.thingsboard.io/user-guide/domain/delete-domain-2-paas-eu.png
        title: 'In the confirmation dialog, click "Yes" if you are sure you want to delete the domain.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/pe/user-guide/domains.md %}