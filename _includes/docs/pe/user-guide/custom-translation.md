{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

ThingsBoard Custom Translations feature allows you to upload alternative to existing language translations
and extend the translation to specific GUI elements on the dashboards.

### Using Locale Files
Step 1. Open Custom Translation menu.

Step 2. Choose language from dropdown menu. For example, Italian.

Step 3. Download locale file.

Step 4. In the locale file find all possible translation for the chosen language.

Step 5. Change language in the User's Profile for applying settings.

{% include images-gallery.html imageCollection="usingLocaleFiles" showListImageTitles="true"%}

### Custom menu 
Step 1. Specify new custom translation.

```json
{
  "home": {
    "home": "Pagina principale di un sito web"
  },
  "custom": {
    "my-dashboard": {
      "title": "Dashboard per esempi"
    },
    "my-widget": {
      "name":"Widget per dispositivo sensore",
      "label-text": "Etichetta per dispositivo sensore",
      "low-temperature": "Bassa temperatura",
      "high-temperature": "Alta temperatura",
      "normal-temperature": "Temperatura normale"
    }
  }
}
```
{: .copy-code}

Step 2. Go to the Home page and check new translation.

{% include images-gallery.html imageCollection="customMenuItems" showListImageTitles="true"%}

### Custom Dashboard Title
Step 1. Specify new custom translation for the dashboard and widgets.

Step 2. Go to the Dashboard page. Create new dashboard or chose existing one. Open dashboard menu.

Step 3. Translate dashboard title. Note the required syntax: {i18n:custom.my-dashboard.title}.

Step 4. Check the translated title.

{% include images-gallery.html imageCollection="customDashboardTitle"  showListImageTitles="true"%}

### Custom Widget's Title and Widget's Label
Step 1. Go to the dashboard. Open an edit mode.

Step 2. Open widget's edit mode.

Step 3. Apply translation to the widget title - {i18n:custom.my-widget.name}, and entity label column title - {i18n:custom.my-widget.label-text}.

Step 4. Check translated titles.

{% include images-gallery.html imageCollection="customWidgetTitleAndWidgetLabel" showListImageTitles="true"%}

### Custom Translation in Widgets

Step 1. Specify new custom translation for the telemetry data.

Step 2. Open widget settings and go to the data key configuration.

Step 3. Use post-processing function for logic with custom translation. The post-processing function requires quotes for the i18n.

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

Step 4. Get the message from translation map if temperature is high.

Step 5. Get the message from translation map if temperature is low.

Step 6. Choose 'HTML Value Card' widget.

Step 7. Choose telemetry data.

Step 8. Write some logic with custom translation. HTML field requires quotes for the i18n.

Step 9. Use quotes for the i18n.

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
            <h1>Sensor Device</h1>
            <div class='value'>
                Temperature: ${temperature:0} °C
            </div>    
            <div class='description'>
            </div>
        </div>
        <img height="80px" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Temperature-icon.png" />
    </div>
</div>
```
{: .copy-code}

Step 10. Check the result in the 'HTML Value Card.'

{% include images-gallery.html imageCollection="customTranslationInWidgets" showListImageTitles="true"%}

### Video Guide

See video tutorial below for step-by-step instruction how to use this feature.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/VSNZWl1NjWU" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 
 
## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

