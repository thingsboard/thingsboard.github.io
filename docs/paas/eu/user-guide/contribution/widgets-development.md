---
layout: docwithnav-paas-eu
assignees:
- ikulikov
title: Widgets Development Guide

add-js-module:
    0:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/add-js-module-1-pe.png
        title: 'Go to the "JavaScript library" page, and click the "plus" icon. In the open popup, select "Extension" in the "JavaScript type" selector, enter title for your module, and drag the file with your compiled components. Then, click "Add".'
    1:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/add-js-module-2-pe.png
        title: 'Congratulations, your components were added to the ThingsBoard!'

select-extensions-module:
    0:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/add-static-widget-1-pe.png
        title: 'Go to the "Widgets library" page of the "Resources" section. Click the "plus" icon in the upper right corner of the window, and select the "Create new widget" option. Then, select widget type - "Static widget";'
    1:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/select-extensions-module-1-pe.png
        title: 'Enter widget name. Navigate to the "Resources" tab, and click "Add" button;'
    2:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/select-extensions-module-2-pe.png
        title: 'Check the "Is extension" box, and choose your extension module from drop-don menu;'
    3:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/select-extensions-module-3-pe.png
        title: 'Your module is connected to your widget. Now, you can use your angular components. Go the "HTML" tab, and add the custom component. Clean the default self.onInit function. Click the "Run" button to preview how your widget will look;'
    4:
        image: https://img.thingsboard.io/user-guide/contribution/extensions/select-extensions-module-4-pe.png
        title: 'To apply the changes, click the "Save" button.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include /docs/user-guide/contribution/widgets-development.md %}
