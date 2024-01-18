We assume you have already chosen your subscription plan or decided to purchase a perpetual license.
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license.
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Create docker secret with your license key:

```text
export TB_LICENSE_KEY=PUT_YOUR_LICENSE_KEY_HERE 
kubectl create -n thingsboard secret generic tb-license --from-literal=license-key=$TB_LICENSE_KEY
```
{: .copy-code}

{% capture tb_license_key_warn %}
Don't forget to replace *PUT_YOUR_LICENSE_KEY_HERE* with the value of your license key.
{% endcapture %}
{% include templates/info-banner.md content=tb_license_key_warn %}