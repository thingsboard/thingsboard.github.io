{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

ThingsBoard Custom Translations feature allows you to upload alternative to existing language translations 
and extend the translation to specific GUI elements on the dashboards.
 
See video tutorial below for step-by-step instruction how to use this feature.

## Using Locale files

- Explain "Language" selector;
- Explain "Download locale file" button (all available translations);
- how to overwrite one of the translations;
- example of the JSON with "real" values.

## Custom menu labels 

## Custom dashboard title

## Custom widget title

## Custom widget legend

## Dynamic widget label

## Using Custom translations 

- How to change dashboard title
- How to change dashboard widget title
- How to change dashboard widget legend
- example of the JSON

## How to use Custom Translations in Widgets

Custom Translation can be used in widgets: in the post-processing function, as a value, or in the title.

{% include images-gallery.html imageCollection="customTranslationInWidgets" showListImageTitles="true" %}

<br/>

{% capture peFeatureContent %}
Custom Translation is not available in the Analogue gauges, HTML Card, Control Widgets, Files widgets, 
Date widget, Gateways widgets, Scheduling widgets.
{% endcapture %}
{% include templates/info-banner.md title="ThingsBoard PE Feature" content=peFeatureContent %}


<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/VSNZWl1NjWU" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 

## Limitations of the Custom Translations in Widgets
 
## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

