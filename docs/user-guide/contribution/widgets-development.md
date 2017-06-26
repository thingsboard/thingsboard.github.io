---
layout: docwithnav
assignees:
- ikulikov
title: Widgets Development Guide

---

* TOC
{:toc}

## Introduction

**ThingsBoard widgets** are additional UI modules that can be easily integrated into any [IoT Dashboards](/docs/user-guide/ui/dashboards/) and provide end-user functions such as data visualization, remote device control, alarms management and displaying static custom html content.
According to the provided features each widget definition represents specific [Widget Type](/docs/user-guide/ui/widget-library/#widget-types).

### Creating new widget definition

In order to create new widget definition navigate "Widget Library".
Then open existing "Widgets Bundle" or create new one. In the "Widgets Bundle" view click on the big “+” button in the bottom-right part of the screen and then click on the "Create new widget type" button.

![image](/images/user-guide/contribution/widgets/create-new-widget-type.png)

**Select widget type** window should popup and you will be prompted to select corresponding [widget type](/docs/user-guide/ui/widget-library/#widget-types) that you are going to develop.

![image](/images/user-guide/contribution/widgets/select-widget-type.png)

After that "Widget Edtor" page will be opened pre-populated with the starter widget template according to the previously selected widget type.

![image](/images/user-guide/contribution/widgets/widget-editor.png)

#### Widget Editor overview

Widget Editor view represents mini IDE designed to develop custom widget definitions.
It consists of [top toolbar](#widget-editor-toolbar) and four main sections:

 - [Resources/HTML/CSS](#resourceshtmlcss-section)    
 - [JavaScript](#javascript-section) 
 - [Settings schema](#settings-schema-section) 
 - [Widget preview](#widget-preview-section)

##### Widget Editor Toolbar

![image](/images/user-guide/contribution/widgets/widget-editor-toolbar.png)

Widget Editor Toolbar consists of the following items:

 - **Widget Title** field - used to specify title of the widget definition
 - **Widget Type** selector -  used to specify [type](/docs/user-guide/ui/widget-library/#widget-types) of the widget definition
 - **Run** button - used to run widget code and view result in **Widget preview** section
 - **Undo** button - reverts all editor sections to latest saved state
 - **Save** button - saves widget definition
 - **Save as** button - allows to save a new copy of widget definition by specifying new widget type name and target **Widgets Bundle**
 
##### Resources/HTML/CSS section

This section consists of three tabs. First **Resources** tab is used to specify external JavaScript/CSS resources used by widget.

![image](/images/user-guide/contribution/widgets/widget-editor-resources.png)

Second **HTML** tab contains widget html code (Note: some widgets create html content dynamically and initial html content can be empty).

![image](/images/user-guide/contribution/widgets/widget-editor-html.png)

Third **CSS** tab contains widget specific CSS style definitions. 

![image](/images/user-guide/contribution/widgets/widget-editor-css.png)

##### JavaScript section

This section contains all widget related JavaScript code according to the [Widget API](#basic-widget-api).  

![image](/images/user-guide/contribution/widgets/widget-editor-javascript.png)

##### Settings schema section

This section consists of two tabs. 
First **Settings schema** tab is used to specify json schema of widget settings in order to auto-generate UI form using react-schema-form [builder](http://networknt.github.io/react-schema-form/). 
This generated UI form is displayed in **Advanced** tab of widget settings. 
Settings Object serialized by this schema is used to store specific widget settings and accessible from widget JavaScript code.

![image](/images/user-guide/contribution/widgets/widget-editor-settings-schema.png)
 
Second **Data key settings schema** tab is used to specify json schema of particular data key settings in order to auto-generate UI form using react-schema-form [builder](http://networknt.github.io/react-schema-form/). 
This generated UI form is displayed in **Advanced** tab of the **Data key configuration** dialog.
Settings Object serialized by this schema is used to store specific settings for each data key of datasource defined in widget. 
These settings are accessible from widget JavaScript code.

![image](/images/user-guide/contribution/widgets/widget-editor-datakey-settings-schema.png)

##### Widget preview section

This section is used to preview and test widget definition.
It is presented as mini dashboard containing one widget instantiated from the current widget definition.
It has mostly all functionality provided by usual ThingsBoard dashboard but has some limitations.
For example there is only "Function" can be selected as datasource type in widget datasources section for debug purposes.    

![image](/images/user-guide/contribution/widgets/widget-editor-preview.png)

#### Basic widget API

#### Creating simple widgets 

##### Latest Values widget

##### Time-Series widget

##### RPC (Control) widget

##### Alarm widget

##### Static widget

### Integrating existing code to create widget definition 



  