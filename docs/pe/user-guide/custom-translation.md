---
layout: docwithnav-pe
title: Custom Translations
description: 
redirect_from: "/docs/user-guide/custom-translation/"

usingLocaleFiles:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_page.png
        title: 'Step 1. Open Custom Translation menu.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_dropdown.png
        title: 'Step 2. Choose language from dropdown menu. For example, Italian.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_download_file.png
        title: 'Step 3. Download locale file.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_locale_file.png
        title: 'Step 4. The locale file presents all possible translations for the chosen language.'
    4:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_lang_in_profile.png
        title: 'Step 5. Change language in the User Profile for applying settings.'


customMenuItems:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_translation_map.png
        title: 'Step 1. Specify custom translation in the translation map.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_home_page.png
        title: 'Step 2. Navigate to the Home page and check translated menu.'


customTranslationForDashboard:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_for_dashboard.png
        title: 'Step 1. Specify new custom translation for the dashboard and widgets.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_new_dash.png
        title: 'Step 2. Go to the Dashboard page. Create a new dashboard or choose an existing one. Open the dashboard menu.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_dash_title.png
        title: 'Step 3. Translate dashboard title. Note the required syntax: {i18n:custom.my-dashboard.title}.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_translated_title.png
        title: 'Step 4. Check the translated title.'
    4:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_open_states.png
        title: 'Step 5. Open an edit mode and go to the dashboard states configuration.'
    5:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_dashboard_state.png
        title: 'Step 6. Write custom translation for the dashboard state name.'


customWidgetTitleAndWidgetLabel:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_translated_dash_title.png
        title: 'Step 1. Go to the dashboard. Open an edit mode.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_open_widget.png
        title: 'Step 2. Open widget edit mode.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_change_name_and_label.png
        title: 'Step 3. Apply translation to the widget title - {i18n:custom.my-widget.name}, and entity label column title - {i18n:custom.my-widget.label-text}.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_translated_name_and_title.png
        title: 'Step 4. Check translated titles.'
    5:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_telemetry_label.png
        title: 'Step 3. Apply translation to the widget title - {i18n:custom.my-widget.name}, and entity label column title - {i18n:custom.my-widget.label-text}.'
    6:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_translated_label.png
        title: 'Step 4. Check translated titles.'
    
tooltips:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_edit_mode_tooltip.png
        title: 'Step 1. Open an edit mode.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_tooltip_title.png
        title: 'Step 2. In Settings tab write the newt structure for tooltip title - {i18n:custom.my-widget.name}. Save it.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_tooltip_title_result.png
        title: 'Step 3. Hover on widget title and check applied translation.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_action.png
        title: 'Step 4. Open widgets edit mode and navigate to an Action tab.'
    4:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_tooltip_action.png
        title: 'Step 5. Create new custom action and fill the Name field with {i18n:custom.my-widget.label-text}. Apply changes.'
    5:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_tooltip_action_result.png
        title: 'Step 6. Hover on an action button and view custom tooltip.'


usageInCellContentFunction:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_translation_for_telemetry.png
        title: 'Step 1. Specify new custom translation for the telemetry data.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_open_post_processing.png
        title: 'Step 2. Open widget settings and go to the data key configuration.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_in_cell_content_function.png
        title: 'Step 3. Custom translation can be used in the cell content function in such widgets as Entity Table, Timeseries table and Alarms table. JavaScript code requires quotes for the i18n.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_pp_result.png
        title: 'Step 4. Get the message from translation map if temperature is high.'
    4:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_pp_result2.png
        title: 'Step 5. Get the message when temperature is low.'

usageInHTMLValueCard:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_for_html_value_card.png
        title: 'Step 1. Choose HTML Value Card widget.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_html_value_key.png
        title: 'Step 2. Choose some telemetry data.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_html_value_logic.png
        title: 'Step 3. Write some logic with custom translation. See example below.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_html_value_result.png
        title: 'Step 4. Check the result in the HTML Value Card.'

otherPlaces:
    0:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_bar_chart.png
        title: 'Step 1. Choose a Timeseries Bar Chart.'
    1:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_bar_chart_alias.png
        title: 'Step 2. Specify an alias and telemetry key.'
    2:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_advanced_axis.png
        title: 'Step 3. Open Advanced tab and set translation for the X axis title - {i18n:custom.my-widget.name}. Save all settings.'
    3:
        image: https://img.thingsboard.io/user-guide/custom-translation/ct_axis_result.png
        title: 'Step 4. View translated X axis title.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/pe/user-guide/custom-translation.md %}

