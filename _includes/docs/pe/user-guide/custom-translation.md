{% assign feature = "Custom Translations" %}{% include templates/pe-feature-banner.md %}

ThingsBoard Custom Translations feature allows you to upload alternative to existing language translations 
and extend the translation to specific GUI elements on the dashboards.
 
See video tutorial below for step-by-step instruction how to use this feature.

## How to use Custom Translations in Widgets

Custom Translation can be used in widgets: in the post-processing function, as a value, or in the title.

| ![image](/images/user-guide/custom-translation/custom_translation.png) |
| <i>Specifying translation</i> |

The post-processing function requires quotes for the i18n.

| ![image](/images/user-guide/custom-translation/ct_post_processing.png) |
| <i>Custom Translation in the post-processing function and label of telemetry</i> |

| ![image](/images/user-guide/custom-translation/ct_html_value_card.png) |
| <i>Custom Translations for “HTML Value Card”</i> |

| ![image](/images/user-guide/custom-translation/ct_nav_card.png) |
| <i>Custom Translations in the title on "Navigation Card”</i> |

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
 
## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}

