
Use the "Calculated fields" page to manage all calculated fields from a single place.

> **Note:** The process of creating a calculated field is the same for [Devices](/docs/pe/user-guide/ui/devices/){:target="_blank"}, [Assets](/docs/pe/user-guide/ui/assets/){:target="_blank"}, [Device profiles](/docs/pe/user-guide/device-profiles/){:target="_blank"}, or [Asset profiles](http://10.7.1.72:4000/docs/pe/user-guide/asset-profiles/){:target="_blank"}.

**Steps:**
- Open the "Calculated fields" page from the left-hand menu.
- Click "+" → "Create new calculated field".
- In the configuration window, specify the target entity or profile to which the calculated field will be applied.

{% assign createCalculatedFieldCE2 = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-3-ce.png
        title: Open the **Calculated fields** page from the left-hand menu. Click **+** → **Create new calculated field**.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-4-ce.png
        title: In the configuration window, specify the **entity or profile** to which the calculated field will be applied.
'
%}

{% assign createCalculatedFieldPE2 = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-3-pe.png
        title: Open the **Calculated fields** page from the left-hand menu. Click **+** → **Create new calculated field**.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-4-pe.png
        title: In the configuration window, specify the **target entity or profile** to which the calculated field will be applied.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldCE2 %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldPE2 %}
{% endif %}

> ⚠️ **Notes:**<br> To create calculated fields and access their results, you must have [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} to:   
    - create calculated fields;   
    - read and write attributes and telemetry.   

> ⚠️ Calculated field configuration and management are available only at the [tenants](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} level.
