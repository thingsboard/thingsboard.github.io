---
layout: docwithnav-paas
assignees:
- ikulikov
title: Advanced widget development

add-js-module:
    0:
        image: /images/user-guide/contribution/extensions/add-js-module-1-pe.png
        title: 'Go to the "JavaScript library" page, and click the "plus" icon. In the pop-up that opens, select "Extension" in the "JavaScript type" selector, enter title for your module, and drag the file with your compiled components. Then, click "Add".'
    1:
        image: /images/user-guide/contribution/extensions/add-js-module-2-pe.png
        title: 'Congratulations, your components were added to the ThingsBoard!'

select-extensions-module:
    0:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-1-pe.png
        title: 'Go to the "Widgets library" page of the "Resources" section. Click the "plus" icon in the upper-right corner of the window, and select the "Create new widget" option. Then, select widget type - "Latest widget";'
    1:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-2-pe.png
        title: 'Enter widget name. Navigate to the "Resources" tab, and click "Add" button;'
    2:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-3-pe.png
        title: 'Check the "Is extension" box, and choose your extension module from the drop-down menu;'
    3:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-4-pe.png
        title: 'Your module is connected to your widget. Now, you can use your angular components. Go the "HTML" tab, and add the custom component. In our case it will be "tb-example-table".'
    4:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-5-pe.png
        title: 'Clean the default content of self.onInit, self.onDataUpdated, self.onResize, self.onDestroy functions'
    5:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-6-pe.png
        title: 'Add the following code to the "onDataUpdate" function: "self.ctx.$scope.exampleTableComponent.onDataUpdated();"'
    6:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-7-pe.png
        title: 'Add a new function from the documentation'
    7:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-8-pe.png
        title: 'Click "Run" button to see how your widget will look.'
    8:
        image: /images/user-guide/contribution/extensions/add-latest-values-widget-9-pe.png
        title: 'To apply the changes, click the "Save" button.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html %}
{% include /docs/user-guide/contribution/ui/advanced-development.md %}