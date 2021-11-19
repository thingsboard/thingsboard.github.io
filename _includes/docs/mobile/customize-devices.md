{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

{{appPrefix}} allows configuring device icons for each device type/profile.
Device icon is configurable in the device profile form:

1. Go to the **Device profiles** through the main menu on the left of the screen;
2. Click on the device profile you want to modify;
3. In the opened device profile details click **edit** button;
4. Upload desired image to **Device profile image** field;
5. Click **Apply changes** button;

{% include images-gallery.html imageCollection="device-image" %}
