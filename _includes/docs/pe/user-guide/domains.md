{% if docsPrefix == null %}
{% assign THINGSBOARD_WITH_URL = "[ThingsBoard CE](/docs/user-guide/install/installation-options/)" %}
{% assign THINGSBOARD_HOST = "IP address" %}
{% assign THINGSBOARD_URL = "ThingsBoard" %}
{% endif %}
{% if docsPrefix == "pe/" %}
{% assign THINGSBOARD_WITH_URL = "[ThingsBoard PE](/docs/user-guide/install/pe/installation-options/)" %}
{% assign THINGSBOARD_HOST = "IP address" %}
{% assign THINGSBOARD_URL = "ThingsBoard" %}
{% endif %}
{% if docsPrefix == "paas/" %}
{% assign THINGSBOARD_WITH_URL = "[ThingsBoard Cloud](https://thingsboard.cloud/signup)" %}
{% assign THINGSBOARD_HOST = "thingsboard.cloud" %}
{% assign THINGSBOARD_URL = "ThingsBoard Cloud" %}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
{% assign THINGSBOARD_WITH_URL = "[EU ThingsBoard Cloud](https://eu.thingsboard.cloud/signup)" %}
{% assign THINGSBOARD_HOST = "eu.thingsboard.cloud" %}
{% assign THINGSBOARD_URL = "EU ThingsBoard Cloud" %}
{% endif %}

* TOC
{:toc}

