* TOC
{:toc}


{% if docsPrefix contains 'pe/' or docsPrefix contains 'paas/' %}
## What is ThingsBoard Professional Edition?
{% else %}
## What is ThingsBoard Community Edition?
{% endif %}

ThingsBoard is a comprehensive open-source IoT platform designed for device connectivity, data collection, processing, visualization, and remote device management. It supports IoT protocols like MQTT, CoAP, HTTP, LWM2M and provides a flexible, scalable foundation for building both prototype and production-level IoT solutions.

The platform is available in two main editions: Community Edition (CE) and Professional Edition (PE).<br>

{% if docsPrefix contains 'pe/' or docsPrefix contains 'paas/' %}
The **Professional Edition** is the enterprise-grade version tailored for commercial IoT deployments. It includes all the features of the Community Edition and adds advanced capabilities that help accelerate time-to-market, enhance security, improve scalability, and deliver a polished, production-ready solution. This edition is designed for businesses that require high performance, operational reliability, and premium features.<br>
{% else %}
The **Community Edition** is a free, open-source version. It is a powerful and scalable multi-tenant solution, ideal for teams looking to experiment, test hypotheses, build proof-of-concepts, or launch MVPs without upfront costs. It offers the flexibility and agility needed in development.<br>
{% endif %}

If this is your first experience with the platform we recommend to review [what-is-thingsboard](/docs/{{docsPrefix}}getting-started-guides/what-is-thingsboard/) 
and [getting started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/).
You can find more information on the dedicated page.

## How do I get started?

{% if docsPrefix contains 'paas/' %}
We recommend to follow the [getting started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/).
{% else %}
We recommend to [install](/docs/user-guide/install/{{docsPrefix}}installation-options/) ThingsBoard locally on your laptop or PC using Docker
and follow the [getting started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/).
{% endif %}

## What can I do with ThingsBoard?

ThingsBoard provides out-of-the-box IoT solution that will enable server-side infrastructure for your IoT applications.
You can find more information by browsing [guides](/docs/{{docsPrefix}}user-guide/) and [device library](/docs/{{docsPrefix}}/device-library/).

{% unless docsPrefix contains 'paas/' %}
## Where can I host ThingsBoard?

You can host ThingsBoard in the cloud, on-premises or locally on your laptop, PC or even Raspberry Pi. We recommend to get started with Docker installation
  
  - [Linux & Mac OS](/docs/user-guide/install/{{docsPrefix}}docker/) 
  - [Windows](/docs/user-guide/install/{{docsPrefix}}docker-windows/)

You can also take a look at [cluster setup](/docs/user-guide/install/{{docsPrefix}}cluster-setup/) guide.
{% endunless %}

## How to connect my device?

ThingsBoard provides
[MQTT](/docs/{{docsPrefix}}reference/mqtt-api), 
[CoAP](/docs/{{docsPrefix}}reference/coap-api), 
[HTTP](/docs/{{docsPrefix}}reference/http-api), and.
[LwM2M](/docs/{{docsPrefix}}reference/lwm2m-api) protocols support.
**Existing** devices may be connected to the platform using **[ThingsBoard Gateway](/docs/iot-gateway/what-is-iot-gateway/)**.
You can find more information on the [connectivity](/docs/{{docsPrefix}}reference/protocols/) page. 

## Do I need to use an SDK?

