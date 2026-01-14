* TOC
{:toc}

## Overview

{% capture white-labeling-note %}
The **white labeling** feature is supported only in the **Professional Edition**.
{% endcapture %}
{% include templates/info-banner.md content=white-labeling-note %}

**White labeling** in **ThingsBoard** allows businesses to customize the platform's appearance and branding to align with their own corporate identity.
Please refer to the **ThingsBoard White Labeling** [documentation](/docs/pe/user-guide/white-labeling/){: target="_blank"}. There you will find step-by-step instructions on how to customize the **ThingsBoard logo** and web **interface**.

The **white labeling** feature supports particular **hierarchy**.
The tenant can override the configurations set by the system administrator,
tenant-set configurations can be overridden by the customer, and so on.

 ![hierarchy_scheme](https://img.thingsboard.io/edge/user-guide/white-labeling/hierarchy.webp){: style="display: block; margin: auto; max-height: 400px"}

Similarly, **white-labeling** configurations are propagated to the **Edge instances**:

* **Tenant-Owned Edge:** If the edge is owned by a **tenant**, the white labeling settings are retrieved from the **tenant level** and merged with those from the system administrator. 

![tenant-owned-edge](https://img.thingsboard.io/edge/user-guide/white-labeling/hierarchy-edge-tenant.webp){: style="display: block; margin: auto; max-height: 280px"}

* **Customer-Owned Edge:** If the edge is owned by a **customer**, the white labeling settings are taken from the **customer** of the edge and merged with those from the tenant and system administrator.
 
![customer-owned-edge](https://img.thingsboard.io/edge/user-guide/white-labeling/hierarchy-edge-customer.webp){: style="display: block; margin: auto; max-height: 390px"}

However, the displayed interface depends on the **account** used to log in to an **Edge** instance.

_**For example:** When a user logs in to a **customer-owned Edge** with the **tenant account**, that user will see the interface for a **tenant**._

![interface](https://img.thingsboard.io/edge/user-guide/white-labeling/interface.webp){: style="display: block; margin: auto; max-height: 400px"}

## Edge Login Page

**ThingsBoard** also allows customization of the login page. In a **multi-tenant environment**, domain-based branding defines the configurations that apply at login, meaning that different tenants can have different branding configurations. Read about **login page configurations** [here](/docs/pe/user-guide/white-labeling/#customize-the-login-page){: target="_blank"}.

_**For example:** If a user logs in from a specific domain (companyA.com), ThingsBoard applies the white labeling settings associated with that domain. If no custom domain is set, the default settings apply._

On the **Edge side** domain name is **not used** in any way.

{% capture edge-login %}
The appearance of the **Edge login page** depends on the **ownership** only.
{% endcapture %}
{% include templates/info-banner.md content=edge-login %}

_**For example:** When a user logs in to the **customer-owned Edge**, the **customer's** white-labeling login configurations are applied._

![edge-login-page](https://img.thingsboard.io/edge/user-guide/white-labeling/edge-login-page.webp){: style="display: block; margin: auto; max-height: 450px"}

## Other Configurations

The **white labeling** configuration for **Edge** is designed in the same way as for the **Platform (Server or Cloud)**. Please refer to the **Platform White Labeling documentation** for detailed configuration instructions:
* [Custom translation](/docs/pe/user-guide/custom-translation/){: target="_blank"}
* [Custom menu](/docs/pe/user-guide/custom-menu/){: target="_blank"}

## Next Steps

{% include templates/edge/guides-banner-edge.md %}

