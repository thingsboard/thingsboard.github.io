
* TOC
{:toc}

{% assign devicesLibraryPagePath = page.path | remove: ".md" | append: '/' %}
{% assign esp8266Category = "" %}
{% assign esp32Category = "" %}
{% assign minicomputerCategory = "" %}

{% for sitePage in site.pages %}
{% if sitePage.path contains devicesLibraryPagePath %}
{% assign possibleTargetPath = sitePage.path | remove: devicesLibraryPagePath %}
{% unless possibleTargetPath contains '/' %}
{% assign deviceName = sitePage.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% unless deviceName %}
{% assign deviceName = sitePage.deviceName %}  
{% endunless %}
{% capture value %}
[![{{sitePage.deviceName}}](/images/devices-library/{{sitePage.deviceImageFileName}}){: style="max-width: 100px; max-height: 100px; margin: 0px 10px 0px 0px"}  
**{{sitePage.title}}**](/docs/devices-library/{{docsPrefix}}{{possibleTargetPath | remove: ".md" }}/)
{% endcapture %}
{% case sitePage.category %}
{% when "esp8266" %}
{% assign esp8266Category = esp8266Category | append: value %}
{% when "esp32" %}
{% assign esp32Category = esp32Category | append: value %}
{% when "minicomputer" %}
{% assign minicomputerCategory = minicomputerCategory | append: value %}
{% endcase %}  
{% endunless %}
{% endif %}
{% endfor %}

#### ESP32-based boards

{% for item in esp32Category %}
{{ item }}  
{% endfor %}

#### ESP8266-based boards
{% for item in esp8266Category %}
{{ item }}  
{% endfor %}

#### Minicomputers
{% for item in minicomputerCategory %}
{{ item }}  
{% endfor %}
