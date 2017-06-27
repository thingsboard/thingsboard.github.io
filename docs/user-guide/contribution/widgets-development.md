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

All widget related code is located in the [JavaScript section](#javascript-section).
There is already available built-in variable **self** that is reference to widget instance.
Each widget function should be defined as a property of **self** variable.
**self** variable has property **ctx** - reference to widget context that has all necessary API and data used by widget instance.
Below is brief description of widget context properties:
 
| **Property**                     | **Type**           |  **Description**                                                |
|----------------------------------|--------------------|-----------------------------------------------------------------|
| $container                       | jQuery Object      | Container element of the widget. Can be used to dynamically access or modify widget DOM using jQuery API. |
| $scope                           | Object             | Angular scope object of the current widget element. Can be used to access/modify scope properties when widget is built using Angular approach. |
| width                            | Number             | Current width of widget container in pixels.                     |
| height                           | Number             | Current height of widget container in pixels.                    |
| isEdit                           | Boolean            | Indicates whether the dashboard is in in the view or editing state.|
| isMobile                         | Boolean            | Indicates whether the dashboard view is less then 960px width (default mobile breakpoint). |
| widgetConfig                     | Object             | Common widget configuration containing properties such as **color** (text color), **backgroundColor** (widget background color), etc. |
| settings                         | Object             | Widget settings containing widget specific properties according to the defined [settings json schema](#settings-schema-section) |
| units                            | String             | Optional property defining units text of values displayed by widget. Useful for simple widgets like cards or gauges. |
| decimals                         | Number             | Optional property defining how many positions should be used to display decimal part of the value number.  |
| hideTitlePanel                   | Boolean            | Manages visibility of widget title panel. Useful for widget with custom title panels or different states. |
| defaultSubscription              | Object             | See [Subscription object](#subscription-object) |
| timewindowFunctions              | Object             | See [Timewindow functions](#timewindow-functions) |
| controlApi                       | Object             | See [Control API](#control-api) | 
| actionsApi                       | Object             | See [Actions API](#actions-api) |
| stateController                  | Object             | See [State Controller](#state-controller) |

In order to implement new widget the following JavaScript functions should be defined (Note: each function is optional and can be implemented according to the widget specific/behaviour):
   
| **Function**                       | **Description**                                                                        |
|------------------------------------|----------------------------------------------------------------------------------------|
| ``` onInit() ```                   | The first function which is called when widget is ready for initialization. Should be used to prepare widget DOM, process widget settings and initial subscription information. |
| ``` onDataUpdated() ```            | Called when the new data is available from the widget subscription. Latest data can be accessed from the [**defaultSubscription** object](#subscription-object) of widget context (**ctx**). |
| ``` onResize() ```                 | Called when widget container is resized. Latest width and height can be obtained from widget context (**ctx**).             |
| ``` onEditModeChanged() ```        | Called when dashboard editing mode is changed. Latest mode is handled by isEdit property of **ctx**.             |
| ``` onMobileModeChanged() ```      | Called when dashboard view width crosses mobile breakpoint. Latest state is handled by isMobile property of **ctx**.                 |
| ``` onDestroy() ```                | Called when widget element is destroyed. Should be used to cleanup all resources if necessary.            |
| ``` getSettingsSchema() ```        | Optional function returning widget settings schema json as alternative to **Settings tab** of [Settings schema section](#settings-schema-section).             |
| ``` getDataKeySettingsSchema() ``` | Optional function returning particular data key settings schema json as alternative to **Data key settings schema** tab of [Settings schema section](#settings-schema-section).             |
| ``` typeParameters() ```           | Retruns object describing widget datasource parameters. See [Type parameters object](#type-parameters-object). |            |
| ``` actionSources() ```            | Retruns object describing available widget action sources used to define user actions. See [Action sources object](#action-sources-object). |


##### Subscription object

Widget subscription object contains all subscription information including current data according to the [widget type](/docs/user-guide/ui/widget-library/#widget-types).
Depending on widget type subscription object provides different data structures.
For [Latest values](/docs/user-guide/ui/widget-library/#latest-values) and [Time-series](/docs/user-guide/ui/widget-library/#time-series) widget types it provides the following properties:

 - **datasources** - array of datasources used by this subscription and has the following structure:

```javascript
    datasources = [
        {  // datasource
           type: 'entity',// type of the datasource. Can be "function" or "entity"
           name: 'name', // name of the datasource (in case of "entity" usually Entity name)
           aliasName: 'aliasName', // name of the alias used to resolve this particular datasource Entity
           entityName: 'entityName', // name of the Entity used as datasource
           entityType: 'DEVICE', // datasource Entity type (for ex. "DEVICE", "ASSET", "TENANT", etc.)
           entityId: '943b8cd0-576a-11e7-824c-0b1cb331ec92', // entity identificator presented as string uuid. 
           dataKeys: [ // array of keys (attributes or timeseries) of the entity used to fetch data 
               { // dataKey
                    name: 'name', // the name of the particular entity attribute/timeseries 
                    type: 'timeseries', // type of the dataKey. Can be "timeseries", "attribute" or "function" 
                    label: 'Sin', // label of the dataKey. Used as display value (for ex. in the widget legend section) 
                    color: '#ffffff', // color of the key. Can be used by widget to set color of the key data (for ex. lines in line chart or segments in the pie chart).  
                    funcBody: "", // only applicable for datasource with type "function" and "function" key type. Defines body of the function to generate simulated data.
                    settings: {} // dataKey specific settings with structure according to the defined Data key settings json schema. See "Settings schema section".
               },
               //...
           ]
        },
        //...
    ]
```
    
  - **data** - array of latest data received in scope of this subscription and has the following structure:
  
```javascript
    data = [
        {
            datasource: {}, // datasource object of this data. See datasource structure above.
            dataKey: {}, // dataKey for which the data is held. See dataKey structure above.
            data: [ // array of data points
                [   // data point
                    1498150092317, // unix timestamp of datapoint in milliseconds
                    1, // value, can be either string, numeric or boolean  
                ],
                //...
            ]  
        },
        //...
    ]     
```

For [Alarm widget](/docs/user-guide/ui/widget-library/#alarm-widget) type it provides the following properties:
 
 - **alarmSource** - information about entity for which alarms are fetched and has the following structure: 

```javascript
    alarmSource = {
         type: 'entity',// type of the alarm source. Can be "function" or "entity"
         name: 'name', // name of the alarm source (in case of "entity" usually Entity name)
         aliasName: 'aliasName', // name of the alias used to resolve this particular alarm source Entity
         entityName: 'entityName', // name of the Entity used as alarm source
         entityType: 'DEVICE', // alarm source Entity type (for ex. "DEVICE", "ASSET", "TENANT", etc.)
         entityId: '943b8cd0-576a-11e7-824c-0b1cb331ec92', // entity identificator presented as string uuid. 
         dataKeys: [ // array of keys indicating alarm fields used to display alarms data 
            { // dataKey
                 name: 'name', // the name of the particular alarm field 
                 type: 'alarm', // type of the dataKey. Only "alarm" in this case. 
                 label: 'Severity', // label of the dataKey. Used as display value (for ex. as a column title in the Alarms table) 
                 color: '#ffffff', // color of the key. Can be used by widget to set color of the key data.  
                 settings: {} // dataKey specific settings with structure according to the defined Data key settings json schema. See "Settings schema section".
            },
            //...
          ] 
    }
```

  - **alarms** - array of alarms received in scope of this subscription and has the following structure:

```javascript
    alarms = [
        { // alarm
            id: { // alarm id 
                entityType: "ALARM", 
                id: "943b8cd0-576a-11e7-824c-0b1cb331ec92"
            },
            createdTime: 1498150092317, // Alarm created time (unix timestamp)
            startTs: 1498150092316, // Alarm started time (unix timestamp)
            endTs: 1498563899065, // Alarm end time (unix timestamp)
            ackTs: 0, // Time of alarm aknowledgment (unix timestamp)
            clearTs: 0, // Time of alarm clear (unix timestamp)
            originator: { // Originator - id of entity produced this alarm 
                entityType: "ASSET", 
                id: "ceb16a30-4142-11e7-8b30-d5d66714ea5a"
            },
            originatorName: "Originator Name", // Name of originator entity
            type: "Temperature", // Type of the alarm            
            severity: "CRITICAL", // Severity of the alarm ("CRITICAL", "MAJOR", "MINOR", "WARNING", "INDETERMINATE") 
            status: "ACTIVE_UNACK", // Status of the alarm 
                                    // ("ACTIVE_UNACK" - active unacknowledged, 
                                    // "ACTIVE_ACK" - active acknowledged, 
                                    // "CLEARED_UNACK" - cleared unacknowledged, 
                                    // "CLEARED_ACK" - cleared acknowledged)
            details: {} // Alarm details object derived from alarm details json.
        }
    ]               
```

For other widget types like [RPC](/docs/user-guide/ui/widget-library/#rpc-control-widget) or [Static](/docs/user-guide/ui/widget-library/#static) subscription object is optional and does not contain necessary information.    

##### Timewindow functions

Object with timewindow functions used to manage widget data time frame. Can by used by [Time-series](/docs/user-guide/ui/widget-library/#time-series) or [Alarm](/docs/user-guide/ui/widget-library/#alarm-widget) widgets.

| **Function**                                        | **Description**                                                                        |
|-----------------------------------------------------|----------------------------------------------------------------------------------------|
| ``` onUpdateTimewindow(startTimeMs, endTimeMs) ```  | This function can be used to update current subscription time frame to historical one identified by **startTimeMs** and **endTimeMs** arguments. |
| ``` onResetTimewindow() ```                         | Resets subscription time frame to default defined by widget timewindow component or dashboard timewindow depending on widget settings. |


##### Control API

Object that provides API functions for [RPC (Control)](/docs/user-guide/ui/widget-library/#rpc-control-widget) widgets.

| **Function**                                        | **Description**                                                                        |
|-----------------------------------------------------|----------------------------------------------------------------------------------------|
| ``` sendOneWayCommand(method, params, timeout) ```  | Sends one way (without response) RPC command to the device. Returns command execution promise. **method** - RPC method name, string, **params** - RPC method params, custom json object, **timeout** - maximum delay in milliseconds to wait until response/acknowledgement is received.  |
| ``` sendTwoWayCommand(method, params, timeout) ```  | Sends two way (with response) RPC command to the device. Returns command execution promise with response body in success callback. |


##### Actions API

Set of API functions to work with user defined actions.

| **Function**                                                          | **Description**                                                                        |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| ``` getActionDescriptors(actionSourceId) ```                          | Returns the list of action descriptors for provided **actionSourceId**                 |
| ``` handleWidgetAction($event, descriptor, entityId, entityName) ```  | Handles action produced by particular action source. **$event** - event object associated with action, **descriptor** - action descriptor, **entityId** and **entityName** - current entity id and name provided by action source if available. |


##### State Controller

Reference to Dashboard state controller providing API to manage current dashboard state.

| **Function**                                        | **Description**                                                                        |
|-----------------------------------------------------|----------------------------------------------------------------------------------------|
| ``` openState(id, params, openRightLayout) ```      | Navigates to new dashboard state. **id** - id of the target dashboard state, **params** - object with state parameters to use by the new state, **openRightLayout** - optional boolean argument to force open right dashboard layout if present in mobile view mode. |
| ``` updateState(id, params, openRightLayout) ```    | Updates current dashboard state. **id** - optional id of the target dashboard state to replace current state id, **params** - object with state parameters to update current state parameters, **openRightLayout** - optional boolean argument to force open right dashboard layout if present in mobile view mode. |
| ``` getStateId() ```                                | Returns current dashboard state id. |
| ``` getStateParams() ```                            | Returns current dashboard state parameters. |
| ``` getStateParamsByStateId(id) ```                 | Returns state parameters for particular dashboard state identified by **id**. |


##### Type parameters object

Object describing widget datasource parameters. It has the following properties:

```javascript
    return {
        maxDatasources: -1, // Maximum allowed datasources for this widget, -1 - unlimited
        maxDataKeys: -1 //Maximum allowed data keys for this widget, -1 - unlimited
    }
```

##### Action sources object

Map describing available widget action sources to which user actions can be assigned. It has the following structure:

```javascript
   return {
        'headerButton': { // Action source Id (unique action source identificator)
           name: 'Header button', // Display name of action source, used in widget settings ('Actions' tab).
           multiple: true // Boolean property indicating if this action source supports multiple action definitions (for ex. multiple buttons in one cell, or only one action can by assigned on table row click.)
        }
    };   
```

#### Creating simple widgets 

Below is set of simple steps how to create minimal widgets of each type.
In order to minimize amount of code used the Angular approach will be used.
By the way you can always use pure JavaScript code or use jQuery functions in your widget code.

##### Latest Values widget

In the **Widgets Bundle** view click on the big “+” button in the bottom-right part of the screen and then click on the “Create new widget type” button.
Click on the **Latest Values** button in the **Select widget type** popup.
The **Widget Editor** will be opened pre-populated with content of default **Latest Values** template widget.

 - Clear content of the CSS tab of "Resources" section.
 - Put the following HTML code inside the HTML tab of "Resources" section:
  
```html
  {% raw  %}<div flex layout="column" style="height: 100%;" layout-align="center stretch">
      <div>My first latest values widget.</div>
      <div flex layout="row" ng-repeat="dataKeyData in data" layout-align="space-around center">
          <div>{{dataKeyData.dataKey.label}}:</div>
          <div>{{dataKeyData.data[0][0] | date : 'yyyy-MM-dd HH:mm:ss'}}</div>
          <div>{{dataKeyData.data[0][1]}}</div>
      </div>
  </div>{% endraw %}
```

 - Put the following JavaScript code inside the "JavaScript" section:
 
```javascript
    self.onInit = function() {
        
        self.ctx.$scope.data = self.ctx.defaultSubscription.data;
    
    }
```

 - Click on the **Run** button in the **Widget Editor Toolbar** in order to see result in **Widget preview** section.
 
![image](/images/user-guide/contribution/widgets/latest-values-widget-sample.png) 

In this example the **data** property of [subscription](#subscription-object) is assigned to the **$scope** and become accessible within HTML template.
Inside the HTML a special **ng-repeat** angular directive is used in order to iterate over available dataKeys datapoints and render corresponding latest values with their timestamps. 

##### Time-Series widget

In the **Widgets Bundle** view click on the big “+” button in the bottom-right part of the screen and then click on the “Create new widget type” button.
Click on the **Time-Series** button in the **Select widget type** popup.
The **Widget Editor** will be opened pre-populated with content of default **Time-Series** template widget.

 - Clear content of the CSS tab of "Resources" section.
 - Put the following HTML code inside the HTML tab of "Resources" section:

```html
  {% raw  %}<div flex layout="column" style="height: 100%;">
      <div>My first Time-Series widget.</div>
      <md-tabs md-border-bottom>
          <md-tab ng-repeat="datasource in datasources track by $index" label="{{datasource.name}}">
              <table style="width: 100%;">
                  <thead>
                      <tr>
                          <th>Timestamp</th>
                          <th ng-repeat="dataKeyData in datasourceData[$index]">{{dataKeyData.dataKey.label}}</th>
                      <tr>          
                  </thead>
                  <tbody>
                      <tr ng-repeat="data in datasourceData[$index][0].data track by $index">
                          <td>{{data[0] | date : 'yyyy-MM-dd HH:mm:ss'}}</td>
                          <td ng-repeat="dataKeyData in datasourceData[$parent.$index]">{{dataKeyData.data[$parent.$index][1]}}</td>
                      </tr>      
                  </tbody>          
              </table>          
          </md-tab>       
      </md-tabs>      
  </div>{% endraw %}
```

 - Put the following JavaScript code inside the "JavaScript" section:
 
```javascript
self.onInit = function() {
    self.ctx.$scope.datasources = self.ctx.defaultSubscription.datasources;
    self.ctx.$scope.data = self.ctx.defaultSubscription.data;
    
    self.ctx.$scope.datasourceData = [];
    
    var currentDatasource = null;
    var currentDatasourceIndex = -1;
    
    for (var i=0;i<self.ctx.$scope.data.length;i++) {
        var dataKeyData = self.ctx.$scope.data[i];
        if (dataKeyData.datasource != currentDatasource) {
            currentDatasource = dataKeyData.datasource
            currentDatasourceIndex++;
            self.ctx.$scope.datasourceData[currentDatasourceIndex] = [];
            
        } 
        self.ctx.$scope.datasourceData[currentDatasourceIndex].push(dataKeyData);
    }

}

self.onDataUpdated = function() {
    self.ctx.$scope.$digest();
}
```

 - Click on the **Run** button in the **Widget Editor Toolbar** in order to see result in **Widget preview** section.

![image](/images/user-guide/contribution/widgets/timeseries-widget-sample.png) 

In this example the **datasources** and **data** property of [subscription](#subscription-object) is assigned to the **$scope** and become accessible within HTML template.
The **datasourceData** scope property is introduced to map datasource specific dataKeys data by datasource index for flexible access within HTML template.
Inside the HTML a special **ng-repeat** angular directive is used in order to iterate over available datasources and render corresponding tabs.
Inside each tab the table is rendered using dataKeys data obtained from **datasourceData** scope property accessed by datasource index.
Each table renders columns by iterating over all **dataKeyData** objects and renders all available datapoints by iterating over **data** array of each **dataKeyData** to render timestamps and values.
Note that in this code **onDataUpdated** function is implemented with call to angular **$digest** function necessary to perform new rendering cycle when new data is received.   

##### RPC (Control) widget

In the **Widgets Bundle** view click on the big “+” button in the bottom-right part of the screen and then click on the “Create new widget type” button.
Click on the **Control Widget** button in the **Select widget type** popup.
The **Widget Editor** will be opened pre-populated with content of default **Control** template widget.

 - Clear content of the CSS tab of "Resources" section.
 - Put the following HTML code inside the HTML tab of "Resources" section:

```html
  {% raw  %}<form name="rpcForm" ng-submit="sendCommand()">
    <md-content class="md-padding" layout="column">
        <md-input-container>
          <label>RPC method</label>  
          <input required name="rpcMethod" ng-model="rpcMethod"/>
          <div ng-messages="rpcForm.rpcMethod.$error">
            <div ng-message="required">RPC method name is required.</div>
          </div>
        </md-input-container>    
        <md-input-container>
          <label>RPC params</label>  
          <input required name="rpcParams" ng-model="rpcParams"/>
          <div ng-messages="rpcForm.rpcParams.$error">
            <div ng-message="required">RPC params is required.</div>
          </div>
        </md-input-container>    
        <md-button ng-disabled="rpcForm.$invalid || !rpcForm.$dirty" type="submit"
                   class="md-raised md-primary">
            Send RPC command
        </md-button>
        <div>
           <label>RPC command response</label>
           <div style="width: 100%; height: 100px; border: solid 2px gray" ng-bind-html="rpcCommandResponse">
           </div>       
        </div>
    </md-content>
  </form>{% endraw %}
```

 - Put the following JSON content inside the "Settings schema" tab of **Settings schema section**:
 
```json
{
    "schema": {
        "type": "object",
        "title": "Settings",
        "properties": {
            "oneWayElseTwoWay": {
                "title": "Is One Way Command",
                "type": "boolean",
                "default": true
            },
            "requestTimeout": {
                "title": "RPC request timeout",
                "type": "number",
                "default": 500
            }
        },
        "required": []
    },
    "form": [
        "oneWayElseTwoWay",
        "requestTimeout"
    ]
} 
```

 - Put the following JavaScript code inside the "JavaScript" section:
 
```javascript
self.onInit = function() {
    
    self.ctx.$scope.sendCommand = function() {
        var rpcMethod = self.ctx.$scope.rpcMethod;
        var rpcParams = self.ctx.$scope.rpcParams;
        var timeout = self.ctx.settings.requestTimeout;
        var oneWayElseTwoWay = self.ctx.settings.oneWayElseTwoWay ? true : false;
        
        var commandPromise;
        if (oneWayElseTwoWay) {
            commandPromise = self.ctx.controlApi.sendOneWayCommand(rpcMethod, rpcParams, timeout);
        } else {
            commandPromise = self.ctx.controlApi.sendTwoWayCommand(rpcMethod, rpcParams, timeout);
        }
        commandPromise.then(
            function success(response) {
                if (oneWayElseTwoWay) {
                    self.ctx.$scope.rpcCommandResponse = "Command was successfully received by device.<br/> No response body because of one way command mode.";
                } else {
                    self.ctx.$scope.rpcCommandResponse = "Response from device:<br/>";                    
                    self.ctx.$scope.rpcCommandResponse += angular.toJson(response);
                }
            },
            function fail(rejection) {
                self.ctx.$scope.rpcCommandResponse = "Failed to send command to the device:<br/>"
                self.ctx.$scope.rpcCommandResponse += "Status: " + rejection.status + "<br/>";
                self.ctx.$scope.rpcCommandResponse += "Status text: '" + rejection.statusText + "'";
            }
            
        );
    }
    
}
```

 - Fill **Widget title** field with widget type name, for ex. "My first control widget".  
 - Click on the **Run** button in the **Widget Editor Toolbar** in order to see result in **Widget preview** section. 
 - Now click dashboard edit button in the preview section and change size of the resulting widget. Then click dashboard apply button. The final widget should look like on the image below.
 
![image](/images/user-guide/contribution/widgets/control-widget-sample.png)
   
 - Click on the **Save** button in the **Widget Editor Toolbar** in order to save widget type.
   
To test how this widget performs RPC commands we will need to place this widget to some dashboard and bind to some device working with RPC commands. To do this perform the following steps:
 
 - Login as Tenant administrator.
 - Navigate to **Devices** and create new device with some name, for ex. "My RPC Device".
 - Open device details and click "Copy Access Token" button in order to copy device access token to clipboard.
 - Download [mqtt-js-rpc-from-server.sh](/docs/reference/resources/mqtt-js-rpc-from-server.sh) and [mqtt-js-rpc-from-server.js](/docs/reference/resources/mqtt-js-rpc-from-server.js). Place these files to some folder.
 Edit **mqtt-js-rpc-from-server.sh** - replace **$ACCESS_TOKEN** with your device access token from the clipboard.
 - Run **mqtt-js-rpc-from-server.sh** script. You should see "connected" message in the console if all went ok.
 - Navigate to **Dashboards** and create new dashboard with some name, for ex. "My first control dashboard". Open this dashboard.
 - Click dashboard "edit" button. In dashboard edit mode click on the "Entity aliases" button located on the dashboard toolbar.

![image](/images/user-guide/contribution/widgets/dashboard-toolbar-entity-aliases.png)
 
 - Inside **Entity aliases** popup click "Add alias". 
 - Fill "Alias name" field, for ex. "My RPC Device Alias".
 - Select "Entity list" in "Filter type" field.
 - Choose "Device" in "Type" field.
 - Select your device in "Entity list" field. In this example "My RPC Device".
 
![image](/images/user-guide/contribution/widgets/add-rpc-device-alias.png)

 - Click "Add" and then "Save" in **Entity aliases**.
 - Click dashboard "+" button then click "Create new widget" button.   

![image](/images/user-guide/contribution/widgets/dashboard-create-new-widget-button.png)

 - Then select **Widget Bundle** where your RPC widget was saved. Select "Control widget" tab.
 - Click on your widget. In this example "My first control widget".
 - In **Add Widget** popup select your device alias in **Target device** section. In this example "My RPC Device Alias".
 - Click **Add**. Your Control widget will appear in the dashboard. Click dashboard **Apply changes** button in order to save dashboard and leave editing mode.
 - Fill **RPC method** field with RPC method name. For ex. "TestMethod".
 - Fill **RPC params** field with RPC params. For ex. "{ param1: "value1" }".
 - Click **Send RPC command** button. You should see the following response in the widget.
 
![image](/images/user-guide/contribution/widgets/control-widget-sample-response-one-way.png)  
  
  The following output should be printed in the device console:
  
```bash   
  request.topic: v1/devices/me/rpc/request/0
  request.body: {"method":"TestMethod","params":"{ param1: \"value1\" }"}
```

In order to test "Two way" RPC command mode we need to change corresponding widget settings property. To do this perform the following steps:

 - Click dashboard "edit" button. In dashboard edit mode click **Edit widget** button located in the header of Control widget.
 - In the widget details view select "Advanced" tab and uncheck "Is One Way Command" checkbox.  

![image](/images/user-guide/contribution/widgets/control-widget-sample-settings.png)   

 - Click **Apply changes** button in the widget detals header. Close details and click dashboard **Apply changes** button.
 - Fill widget fields with RPC method name and params like in previous steps. 
 Click **Send RPC command** button. You should see the following response in the widget.
 
![image](/images/user-guide/contribution/widgets/control-widget-sample-response-two-way.png)
  
  - TODO: stop mqtt-js-rpc-from-server.sh ...............
 

##### Alarm widget

In the “Widgets Bundle” view click on the big “+” button in the bottom-right part of the screen and then click on the “Create new widget type” button.
Click on the "Alarm Widget" button in the **Select widget type** popup.

##### Static widget

In the “Widgets Bundle” view click on the big “+” button in the bottom-right part of the screen and then click on the “Create new widget type” button.
Click on the "Static Widget" button in the **Select widget type** popup.

### Integrating existing code to create widget definition 



  