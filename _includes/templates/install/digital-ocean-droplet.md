### Prerequisites

- Active [DigitalOcean](https://cloud.digitalocean.com/){:target="_blank"} account

### Step 1. Launch Ubuntu 18.04 on DigitalOcean

##### Step 1.1 Create DigitalOcean Droplet

- Login to your DigitalOcean account.
- Click the "Droplets" menu item and then the "Create Droplet" button (see image below).   

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/create-droplet.png)

##### Step 1.2 Select your plan

- Once "Create Droplets" page is loaded, select "Ubuntu 18.04 x64" as your image (see image below).
- Choose your plan. For beginners we would like to recommend 2CPUs and 4GB of RAM plan. 

  Note: Advanced ThingsBoard users may choose the plan that suites their workload best. 
    
![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/choose-plan.png)

##### Step 1.3 Choose Region

- Scroll down to select datacenter region from the available list (see image below).
- [Optional] Enable backups. Although this is optional we highly recommend to do this. 
- [Optional] Add block storage

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/choose-region.png)

##### Step 1.4 Authentication

- Use existing or create new SSH Key that will be used to connect to your instance. Make sure you have access to the SSH Key you have chosen. We will use this key later in the guide to connect to this instance. 
- Put a meaningful hostname
- Add "thingsboard" tag, just-in-case, we are not going to use it in this instruction.
- Finally, click the "Create Droplet" button.

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/create-final.png)

- Once droplet is created, copy the IP address of your droplet to a safe place. We will use it later in the guide. 

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/droplet-created.png)

### Step 2. Configure Firewall Rules

Now we need to configure Firewall rules to allow MQTT, CoAP and HTTP traffic. See images below:

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/create-firewall.png)

- Give your Firewall a meaningful name;
- Configure HTTP, HTTPS and three custom rules as set on the screen below. 

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/firewall-config.png)

- Leave outbound rules as-is;
- Select your droplet or tag to assign this firewall;
- Finally click "Create Firewall" button.

![image](https://img.thingsboard.io/user-guide/install/digital-ocean-pe/firewall-final.png)

### Step 3. Connect to your instance using SSH

Please use the [official guide](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/){:target="_blank"} 
and the SSH Key we have created during [Step 1.4](/docs/user-guide/install/pe/digital-ocean/#step-14-authentication).
