---
layout: docwithnav-pe-edge
assignees:
title: Upgrade instructions
description: ThingsBoard Edge upgrade instructions

---

<ul id="markdown-toc">
    <li>
        <a href="#prepare-for-upgrading" id="markdown-toc-prepare-for-upgrading">Prepare for upgrading ThingsBoard Edge</a>
        <ul>
            <li>
                <a href="#prepare-ubuntucentos" id="markdown-toc-prepare-ubuntucentos">Ubuntu/CentOS</a>
            </li>
            <li>
                <a href="#prepare-docker-linux-mac" id="markdown-toc-prepare-docker-linux-mac">Docker (Linux or Mac OS)</a>
            </li>
            <li>
                <a href="#prepare-windows" id="markdown-toc-prepare-windows">Windows</a>
            </li>                        
        </ul>
    </li>
    <li>
        <a href="#upgrading-to-334" id="markdown-toc-upgrading-to-334">Upgrading to 3.3.4EDGEPE</a>
        <ul>
            <li>
                <a href="#ubuntucentos-334" id="markdown-toc-ubuntucentos-334">Ubuntu/CentOS</a>
            </li>
            <li>
                <a href="#docker-linux-mac-334" id="markdown-toc-docker-linux-mac-334">Docker (Linux or Mac OS)</a>
            </li>            
            <li>
                <a href="#windows-334" id="markdown-toc-windows-334">Windows</a>
            </li> 
        </ul>
    </li>
    <li>
        <a href="#upgrading-to-333" id="markdown-toc-upgrading-to-333">Upgrading to 3.3.3EDGE</a>
        <ul>
            <li>
                <a href="#ubuntucentos-333" id="markdown-toc-ubuntucentos-333">Ubuntu/CentOS</a>
            </li>
            <li>
                <a href="#docker-linux-mac-333" id="markdown-toc-docker-linux-mac-333">Docker (Linux or Mac OS)</a>
            </li>            
            <li>
                <a href="#windows-333" id="markdown-toc-windows-333">Windows</a>
            </li> 
        </ul>
    </li>
</ul>

{% capture update_server_first %}
**Please update ThingsBoard server to the latest version before updating Edge services**.
{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}

## Prepare for upgrading ThingsBoard Edge {#prepare-for-upgrading}

### Ubuntu/CentOS {#prepare-ubuntucentos}

Stop ThingsBoard Edge service:

```bash
sudo systemctl stop tb-edge
```
{: .copy-code}

#### Backup Database

Make a backup of the database before upgrading.  

***Make sure you have enough space to place a backup of the database***  

Check database size

```bash
sudo -u postgres psql -c "SELECT pg_size_pretty( pg_database_size('tb-edge') );"
```
{: .copy-code}

Check free space

```bash
df -h /
```
{: .copy-code}

If there is enough free space - make a backup.

```bash
sudo -Hiu postgres pg_dump tb-edge > tb-edge.sql.bak
```
{: .copy-code}

Check backup file created successfully.

### Docker (Linux or Mac OS) {#prepare-docker-linux-mac}

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to stop and remove currently running TB Edge container:
```
docker-compose stop
docker-compose rm mytbedge
```
{: .copy-code}

#### Backup Database

Make a copy of the database folder before upgrading:
```
sudo cp -r ~/.mytb-edge-data/db ~/.mytb-edge-db-BACKUP
```
{: .copy-code}

### Windows {#prepare-windows}

Stop ThingsBoard Edge service:

```text
net stop tb-edge
```
{: .copy-code}

#### Backup Database

Launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create backup of database **tb_edge** using 'Backup Dialog' functionality of "pgAdmin".

## Upgrading to 3.3.4EDGEPE {#upgrading-to-334}

### Ubuntu/CentOS {#ubuntucentos-334}

**NOTE**: These steps are applicable for ThingsBoard Edge 3.3.3EDGE version.

#### ThingsBoard Edge package download

{% capture tabspec %}tb-edge-pe-download-3-3-4
tb-edge-pe-download-3-3-4-ubuntu,Ubuntu,shell,resources/3.3.4edge/tb-edge-ubuntu-download.sh,/docs/user-guide/install/pe/edge/resources/3.3.4edge/tb-edge-ubuntu-download.sh
tb-edge-pe-download-3-3-4-centos,CentOS,shell,resources/3.3.4edge/tb-edge-centos-download.sh,/docs/user-guide/install/pe/edge/resources/3.3.4edge/tb-edge-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard Edge service upgrade

* Stop ThingsBoard Edge service if it is running.

```bash
sudo service tb-edge stop
```
{: .copy-code}

