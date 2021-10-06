---
layout: docwithnav-pe
title: Custom Translations
description: Custom Translations Guide
redirect_from: "/docs/user-guide/custom-translation/"

usingLocaleFiles:
    0:
        image: /images/user-guide/custom-translation/ct_page.png
        title: 'Step 1. Open Custom Translation menu.'
    1:
        image: /images/user-guide/custom-translation/ct_dropdown.png
        title: 'Step 2. Choose language from dropdown menu. For example, Italian.'
    2:
        image: /images/user-guide/custom-translation/ct_download_file.png
        title: 'Step 3. Download locale file.'
    3:
        image: /images/user-guide/custom-translation/ct_locale_file.png
        title: 'Step 4. In the locale file find all possible translation for the chosen language.'
    4:
        image: /images/user-guide/custom-translation/ct_lang_in_profile.png
        title: 'Step 5. Change language in the User's Profile for applying settings.'


customMenuItems:
    0:
        image: /images/user-guide/custom-translation/ct_translation_map.png
        title: 'Step 1. Specify new custom translation.'
    1:
        image: /images/user-guide/custom-translation/ct_home_page.png
        title: 'Step 2. Go to the Home page and check new translation.'

customDashboardTitle:
    0:
        image: /images/user-guide/custom-translation/ct_for_dashboard.png
        title: 'Step 1. Specify new custom translation for the dashboard and widgets.'
    1:
        image: /images/user-guide/custom-translation/ct_new_dash.png
        title: 'Step 2. Go to the Dashboard page. Create new dashboard or chose existing one. Open dashboard menu.'
    2:
        image: /images/user-guide/custom-translation/ct_dash_title.png
        title: 'Step 3. Translate dashboard title. Note the required syntax: {i18n:custom.my-dashboard.title}.'
    3:
        image: /images/user-guide/custom-translation/ct_translated_title.png
        title: 'Step 4. Check the translated title.'


customWidgetTitleAndWidgetLabel:
    0:
        image: /images/user-guide/custom-translation/ct_translated_dash_title.png
        title: 'Step 1. Go to the dashboard. Open an edit mode.'
    1:
        image: /images/user-guide/custom-translation/ct_open_widget.png
        title: 'Step 2. Open widget's edit mode.'
    2:
        image: /images/user-guide/custom-translation/ct_change_name_and_label.png
        title: 'Step 3. Apply translation to the widget title - {i18n:custom.my-widget.name}, and entity label column title - {i18n:custom.my-widget.label-text}.'
    3:
        image: /images/user-guide/custom-translation/ct_translated_name_and_title.png
        title: 'Step 4. Check translated titles.'


customTranslationInWidgets:
    0:
        image: /images/user-guide/custom-translation/ct_translation_for_telemetry.png
        title: 'Step 1. Specify new custom translation for the telemetry data.'
    1:
        image: /images/user-guide/custom-translation/ct_open_post_processing.png
        title: 'Step 2. Open widget settings and go to the data key configuration.'
    2:
        image: /images/user-guide/custom-translation/ct_translation_in_post_processing.png
        title: 'Step 3. Use post-processing function for logic with custom translation. The post-processing function requires quotes for the i18n.'
    3:
        image: /images/user-guide/custom-translation/ct_pp_result.png
        title: 'Step 4. Get the message from translation map if temperature is high.'
    4:
        image: /images/user-guide/custom-translation/ct_pp_result2.png
        title: 'Step 5. Get the message from translation map if temperature is low.'
    5:
        image: /images/user-guide/custom-translation/ct_for_html_value_card.png
        title: 'Step 6. Choose 'HTML Value Card' widget.'
    6:
        image: /images/user-guide/custom-translation/ct_html_value_key.png
        title: 'Step 7. Choose telemetry data.'
    7:
        image: /images/user-guide/custom-translation/ct_html_value_logic.png
        title: 'Step 8. Write some logic with custom translation. HTML field requires quotes for the i18n.'
    8:
        image: /images/user-guide/custom-translation/ct_html_value_script.png
        title: 'Step 9. Use quotes for the i18n.'
    9:
        image: /images/user-guide/custom-translation/ct_html_value_result.png
        title: 'Step 10. Check the result in the 'HTML Value Card.''

---

{% assign docsPrefix = "pe/" %}
{% include docs/pe/user-guide/custom-translation.md %}
