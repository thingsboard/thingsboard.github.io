* TOC
{:toc}

The **Markdown/HTML Card** is a versatile widget for static or semi‑dynamic content on a ThingsBoard dashboard. 
It accepts **Markdown** or free‑form **HTML**. You can use it **with data sources** via **entity aliases** and **data keys** — or use it **without any data sources** at all.

<br><b><font size="3">Markdown vs HTML</font></b>

- **Markdown** is a simple syntax for formatting text. Its advantages are **speed and simplicity** — you don&#39;t need to know HTML to produce clean formatting.   
- **HTML** — choose this when you need precise control over layout, styling, or interactive elements (tables, icons, embedded media, complex grids).

<hr>

## Key capabilities

- **Dynamic content.** Author in Markdown or HTML; mix text, lists, tables, links, images, icons.
- **Optional data.** Pull telemetry/attributes via **entity alias** and **data keys** to inject values in a template or process them in a value function.
- **Actions & navigation.** Handle clicks on HTML elements (by *id*) to navigate to a dashboard state, open a dialog, or trigger another action.
- **Styling.** Use the dedicated **Markdown/HTML CSS** section; inline styles in your markup are also supported.
- **Fast integration.** Works well alongside other widgets (time series, tables, maps) and is ideal for notes, contextual explanations, and compact info cards.

<hr>

## How it works

<b><font size="4">Step 1 — Add the widget</font></b>

Choose the "**Markdown/HTML Card**" widget from the "**Cards**" widget bundle and place it on your dashboard.

{% include images-gallery.html imageCollection="step-1" %}

<b><font size="4">Step 2 — Configure data sources (optional)</font></b>

On the "**Data**" tab:
- Create an [Entity alias](/docs/{{docsPrefix}}user-guide/ui/aliases/){:target="_blank"} for the target entity (e.g., *Asset* → *Office A*).
- Add **data keys** (attributes/telemetry) you plan to use (e.g., *address*, *email*, *phone*).

These values become available to the widget&#39;s content logic (pattern or value function).

{% include images-gallery.html imageCollection="step-2" %}

<b><font size="4">Step 3 - Choose content generation</font></b>

You have two options on the "**Appearance**" tab:

- **1. Markdown/HTML pattern**   
  A simple template using placeholders like **${key}** (optional formatting like ${address:0}) that ThingsBoard replaces with values from the selected data source.   
  **Best for:** static layouts with a few dynamic inserts.   
  **Use a pattern** if:
    - You just need to "output the value as is".
    - Simple substitutions **${key}** and basic formatting (e.g., ${floor:0}) are sufficient.

  {% include images-gallery.html imageCollection="step-3-1" %}

- **2. Markdown/HTML value function**   
  A JavaScript function that receives data and the widget context, then returns a string with Markdown or HTML.   
  **Best for:** conditions/loops/calculations, combining multiple keys, switching layouts based on data.   
  **Use a value function** if:
    - You need logic (if/else, loops, switching layout based on data).
    - You want to combine multiple keys into complex markup or insert values only under certain conditions.

  {% include images-gallery.html imageCollection="step-3-2" %}

<b><font size="4">Step 4 — Content styling (CSS)</font></b>

Use the **Markdown/HTML CSS** section ("**Appearance**" tab) to style your card (recommended for maintainability). Inline styles inside your markup are also supported.

{% include images-gallery.html imageCollection="step-4" %}

<b><font size="4">Step 5 — Card styling</font></b>

In the "**Widget card**" tab:

- **Card title**. Set the **Title/Icon** and their style to keep your dashboard consistent.
- **Card styles**. Configure **Text color**, **Background color**, and **other Card style** options (padding, margin, border radius, shadow).
- **Card buttons**. Optionally disable "**Enable fullscreen**" and "**Enable data export**" for purely informational cards.

{% include images-gallery.html imageCollection="step-5" %}

<b><font size="4">Step 6 - Actions & navigation</font></b>

