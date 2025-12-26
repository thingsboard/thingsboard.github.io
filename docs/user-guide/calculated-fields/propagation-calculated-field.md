---
layout: docwithnav
title: Propagation calculated field
description: For complex calculations, TBEL is used. It enables advanced operations such as conditional statements, loops, and access to historical data.
breadcrumbs: "true"
breadcrumbs-steps: "1"
hidetoc: "true"

expression-script-calculated-fields-1:
  0:
    image: /images/user-guide/calculated-fields/expression-script-function-1-ce.png
    title: 'Define a function that will perform calculations using the variables defined in the "Arguments" section. The variable name that will store the calculation result is defined within the function itself.'
    
output-script-1:
  0:
    image: /images/user-guide/calculated-fields/output-script-1-ce.png
    title: 'Time series: function must return a JSON object or array with or without a timestamp containing the computed value.'
  1:
    image: /images/user-guide/calculated-fields/output-script-2-ce.png
    title: 'Attribute: function must return a JSON object without timestamp information containing the computed value.'

---

{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/calculated-fields/propagation-calculated-field.md %}
