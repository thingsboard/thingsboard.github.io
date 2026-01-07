
The process of creating a calculated field is the same for [Devices](/docs/pe/user-guide/ui/devices/){:target="_blank"}, [Assets](/docs/pe/user-guide/ui/assets/){:target="_blank"}, [Device profiles](/docs/pe/user-guide/device-profiles/){:target="_blank"}, or [Asset profiles](http://10.7.1.72:4000/docs/pe/user-guide/asset-profiles/){:target="_blank"}.

- Open the "Calculated fields" page from the left-hand menu.
- Click "+" → "Create new calculated field".

{% assign createCalculatedFieldCE2 = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-ce.png
        title: Open the **Calculated fields** page from the left-hand menu. Click **+** → **Create new calculated field**.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-ce.png
        title: In the configuration window, specify the **entity or profile** to which the calculated field will be applied.
'
%}

{% assign createCalculatedFieldPE2 = '
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-1-pe.png
        title: Open the **Calculated fields** page from the left-hand menu. Click **+** → **Create new calculated field**.
    ===
        image: /images/user-guide/calculated-fields/create-new-calculated-field-2-pe.png
        title: In the configuration window, specify the **target entity or profile** to which the calculated field will be applied.
'
%}

{% if docsPrefix == null %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldCE2 %}
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% include images-gallery.liquid imageCollection=createCalculatedFieldPE2 %}
{% endif %}