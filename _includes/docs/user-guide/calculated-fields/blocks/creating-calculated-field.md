> **Note:** To create calculated fields and access their data, make sure you have [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} to **create calculated fields**, as well as to **read and write attributes and telemetry**. Otherwise, this feature may be unavailable.

> **Note:** Only [tenants](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} have access to configure and manage calculated fields.

To create a calculated field, follow these steps:

- Select the **entity** (Device or Asset) or **profile** (Device profile / Asset profile) to which the calculated field will apply.
- In the entity details window, navigate to the **Calculated fields** tab.
- Click the "**+**" button and choose **Create new calculated field** from the dropdown menu.

A configuration window will open, where you can set up all parameters of the calculated field.

{% assign createCalculatedFieldCE = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-ce.png
        title: - Select the **entity** (Device or Asset) or **profile** (Device profile / Asset profile) to which the calculated field will apply.<br>- In the entity details window, navigate to the **Calculated fields** tab.<br>- Click the "**+**" button and choose **Create new calculated field** from the dropdown menu.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-ce.png
        title: A configuration window will open, where you can set up all parameters of the calculated field.
'
%}

{% assign createCalculatedFieldPE = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-pe.png
        title: - Select the **entity** (Device or Asset) or **profile** (Device profile / Asset profile) to which the calculated field will apply.<br>- In the entity details window, navigate to the **Calculated fields** tab.<br>- Click the "**+**" button and choose **Create new calculated field** from the dropdown menu.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-pe.png
        title: A configuration window will open, where you can set up all parameters of the calculated field.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldCE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldPE %}
{% endif %}