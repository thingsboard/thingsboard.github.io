<b><font size="3">Title</font></b>

Specify a clear and descriptive name for the calculated field that reflects its purpose.

<b><font size="3">Type</font></b>

{{ calculatedFieldType }}

{% assign typeOfCalculatedField = '
    ===
        image: /images/user-guide/calculated-fields/calculated-field-general-1-ce.png
        title: Enter a <b>descriptive name</b> for the calculated field and select its <b>type</b>.
'
%}

{% include images-gallery.liquid imageCollection=typeOfCalculatedField %}

<br><b><font size="3">Debug mode</font></b>

Enabling **Debug mode** allows you to track events, states, and potential errors related to the execution of a calculated field. This greatly simplifies development and troubleshooting.

{% include templates/debug-mode.md %}
