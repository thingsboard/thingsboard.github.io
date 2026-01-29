Use the instructions listed below to download, install, setup and run mosquitto_pub in Windows:

1. Download and Install Eclipse Mosquitto. Visit [Mosquitto's official download page](https://mosquitto.org/download/){:target="_blank"} and choose the appropriate Windows installer (32-bit or 64-bit depending on your system).
2. Once downloaded, run the installer and follow the instructions. This will install Mosquitto on your Windows machine. By default, Mosquitto is installed in 'C:\Program Files\mosquitto';
3. Update the System&#39;s "Path" variable. The executables 'mosquitto_pub.exe' and 'mosquitto_sub.exe' are located in the directory where you installed the Mosquitto. You need to add this directory to your system's "Path" environment variable so that Windows can find these executables regardless of the current directory.

To add the Mosquitto directory to the "Path" variable, follow these steps: 

{% assign mosquitto-windows = '
    ===
        image: /images/helloworld/getting-started-pe/mosquitto-windows-1.png,
        title: Press the Win + X, then select "System". Then click on the "System" page;
    ===
        image: /images/helloworld/getting-started-pe/mosquitto-windows-2.png,
        title: Navigate to the "About" section, then click "Advanced system settings";
    ===
        image: /images/helloworld/getting-started-pe/mosquitto-windows-3.png,
        title: In the "System Properties" pop-up window, click "Environment Variables" button on the "Advanced" tab;
    ===
        image: /images/helloworld/getting-started-pe/mosquitto-windows-4.png,
        title: In the "Environment Variables" pop-up window, select the "Path", then click on the "Edit" button;
    === 
        image: /images/helloworld/getting-started-pe/mosquitto-windows-5.png,
        title: In the "Edit environment variable" pop-up window click on the "New" button and add the path to the directory containing &#39;mosquitto_pub.exe&#39; and &#39;mosquitto_sub.exe&#39; (&#39;C:\Program Files\mosquitto&#39; by default). Click "OK" button;
    === 
        image: /images/helloworld/getting-started-pe/mosquitto-windows-6.png,
        title: Click "OK" button to save changes in the environment variables;
    ===
        image: /images/helloworld/getting-started-pe/mosquitto-windows-7.png,
        title: Finally, click "OK" button to apply all changes in the system properties.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=mosquitto-windows %}