The Markdown/HTML Card supports [Widget header button](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#widget-header-button){:target="_blank"} and [On HTML element click](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#on-html-element-click){:target="_blank"} actions.

**On HTML element click** lets you bind an action to any HTML element with an id (e.g., navigate to a state, open a dialog).

Use "**On HTML element click**" action.
- Add an element identifier in your HTML (e.g., id="floor"). 
- Bind an action to that element (navigate to a state, open a popover/dialog, etc.). 
- This lets you build interactive cards or banners without writing a full custom widget.

**Tip**: make sure the **id** in your HTML **exactly** matches the identifier you configure in the **action**.

{% include images-gallery.html imageCollection="step-6" %}

<hr>

## Example: Office information card

Create a compact office info card.

{% include images-gallery.html imageCollection="example-markdown-html-card-7" %}

<br><b><font size="4">Step 1. Prepare the entity</font></b>

Create the [Asset](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"} named "**Office A**" with the following attributes:
- **address**: 645 5th Ave, New York 
- **officeManager**: Emma Johnson
- **phone**: +1 121 333 4455 
- **email**: office.a@mail.com

(You can also [import](/docs/{{docsPrefix}}user-guide/bulk-provisioning/#import-entities){:target="_blank"} a prefilled Asset from [CSV](/docs/pe/user-guide/widgets/cards/resources/office_a_asset.csv){:target="_blank" download="office-a-asset.csv"}).

{% include images-gallery.html imageCollection="example-markdown-html-card-1" %}

<br>

<b><font size="4">Step 2.1 Add the widget</font></b>

- Open or [create](/docs/{{docsPrefix}}user-guide/dashboards/#create-new-dashboard){:target="_blank"} a dashboard, then add the **Markdown/HTML Card** widget from the **Cards** widget bundle.

{% include images-gallery.html imageCollection="example-markdown-html-card-2" %}

<b><font size="4">Step 2.2 Configure data ("Data" tab)</font></b>

- **Define the entities from which the data will be retrieved**. To do this, add an entity alias:
  - In the **Entity alias** field, enter the name "**Office A**" and click **Create new**.
  - Specify the filter type as **Single entity**, select the type **Asset**, choose the asset "**Office A**", and click "**Add**".
- In the **Data keys** section, add the following: **address**, **officeManager**, **email**, and **phone**.

{% include images-gallery.html imageCollection="example-markdown-html-card-3" %}

<b><font size="4">Step 2.3 Enable dynamic content ("Appearance" tab)</font></b>

- Enable the "**Use markdown/HTML value function**" option.
- Insert the **Markdown/HTML value function** below. 

```js
if (data.length) {
    const buildingAttributes = ['address', 'officeManager', 'phone', 'email'];

    let information = {
        entityName: data[0].entityName ? data[0].entityName : 'Not found',
        buildingAttributesField: {}
    };

    for (let key of buildingAttributes) {
        information.buildingAttributesField[key] = data[0][key] ? data[0][key] : 'Not found';
    }

    const attributesNotFound = Object.values(information.buildingAttributesField).every(value => value === 'Not found');

    if (attributesNotFound) {
        return '<div class="no-data-card">' +
            `<h1 class="card-title">Information on ${information.entityName}</h1>` +
            '<div class="no-data-block">' +
                '<div class="no-data-content">' +
                    '<div><svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none"><path d="M14.8203 46.1166C16.6985 46.0291 18.2877 45.3003 19.588 43.9301C20.8883 42.56 21.5529 40.9274 21.5529 39.0325C21.5529 40.9274 22.1886 42.56 23.4889 43.9301C24.7892 45.3003 26.3784 46.0291 28.2566 46.1166C26.3784 46.204 24.7892 46.9328 23.4889 48.303C22.8602 48.9489 22.3653 49.7146 22.0329 50.5555C21.7005 51.3963 21.5374 52.2955 21.5529 53.2006C21.5529 51.3057 20.9172 49.6732 19.588 48.303C18.2877 46.9328 16.6985 46.204 14.8203 46.1166ZM21.5529 25.1267C25.1937 24.9518 28.2855 23.5234 30.8283 20.8413C33.371 18.1593 34.6424 14.9817 34.6424 11.2793C34.6424 14.9817 35.9138 18.1593 38.4566 20.8413C40.9994 23.5234 44.0912 24.9227 47.7609 25.1267C45.3626 25.2434 43.1665 25.9139 41.1439 27.1966C39.1501 28.4501 37.5608 30.141 36.3761 32.24C35.2203 34.3389 34.6424 36.5837 34.6424 39.0325C34.6424 35.3301 33.371 32.1234 30.8283 29.4413C28.2855 26.7301 25.1937 25.3017 21.5529 25.1267ZM31.1461 56.524C33.8912 56.4074 36.2317 55.3288 38.1387 53.3172C40.0458 51.3057 40.9994 48.9152 40.9994 46.1166C40.9994 48.9152 41.9529 51.3057 43.86 53.3172C45.7671 55.3288 48.0787 56.4074 50.8237 56.524C48.0787 56.6406 45.7671 57.7193 43.86 59.7308C41.9529 61.7423 40.9994 64.1328 40.9994 66.9315C40.9994 64.1328 40.0458 61.7423 38.1387 59.7308C36.316 57.7765 33.8041 56.6245 31.1461 56.524ZM50.8237 42.7057C53.5688 42.5891 55.8804 41.5105 57.7875 39.4989C59.6946 37.4874 60.6192 35.0969 60.6192 32.2691C60.6192 35.0678 61.5728 37.4583 63.4799 39.4698C65.3869 41.4813 67.7274 42.56 70.4725 42.6766C67.7274 42.7932 65.3869 43.8718 63.4799 45.8834C61.5728 47.8949 60.6192 50.2854 60.6192 53.084C60.6192 50.2854 59.6657 47.8949 57.7875 45.8834C55.8804 43.901 53.5688 42.8223 50.8237 42.7057Z" fill="#00695C" fill-opacity="0.4"/></svg></div>' +
                    '<p class="no-data-title">There is no information about the building</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    } else {
        return '<div class="card">' +
            `<h1 class="card-title">Information on ${information.entityName}</h1>` +
            '<div class="attributes">' +
                '<div class="attribute_container">' +
                    '<div class="icon_wrapper">' +
                        '<tb-icon class="icon" color="primary" matButtonIcon>place</tb-icon>' +
                    '</div>' +
                    '<div class="attribute_content">' +
                        `<p class="attribute">${information.buildingAttributesField.address}</p>` +
                        '<span class="attribute_label">Address</span>' +
                    '</div>' +
                '</div>' +
                '<div class="attribute_container">' +
                    '<div class="icon_wrapper">' +
                        '<tb-icon class="icon" color="primary" matButtonIcon>person</tb-icon>' +
                    '</div>' +
                    '<div class="attribute_content">' +
                        `<p class="attribute">${information.buildingAttributesField.officeManager}</p>` +
                        '<span class="attribute_label">Contact person</span>' +
                    '</div>' +
                '</div>' +
                '<div class="attribute_container">' +
                    '<div class="icon_wrapper">' +
                        '<tb-icon class="icon" color="primary" matButtonIcon>call</tb-icon>' +
                    '</div>' +
                    '<div class="attribute_content">' +
                        `<p class="attribute">${information.buildingAttributesField.phone}</p>` +
                        '<span class="attribute_label">Phone</span>' +
                    '</div>' +
                '</div>' +
                '<div class="attribute_container">' +
                    '<div class="icon_wrapper">' +
                        '<tb-icon class="icon" color="primary" matButtonIcon>mail_outline</tb-icon>' +
                    '</div>' +
                    '<div class="attribute_content">' +
                        `<p class="attribute">${information.buildingAttributesField.email}</p>` +
                        '<span class="attribute_label">Email</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
}
```
{:.copy-code.expandable-5}

- Scroll to **Markdown/HTML CSS** and insert the CSS from the documentation.

```css
.card, .no-data-card {
    padding: 0px;
    height: 100%;
}

.card-title {
    position: sticky;
    top: 0;
    z-index: 2;
    font-size: 16px;
    letter-spacing: 0.25px;
    padding: 16px;
}
.attribute_container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px;
    border-bottom: 1px solid #0000000d;
}

.icon {
    z-index: 1;
}

.icon_wrapper {
    display: flex;
    position: relative;
    align-items: center;
    padding: 8px;
    border: 1px solid var(--tb-primary-100, #305680);
    border-radius: 4px;
}

.icon_wrapper:before {
    content: '';
    z-index: 0;
    position: absolute;
    opacity: 0.1;
    background-color: var(--tb-primary-200, #305680);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.attribute, .attribute_label {
    font-size: 14px;
    line-height: 20px;
}

.attribute_label {
    color: #00000061;
}

.no-data-card {
    display: flex;
    flex-direction: column;
}

.no-data-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 345px;
    padding: 0 15px;
    margin: 0 auto;
    text-align: center;
}

.no-data-content {
    transform: translateY(-30%);
}

.no-data-block p {
    font-weight: 500;
}

.no-data-title {
    color: rgba(0, 0, 0, 0.54);
}

.no-data-subtitle {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.38);
}
```
{:.copy-code.expandable-5}

{% include images-gallery.html imageCollection="example-markdown-html-card-4" %}

<b><font size="4">Step 2.4 Card settings ("Widget card" tab)</font></b>

- Optionally disable "**Enable fullscreen**" and "**Enable data export**" if the card is informational only.
- Click "**Add**".

{% include images-gallery.html imageCollection="example-markdown-html-card-5" %}

<b><font size="4">Step 2.5 Save</font></b>

- Resize the card freely within your dashboard layout. Then, save the dashboard.

{% include images-gallery.html imageCollection="example-markdown-html-card-6" %}

<b><font size="4">Expected result</font></b>

You&#39;ll see a compact, clean office contact card on the dashboard. Missing attributes display as "Not found". Resize the card freely within your dashboard layout.

{% include images-gallery.html imageCollection="example-markdown-html-card-7" %}

<b><font size="4">Download configured Office A Card widget</font></b>

You can download the configured [Office A card widget](/docs/pe/user-guide/widgets/cards/resources/office_a_card_widget.json){:target="_blank" download="office_a_card_widget.json"} and reuse it in your dashboards.

**Important**: After importing, check the **entity alias** and **data keys** — you may need to re-bind them.