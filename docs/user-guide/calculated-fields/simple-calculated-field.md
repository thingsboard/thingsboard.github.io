---
layout: docwithnav
title: Simple calculated field
description: Simple calculated fields use basic arithmetic operations (+, -, *, /) and standard functions such as sqrt (square root), pow (power), abs (absolute value), etc.
breadcrumbs: "true"
breadcrumbs-steps: "1"
hidetoc: "true"

expression-simple-calculated-fields-1:
  0:
    image: /images/user-guide/calculated-fields/expression-simple-calculated-fields-1-ce.png
    title: 'In the "Expression" section, enter the mathematical expression for the calculation using the variables defined in the "Arguments" section.'
    
output-simple-1:
  0:
    image: /images/user-guide/calculated-fields/output-simple-1-ce.png
    title: 'Select the output type as "Time series". Set a name to the variable that will store the calculation result. Optionally, specify the number of decimal places.'
  1:
    image: /images/user-guide/calculated-fields/output-simple-2-ce.png
    title: 'Select the output type as "Attribute" and choose its scope: "Server attributes", "Client attributes", or "Shared attributes". Set a name to the variable that will store the calculation result. Optionally, set the number of decimal places.'

---

{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/calculated-fields/simple-calculated-field.md %}