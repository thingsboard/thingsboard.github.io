* TOC
{:toc}

## Overview

All widget-related code is located in the [JavaScript section](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/#javascript-section).
The built-in variable **self** that is a reference to the widget instance is also available.
Each widget function should be defined as a property of the **self** variable.
The **self** variable has a property **ctx** of type [WidgetContext](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/modules/home/models/widget-component.models.ts#L83), which is a reference to the widget context that contains all the necessary API and data used by widget instance.
Below is a brief description of widget context properties:

| **Property**                     | **Type**           | **Description**                                                                                                                                                                                                                                                                                                    |
|----------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| $container                       | jQuery Object      | Container element of the widget. Can be used to dynamically access or modify widget DOM using jQuery API.                                                                                                                                                                                                          |
| $scope                           | [IDynamicWidgetComponent](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/modules/home/models/widget-component.models.ts#L274")             | Reference to the current widget component. Can be used to access/modify component properties when widget is built using Angular approach.                                                                                                                                                                          |
| width                            | Number             | Current width of widget container in pixels.                                                                                                                                                                                                                                                                       |
| height                           | Number             | Current height of widget container in pixels.                                                                                                                                                                                                                                                                      |
| isEdit                           | Boolean            | Indicates whether the dashboard is in in the view or editing state.                                                                                                                                                                                                                                                |
| isMobile                         | Boolean            | Indicates whether the dashboard view is less then 960px width (default mobile breakpoint).                                                                                                                                                                                                                         |
| widgetConfig                     | [WidgetConfig](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L341)             | Common widget configuration containing properties such as **color** (text color), **backgroundColor** (widget background color), etc.                                                                                                                                                                              |
| settings                         | Object             | Widget settings containing widget specific properties according to the defined [settings json schema](#settings-schema-section).                                                                                                                                                                                   |
| datasources                      | Array<[Datasource](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L250)>  | Array of resolved widget datasources. See [Subscription object](#subscription-object).                                                                                                                                                                                                                             |
| data                             | Array<[DatasourceData](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L275)>  | Array of latest datasources data. See [Subscription object](#subscription-object).                                                                                                                                                                                                                                 |
| timeWindow                       | [WidgetTimewindow](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/time/time.models.ts#L104)   | Current widget timewindow (applicable for timeseries widgets). Holds information about current timewindow bounds. **minTime** - minimum time in UTC milliseconds, **maxTime** - maximum time in UTC milliseconds, **interval** - current aggregation interval in milliseconds.                                     |
| units                            | String             | Optional property defining units text of values displayed by widget. Useful for simple widgets like cards or gauges.                                                                                                                                                                                               |
| decimals                         | Number             | Optional property defining how many positions should be used to display decimal part of the value number.                                                                                                                                                                                                          |
| hideTitlePanel                   | Boolean            | Manages visibility of widget title panel. Useful for widget with custom title panels or different states. **updateWidgetParams()** function must be called after this property change.                                                                                                                             |
| widgetTitle                      | String             | If set, will override configured widget title text. **updateWidgetParams()** function must be called after this property change.                                                                                                                                                                                   |
| detectChanges()                  | Function           | Trigger change detection for current widget. Must be invoked when widget HTML template bindings should be updated due to widget data changes.                                                                                                                                                                      |
| updateWidgetParams()             | Function           | Updates widget with runtime set properties such as **widgetTitle**, **hideTitlePanel**, etc. Must be invoked for these property changes to take effect.                                                                                                                                                            |
| pageLink(pageSize, page, textSearch, sortOrder) | [PageLink](https://github.com/thingsboard/thingsboard/blob/{{ site.release.wd_examples_commit }}/ui-ngx/src/app/shared/models/page/page-link.ts#L98) | Is used to create sorting configuration for GET requests. **pageSize** - determines the number of entities displayed on a page, **page** - specifies which page should be displayed, **textSearch** - filters entities based on the included text, **sortOrder** - sets the order in which entities are displayed. |
| defaultSubscription              | [IWidgetSubscription](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L220")             | Default widget subscription object contains all subscription information, including current data, according to the widget type. See [Subscription object](#subscription-object).                                                                                                                                   |
| timewindowFunctions              | [TimewindowFunctions](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L45)             | Object with timewindow functions used to manage widget data time frame. Can be used by Time-series or Alarm widgets. See [Timewindow functions](#timewindow-functions).                                                                                                                                            |
| controlApi                       | [RpcApi](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L58)             | Object that provides API functions for RPC (Control) widgets. See [Control API](#control-api).                                                                                                                                                                                                                     | 
| actionsApi                       | [WidgetActionsApi](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L67)             | A set of API functions for working with user-defined actions. See [Actions API](#actions-api).                                                                                                                                                                                                                     |
| stateController                  | [IStateController](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L121)             | Reference to Dashboard state controller, providing API to manage the current dashboard state. See [State Controller](#state-controller).                                                                                                                                                                           |

In order to implement a new widget, the following JavaScript functions should be defined *(Note: each function is optional and can be implemented according to  widget specific behaviour):*

| **Function**                                                       | **Description**                                                                                                                                                                                                                                                                                              |
|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` onInit() ```                                                   | The first function that is called when the widget is ready for initialization. It should be used to prepare widget DOM, process widget settings and handle initial subscription information.                                                                                                                 |
| ``` onDataUpdated() ```                                            | Called when the new data is available from the widget subscription. Latest data can be accessed from the [**defaultSubscription** object](#subscription-object) of widget context (**ctx**).                                                                                                                 |
| ``` onResize() ```                                                 | Called when widget container is resized. Latest width and height can be obtained from widget context (**ctx**).                                                                                                                                                                                              |
| ``` onEditModeChanged() ```                                        | Called when dashboard editing mode is changed. Latest mode is handled by isEdit property of **ctx**.                                                                                                                                                                                                         |
| ``` onMobileModeChanged() ```                                      | Called when dashboard view width crosses mobile breakpoint. Latest state is handled by isMobile property of **ctx**.                                                                                                                                                                                         |
| ``` onDestroy() ```                                                | Called when widget element is destroyed. Should be used to cleanup all resources if necessary.                                                                                                                                                                                                               |
| ``` getSettingsSchema() ```                                        | Optional function returning widget settings schema json as alternative to **Settings tab** of [Settings schema section](#settings-schema-section).                                                                                                                                                           |
| ``` getDataKeySettingsSchema() ```                                 | Optional function returning particular data key settings schema json as alternative to **Data key settings schema** tab of [Settings schema section](#settings-schema-section).                                                                                                                              |
| ``` typeParameters() ```                                           | Returns [WidgetTypeParameters](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L146) object describing widget datasource parameters. See [Type parameters object](#type-parameters-object).                           |
| ``` actionSources() ```                                            | Returns map describing available widget action sources ([WidgetActionSource](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L118)) used to define user actions. See [Action sources object](#action-sources-object). |


#### Subscription object

The widget subscription object is instance of [IWidgetSubscription](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L220") and contains all subscription information, including current data, according to the [widget type](/docs/{{docsPrefix}}user-guide/ui/widget-library/#widget-types).
Depending on widget type, subscription object provides different data structures.
For [Latest values](/docs/{{docsPrefix}}user-guide/ui/widget-library/#latest-values) and [Time-series](/docs/{{docsPrefix}}user-guide/ui/widget-library/#time-series) widget types, it provides the following properties:

- **datasources** - array of datasources (Array<[Datasource](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L250)>) used by this subscription, it has the following structure:

```javascript
    datasources = [
        {  // datasource
           type: 'entity',// type of the datasource. Can be "function" or "entity"
           name: 'name', // name of the datasource (in case of "entity" usually Entity name)
           aliasName: 'aliasName', // name of the alias used to resolve this particular datasource Entity
           entityName: 'entityName', // name of the Entity used as datasource
           entityType: 'DEVICE', // datasource Entity type (for ex. "DEVICE", "ASSET", "TENANT", etc.)
           entityId: '943b8cd0-576a-11e7-824c-0b1cb331ec92', // entity identificator presented as string uuid. 
           dataKeys: [ //  array of keys (Array<DataKey>) (attributes or timeseries) of the entity used to fetch data 
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

- **data** - array of latest data (Array<[DatasourceData](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L275)>) received in scope of this subscription, it has the following structure:

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

For [Alarm widget](/docs/{{docsPrefix}}user-guide/ui/widget-library/#alarm-widget) type it provides the following properties:

- **alarmSource** - ([Datasource](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L250)) information about entity for which alarms are fetched, it has the following structure:

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

- **alarms** - array of alarms (Array<[Alarm](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/alarm.models.ts#L88)>) received in scope of this subscription, it has the following structure:

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
            ackTs: 0, // Time of alarm acknowledgment (unix timestamp)
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

For [RPC](/docs/{{docsPrefix}}user-guide/ui/widget-library/#rpc-control-widget) or [Static](/docs/{{docsPrefix}}user-guide/ui/widget-library/#static) widget types, subscription object is optional and does not contain necessary information.

#### Timewindow functions

Object with timewindow functions ([TimewindowFunctions](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/core/api/widget-api.models.ts#L45)) used to manage widget data time frame. Can be used by [Time-series](/docs/{{docsPrefix}}user-guide/ui/widget-library/#time-series) or [Alarm](/docs/{{docsPrefix}}user-guide/ui/widget-library/#alarm-widget) widgets. Path: **widgetContext.dashboard**.

| **Function**                                        | **Description**                                                                        |
|-----------------------------------------------------|----------------------------------------------------------------------------------------|
| ``` onUpdateTimewindow(startTimeMs, endTimeMs) ```  | This function can be used to update current subscription time frame to historical one identified by **startTimeMs** and **endTimeMs** arguments. |
| ``` onResetTimewindow() ```                         | Resets subscription time frame to default defined by widget timewindow component or dashboard timewindow depending on widget settings. |


#### Control API

The Control API ([RpcApi](https://github.com/thingsboard/thingsboard/blob/{{ site.release.wd_examples_commit }}/ui-ngx/src/app/core/api/widget-api.models.ts#L74)) provides API functions for the [Control widgets](/docs/{{docsPrefix}}user-guide/ui/widget-library/#rpc-control-widget). Path: **widgetContext.controlApi**.

| **Function**                                        | **Description**                                                                        |
|-----------------------------------------------------|----------------------------------------------------------------------------------------|
| ``` sendOneWayCommand(method, params, timeout) ```  | Sends one way (without response) RPC command to the device. Returns command execution promise. **method** - RPC method name, string, **params** - RPC method params, custom json object, **timeout** - maximum delay in milliseconds to wait until response/acknowledgement is received.  |
| ``` sendTwoWayCommand(method, params, timeout) ```  | Sends two way (with response) RPC command to the device. Returns command execution promise with response body in success callback. |
| ``` completedCommand() ```                          | Stops the RPC execution for the device. |

#### Actions API

Set of API functions ([WidgetActionsApi](https://github.com/thingsboard/thingsboard/blob/{{ site.release.wd_examples_commit }}/ui-ngx/src/app/core/api/widget-api.models.ts#L86)) to work with user defined actions. Path: **widgetContext.actionsApi**.

| **Function**                                                          | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` getActionDescriptors(actionSourceId) ```                          | Returns the list of action descriptors for provided **actionSourceId**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ``` handleWidgetAction($event, descriptor, entityId, entityName) ```  | Handles action produced by particular action source. **$event** - event object associated with action, **descriptor** - action descriptor, **entityId** and **entityName** - current entity id and name provided by action source if available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ``` getActiveEntityInfo() ```                                         | Returns information about the first found entity in the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ``` openDashboardStateInSeparateDialog(targetDashboardStateId, params?, dialogTitle?, hideDashboardToolbar?, dialogWidth?, dialogHeight?) ``` | Open the dashboard state in a separate dialog using **stateId**. The parameter **targetDashboardStateId** refers to the ID of the state that will be opened in this separate dialog. The **params** - contains information about state entity and additional info. The **dialogTitle** sets the title for the separate dialog. The **hideDashboardToolbar** parameter determines the visibility of the dashboard toolbar. **dialogWidth** and **dialogHeight** define the width and height of the separate dialog, respectively.                                                                                                                                                                                                              |
| ``` openDashboardStateInPopover($event, targetDashboardStateId, params?, hideDashboardToolbar?, preferredPlacement?, hideOnClickOutside?, popoverWidth?, popoverHeight?, popoverStyle?) ``` | Opens dashboard state in the pop-over window by **stateId**. The **$event** - event object associated with the action. The **targetDashboardStateId** refers to the id of the state that will be open in pop-over. The **params** - contains information about state entity and additional info. The **hideDashboardToolbar** parameter determines the visibility of the dashboard toolbar. The **referredPlacement** determines the position for opening the pop-over. The **hideOnClickOutside** parameter, when enabled, ensures the pop-over closes upon an outside click.  The **popoverStyle** sets the style of pop-over window. **popoverWidth** and **popoverHeight** define the width and height of the separate dialog, respectively. |

#### Widget Subscription API

Set of API functions ([WidgetSubscriptionApi](https://github.com/thingsboard/thingsboard/blob/{{ site.release.wd_examples_commit }}/ui-ngx/src/app/core/api/widget-api.models.ts#L66)) to work with custom subscriptions. Path: **widgetContext.subscriptionApi**.

| **Function**                                                          | **Description**                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` createSubscription(options, subscribe?) ```                          | Creates subscription to the data. The **options** - contain information regarding the subscription, **subscribe** - controls the arrival of updated data.                                                                                                                                                                                      |
| ``` createSubscriptionFromInfo(type, subscriptionsInfo, options, useDefaultComponents, subscribe) ```  | Creates subscription to the data. The **type** - type of widget, the **subscriptionsInfo** - describes the data for a subscription, **options** - contain information regarding the subscription, **useDefaultComponents** - if enabled, the default subscription settings will be used, **subscribe** - controls the arrival of updated data. |
| ``` removeSubscription(id) ```                                         | Removes subscription. The **id** parameter refers id of subscription.                                                                                                                                                                                                                                                                          |


#### State Controller

Reference to Dashboard state controller ([IStateController](https://github.com/thingsboard/thingsboard/blob/v3.4/ui-ngx/src/app/core/api/widget-api.models.ts#L151)), providing API to manage current dashboard state. Path: **widgetContext.dashboard.stateController**.

| **Function**                                        | **Description**                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` openState(id, params, openRightLayout) ```      | Navigates to new dashboard state. **id** - id of the target dashboard state, **params** - object with state parameters to be used by the new state, **openRightLayout** - optional boolean argument that forces the right dashboard layout to open if present in mobile view mode.                                              |
| ``` updateState(id, params, openRightLayout) ```    | Updates current dashboard state. **id** - optional id of the target dashboard state to replace current state id, **params** - object with state parameters to update current state parameters, **openRightLayout** - optional boolean argument to force open right dashboard layout if present in mobile view mode. |
| ``` resetState() ```                                | Resets current dashboard state.                                                                                                                                                                                                                                                                                   |                                               
| ``` getStateId() ```                                | Returns current dashboard state id.                                                                                                                                                                                                                                                                               |
| ``` getStateIndex() ```                             | Returns the depth of nesting of the state.                                                                                                                                                                                                                                                                        |
| ``` getStateIdAtIndex(index) ```                    | Returns **stateId** by index.                                                                                                                                                                                                                                                                                     |
| ``` getCurrentStateName() ```                       | Returns **name** of current state.                                                                                                                                                                                                                                                                                |
| ``` getStateParams() ```                            | Returns current dashboard state parameters.                                                                                                                                                                                                                                                                       |
| ``` getEntityId(entityParamName) ```                | Returns **entityId** by state entity parameter name. **entityParamName** - state entity parameter name.                                                                                                                                                                                                           |
| ``` getStateParamsByStateId(id) ```                 | Returns state parameters for particular dashboard state identified by **id**.                                                                                                                                                                                                                                     |
| ``` openRightLayout() ```                           | Opens right layout of the current state (in mobile mode).                                                                                                                                                                                                                                                         |
| ``` preserveState() ```                             | Saves state parameters into **preservedState**.                                                                                                                                                                                                                         |
| ``` cleanupPreservedStates() ```                    | Clears the **preservedState**.                                                                                                                                                                                                                                                                                       |

#### Broadcast Service

The Broadcast Service ([BroadcastService](https://github.com/thingsboard/thingsboard/blob/{{ site.release.wd_examples_commit }}/ui-ngx/src/app/core/services/broadcast.service.ts#L25)) is used for data exchange between widgets at the UI level.

| **Function**                                        | **Description**                                                                                                                                                                                                                                    |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` broadcast(name, args) ```      | Sends data to subscribers. **name** - unique identifier, **argc** - data that you want to send.                                                                                                                                                    |
| ``` on(name, listener) ```    | Subscribe to data using a unique identifier and process it accordingly. Multiple subscribers can be added. The **name** serves as the unique identifier for subscriptions, while **listener** is the function that will process the received data. |

For example, consider sending data from Widget 1 to Widget 2.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/broadcast-service-start.png)

In Widget 1 you must send data using broadcast(...) function:
```
self.onInit = function() {
    ...
    let $scope = self.ctx.$scope;
    self.ctx.broadcastService = $scope.$injector.get(self.ctx.servicesMap.get('broadcastService'));
    $scope.click = function() {
        self.ctx.broadcastService.broadcast('ID', 'Some data');
    }
    ...
}
```

In Widget 2 you must subscribe on data using on(...) function:
```
self.onInit = function() {
    ...
    let $scope = self.ctx.$scope;
    $scope.widgetText = 'Ready to get data';
    self.ctx.broadcastService = $scope.$injector.get(self.ctx.servicesMap.get('broadcastService'));
    self.ctx.broadcastService.on('ID', (event, args) => {
        $scope.widgetText = args[0];
        self.ctx.detectChanges();
    });
    ...
}
```

as a result on Widget 2 you can see your data:

![image](https://img.thingsboard.io/user-guide/contribution/widgets/broadcast-service-finish.png)

#### Type parameters object

Object [WidgetTypeParameters](https://github.com/thingsboard/thingsboard/blob/5a16da51b5d755e18c5d8088e88336f07e4766ea/ui-ngx/src/app/shared/models/widget.models.ts#L170) describing widget datasource parameters. It has the following properties:

```javascript
    return {
        maxDatasources: -1, // Maximum allowed datasources for this widget, -1 - unlimited
        maxDataKeys: -1, //Maximum allowed data keys for this widget, -1 - unlimited
        dataKeysOptional: false, //Whether this widget can be configured with datasources without data keys
        datasourcesOptional: false, //Whether this widget can be configured without datasources
        singleEntity: false, //Whether this widget will work with only one entity
        hasAdditionalLatestDataKeys: false, //Whether this widget will support additional latest data keys
        ignoreDataUpdateOnIntervalTick: true, //Use for time series widgets. if true, onDataUpdate will trigger when new data is received otherwise it will be triggered each second.
        previewWidth: 250px, //Default size of preview X axis
        previewHeight: 250px, //Default size of preview Y axis
        embedTitlePanel: false, //Whether hide title panel
        hideDataSettings: false, //Whether data settings will hide (appearance tab)
    }
```

#### Action sources object

Map describing available widget action sources ([WidgetActionSource](https://github.com/thingsboard/thingsboard/blob/13e6b10b7ab830e64d31b99614a9d95a1a25928a/ui-ngx/src/app/shared/models/widget.models.ts#L118)) to which user actions can be assigned. It has the following structure:

```javascript
   return {
        'headerButton': { // Action source Id (unique action source identificator)
           name: 'Header button', // Display name of action source, used in widget settings ('Actions' tab).
           multiple: true // Boolean property indicating if this action source supports multiple action definitions (for ex. multiple buttons in one cell, or only one action can by assigned on table row click.)
        }
    };
```

### Creating simple widgets

The tutorials below show how to create minimal widgets of each type.
In order to minimize the amount of code, the Angular framework will be used, on which ThingsBoard UI is actually based.
By the way, you can always use pure JavaScript or jQuery API in your widget code.

#### Latest Values widget

In the **Widgets Bundle** view, click the big “+” button at the bottom-right part of the screen and then click the “Create new widget type” button.
Click the **Latest Values** button on the **Select widget type** pop-up.
The **Widget Editor** will open, pre-populated with the content of the default **Latest Values** template widget.

- Clear content of the CSS tab of "Resources" section.
- Put the following HTML code inside the HTML tab of "Resources" section:

```html
  {% raw  %}<div fxFlex fxLayout="column" style="height: 100%;" fxLayoutAlign="center stretch">
    <div>My first latest values widget.</div>
    <div fxFlex fxLayout="row" *ngFor="let dataKeyData of data" fxLayoutAlign="space-around center">
        <div>{{dataKeyData.dataKey.label}}:</div>
        <div>{{(dataKeyData.data[0] && dataKeyData.data[0][0]) | date : 'yyyy-MM-dd HH:mm:ss' }}</div>
        <div>{{dataKeyData.data[0] && dataKeyData.data[0][1]}}</div>
    </div>
  </div>{% endraw %}
```

- Put the following JavaScript code inside the "JavaScript" section:

```javascript
    self.onInit = function() {
       self.ctx.$scope.data = self.ctx.defaultSubscription.data;
    }

    self.onDataUpdated = function() {
        self.ctx.detectChanges();
    }
```

- Click the **Run** button on the **Widget Editor Toolbar** in order to see the result in **Widget preview** section.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/latest-values-widget-sample.png)

In this example, the **data** property of [subscription](#subscription-object) is assigned to the **$scope** and becomes accessible within the HTML template.
Inside the HTML, a special [***ngFor**](https://angular.io/api/common/NgForOf) structural angular directive is used in order to iterate over available dataKeys & datapoints then render latest values with their corresponding timestamps.

#### Time-Series widget

In the **Widgets Bundle** view, click the big “+” button at the bottom-right part of the screen, then click the “Create new widget type” button.
Click the **Time-Series** button on the **Select widget type** pop-up.
The **Widget Editor** will open, pre-populated with default **Time-Series** template widget content.

- Replace content of the CSS tab in "Resources" section with the following one:

```css
.my-data-table th {
    text-align: left;
}
``` 

- Put the following HTML code inside the HTML tab of "Resources" section:

```html
  {% raw  %}<mat-tab-group style="height: 100%;">
      <mat-tab *ngFor="let datasource of datasources; let $dsIndex = index" label="{{datasource.name}}">
          <table class="my-data-table" style="width: 100%;">
              <thead>
                  <tr>
                      <th>Timestamp</th>
                      <th *ngFor="let dataKeyData of datasourceData[$dsIndex]">{{dataKeyData.dataKey.label}}</th>
                  <tr>
              </thead>
              <tbody>
                  <tr *ngFor="let data of datasourceData[$dsIndex][0].data; let $dataIndex = index">
                      <td>{{data[0] | date : 'yyyy-MM-dd HH:mm:ss'}}</td>
                      <td *ngFor="let dataKeyData of datasourceData[$dsIndex]">{{dataKeyData.data[$dataIndex] && dataKeyData.data[$dataIndex][1]}}</td>
                  </tr>
              </tbody>
          </table>
      </mat-tab>
  </mat-tab-group>{% endraw %}
```

- Put the following JavaScript code inside the "JavaScript" section:

```javascript
self.onInit = function() {
    self.ctx.widgetTitle = 'My first Time-Series widget';
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
    self.ctx.updateWidgetParams();

}

self.onDataUpdated = function() {
    self.ctx.detectChanges();
}
```

- Click the **Run** button on the **Widget Editor Toolbar** in order to see the result in **Widget preview** section.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/timeseries-widget-sample.png)

In this example, the [subscription](#subscription-object) **datasources** and **data** properties are assigned to **$scope** and become accessible within the HTML template.
The **$scope.datasourceData** property is introduced to map datasource specific dataKeys data by datasource index for flexible access within the HTML template.
Inside the HTML, a special [***ngFor**](https://angular.io/api/common/NgForOf) structural angular directive is used in order to iterate over available datasources and render corresponding tabs.
Inside each tab, the table is rendered using dataKeys obtained from **datasourceData** scope property accessed by datasource index.
Each table renders columns by iterating over all **dataKeyData** objects and renders all available datapoints by iterating over **data** array of each **dataKeyData** to render timestamps and values.
Note that in this code, **onDataUpdated** function is implemented with a call to **detectChanges** function necessary to perform new change detection cycle when new data is received.

#### RPC (Control) widget

In the **Widgets Bundle** view, click the big “+” button at the bottom-right part of the screen and then click the “Create new widget type” button.
Click the **Control Widget** button on the **Select widget type** popup.
The **Widget Editor** will open, pre-populated with default **Control** template widget content.

- Clear content of the CSS tab of "Resources" section.
- Put the following HTML code inside the HTML tab of "Resources" section:

```html
    {% raw  %}<form #rpcForm="ngForm" (submit)="sendCommand()">
      <div class="mat-content mat-padding" fxLayout="column">
        <mat-form-field class="mat-block">
          <mat-label>RPC method</mat-label>
          <input matInput required name="rpcMethod" #rpcMethodField="ngModel" [(ngModel)]="rpcMethod"/>
          <mat-error *ngIf="rpcMethodField.hasError('required')">
            RPC method name is required.
          </mat-error>
        </mat-form-field>
        <mat-form-field class="mat-block">
          <mat-label>RPC params</mat-label>
          <input matInput required name="rpcParams" #rpcParamsField="ngModel" [(ngModel)]="rpcParams"/>
          <mat-error *ngIf="rpcParamsField.hasError('required')">
            RPC params is required.
          </mat-error>
        </mat-form-field>
        <button [disabled]="rpcForm.invalid || !rpcForm.dirty" mat-raised-button color="primary" type="submit" >
          Send RPC command
        </button>
        <div>
          <label>RPC command response</label>
          <div style="width: 100%; height: 100px; border: solid 2px gray" [innerHTML]="rpcCommandResponse">
          </div>
        </div>
      </div>
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

        var commandObservable;
        if (oneWayElseTwoWay) {
            commandObservable = self.ctx.controlApi.sendOneWayCommand(rpcMethod, rpcParams, timeout);
        } else {
            commandObservable = self.ctx.controlApi.sendTwoWayCommand(rpcMethod, rpcParams, timeout);
        }
        commandObservable.subscribe(
            function (response) {
                if (oneWayElseTwoWay) {
                    self.ctx.$scope.rpcCommandResponse = "Command was successfully received by device.<br> No response body because of one way command mode.";
                } else {
                    self.ctx.$scope.rpcCommandResponse = "Response from device:<br>";
                    self.ctx.$scope.rpcCommandResponse += JSON.stringify(response, undefined, 2);
                }
                self.ctx.detectChanges();
            },
            function (rejection) {
                self.ctx.$scope.rpcCommandResponse = "Failed to send command to the device:<br>"
                self.ctx.$scope.rpcCommandResponse += "Status: " + rejection.status + "<br>";
                self.ctx.$scope.rpcCommandResponse += "Status text: '" + rejection.statusText + "'";
                self.ctx.detectChanges();
            }

        );
    }

}
```

- Fill **Widget title** field with widget type name, for ex. "My first control widget".
- Click the **Run** button on the **Widget Editor Toolbar** in order to see the result in **Widget preview** section.
- Click dashboard edit button on the preview section to change the size of the resulting widget. Then click dashboard apply button. The final widget should look like the image below.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/control-widget-sample.png)

- Click the **Save** button on the **Widget Editor Toolbar** to save widget type.

To test how this widget performs RPC commands, we will need to place it in a dashboard then bind it to a device working with RPC commands. To do this, perform the following steps:

- Login as Tenant administrator.
- Navigate to **Devices** and create new device with some name, for ex. "My RPC Device".
- Open device details and click "Copy Access Token" button to copy device access token to clipboard.
- Download [mqtt-js-rpc-from-server.sh](/docs/{{docsPrefix}}reference/resources/mqtt-js-rpc-from-server.sh) and [mqtt-js-rpc-from-server.js](/docs/{{docsPrefix}}reference/resources/mqtt-js-rpc-from-server.js). Place these files in a folder.
  Edit **mqtt-js-rpc-from-server.sh** - replace **$ACCESS_TOKEN** with your device access token from the clipboard. Then, install mqtt client library.
- Run **mqtt-js-rpc-from-server.sh** script. You should see a "connected" message in the console.
- Navigate to **Dashboards** and create a new dashboard with some name, for ex. "My first control dashboard". Open this dashboard.
- Click dashboard "edit" button. In the dashboard edit mode, click the "Entity aliases" button located on the dashboard toolbar.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/dashboard-toolbar-entity-aliases.png)

- Inside **Entity aliases** pop-up click "Add alias".
- Fill "Alias name" field, for ex. "My RPC Device Alias".
- Select "Entity list" in "Filter type" field.
- Choose "Device" in "Type" field.
- Select your device in "Entity list" field. In this example "My RPC Device".

![image](https://img.thingsboard.io/user-guide/contribution/widgets/add-rpc-device-alias.png)

- Click "Add" and then "Save" in **Entity aliases**.
- Click dashboard "+" button then click "Create new widget" button.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/dashboard-create-new-widget-button.png)

- Then select **Widget Bundle** where your RPC widget was saved. Select "Control widget" tab.
- Click your widget. In this example, "My first control widget".
- From **Add Widget** pop-up, select your device alias in **Target device** section. In this example "My RPC Device Alias".
- Click **Add**. Your Control widget will appear on the dashboard. Click the dashboard's **Apply changes** button to save the dashboard and exit editing mode.
- Fill **RPC method** field with RPC method name. For ex. "TestMethod".
- Fill **RPC params** field with RPC params. For ex. "{ param1: "value1" }".
- Click **Send RPC command** button. You should see the following response in the widget.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/control-widget-sample-response-one-way.png)

The following output should be printed in the device console:

```bash
  request.topic: v1/devices/me/rpc/request/0
  request.body: {"method":"TestMethod","params":"{ param1: \"value1\" }"}
```

In order to test "Two way" RPC command mode, we need to change the corresponding widget settings property. To do this, perform the following steps:

- Click dashboard "edit" button. In dashboard edit mode, click **Edit widget** button located in the header of Control widget.
- In the widget details, select "Advanced" tab and uncheck "Is One Way Command" checkbox.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/control-widget-sample-settings.png)

- Click **Apply changes** button on the widget details header. Close details and click dashboard **Apply changes** button.
- Fill widget fields with RPC method name and params like in previous steps.
  Click **Send RPC command** button. You should see the following response in the widget.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/control-widget-sample-response-two-way.png)

- stop **mqtt-js-rpc-from-server.sh** script.
  Click **Send RPC command** button. You should see the following response in the widget.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/control-widget-sample-response-timeout.png)

In this example, **controlApi** is used to send RPC commands. Additionally, custom widget settings were introduced in order to configure RPC command mode and RPC request timeout.
The response from the device is handled by **commandObservable**.  It has success and failed callbacks with corresponding response, or rejection objects containing information about request execution result.

#### Alarm widget

In the **Widgets Bundle** view, click the big “+” button at the bottom-right part of the screen and then click the “Create new widget type” button.
Click the **Alarm Widget** button on the **Select widget type** popup.
The **Widget Editor** will be opened, pre-populated with the content of the default **Alarm** template widget.

- Replace content of the CSS tab in "Resources" section with the following one:

```css
.my-alarm-table th {
    text-align: left;
}
``` 

- Put the following HTML code inside the HTML tab of "Resources" section:

```html
  {% raw  %}<div fxFlex fxLayout="column" style="height: 100%;">
      <div>My first Alarm widget.</div>
      <table class="my-alarm-table" style="width: 100%;">
          <thead>
              <tr>
                  <th *ngFor="let dataKey of alarmSource?.dataKeys">{{dataKey.label}}</th>
              <tr>
          </thead>
          <tbody>
              <tr *ngFor="let alarm of alarms">
                  <td *ngFor="let dataKey of alarmSource?.dataKeys"
                      [ngStyle]="getAlarmCellStyle(alarm, dataKey)">
                      {{getAlarmValue(alarm, dataKey)}}
                  </td>
              </tr>
          </tbody>
      </table>
  </div>{% endraw %}
```

- Put the following JSON content inside the "Settings schema" tab of **Settings schema section**:

```json
{
    "schema": {
        "type": "object",
        "title": "AlarmTableSettings",
        "properties": {
            "alarmSeverityColorFunction": {
                "title": "Alarm severity color function: f(severity)",
                "type": "string",
                "default": "if(severity == 'CRITICAL') {return 'red';} else if (severity == 'MAJOR') {return 'orange';} else return 'green'; "
            }
        },
        "required": []
    },
    "form": [
        {
            "key": "alarmSeverityColorFunction",
            "type": "javascript"
        }
    ]
}
```

- Put the following JavaScript code inside the "JavaScript" section:

```javascript
self.onInit = function() {
    var pageLink = self.ctx.pageLink(100);

    pageLink.typeList = self.ctx.widgetConfig.alarmTypeList;
    pageLink.statusList = self.ctx.widgetConfig.alarmStatusList;
    pageLink.severityList = self.ctx.widgetConfig.alarmSeverityList;
    pageLink.searchPropagatedAlarms = self.ctx.widgetConfig.searchPropagatedAlarms;

    self.ctx.defaultSubscription.subscribeForAlarms(pageLink, null);
    self.ctx.$scope.alarmSource = self.ctx.defaultSubscription.alarmSource;

    var alarmSeverityColorFunctionBody = self.ctx.settings.alarmSeverityColorFunction;
    if (typeof alarmSeverityColorFunctionBody === 'undefined' || !alarmSeverityColorFunctionBody.length) {
        alarmSeverityColorFunctionBody = "if(severity == 'CRITICAL') {return 'red';} else if (severity == 'MAJOR') {return 'orange';} else return 'green';";
    }

    var alarmSeverityColorFunction = null;
    try {
        alarmSeverityColorFunction = new Function('severity', alarmSeverityColorFunctionBody);
    } catch (e) {
        alarmSeverityColorFunction = null;
    }

    self.ctx.$scope.getAlarmValue = function(alarm, dataKey) {
        var alarmKey = dataKey.name;
        if (alarmKey === 'originator') {
            alarmKey = 'originatorName';
        }
        var value = alarm[alarmKey];
        if (alarmKey === 'createdTime') {
            return self.ctx.date.transform(value, 'yyyy-MM-dd HH:mm:ss');
        } else {
            return value;
        }
    }

    self.ctx.$scope.getAlarmCellStyle = function(alarm, dataKey) {
        var alarmKey = dataKey.name;
        if (alarmKey === 'severity' && alarmSeverityColorFunction) {
            var severity = alarm[alarmKey];
            var color = alarmSeverityColorFunction(severity);
            return {
                color: color  
            };
        } 
        return {};
    }
}

self.onDataUpdated = function() {
    self.ctx.$scope.alarms = self.ctx.defaultSubscription.alarms.data;
    self.ctx.detectChanges();
}
```

- Click the **Run** button on the **Widget Editor Toolbar** in order to see the result in **Widget preview** section.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/alarm-widget-sample.png)

In this example, the **alarmSource** and **alarms** properties of [subscription](#subscription-object) are assigned to **$scope** and become accessible within HTML template.
Inside the HTML, a special [***ngFor**](https://angular.io/api/common/NgForOf) structural angular directive is used in order to iterate over available alarm **dataKeys** of **alarmSource** and render corresponding columns.
The table rows are rendered by iterating over **alarms** array and corresponding cells rendered by iterating over **dataKeys**.
The function **getAlarmValue** is fetching alarm value and formatting **createdTime** alarm property using a [DatePipe](https://angular.io/api/common/DatePipe) angular pipe accessible via **date** property of **ctx**.
The function **getAlarmCellStyle** is used to assign custom cell styles for each alarm cell. In this example, we introduced new settings property called **alarmSeverityColorFunction** that contains function body returning color depending on alarm severity.
Inside the **getAlarmCellStyle** function there is corresponding invocation of **alarmSeverityColorFunction** with severity value in order to get color for alarm severity cell.
Note that in this code **onDataUpdated** function is implemented in order to update **alarms** property with latest alarms from subscription and invoke change detection using **detectChanges()** function.

#### Static widget

In the **Widgets Bundle** view, click the big “+” button at the bottom-right part of the screen and then click the “Create new widget type” button.
Click the **Static Widget** button on the **Select widget type** pop-up.
The **Widget Editor** will be opened pre-populated with the content of default **Static** template widget.

- Put the following HTML code inside the HTML tab of "Resources" section:

```html
  {% raw  %}<div fxFlex fxLayout="column" style="height: 100%;" fxLayoutAlign="space-around stretch">
    <h3 style="text-align: center;">My first static widget.</h3>
    <button mat-raised-button color="primary" (click)="showAlert()">Click me</button>
  </div>{% endraw %}
```

- Put the following JSON content inside the "Settings schema" tab of **Settings schema section**:

```json
{
    "schema": {
        "type": "object",
        "title": "Settings",
        "properties": {
            "alertContent": {
                "title": "Alert content",
                "type": "string",
                "default": "Content derived from alertContent property of widget settings."
            }
        }
    },
    "form": [
        "alertContent"
    ]
}
``` 

- Put the following JavaScript code inside the "JavaScript" section:

```javascript
self.onInit = function() {

    self.ctx.$scope.showAlert = function() {
        var alertContent = self.ctx.settings.alertContent;
        if (!alertContent) {
            alertContent = "Content derived from alertContent property of widget settings.";
        }
        window.alert(alertContent);  
    };

}
```

- Click the **Run** button on the **Widget Editor Toolbar** to see the resulting **Widget preview** section.

![image](https://img.thingsboard.io/user-guide/contribution/widgets/static-widget-sample.png)

This is just a static HTML widget.  There is no subscription data and no special widget API was used.
Only custom **showAlert** function was implemented showing an alert with the content of **alertContent** property of widget settings.
You can switch to dashboard edit mode in **Widget preview** section and change value of **alertContent** by changing widget settings in the "Advanced" tab of widget details.
Then you can see that the new alert content is displayed. 
