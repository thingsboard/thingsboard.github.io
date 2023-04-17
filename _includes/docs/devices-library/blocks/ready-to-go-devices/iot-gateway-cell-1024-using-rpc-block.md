{% assign sendRpcCommand = '
    ===
        image: /images/devices-library/ready-to-go-devices/iot-gateway-cell-1024/exxn-rpc-button.png,
        title: It is possible to send commands to the device to execute certain tasks. The parameters of the method must be in JSON format.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=sendRpcCommand %} 
To read more about the RPC commands - you can read [this article](/docs/{{page.docsPrefix}}user-guide/rpc/#server-side-rpc).  
All the commands that can be sent to the device are explained in the EXXN IoT Gateway manual.