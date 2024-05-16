{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

The Custom translation feature of the ThingsBoard allows you to add new languages not currently listed, enhance the translation of existing ones, and perform translation for specific GUI elements on dashboards.

Go to the "Custom translation" tab of the "White labeling" page. On this page, you will find the current list of available languages and their translation progress indicated in percentages. While not all translations are complete to 100%, our team is constantly working on improving and expanding the list.

![image](/images/user-guide/custom-translation/main-page-1-pe.png)

On the custom translation page, you can customize any language according to your needs, download an existing language translation file in JSON format, or delete a language using the respective buttons.

{% capture difference %}
**Please note:**
<br>
The initial list of custom translations is created by the system administrator. A tenant cannot delete the system's custom translations but can make changes to them and add new translations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Adding new language

To add new language, follow these steps:

- Go to the "Custom translation" tab of the "White labeling" page and click the "Add new language" button located at the top of the Custom translation window;
- In the new window, click on the "Language" field and select the language you need from the drop-down menu. The list is sorted by localization code. Then, click "Add";

{% assign addNewLanguagePE = '
    ===
        image: /images/user-guide/custom-translation/add-new-language-1-pe.png,
        title: Go to the "Custom translation" tab of the "White labeling" page and click the "Add new language" button located at the top of the "Custom translation" window;
    ===
        image: /images/user-guide/custom-translation/add-new-language-2-pe.png,
        title: In the new window, click on the "Language" field and select the desired language from the drop-down menu. The list is sorted by localization code. Then, click "Add";
    ===
        image: /images/user-guide/custom-translation/add-new-language-3-pe.png,
        title: You've successfully added a new language. Since translations for term keys have not yet been added, the translation progress is at 0%. By default, languages are sorted in alphabetical order by their localization code.
'
%}

{% include images-gallery.liquid imageCollection=addNewLanguagePE %}

You've successfully added a new language. Since translations for term keys have not yet been added, the translation progress is at 0%. As you add translations, the translation progress bar will increase.

## Change platform language

To change the ThingsBoard's interface language, follow these steps:

{% assign changeLanguagePE = '
    ===
        image: /images/user-guide/custom-translation/change-language-1-pe.png,
        title: Navigate to your profile by clicking on the three dots in the top right corner of the screen and select "Account" tab;
    ===
        image: /images/user-guide/custom-translation/change-language-2-pe.png,
        title: Click on the "Language" field and choose desired system language from the dropdown list. For example, Italian;
    ===
        image: /images/user-guide/custom-translation/change-language-3-pe.png,
        title: Click the "Save" button to apply the changes;
    ===
        image: /images/user-guide/custom-translation/change-language-4-pe.png,
        title: As you can see, some elements of the menu and text have been translated into Italian.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=changeLanguagePE %}

After completing these steps, ThingsBoard's interface language will be changed to the language of your choice.
In this guide, we have chosen Italian as the system language for demonstration purposes. Next, we will set up a translation for it.

## Set up translation

The translation is configured in the Translation map.
To open the translation map, click on the language row or the pencil icon for the selected language.

{% assign changeLanguagePE = '
    ===
        image: /images/user-guide/custom-translation/translation-map-1-pe.png,
        title: To open the translation map, click on the language row or its pencil icon for the selected language;
    ===
        image: /images/user-guide/custom-translation/translation-map-2-pe.png,
        title: You will see a table with three columns: term key, its default value (in English), and a field for entering the key value in the language of your choice;
'
%}

{% include images-gallery.liquid imageCollection=changeLanguagePE %}

Translation can be configured in two ways: basic and advanced:
- Within the "Basic" tab, you can [manually add new term keys](#editing-translation-using-basic-mode) or edit translations for existing ones;
- In the "Advanced" tab, you can [upload a translation language file in JSON format](#editing-translation-using-advanced-mode).

### Editing translation using basic mode

In the "Basic" settings mode, the translation map consists of three columns: the term key, its default value (in English), and a field for entering the translation.
The basic translating mode is convenient because you can apply different types of filtering:

- Translated - are those keys, that have a translation for the current language;
- Untranslated - are those keys, that have not been translated into the current language. This means that if you do not enter a translation for a key, its value will be displayed in English, as English is the default language;
- Customized - are those keys for which the translation has been overridden. E. g. if you have changed the translation of the key "home" to "my system's home page", this key is marked as customized;
- Added key - is a key added at the current level. When adding new keys, it's necessary to provide an English translation (second column), as this key will also be added for all other languages.

Let's consider manually adding translations for term keys:

{% assign manualAdditionOfTranslationPE = '
    ===
        image: /images/user-guide/custom-translation/manual-addition-of-translation-1-pe.png,
        title: Click on the row of the language you need to open its translation map;
    ===
        image: /images/user-guide/custom-translation/manual-addition-of-translation-2-pe.png,
        title: You will see a table with three columns: term key, its default value (in English), and a field for entering the key value in the language of your choice;
    ===
        image: /images/user-guide/custom-translation/manual-addition-of-translation-3-pe.png,
        title: As you can see, not all translation fields are filled. Let&#39;s fill in the translation field for the "Home" menu item. Use the search to find the term key responsible for this menu item and enter its translation;
    ===
        image: /images/user-guide/custom-translation/manual-addition-of-translation-4-pe.png,
        title: The entered value will be automatically saved and applied when you click outside of this row.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=manualAdditionOfTranslationPE %}

To clear a custom translation or reset its value to the one specified by the system administrator, click the broom icon in the term key row.

{% assign clearCustomTranslationPE = '
    ===
        image: /images/user-guide/custom-translation/clear-custom-translation-1-pe.png,
        title: To clear a custom translation or reset its value to the one specified by the system administrator, click the broom icon in the term key row;
    ===
        image: /images/user-guide/custom-translation/clear-custom-translation-2-pe.png,
        title: The value has been reset to the default value.
'
%}

{% include images-gallery.liquid imageCollection=clearCustomTranslationPE %}

### Editing translation using advanced mode

You can add/update custom translations using JSON format. For this use advanced editing mode. This JSON will overwrite the default translation. Let's see how it works:

{% assign customTranslationInJsonPE = '
    ===
        image: /images/user-guide/custom-translation/manual-addition-of-translation-1-pe.png,
        title: Click on the language to open its translation map;
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-json-1-pe.png,
        title: Navigate to the "Advanced" tab and paste custom translation in JSON. In this tutorial, we will use the custom translation map from the example below. After, click "Save";
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-json-2-pe.png,
        title: The translation is complete. Check the translation, specifically the "Home" menu item.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=customTranslationInJsonPE %}

<b>Example of the custom translation map:</b>
```json
{
  "home": {
    "home": "Pagina principale di un sito web"
  },
  "custom": {
    "group":{
      "office":"Clienti di Office 1"
    },
    "my-dashboard": {
      "title": "Dashboard per esempi"
    },
    "my-widget": {
      "name":"Widget per dispositivo sensore",
      "label-text": "Etichetta per dispositivo sensore",
      "temperature": "Etichetta della temperatura",
      "low-temperature": "Bassa temperatura",
      "high-temperature": "Alta temperatura",
      "normal-temperature": "Temperatura normale"
    }
  }
}
```
{: .copy-code}

## Platform's internalization

Imagine you manage a dashboard that is accessed by customers from various countries. To ensure everyone can understand the dashboard easily, you'll want the names of the dashboard, widgets, devices, and data keys to appear in customer's preferred language. 
This is where ThingsBoard's internationalization feature comes into play.

Each customer must have a unique translation map. This map contains custom translations for the names of items like devices, assets, and any other components on the dashboard. 
When setting up these elements, instead of entering a fixed name, you use a structure in the format **{i18n}**. 
This structure ensures that the name of each element is pulled from the customer's individual translation map.

{% capture difference %}
**Please note:**
If the {i18n} structure is used but a translation isn't provided in the translation map, the {i18n} structure will be displayed.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let's see how it works.

#### Translation of the dashboard's name

- First, define a [custom translation](#adding-a-translation-using-a-language-translation-file) for your dashboard title within a translation map, using JSON format. Here's an example entry:

```text
...
  "custom": {
    "my-dashboard": {
      "title": "Dashboard per esempi"
    },
  }
...
```
- Navigate to the "Dashboards" page. You can either [create a new dashboard](/docs/pe/user-guide/dashboards/#create-new-dashboard) or select an existing one. Open the dashboard details;
- Enter the dashboard editing mode. Set a custom translation for the dashboard title using a structure in the format {i18n}:
```text
{i18n:custom.my-dashboard.title}
```
- Apply changes;
- Make sure the dashboard title is correctly translated according to the translation map. Then, open the dashboard;
- While in edit mode, click on the "Manage dashboard states" menu option. Locate the default dashboard state and enter its edit mode;
- Change the default dashboard state name to <b>{i18n:custom.my-dashboard.title}</b> and apply all changes;
- Finally, check that the dashboard state title is correctly translated as well.

{% assign translationOfDashboardNamePE = '
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-1-pe.png,
        title: Specify [custom translation](#translation-map) for the dashboard name in the translation map. In this example, we will use a translation map in JSON format;
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-2-pe.png,
        title: Navigate to the "Dashboards" page. You can either [create a new dashboard](/docs/pe/user-guide/dashboards/#create-new-dashboard) or select an existing one. Open the dashboard details;
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-3-pe.png,
        title: Enter the dashboard editing mode. Set a custom translation for the dashboard title using a structure in the format {i18n}: <b>{i18n:custom.my-dashboard.title}</b>. Apply changes;
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-4-pe.png,
        title: Make sure the dashboard title is correctly translated according to the translation map. Then, open the dashboard;
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-5-pe.png,
        title: While in edit mode, click the "Manage dashboard states" menu item. Find the default dashboard state and enter its edit mode;
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-6-pe.png,
        title: Change the default dashboard state name to <b>{i18n:custom.my-dashboard.title}</b> and apply all changes;
    ===
        image: /images/user-guide/custom-translation/dashboard-internalization-7-pe.png,
        title: Finally, check that the dashboard state title is correctly translated as well.
'
%}

{% include images-gallery.liquid imageCollection=translationOfDashboardNamePE %}

#### Translation of the widget's title

- Define [custom translation](#adding-a-translation-using-a-language-translation-file) for the widget's name, the temperature column title, and the entity label column title in the translation map, using JSON format.
Here's an example entry:

```text
...
  "custom": {
    "my-widget": {
      "name":"Widget per dispositivo sensore",
      "label-text": "Etichetta per dispositivo sensore",
      "temperature": "Etichetta della temperatura"
    },
  }
...
```
- Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
- In the widget settings, set the custom translations for:
  - Widget title - <b>{i18n:custom.my-widget.name}</b>;
  - Entity label column title - <b>{i18n:custom.my-widget.label-text}</b>;
  - Temperature column title - <b>{i18n:custom.my-widget.temperature}</b>;
- Apply all changes;
- Check that the widget's title, temperature column title, and entity label column title are correctly translated as per the translation map.

{% assign widgetInternalizationPE = '
    ===
        image: /images/user-guide/custom-translation/widget-internalization-1-pe.png,
        title: Specify [custom translation](#adding-a-translation-using-a-language-translation-file) for the widget&#39;s name, the temperature column title, and the entity label column title in the translation map;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-2-pe.png,
        title: [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-3-pe.png,
        title: Apply translation to the widget title - <b>{i18n:custom.my-widget.name}</b>, temperature column title - <b>{i18n:custom.my-widget.temperature}</b>, and entity label column title - <b>{i18n:custom.my-widget.label-text}</b>. Apply all changes;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-4-pe.png,
        title: Save the dashboard;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-5-pe.png,
        title: Check that the widget&#39;s title, temperature column title, and entity label column title are correctly translated as per the translation map.
'
%}

{% include images-gallery.liquid imageCollection=widgetInternalizationPE %}

<br>
<b>Translation of the widget's tooltip:</b>

- Define [custom translation](#adding-a-translation-using-a-language-translation-file) for the widget tooltip title in the translation map, using JSON format.
Here's an example entry:

```text
...
  "custom": {
    "my-widget": {
      "name":"Widget per dispositivo sensore"
    },
  }
...
```
- Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
- Navigate to the "Widget card" tab of the "Advanced" settings and set a custom translation for the widget title tooltip using a structure in the format {i18n} - <b>{i18n:custom.my-widget.name}</b>;
- Apply changes;
- Hover on widget title and check applied translation.

{% assign widgetTooltipInternalizationPE = '
    ===
        image: /images/user-guide/custom-translation/widget-tooltip-internalization-1-pe.png,
        title: Specify [custom translation](#adding-a-translation-using-a-language-translation-file) for the widget tooltip title in the translation map, using JSON format;
    ===
        image: /images/user-guide/custom-translation/widget-tooltip-internalization-2-pe.png,
        title: Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
    ===
        image: /images/user-guide/custom-translation/widget-tooltip-internalization-3-pe.png,
        title: Navigate to the "Widget card" tab of the "Advanced" settings and set a custom translation for the widget title tooltip using a structure in the format {i18n} - <b>{i18n:custom.my-widget.name}</b>. Apply changes;
    ===
        image: /images/user-guide/custom-translation/widget-tooltip-internalization-4-pe.png,
        title: Save the dashboard;
    ===
        image: /images/user-guide/custom-translation/widget-tooltip-internalization-5-pe.png,
        title: Hover on widget title and check applied translation.
'
%}

{% include images-gallery.liquid imageCollection=widgetTooltipInternalizationPE %}

#### Using custom translation in the cell content function

Custom translation can be used in the cell content function in widgets like Entity Table, Timeseries table and Alarms table. JavaScript code requires quotes for the i18n.

- Define [custom translation](#adding-a-translation-using-a-language-translation-file)  for each cell content function value in the translation map, using JSON format.
Here's an example entry:

```text
...
  "custom": {
    "my-widget": {
      "low-temperature": "Bassa temperatura",
      "high-temperature": "Alta temperatura",
      "normal-temperature": "Temperatura normale"
    },
  }
...
```
- Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
- Open the "temperature" data key configuration;
- Use cell content function. An example of the function we use is provided below:
- Apply all changes;
- Check the result. The value in the column responsible for temperature readings will change depending on the value of the incoming telemetry.

{% assign widgetCellContentFunctionInternalizationPE = '
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-1-pe.png,
        title: Define [custom translation](#adding-a-translation-using-a-language-translation-file)  for each cell content function value in the translation map, using JSON format;
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-2-pe.png,
        title: Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-3-pe.png,
        title: Open the "temperature" data key configuration;
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-4-pe.png,
        title: Use cell content function. Apply all changes;
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-5-pe.png,
        title: Save the dashboard;
    === 
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-6-pe.png,
        title: Check the result. If the temperature value is between 20 and 70 degrees, the result in the temperature column will be "Temperatura normale";
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-7-pe.png,
        title: If the temperature value is greater than 70 degrees, the result in the temperature column will be "Alta temperatura";
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-8-pe.png,
        title: If the temperature value is less than 20 degrees, the result in the temperature column will be "Bassa temperatura".
'
%}

{% include images-gallery.liquid imageCollection=widgetCellContentFunctionInternalizationPE %}

<b>JavaScript code example for cell content function</b>
```javascript
if(value>70){
    return "{i18n:custom.my-widget.high-temperature}";
}else if(value<20){
    return "{i18n:custom.my-widget.low-temperature}";
}else{
    return "{i18n:custom.my-widget.normal-temperature}";
}
```
{: .copy-code}

#### Using custom translation in HTML Value Card widget

- Define [custom translation](#adding-a-translation-using-a-language-translation-file)  for each cell content function value in the translation map, using JSON format.
  Here's an example entry:

```text
...
  "custom": {
    "my-widget": {
      "low-temperature": "Bassa temperatura",
      "high-temperature": "Alta temperatura",
      "normal-temperature": "Temperatura normale"
    },
  }
...
```
- Open your dashboard on the "Dashboards" page. [Add a new widget](/docs/pe/user-guide/widgets/#adding-a-widget-to-the-dashboard) - "HTML Value Card" from the "Cards" widgets bundle. 
Specify the device that transmits temperature readings as the data source;
- Now, navigate to the "Appearance" tab. Take the function from the example below and paste it into the "HTML" field. Click "Add";
- Save the dashboard;
- Check the result. The value in the HTML Value Card will change depending on the value of the incoming telemetry.

{% assign widgetInternalizationUsageInHtmlValueCardPE = '
    ===
        image: /images/user-guide/custom-translation/widget-cell-content-function-internalization-1-pe.png,
        title: Specify [custom translation](#adding-a-translation-using-a-language-translation-file) for the telemetry data;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-2-pe.png,
        title: Open your dashboard on the "Dashboards" page. [Add a new widget](/docs/pe/user-guide/widgets/#adding-a-widget-to-the-dashboard) - "HTML Value Card" from the "Cards" widgets bundle;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-3-pe.png,
        title: Specify the device that transmits temperature readings as the data source;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-4-pe.png,
        title: Now, navigate to the "Appearance" tab. Take the function from the example below and paste it into the "HTML" field. Click "Add";
    ===
        image: /images/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-5-pe.png,
        title: Save the dashboard;
    ===
        image: /images/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-6-pe.png,
        title: Check the result. The value in the HTML Value Card will change depending on the value of the incoming telemetry.
    ===
        image: /images/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-7-pe.png,
'
%}

{% include images-gallery.liquid imageCollection=widgetInternalizationUsageInHtmlValueCardPE %}

<b>Example of using custom translation in the HTML Vale Card:</b>
```html
<script>
    var description = document.getElementsByClassName('description')[0];
    var temperature = ${temperature};
    if(temperature>70){
        description.innerText = "{i18n:custom.my-widget.high-temperature}";
    }else if(temperature<20){
        description.innerText  = "{i18n:custom.my-widget.low-temperature}";
    }else{
        description.innerText = "{i18n:custom.my-widget.normal-temperature}"
    }

</script>

<div class='card'>
    <div class='content'>
        <div class='column'>
            <h1>Thermostat Device</h1>
            <div class='value'>
                Temperature: ${temperature:0} °C
            </div>
            <div class='description'>
            </div>
        </div>
        <img height="80px" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Temperature-icon.png" alt="Temperature icon">
    </div>
</div>
```
{: .copy-code}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}