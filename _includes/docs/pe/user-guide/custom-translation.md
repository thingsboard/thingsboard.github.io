{% assign feature = "Custom translations" %}{% include templates/pe-feature-banner.md %}

{% assign addEntityTableWidgetLink = "/docs/getting-started-guides/helloworld-pe/#step-32-add-an-entities-table-widget" %}
{% if docsPrefix == "paas/" %}
{% assign addEntityTableWidgetLink = "/docs/paas/getting-started-guides/helloworld/#step-32-add-an-entities-table-widget" %}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
{% assign addEntityTableWidgetLink = "/docs/paas/eu/getting-started-guides/helloworld/#step-32-add-an-entities-table-widget" %}
{% endif %}

* TOC
{:toc}

ThingsBoard supports a multilingual interface through its built-in internationalization (i18n) system. Select and use the interface in the language that suits you best.

However, for more specific requirements, the **Custom translation** feature is available, which allows you to:
- [Add new languages](#adding-new-language);
- [Modify or extend](#modify-current-translation) existing translations;
- Use [custom translations](#custom-translation) for dashboard titles, widgets, devices, telemetry keys, and other interface elements.

## Change platform language

To change the language of your account, follow these steps:
- Click the three-dot icon in the top-right corner of the screen and select "Account".
- In the profile settings, choose the desired language from the dropdown list.
- Apply the changes.

After that, the ThingsBoard interface will switch to the selected language.

{% assign changeLanguagePE = '
    ===
        image: /images/user-guide/custom-translation/change-language-1-pe.png,
        title: Navigate to your profile by clicking on the three dots in the top right corner of the screen and select "Account".
    ===
        image: /images/user-guide/custom-translation/change-language-2-pe.png,
        title: Click on the "Language" field and choose desired system language from the drop-down list.
    ===
        image: /images/user-guide/custom-translation/change-language-3-pe.png,
        title: Click the "Save" button to apply the changes;
    ===
        image: /images/user-guide/custom-translation/change-language-4-pe.png,
        title: After that, the ThingsBoard interface will switch to the selected language.
'
%}

{% include images-gallery.liquid imageCollection=changeLanguagePE %}

## Adding new language

If the desired language is not in the list, you can add a new one. To do this:

- Go to the "Custom translation" tab of the "White labeling" page, and click the "Add new language" button in the upper-right corner.
- In the window that opens, select the desired language from the list.
- You can immediately upload a [JSON file](/docs/user-guide/resources/nl_custom_translation.json){:target="_blank"} with a translation map for quick localization setup, or leave this step for later and gradually fill in the translations.
- Click "Add".

The new language has been successfully added. You and your users can now [use it as the interface language for your instance](#change-platform-language).

Since the JSON file I provided includes only a limited set of translation keys, the translation progress is currently at 5%.
As you continue adding more translations, the progress indicator will automatically increase.

{% assign addNewLanguagePE = '
    ===
        image: /images/user-guide/custom-translation/add-new-language-1-pe.png,
        title: Go to the "Custom translation" tab of the "White labeling" page. Click the "Add new language" button in the upper-right corner.
    ===
        image: /images/user-guide/custom-translation/add-new-language-2-pe.png,
        title: Select the desired language from the list.
    ===
        image: /images/user-guide/custom-translation/add-new-language-3-pe.png,
        title: You can immediately upload a JSON file with a translation map for quick localization setup, or leave this step for later and gradually fill in the translations. Then, click "Add".
    ===
        image: /images/user-guide/custom-translation/add-new-language-4-pe.png,
        title: The new language has been successfully added. You and your users can now use it as the interface language for your instance. Since the JSON file I provided includes only a limited set of translation keys, the translation progress is currently at 5%. As you continue adding more translations, the progress indicator will automatically increase.
'
%}

{% include images-gallery.liquid imageCollection=addNewLanguagePE %}

## Translation editor

Go to the "**White labeling**" page and open the "**Custom translation**" tab. Here you&#39;ll see a list of available languages and their translation progress indicated in percentages.

![image](/images/user-guide/custom-translation/main-page-1-pe.png)

{% capture difference %}
**Please note:** The initial list of custom translations is created by the system administrator. A tenant cannot delete the system&#39;s custom translations but can make changes to them and add new translations.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

You can modify or extend the translation for any language. To do this, click the "pencil" icon next to the language you want to edit.

In the top-right corner, you&#39;ll find a toggle to switch between basic and advanced settings:
- On the "Basic" tab, you can [edit existing translation key](#modify-current-translation) or [add new ones](#adding-new-translation-key).
- On the "Advanced" tab, you can [upload a JSON file containing a translation map](#upload-translation-map-from-json-file) with keys and their corresponding translations.

Just below, you&#39;ll see a table with three columns:
- A terminology key used to link a user interface element with its translation.
- Input field for the key value in English. This value will be used as a fallback for all languages that don&#39;t have a specific translation for this key.
- Input field for the key value in the selected language.

{% assign translationEditor = '
    ===
        image: /images/user-guide/custom-translation/translation-editor-1-pe.png,
        title: Click the "pencil" icon button next to the language you want to open the editor menu.
    ===
        image: /images/user-guide/custom-translation/translation-editor-2-pe.png,
        title: You&#39;ll see a table with three columns: The term key, which links an interface element to a translation; Input field for the key value in English. This value will be used as a fallback for all languages that don&#39;t have a specific translation for this key; Input field for the key value in the selected language.
'
%}

{% include images-gallery.liquid imageCollection=translationEditor %}

### Filters

Below the translation map, you&#39;ll find convenient filters to help you locate specific keys:
- The "**Translated**" filter displays keys that already have a translation for the selected localization.
- The "**Untranslated**" shows keys that are still missing translations. 
- The "**Customized**" filter highlights only the keys whose translations have been manually modified by the user.
- The "**Added key**" shows the keys that were manually added to the localization file.

{% assign translationEditor = '
    ===
        image: /images/user-guide/custom-translation/term-filters-1-pe.png,
        title: The "**Translated**" filter displays keys that already have a translation for the selected localization.
    ===
        image: /images/user-guide/custom-translation/term-filters-2-pe.png,
        title: The "**Untranslated**" shows keys that are still missing translations.
    ===
        image: /images/user-guide/custom-translation/term-filters-3-pe.png,
        title: The "**Customized**" filter highlights only the keys whose translations have been manually modified by the user.
    ===
        image: /images/user-guide/custom-translation/term-filters-4-pe.png,
        title: The "**Added key**" shows the keys that were manually added to the localization file.
'
%}

{% include images-gallery.liquid imageCollection=translationEditor %}

### Adding new translation key

To add a new translation key, go to the translation map of the desired language and follow these steps:
- Click the plus icon in the top-right corner.
- A new row will appear in the table below. Fill in the fields with the appropriate values — enter the key, its English value, and the value for the selected language.
- Then click anywhere outside the input field to apply the changes.

> The newly created key will be added to every language in your language list. All of these languages will use the English value as the default key value unless you provide a custom translation.

{% assign addingNewTranslationKey = '
    ===
        image: /images/user-guide/custom-translation/adding-new-translation-key-1-pe.png,
        title: Go to the translation map of the desired language and click the "plus" icon in the top-right corner.
    ===
        image: /images/user-guide/custom-translation/adding-new-translation-key-2-pe.png,
        title: A new row will appear in the table below. Fill in the fields with the appropriate values — enter the key, its English value, and the value for the selected language. Then click anywhere outside the input field to apply the changes.
'
%}

{% include images-gallery.liquid imageCollection=addingNewTranslationKey %}

### Modify current translation

Let&#39;s take a look at how to edit an existing translation for a terminology key:

{% assign manualAdditionOfTranslationPE = '
    ===
        image: /images/user-guide/custom-translation/modify-current-translation-1-pe.png,
        title: Go to the language editing menu and use the search to find the key you want to edit.
    ===
        image: /images/user-guide/custom-translation/modify-current-translation-2-pe.png,
        title: Update the translation for that key.
===
        image: /images/user-guide/custom-translation/modify-current-translation-3-pe.png,
        title: Then click anywhere outside the input field to apply the changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=manualAdditionOfTranslationPE %}

To reset the translation value of a key to the one defined by the system administrator, click the "broom" icon in that key&#39;s row.

{% assign clearCustomTranslationPE = '
    ===
        image: /images/user-guide/custom-translation/clear-custom-translation-1-pe.png,
        title: To reset the translation value of a key to the one defined by the system administrator, click the "broom" icon in that key&#39;s row.
    ===
        image: /images/user-guide/custom-translation/clear-custom-translation-2-pe.png,
        title: The translation has been reset to the default value.
'
%}

{% include images-gallery.liquid imageCollection=clearCustomTranslationPE %}

### Upload translation map from JSON file

You can upload a JSON file containing a translation map with keys and their corresponding translations.
This option is useful if you have a large number of translation keys, and creating them manually through the basic interface would be too time-consuming.

- Go to the language editing menu.
- Switch to the "Advanced" tab. 
- Insert translation map with keys and their corresponding translations in JSON format. 
- Click "Save".

{% assign customTranslationInJsonPE = '
    ===
        image: /images/user-guide/custom-translation/upload-translation-from-json-1-pe.png,
        title: Go to the language editing menu and switch to the "Advanced" tab. Insert translation map with keys and their corresponding translations in JSON format. Then, click "Save".
'
%}

{% include images-gallery.liquid imageCollection=customTranslationInJsonPE %}

Example of the translation map:
```json
{
  "dashboard": {
    "dashboards": "Instrumententafeln"
  },
  "notification": {
    "notification-center": "Benachrichtigungszentrale"
  },
  "white-labeling": {
    "white-labeling": "Weißkennzeichnung"
  },
  "integration": {
    "integrations-center": "Integrationszentrum"
  }
}
```
{: .copy-code}

## Custom translation

You can provide custom translations for new custom menu items or individual UI elements (such as dashboard titles, widget names, device names, data keys, etc.) using translation keys in the **i18n** format.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/NQ92phUUsYM" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<br>

To add custom translations:

**1.** In the title field of the interface element, instead of plain text, insert a key with the `i18n:` prefix wrapped in curly braces:

```text
{i18n:custom.translation.key}
```

**&#42;** where:<br>
ㅤㅤ&#8208; **i18n:** - required prefix.<br>
ㅤㅤ&#8208; **custom.translation.key** - the internationalization key that has been added to the translation map.

**2.** Then, add the corresponding value for this key in the selected language&#39;s translation map.

| **Term key**                   | **English (United States)** | **Selected language**          |
|:-------------------------------|:----------------------------|--------------------------------|
| your.custom.key                | Value in English            | Value in the selected language |
| ------------------------------ | --------------------        | -------------------            |

> **Note**: If the **i18n** structure is used as the title of a UI element, but the corresponding key is not included in the translation map, the **i18n** string itself will be displayed as-is.

<object width="70%" data="/images/user-guide/custom-translation/i18n.png"></object>

> **Tips**:
- Always add translations for all required languages.
- Avoid duplicate keys; use a structured hierarchy (e.g., custom.section.subsection).
- Test how the key is displayed after switching the UI language.

### Using custom translation in the dashboard

Let's say you're an English-speaking user who manages a dashboard that is accessed by clients from different countries.
To ensure that every user can easily understand the interface, the names of all components — including the dashboard title, widgets title, device names, data keys, and any other elements — should be displayed in the user&#39;s preferred language.

As an example, I&#39;ll apply a custom translation for German language to the previously listed elements of the "Weather" dashboard.
Of course, you can use any other language depending on your specific needs.

First, add the "Weather" dashboard to your instance:
- [Download the dashboard configuration as a JSON file](/docs/user-guide/resources/weather_dashboard.json){:target="_blank"}.
- [Import](/docs/{{docsPrefix}}user-guide/dashboards/#import-dashboard){:target="_blank"} it into your ThingsBoard instance.

For this dashboard, I&#39;m emulating telemetry data using a [Generator node](/docs/user-guide/rule-engine-2-0/nodes/action/generator/){:target="_blank"} with the function provided below:

```js
var temperature = toFixed(Math.random()*10 + 18, 2);
var humidity = toFixed(Math.random()*15 + 40, 2);
var msg = { temperature: temperature, humidity: humidity, };
var metadata = { data: 40 };
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: msg, metadata: metadata, msgType: msgType };
```
{: .copy-code}

{% assign dashboardDataSource = '
    ===
        image: /images/user-guide/custom-translation/dashboard-data-source-1-pe.png,
        title: For this dashboard, I&#39;m emulating telemetry data using a Generator node.
    ===
        image: /images/user-guide/custom-translation/dashboard-data-source-2-pe.png,
        title: The generator node emulates telemetry using the specified function.
'
%}

{% include images-gallery.liquid imageCollection=dashboardDataSource %}

Also, don&#39;t forget to update the data source for your dashboard.

{% assign dashboardDataSource2 = '
    ===
        image: /images/user-guide/custom-translation/dashboard-data-source-3-pe.png,
        title: Also, don&#39;t forget to update the data source for your dashboard.
'
%}

{% include images-gallery.liquid imageCollection=dashboardDataSource2 %}

#### Custom translation for dashboard title

To set a custom translation for the dashboard title, follow these steps:
- Go to the "Custom translations" tab and open the translation map for the German language.
- Click the "plus" icon in the top-right corner.
- Enter the translation key for the dashboard title: 

```text
custom.weather-dashboard.title
```
{:.copy-code}

- Enter the translations for this key in English and German in the appropriate fields. You can find all the required values in the table below.

| **Term key**                   | **Value in English** | **Value in German** | **Key description** |
|:-------------------------------|:---------------------|---------------------|---------------------|
| custom.weather-dashboard.title | Weather              | Wetter              | Dashboard title     |
| ------------------------------ | -------------------- | ------------------- | ------------------  |

- Click anywhere outside the input field to save the key.

{% assign internationalizationDashboardTitle1 = '
    ===
        image: /images/user-guide/custom-translation/internationalization-dashboard-title-1-pe.png,
        title: Go to the "Custom translations" tab. Add a new key and enter its value in English and German.
'
%}

{% include images-gallery.liquid imageCollection=internationalizationDashboardTitle1 %}

<br>
The key and its translations have been added. Now let&#39;s set this key as the dashboard title:
- Navigate to the "Dashboards" page and open the "Weather" dashboard details.
- Enter edit mode and replace the title field text with a key using the i18n structure: the i18n prefix followed by the translation key, wrapped in curly braces — like this:

```text
{i18n:custom.weather-dashboard.title}
``` 
{:.copy-code}

- Save your changes.

Since I&#39;m using English as my interface language, the dashboard title appears in English.

{% assign internationalizationDashboardTitle2 = '
    ===
        image: /images/user-guide/custom-translation/internationalization-dashboard-title-2-pe.png,
        title: Navigate to the "Dashboards" page. and open the dashboard details.
    ===
        image: /images/user-guide/custom-translation/internationalization-dashboard-title-3-pe.png,
        title: Enter edit mode.
    ===
        image: /images/user-guide/custom-translation/internationalization-dashboard-title-4-pe.png,
        title: Replace the title field text with a key using the i18n structure: the i18n prefix followed by the translation key, wrapped in curly braces. Then, save your changes.
    ===
        image: /images/user-guide/custom-translation/internationalization-dashboard-title-5-pe.png,
        title: I&#39;m using English as my interface language, so the dashboard title is displayed in English.
'
%}

{% include images-gallery.liquid imageCollection=internationalizationDashboardTitle2 %}

<br>
Now, either switch to your user&#39;s account where the interface language is set to German, or simply change your own interface language to German.
You should see the dashboard title displayed in German according to the translation map — which means everything is working as expected.

{% assign internationalizationDashboardTitle3 = '
    ===
        image: /images/user-guide/custom-translation/internationalization-dashboard-title-6-pe.png,
        title: Now, either switch to your user&#39;s account where the interface language is set to German, or simply change your own interface language to German. You should see the dashboard title displayed in German according to the translation map — which means everything is working as expected.
'
%}

{% include images-gallery.liquid imageCollection=internationalizationDashboardTitle3 %}

#### Custom translation for widget elements

Just like we did for the dashboard title, let&#39;s now apply internationalization to the "Temperature and Humidity history" widget title, telemetry keys, and axis labels.
Once again, to demonstrate the result, I&#39;ll use a user instance with German set as the interface language.

First, add the keys along with their corresponding values in English and the selected language (in our case German). Use the values provided in the table below.

| **Term key**                                                   | **Value in English**             | **Value in German**                      | **Key description**                           |
|:---------------------------------------------------------------|:---------------------------------|------------------------------------------|-----------------------------------------------|
| custom.weather-dashboard.temperature-and-humidity-widget.title | Temperature and Humidity history | Temperatur- und Luftfeuchtigkeitsverlauf | Temperature and Humidity history widget title |
| custom.weather-dashboard.temperature.telemetry-key             | Temperature                      | Temperatur                               | Temperature telemetry key name                |
| custom.weather-dashboard.humidity.telemetry-key                | Humidity                         | Feuchtigkeit                             | Humidity telemetry key name                   |
| :---------------------------------------------                 | -------------------------------  | ---------------------------------------  | --------------------                          |

{% assign internationalizationWidgetElements = '
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-1-pe.png,
        title: Add the keys along with their corresponding values in English and the selected language (in our case German).
'
%}

{% include images-gallery.liquid imageCollection=internationalizationWidgetElements %}

<br>
Now go to the "Weather" dashboard and enter the "Temperature and Humidity history" widget edit mode.<br>
Assign the added keys in the i18n structure to the following fields:

- Labels for the temperature and humidity keys:
  - **temperature**: <b>{i18n:custom.weather-dashboard.temperature.telemetry-key}</b>
  - **humidity**: <b>{i18n:custom.weather-dashboard.humidity.telemetry-key}</b>
- Labels for the Y axes:
  - **default** (temperature): <b>{i18n:custom.weather-dashboard.temperature.telemetry-key}</b>
  - **axis1** (humidity): <b>{i18n:custom.weather-dashboard.humidity.telemetry-key}</b>
- **Title** for the widget: <b>{i18n:custom.weather-dashboard.temperature-and-humidity-widget.title}<b>

After that, save your changes.

{% assign internationalizationWidgetElements2 = '
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-2-pe.png,
        title: Now navigate to the "Weather" dashboard and enter its edit mode.
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-3-pe.png,
        title: Enter the "Temperature and Humidity history" widget edit mode.
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-4-pe.png,
        title: Assign the added internationalization keys as labels for the temperature and humidity telemetry keys.
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-5-pe.png,
        title: Use the same values as labels for the Y axes of the temperature and humidity keys. 
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-6-pe.png,
        title: Now set the translation key for the widget title: {i18n:custom.weather-dashboard.temp-hum-widget-title}
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-7-pe.png,
        title: After that, save your changes.
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-8-pe.png,
        title: .
'
%}

{% include images-gallery.liquid imageCollection=internationalizationWidgetElements2 %}

Now, switch to the user who has German set as their interface language.
As you can see, all elements of the "Temperature and Humidity history" widget are now displayed in German.

{% assign internationalizationWidgetElements3 = '
    ===
        image: /images/user-guide/custom-translation/internationalization-widget-elements-9-pe.png,
        title: Switch to the user who has German set as their interface language. As you can see, all elements of the "Temperature and Humidity history" widget are now displayed in German.
'
%}

{% include images-gallery.liquid imageCollection=internationalizationWidgetElements3 %}

<br>
Apply your custom translations to other widgets in the same way.
First, add the required custom translation keys to the translation map, and then assign those keys—using the i18n structure—to the appropriate widgets fields.

| **Term key**                                     | **Value in English** | **Value in German** | **Key description**            |
|:-------------------------------------------------|:---------------------|---------------------|--------------------------------|
| custom.weather-dashboard.dew-point.widget-title  | Dew point history    | Taupunktverlauf     | Dew point history widget title |
| custom.weather-dashboard.dew-point.telemetry-key | Dew point            | Taupunkt            | Dew point telemetry key name   |
| :---------------------------------------------   | --------------       | ------------------  | ------------------             |

{% assign dewPointCustomTranslationKeys = '
    ===
        image: /images/user-guide/custom-translation/dew-point-custom-translation-keys-1-pe.png,
        title: Add the required custom translation keys to the translation map
    ===
        image: /images/user-guide/custom-translation/dew-point-custom-translation-keys-2-pe.png,
        title: User interface in English
    ===
        image: /images/user-guide/custom-translation/dew-point-custom-translation-keys-3-pe.png,
        title: User interface in German.
'
%}

{% include images-gallery.liquid imageCollection=dewPointCustomTranslationKeys %}

### Using custom translation in HTML Value Card widget

Custom translations can be used in widget functions — for example, in the "HTML Value Card" widget. Let&#39;s take a look at one such example.

**1.** [Add translation keys](#adding-new-translation-key) to the translation map of the selected language (in my case, German).

| **Term key**                                        | **Value in English** | **Value in German** | **Key description**            |
|:----------------------------------------------------|:---------------------|---------------------|--------------------------------|
| custom.devices.smart-device.name                    | Smart Device         | Intelligentes Gerät | Device name                    |
| custom.my-dashboard.title                           | My Dashboard         | Mein Dashboard      | Dashboard title                |
| custom.my-widget.telemetry-key.temperature          | Temperature          | Temperatur          | Temperature telemetry key name |
| custom.my-widget.telemetry-value.low-temperature    | Low temperature      | Niedrigtemperatur   | Low temperature value          |
| custom.my-widget.telemetry-value.high-temperature   | High temperature     | Hochtemperatur      | High temperature value         |
| custom.my-widget.telemetry-value.normal-temperature | Normal temperature   | Normaltemperatur    | Normal temperature value       |
| :-------------------------------------------------- | -------------------- | ------------------- | ------------------------------ |

{% assign customTranslationHtmlValueCardWidget = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-1-pe.png,
        title: Add the required custom translation keys to the translation map of the selected language.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationHtmlValueCardWidget %}

<br>

**2.** Add a "HTML Value Card" widget:

- Open the dashboard in edit mode and click the "Add widget" button.
- Select the "HTML Value Card" widget from the "Cards" widgets bundle.
- Specify the device that sends temperature readings as the data source, along with the corresponding telemetry key.
- Go to the "Appearance" tab. Use your own code or copy the one provided below and paste it into the "HTML" field.

> The code syntax requires placing the i18n key in quotation marks.

*Example of using custom translation in the "HTML Value Card" widget:*
```html
<script>
    var description = document.getElementsByClassName('description')[0];
    var temperature = ${temperature};
    if(temperature>=25){
        description.innerText = "{i18n:custom.my-widget.telemetry-value.high-temperature}";
    }else if(temperature<=19){
        description.innerText  = "{i18n:custom.my-widget.telemetry-value.low-temperature}";
    }else{
        description.innerText = "{i18n:custom.my-widget.telemetry-value.normal-temperature}"
    }

</script>

<div class='card'>
    <div class='content'>
        <div class='column'>
            <h1>{i18n:custom.devices.smart-device.name}</h1>
            <div class='value'>
                {i18n:custom.weather-dashboard.temperature-telemetry}: ${temperature:0} °C
            </div>
            <div class='description'>
            </div>
        </div>
        <img height="70px" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Temperature-icon.png" alt="Temperature icon">
    </div>
</div>
```
{:.copy-code.expandable-10}

- Click "Add".
- Save the dashboard.

{% assign customTranslationHtmlValueCardWidget2 = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-2-pe.png,
        title: Open the dashboard in edit mode and click the "Add widget" button.
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-3-pe.png,
        title: Select the "HTML Value Card" widget from the "Cards" widgets bundle.
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-4-pe.png,
        title: Specify the device that sends temperature readings as the data source, along with the corresponding telemetry key.
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-5-pe.png,
        title: Go to the "Appearance" tab. Use your own code or copy the one provided below and paste it into the "HTML" field and click "Add". Then, save the dashboard.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationHtmlValueCardWidget2 %}

<br>
Now check the result. The value displayed in the HTML card will dynamically update based on the incoming telemetry data.

{% assign customTranslationHtmlValueCardWidget3 = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-6-pe.png,
        title: Now check the result. The value displayed in the HTML card will dynamically update based on the incoming telemetry data.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationHtmlValueCardWidget3 %}

<br>
For a user whose interface language is set to German, the widget will also be displayed in German.

{% assign customTranslationHtmlValueCardWidget3 = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-html-value-card-widget-7-pe.png,
        title: Click the "Add widget" button.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationHtmlValueCardWidget3 %}

### Using custom translation in the data post-processing function

Custom translations can be used in data post-processing functions.
Let&#39;s take a look at one such example.

**1.** [Add translation keys](#adding-new-translation-key) to the translation map of the selected language (in my case, German).

| **Term key**                                        | **Value in English** | **Value in German** | **Key description**            |
|:----------------------------------------------------|:---------------------|---------------------|--------------------------------|
| custom.my-dashboard.title                           | My Dashboard         | Mein Dashboard      | Dashboard title                |
| custom.my-widget.telemetry-key.temperature          | Temperature          | Temperatur          | Temperature telemetry key name |
| custom.my-widget.telemetry-value.range              | Value range          | Wertebereich        | Temperature range              |
| custom.my-widget.telemetry-value.low-temperature    | Low temperature      | Niedrigtemperatur   | Low temperature value          |
| custom.my-widget.telemetry-value.high-temperature   | High temperature     | Hochtemperatur      | High temperature value         |
| custom.my-widget.telemetry-value.normal-temperature | Normal temperature   | Normaltemperatur    | Normal temperature value       |
| :-------------------------------------------------- | -------------------- | ------------------- | ------------------------------ |

{% assign customTranslationCellContentFunction = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-1-pe.png,
        title: Add the required custom translation keys to the translation map of the selected language.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationCellContentFunction %}

<br>

**2.** Add a "HTML Value Card" widget:

- Open the dashboard in edit mode and click the "Add widget" button.
- Select the "Entities table" widget from the "Tables" widgets bundle.
- Specify the device that sends temperature readings as the data source. 
- In the "Columns" section, the name column (which displays the device name) is already added by default. Now, add two more columns:
  - For the first one, add the telemetry key "temperature" to display the temperature value in degrees Celsius.
  - For the second one, also use the telemetry key "temperature", but configure this column to show the temperature range instead of the raw value.<br>
    For both column labels, apply the appropriate i18n translation keys wrapped in curly braces:<br>
      - first: <b>{i18n:custom.my-widget.telemetry-key.temperature}</b><br>
      - second: <b>{i18n:custom.my-widget.telemetry-value.range}</b>        

{% assign customTranslationCellContentFunction2 = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-2-pe.png,
        title: Open the dashboard in edit mode and click the "Add widget" button.
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-3-pe.png,
        title: Select the "Entities table" widget from the "Tables" widgets bundle.
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-4-pe.png,
        title: Specify the device that sends temperature readings as the data source. Then, add three columns to display the device name, its temperature value in degrees Celsius, and the temperature range.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationCellContentFunction2 %}

- Open the configuration for the key of the last column.
- Use the data post-processing function provided below to display the temperature range value retrieved from a custom translation key. Then, click Save.

> The code syntax requires placing the i18n key in quotation marks.

*Example of using custom translation in the data post-processing function:*
```javascript
if(value>=25){
    return "{i18n:custom.my-widget.telemetry-value.high-temperature}";
}else if(value<=19){
    return "{i18n:custom.my-widget.telemetry-value.low-temperature}";
}else{
    return "{i18n:custom.my-widget.telemetry-value.normal-temperature}";
}
```
{: .copy-code}

- Click "Add" to add widget on the dashboard. Then, save dashboard.

{% assign customTranslationCellContentFunction3 = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-5-pe.png,
        title: Open the configuration for the key of the last column.
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-6-pe.png,
        title: Use the data post-processing function provided below to display the temperature range value retrieved from a custom translation key. Then, click "Save".
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-7-pe.png,
        title: Click "Add" to add widget on the dashboard. Then, save dashboard.
'
%}

{% include images-gallery.liquid imageCollection=customTranslationCellContentFunction3 %}

Check the result. The value in the column responsible for temperature readings will change depending on the value of the incoming telemetry.

{% assign customTranslationCellContentFunction4 = '
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-8-pe.png,
        title: Check the result. If the temperature value is less than or equal to 19 degrees, the "Temperature range" column will display "Low temperature".
    ===
        image: /images/user-guide/custom-translation/custom-translation-in-cell-content-function-9-pe.png,
        title: If the temperature value is between 19 and 25 degrees, the "Temperature range" column will display "Normal temperature".
'
%}

{% include images-gallery.liquid imageCollection=customTranslationCellContentFunction4 %}

## Delete language

If at any time you need to delete a language or reset its translations to the default version, simply click the trash bin icon next to the corresponding language and confirm the deletion in the dialog window.

{% assign deleteLanguage = '
    ===
        image: /images/user-guide/custom-translation/delete-language-1-pe.png,
        title: Tto delete a language or reset its translations to the default version, simply click the trash bin icon next to the corresponding language.
    ===
        image: /images/user-guide/custom-translation/delete-language-2-pe.png,
        title: Confirm the deletion in the dialog window.
'
%}

{% include images-gallery.liquid imageCollection=deleteLanguage %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
