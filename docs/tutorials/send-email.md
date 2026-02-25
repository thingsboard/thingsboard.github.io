---
layout: docwithnav
assignees:
- stitenko
title: Send email on alarm
description: Send email Workflow

add-recipients:
    0:
        image: /images/tutorials/send-email/send-email-add-recipients-1-ce.png
        title: 'Specify the notification recipients.'

add-template:
    0:
        image: /images/tutorials/send-email/send-email-add-template-1-ce.png
        title: 'Select the delivery method.'
    1:
        image: /images/tutorials/send-email/send-email-add-template-2-ce.png
        title: 'Define the notification content.'

add-rule:
    0:
        image: /images/tutorials/send-email/send-email-add-rule-1-ce.png
        title: 'Specify the trigger, template, and notification recipients.'
    1:
        image: /images/tutorials/send-email/send-email-add-rule-2-ce.png
        title: 'Configure trigger conditions.'

verification:
    0:
        image: /images/tutorials/send-email/send-email-verification-1.png
        title: 'The email notification is sent to all users of Customer A.'
    1:
        image: /images/tutorials/send-email/send-email-verification-2.png
        title: 'The email contains the device name and reported temperature value.'

---

{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/tutorials/send-email.md %}