{% if docsPrefix == null or docsPrefix == "pe/" %}
{{THINGSBOARD_WITH_URL}}{:target="_blank"} {% unless docsPrefix == null %}[White labeling](/docs/{{docsPrefix}}user-guide/white-labeling/){:target="_blank"} feature{% endunless %} allows you to use a custom domain to provide secure user access.
To achieve this, you need to configure an HAProxy Load Balancer and provide an SSL certificate. [This documentation](/docs/user-guide/install/pe/add-haproxy-ubuntu/){:target="_blank"} will help you do this.
Once set up, you will be able to access the ThingsBoard platform through your custom domain using a secure (HTTPS) connection.
{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{{THINGSBOARD_WITH_URL}}{:target="_blank"} [White labeling](/docs/{{docsPrefix}}user-guide/white-labeling/){:target="_blank"} feature allows you to use a custom domain to provide a personalized hostname for user access.
When you register a valid domain, {{THINGSBOARD_URL}} automatically requests an SSL certificate and manages future certificate renewals.
After domain registration, you will be able to access the platform via your domain name using a secure (HTTPS) connection. 
This feature is primarily intended for Web UI access, so some services, such as MQTT or CoAP transports, may not be available through your custom domain name.
{% endif %}

## Domain registration

{% capture domain_owner_note %}
**Note**: You must be owner of the domain you are registering.
{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}

In order to use your own host name instead of **{{THINGSBOARD_HOST}}** you must register it first. To do this, follow these steps:

First, on your DNS provider&#39;s website, you must add a canonical record for your domain to map it with eu.thingsboard.cloud{% if docsPrefix == "pe/" %}, and add **SSL certificate**{% endif %}. See [How to Create a CNAME Record For Your Domain](#how-to-create-a-cname-record) for details.

Once done, you can start the procedure of adding a domain. 

{% if docsPrefix == "pe/" %}
{% capture domain_owner_note %}
Starting from ThingsBoard version 3.9.0, adding your own domain name is available at both the Tenant level and the Customer level.
{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}
{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
{% capture domain_owner_note %}
Registering your own domain name is available at both the Tenant level and the Customer level.
{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}
{% endif %}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
- Log in to your {{THINGSBOARD_WITH_URL}}{:target="_blank"} account;
{% endif %}
{% if docsPrefix == null %}
- Log in to {{THINGSBOARD_WITH_URL}}{:target="_blank"} account as system administrator;
{% endif %}

{% include images-gallery.html imageCollection="register-domain" showListImageTitles="true" %}

## Log in with your chosen domain name

Now you can use your domain name to access {{THINGSBOARD_URL}} web interface and services. Try to login by entering the chosen domain name in the browser address line.

{% include images-gallery.html imageCollection="login-with-domain" %}

## Domain details

To view details about a registered domain, simply click on it to open the domain details dialog.
{% unless docsPrefix == 'pe/' %} This dialog provides information about registered domain CNAME record and issued "SSL certificate" details including current validity period (*Not before* and *Not after*).{% endunless %}

{% unless docsPrefix == 'pe/' %}
The SSL certificate is valid for 90 days, but no need to worry — {{THINGSBOARD_URL}} will automatically renew it at least 30 days before it expires.
No action is required on your part unless you change or delete the domain&#39;s CNAME record.
{% endunless %}

{% include images-gallery.html imageCollection="domain-details" %}

## Delete domain

To delete the {% unless docsPrefix == 'pe/' %}registered{% endunless %} domain click "trash" icon in the domain's row you want to delete. In the confirmation dialog, click "Yes" if you are sure you want to delete the domain.

{% include images-gallery.html imageCollection="delete-domain" %}

Once confirmed, the domain information and associated SSL certificate will be deleted, and you will not be able to access {{THINGSBOARD_URL}} web interface and services using that domain.
You can always re-register the same or a different domain using [Domain registration](#domain-registration) procedure.

## How to Create a CNAME Record For Your Domain {#how-to-create-a-cname-record}

The procedure of adding CNAME record to DNS database depending on your DNS service Provider. Below is the list of instructions for some popular DNS providers:

* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/route-53-create-alias-records/){:target="_blank"}
* [GoDaddy](https://www.godaddy.com/help/add-a-cname-record-19236){:target="_blank"}
* [Cloudflare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59){:target="_blank"}
* [ClouDNS](https://www.cloudns.net/wiki/article/13/){:target="_blank"}
* [Google Cloud DNS](https://cloud.google.com/dns/docs/records){:target="_blank"}
* [Name.com](https://www.name.com/support/articles/115004895548-adding-a-cname-record){:target="_blank"}
* [easyDNS](https://kb.easydns.com/knowledge/how-to-make-a-dns-entry/){:target="_blank"}
* [DNSimple](https://support.dnsimple.com/articles/manage-cname-record/#adding-a-cname-record){:target="_blank"}
* [DNSMadeEasy](https://support.dnsmadeeasy.com/support/solutions/articles/47001001393-cname-record){:target="_blank"}
* [No-IP.com](https://www.noip.com/support/knowledgebase/how-to-configure-your-no-ip-hostname/){:target="_blank"}
* [Infoblox NIOS](https://docs.infoblox.com/display/BloxOneDDI/Creating+a+CNAME+Record){:target="_blank"}
* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain){:target="_blank"}

If none of the DNS providers listed above is the one you are using, try to find this information on the provider&#39;s website or by reaching out to their support team.

## Troubleshooting

Firs of all you need to check if you have added CNAME to your domain correctly:

Use [Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/){:target="_blank"} or "dig" command if your OS system is Linux:
```bash
dig $YOUR_DOMAIN_NAME any
```
{: .copy-code}

Replace $YOUR_DOMAIN_NAME with your domain value.

For example, $YOUR_DOMAIN_NAME is `mycompany.thingsboard.space`:
```bash
dig mycompany.thingsboard.space any
```

The "dig" command in Linux is used to gather DNS information. It stands for Domain Information Groper, and it collects data about Domain Name Servers. The "dig" command is helpful for diagnosing DNS problems, but is also used to display DNS information.

The output of "dig" command could vary duy to your domain setup.
For example:
```bash
$ dig mycompany.thingsboard.space any

; <<>> DiG 9.16.1-Ubuntu <<>> mycompany.thingsboard.space any
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 27275
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;mydomain.thingsboard.online.	IN	ANY

;; ANSWER SECTION:
mycompany.thingsboard.space. 3600 IN	HINFO	"RFC8482" ""

;; Query time: 36 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: чт чер 29 15:36:44 EEST 2023
;; MSG SIZE  rcvd: 77
```

This output shows that there are NO CNAME added to the mycompany.thingsboard.space domain ("ANSWER SECTION" block).

Correct output should look like that:
```bash
...
;; ANSWER SECTION:
mycompany.thingsboard.space. 3600 IN	CNAME	eu.thingsboard.cloud
...
```

If all the things are correct, but some issue still persists - please [contact us](https://thingsboard.io/docs/contact-us/){:target="_blank"} for further support.

## Next step

{% if docsPrefix == null %}
{% assign feature = "White labeling" %}{% include templates/pe-feature-banner.md %}
{% endif %}

Learn how to customize ThingsBoard login page and user interface, configure your company or product logo, and adjust the color scheme, navigate to the [White labeling](/docs/{{docsPrefix}}user-guide/white-labeling/){:target="_blank"} section.