{% capture tabspec %}tb-edge-pe-installation-3-3-4
tb-edge-pe-installation-3-3-4-ubuntu,Ubuntu,shell,resources/3.3.4edge/tb-edge-ubuntu-installation.sh,/docs/user-guide/install/pe/edge/resources/3.3.4edge/tb-edge-ubuntu-installation.sh
tb-edge-pe-installation-3-3-4-centos,CentOS,shell,resources/3.3.4edge/tb-edge-centos-installation.sh,/docs/user-guide/install/pe/edge/resources/3.3.4edge/tb-edge-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer may ask you to merge your tb-edge configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/tb-edge/bin/install/upgrade.sh --fromVersion=3.3.3
```
{: .copy-code}

#### Start the service

```bash
sudo service tb-edge start
```
{: .copy-code}

### Docker (Linux or Mac OS) {#docker-linux-mac-334}

**NOTE**: These steps are applicable for ThingsBoard Edge 3.3.3EDGE version.

Execute the following command to pull **3.3.4EDGEPE** image:
```
docker pull thingsboard/tb-edge:3.3.4EDGEPE
```
{: .copy-code}

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to stop and remove currently running TB Edge container (if it's still running):
```
docker-compose stop
docker-compose rm mytbedge
```
{: .copy-code}

Create docker compose file for ThingsBoard Edge upgrade process:

```text
nano docker-compose-upgrade.yml
```
{: .copy-code}

Add the following lines to the yml file:

```yml
version: '2.2'
services:
  mytbedge:
    restart: on-failure
    image: "thingsboard/tb-edge:3.3.4EDGEPE"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
    volumes:
      - ~/.mytb-edge-data:/data
      - ~/.mytb-edge-logs:/var/log/tb-edge
    entrypoint: upgrade-tb-edge.sh
  postgres:
    restart: always
    image: "postgres:12"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - ~/.mytb-edge-data/db:/var/lib/postgresql/data
```
{: .copy-code}

Execute the following command to start upgrade process:
```
docker-compose -f docker-compose-upgrade.yml up
```
{: .copy-code}

Once upgrade process successfully completed, exit from the docker-compose shell by this combination:
```
Ctrl + C
```

Execute the following command to stop TB Edge upgrade container:
```
docker-compose -f docker-compose-upgrade.yml stop
```
{: .copy-code}

Modify 'main' docker compose (`docker-compose.yml`) file for ThingsBoard Edge and update version of the image:

```text
nano docker-compose.yml
```
{: .copy-code}

```yml
version: '2.2'
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge:3.3.4EDGEPE"
...
```

Make sure your image is the set to **3.3.4EDGEPE**.

Execute the following command to up this docker compose directly:
```
docker-compose up
```
{: .copy-code}


### Windows {#windows-334}

**NOTE**: These steps are applicable for ThingsBoard Edge 3.3.3EDGE version.

#### ThingsBoard Edge package download

Download ThingsBoard Edge package for Windows: [tb-edge-windows-3.3.4pe.zip](https://dist.thingsboard.io/tb-edge-windows-3.3.4pe.zip).

#### ThingsBoard Edge service upgrade

* Stop ThingsBoard Edge service if it is running:

```text
net stop tb-edge
```
{: .copy-code}

* Make a backup of previous ThingsBoard Edge configuration located in *\<ThingsBoard Edge install dir\>\conf* (for example: *C:\tb-edge\conf*).

* Extract ThingsBoard Edge package.

* Compare and merge your old ThingsBoard Edge configuration files (from the backup you made in the previous step) with new ones.

* Finally, run **upgrade.bat** script to upgrade ThingsBoard Edge to the new version.

**NOTE** Scripts listed below should be executed using Administrator Role.

Execute regular upgrade script:

```text
C:\tb-edge>upgrade.bat --fromVersion=3.3.3
```

#### Start the service

```text
net start tb-edge
```
{: .copy-code}

## Upgrading to 3.3.3EDGE {#upgrading-to-333}

### Ubuntu/CentOS {#ubuntucentos-333}

**NOTE**: These steps are applicable for ThingsBoard Edge 3.3.1EDGE version.

#### ThingsBoard Edge package download

{% capture tabspec %}tb-edge-pe-download-3-3-3
tb-edge-pe-download-3-3-3-ubuntu,Ubuntu,shell,resources/3.3.3edge/tb-edge-ubuntu-download.sh,/docs/user-guide/install/pe/edge/resources/3.3.3edge/tb-edge-ubuntu-download.sh
tb-edge-pe-download-3-3-3-centos,CentOS,shell,resources/3.3.3edge/tb-edge-centos-download.sh,/docs/user-guide/install/pe/edge/resources/3.3.3edge/tb-edge-centos-download.sh{% endcapture %}
{% include tabs.html %}

#### ThingsBoard Edge service upgrade

* Stop ThingsBoard Edge service if it is running.

```bash
sudo service tb-edge stop
```
{: .copy-code}

{% capture tabspec %}tb-edge-pe-installation-3-3-3
tb-edge-pe-installation-3-3-3-ubuntu,Ubuntu,shell,resources/3.3.3edge/tb-edge-ubuntu-installation.sh,/docs/user-guide/install/pe/edge/resources/3.3.3edge/tb-edge-ubuntu-installation.sh
tb-edge-pe-installation-3-3-3-centos,CentOS,shell,resources/3.3.3edge/tb-edge-centos-installation.sh,/docs/user-guide/install/pe/edge/resources/3.3.3edge/tb-edge-centos-installation.sh{% endcapture %}
{% include tabs.html %}

**NOTE:** Package installer may ask you to merge your tb-edge configuration. It is preferred to use **merge option** to make sure that all your previous parameters will not be overwritten.

Execute regular upgrade script:

```bash
sudo /usr/share/tb-edge/bin/install/upgrade.sh --fromVersion=3.3.0
```
{: .copy-code}

#### Start the service

```bash
sudo service tb-edge start
```
{: .copy-code}

### Docker (Linux or Mac OS) {#docker-linux-mac-333}

**NOTE**: These steps are applicable for ThingsBoard Edge 3.3.1EDGE version.

Execute the following command to pull **3.3.3EDGE** image:
```
docker pull thingsboard/tb-edge:3.3.3EDGE
```
{: .copy-code}

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to stop and remove currently running TB Edge container (if it's still running):
```
docker-compose stop
docker-compose rm mytbedge
```
{: .copy-code}

Create docker compose file for ThingsBoard Edge upgrade process:

```text
nano docker-compose-upgrade.yml
```
{: .copy-code}

Add the following lines to the yml file:

```yml
version: '2.2'
services:
  mytbedge:
    restart: on-failure
    image: "thingsboard/tb-edge:3.3.3EDGE"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/tb-edge
    volumes:
      - ~/.mytb-edge-data:/data
      - ~/.mytb-edge-logs:/var/log/tb-edge
    entrypoint: upgrade-tb-edge.sh
  postgres:
    restart: always
    image: "postgres:12"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: tb-edge
      POSTGRES_PASSWORD: postgres
    volumes:
      - ~/.mytb-edge-data/db:/var/lib/postgresql/data
