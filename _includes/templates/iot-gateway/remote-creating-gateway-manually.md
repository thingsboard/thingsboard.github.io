{% assign remoteCreateGatewayManually = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-5-ce.png,
        title: Click on **General configuration** button on the right panel.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-6-ce.png,
        title: Copy auto-generated access token (we will use it later).
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=remoteCreateGatewayManually %} 

## Local gateway basic preparation

For now, we are ready to make some minimal configuration at the local gateway configuration side:
- Open your **tb_gateway.json** file;
- Replace default **host**, **port** and **accessToken** to new one;
- Run gateway using your option.

{% capture info %}
As an alternative, you can use **Gateway Configuration Wizard**. More information about it, you can [read here]().
{% endcapture %}
{% include templates/info-banner.md content=info %}