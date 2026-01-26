{% assign feature = "White labeling" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

White labeling lets you tailor your ThingsBoard instance to match your brand and preferences—especially useful for companies delivering IoT solutions to their customers.

Set your company or product name, upload your logo, choose color palettes, use a custom menu or translations—all without writing code or restarting the service.

<br><b><font size="4">Practical video course 🎥</font></b>

Watch this practical video course for a step-by-step guide to personalizing the look and feel of your IoT platform.

&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/jSXuHj3lbG0" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Basics & Inheritance

White labeling is configured based on the level you&#39;re signed in under:
{% unless docsPrefix contains "paas/" %}- **System Administrator level** — sets the platform&#39;s default branding for all tenants and their customers.{% endunless %}
- **Tenant level** — inherits the system branding and can override it for the specific tenant and its customers.
- **Customer level** — inherits the tenant&#39;s branding and can customize the UI for that customer and its users.

**Inheritance flow:** System → Tenant → Customer. Lower levels can override settings within their scope.

## Customize ThingsBoard web interface

{% capture difference %}
**Please note:** To configure **White labeling**, you need the appropriate [permissions](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

To configure your company or product **logo** and **color scheme**, go to the "White labeling" page.

{% include images-gallery.html imageCollection="white-labeling-default" %}

In the "General" tab you can set or change the following options:

 - Application title - you can specify custom the page's title, which is displayed in the browser tab;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/white-labeling/application-title.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/white-labeling/application-title-paas.png)
{% endif %}

 - Favicon (website icon) - you can change the default website icon to your own;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/white-labeling/website-icon.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/white-labeling/website-icon-paas.png)
{% endif %}

 - Logo - you can change the standard logo in the upper left corner to your company logo;

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/white-labeling/logo.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/white-labeling/logo-paas.png)
{% endif %}

 - Logo height - you can resize the logo;
 - White labeling allows you to customize the color theme by adjusting the primary and accent palettes to match your desired UI design.

    - Primary palette - you can customize the background color and font color by choosing one of the suggested UI design options or customizing an existing one;

    ![image](/images/user-guide/white-labeling/primary-palette.png)

    - Accent palette - you can customize the color for some elements, for example for a toggle;

    ![image](/images/user-guide/white-labeling/accent-palette.png)

 - Advanced CSS - you can stylize any elements of the ThingsBoard user interface as you wish. We will talk more about this functionality [below](#advanced-css);
 - Override Trendz analytics Add-on name - by checking this option, the name of the analytics add-on will be overridden from Trendz to Advanced analytics across the platform.
 - Show/hide platform name and version - by checking this option, the name of the platform and its current version will be displayed in the lower left corner.

![image](/images/user-guide/white-labeling/show-platform-name-and-version.png)

The final look of the customized user interface:

{% include images-gallery.html imageCollection="white-labeling-custom" %}

### Advanced CSS

Using CSS, you can stylize any elements of the ThingsBoard user interface as you wish. Such elements can be background, icons, fonts, etc.

To use CSS in your UI design, do the following:

{% include images-gallery.html imageCollection="advanced-css-1" showListImageTitles="true" %}

<br>
CSS code example for customize icons color and scroll color:

```css
/*icon color*/

.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color.ng-star-inserted{
    fill: #a60062;
    color: #a60062;
}
.mat-icon.notranslate.mat-icon-no-color.ng-star-inserted{
    fill: #a60062;
}

/*scroll color*/

mat-toolbar::-webkit-scrollbar-thumb,
div::-webkit-scrollbar-thumb,
ng-component::-webkit-scrollbar-thumb {
    background-color: #c526a5 !important;
    background-image: linear-gradient(#e72c83, #a742c6);
    border-radius: 200px/300px !important;
    border: 0.1rem linear-gradient(#e72c83, #a742c6);
}

.mat-mdc-button.mat-mdc-button-base.tb-active{
    color: #ffffff;
}
```
{: .copy-code}

Let's also add a gradient to the left menu:

{% include images-gallery.html imageCollection="advanced-css-2" showListImageTitles="true" %}

An example of CSS code to customize the appearance of the sidebar menu:

```css
/*menu gradient*/

.tb-side-menu {
    background: linear-gradient(44deg, #9d9d9d, #ffffff, #9f9f9f);
}
```
{: .copy-code}

Using the functionality described in this documentation, you can customize the appearance of the ThingsBoard UI according to your preferences.

## Customize the login page

On the "Login" tab, you can configure the **login page** for your clients.

- Enter the registered domain name, or refer to [this documentation](/docs/{{docsPrefix}}domains/#domain-registration){:target="_blank"} to learn how to register a new domain;
- It is recommended to prevent usage of hostnames from headers of the request;
- Enter a custom application title;
- Replace the default website icon and logo with your own;
- Define the primary and accent color palettes;
- Set the page background color.

Once done, save the changes.

{% include images-gallery.html imageCollection="customize-login-page" %}

<br>
Now, use your custom domain name to access the ThingsBoard web interface login page and verify the result of your configuration.

{% include images-gallery.html imageCollection="verify-result-customize-login-page" %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