No, many IoT devices can't afford to embed third-party SDK. ThingsBoard provides quite simple API over common IoT protocols. You can choose any client-side library you like or use your own.
Some useful references:
 
 - [MQTT client-side libraries list](https://github.com/mqtt/mqtt.github.io/wiki/libraries) 
 - [C-implementation for CoAP](https://libcoap.net/)

## What about security?

You can use MQTT (over SSL) or HTTPS protocols for transport encryption. 

Each device has unique access token credentials that is used to setup connection. Credentials type is pluggable, so X.509 certificates support is coming soon.

## How much devices can ThingsBoard support?

ThingsBoard platform is horizontally scalable. Each server node in the cluster is unique.
Scalability is achieved using [consistent-hashing](https://en.wikipedia.org/wiki/Consistent_hashing) load balancing algorithm between the cluster nodes.
Actual performance depends on usage scenario of connected devices.
{% unless docsPrefix contains 'paas/' %}
For example, small commodity hardware cluster can support [several millions](/docs/{{docsPrefix}}reference/iot-platform-deployment-scenarios/#1-million-smart-meters-tco) of devices connected over MQTT.
{% endunless %}
  
## Where does ThingsBoard store data?

The data is stored in [Cassandra](https://cassandra.apache.org/) database. Cassandra suites well for storage and querying of time-series data and provides high availability and fault-tolerance.
 
## What license type does ThingsBoard use?

ThingsBoard is licensed under [Apache 2.0 License](https://en.wikipedia.org/wiki/Apache_License#Version_2.0).
It is free for both personal and commercial usage and you can deploy it anywhere.

## How can I check which version of ThingsBoard I’m currently using?

{% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" %}
ThingsBoard Cloud is a fully managed platform that is regularly updated to the latest version by the ThingsBoard team, so you don't need to worry about maintenance or upgrades.
{% elsif page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
There are several ways to check the platform version in ThingsBoard Professional Edition.  
The easiest way is to log in as SysAdmin. On the home page, you will find a widget in the bottom-left corner of the screen displaying the current platform version and indicating whether an upgrade is available.

Alternatively, if you don’t have access to the SysAdmin account, open [White-Labeling](/docs/{{docsPrefix}}user-guide/white-labeling/) tab from the side menu.  
Enable the **Show platform name and version** option to see the current version of the platform.
{% else %}
There are several ways to check the platform version in ThingsBoard Community Edition.  
The easiest way is to log in as SysAdmin. On the home page, you will find a widget in the bottom-left corner of the screen showing the current platform version and whether an upgrade is available.
{% endif %}


## Can I replace the default ThingsBoard logo in the menu?

{% if page.docsPrefix contains "paas/" or docsPrefix contains "paas/" %}
In the ThingsBoard Cloud, all branding can be configured directly from the user interface using the built-in [White-Labeling](/docs/{{docsPrefix}}user-guide/white-labeling/#customize-thingsboard-web-interface) module.
Here’s what you can do in just a few clicks:
- Replace the ThingsBoard logo and favicon with your own corporate visuals
- Customize login and system pages to greet users with your brand from the start
- Adjust color schemes and styles (primary, accent colors, logo size, CSS tweaks) to match your identity
- Preview changes live before applying them
- Configure custom domain: map your own domain name (e.g., portal.company.com) so users access the platform via your branded URL

And it doesn’t stop at the logo. With ThingsBoard Cloud you can:
- Set up custom [email templates](/docs/{{docsPrefix}}user-guide/mail-templates/), so all platform notifications reflect your brand
- Add [custom translations](/docs/{{docsPrefix}}user-guide/custom-translation/), ensuring the platform “speaks” your users’ language
- Create [custom menus](/docs/{{docsPrefix}}user-guide/custom-menu/), adapting navigation to your business workflows

This gives you a fully branded platform: your users see your logo, your colors, your emails, and even your tailored menus.
{% elsif page.docsPrefix == "pe/" or docsPrefix == "pe/" %}
In the Professional Edition, all branding can be configured directly from the user interface using the built-in [White-Labeling](/docs/{{docsPrefix}}user-guide/white-labeling/#customize-thingsboard-web-interface) module.
Here’s what you can do in just a few clicks:
- Replace the ThingsBoard logo and favicon with your own corporate visuals
- Customize login and system pages to greet users with your brand from the start
- Adjust color schemes and styles (primary, accent colors, logo size, CSS tweaks) to match your identity
- Preview changes live before applying them
- Configure custom domains: map your own domain name (e.g., portal.company.com) so users access the platform via your branded URL

And it doesn’t stop at the logo. With PE you can:
- Set up custom [email templates](/docs/{{docsPrefix}}user-guide/mail-templates/), so all platform notifications reflect your brand
- Add [custom translations](/docs/{{docsPrefix}}user-guide/custom-translation/), ensuring the platform “speaks” your users’ language
- Create [custom menus](/docs/{{docsPrefix}}user-guide/custom-menu/), adapting navigation to your business workflows

This gives you a fully branded platform: your users see your logo, your colors, your emails, and even your tailored menus.
{% else %}
The Community Edition does not include a built-in white-labeling feature. However, it is technically possible to replace the default ThingsBoard logo by modifying the source code and rebuilding the platform. This requires development expertise and familiarity with ThingsBoard’s codebase. Please note that such changes will need to be reapplied after each upgrade of the platform.

If you need a more streamlined and configurable option, we recommend considering the Professional Edition. With Professional Edition, you can effortlessly upload your own logo and favicon, customize login and system pages, adjust colors and branding palettes, and even tailor [email templates](/docs/pe/user-guide/mail-templates/), [translations](/docs/pe/user-guide/custom-translation/), and [custom menus](/docs/pe/user-guide/custom-menu/) - all directly from the user interface, without touching the code. This empowers your organization to deliver a fully branded, professional-grade experience to your customers and tenants in just a few clicks.

More details: [PE White-Labeling Guide](/docs/pe/user-guide/white-labeling/#customize-thingsboard-web-interface).
{% endif %}

## How to get support?

You can use troubleshooting instructions and community resources or [contact us](/docs/contact-us) and learn more about [services](/services/) we provide.
