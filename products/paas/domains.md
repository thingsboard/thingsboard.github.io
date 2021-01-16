---
layout: docwithnav
assignees:
- ashvayka
title: Managing domain
description: Domain managing through ThingsBoard Cloud
registerDomain:
    0:
        image: /images/cloud/register-domain-step-1.png
        title: 'Step 1. Expand <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>White Labeling</b></span> menu section in the left pane and click on the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain</b></span> menu.'
    1:
        image: /images/cloud/register-domain-step-2.png
        title: 'Step 2. On the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain</b></span> page click <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Register domain</b></span> button.'
    2:
        image: /images/cloud/register-domain-step-3.png
        title: 'Step 3. Enter your domain name in the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Register domain</b></span> dialog and click <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Register</b></span> button.'
    3:
        image: /images/cloud/register-domain-step-4.png
        title: 'Step 4. Follow the instructions form the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain provisioning</b></span> dialog. At this step you will be asked to add CNAME record to the database of your DNS service Provider. See <a href="#how-to-create-a-cname-record" target="_blank">How to Create a CNAME Record For Your Domain</a> for details.'
    4:
        image: /images/cloud/register-domain-step-5.png
        title: 'Step 5. After registering CNAME record, click <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>I&#39;ve added CNAME records</b></span> button. Domain verification and certificate provisioning will start at this time. Be patient, this process can take a while.'
    5:
        image: /images/cloud/register-domain-step-6.png
        title: 'Step 6. If all went well, dialog will be closed, and you will see your domain name on the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain</b></span> page. Now you can use your domain name to access <b>ThingsBoard Cloud</b> Web UI and services.'
    6:
        image: /images/cloud/register-domain-step-7.png
        title: 'Step 7. In case of any issues during domain provisioning you will see the dialog prompt with error details. In this case you should try to correct the issue (ex. correct invalid entered CNAME record) otherwise you can contact <a href="/docs/contact-us/" target="_blank">support</a>.'
domainDetails:
    0:
        image: /images/cloud/domain-details-step-1.png
        title: 'To view a registered domain details click <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain details</b></span> button on the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain</b></span> page.'
    1:
        image: /images/cloud/domain-details-step-2.png
        title: '<span style="background-color: #fff; color: #000; padding: 0 10px;"><b>ThingsBoard Cloud</b></span> will automatically renew the certificate earlier than 30 days before it expires, no action is required from your part unless you change or delete the domain CNAME record.'
deleteDomain:
    0:
        image: /images/cloud/delete-domain-step-1.png
        title: 'To delete a registered domain click <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Delete</b></span> button on the <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Domain</b></span> page.'
    1:
        image: /images/cloud/delete-domain-step-2.png
        title: 'In the confirmation dialog, click <span style="background-color: #fff; color: #000; padding: 0 10px;"><b>Yes</b></span> if you are sure you want to delete the domain.'

---
* TOC
{:toc}

The **ThingsBoard Cloud** allows registering your custom domain.
When you register your domain, **ThingsBoard Cloud** will automatically request SSL certificate from [Let's Encrypt](https://letsencrypt.org/) for it and will manage further certificate renewals.
After domain registration, you will be able to access **ThingsBoard Cloud** Web UI via your domain name using secure HTTPS connection.
Like Web UI all other **ThingsBoard Cloud** services such as MQTT/HTTP/CoAP transports or HTTP integrations will be accessible via your custom domain name.

### Domain registration

<br/>
{% capture domain_owner_note %}
**Note**

You must be owner of the domain you are registering.
{% endcapture %}

{% include templates/info-banner.md content=domain_owner_note %}

In order to use your own domain name to access **ThingsBoard Cloud** you must register it first. Follow the next steps to do that:

* Step 1. Expand **White Labeling** menu section in the left pane and click on the **Domain** menu.
* Step 2. On the **Domain** page click **Register domain** button.
* Step 3. Enter your domain name in the **Register domain** dialog and click **Register** button.
* Step 4. Follow the instructions form the **Domain provisioning** dialog. At this step you will be asked to add CNAME record to the database of your DNS service Provider. See [How to Create a CNAME Record For Your Domain](#how-to-create-a-cname-record) for details.
* Step 5. After registering CNAME record, click **I've added CNAME records** button. Domain verification and certificate provisioning will start at this time. Be patient, this process can take a while.
* Step 6. If all went well, dialog will be closed, and you will see your domain name on the **Domain** page. Now you can use your domain name to access **ThingsBoard Cloud** Web UI and services.
* Step 7. In case of any issues during domain provisioning you will see the dialog prompt with error details.
  In this case you should try to correct the issue (ex. correct invalid entered CNAME record) otherwise you can contact [support](/docs/contact-us/).

{% include images-gallery.html imageCollection="registerDomain" %}

### Domain details

To view a registered domain details click **Domain details** button on the **Domain** page.
**Domain details** dialog displays information about registered domain CNAME record and issued **SSL certificate** details including current validity period (**Not before** and **Not after**).
The certificate is valid for 90 days. Please note that **ThingsBoard Cloud** will automatically renew the certificate earlier than 30 days before it expires, no action is required from your part unless you change or delete the domain CNAME record.

{% include images-gallery.html imageCollection="domainDetails" %}

### Delete domain

To delete a registered domain click **Delete** button on the **Domain** page. In the confirmation dialog, click **Yes** if you are sure you want to delete the domain.
Once confirmed, the domain information and associated SSL certificate will be deleted and you will not be able to access **ThingsBoard Cloud** web interface and services using that domain. Please note that you can always re-register the same or a different domain using [Domain registration](#domain-registration) procedure.

{% include images-gallery.html imageCollection="deleteDomain" %}

### How to Create a CNAME Record For Your Domain {#how-to-create-a-cname-record}

The procedure of adding CNAME record to DNS database depending on your DNS service Provider. Below is the list of instructions for some popular DNS providers:

* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/route-53-create-alias-records/){:target="_blank"}
* [GoDaddy](https://www.godaddy.com/help/add-a-cname-record-19236){:target="_blank"}
* [Cloudflare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59){:target="_blank"}
* [ClouDNS](https://www.cloudns.net/wiki/article/13/){:target="_blank"}
* [Google Cloud DNS](https://cloud.google.com/dns/docs/records){:target="_blank"}
* [Name.com](https://www.name.com/support/articles/115004895548-Adding-a-CNAME-Record){:target="_blank"}
* [easyDNS](https://kb.easydns.com/knowledge/how-to-make-a-dns-entry/){:target="_blank"}
* [DNSimple](https://support.dnsimple.com/articles/manage-cname-record/#adding-a-cname-record){:target="_blank"}  
* [DNSMadeEasy](https://support.dnsmadeeasy.com/support/solutions/articles/47001001393-cname-record){:target="_blank"}
* [No-IP.com](https://www.noip.com/support/knowledgebase/how-to-configure-your-no-ip-hostname/){:target="_blank"}
* [NS1](https://help.ns1.com/hc/en-us/articles/360020258073-Creating-a-DNS-record){:target="_blank"}
* [Infoblox NIOS](https://docs.infoblox.com/display/BloxOneDDI/Creating+a+CNAME+Record){:target="_blank"}
* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain){:target="_blank"}

If you don't find your DNS provider in the list provided try to get this information on the providers website or by contacting your provider support.
