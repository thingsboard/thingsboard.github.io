{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}

{{appPrefix}} allows configuring alarm details dashboard to be displayed when tapping on the alarm in the alarms screen.
Alarm details dashboard is configurable in the alarm rules of the device profile form:

1. Go to the **Device profiles** through the main menu on the left of the screen;
2. Click on the device profile you want to modify;
3. In the opened device profile details navigate to **Alarm rules** tab;
4. Click **edit** button;
5. In the **Create alarm rule** form select desired dashboard in the **Mobile dashboard** field;
6. Click **Apply changes** button;

{% include images-gallery.html imageCollection="alarm-dashboard" %}

{% capture dashboard_state_parameter %}
**Note:** In order to display specific alarm originator data, dashboard should be configured to use [**Entity from dashboard state**](/docs/{{docsPrefix}}user-guide/ui/aliases/#entity-from-dashboard-state) alias in widgets datasources.
{% endcapture %}
{% include templates/info-banner.md content=dashboard_state_parameter %}

To verify your configuration run the mobile app. Then navigate to the alarms list. Tap on the alarm having type for which dashboard was configured.
**Note** that alarm dashboard configuration only applied to alarms generated after applying configuration.

<br>

<div style="display: flex;">
    <div class="mobile-frame ios">
        <div class="phone-shadow right"></div>
        <div class="frame-image">
            <img src="https://img.thingsboard.io/mobile/{{docsPrefix}}alarm-dashboard-frame.png" alt="Alarm dashboard frame">
        </div>
        <div class="frame-video">
            <video autoplay loop preload="auto" muted playsinline>
                 <source src="https://video.thingsboard.io/mobile/{{docsPrefix}}alarm-dashboard.mp4" type="video/mp4">
                 <source src="https://video.thingsboard.io/mobile/{{docsPrefix}}alarm-dashboard.webm" type="video/webm">
            </video>
        </div>
    </div>
</div>
