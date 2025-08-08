* TOC
{:toc}

## Introduction

**ThingsBoard widgets** are additional UI modules that seamlessly integrate into any [IoT Dashboard](/docs/{{docsPrefix}}user-guide/dashboards/).  They provide end-user functions such as data visualization, remote device control, alarms management, and display of static custom HTML content.
Each widget definition represents a specific [Widget Type](/docs/{{docsPrefix}}user-guide/ui/widget-library/#widget-types)  based on the provided features.

## Creating new widget definition

In order to create a new widget definition, navigate to "Widget Library" and open existing "Widgets Bundle" or create a new one.  In the "Widgets Bundle" view, click the “+” button at the top-right part of the screen and then click the "Create new widget" button.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/create-new-widget-type.png)

"Select widget type" window should appear with select options corresponding to the [widget type](/docs/{{docsPrefix}}user-guide/ui/widget-library/#widget-types) you intend to develop.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/select-widget-type.png)

After that, the pre-populated "Widget Editor" page will open with starter widget template according to previously selected widget type.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor.png)

### Widget Editor overview

Widget Editor view is a mini IDE designed to develop custom widget definitions.
It consists of [top toolbar](#widget-editor-toolbar) and four main sections:

 - [Resources/HTML/CSS](#resourceshtmlcss-section)    
 - [JavaScript](#javascript-section) 
 - [Settings schema](#settings-schema-section) 
 - [Widget preview](#widget-preview-section)

#### Widget Editor Toolbar

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-toolbar.png)

Widget Editor Toolbar consists of the following items:

 - **Widget Title** field - used to specify title of the widget definition
 - **Widget Type** selector -  used to specify [type](/docs/{{docsPrefix}}user-guide/contribution/ui/widget-library/#widget-types) of the widget definition
 - **Run** button - used to run widget code and view result in **Widget preview** section
 - **Undo** button - reverts all editor sections to latest saved state
 - **Save** button - saves widget definition
 - **Save as** button - allows to save a new copy of widget definition by specifying new widget type name and target **Widgets Bundle**
 
#### Resources/HTML/CSS section

This section consists of three tabs:


The first **Resources** tab is used to specify external JavaScript/CSS resources used by the widget.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-resources.png)

Second **HTML** tab contains the widget's HTML code *(Note: some widgets create HTML content dynamically, thus their initial HTML content can be empty).*

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-html.png)

Third **CSS** tab contains widget specific CSS style definitions. 

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-css.png)

#### JavaScript section

This section contains all widget related JavaScript code according to the [Widget API](#basic-widget-api).  

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-javascript.png)

#### Settings schema section

This section consists of two tabs:

The first tab, **Settings schema**, is used to specify the JSON schema of widget settings for automatically generating a UI form using the react-schema-form [builder](http://networknt.github.io/react-schema-form/). 
This generated UI form is displayed in the **Advanced** mode in the **Appearance** tab of widget settings. 
The Settings Object serialized by this schema, is used to store specific widget settings and is accessible from the widget's JavaScript code.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-settings-schema.png)
 
The second tab, **Data key settings schema**, is used to specify JSON schema of data key settings for automatically generating a UI form using the react-schema-form [builder](http://networknt.github.io/react-schema-form/). 
This generated UI form is displayed in **Advanced** tab of the **Data key configuration** dialog.
The Settings Object serialized by this schema is used to store specific settings for each data key of the datasource defined in the widget. 
These settings are accessible from widget's JavaScript code.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-datakey-settings-schema.png)

The third tab, **Latest data key settings schema**, is used to specify JSON schema of the latest data key for automatically generating a UI form using the react-schema-form [builder](http://networknt.github.io/react-schema-form/).
The **Latest data key settings schema** is available only for **Time series** widgets.
This generated UI form is displayed in **Advanced** tab of the **Data key configuration** dialog of the Latest keys.
The Settings Object serialized by this schema is used to store specific settings for each data key of the datasource defined in the widget.
These settings are accessible from widget JavaScript code.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-latest-datakey-setting-schema.png)

Starting from v3.4, auto-generated advanced widget settings JSON forms are replaced with [Angular components](https://github.com/thingsboard/thingsboard/pull/6545).
When creating new settings schemas for custom widgets, don't forget to remove components from **Widget Settings** tab.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-widget-settings-selectors.png)

Here is the basic example of the **settings schema**:

```
   {
      "schema": {
         "type": "object",
         "title": "Settings",
         "properties": {
             "cardType": {
                "title": "Card type",
                "type": "string",
                "default": "Average"
             },
             "cardTitle": {
                "title": "Card title",
                "type": "string",
                "default": "Gateways online"
             }
          },
          "required": ["cardType"]
         },
      "form": [
      {
         "key": "cardType",
         "type": "rc-select",
         "multiple": false,
         "items": [
         {
           "value": "avg",
           "label": "Average"
         },
         {
           "value": "max",
           "label": "Maximum"
         },
         {
           "value": "min",
           "label": "Minimum"
         }]
      },
      "cardTitle"
      ]
   }
```

Here is the result of applying **settings schema**, will be visible in **Appearance** tab of the widget settings:

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-schema-example.png)


The **schema** property supports types such as **Number**, **Boolean**, **String** and **Object**.
In the **form** array, every property can be specified as an **input**, **checkbox**, **dropdown**, **functional field**(JS, HTML, CSS), **image selection**, **color picker**, or an **array of properties**. 
Fields can be displayed conditionally and grouped in logical blocks.

Here is the complex example of the custom **settings schema**:

```
{
    "schema": {
        "type": "object",
        "properties": {
            "button": {
                "title": "Button settings",
                "type": "object",
                "properties": {
                    "color": {
                        "title": "Primary color",
                        "type": "string",
                        "default": "#545454"
                    },
                    "backgroundColor": {
                        "title": "Background color",
                        "type": "string",
                        "default": null
                    }
                }
            },
            "markerImage": {
                "title": "Custom marker image",
                "type": "string"
            },
            "markerImageSize": {
                "title": "Custom marker image size (px)",
                "type": "number",
                "default": 34
            },
            "useMarkerImageFunction": {
                "title": "Use marker image function",
                "type": "boolean",
                "default": false
            },
            "markerImageFunction": {
                "title": "Marker image function: f(data, images, dsData, dsIndex)",
                "type": "string"
            },
            "markerImages": {
                "title": "Marker images",
                "type": "array",
                "items": {
                    "title": "Marker image",
                    "type": "string"
                }
            }
        },
        "required": []
    },
    "form": [
        [
            {
                "key": "button",
                "items": [
                    {
                        "key": "button.color",
                        "type": "color"
                    },
                    {
                        "key": "button.backgroundColor",
                        "type": "color"
                    }
			    ]
        	}
        ],
        [
            "useMarkerImageFunction",
            {
                "key": "markerImage",
                "type": "image",
                "condition": "model.useMarkerImageFunction !== true"
            },
            {
                "key": "markerImageSize",
                "condition": "model.useMarkerImageFunction !== true"
            },
            {
                "key": "markerImageFunction",
                "type": "javascript",
                "helpId": "widget/lib/map/marker_image_fn",
                "condition": "model.useMarkerImageFunction === true"
            },
            {
                "key": "markerImages",
                "items": [
                    {
                        "key": "markerImages[]",
                        "type": "image"
                    }
                ],
                "condition": "model.useMarkerImageFunction === true"
            }
        ]
    ],
    "groupInfoes": [
        {
            "formIndex": 0,
            "GroupTitle": "Button Style Settings"
        },
        {
            "formIndex": 1,
            "GroupTitle": "Marker Settings"
        }
    ]
}
```

The result of applying custom **settings schema** to the widget:

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-appearence-example.png)


#### Widget preview section

This section is used to preview and test widget definitions.
It is presented as a mini dashboard containing one widget instantiated from the current widget definition.
It has most of the functionality provided by a typical ThingsBoard dashboard, with some limitations.
For example, "Function" can only be selected as datasource type in widget datasources section for debugging purposes.    

![image](https://img.thingsboard.io/user-guide/contribution/widgets/widget-editor-preview.png)

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
## Troubleshooting

### Empty web report
Sometimes, while working with reports, you may encounter the following problem:
Heavy widgets may not load in time before the web report begins to be generated. As a result, the report will be empty(because, at the time of creation, data is not present on the dashboard):
![image](https://img.thingsboard.io/user-guide/contribution/widgets/web-report-error.png)

To resolve this problem report service contains a special feature that allows us to inform it that the widget was loaded.

First of all, we need to inform the reporting service that we have a widget to wait for. We will do this via widget's ```self.onInit```:
```javascript
self.onInit = function () {
   ...
   if (self.ctx.reportService.reportView) {
     self.ctx.$scope.widgetUuid = self.ctx.reportService.onWaitForWidget();
   }
};
```

Now, the report service will wait until widget sends information about its loading status or the waiting timeout expires. We will inform the report service about the successful loading of widget inside ```self.onDataUpdated```:
```javascript
self.onDataUpdated = function () {
    ...data is ready
    if (self.ctx.reportService.reportView) {
        self.ctx.reportService.onWidgetLoaded(self.ctx.$scope.widgetUuid);
    }
};
```

Service will start generating a report only when all widgets on a dashboard that are marked as ```onWaitForWidget()``` will send ```onWidgetLoaded(${widgetUuid})``` or when the timeout for widgets waiting will expire.
{% endif %}


## Widget code debugging tips

The most simple method of debugging is Web console output.
Just place [**console.log(...)**](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) function inside any part of widget JavaScript code.
Then click **Run** button to restart widget code and observe debug information in the Web console.

Another and most effective method of debugging is to invoke browser debugger.
Put [**debugger;**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement into the place of widget code you are interested in and then click **Run** button to restart widget code.
Browser debugger (if enabled) will automatically pause code execution at the debugger statement and you will be able to analyze script execution using browser debugging tools.


### Next steps

{% assign currentGuide = "Contribution" %}{% include templates/multi-project-guides-banner.md %}