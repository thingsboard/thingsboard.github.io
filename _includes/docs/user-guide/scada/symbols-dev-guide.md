* TOC
{:toc}

ThingsBoard SCADA symbols are based on [SVG](https://en.wikipedia.org/wiki/SVG) (Scalable Vector Graphics) files.
The use of vector graphics ensures that SCADA symbols scale seamlessly to any screen size.
ThingsBoard's engineers have extended the SVG format to make these symbols interactive.
This guide will explain how to create your own interactive SCADA symbol based on an SVG file.

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

[//]: # (You may also review the same file with the XML&#40;text&#41; editor:)

[//]: # ()
[//]: # ()
[//]: # (```xml)

[//]: # (<?xml version="1.0" encoding="UTF-8"?>)

[//]: # (<svg width="100" height="100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">)

[//]: # ( <rect width="100" height="100" rx="0" fill="none" stroke="#ccc" stroke-width="2"/>)

[//]: # ( <path d="m58.813 27.186c-0.04983-0.24208-0.1537-0.41482-0.34426-0.57222-1.5229-1.2585-3.6348-1.174-6.336 0.25375-0.17627-0.17627-0.36708-0.32527-0.5809-0.45357 1.8617-1.6701 3.5586-2.3713 5.0909-2.1037 0.45176 0.07892 0.76459-0.43872 0.48468-0.80194-0.62127-0.80632-1.3283-1.4628-2.1784-2.0227-0.20646-0.13595-0.40202-0.18457-0.64808-0.16118-1.9668 0.18694-3.4004 1.7401-4.3008 4.6596-0.24932 0-0.48959 0.02954-0.73147 0.09003 0.13542-2.4974 0.83953-4.1931 2.1123-5.0873 0.37525-0.26361 0.23041-0.85084-0.22433-0.90984-1.0095-0.13084-1.9737-0.0951-2.9707 0.11015-0.24207 0.04983-0.41482 0.1537-0.57222 0.34426-1.2585 1.5229-1.174 3.6348 0.25375 6.336-0.17627 0.17627-0.32527 0.36708-0.45356 0.58091-1.6701-1.8617-2.3713-3.5586-2.1036-5.0909 0.07892-0.45176-0.43872-0.76459-0.80194-0.48472-0.80632 0.62127-1.4628 1.3283-2.0227 2.1785-0.13595 0.20646-0.18457 0.40201-0.16118 0.64808 0.18694 1.9668 1.7401 3.4004 4.6596 4.3008 0 0.24932 0.02954 0.48959 0.09003 0.73147-2.4974-0.13542-4.1931-0.83953-5.0873-2.1123-0.26361-0.37525-0.85084-0.23041-0.90983 0.22433-0.13084 1.0095-0.0951 1.9737 0.11015 2.9707 0.04983 0.24208 0.1537 0.41482 0.34426 0.57222 1.5229 1.2585 3.6348 1.174 6.336-0.25375 0.17627 0.17627 0.36708 0.32527 0.5809 0.45357-1.8617 1.6701-3.5586 2.3713-5.0909 2.1037-0.45176-0.07892-0.76459 0.43872-0.48468 0.80194 0.62127 0.80632 1.3283 1.4628 2.1784 2.0227 0.20646 0.13595 0.40201 0.18457 0.64808 0.16118 1.9668-0.18694 3.4004-1.7401 4.3008-4.6596 0.24932 0 0.48959-0.02954 0.73147-0.09007-0.13542 2.4974-0.83953 4.1931-2.1123 5.0873-0.37525 0.26361-0.23041 0.85084 0.22433 0.90984 1.0095 0.13084 1.9737 0.0951 2.9707-0.11015 0.24207-0.04983 0.41482-0.1537 0.57222-0.34426 1.2585-1.5229 1.174-3.6348-0.25375-6.336 0.17627-0.17627 0.32527-0.36708 0.45356-0.58091 1.6701 1.8617 2.3713 3.5586 2.1036 5.0909-0.07892 0.45176 0.43872 0.76459 0.80194 0.48468 0.80632-0.62128 1.4628-1.3283 2.0227-2.1785 0.13595-0.20646 0.18457-0.40202 0.16118-0.64808-0.18694-1.9668-1.7401-3.4004-4.6596-4.3008 0-0.24932-0.02954-0.48959-0.09003-0.73147 2.4974 0.13542 4.1931 0.83953 5.0873 2.1123 0.26361 0.37525 0.85084 0.23041 0.90983-0.22433 0.13084-1.0094 0.0951-1.9736-0.11015-2.9706zm-8.8128 4.3275c-1.388 0-2.5133-1.1253-2.5133-2.5133s1.1253-2.5133 2.5133-2.5133 2.5133 1.1253 2.5133 2.5133-1.1253 2.5133-2.5133 2.5133z" fill="#7d081e" stroke-width=".040246"/>)

[//]: # ( <text x="49.436523" y="55.466797" dominant-baseline="middle" fill="#000000" text-anchor="middle" xml:space="preserve"><tspan>N/A</tspan></text>)

[//]: # ( <g transform="translate&#40;-29.202 20.128&#41;">)

[//]: # (  <rect x="54.702" y="60.372" width="14.263" height="7.4261" rx="1.5" fill="#12ed19" stroke="#000"/>)

[//]: # (  <text x="61.855518" y="64.49128" dominant-baseline="middle" fill="#000000" font-family="Roboto" font-size="4.4461px" stroke-width=".74101" text-anchor="middle" xml:space="preserve"><tspan stroke-width=".74101">On</tspan></text>)

[//]: # ( </g>)

[//]: # ( <g transform="translate&#40;-13.867 20.189&#41;">)

[//]: # (  <rect x="74.367" y="60.311" width="14.263" height="7.4261" rx="1.5" fill="#ed121f" stroke="#000"/>)

[//]: # (  <text x="81.365944" y="64.518349" dominant-baseline="middle" fill="#000000" font-family="Roboto" font-size="4.4461px" stroke-width=".74101" text-anchor="middle" xml:space="preserve"><tspan stroke-width=".74101">Off</tspan></text>)

[//]: # ( </g>)

[//]: # (</svg>)

[//]: # (```)

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

## Step 3. Define the tags




1. Background element to change color
2. Button to trigger action
3. Animation of the critical state
4. Rotation of SVG elements