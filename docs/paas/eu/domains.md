---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: Managing domain
description: Domain managing through ThingsBoard Cloud
registerDomain:
    0:
        image: /images/user-guide/domain/domain-register-step-1.png
        title: 'Go to the "Settings" page, then navigate to the "Domain" tab. On the "Domain" tab click on the "Register domain" button;'
    1:
        image: /images/user-guide/domain/domain-register-step-2.png
        title: 'Enter valid domain name in the input field and click on the "Register" button;'
    2:
        image: /images/user-guide/domain/domain-register-step-3.png
        title: 'You will be prompted a reminder about the CNAME;'
    3:
        image: /images/user-guide/domain/domain-register-step-4.png
        title: 'Click on the "I&#39;ve added CNAME records" button. Once you confirm the canonical name is in place, the domain verification and certificate provisioning will start. Be patient, this process can take a while;'
    4:
        image: /images/user-guide/domain/domain-register-step-5.png
        title: 'If succeeded, you will see your domain name on the "Domain" tab.'

white-labeling:
    0:
        image: /images/user-guide/domain/domain-white-labeling-1.png
        title: 'Go to the "White Labeling" page, then navigate to the "Login" tab. Enter the domain name and the base URL in the corresponding fields. Don&#39;t forget to check the box "Prohibit to use hostname from the client request headers". Then save all changes;'
    1:
        image: /images/user-guide/domain/domain-login-1.png
        title: 'Now you can use your domain name to access ThingsBoard Cloud Web UI and services. Try to login by entering the chosen domain name in the browser address line.'

domainDetails:
    0:
        image: /images/user-guide/domain/domain-details-step-1.png
        title: 'To view a registered domain details click "Domain details" button on the "Domain" tab;'
    1:
        image: /images/user-guide/domain/domain-details-step-2.png
        title: 'ThingsBoard Cloud will automatically renew the certificate earlier than 30 days before it expires, no action is required from your part unless you change or delete the domain CNAME record.'

deleteDomain:
    0:
        image: /images/user-guide/domain/domain-delete-step-1.png
        title: 'To delete a registered domain click "Delete" button on the "Domain" tab;'
    1:
        image: /images/user-guide/domain/domain-delete-step-2.png
        title: 'In the confirmation dialog, click "Yes" if you are sure you want to delete the domain.'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}

* TOC
{:toc}

The [ThingsBoard Cloud](https://{{hostName}}/signup) allows registering your custom domain to have the required host name for user’s access, links, etc. 
When you register valid domain, the ThingsBoard Cloud automatically requests the SSL certificate from [Let's Encrypt](https://letsencrypt.org/) for the latter and manages further certificate renewals. 
After domain registration, your tenant and application(s) will be accessible via your domain name using a secure (HTTPS) connection.
Like Web UI all other ThingsBoard Cloud services such as MQTT/HTTP/CoAP transports or HTTP integrations will be accessible via your custom domain name.

### Domain registration

{% capture domain_owner_note %}
**Note**
<br>
You must be owner of the domain you are registering.
{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}

In order to use your own host name instead of **eu.thingsboard.cloud** you must register it first. Follow the next steps to do that:

* On your DNS provider’s website, you must add a canonical record for your domain to map it with **eu.thingsboard.cloud**. See [How to Create a CNAME Record For Your Domain](#how-to-create-a-cname-record) for details. Once done, you can start the registration procedure;
* Go to the "Settings" page, then navigate to the "Domain" tab. On the "Domain" tab click on the "Register domain" button;
* Enter valid domain name in the input field and click on the "Register" button.
* You will be prompted a reminder about the CNAME;
* Click on the "I've added CNAME records" button. Once you confirm the canonical name is in place, the domain verification and certificate provisioning will start. Be patient, this process can take a while;
* If succeeded, you will see your domain name on the "Domain" tab.

{% include images-gallery.html imageCollection="registerDomain" %}

### Customize the login page URL

To have a customized Web UI access, go to White labeling section. You need the Login tab. Enter the recently registered domain name. 
It is recommended to fill the Base URL field and prevent usage of hostnames from headers of the request.

{% include images-gallery.html imageCollection="white-labeling" %}

Now you can use your domain name to access ThingsBoard Cloud Web UI and services. Try to login by entering the chosen domain name in the browser address line.

Proceed with further customization of Login page to accomplish the platform re-branding.

### Domain details

To view a registered domain details click "Domain details" button on the "Domain" tab.
Domain details dialog displays information about registered domain CNAME record and issued "SSL certificate" details including current validity period (*Not before* and *Not after*).
The certificate is valid for 90 days. Please note that ThingsBoard Cloud will automatically renew the certificate earlier than 30 days before it expires, no action is required from your part unless you change or delete the domain CNAME record.

{% include images-gallery.html imageCollection="domainDetails" %}

### Delete domain

To delete a registered domain click "Delete" button on the "Domain" tab. In the confirmation dialog, click "Yes" if you are sure you want to delete the domain.
Once confirmed, the domain information and associated SSL certificate will be deleted and you will not be able to access ThingsBoard Cloud web interface and services using that domain. Please note that you can always re-register the same or a different domain using [Domain registration](#domain-registration) procedure.

{% include images-gallery.html imageCollection="deleteDomain" %}

### How to Create a CNAME Record For Your Domain {#how-to-create-a-cname-record}

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

If none of the above-listed DNS providers is one your are ordering service from, try to get this information on the provider's website or by contacting their support.

### Troubleshooting

Firs of all you need to check if you have added CNAME to your domain correctly:

Use [Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/){:target="_blank"} or "dig" command if your OS system is Linux:
```bash
dig $YOUR_DOMAIN_NAME any
```
{: .copy-code}

Replace $YOUR_DOMAIN_NAME with your domain value.

For example, $YOUR_DOMAIN_NAME is `mydomain.thingsboard.online`:
```bash
dig mydomain.thingsboard.online any
```

The "dig" command in Linux is used to gather DNS information. It stands for Domain Information Groper, and it collects data about Domain Name Servers. The "dig" command is helpful for diagnosing DNS problems, but is also used to display DNS information.

The output of "dig" command could vary duy to your domain setup.
For example:
```bash
$ dig mydomain.thingsboard.online any

; <<>> DiG 9.16.1-Ubuntu <<>> mydomain.thingsboard.online any
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 27275
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;mydomain.thingsboard.online.	IN	ANY

;; ANSWER SECTION:
mydomain.thingsboard.online. 3600 IN	HINFO	"RFC8482" ""

;; Query time: 36 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: чт чер 29 15:36:44 EEST 2023
;; MSG SIZE  rcvd: 77
```

This output shows that there are NO CNAME added to the mydomain.thingsboard.online domain ("ANSWER SECTION" block).

Correct output should look like that:
```bash
...
;; ANSWER SECTION:
mydomain.thingsboard.online. 3600 IN	CNAME	eu.thingsboard.cloud
...
```

If all the things are correct, but some issue still persists - please [Contact us](https://thingsboard.io/docs/contact-us/) for further support.
