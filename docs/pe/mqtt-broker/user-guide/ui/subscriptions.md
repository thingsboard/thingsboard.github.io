---
layout: docwithnav-pe-mqtt-broker
title: Subscriptions
description: Subscriptions management

subscription-session:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/subscription-session-1.png
    title: 'Open Subscriptions page and click on the table row.'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/subscription-session-2.png
    title: 'Add, edit or remove subscriptions.'
  2:
    image: /images/pe/mqtt-broker/user-guide/ui/subscription-session-3.png
    title: 'For this subscription, for example, we changed "Retain as Published" to true and "Subscription Identifier" to 6.'
  3:
    image: /images/pe/mqtt-broker/user-guide/ui/subscription-session-4.png
    title: 'Click "Update" button to apply changes.'
  4:
    image: /images/pe/mqtt-broker/user-guide/ui/subscription-session-5.png
    title: 'The subscription parameters "Retained as Published" and "Subscription ID" have been successfully updated.'

subscriptions-table:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/subscriptions-table-1.png
    title: 'The Subscriptions table displays all broker subscriptions.'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/subscriptions-table-2.png
    title: 'The "Filter" window allows easily filtering of the table by each column.'
    
clear-empty-subscription-nodes:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/clear-empty-subscription-nodes-1.png
    title: 'Click on the button "Clear empty subscription nodes" in the top right corner.'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/clear-empty-subscription-nodes-2.png
    title: 'Confirm action.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/user-guide/ui/subscriptions.md %}
