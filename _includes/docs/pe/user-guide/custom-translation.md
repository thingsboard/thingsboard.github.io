{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

## ThingsBoard Custom Translations 

ThingsBoard Custom Translations feature allows you to upload alternative to existing language translations 
and extend the translation to specific GUI elements on the dashboards.
 
See video tutorial below for step-by-step instruction how to use this feature.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/VSNZWl1NjWU" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 
 
<br>

**Please, note:** Custom Translation in the widget title is not supported in widget bundles such as Analogue gauges and Control widgets.
Entites hierarchy, HTML Card, Gateway events, and Gateway configuration widget titles also cannot be translated using Custom Translation. 

## Data post-processing function for Custom Translation

In addition to all, you can apply Custom Translation in the Data key configuration using the Data post-processing function to translate device Data keys values. 
Let's say you need to change the language to Spanish for the convenience of your client. 

{% include images-gallery.html imageCollection="custom-translation" showListImageTitles="true" %}

**Please, note:** Some widget bundles and widgets **do not support the Data post-processing function**.
This feature is not supported in widget bundles such as Analogue gauges, Control widgets, Digital gauges, Gateway widgets, GPIO widgets and Navigation;
Simple card and HTML Card widgets do not have Data post-processing function as well. 


## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

