
{% assign changeStateAndMode = '
    ===
        image: /images/devices-library/paas/esp-thingsboard-example-dashboard-change-led-state.png,
        title: Change led state using switch widget.
    ===
        image: /images/devices-library/paas/esp-thingsboard-example-dashboard-change-working-mode.png,
        title: Change led state using round switch widget.
 '
 %}

You can manually change state of the led and change mode between continuous lightning and blinking.  
In order to do this you can use the following parts of our dashboard:  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=changeStateAndMode %}

In the example code we have functionality to handle RPC commands.  

