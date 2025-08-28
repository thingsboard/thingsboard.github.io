* TOC
{:toc}

## Overview

The ThingsBoard PE Mobile Application supports multiple languages out of the box. You can add your own locale or improve existing translations to make the app accessible to users in your preferred language.

## Supported Languages

Currently, the ThingsBoard app supports the following languages:

- **English**
- **Arabic**
- **Chinese (Taiwan)**
- **Chinese (Simplified)**

## Adding Your Own Localization

Follow these steps to add a new language or improve existing translations:

### Step 1: Navigate to Localization Files

Navigate to the `lib/l10n` directory in your project. You will see files like:
- `intl_ar.arb`
- `intl_en.arb`
- And other language files

![image](/images/mobile/localization-l10n-folder.png)

### Step 2: Create Your Language File

Add a new `.arb` file with your translation using the format:
```
intl_(languageCode).arb
```

For example:
- `intl_es.arb` for Spanish
- `intl_fr.arb` for French
- `intl_de.arb` for German

### Step 3: Add Translations

1. Copy the contents of the `intl_en.arb` file into your newly created file
2. Start translating the English text to your target language
3. Keep the keys unchanged, only translate the values

Example structure:
```json
{
  "appTitle": "Your App Title Translation",
  "login": "Your Login Translation",
  "password": "Your Password Translation"
}
```

### Step 4: Learn More About Flutter Internationalization

For detailed information about Flutter's internationalization system, we recommend reading the official [Internationalizing Flutter apps](https://docs.flutter.dev/ui/accessibility-and-internationalization/internationalization) guide.

## Testing Your Localization

The process for testing your new localization depends on your app version:

### App Version Pre-1.7.0

Run the following command to integrate your changes and generate new localization files:

```bash
flutter gen-l10n
```
{: .copy-code}

This command will generate the necessary localization files for your added language or update existing localizations.

### App Version 1.7.0+

We recommend installing the **Flutter Intl extension**, which automatically tracks localization changes and regenerates localization files.

**Available Extensions:**
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=localizely.flutter-intl)
- [IntelliJ / Android Studio Plugin](https://plugins.jetbrains.com/plugin/13666-flutter-intl)

#### Alternative Method (Without Extension)

If you prefer not to install the extension, you can use the manual approach:

1. **Add intl_utils to your project's dev dependencies:**
   ```bash
   flutter pub add -d intl_utils
   ```
   {: .copy-code}

2. **Generate localization files after each change:**
   ```bash
   dart run intl_utils:generate
   ```
   {: .copy-code}

Run this command after each change in your localization files to integrate those changes into your app.

## Contributing Back to the Community

We greatly appreciate community contributions to improve the ThingsBoard Mobile Application's localization support.

**How to contribute:**
- Make a pull request to our repository with your `.arb` files
- Fill an improvement ticket with attached `.arb` files

Your contributions help make the app accessible to users worldwide, and we'll add new localizations to the app globally for everyone to benefit from.

{% capture contribution_note %}
**Note:** When contributing translations, please ensure they are accurate and culturally appropriate for the target language and region.
{% endcapture %}
{% include templates/info-banner.md content=contribution_note %}
