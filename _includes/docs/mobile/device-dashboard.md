{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

{{appPrefix}} allows configuring device details dashboard to be displayed when tapping on the device with the specific type.
Device details dashboard is configurable in the device profile form:

1. Go to the **Device profiles** through the main menu on the left of the screen;
2. Click on the device profile you want to modify;
3. In the opened device profile details click **edit** button;
4. Select desired dashboard in the **Mobile dashboard** field;
5. Click **Apply changes** button;

{% include images-gallery.html imageCollection="device-dashboard" %}

{% capture dashboard_state_parameter %}
**Note:** In order to display specific device data, dashboard should be configured to use [**Entity from dashboard state**](/docs/{{docsPrefix}}user-guide/ui/aliases/#entity-from-dashboard-state) alias in widgets datasources.
{% endcapture %}
{% include templates/info-banner.md content=dashboard_state_parameter %}

To verify your configuration run the mobile app. Then navigate to the devices list. Tap on the device having type for which dashboard was configured.

<br>

<div style="display: flex;">
    <div class="mobile-frame ios">
        <div class="phone-shadow right"></div>
        <div class="frame-image">
            <img src="https://img.thingsboard.io/mobile/{{docsPrefix}}device-dashboard-frame.png" alt="Device dashboard frame">
        </div>
        <div class="frame-video">
            <video autoplay loop preload="auto" muted playsinline>
                 <source src="https://video.thingsboard.io/mobile/{{docsPrefix}}device-dashboard.mp4" type="video/mp4">
                 <source src="https://video.thingsboard.io/mobile/{{docsPrefix}}device-dashboard.webm" type="video/webm">
            </video>
        </div>
    </div>
</div>
