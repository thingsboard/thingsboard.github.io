The widget subscribes to the reminder alarm status field of the device profile it uses. This allows it to receive updates about alarm creation, its type, and severity.

{% include images-gallery.html imageCollection="alarm-widget-configuration-1" %}

If an alarm rule is executed, a warning icon appears in the bottom left corner of the heat pump.
The type of the icon depends on the severity of the alarm, the rules of which are defined in the device profile, as well as the settings of the widget itself.   
For example, if a heat pump widget encounters an alarm with a severity type of "Major", "Minor", "Warning", or "Indeterminate", the widget will be in a "Warning" state, and a yellow triangle will appear next to the widget.
If the alarm severity level is "Critical", the widget will be in a "Critical" state, and a red square will appear next to the widget.

{% include images-gallery.html imageCollection="alarm-heat-pump-high-performance-1" %}

Clicking on the heat pump device, you will access its state, displaying operational data alongside active alarms. The details include rotation speed, power consumption, refrigerant pressure, and more.

{% include images-gallery.html imageCollection="scada-alarms-high-performance-1" %}

Switching to the "Alarms" tab will display all active and cleared alarms in the system, organized by the originating device, and their respective alarm types and severities.

{% include images-gallery.html imageCollection="scada-alarms-high-performance-2" %}