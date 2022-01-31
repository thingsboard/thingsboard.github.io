{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}
 
* TOC
{:toc}

Mobile actions is a special subtype of [widget actions](/docs/{{docsPrefix}}user-guide/ui/widget-actions/) allowing to use various mobile device functions
like take photo, scan QR code, get device location, make phone call and so on. Result of mobile action can be processed by special java-script functions allowing
you to perform further processing, for ex. save taken photo or device location to entity attributes, use scanned QR code for device claiming, etc.  

## Configuration

You can configure  mobile actions in the dashboard widget configuration:

{% if docsPrefix == 'pe/' %}
1. Go to the **Dashboard groups** through the main menu on the left of the screen;
2. Open target dashboard group;
{% else %}
3. Go to the **Dashboards** through the main menu on the left of the screen;
{% endif %}
4. Click on the dashboard you want to modify;
5. In the opened dashboard details click **Open dashboard** button;
6. Use the **pencil** button in the bottom-right corner of the screen to enter dashboard edit mode;
7. Edit target widget by clicking the Pencil icon on the right top of the widget;
8. In the widget’s Edit mode move to the last cell **Actions**;
9. Click the “+” icon on the right of the window to add a new action;
10. In the drop-down menu **Type**, choose a *Mobile action* action type;
11. In the **Mobile action type** drop-down menu choose mobile action type you want to set up;
12. Configure java-script functions with your own processing logic depending on the selected mobile action type.<br>Use help buttons to open details about function definitions and examples;   

{% include images-gallery.html imageCollection="mobile-actions" %}

## Take picture from gallery

The action opens image gallery picker to select the picture. It returns selected image as a URL in base64 data format.
You can configure **processImage** function to process resulting image data. For example an image can be stored as entity attribute value, which allows it to be displayed later using widgets.

See [Mobile action configuration](#configuration) to learn how to configure this action. 

## Take Photo

The action opens phone camera for taking photo. It returns captured photo image as a URL in base64 data format.
You can configure **processImage** function to process resulting image data. For example an image can be stored as entity attribute value, which allows it to be displayed later using widgets.

See [Mobile action configuration](#configuration) to learn how to configure this action.

## Open map directions

The action takes provided location in latitude/longitude format and opens available map application to display possible directions.
You should configure **getLocation** function to prepare location data.
For example, you can extract latitude/longitude values from current entity attributes and external map application will display to user possible directions to target entity.

See [Mobile action configuration](#configuration) to learn how to configure this action.

## Open map location

The action takes provided location in latitude/longitude format and opens available map application to display the location on the map.
You should configure **getLocation** function to prepare location data.
For example, you can extract latitude/longitude values from current entity attributes and external map application will display to user target entity location.

See [Mobile action configuration](#configuration) to learn how to configure this action.

## Scan QR code

The action opens QR code scanner to scan QR code. It returns scanned QR code value.
You can configure **processQrCode** function to process resulting QR code.
For example QR code can be used in device claiming scenario.
The value of QR code can be presented as device claiming information containing **device name** and **secret key**.
User scans QR code, and then it parsed as a device claiming info used to perform device claiming.
See [Claiming devices](/docs/{{docsPrefix}}user-guide/claiming-devices/) for details.

See [Mobile action configuration](#configuration) to learn how to configure this action.

## Make phone call

The action takes provided phone number and opens associated application to make phone call.
You should configure **getPhoneNumber** function to return phone number.
For example, you can extract phone number value from current entity attribute and user will be directed to appropriate phone application to make a call.

See [Mobile action configuration](#configuration) to learn how to configure this action.

## Get phone location

The action takes current phone location using location services. It returns location as a pair of latitude and longitude values.
You can configure **processLocation** function to process resulting location data.
For example location data can be stored as entity attribute values to set or update current location of the entity to be displayed in map widgets.

See [Mobile action configuration](#configuration) to learn how to configure this action.

## Take screenshot

The action captures current phone screen. It returns captured screen image as a URL in base64 data format.
You can configure **processImage** function to process resulting image data. For example an image can be stored as entity attribute value, which allows it to be displayed later using widgets.

See [Mobile action configuration](#configuration) to learn how to configure this action.
