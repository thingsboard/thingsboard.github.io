Execute the following command in terminal to install the CoAP and checksum libs:

```bash
pip3 install asyncio aiocoap mmh3 --user
```
{: .copy-code}

Enter the path to the client's folder in terminal and execute the following command for ThingsBoard
to get firmware example script:

```bash
python3 coap_firmware_client.py 
```
{: .copy-code}

Download CoAP client example: [**coap_firmware_client.py**](/docs/user-guide/resources/firmware/coap_firmware_client.py)

After getting the following messages
- `Please write your ThingsBoard host or leave it blank to use default (localhost):` - use your localhost, or the platform address;
- `Please write your ThingsBoard port or leave it blank to use default (5683):` - you can just continue by pressing "enter", or 
input your port number;
- `Please write accessToken for device:` - copy device accessToken from ThingsBoard and paste it into the terminal;
- `Please write firmware chunk size in bytes or leave it blank to get all firmware by request:` - if you leave it blank, the file will be downloaded at once
in the full size. If you want to download in parts, enter the size of the chunk.

{% include images-gallery.html imageCollection="fw-coap-updated" %}

Firmware of the device is updated. To see its status, you should go to the firmware dashboard as it shows in the following paragraph.

To find out about the firmware update, you need to [make a request and subscribe to attributes](/docs/{{docsPrefix}}reference/coap-api/#firmware-api).

