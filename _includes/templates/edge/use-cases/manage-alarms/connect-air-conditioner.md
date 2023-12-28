To subscribe to RPC commands from edge for the **Air Conditioner** device you need to get the **Air Conditioner** device credentials first.
ThingsBoard supports different device credentials. We recommend to use default auto-generated credentials which is access token for this guide.

Please open ThingsBoard **Edge** UI using the URL: **EDGE_URL**.

{% include images-gallery.html imageCollection="copyAccessTokenAirConditioner" showListImageTitles="true" %}

Now you are ready to subscribe to RPC commands for Air Conditioner device.
We will use simple commands to subscribe to RPC commands over MQTT protocol in this example.

Please download following scripts to your local folder:
- [**mqtt-js.sh**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/mqtt-js.sh)
- [**cooler.js**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/cooler.js)

{% include templates/edge/node-js-installed-banner.md %}

Before running the scripts, please modify **mqtt-js.sh** accordingly:

- Replace **YOUR_ACCESS_TOKEN** with **Air Conditioner** device access token copied from the steps above. 

- Replace **YOUR_TB_EDGE_HOST** with your ThingsBoard Edge host. For example, **localhost**.

- Replace **YOUR_TB_EDGE_MQTT_PORT** with your ThingsBoard Edge MQTT port. For example, **11883** or **1883**.

Open the terminal, go to the folder that contains **mqtt-js.sh** and **cooler.js** scripts and make sure it is executable:
```shell
 chmod +x *.sh
```

Install **mqtt** node module to be able to use mqtt package in the **cooler.js** script:
```shell
npm install mqtt --save
```

Then run the following command:
```shell
bash mqtt-js.sh
```

You should see the following screen with your host and device token:

```shell
pc@pc-XPS-15-9550:~/alarm-tutorial$ bash mqtt-js.sh
Connecting to: localhost:1883 using access token: sFqoF18PTyViO8L0qo7c
Cooler is connected!
```

{% capture new-tab %}
Please open a new terminal tab to push temperature telemetry to device and leave this running in the background until end of the guide.{% endcapture %}
{% include templates/info-banner.md content=new-tab %}