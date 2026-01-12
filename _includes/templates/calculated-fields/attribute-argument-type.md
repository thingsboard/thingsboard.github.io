Uses **static** or **semi-static data** stored as entity attributes

**Examples:** model, maxTemperature, safeZone, buildingId

**Configuration:**
- **Argument type**: Attribute
- Choose the scope: **Server**, **Client**, or **Shared**.
- Specify the **attribute key**.
- Set the **argument name** - the variable name used in the script logic.
- Optionally, set **default value** for attribute.

{% assign attributeArgumentType = '
    ===
        image: https://img.thingsboard.io/user-guide/calculated-fields/script/script-attribute-argument-1-ce.png
        title: Select the **attribute** argument type, choose the **attribute scope**, specify the **attribute key**, and set the **argument name**. Optionally, define a default value. Click **Add** to add the argument.
'
%}

{% include images-gallery.liquid imageCollection=attributeArgumentType %}
