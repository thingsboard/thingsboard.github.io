- Click on **General configuration** button on the right panel;
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-5-ce.png)
- Copy auto-generated access token (we will use it later).
  <br><br>
  ![](/images/gateway/dashboard/gateway-getting-started-6-ce.png)

## Local gateway basic preparation

For now, we are ready to make some minimal configuration at the local gateway configuration side:
- Open your **tb_gateway.json** file;
- Replace default **host**, **port** and **accessToken** to new one;
- Run gateway using your option.

If you did everything right, you will see the following logs:

**image**

{% capture info %}
As an alternative, you can use **Gateway Configuration Wizard**. More information about it, you can [read here]().
{% endcapture %}
{% include templates/info-banner.md content=info %}