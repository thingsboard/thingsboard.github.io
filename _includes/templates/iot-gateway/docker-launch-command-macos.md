To launch the gateway on MacOS, use the following steps:

{% assign remoteCreateGatewayDocker = '
    ===
        image: /images/gateway/dashboard/gateway-getting-started-3-ce.png,
        title: On the gateway dashboard, click on **"Launch command"** button in the top right corner.
    ===
        image: /images/gateway/dashboard/gateway-getting-started-4-ce.png,
        title: Copy auto-generated command and execute it in your terminal.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=remoteCreateGatewayDocker %}

After running gateway docker image, you can see the following logs in your terminal:

![](/images/gateway/dashboard/launch-gateway-docker-macos.png)

Let's see in more details on docker launch command and explain it:
```bash
docker run -it -v ~/.tb-gateway/logs:/thingsboard_gateway/logs -v ~/.tb-gateway/extensions:/thingsboard_gateway/extensions -v ~/.tb-gateway/config:/thingsboard_gateway/config --name My_Gateway -p 6400-6420:6400-6420 -e host=demo.thingsboar.io -e accessToken=ACCESS_TOKEN --restart always thingsboard/tb-gateway
```
{: .copy-code}

Where:
- `docker run` - run this container;
- `-it` - attach a terminal session with current Gateway process output;
- `-v ~/.tb-gateway/config:/thingsboard_gateway/config` - mounts the host's dir `~/.tb-gateway/config` to Gateway config  directory;
- `-v ~/.tb-gateway/extensions:/thingsboard_gateway/extensions` - mounts the host's dir `~/.tb-gateway/extensions` to Gateway extensions  directory;
- `-v ~/.tb-gateway/logs:/thingsboard_gateway/logs` - mounts the host's dir `~/.tb-gateway/logs` to Gateway logs  directory;
- `--name My_Gateway` - assigns a name to the container, in our case, "**My_Gateway**";
- `-p 6400-6420:6400-6420` - maps the ports from the host machine to the container. In our example, ports 6400 to 6420 on the host are mapped to the same range of ports in the container;
- `-e host=demo.thingsboar.io` - sets an environment variable **host** with the value **demo.thingsboar.io** within the container;
- `-e accessToken=ACCESS_TOKEN` - sets an environment variable **accessToken** with the provided value within the container;
- `--restart always` - configure the container to restart automatically if it exits unexpectedly;
- `thingsboard/tb-gateway` - docker image.
