---
layout: docwithnav
title: Data Converters
description:  

---

{% assign feature = "Data Converters" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

Data Converters is a part of the [Platform Integrations](/docs/user-guide/integrations/) feature.
Data Converters used to decode/encode messages between Integrations and ThingsBoard platform.
There are two types of the converters according to the encoding direction: Uplink and Downlink.    

### Uplink Data Converters

The main function of Uplink Data Converter is to parse payload of the incoming message and transform it to format that ThingsBoard uses. 
See video tutorial below for step-by-step instruction how to setup Uplink Data Converters.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/CojStpYCTGI" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
 
### Downlink Data Converters

The main function of Downlink Data Converter is to parse payload of the ThingsBoard downlink message and transform it to the device specific payloads according to the target Platform Integration. 
See video tutorial below for step-by-step instruction how to setup Downlink Data Converters.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/CojStpYCTGI" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

### Debug mode

This feature allows to persis: 

  - incoming messages (Uplink or Downlink) and metadata values;
  - resulting message and metadata after data conversion;
  
It enables rapid development of Data Converters. 
This feature allows to validate your configuration setup and should be used only for debug purposes, since it dramatically impacts performance.

