{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

The Custom translation feature allows you to add new languages not currently supported by ThingsBoard, edit the existing locale translations, and gives opportunity to customize specific dashboard GUI elements.

Go to the "Custom translation" tab of the "White labeling" page. On this page, you will find the current list of available languages and their translation progress indicated in percentages. While not all translations are complete, our team is constantly working on improving and expanding the list.

![image](https://img.thingsboard.io/user-guide/custom-translation/main-page-1-pe.png)

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
        image: https://img.thingsboard.io/user-guide/custom-translation/add-new-language-1-pe.png,
        title: Go to the "Custom translation" tab of the "White labeling" page and click the "Add new language" button located at the top of the "Custom translation" window;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/add-new-language-2-pe.png,
        title: In the new window, click on the "Language" field and select the desired language from the drop-down menu. The list is sorted by localization code. Then, click "Add";
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/add-new-language-3-pe.png,
        title: You&#39;ve successfully added a new language. Since translations for term keys have not yet been added, the translation progress is at 0%. By default, languages are sorted in alphabetical order by their localization code.
'
%}

{% include images-gallery.liquid imageCollection=addNewLanguagePE %}

You've successfully added a new language. Since translations for term keys have not yet been added, the translation progress is at 0%. As you add translations, the translation progress bar will increase.

## Change platform language

To change the ThingsBoard's interface language, follow these steps:

{% assign changeLanguagePE = '
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/change-language-1-pe.png,
        title: Navigate to your profile by clicking on the three dots in the top right corner of the screen and select "Account" tab;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/change-language-2-pe.png,
        title: Click on the "Language" field and choose desired system language from the drop-down list. For example, Italian;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/change-language-3-pe.png,
        title: Click the "Save" button to apply the changes;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/change-language-4-pe.png,
        title: As you can see, some elements of the menu and text have been translated into Italian.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=changeLanguagePE %}

After completing these steps, ThingsBoard's interface language will be changed to the language of your choice.
In this guide, we have chosen Italian as the system language for demonstration purposes. Next, we will set up a translation for it.

## Translation editing

Translation can be configured using either basic or advanced approach:
- Within the "Basic" tab, you can [manually add new term keys](#translation-editing-using-basic-mode) or edit translations for existing ones;
- In the "Advanced" tab, you can [upload a translation language file in JSON format](#translation-editing-using-advanced-mode).

### Translation editing using basic mode

Let's consider manually adding translations for term keys:

{% assign manualAdditionOfTranslationPE = '
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/manual-addition-of-translation-1-pe.png,
        title: Click on the "pencil" icon of the language you want to edit;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/manual-addition-of-translation-2-pe.png,
        title: You will see a table with three columns: the term key, its default value (in English), and a field for entering the translation;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/manual-addition-of-translation-3-pe.png,
        title: As you can see, not all translation fields are filled. Let&#39;s fill in the translation field for the "Home" menu item. Use the search to find the term key responsible for this menu item and enter its translation;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/manual-addition-of-translation-4-pe.png,
        title: The entered value will be automatically saved and applied when you click outside of this row.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=manualAdditionOfTranslationPE %}

The basic translating mode is convenient because you can apply different types of filtering:

ㅤ\- **Translated** is a key that has a translation for the current language;

ㅤ\- **Untranslated** is a key that has not been translated into the current language. This means that if you do not enter a translation for a key, its value will be displayed in English, as English is the default language;

ㅤ\- **Customized** is a key for which the translation has been overridden from the parent level. E.g. if you have changed the translation of the key "home" to "my system's home page", this key is marked as customized;

ㅤ\- **Added key** is a key added on the current level for current language or default one (English). When adding new keys, it's necessary to provide an English translation (second column), as this key will also be added for all other languages.

To clear a custom translation or reset its value to the one specified by the system administrator, click the broom icon in the term key row.

{% assign clearCustomTranslationPE = '
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/clear-custom-translation-1-pe.png,
        title: To clear a custom translation or reset its value to the one specified by the system administrator, click the broom icon in the term key row;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/clear-custom-translation-2-pe.png,
        title: The value has been reset to its default setting.
'
%}

{% include images-gallery.liquid imageCollection=clearCustomTranslationPE %}

### Translation editing using advanced mode

Advanced mode implies direct editing of JSON file that represents a custom translation. 
You can download any system locale translation, make all necessary changes you need and insert the prepared JSON translation map edit field.
Let's see how it works:

{% assign customTranslationInJsonPE = '
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/manual-addition-of-translation-1-pe.png,
        title: Click on the language to open its translation map;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/custom-translation-in-json-1-pe.png,
        title: Navigate to the "Advanced" tab, and then insert JSON from example below. After, click "Save";
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/custom-translation-in-json-2-pe.png,
        title: Check that the translation is applied ("Home" menu item should be translated to "Pagina principale di un sito web").
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

Imagine you manage a dashboard that is accessed by customers from various countries. To ensure everyone can understand the dashboard easily, you may want the names of the dashboard, widgets, devices, data keys, and any other dashboard components to appear in customer's specific language. 
This is where ThingsBoard's internationalization feature comes into play.

To make translation of mentioned elements dynamic use structure in the format **{i18n}**.
This structure ensures that the name of each element is pulled from the customer's individual translation map.

{% capture difference %}
**Please note:**
If the {i18n} structure is used but a translation isn't provided in the translation map, the {i18n} structure will be displayed.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Let's see how it works.

#### Custom translation for the dashboard title

- First, set a [custom translation](#translation-editing-using-advanced-mode) for your dashboard title within a translation map, using JSON format.
Here is an example of an entry for translating the dashboard title into Italian:

```text
...
  "custom": {
    "my-dashboard": {
      "title": "Dashboard per esempi"
    },
  }
...
```
- Navigate to the "Dashboards" page. You can either [create a new dashboard](/docs/pe/user-guide/dashboards/#create-new-dashboard){:target="_blank"} or select an existing one. Open the dashboard details;
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
        image: https://img.thingsboard.io/user-guide/custom-translation/dashboard-internalization-1-pe.png,
        title: Specify [custom translation](#translation-editing-using-advanced-mode) for the dashboard name in the translation map. In this example, we will use a translation map in JSON format;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/dashboard-internalization-2-pe.png,
        title: Navigate to the "Dashboards" page. You can either [create a new dashboard](/docs/pe/user-guide/dashboards/#create-new-dashboard){:target="_blank"} or select an existing one. Open the dashboard details;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/dashboard-internalization-3-pe.png,
        title: Enter the dashboard editing mode. Set a custom translation for the dashboard title using a structure in the format {i18n}: <b>{i18n:custom.my-dashboard.title}</b>. Apply changes;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/dashboard-internalization-4-pe.png,
        title: Make sure the dashboard title is correctly translated according to the translation map.
'
%}

{% include images-gallery.liquid imageCollection=translationOfDashboardNamePE %}

#### Custom translation for the widget title

- Set [custom translation](#translation-editing-using-advanced-mode) for the widget's name, the temperature column title, and the entity label column title in the translation map, using advanced mode.
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

- Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget){:target="_blank"} or use an existing one and enter its editing mode;
- In the widget settings, set the custom translations for:
  - Widget title - <b>{i18n:custom.my-widget.name}</b>;
  - Entity label column title - <b>{i18n:custom.my-widget.label-text}</b>;
  - Temperature column title - <b>{i18n:custom.my-widget.temperature}</b>;
- Apply all changes;
- Check that the widget's title, temperature column title, and entity label column title are correctly translated as per the translation map.

{% assign widgetInternalizationPE = '
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-1-pe.png,
        title: Specify [custom translation](#translation-editing-using-advanced-mode) for the widget&#39;s name, the temperature column title, and the entity label column title in the translation map;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-2-pe.png,
        title: [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-3-pe.png,
        title: Apply translation to the widget title - <b>{i18n:custom.my-widget.name}</b>, temperature column title - <b>{i18n:custom.my-widget.temperature}</b>, and entity label column title - <b>{i18n:custom.my-widget.label-text}</b>. Apply all changes;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-4-pe.png,
        title: Save the dashboard;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-5-pe.png,
        title: Check that the widget&#39;s title, temperature column title, and entity label column title are correctly translated as per the translation map.
'
%}

{% include images-gallery.liquid imageCollection=widgetInternalizationPE %}

#### Custom translation for the widget tooltip

- Set [custom translation](#translation-editing-using-advanced-mode) for the widget tooltip title in the translation map, using advanced mode.
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
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-tooltip-internalization-1-pe.png,
        title: Specify [custom translation](#translation-editing-using-advanced-mode) for the widget tooltip title in the translation map, using JSON format;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-tooltip-internalization-2-pe.png,
        title: Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-tooltip-internalization-3-pe.png,
        title: Navigate to the "Widget card" tab of the "Advanced" settings and set a custom translation for the widget title tooltip using a structure in the format {i18n} - <b>{i18n:custom.my-widget.name}</b>. Apply changes;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-tooltip-internalization-4-pe.png,
        title: Save the dashboard;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-tooltip-internalization-5-pe.png,
        title: Hover on widget title and check applied translation.
'
%}

{% include images-gallery.liquid imageCollection=widgetTooltipInternalizationPE %}

#### Using custom translation in the cell content function

Custom translation can be used in the cell content function in widgets like Entity Table, Timeseries table and Alarms table. JavaScript code requires quotes for the i18n.

- Set [custom translation](#translation-editing-using-advanced-mode) for each cell content function value in the translation map, using advanced mode.
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
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-1-pe.png,
        title: Define [custom translation](#translation-editing-using-advanced-mode) for each cell content function value in the translation map, using JSON format;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-2-pe.png,
        title: Open your dashboard on the "Dashboards" page. [Add an Entities table widget](/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget) or use an existing one and enter its editing mode;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-3-pe.png,
        title: Open the "temperature" data key configuration;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-4-pe.png,
        title: Use cell content function. Apply all changes;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-5-pe.png,
        title: Save the dashboard;
    === 
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-6-pe.png,
        title: Check the result. If the temperature value is between 20 and 70 degrees, the result in the temperature column will be "Temperatura normale";
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-7-pe.png,
        title: If the temperature value is greater than 70 degrees, the result in the temperature column will be "Alta temperatura";
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-8-pe.png,
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

- Set [custom translation](#translation-editing-using-advanced-mode) for each cell content function value in the translation map, using advanced mode.
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
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-cell-content-function-internalization-1-pe.png,
        title: Specify [custom translation](#translation-editing-using-advanced-mode) for the telemetry data;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-2-pe.png,
        title: Open your dashboard on the "Dashboards" page. [Add a new widget](/docs/pe/user-guide/widgets/#adding-a-widget-to-the-dashboard) - "HTML Value Card" from the "Cards" widgets bundle;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-3-pe.png,
        title: Specify the device that transmits temperature readings as the data source;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-4-pe.png,
        title: Now, navigate to the "Appearance" tab. Take the function from the example below and paste it into the "HTML" field. Click "Add";
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-5-pe.png,
        title: Save the dashboard;
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-6-pe.png,
        title: Check the result. The value in the HTML Value Card will change depending on the value of the incoming telemetry.
    ===
        image: https://img.thingsboard.io/user-guide/custom-translation/widget-internalization-usage-in-html-value-card-7-pe.png,
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