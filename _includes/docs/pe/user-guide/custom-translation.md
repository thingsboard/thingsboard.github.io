{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

ThingsBoard Custom Translations feature allows you to upload alternative to existing language translations
and extend the translation to specific GUI elements on the dashboards.

Remember: having an internalization for the platform implies the availability of custom translation maps for multiple languages.
Otherwise, instead of translation {i18n} structure will be displayed.

### Using Locale Files
Locale files contain basic list of translations. Their list is constantly expanding.

{% include images-gallery.html imageCollection="usingLocaleFiles" showListImageTitles="true"%}

### Custom menu

{% include images-gallery.html imageCollection="customMenuItems" showListImageTitles="true"%}

<b>Examples of the custom translation map:</b>
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


### Dashboard

{% include images-gallery.html imageCollection="customTranslationForDashboard"  showListImageTitles="true"%}

### Widgets

#### Common Usage

<b>Titles:</b>

{% include images-gallery.html imageCollection="customWidgetTitleAndWidgetLabel" showListImageTitles="true"%}

<b>Tooltips:</b>

{% include images-gallery.html imageCollection="tooltips" showListImageTitles="true"%}


#### Usage in the cell content function

{% include images-gallery.html imageCollection="usageInCellContentFunction" showListImageTitles="true"%}

<b>JavaScript code examples for cell content function</b>
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

#### Usage in HTML Value Card

{% include images-gallery.html imageCollection="usageInHTMLValueCard" showListImageTitles="true"%}

<b>Examples of using custom translation in the HTML Vale Card:</b>
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
        <img height="80px" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Temperature-icon.png" />
    </div>
</div>
```
{: .copy-code}



#### Other places

{% include images-gallery.html imageCollection="otherPlaces" showListImageTitles="true"%}

{% capture peFeatureContent %}
For now, Custom Translation is not available in the HTML Card, Control Widgets, Files widgets,
Date widget, Gateways widgets, Scheduling widgets.
{% endcapture %}
{% include templates/info-banner.md content=peFeatureContent %}


### Video Tutorial

See video tutorial below for step-by-step instruction how to use this feature.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/VSNZWl1NjWU" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 
 
## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

