To launch the gateway on Linux, use the following steps:

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

![](/images/gateway/dashboard/launch-gateway-docker.png)

Let's see in more details on docker launch command and explain it:
```bash
docker run -it -v ~/.tb-gateway/logs:/thingsboard_gateway/logs -v ~/.tb-gateway/extensions:/thingsboard_gateway/extensions -v ~/.tb-gateway/config:/thingsboard_gateway/config --name My_Gateway --network=host --add-host=host.docker.internal:host-gateway -e host=demo.thingsboar.io -e accessToken=ACCESS_TOKEN --restart always thingsboard/tb-gateway
```
{: .copy-code}

Where:
- `docker run` - run this container;
- `-it` - attach a terminal session with current Gateway process output;
- `-v ~/.tb-gateway/config:/thingsboard_gateway/config` - mounts the host's dir `~/.tb-gateway/config` to Gateway config  directory;
- `-v ~/.tb-gateway/extensions:/thingsboard_gateway/extensions` - mounts the host's dir `~/.tb-gateway/extensions` to Gateway extensions  directory;
- `-v ~/.tb-gateway/logs:/thingsboard_gateway/logs` - mounts the host's dir `~/.tb-gateway/logs` to Gateway logs  directory;
- `--name My_Gateway` - assigns a name to the container, in our case, "**My_Gateway**";
- `--network=host` - this option makes the container share the network namespace with the host. It allows the container to use the host's network stack;
- `--add-host=host.docker.internal:host-gateway` - adds a custom host-to-IP mapping. In this case, it maps the hostname host.docker.internal to the IP address of the Docker host's gateway. This is commonly used for accessing services on the host from within the container;
- `-e host=demo.thingsboar.io` - sets an environment variable **host** with the value **demo.thingsboar.io** within the container;
- `-e accessToken=ACCESS_TOKEN` - sets an environment variable **accessToken** with the provided value within the container;
- `--restart always` - configure the container to restart automatically if it exits unexpectedly;
- `thingsboard/tb-gateway` - docker image.
