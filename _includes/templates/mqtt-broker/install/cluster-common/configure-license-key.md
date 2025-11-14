{% if docsPrefix == "pe/" %}
## Get the license key

Before proceeding, make sure you’ve selected your subscription plan or chosen to purchase a perpetual license.
If you haven’t done this yet, please visit the [Pricing page](/pricing/?section=tbmq-options){: target="_blank"} to compare available options
and obtain your license key.

> **Note:** Throughout this guide, we’ll refer to your license key as **YOUR_LICENSE_KEY_HERE**.

## Configure the license key

Create a k8s secret with your license key:

```bash
export TBMQ_LICENSE_KEY=YOUR_LICENSE_KEY_HERE 
kubectl create -n thingsboard-mqtt-broker secret generic tbmq-license --from-literal=license-key=$TBMQ_LICENSE_KEY
```
{: .copy-code}

{% capture replace_license_key %}
Don’t forget to replace **YOUR_LICENSE_KEY_HERE** with the value of your license key.
{% endcapture %}
{% include templates/info-banner.md content=replace_license_key %}

{% endif %}
