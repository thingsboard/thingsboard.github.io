---
layout: docwithnav-paas
assignees:
- ashvayka
title: Plan and billing
description: Billing options via ThingsBoard Cloud
redirect_from: "/products/paas/billing-info/"

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsTag="paas" %}

* TOC
{:toc}

The **Plan and billing** section of [ThingsBoard Cloud](https://thingsboard.cloud/signup){:target="_blank"} allows tenant administrators to manage subscription plans, monitor usage, configure billing details, and review invoices. 

All online payments are securely processed by [Stripe](https://stripe.com/){:target="_blank"}. ThingsBoard Inc. does not store or have access to your card data.

{% capture difference %}
**Notice:** Payments are non‑refundable.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Accessing Plan and billing

Navigate to **Plan and billing** from the main menu. 

> This section is available to Tenant administrators only.

At the top of the page, the current subscription name and status are displayed.

If attention is required, warning banners may appear (for example, _"Your current plan is deprecated"_ or _"Your billing information is incomplete"_). 
Each banner contains a direct action link to resolve the issue.

## Subscription

The **Subscription** tab provides an overview of the current subscription and plan limits.

<b><font size="4">Management</font></b>

The **Management** section displays:
- **Subscription plan** – current plan name and status.
- **Subscription period** – start and end dates of the current billing cycle.
- **Next charge** – amount and scheduled billing date.

Available actions:
- [Update plan](#update-plan) – upgrade or change the subscription plan.
- [Cancel subscription](/docs/{{docsPrefix}}subscriptions/#how-to-cancel-my-subscription){:target="_blank"} – cancel the active subscription.
- **Apply coupon** – apply a valid discount coupon.

<b><font size="4">Subscription plan data</font></b>

This section displays plan limits and usage indicators.

You can switch between:
- **Entities & Features** – limits for entities, features, and add-ons.
- **API calls** – monthly quotas for messages, data points, rule engine executions, and other API-related limits.

Usage bars show current consumption relative to plan limits.   
The **Add to plan (+)** action allows extending limits or enabling additional features where available.

### Update plan

To change the current subscription plan, click **Update plan**.   

<b><font size="4">Step 1: Choose the Subscription Plan</font></b>   
At this step, all available ThingsBoard Cloud subscription plans are displayed. Your current plan is marked with the **Current plan** label.

To select another plan, click **Select** under the required option. 

To update your current plan, click **Customize** under the current plan.

<b><font size="4">Step 2: Customize</font></b>   
In this step, you can customize the selected plan by enabling add-ons and purchasing additional resource packs.

<b><font size="3">Add-ons</font></b>   
Allow enabling optional features, such as: [White labeling](/docs/{{docsPrefix}}user-guide/white-labeling/){:target="_blank"}, [Edge Computing](/docs/user-guide/edge-computing/){:target="_blank"}, [Trendz Analytics](/docs/trendz/){:target="_blank"}.

<b><font size="3">Top-ups</font></b>   
Allow extending plan limits. You can switch between:
- **Entities** – device, asset, customer, user, integration, and converter limits.
- **API calls** – message traffic, compute, storage, alarms, and email/SMS quotas.

To increase a limit, use the **+ / -** controls in the corresponding section.

If additional resources require a higher plan, the wizard displays an **Update to ... plan** option.

Click **Next: Summary** to proceed.

<b><font size="4">Step 3: Summary</font></b>   
The summary step displays the final subscription price.

If the subscription is updated in the middle of a billing cycle, the wizard may display an additional charge after plan update.

To confirm changes and apply the selected plan configuration, click **Update plan**.

## Billing information

The **Billing information** tab lets you manage your **payment method** and **billing details** used for invoicing.

### Payment method

Shows the currently configured payment method. If no card is added, a warning message is displayed. 

To add a payment method, click **Add** and provide the card holder name, country, card number, expiry date, and CVC.    
ThingsBoard Cloud supports both **credit and debit cards**.

> All payment processing is handled securely by [Stripe](https://stripe.com/){:target="_blank"}. 

Once validated, the card becomes the active payment method for future charges.

### Billing information

**Billing information** is used to generate invoices.

To update billing details, click **Update**, fill in the required fields, and save your changes.

## Invoices

The **Invoices** tab displays a list of all generated invoices for your subscription. 

Each invoice entry includes the invoice date, amount and currency, invoice number, payment type, and status. 

You can download invoices in PDF format or open them in a new browser tab. 

Invoices are generated automatically at the end of each billing cycle.

## Upcoming invoice

The **Upcoming invoice** tab shows a preview of the next invoice that will be generated.

> Note: This is a preview only. The invoice is not created until the billing cycle is completed.

## Audit logs

The **Audit logs** tab provides a history of billing‑related actions.

Audit logs help track administrative actions and support troubleshooting and compliance requirements.

## Learn more about plans

Learn more about available subscription plans, plan limits, and included features on the [Subscription page](/docs/paas/subscriptions/){:target="_blank"}.