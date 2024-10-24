---
layout: docwithnav-paas
assignees:
- ashvayka
title: Plan and billing
description: Billing options via ThingsBoard Cloud
redirect_from: "/products/paas/billing-info/"
subscription:
    0:
        image: /images/cloud/subscription.png
        title: 'Subscription details'
    1:
        image: /images/cloud/subscription-plan-usage.png
        title: 'Plan usage'
billingInfo:
    0:
        image: /images/cloud/billing-info.png
updatePaymentMethod:
    0:
        image: /images/cloud/update-payment-method.png
updateBillingInfo:
    0:
        image: /images/cloud/update-billing-info.png
invoices:
    0:
        image: /images/cloud/invoices.png
upcomingInvoice:
    0:
        image: /images/cloud/upcoming-invoice.png
        title: 'Upcoming invoice preview'
---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsTag="paas" %}

* TOC
{:toc}

The **ThingsBoard Cloud** allows customers to easily purchase subscription plans online. The online payment processing is secured by [Stripe](https://stripe.com/), which allows both credit and debit cards. ThingsBoard Inc. has no access to your card data.
You can easily pay for the subscription online, without manual paperwork.

Notice: payments are non-refundable.

### Subscription

**Subscription** tab displays all details about current subscription including current subscription plan, subscription status, current subscription period, applied discount.
**Plan details** section displays current subscription plan limits. It is also possible to view current plan usage by clicking on **Show usage** toggle. 

{% include images-gallery.html imageCollection="subscription" %}

### Billing information

**Billing information** tab allows managing current payment method (credit or debit card details) and billing details such as company name and billing address used for invoicing.

{% include images-gallery.html imageCollection="billingInfo" %}

#### Payment method

Allows managing current credit or debit card details. You may easily update it at any time by clicking on **Update** button.
In order to pay with the card the ***Owner name***, ***Country***, ***Card number***, ***Expiry date*** and ***CVC*** should be populated.

{% include images-gallery.html imageCollection="updatePaymentMethod" %}

#### Billing information

Consist of company contact details and billing address and is used by Stripe to generate the invoice. You may easily update this info by clicking on **Update** button.

{% include images-gallery.html imageCollection="updateBillingInfo" %}

### Invoices

**Invoices** tab displays list of automatically generated invoices. All invoices are available for download in a PDF-format.

{% include images-gallery.html imageCollection="invoices" %}

### Upcoming invoice

**Upcoming invoice** tab displays upcoming invoice preview that will be generated at the beginning of the next billing cycle. 

Note: When you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created.

{% include images-gallery.html imageCollection="upcomingInvoice" %}
