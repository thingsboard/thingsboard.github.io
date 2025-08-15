{% if docsPrefix == 'pe/' %}
{% assign peDocsPrefix = "pe/" %}
{% else %}
{% assign peDocsPrefix = "" %}
{% endif %}
* TOC
{:toc}

## Overview

An **app icon** is the visual representation of your application that appears on the user's device home screen, app drawer, and other system interfaces.

A **splash screen** is the initial screen displayed when an application is launched, typically showing a logo or branding while the app loads.

For app version 1.7.0 and above, you need several assets to fully customize your app. You will find default examples of the required assets in the `assets/branding` folder.

{% capture pre_1_7_0_link %}
Important Notice: Please use [this guide](/docs/{{peDocsPrefix}}mobile/app-icon-splash-screen-before-v1.7/) for pre 1.7.x configuration
{% endcapture %} {% include templates/info-banner.md content=pre_1_7_0_link %}


### Required Assets

The following assets are required for complete customization:

| Asset | Specifications | Description |
|-------|---------------|-------------|
| `icon_filled.png` | 512×512 pixels | Filled icon with background color |
| `icon_foreground.png` | 438×438 pixels, transparent background | Foreground icon element |
| `icon_monochrome.png` | 438×438 pixels, transparent background, solid color | Monochrome version for themed icons |
| `splash_android_12.png` | Variable size | Splash screen for Android 12+ |
| `splash.png` | 320×320 pixels | General splash screen logo |

#### Android 12 splash screen icon
Choose one of this options, depending on how you want your splash screen to look.

**Splash screen icon without background**
- Size: 1152×1152 pixels
- Must fit within a circle 768 pixels in diameter

**Splash screen icon with background:**
- Size: 960×960 pixels  
- Must fit within a circle 640 pixels in diameter

<div style="display: flex; flex-direction: row;">
    <div style="display: flex; flex-direction: column; align-items: center;">
        <img width="" src="/images/mobile/pe/splash_screen_sizes_template.png" title="Splash screen icon layout" alt="Splash screen icon layout">
        <span style="margin-top: 16px; font-size: 90%; color: #6c757d;">Splash screen icon layout</span>
    </div>
</div>
### Setup Instructions

Replace all the images in the `assets/branding` folder while keeping the same file names with your own assets.

### App Icon Configuration

You can check the [flutter_launcher_icons documentation](https://pub.dev/packages/flutter_launcher_icons) for more detailed information about app icon settings.

Configuration in `pubspec.yaml`:

```yaml
flutter_launcher_icons:
  ### android config
  android: "launcher_icon"
  # fallback android icon
  image_path_android: "assets/branding/icon_filled.png"
  # icon config for android 13+
  adaptive_icon_background: "#ffffff"
  adaptive_icon_foreground: "assets/branding/icon_foreground.png"
  adaptive_icon_foreground_inset: 16
  adaptive_icon_monochrome: "assets/branding/icon_monochrome.png"
  ###
  ### ios config
  ios: true
  # fallback ios icon
  image_path_ios: "assets/branding/icon_foreground.png"
  background_color_ios: "#ffffff"
  desaturate_tinted_to_grayscale_ios: true
  remove_alpha_ios: true
  # ios 18+ icon
  image_path_ios_dark_transparent: "assets/branding/icon_foreground.png"
```

#### Configuration Options

**`background_color_ios: "#ffffff"`**  
Hex color for your iOS icon background.

**`adaptive_icon_background: "#ffffff"`**  
Hex color for your Android icon background.

**`adaptive_icon_foreground_inset: 16`**  
Padding for the image inside the icon frame. Try the default value first, then adjust if needed:
- If your logo doesn't fit inside the icon frame, increase the value
- If it appears too small, decrease the value

#### Custom Background Images and different platform assets

By default mobile is configured to use one single icon for both ios and android, as well as to use a solid background color for icons background. You can change this, by modifing config file, and adding additional assets.

If you want your icons to have a specific background image instead of a solid color:

**For IOS:**
1. Add your 438×438 pixels logo image with background to the `assets/branding` folder. This way you can also set different logos for IOS and Android.
2. Update the `image_path_ios` line:
   ```yaml
   image_path_ios: "assets/branding/your_custom_ios_logo.png"
   ```

**For Android:**
1. Create a 438×438 pixels background image and add it to the `assets/branding` folder
2. Update the `adaptive_icon_background` line:
   ```yaml
   adaptive_icon_background: "/assets/branding/your_android_background.png"

### Splash Screen Configuration

Add the following configuration to your `flutter_native_splash.yaml`:

```yaml
flutter_native_splash:
  color: "#ffffff"
  image: assets/branding/splash.png
  android_12:
    image: assets/branding/splash_android_12.png
    color: "#ffffff"
    icon_background_color: "#ffffff"
  android: true
  ios: true
```

You can customize the splash screen background color and Android 12+ icon background by updating the `color` and `icon_background_color` properties.

{% capture splash_config_note %}
**Note:** flutter_native_splash has extensive configuration options. We recommend reading the [official documentation](https://pub.dev/packages/flutter_native_splash) to understand all available features and limitations.
{% endcapture %}
{% include templates/info-banner.md content=splash_config_note %}

### Apply Settings

After configuring your assets and settings, run the following commands to apply the changes:

**Apply icon settings:**
```bash
dart run flutter_launcher_icons
```
{: .copy-code}

**Apply splash screen settings:**
```bash
dart run flutter_native_splash:create
```
{: .copy-code}
