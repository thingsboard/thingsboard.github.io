
Calculated fields can be created either **centrally** or **in the context of a specific entity or profile**, depending on where the calculation logic should be applied.

> **Note:** The process of creating a calculated field is the same for **Devices**, **Assets**, **Device profiles**, or **Asset profiles**.

<b><font size="4">Where to create a calculated field</font></b>

There are two available options:

<b><font size="3">Option 1 — From the global Calculated fields page</font></b>

Use the **Calculated fields page** to manage all calculated fields from a single place.

**Steps:**
- Open the **Calculated fields** page from the left-hand menu.
- Click "**+**" → **Create new calculated field**.
- In the configuration window, specify the **target entity or profile** to which the calculated field will be applied.

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

This option is best suited for centralized management of calculated fields across all entities.

<b><font size="3">Option 2 — Inside an entity or profile</font></b>

You can also create a calculated field directly in a specific [Device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"}, [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}, [Device profile](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}, or [Asset Profile](/docs/{{docsPrefix}}user-guide/asset-profiles/){:target="_blank"}.

**Steps:**
- Open the **entity** or **profile** details.
- Go to the **Calculated fields** tab.
- Click **+** → **Create new calculated field**.

{% assign createCalculatedFieldCE = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-ce.png
        title: - Open the **entity** or **profile** details.<br>- Go to the **Calculated fields** tab.<br>- Click **+** → **Create new calculated field**.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-ce.png
        title: The calculated field configuration window will open.
'
%}

{% assign createCalculatedFieldPE = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-pe.png
        title: - Open the **entity** or **profile** details.<br>- Go to the **Calculated fields** tab.<br>- Click **+** → **Create new calculated field**.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-pe.png
        title: The calculated field configuration window will open.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldCE %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldPE %}
{% endif %}

This option is suitable if you prefer working with an individual entity

> ⚠️ **Notes:**<br> To create calculated fields and access their results, you must have [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"} to:   
    - **create calculated fields**;   
    - **read and write attributes and telemetry**.   

> ⚠️ Calculated field configuration and management are available **only at the [tenants](/docs/{{docsPrefix}}user-guide/ui/tenants/){:target="_blank"} level**.
