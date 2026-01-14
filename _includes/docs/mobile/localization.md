{% if docsPrefix == 'pe/' %}
{% assign appPrefix = "ThingsBoard PE" %}
{% else %}
{% assign appPrefix = "ThingsBoard" %}
{% endif %}
* TOC
{:toc}

Make the {{appPrefix}} mobile app more accessible for your users—add their language to the build or improve the existing translations.

## Supported languages

Out of the box, the {{appPrefix}} mobile app supports the following languages:

- **English**
- **Arabic**
- **Chinese (Taiwan)**
- **Chinese (Simplified)**

## Add or Improve localization

**How localization works (Flutter + ARB)**

The app reads localized strings from `.arb` files in `lib/l10n`. Each `.arb` file represents one locale (e.g., `intl_en.arb` for English). Keys stay the same across all languages; values change per locale.

For detailed information about Flutter&#39;s internationalization system, we recommend reading the official [Internationalizing Flutter apps](https://docs.flutter.dev/ui/accessibility-and-internationalization/internationalization){:target="_blank"} guide.

### Step 1: Open the localization folder

Go to your project&#39;s `lib/l10n` directory. You&#39;ll see files like:

```bash
intl_ar.arb
intl_en.arb
...
```

![image](https://img.thingsboard.io/mobile/localization-l10n-folder.png)

### Step 2: Create a language file

Add a new `.arb` file with translation using the format:
```
intl_<languageCode>.arb
```

For example:
- `intl_es.arb` for Spanish
- `intl_fr.arb` for French
- `intl_de.arb` for German

**Tip:** If you need a region-specific variant, use BCP-47 style (e.g., `intl_pt_BR.arb`).

### Step 3: Add translations

1. **Copy** the contents of the `intl_en.arb` into a new file.
2. **Translate only the values** (the text on the right of each key) into your target language. **Do not change the keys.**

Example structure:
```json
{
  "appTitle": "Your App Title Translation",
  "login": "Your Login Translation",
  "password": "Your Password Translation"
}
```

### Step 4: Generate localization file

#### If app version is before 1.7.0

Execute the command:

```bash
flutter gen-l10n
```
{: .copy-code}

This command will generate the necessary localization files for added language or update existing localizations.

#### If app version is 1.7.0 or later

We recommend installing the **Flutter Intl extension**, which automatically tracks localization changes and regenerates localization files.

**Available Extensions:**
- [VS Code](https://marketplace.visualstudio.com/items?itemName=localizely.flutter-intl){:target="_blank"}: Flutter Intl extension
- [IntelliJ / Android Studio](https://plugins.jetbrains.com/plugin/13666-flutter-intl){:target="_blank"}: Flutter Intl plugin

#### Alternative method (without extension)

If you prefer not to install the extension, you can use the manual approach:

1. **Add intl_utils to your project&#39;s dev dependencies:**
   ```bash
   flutter pub add -d intl_utils
   ```
   {: .copy-code}

2. **Generate localization files after each change:**
   ```bash
   dart run intl_utils:generate
   ```
   {: .copy-code}

Run this command after each change in your localization files to integrate those changes into mobile app.

## Testing custom localization

- **Change device/simulator language** to your target locale and relaunch the app.
- If your language is **right-to-left** (e.g., Arabic), verify layout mirroring and text direction.
- Confirm **pluralization**, **placeholders**, and **date/number formatting** look correct.

## Contributing back to the community

We welcome community contributions to improve {{appPrefix}} mobile localization.

How to contribute:
- Open a **pull request** to the repository with your updated or new `.arb` files.
- Or submit an improvement request with the `.arb` files attached.

Your contributions help make the app accessible to users worldwide, and we&#39;ll add new localizations to the app globally for everyone to benefit from.

{% capture contribution_note %}
**Note:** When contributing translations, please ensure they are accurate and culturally appropriate for the target language and region.
{% endcapture %}
{% include templates/info-banner.md content=contribution_note %}
