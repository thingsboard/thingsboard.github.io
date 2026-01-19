---
layout: docwithnav-pe
title: IoT Solution Templates
description: ThingsBoard IoT Solution templates overview

open-solution-templates-page:
    0:
        image: /images/solution-templates/open-solution-templates-page.png
        title: 'Browse available solution templates by navigating to the "<b>Solution templates</b>" menu item.'

view-details:
    0:
        image: /images/solution-templates/managing-solution-templates-1.png
        title: 'Open the template description using the "<b>Details</b>" button.'
    1:
        image: /images/solution-templates/managing-solution-templates-2.png

install-solution:
    0:
        image: /images/solution-templates/managing-solution-templates-3.png
        title: 'Install the template using "Install" button.'
    1:
        image: /images/solution-templates/managing-solution-templates-4.png
    2:
        image: /images/solution-templates/managing-solution-templates-5.png
        title: 'Once solution is installed, you will be automatically forwarded to the main dashboard of the corresponding template, and the instructions dialog will appear.<br>Browse the instructions and use "Close" button to start using the solution.'
    3:
        image: /images/solution-templates/managing-solution-templates-6.png

view-instructions:
    0:
        image: /images/solution-templates/managing-solution-templates-7.png
        title: 'Solution instructions are auto-generated once the template is installed. You may open them using "Instructions" button.'
    1:
        image: /images/solution-templates/managing-solution-templates-8.png
      
delete-solution:
    0:
        image: /images/solution-templates/managing-solution-templates-9.png
        title: 'Remove the installed solution and all entities created during the installation using the <b>Delete</b> button.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/overview.md %}