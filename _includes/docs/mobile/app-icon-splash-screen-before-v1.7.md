{% if docsPrefix == 'pe/' %}
{% assign peDocsPrefix = "pe/" %}
{% else %}
{% assign peDocsPrefix = "" %}
{% endif %}
* TOC
{:toc}

### Splash Screen

You cannot change the splash screen in pre-1.7.0 versions. It will default to your app's icon.

### App Icon

The Flutter app comes with a default launcher icon. To change it with your custom one, follow these instructions:

#### Step 1: Add flutter_launcher_icons Plugin

Add the flutter_launcher_icons plugin to your project via command line:

```bash
flutter pub add dev:flutter_launcher_icons
```
{: .copy-code}
#### Step 2: Replace Default Icon

Replace `thingsboard.png` in the `assets/images` folder with your custom icon. We recommend using a 432×432 pixel image of your logo centered within the canvas.

#### Step 3: Run the Generator

Execute the generator to apply your new icon:

```bash
flutter pub run flutter_launcher_icons
```
{: .copy-code}

#### Step 4: Update Notification Icon (Optional)

If you have configured push notifications (see [push notifications setup guide](/docs/pe/mobile/getting-started/#step-2-optional-configure-push-notifications)), we recommend updating the notification icon as well.

1. Go to [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-notification.html)
2. Press "Image" and choose your logo
3. Configure padding if needed
4. Change the file name to "thingsboard"
5. Press the download button to get an archive of the "res" folder
6. Paste the contents to `android/app/src/main` and click "Replace" when prompted

<div style="display: flex; flex-direction: row;">
    <div style="display: flex; flex-direction: column; align-items: center;">
        <img width="" src="/images/mobile/asset_studio.png" title="Android asset studio flow" alt="Android asset studio flow">
    </div>
</div>

{% capture pre_version_note %}
**Note:** Pre-1.7.0 versions have limited customization options compared to newer versions. Consider upgrading to version 1.7.0+ for full branding capabilities.
{% endcapture %}
{% include templates/info-banner.md content=pre_version_note %}
