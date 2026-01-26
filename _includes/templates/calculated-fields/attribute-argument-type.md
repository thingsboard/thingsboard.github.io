Uses **static** or **semi-static data** stored as entity attributes

**Examples:** model, maxTemperature, safeZone, buildingId

**Configuration:**
- **Argument type**: Attribute
- Choose the scope: **Server**, **Client**, or **Shared**.
- Specify the **attribute key**.
- Set the **argument name** - the variable name used in the script logic.
- Optionally, set **default value** for attribute.

{% assign attributeArgumentTypeCE = '
    ===
        image: /images/user-guide/calculated-fields/argument-attribute-1-ce.png
        title: Select the **attribute** argument type (3), choose the **attribute scope** (4), specify the **attribute key** (5), and set the **argument name** (6). Optionally, define a default value (7). Click **Add** (8) to add the argument.
'
%}

{% assign attributeArgumentTypePE = '
    ===
        image: /images/user-guide/calculated-fields/argument-attribute-1-pe.png
        title: Select the **attribute** argument type (3), choose the **attribute scope** (4), specify the **attribute key** (5), and set the **argument name** (6). Optionally, define a default value (7). Click **Add** (8) to add the argument.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
{% include images-gallery.liquid imageCollection=attributeArgumentTypePE %}
{% else %}  
{% include images-gallery.liquid imageCollection=attributeArgumentTypeCE %}
{% endif %}