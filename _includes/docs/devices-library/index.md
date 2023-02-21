
* TOC
{:toc}

{% assign devicesLibraryPagePath = page.path | remove: ".md" | append: '/' %}
{% assign microcontrollersCategory = "" %}
{% assign singleBoardComputersCategory = "" %}
{% assign readyToGoDevicesCategory = "" %}

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
**{{sitePage.title}}**](/docs/{{docsPrefix}}devices-library/{{possibleTargetPath | remove: ".md" }}/)
{% endcapture %}
{% case sitePage.category %}
{% when "ready-to-go-devices" %}
{% assign readyToGoDevicesCategory = readyToGoDevicesCategory | append: value %}
{% when "single-board-computers" %}
{% assign singleBoardComputersCategory = singleBoardComputersCategory | append: value %}
{% when "microcontrollers" %}
{% assign microcontrollersCategory = microcontrollersCategory | append: value %}
{% endcase %}  
{% endunless %}
{% endif %}
{% endfor %}

#### Microcontrollers
{% for item in microcontrollersCategory %}
{{ item }}  
{% endfor %}

#### Single-board computers

{% for item in singleBoardComputersCategory %}
{{ item }}  
{% endfor %}

#### Ready-to-go devices
{% for item in readyToGoDevicesCategory %}
{{ item }}  
{% endfor %}
