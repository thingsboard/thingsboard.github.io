* TOC
{:toc}

After installing **TBMQ PE**, as described in the [Installation Options guide](/docs/pe/mqtt-broker/install/installation-options/), 
your instance is accessible by default via its public **IP address** or the **DNS record of the cloud Load Balancer**.
However, configuring a **custom domain name** provides several important advantages:

* **Simplified access** - users can log in using an easy-to-remember hostname instead of an IP or Load Balancer DNS name.
* **Secure SSL connections** - domains enable the use of trusted SSL/TLS certificates.
* **White labeling** - TBMQ uses the domain to apply custom branding to the login page (logos, titles, and colors). The domain simplifies configuration management, as each TBMQ deployment supports only one login page branding configuration.
* **OAuth 2.0 / SSO integration** - multiple domains allow separate login configurations for each authentication provider.

## Domain Registration

{% capture domain_owner_note %}
**Note:** You must be the owner of the domain you are registering.
{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}

To use your own hostname with TBMQ, you must first configure DNS and then register the domain inside TBMQ.

### Step 1. Configure DNS

On your DNS provider’s website:

* Add an **A record** (or **CNAME record**) to map your domain to the IP or hostname where TBMQ is hosted.

    * See [How to Create an A Record](#how-to-create-an-a-record-for-your-domain)
    * Or [How to Create a CNAME Record](#how-to-create-a-cname-record-for-your-domain)

* Add a valid **SSL certificate** for the chosen domain.

### Step 2. Register Domain in TBMQ

* Log in to your **TBMQ PE** account.

{% include images-gallery.html imageCollection="register-domain" showListImageTitles="true" %}

## Logging in with Your Domain

After successful registration, you can access your TBMQ instance using the configured domain name.
Open a web browser and enter the domain in the address bar - you should see the TBMQ login page.

{% include images-gallery.html imageCollection="login-with-domain" %}

## Viewing Domain Details

To view details about a registered domain, simply click on it to open the domain details dialog.

{% include images-gallery.html imageCollection="domain-details" %}

## Deleting a Domain

To delete the domain click "trash" icon in the domain's row you want to delete. In the confirmation dialog, click "Yes" if you are sure you want to delete the domain.

{% include images-gallery.html imageCollection="delete-domain" %}

## How to Create an A Record for Your Domain {#how-to-create-an-a-record-for-your-domain}

### What Is an A Record?

An **A record (Address Record)** links a domain name directly to an **IPv4 address**.
It tells DNS resolvers where to find your server.

**Example:**

```
mqtt.mycompany.com → 203.0.113.45
```

### When to Use an A Record

Use an **A record** when your TBMQ instance has a **fixed public IP address** - for example, a VM, Kubernetes service, or on-premise server.

### How to Create an A Record

The exact procedure depends on your DNS provider.
Refer to their documentation for detailed instructions:

* [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values.html){:target="_blank"}
* [GoDaddy](https://www.godaddy.com/help/add-an-a-record-19238){:target="_blank"}
* [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/){:target="_blank"}
* [ClouDNS](https://www.cloudns.net/wiki/article/10/){:target="_blank"}
* [Google Cloud DNS](https://cloud.google.com/dns/docs/records){:target="_blank"}
* [Name.com](https://www.name.com/support/articles/115004893508-adding-an-a-record){:target="_blank"}
* [DNSimple](https://support.dnsimple.com/articles/manage-a-record/){:target="_blank"}
* [Infoblox NIOS](https://docs.infoblox.com/space/BloxOneDDI/186811892/Creating+A+Record){:target="_blank"}
* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain/){:target="_blank"}

If your provider is not listed, check their documentation or contact their support team for assistance.

## How to Create a CNAME Record for Your Domain {#how-to-create-a-cname-record-for-your-domain}

### What Is a CNAME Record?

A **CNAME (Canonical Name Record)** maps one domain name to another domain name.
It acts as an **alias**, allowing several domains or subdomains to point to the same hostname.

**Example:**

```
mqtt.mycompany.com → broker.mycompany.net
```

### When to Use a CNAME Record

Use a **CNAME record** when:

* You want multiple domains (e.g., `mqtt.mycompany.com`, `iot.mycompany.com`) to resolve to the same host.
* Your server’s IP may change, but the target domain remains constant.
* You want to simplify DNS management by maintaining only one A record (on the primary domain).

### How to Create a CNAME Record

Each DNS provider has its own interface for adding CNAME records.
Below are direct links to their setup guides:

* [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values.html){:target="_blank"}
* [GoDaddy](https://www.godaddy.com/help/add-a-cname-record-19236){:target="_blank"}
* [Cloudflare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59){:target="_blank"}
* [ClouDNS](https://www.cloudns.net/wiki/article/13/){:target="_blank"}
* [Google Cloud DNS](https://cloud.google.com/dns/docs/records){:target="_blank"}
* [Name.com](https://www.name.com/support/articles/115004895548-adding-a-cname-record){:target="_blank"}
* [easyDNS](https://kb.easydns.com/knowledge/how-to-make-a-dns-entry/){:target="_blank"}
* [DNSimple](https://support.dnsimple.com/articles/manage-cname-record/#adding-a-cname-record){:target="_blank"}
* [DNSMadeEasy](https://support.dnsmadeeasy.com/hc/en-us/articles/34327195668507-CNAME-Record){:target="_blank"}
* [No-IP.com](https://www.noip.com/support/knowledgebase/how-to-configure-your-no-ip-hostname/){:target="_blank"}
* [Infoblox NIOS](https://docs.infoblox.com/display/BloxOneDDI/Creating+a+CNAME+Record){:target="_blank"}
* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain){:target="_blank"}

If your provider is not listed, check their documentation or contact their support team for assistance.

## Troubleshooting

If your domain does not resolve or TBMQ is not accessible, verify the DNS configuration.

### Check DNS Record

Use the [Google Admin Toolbox DIG](https://toolbox.googleapps.com/apps/dig/){:target="_blank"}
or run the following command on Linux:

```bash
dig your-domain.com any
```
{: .copy-code}

Replace `your-domain.com` with your actual domain name.
Example:

```bash
dig mqtt.mycompany.com any
```

### Review the Output

If no `ANSWER SECTION` appears, the record was not added correctly.
For example, this output shows **no record found**:

```bash
;; ANSWER SECTION:
mqtt.mycompany.com. 3600 IN HINFO "RFC8482" ""
```

A correct record should look like this:

```bash
;; ANSWER SECTION:
mqtt.mycompany.com. 3600 IN CNAME broker.mycompany.net.
```

or, if using an A record:

```bash
;; ANSWER SECTION:
mqtt.mycompany.com. 3600 IN A 203.0.113.45
```

### Contact Support

If the configuration appears correct but the issue persists, please [contact us](https://thingsboard.io/docs/pe/mqtt-broker/help/){:target="_blank"} for further assistance.
