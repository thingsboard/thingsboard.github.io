---
layout: docwithnav
title: Self-registration
description:  

---

{% assign feature = "Self-registration" %}{% include templates/pe-feature-banner.md %}

ThingsBoard self registration feature allows tenant to configure sign up page for its customers to be able to simply sign up and login the TB with predefined permission configurations.
The following configuration options are available:
   
  - Configure domain name per tenant that will be used for self registration URL;
  - add reCaptcha site and secret keys for confirmation that your customer is not a robot;
  - configure notification email to receive information about customers registrations and activations;
  - allow to configure text message for sign up page;
  - allow tenant to configure specific roles and assign them to customer's users;
  - assign specific dashboard to the customer with **always fullscreen** ability;
  - configure privacy policy text that appears on the sign up page.

[Contact us](/docs/contact-us/) to suggest missing feature for your use case.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}
