The widget subscribes to the reminder alarm status field of the device profile it uses. This allows it to receive updates about alarm creation, its type, and severity.

{% include images-gallery.html imageCollection="alarm-widget-configuration-traditional-1" %}

If an alarm rule is executed, the propeller will change its color based on the widget settings and the alarm severity type defined in the device profile.   
For example, if the heat pump widget detects an alarm with a severity type of "Major", "Minor", "Warning" or "Indeterminate", the widget will switch to the "Warning" state, and the propeller will change its color to yellow.
If the alarm severity level is "Critical," the widget will switch to the "Critical" state, and the propeller will change its color to red and start flashing.

{% include images-gallery.html imageCollection="alarm-heat-pump-traditional-1" %}

Clicking on the heat pump device, you will access its state, displaying operational data alongside active alarms. The details include rotation speed, power consumption, refrigerant pressure, and more.

{% include images-gallery.html imageCollection="scada-alarms-traditional-1" %}

Switching to the "Alarms" page will display all active and cleared alarms in the system, organized by the originating device, and their respective alarm types and severities.

{% include images-gallery.html imageCollection="scada-alarms-traditional-2" %}