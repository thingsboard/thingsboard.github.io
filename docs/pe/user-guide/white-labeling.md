---
layout: docwithnav-pe
title: White labeling
description:
redirect_from: "/docs/user-guide/white-labeling/"

white-labeling-default:
    0:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-default.png
        title: 'To configure your company or product logo and color scheme, go to the "White labeling" page.'

white-labeling-custom:
    0:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-custom.png
        title: 'The final look of the customized user interface.'

advanced-css-1:
    0:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-advanced-css-1.png
        title: 'Click on the "Advanced CSS" button;'
    1:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-advanced-css-2.png
        title: 'Paste the CSS code with the style for the user interface into the "Advanced CSS" pop-up window and click "Save". Then save all changes;'
    2:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-advanced-css-3.png
        title: 'As you can see icons color changed to purple.'

advanced-css-2:
    0:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-advanced-css-4.png
        title: 'Paste the CSS-code into the "Advanced CSS" window. Do not delete the previously added CSS code to keep the previous color scheme. Save all changes;'
    1:
        image: https://img.thingsboard.io/user-guide/white-labeling/white-labeling-advanced-css-5.png
        title: 'Added a gradient to the left menu color scheme.'

customize-login-page:
    0:
        image: https://img.thingsboard.io/user-guide/white-labeling/login-tab-1-pe.png
        title: 'Enter the registered domain name. It is recommended to prevent usage of hostnames from headers of the request. Enter a custom application title, replace the default website icon and logo with your own;'
    1:
        image: https://img.thingsboard.io/user-guide/white-labeling/login-tab-2-pe.png
        title: 'Define the primary and accent color palettes, and set the page background color. Once done, save the changes.'

verify-result-customize-login-page:
    0:
        image: https://img.thingsboard.io/user-guide/white-labeling/login-tab-3.png
        title: 'Now, use your custom domain name to access the ThingsBoard web interface login page and verify the result of your configuration.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/white-labeling.md %}

