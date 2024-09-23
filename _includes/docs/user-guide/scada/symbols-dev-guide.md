* TOC
{:toc}

## Introduction

In ThingsBoard, SCADA symbols are crafted using [SVG](https://en.wikipedia.org/wiki/SVG) (Scalable Vector Graphics), 
which enables seamless scaling across different screen sizes due to their vector nature. 
Our engineers have enhanced the SVG format to support interactivity in these symbols. 
This guide will walk you through the steps to create your own interactive SCADA symbol using a sample SVG file.

## Prerequisites

To effectively follow this guide, ensure you have:

* Completed the [Getting Started](/docs/getting-started-guides/helloworld/) guide.
* Reviewed the [SCADA Dashboards](/docs/user-guide/scada/) documentation.
* Acquired a basic understanding of [SVG](https://www.w3schools.com/graphics/svg_intro.asp).

Having experience with [SVG.js](https://svgjs.dev/) will be beneficial for tackling advanced scenarios.

## Key Concepts

We will often use the following definitions:

- **Developer**: A person responsible for defining the SCADA symbol.
- **End User**: A person who integrates the SCADA symbol into the dashboard.

Creating a SCADA symbol in ThingsBoard involves an SVG file along with several concepts:

- **Tags**: These are custom labels assigned to shapes within the SVG file. Tags are utilized to specify render functions and `onClick` actions for SVG elements;

- **Behavior**: this concept outlines how a SCADA symbol receives data from the platform and what actions it triggers on devices or dashboards;

- **Properties**: These are configuration elements designed for end users. These properties allow for customization of the widget's appearance;

- **State Render Function**: A JavaScript function responsible for rendering the SVG element.

- **On Click Action**: A JavaScript function that defines the logic of the onClick handler.

- **[ScadaSymbolContext](#scadasymbolcontext)**: A specialized JavaScript object that contains references to tags, behavior items, properties, and helper API functions.

## Sample SVG File

Assume we want to transform the SVG file shown below into an interactive SCADA symbol:

<img src="/images/user-guide/scada/fan.svg" alt="FAN SVG" width="300" height="300">

*Figure: Static SVG image including a fan, text label, and two buttons.*

This SVG image is static, containing a **fan**, **text label**, and two **buttons**. 
Our goal is to convert it into an interactive widget that reflects the state of our fan and updates in real time.

**Task Formalization:**

- **Buttons**: 
  - These should issue commands to the target device, updating the state of the fan engine.
  - Button labels and colors must be configurable by end users.
- **Fan Appearance**:
  - The fan should rotate when the engine is 'On' and stop when the engine is 'Off'.
  - Colors for both 'On' and 'Off' states should be configurable separately.
- **Text Label**: 
  - Display the fan's rotation speed. Hide this label when the engine is 'Off'.
  - The label should be customizable by end users, including options to show/hide, set font, color, and display units.

Next, we will outline the steps to achieve this functionality.

## Step 1: Upload the SVG File

1. Download the [fan.svg](/images/user-guide/scada/fan.svg) file.
2. Navigate to `Resources` -> `SCADA symbols` and click the **Upload SCADA symbol** button.
3. Select the `fan.svg` file from your downloads, rename it to 'Fan', and click **Upload**.

## Step 2: Explore the SCADA Editor

Once you upload your SCADA symbol, you'll be directed to the SCADA symbol editor. The editor is split into two panels:
- **Left Panel**: Displays your uploaded SVG file.
- **Right Panel**: Contains multiple tabs such as General, Tags, Behavior, and Properties.

##### SCADA Editor actions

- **Create Widget**: This button allows you to quickly create a widget based on your SCADA symbol. Any major changes to the SCADA symbol will automatically reflect in the widget library, except for fields like title, description, and search tags, which are copied at the moment you create the widget.

- **Apply** and **Decline**: These buttons allow you to save or discard changes to the symbol.

- **Preview**: Enables you to check the widget's behavior from the end-user's perspective. The left panel will render the SVG, while the right panel shows the configuration page of the widget. Use the **Back** button to exit preview mode.

As a simple exercise, populate the description and search tags, then click **Apply**.

[//]: # (TODO: screenshot)

##### Widget Size and Aspect Ratio

Notice the widget size in columns and rows, which hints at how the SCADA layout should place the widget. 
This setting impacts the default aspect ratio of the widget and should ideally match the aspect ratio of your SVG. 
Complex aspect ratios like 17:43 are not recommended. Good examples include 1:1, 1:2, 2:1, etc.

## Step 3: Tags

Tags are custom labels assigned to shapes within the SVG file. 
They are used to specify render functions and `onClick` actions for SVG elements.
You can assign the same tag to multiple SVG elements to streamline interaction and functionality across similar components.

##### Tags Definition via Editor

To define a tag, select the corresponding SVG element in the left panel of the editor and click the **+Add tag** button. It is recommended to name tags in `camelCase` to facilitate their reference in render functions.

For our use case, it's necessary to tag almost every element within the SVG to ensure full interactivity. Below is a list of the tags to be defined:

- **onButton**: Tag for the *group* element to define the `onClick` action for the 'On' button.
- **onButtonBackground**: Tag for the *rect* element to control the background color of the 'On' button.
- **onButtonText**: Tag for the *text* element to define the text display of the 'On' button.
- **offButton**: Tag for the *group* element to define the `onClick` action for the 'Off' button.
- **offButtonBackground**: Tag for the *rect* element to control the background color of the 'Off' button.
- **offButtonText**: Tag for the *text* element to define the text display of the 'Off' button.
- **rotationSpeedText**: Tag for the *text* element to display the rotation speed value.
- **fan**: Tag for the *path* element to animate the fan rotation.

[//]: # (TODO: Insert a table or gallery of images demonstrating how to define each tag.)

#### Tags definition via XML

While the UI editor suffices for simple SCADA symbols, complex SVG file structures might require a different approach. 
For elements obscured by gradients or complex shapes, it's useful to switch to XML editor mode. 
You can find this option in the top right corner of the left panel in the editor. 
Here, you can define tags using the `tb:tag` syntax directly within the XML structure.

Let's add Tags to the 'On' Button Elements:

Before adding tags:

```xml
<g transform="matrix(1.61104 0 0 1.60957 -72.338 -20.652)">
  <rect x="54.702" y="60.372" width="14.263" height="7.426" rx="1.5" fill="#12ed19" stroke="#000"/>
  <text x="61.856" y="64.491" dominant-baseline="middle" fill="#000000" font-family="Roboto" font-size="4.446" stroke-width=".741" text-anchor="middle" xml:space="preserve">
    <tspan stroke-width=".741">On</tspan>
  </text>
</g>
```

After adding tags:

```xml
<g tb:tag="onButton" transform="matrix(1.61104 0 0 1.60957 -72.338 -20.652)">
  <rect tb:tag="onButtonBackground" x="54.702" y="60.372" width="14.263" height="7.426" rx="1.5" fill="#12ed19" stroke="#000"/>
  <text tb:tag="onButtonText" x="61.856" y="64.491" dominant-baseline="middle" fill="#000000" font-family="Roboto" font-size="4.446" stroke-width=".741" text-anchor="middle" xml:space="preserve">
    <tspan stroke-width=".741">On</tspan>
  </text>
</g>
```

#### Tags Table

Once all tags are defined, they will appear in the 'Tags' tab.

[//]: # (TODO: Include screenshot here.)

The table in this tab allows you to quickly access each tag and define both the state render function and the `onClick` action. Before we proceed to writing these functions, let's explore a few additional concepts.

## Step 4: Behavior items

Behavior items enable the end-user to configure interactions between the widget and the platform. 
Once defined, these items are available in the widget's end-user configuration settings as a Behavior panel.
For instance, you can set up the source that determines the fan's state ('On'/'Off') and specify the actions that occur when the 'On' and 'Off' buttons are clicked.

Below is a gallery containing two images: one showing the list of behavior items configured by the SCADA developer, and the other displaying the corresponding elements in the end-user configuration of the widget.

[//]: # (TODO: Include one screenshots with two panels and a -> between them.)

Now let's learn how to configure behavior items. Each item includes the following common fields:

- **id**: An identifier used to reference an item in the [ScadaSymbolContext](#scadasymbolcontext).
- **Name**: A label that generates an element for end-user configuration.
- **Hint**: A hint provided within the end-user configuration element to assist with usage.
- **Group Title**: A method to organize configuration elements within the 'Behavior' configuration panel.
- **Type**: The field can be of type 'value', 'action', or 'widget action'. We will explore each type in detail below.
- **Default Settings**: The preset configurations available to the end-user.

Fields like Name, Hint, and Group Title support internationalization using the 'i18n' tag. For instance: `{i18n:scada.fan.turn-on}`. For more details on setting up custom translations, see [Localization](/docs/pe/user-guide/custom-translation/).

#### Value

Value behavior items fetch data from the platform into the [ScadaSymbolContext](#ScadaSymbolContext), acting like variables. 
These variables typically change based on target device attributes or time series data and are used in defining the 'State render function' for your tags.

There are five types of actions to retrieve value:

- **Do nothing**: Utilizes a constant value defined by the user. *TODO: Add screen*
- **Execute RPC**: Sends a command to the target device to retrieve the value. The value is resolved once at the widget's creation. *TODO: Add screen*
- **Get attribute**: Subscribes to a target entity's attribute value, updating the widget when this attribute changes. *TODO: Add screen*
- **Get time series**: Subscribes to a target entity's time series field, updating the widget with new data arrivals. *TODO: Add screen*
- **Get dashboard state**: Uses the current dashboard state's name, beneficial in specific scenarios unrelated to the device's state. *TODO: Add screen*

**Value Types**: 'Value' behavior items come in various types including string, integer, double, boolean, and JSON. Each type has its own specific configuration parameters.

Let's create new value behavior items for our SCADA symbol:

**fanOn**:
  - Type: Boolean ('true' means the fan is on, 'false' means it is off).
  - Default Configuration: Uses the device attribute 'fanOn'.

   *TODO: Add screenshot of the configuration.*

**fanRotationSpeed**:
  - Type: Double (value in RPMs).
  - Default Configuration: Subscribes to the time-series key 'rotationSpeed' of the target device by default.

   *TODO: Add screenshot of the configuration.*
 
#### Action

Action behavior items specify the actions taken against the target device when specific events occur, typically triggered using the [ScadaSymbolContext](#ScadaSymbolContext) when defining the 'On click action' for your tags.

The platform supports three types of actions for interacting with the target entity:

- **Execute RPC**: Sends a command to the target device. You can specify the method and parameters for the command. *TODO: Add screenshot*
- **Set attribute**: Issues a command to set an attribute on the target device, allowing you to define the scope, key, and value. *TODO: Add screenshot*
- **Add time series**: Adds a new time series value to the target device. Here, you can define the key and value for the new time series data. *TODO: Add screenshot*

Let's set up new action behavior items for the user interactions with the 'On' and 'Off' buttons:

**onBtnClick**:
  - Configures actions when the 'On' button is clicked. 
  - Type: Boolean
  - Default Configuration: Set shared scope attribute `fanOn` to `True`; 

    *TODO: Add screenshot of the configuration.*
  
**offBtnClick**: 
  - Configures actions when the 'Off' button is clicked.
  - Type: Boolean
  - Default Configuration: Set shared scope attribute `fanOn` to `False`;

    *TODO: Add screenshot of the configuration.*

#### Widget Action

Widget Action behavior items function similarly to [Action](#action) behavior items but are designed to trigger actions related to the current dashboard widget rather than the target device. 
Possible widget actions are detailed in the [Widget Actions Documentation](/docs/user-guide/ui/widget-actions/#action-types).

In our example, we will configure the 'onFanClick' click action to, by default, open the platform's website page in a separate browser tab.

    *TODO: Add screenshot of the configuration.*

## Step 5. Properties

Properties are configuration parameters that allow end-users to customize the appearance of widgets. 
These include settings for labels, fonts, colors, and units. 
Once defined, these properties are accessible in the widget's end-user configuration under the Appearance panel.

Below is a gallery containing two images: one displaying the list of properties configured by the SCADA developer, and the other showing the corresponding elements in the end-user configuration of the widget.

[//]: # (TODO: Include one screenshots with two panels and a -> between them.)

Let's learn how to configure properties. Each property includes the following common fields:

- **id**: An identifier used to reference the property in the [ScadaSymbolContext](#scadasymbolcontext).
- **Name**: A label used to generate an element for end-user configuration. Use the same name to group multiple configuration properties into the same row.
- **Type**: Properties can be of type `text`, `number`, `switch`, `color`, `color settings`, `font`, and `units`. Will be explored in detail below.
- **Default Value**: The preset configuration available to the end-user.
- **Value Required**: A switcher that mandates user input for the property value.
- **Advanced UI Settings**: These include multiple configuration items that help developers fine-tune the parameter configuration form.

This structure outlines the process of defining and managing properties, ensuring clarity and accessibility for end-users and developers alike.

Let's set up configuration properties for the 'On' button:

**onBtnLabel**:
  - Description: Label of the 'On' button; 
  - Name: On button. Used to group all properties related to the 'On' button in one row; 
  - Type: Text;
  - Default value: 'On';

  *TODO: Add screenshot of the configuration.*

**onBtnColor**:
  - Description: Color of the 'On' button in enabled state;
  - Name: On button;
  - Type: Color;
  - Default value: #1C943E (green);

*TODO: Add screenshot of the configuration.*

**onBtnDisabledColor**:
  - Color of the 'On' button in disabled state;
  - Name: On button;
  - Type: Color;
  - Default value: #696969 (gray);

Let's set up configuration properties for the 'Off' button:

**offBtnLabel**:
  - Description: Label of the 'Off' button;
  - Name: Off button;
  - Type: Text;
  - Default value: 'Off';

*TODO: Add screenshot of the configuration.*

**offBtnColor**:
  - Description: Color of the 'Off' button in enabled state;
  - Name: Off button;
  - Type: Color;
  - Default value: #D12730 (red);

*TODO: Add screenshot of the configuration.*

**offBtnDisabledColor**:
  - Color of the 'On' button in disabled state;
  - Name: Off button;
  - Type: Color;
  - Default value: #696969 (gray);

Let's set up configuration properties for the Fan appearance:

**fanOnColor**:
  - Color of the Fan in 'On' state;
  - Name: Fan colors. Used to group all properties related to the Fan in one row;
  - Type: Color;
  - Default value: #1C943E (green);

**fanOffColor**:
  - Color of the Fan in 'Off' state;
  - Name: Fan colors. Used to group all properties related to the Fan in one row;
  - Type: Color;
  - Default value: #D12730  (red);

Let's set up configuration properties for the rotation speed value appearance:

**showRotationSpeed**:
  - Switcher to show/hide the value;
  - Name: Rotation speed;
  - Type: Switch
  - Default value: True;

**rotationSpeedUnit**:
  - Units selector;
  - Name: Rotation speed;
  - Type: Units
  - Default value: RPM;
  
**rotationSpeedFont**:
  - Font selector;
  - Name: Rotation speed;
  - Type: Font
  - Default value: Roboto Normal 12px;

**rotationSpeedColor**:
  - label color;
  - Name: Rotation speed;
  - Type: Color
  - Default value: #000000 (black);

## Step 6. Tag functions

There are two types of functions you may assign to each tag: state render functions and on click actions.
Let's review the signature of each function and define the tag functions for each tag. 
We will move from more simple functions and progress to more complex ones.

#### State render function

This JS function is responsible for changing the SVG element via [SVG.js](https://svgjs.dev/) API and accepts two parameters:

* *ctx* is an instance of [ScadaSymbolContext](#ScadaSymbolContext);
* *element* is an [SVG.js](https://svgjs.dev/) element;

You may also notice the global state render function that is available in the general tab.
This function is optional and is useful when you would like to define logic of the rendering for all tags in one place.

#### On click action

This JS function defines a logic of on click handler. and accepts three parameters:

* *ctx* is an instance of [ScadaSymbolContext](#ScadaSymbolContext);
* *element* is an [SVG.js](https://svgjs.dev/) element;
* *event* is an on click event that may be extended to other events in the future releases;

#### onButtonText tag

Let’s start with defining the simple state render function for our ‘On’ button text. 
The only thing we need to do is to replace the hard-coded text from original SVG with the text configured by end-user via the `onBtnLabel` property:

```javascript
ctx.api.text(element, ctx.properties.onBtnLabel);
```

Key points:

  * `ctx.api` is used to access the 'text' function and update the text of the element;
  * `ctx.properties` is used to access the value of the `onBtnLabel` property;

Now you may click 'Preview' button and change the corresponding property. Click 'Apply' to see that the label of the 'On' button has changed. 

TODO: screens;

#### offButtonText tag

Similar to [onButtonText](#onbutton-tag):

```javascript
ctx.api.text(element, ctx.properties.offBtnLabel);
```

#### onButtonBackground tag

Let’s change the background of the 'On' button based on the value of the 'fanOn' behavior item:

```javascript
if(ctx.values.fanOn){
  element.attr({fill: ctx.properties.onBtnDisabledColor});
} else {
  element.attr({fill: ctx.properties.onBtnColor});
}
```

Key points:

 * `ctx.values` is used to access the value of the `fanOn` behavior item;
 * `element.attr({fill: color})` is used to update 'fill' attribute of the element;
 * `ctx.properties` is used to access the value of the `onBtnColor` and `onBtnDisabledColor` color properties;

Now you may click 'Preview' button and change the corresponding color properties. Click 'Apply' to see that the background  of the 'On' button has changed.

TODO: screens;

#### offButtonBackground tag

Similar to [offButtonBackground](#offbuttonbackground-tag):

```javascript
if(ctx.values.fanOn){
  element.attr({fill: ctx.properties.offBtnColor});
} else {
  element.attr({fill: ctx.properties.offBtnDisabledColor});
}
```

#### onButton tag

Let's enable and disable the 'On' button based on the state of the fan using the following state render function:

```javascript
if (ctx.values.fanOn) {
  ctx.api.disable(element);
} else {
  ctx.api.enable(element);    
}
```

Key points:

 * `ctx.values` accesses the value of the `fanOn` behavior item;
 * `ctx.api.disable` disables user interaction, including the onClick handler if the fan is already on.
 * `ctx.api.enable` enables user interaction, including the onClick handler if the fan is off.

Now let's define the on click action for the button:

```
ctx.api.disable(element);
ctx.api.callAction(event, 'onBtnClick', undefined, {
  next: () => {
     ctx.api.setValue('fanOn', true);
  },
  error: () => {
     ctx.api.enable(element);
  }  
});
```

Key points:

* `ctx.api.disable` is used to disable the button immediately after receiving the onClick event to prevent spamming.
* `ctx.api.callAction` triggers the action defined by the `onBtnClick` behavior item.
* `callAction` accepts an event, actionId, optional parameters, and an Observer instance to handle the result.
* On successful action execution, the `next` function sets the `fanOn` value to true.
* If the action encounters an error, `ctx.api.enable` re-enables the button.

#### offButton tag

Similar to [offButton](#offbutton-tag), the state render function:

```javascript
if(ctx.values.fanOn){
  ctx.api.enable(element);
} else {
  ctx.api.disable(element);
}
```

The on click action for the button:

```javascript
ctx.api.disable(element);
ctx.api.callAction(event, 'offBtnClick', undefined, {
  next: () => {
     ctx.api.setValue('fanOn', false);
  },
  error: () => {
     ctx.api.enable(element);
  }  
});
```

#### rotationSpeedText tag

Let's use the `showRotationSpeed`, `rotationSpeedFont`, `rotationSpeedColor`, and `rotationSpeedUnit` properties to prettify our text label:

```javascript
var show = ctx.properties.showRotationSpeed && ctx.values.fanOn;
if (show) {
  var speed = ctx.values.fanSpeed ? ctx.values.fanSpeed : 60;
  var font = ctx.properties.rotationSpeedFont;
  var color = ctx.properties.rotationSpeedColor;
  var text = ctx.api.formatValue(speed, 0, ctx.properties.rotationSpeedUnit);
  ctx.api.text(element, text);
  ctx.api.font(element, font, color);
  element.show();
} else {
  element.hide();
}
```

Key points:

* Line 1: The `show` variable is determined by both the `showRotationSpeed` property and the `fanOn` behavior item;
* Line 3: The `speed` variable either uses the `fanSpeed` behavior item or defaults to `60`, primarily for the preview mode. 
* Line 6: The text value is formatted using the `speed` variable and specified `rotationSpeedUnit` property. 
* Line 7,8: Text content and its styling (font and color) are set.
* Line 9,11: Conditional display of the text element based on the `show` variable.

**Fan state render function**

Now let's proceed with a bit more complex function to rotate a 'fan' tag:

```javascript
var on = ctx.values.fanOn;
var speed = ctx.values.fanSpeed ? ctx.values.fanSpeed : 60;
var hasAnimation = element.remember('hasAnimation');

if (on) {
  element.attr({fill: ctx.properties.fanOnColor});
  if (!hasAnimation) {
    element.remember('hasAnimation', true);
    element.animate(1000).ease('-').rotate(360).loop();
  } else {
    element.timeline().play();
  }
  element.timeline().speed(speed / 60);
} else {
  element.attr({fill: ctx.properties.fanOffColor});
  if (hasAnimation) {
    element.timeline().pause();
  }
}

```

Although the function is quite simple, it requires basic knowledge of [SVG.js](https://svgjs.dev/). Key points:

* Line 3: we use `element.remember` getter from [SVG.js](https://svgjs.dev/docs/3.2/manipulating/#remember-as-getter) to get the state of the animation;
* Line 9: we use `element.remember` setter from [SVG.js](https://svgjs.dev/docs/3.2/manipulating/#remember-as-setter) to set the state of the animation. It is important to avoid initialization of the animation on each call of the render function;
* Line 11: we use `element.timeline.speed` from [SVG.js](https://svgjs.dev/docs/3.2/animating/) to define the speed of our animation that we convert from RPM to RPS;
* Line 14: we use `element.timeline.pause` from [SVG.js](https://svgjs.dev/docs/3.2/animating/) to stop the animation if the fan is turned off;

The [SVG.js](https://svgjs.dev/) animation is feature rich but has some performance impact on the main browser thread. We propose an alternative approach that utilizes CSS animation:

```javascript
var on = ctx.values.fanOn;
var speed = ctx.values.fanSpeed ? ctx.values.fanSpeed / 60 : 1;
var animation = ctx.api.cssAnimation(element);

if (on) {
    element.attr({fill: ctx.properties.fanOnColor});
    if (!animation) {
        animation = ctx.api.cssAnimate(element, 2000)
                                      .rotate(360).loop().speed(speed);
    } else {
        animation.speed(speed).play();
    }
} else {
    element.attr({fill: ctx.properties.fanOffColor});
    if (animation) {
        animation.pause();
    }
}
```

Key points:

* CSS animation is smoother and less resource consuming in most of the use cases;
* Line 3: we use `ctx.api.cssAnimation` to get the current instance of the ScadaSymbolAnimation object;
* Line 8: we use `ctx.api.cssAnimate` to create a new instance of ScadaSymbolAnimation object that providing controls similar to SVG.js's [Runner](https://svgjs.dev/docs/3.2/animating/#svg-runner);
* Line 11: we use `animation.speed(speed).play()` to define the speed of the animation and start it;
* Line 16: we use `animation.pause()` to stop the animation;

#### Best Practices

Avoid manually setting behavior values, as shown in the `ctx.api.setValue('fanOn', true)` example. This is included to simplify debugging in preview mode but may not reflect the actual device status due to potential issues with command delivery or handling.

**Recommended Pattern for Device Interaction:**

1. **RPC to Device**: Utilize Remote Procedure Calls (RPC) like `setFanState` for short-lived commands when immediate application is expected and the device is known to be online.
2. **Shared Attribute**: Set a shared attribute, such as `targetFanState`, to define the desired state of devices that may be offline. This ensures that the device eventually receives and applies updates once it is online.
3. **Client Attributes or Time-Series Data**: Use data delivered from the device, such as `fanState`, as values in behavior items. This strategy ensures that the SCADA symbol's behavior reflects actual device responses rather than merely the issuance of commands.


#### General state render function

As an alternative to configuring each tag rendering functions, we might configure everything in one place. 
However, in case of global function you are working with the `svg` instead of a single tag `element`.
Use `ctx.tags.[tagId]`, e.g. `ctx.tags.rotationSpeedText` to get the array of SVG elements for each tag.
Usually this array contain only one element, but in general case, your SVG file may have multiple elements that share the same tag id.

## Step 6. Preview mode

TODO: Serhii Titenko

## Reference

### ScadaSymbolContext

The `ScadaSymbolContext` (represented as `ctx` in functions code) is a JavaScript object integral to interacting with SCADA symbols in ThingsBoard. It contains the following fields:

1. `ctx.svg`: This field accesses the root SVG node, acting as the primary entry point to the SVG's DOM structure.

2. `ctx.tags`: An object that categorizes all tagged SVG elements. These are grouped by their respective tag IDs (the object keys), such as `ctx.tags.myTagId`. Each tag ID points to an array containing one or more SVG elements.

3. `ctx.values`: Holds all values derived from behavior items of the type 'value'. This field is crucial for dynamically updating the symbol according to data from the device or other sources.

4. `ctx.properties`: Contains all properties defined for the SCADA symbol, allowing customization and configuration adjustments based on end-user requirements.

5. `ctx.api`: Provides a reference to the [SCADA symbol API](#scadasymbolapi), which includes methods for interacting with, modifying, and managing SVG elements and their associated actions.

This object is essential for developers to effectively create and manage interactive elements within SCADA symbols. See the definition of the interface below:

```javascript
export interface ScadaSymbolContext {
    api: ScadaSymbolApi;
    tags: {[id: string]: Element[]};
    values: {[id: string]: any};
    properties: {[id: string]: any};
    svg: Svg;
}
```


### ScadaSymbolApi

The `ScadaSymbolApi` (referred to as `api` when accessed via `ScadaSymbolContext`) is a comprehensive JavaScript interface designed for manipulating SCADA symbol elements in ThingsBoard. It encapsulates a variety of methods for creating, modifying, and managing interactions with SVG elements. Here are the primary functionalities provided by this API:

* **generateElementId**: Generates a unique identifier for an element. Useful if you want to create new elements.
   ```javascript
   generateElementId: () => string
   ```
   
    **Returns**: Newly generated element ID as a string.
<br/><br/>
* **formatValue**: Formats numeric values according to specified precision and units.
   ```javascript
   formatValue: (value: any, dec?: number, units?: string, showZeroDecimals?: boolean) => string | undefined
   ```
   
    **Parameters**:
    - **value**: Numeric value to be formatted.
    - **dec** (optional): Number of decimal digits. Typically obtained from `ctx.properties`.
    - **units** (optional): Units to append to the formatted value. Typically obtained from `ctx.properties`.
    - **showZeroDecimals** (optional): Whether to keep zero decimal digits. Typically obtained from `ctx.properties`.
    
    **Returns**: Formatted value as a string or undefined if formatting fails.
<br/><br/>
* **text**: Sets or updates the text content of one or more SVG elements. Only applicable for elements of type [SVG.Text](https://svgjs.dev/docs/3.2/shape-elements/#svg-text) and [SVG.Tspan](https://svgjs.dev/docs/3.2/shape-elements/#svg-tspan).
   ```javascript
   text: (element: Element | Element[], text: string) => void
   ```
   
    **Parameters**:
    - **element**: SVG element or an array of SVG elements.
    - **text**: Text to be set.
<br/><br/>
* **font**: Applies font styling and color to text elements. Only applicable for elements of type [SVG.Text](https://svgjs.dev/docs/3.2/shape-elements/#svg-text) and [SVG.Tspan](https://svgjs.dev/docs/3.2/shape-elements/#svg-tspan).
   ```javascript
   font: (element: Element | Element[], font: Font, color: string) => void
   ```
   
    **Parameters**:
    - **element**: SVG element or an array of SVG elements.
    - **font**: Font settings object used to apply text element font. Typically obtained from `ctx.properties`.
    - **color**: Color string used to apply text color of the element. Typically obtained from `ctx.properties`.
<br/><br/>
* **icon**: Embeds an icon within SVG elements, with optional parameters for size, color, and center alignment. Only applicable for elements of type [SVG.G](https://svgjs.dev/docs/3.2/container-elements/#svg-g)
   ```javascript
   icon: (element: Element | Element[], icon: string, size?: number, color?: string, center?: boolean) => void
   ```

    **Parameters**:
    - **element**: SVG element or an array of SVG elements.
    - **icon**: Icon to draw. [MDI](https://mdisearch.com/) icons supported. Typically obtained from `ctx.properties`. 
    - **size** (optional): Icon size in pixels. Typically obtained from `ctx.properties`.
    - **color** (optional): Icon color. Typically obtained from `ctx.properties`.
    - **center** (optional): Whether to center the icon inside the group element.
<br/><br/>

* **animate**: Initiates a new animation on an SVG element, finishing any prior animations first.

   ```javascript

   animate: (element: Element, duration: number) => Runner

   ```


    **Parameters**:

    - **element**: SVG element.

    - **duration**: Animation duration in milliseconds.

   
   **Returns**: An instance of [SVG.Runner](https://svgjs.dev/docs/3.2/animating/#svg-runner) which controls the animation.

<br/><br/>

* **resetAnimation**: Stops any ongoing animation and returns the element to its initial state.

   ```javascript

   resetAnimation: (element: Element) => void

   ```


    **Parameters**:

    - **element**: SVG element.

<br/><br/>

* **finishAnimation**: Completes any running animation immediately, updating the element's state to the end values of the animation.

   ```javascript

   finishAnimation: (element: Element) => void

   ```


    **Parameters**:

    - **element**: SVG element.

<br/><br/>
* **cssAnimate**: Starts a CSS-based animation, providing controls similar to those available in SVG.js's [Runner](https://svgjs.dev/docs/3.2/animating/#svg-runner). Finishes any previous CSS animation.
   ```javascript
   cssAnimate: (element: Element, duration: number) => ScadaSymbolAnimation
   ```

    **Parameters**:
    - **element**: SVG element.
    - **duration**: Animation duration in milliseconds.
  
    **Returns**: Instance of [ScadaSymbolAnimation](#ScadaSymbolAnimation) to control the animation.
<br/><br/>
* **cssAnimation**: Retrieves the current CSS animation applied to an element.
    ```javascript
    cssAnimation: (element: Element) => ScadaSymbolAnimation | undefined
    ```

    **Parameters**:
    - **element**: SVG element.
    
    **Returns**: Current CSS animation instance or undefined if no animation is applied.
<br/><br/>
* **resetCssAnimation**: Stops and clears any CSS animations on an element, resetting it to its original state. Removes CSS animation instance.
    ```javascript
    resetCssAnimation: (element: Element) => void
    ```

    **Parameters**:
    - **element**: SVG element.
<br/><br/>
* **finishCssAnimation**: Immediately concludes any CSS animations, applying the final animation states to the element. Removes CSS animation instance.
    ```javascript
    finishCssAnimation: (element: Element) => void
    ```

    **Parameters**:
    - **element**: SVG element.
<br/><br/>
* **disable**: Disables interaction with one or more elements. For ex. no click action will be performed on user click.
    ```javascript
    disable: (element: Element | Element[]) => void
    ```

    **Parameters**:
    - **element**: SVG element or an array of SVG elements.
<br/><br/>
* **enable**: Re-enables interaction with elements previously disabled. Fox ex. click action will be performed on user click.
    ```javascript
    enable: (element: Element | Element[]) => void
    ```

    **Parameters**:
    - **element**: SVG element or an array of SVG elements.
<br/><br/>
* **callAction**: Triggers a specific behavior action by its ID, optionally passing values and observer callbacks.
    ```javascript
    callAction: (event: Event, behaviorId: string, value?: any, observer?: Partial<Observer<void>>) => void
    ```

    **Parameters**:
    - **event**: SVG element.
    - **behaviorId**: ID of the behavior item with type 'Action'.
    - **value** (optional): argument passed to the action.
    - **observer** (optional): the result callback.
<br/><br/>
* **setValue**: Updates a value within the `ctx.values` object and triggers all rendering functions.
    ```javascript
    setValue: (valueId: string, value: any) => void
    ```

  **Parameters**:
    - **valueId**: ID of the behavior item with type 'Value'.
    - **value**: New value to set.
<br/><br/>

### ScadaSymbolAnimation

The `ScadaSymbolAnimation` interface in ThingsBoard is designed to facilitate complex animations within SCADA symbols using CSS animation. 
This interface allows developers to control animation aspects dynamically, offering a variety of methods to manipulate the animation's behavior and properties. 
Below are the key methods provided by the `ScadaSymbolAnimation` interface:

* **running**: Checks if the animation is currently running.
   ```javascript
   running: () => boolean
   ```
  **Returns**: `true` if the animation is running, otherwise `false`.
<br/><br/>

* **play**: Starts or resumes the animation.
   ```javascript
   play: () => void
   ```
<br/><br/>

* **pause**: Pauses the animation.
   ```javascript
   pause: () => void
   ```

<br/><br/> 
* **stop**: Stops the animation and resets its progress.
   ```javascript
   stop: () => void
   ```

<br/><br/>
* **finish**: Completes the animation and jumps to the end state.
   ```javascript
   finish: () => void
   ```

<br/><br/>
* **speed**: Sets the speed of the animation.
   ```javascript
   speed: (speed: number) => ScadaSymbolAnimation
   ```
  
  **Parameters**:
    - **speed**: The speed factor (e.g., 2 for twice as fast).

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **ease**: Sets the easing function for the animation.
   ```javascript
   ease: (easing: string) => ScadaSymbolAnimation
   ```

  **Parameters**:
    - **easing**: The easing type (e.g., 'linear', 'ease-in', 'ease-out').

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **loop**: Causes the animation to repeat a specified number of times.
   ```javascript
   loop: (times?: number, swing?: boolean) => ScadaSymbolAnimation
   ```

  **Parameters**:
    - **times** (optional): The number of times to repeat the animation.
    - **swing** (optional): If `true`, the animation direction alternates.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **transform**: Applies a matrix transform to the animated element.
   ```javascript
   transform: (transform: MatrixTransformParam, relative?: boolean) => ScadaSymbolAnimation
   ```

  **Parameters**:
    - **transform**: The transformation parameters.
    - **relative** (optional): If `true`, the transformation is relative to the current state.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **rotate**: Rotates the element around a point.
    ```javascript
    rotate: (r: number, cx?: number, cy?: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **r**: Rotation angle in degrees.
    - **cx**, **cy** (optional): The center of rotation.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **x**: Moves the element along the x-axis.
    ```javascript
    x: (x: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **x**: New x position.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **y**: Moves the element along the y-axis.
    ```javascript
    y: (y: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **y**: New y position.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **size**: Sets the size of the element.
    ```javascript
    size: (width: number, height: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **width**: New width.
    - **height**: New height.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **width**: Sets the width of the element.
    ```javascript
    width: (width: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **width**: New width.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **height**: Sets the height of the element.
    ```javascript
    height: (height: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **height**: New height.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **move**: Moves the element to a new position.
    ```javascript
    move: (x: number, y: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **x**: New x position.
    - **y**: New y position.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **dmove**: Moves the element by the specified delta values.
    ```javascript
    dmove: (dx: number, dy: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **dx**: Change in x position.
    - **dy**: Change in y position.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **relative**: Moves the element relative to its current position.
    ```javascript
    relative: (x: number, y: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **x**: x increment.
    - **y**: y increment.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **scale**: Scales the element from a center point.
    ```javascript
    scale: (x: number, y?: number, cx?: number, cy?: number) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **x**: Scale factor for x-axis.
    - **y** (optional): Scale factor for y-axis.
    - **cx**, **cy** (optional): Center point for scaling.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.

<br/><br/>
* **attr**: Sets the attributes of the element.
    ```javascript
    attr: (attr: string | object, value?: any) => ScadaSymbolAnimation
    ```

  **Parameters**:
    - **attr**: Attribute name or an object with attribute-value pairs.
    - **value** (optional): Value of the attribute if a single attribute name is provided.

  **Returns**: An updated instance of `ScadaSymbolAnimation`, allowing for chained method calls.