```
{: .copy-code}

Execute the following command to start upgrade process:
```
docker-compose -f docker-compose-upgrade.yml up
```
{: .copy-code}

Once upgrade process successfully completed, exit from the docker-compose shell by this combination:
```
Ctrl + C
```

Execute the following command to stop TB Edge upgrade container:
```
docker-compose -f docker-compose-upgrade.yml stop
```
{: .copy-code}

Modify 'main' docker compose (`docker-compose.yml`) file for ThingsBoard Edge and update version of the image:

```text
nano docker-compose.yml
```
{: .copy-code}

```yml
version: '2.2'
services:
  mytbedge:
    restart: always
    image: "thingsboard/tb-edge:3.3.3EDGE"
...
```

Make sure your image is the set to **3.3.3EDGE**.

Execute the following command to up this docker compose directly:
```
docker-compose up
```
{: .copy-code}


### Windows {#windows-333}

**NOTE**: These steps are applicable for ThingsBoard Edge 3.3.1EDGE version.

#### ThingsBoard Edge package download

Download ThingsBoard Edge package for Windows: [tb-edge-windows-3.3.3.zip](https://dist.thingsboard.io/tb-edge-windows-3.3.3.zip).

#### ThingsBoard Edge service upgrade

* Stop ThingsBoard Edge service if it is running:

```text
net stop tb-edge
```
{: .copy-code}

* Make a backup of previous ThingsBoard Edge configuration located in *\<ThingsBoard Edge install dir\>\conf* (for example: *C:\tb-edge\conf*).

* Extract ThingsBoard Edge package. 

* Compare and merge your old ThingsBoard Edge configuration files (from the backup you made in the previous step) with new ones.

* Finally, run **upgrade.bat** script to upgrade ThingsBoard Edge to the new version.

**NOTE** Scripts listed below should be executed using Administrator Role.

Execute regular upgrade script:

```text
C:\tb-edge>upgrade.bat --fromVersion=3.3.0
```

#### Start the service

```text
net start tb-edge
```
{: .copy-code}