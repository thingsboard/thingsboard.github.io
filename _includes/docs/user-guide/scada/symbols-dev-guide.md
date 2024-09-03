* TOC
{:toc}

ThingsBoard SCADA symbols are based on [SVG](https://en.wikipedia.org/wiki/SVG) (Scalable Vector Graphics) files.
The use of vector graphics ensures that SCADA symbols scale seamlessly to any screen size.
ThingsBoard's engineers have extended the SVG format to make these symbols interactive.
This guide will explain how to create your own interactive SCADA symbol based on a sample SVG file.

## Prerequisites

Before you proceed, please make sure you have:

* completed the [getting started](/docs/getting-started-guides/helloworld/) guide;
* familiarized with the [SCADA dashboards](/docs/user-guide/scada/) documentation;
* understand the basics of an [SVG](https://www.w3schools.com/graphics/svg_intro.asp);

An experience with the [SVG.js](https://svgjs.dev/) is a great plus for advanced use cases.

## Sample SVG file 

Let's assume we would like to turn an SVG file listed below to the SCADA symbol:

<img src="/images/user-guide/scada/fan.svg" alt="FAN SVG" width="300" height="300">

This SVG image is pretty static and contains **fan**, **text label** and two **buttons**.

Let's convert it to an interactive widget which will display the state of our fan and update in real time. 

Let's formalize our task below:

* the buttons must update the state of a target device engine, via a command to device or change of the device attribute; 
* the fan must rotate and have a green color if the engine is 'On';
* the fan must stop rotation and have a red color if the engine is 'Off';
* the fan must stop rotation and have a grey color if the target device is not available;
* the 'N/A' text must show the rotation speed of the fan. Let's hide the label if the engine is 'Off';

Now let's review the steps to complete this task below.

## Step 1. Upload the SVG file

* Download the [fan.svg](/images/user-guide/scada/fan.svg) file;
* Navigate to 'Resources'->'SCADA symbols' and click 'Upload SCADA symbol' button;
* Select the fan.svg file from the downloads, change the name to 'Fan' and click 'Upload'.

## Step 2. Explore the SCADA editor

Once completed, you will arrive to an SCADA symbol editor.
The left panel will display your SVG file.
The right panel will contain multiple tabs: General, Tags, Behavior and Properties.

Let's review the buttons available in the right panel:

* 'Create widget' allows you to quickly create a widget based on your SCADA symbol. You may do this immediately. 
  All major changes to the SCADA symbol will be automatically reflected in the widget library. 
  The exception is information fields like title, description and search tags - since they are copied on the moment you create a widget.
* 'Apply' and 'Decline' are regular buttons that allows you to save or decline the changes to the symbol.
* 'Preview' button allows you to check widget behavior from the end-user point of view.
  The left panel will render an SVG while the right panel will contain the configuration page of the widget.  
  Use 'Back' button to exit the preview mode.

As a simple exercise, let's populate the description and search tags and click 'Apply'.
TODO: screen

You may also notice the widget size in columns and rows. This is the hint for SCADA layout about how to place the widget. 
It impacts the default aspect ratio of the widget, so it is recommended that this settings match the aspect ratio of the SVG. 
We do not recommend to use SVGs with complex aspect ratios, like 17:42 or etc. An example of good aspect ratio is 1:1, 1:2, 2:1, etc.

## Step 3. Tags

Tags are custom labels for the shapes inside the SVG file.

We use them to define the specific state render function and/or on click action. 

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

#### Tags definition via editor

To define a tag, one should select a corresponding SVG element in the left panel of an editor and click '+Add tag' button.
We suggest to define tag names in a camel case. This will help to address them in the corresponding render functions.

Based on our use case, we need to define multiple tags. Basically, we must tag almost every element in our SVG.
The screenshot gallery below will demonstrate how to define 6 tags:

  * *onButtonBackground* - *rect* element tag to control the background color of the 'On' button;
  * *onButton* - *group* element tag to define the on click action of the 'On' button;
  * *offButtonBackground* - *rect* element tag to control the background color of the 'Off' button;
  * *offButton* - *group* element tag to define the on click action of the 'Off' button;
  * *rotationSpeedText* - *text* element tag to display the rotation speed;
  * *fan* - *path* element tag to animate the fan rotation;
 
TODO: table with images;

#### Tags definition via XML

The UI editor is completely sufficient for our sample SCADA symbol. 
However, some SVG files may be quite complex, where the element that we would like to tag is 'hidden' below the other elements, typically gradients or complex shapes.
In such a case, you may edit the SVG file manually and define the tags using the *tb:tag* syntax. 

For example, the 'On' button elements **before** adding tags:

```xml
<g transform="translate(-29.202 20.128)">
  <rect x="54.702" y="60.372" width="14.263" height="7.4261" rx="1.5" fill="#12ed19" stroke="#000"/>
  <text x="61.855518" y="64.49128" dominant-baseline="middle" fill="#000000" font-family="Roboto" font-size="4.4461px" stroke-width=".74101" text-anchor="middle" xml:space="preserve"><tspan stroke-width=".74101">On</tspan></text>
</g>
```

The 'On' button elements **after** adding tags:

```xml
<g transform="translate(-29.202 20.128)" tb:tag="onButton">
  <rect x="54.702" y="60.372" width="14.263" height="7.4261" rx="1.5" fill="#12ed19" stroke="#000" tb:tag="onButtonBackground"/>
  <text x="61.855518" y="64.49128" dominant-baseline="middle" fill="#000000" font-family="Roboto" font-size="4.4461px" stroke-width=".74101" text-anchor="middle" xml:space="preserve"><tspan stroke-width=".74101">On</tspan></text>
</g>
```

#### Tags table

Once you define all the tags, you will see them available in the 'Tags' tab. 
The corresponding table allows you to quickly access each tag and define both 'state render function' and 'on click action'.
Before we jump to writing those functions, we must learn few more concepts.

## Step 4. Behavior



## Reference

### ScadaSymbolContext

