---
layout: docwithnav-pe
title: Custom Translations
description:  
redirect_from: "/docs/user-guide/custom-translation/"
customTranslationInWidgets:
    0:
        image: /images/user-guide/custom-translation/custom_translation.png
        title: 'Step 1. Specify new custom translation. In our case this is "widget.test".'
    1:
        image: /images/user-guide/custom-translation/ct_post_processing.png
        title: 'Step 2. Reference custom translation in the data post-processing function. Note the required syntax: {i18n:widget.test}.'
    2:
        image: /images/user-guide/custom-translation/ct_html_value_card.png
        title: 'Step 3. Reference custom translation in the HTML Value Card. Note the required syntax: {i18n:widget.test}.'
    3:
        image: /images/user-guide/custom-translation/ct_nav_card.png
        title: 'Step 4. Reference custom translation in the title of “Navigation Card”. Note the required syntax: {i18n:widget.test}.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/pe/user-guide/custom-translation.md %}
