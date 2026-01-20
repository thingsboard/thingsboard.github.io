* TOC
{:toc}

## Python REST Client

The ThingsBoard Python REST API Client helps you interact with ThingsBoard REST API from your Python script.
With Python Rest Client you can programmatically create assets, devices, customers, users and other entities and their relations in ThingsBoard.

Source code of the Python REST API Client you can find [here](https://github.com/thingsboard/python_tb_rest_client).

In order to install the ThingsBoard Python REST client, you should use the following command:

```bash
pip3 install tb-rest-client
```

## Professional Edition Python REST Client Examples

### Basic usage

You can find the example of the script **[here](https://github.com/thingsboard/python_tb_rest_client/blob/master/examples/example_application_2.py)**.
Also, you will have to download the dashboard JSON file ("*watermeters.json*") for this example and put it in the folder with a script.
JSON file is **[here](https://github.com/thingsboard/python_tb_rest_client/blob/master/examples/watermeters.json)**.

The example listening below shows more advanced usage of REST client, namely: creating shared dashboard group,
loading dashboard from the config JSON file and adding this dashboard to the group that was created previously, also
creating a customer with some permissions and making administration actions on it.

```python
import logging
from json import load
# Importing models and REST client class from Professional Edition version
from tb_rest_client.rest_client_pe import *
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')


# ThingsBoard REST API URL
url = "http://localhost:8080"

# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


# Creating the REST client object with context manager to get auto token refresh
def main():
    with RestClientPE(base_url=url) as rest_client:
        try:
            # Auth with credentials
            rest_client.login(username=username, password=password)

            # Getting current user
            current_user = rest_client.get_user()

            # Creating Dashboard Group on the Tenant Level
            shared_dashboards_group = EntityGroup(name="Shared Dashboards", type="DASHBOARD")
            shared_dashboards_group = rest_client.save_entity_group(shared_dashboards_group)
            logging.info('Dashboard group created:\n%r\n', shared_dashboards_group)

            # Loading Dashboard from file
            dashboard_json = None
            with open("watermeters.json", "r") as dashboard_file:
                dashboard_json = load(dashboard_file)
            dashboard = Dashboard(title=dashboard_json["title"], configuration=dashboard_json["configuration"])
            dashboard = rest_client.save_dashboard(dashboard)
            logging.info('Dashboard created:\n%r\n', dashboard)

            # Adding Dashboard to the Shared Dashboards Group
            dashboard = list(filter(lambda x: x.name == dashboard.name,
                                             rest_client.get_user_dashboards(10, 0).data))[0]
            rest_client.add_entities_to_entity_group(shared_dashboards_group.id, [dashboard.id.id])

            # Creating Customer 1
            customer1 = Customer(title="Customer 11")
            customer1 = rest_client.save_customer(body=customer1)

            # Creating Device
            default_device_profile_id = rest_client.get_default_device_profile_info().id
            device = Device(name="WaterMeter 1", device_profile_id=default_device_profile_id)
            device = rest_client.save_device(device)
            logging.info('Device created:\n%r\n', device)

            # Fetching automatically created "Customer Administrators" Group.
            customer1_administrators = rest_client.get_entity_group_by_owner_and_name_and_type(customer1.id, "USER", "Customer Administrators")

            # Creating Read-Only Role
            read_only_role = Role(name="Read-Only", permissions=['READ', 'READ_ATTRIBUTES', 'READ_TELEMETRY', 'READ_CREDENTIALS'], type="GROUP")
            read_only_role = rest_client.save_role(read_only_role)
            logging.info('Role created:\n%r\n', read_only_role)

            # Assigning Shared Dashboards to the Customer 1 Administrators
            tenant_id = current_user.tenant_id
            group_permission = GroupPermission(role_id=read_only_role.id,
                                               name="Read Only Permission",
                                               user_group_id=customer1_administrators.id,
                                               tenant_id=tenant_id,
                                               entity_group_id=shared_dashboards_group.id,
                                               entity_group_type=shared_dashboards_group.type)
            group_permission = rest_client.save_group_permission(group_permission)
            logging.info('Group permission created:\n%r\n', group_permission)

            # Creating User for Customer 1 with default dashboard from Tenant "Shared Dashboards" group.
            user_email = "user@thingsboard.org"
            user_password = "secret"
            additional_info = {
                "defaultDashboardId": dashboard.id.id,
                "defaultDashboardFullscreen": False
            }
            user = User(authority="CUSTOMER_USER",
                        customer_id=customer1.id,
                        email=user_email,
                        additional_info=additional_info)
            user = rest_client.save_user(user, send_activation_mail=False)
            rest_client.activate_user(body=ActivateUserRequest(user.id, user_password), send_activation_mail=False)

            rest_client.add_entities_to_entity_group(customer1_administrators.id, [user.id.id])
            logging.info('User created:\n%r\n', user)
        except ApiException as e:
            logging.exception(e)

if __name__ == '__main__':
    main()
```

### API key authentication (from ThingsBoard 4.3+)

The following code sample demonstrates how to use API key authentication with ThingsBoard REST API.
Make sure you have created an API key for your user before running the example. Also, ensure to replace 
`"YOUR_API_KEY_HERE"` with your actual API key value and the `url` variable with your ThingsBoard instance URL.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_pe import *
from tb_rest_client.rest import ApiException

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://127.0.0.1:8080"

# Your API Key
api_key = "YOUR_API_KEY_HERE"


def main():
    # Creating the REST client object with context manager
    with RestClientPE(base_url=url) as rest_client:
        try:
            # Auth with API Key
            rest_client.api_key_login(api_key)

            # Creating a Device
            # Also, you can use default Device Profile:
            # default_device_profile_id = rest_client.get_default_device_profile_info().id
            device_profile = DeviceProfile(name="Thermometer",
                                           type="DEFAULT",
                                           transport_type="DEFAULT",
                                           profile_data=DeviceProfileData(configuration={"type": "DEFAULT"},
                                                                          transport_configuration={"type": "DEFAULT"}))
            device_profile = rest_client.save_device_profile(device_profile)
            device = Device(name="Thermometer 1", label="Thermometer 1",
                            device_profile_id=device_profile.id)
            device = rest_client.save_device(device)

            logging.info(" Device was created:\n%r\n", device)
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()

```

### Get user permissions

The following sample code shows how to get allowed permissions of current logged in user and then check sample permission.

```python
import logging
# Importing models and REST client class from Professional Edition version
from tb_rest_client.rest_client_pe import *
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')


# ThingsBoard REST API URL
url = "http://localhost:8080"

# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


def main():
    # Creating the REST client object with context manager to get auto token refresh
    with RestClientPE(base_url=url) as rest_client:
        try:
            # Auth with credentials
            rest_client.login(username=username, password=password)

            allowed_user_perms = rest_client.get_allowed_permissions()
            logging.info("Allowed user permissions: \n%r", allowed_user_perms)
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()
```

### Fetch user dashboards

The following sample code shows how to fetch user dashboards via page link.

```python
import logging
from json import load
# Importing models and REST client class from Professional Edition version
from tb_rest_client.rest_client_pe import *
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')


# ThingsBoard REST API URL
url = "http://localhost:8080"

# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


def main():
    # Creating the REST client object with context manager to get auto token refresh
    with RestClientPE(base_url=url) as rest_client:
        try:
            # Auth with credentials
            rest_client.login(username=username, password=password)

            dashboards = rest_client.get_user_dashboards(page_size=10, page=0)
            logging.info("Dashboards: \n%r", dashboards)
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()
```

### Creating integration

The following sample code shows how to create HTTP integration.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_pe import *
from tb_rest_client.rest import ApiException

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "https://thingsboard.cloud"

# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


def main():
    # Creating the REST client object with context manager to get auto token refresh
    with RestClientPE(base_url=url) as rest_client:
        try:
            # Auth with credentials
            rest_client.login(username=username, password=password)

            # creating uplink converter
            converter = Converter(name='HTTP converter', type='UPLINK')
            converter = rest_client.save_converter(converter)
            logging.info("Created converter: \n%r", converter)

            # creating integration
            integration = Integration(name='HTTP Integration', type='HTTP',
                                      routing_key='c5d29c90-75d3-6ae6-606a-589a28803e89',
                                      configuration=str({
                                          "configuration": {
                                              "appId": "",
                                              "asId": "",
                                              "asIdNew": "",
                                              "asKey": "",
                                              "baseUrl": "https://thingsboard.cloud",
                                              "clientIdNew": "",
                                              "clientSecret": "",
                                              "createLoriotOutput": False,
                                              "credentials": {
                                                  "email": "",
                                                  "password": "",
                                                  "token": "",
                                                  "type": "basic"
                                              },
                                              "downlinkUrl": "https://api.thingpark.com/thingpark/lrc/rest/downlink",
                                              "enableSecurity": False,
                                              "enableSecurityNew": False,
                                              "headersFilter": {},
                                              "httpEndpoint": "https://thingsboard.cloud/api/v1/integrations/http/c5d29c90-75d3-6ae6-606a-589a28803e89",
                                              "loriotDownlinkUrl": "https://eu1.loriot.io/1/rest",
                                              "maxTimeDiffInSeconds": 60,
                                              "metadata": {},
                                              "replaceNoContentToOk": "",
                                              "sendDownlink": False,
                                              "server": "eu1",
                                              "token": ""
                                          }
                                      }),
                                      default_converter_id=ConverterId('504702d0-fe72-11eb-ab24-1f8899a6f9b3',
                                                                       'CONVERTER'),
                                      allow_create_devices_or_assets=True, enabled=True, remote=False, debug_mode=False,
                                      secret='your_secret_token')
            integration = rest_client.save_integration_post(integration)
            logging.info("Saved integration: \n%r", integration)
        except ApiException as e:
            logging.exception(e)
            

if __name__ == '__main__':
    main()

```

### Manage device

The following sample code demonstrates basic concepts of device management API (add/get/delete device, get/save device attributes).

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_pe import *
# Importing the API exception
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://localhost:8080"
# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


def main():
    # Creating the REST client object with context manager to get auto token refresh
    with RestClientPE(base_url=url) as rest_client:
        try:
            # Auth with credentials
            rest_client.login(username=username, password=password)

            # Creating an Asset
            default_asset_profile_id = rest_client.get_default_asset_profile_info().id
            asset = Asset(name="Building 1",
                          asset_profile_id=default_asset_profile_id)
            asset = rest_client.save_asset(asset)

            logging.info("Asset was created:\n%r\n", asset)

            # Creating a Device
            # Also, you can use default Device Profile:
            # default_device_profile_id = rest_client.get_default_device_profile_info().id
            device_profile = DeviceProfile(name="Thermometer",
                                           profile_data=DeviceProfileData(configuration={"type": "DEFAULT"},
                                                                          transport_configuration={"type": "DEFAULT"}))
            device_profile = rest_client.save_device_profile(device_profile)
            device = Device(name="Thermometer 1",
                            device_profile_id=device_profile.id)
            device = rest_client.save_device(device)

            logging.info(" Device was created:\n%r\n", device)

            # Creating relations from device to asset
            relation = EntityRelation(_from=asset.id, to=device.id, type="Contains")
            rest_client.save_relation(relation)

            logging.info(" Relation was created:\n%r\n", relation)
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()

```


### Configure version control feature from console

This feature is available in ThingsBoard 3.4+. 
We have designed script, based on tb-rest-client library to make example how to use ability to configure ThingsBoard from your code.  
The latest source code of the script is available [here](https://github.com/thingsboard/thingsboard-python-rest-client/blob/master/examples/configure_vcs_access.py).
In this example we configure [version control feature](/docs/user-guide/version-control) on ThingsBoard.  

There are 2 possible ways to configure version control system (VCS):   
1. Using access token/password of your VCS account.  
2. Using private key.  

#### Configuring version control system using access token or password  

To configure this feature we will need the command line arguments and data:  

| Command line argument | Description                                                                       |  
|-|-|  
| -H | **ThingsBoard host (Default: localhost)**                                                            |    
| -p | **ThingsBoard port (Default: 80)**                                                                   |  
| -U | **ThingsBoard user (email for login)**                                                               |  
| -P | **ThingsBoard user password**                                                                        |
| -r | **Repository uri, link to your repository**                                                          |
| -b | **Default branch (Default: main)**                                                                   |  
| -gu | **VCS username** (This parameter named GITHUB_USERNAME, but it can work with any VCS)               |  
| -gp | **VCS access token / password** (This parameter named GITHUB_PASSWORD, but it can work with any VCS)|  

*You always can get the full list of arguments by calling script with* **-h** *argument.*

To configure the version control feature we should have installed [tb-rest-client](#python-rest-client) python package and download the script:

```bash
wget https://github.com/thingsboard/thingsboard-python-rest-client/blob/master/examples/configure_vcs_access.py
```
{:.copy-code}

Now we can run the script and configure version control feature (Do not forget to put your values).  

```bash
python3 configure_vcs_access.py -H YOUR_THINGSBOARD_HOST -p YOUR_THINGSBOARD_PORT -U YOUR_THINGSBOARD_USER_EMAIL -P YOUR_THINGSBOARD_USER_PASSWORD -r YOUR_REPOSITORY_URL -b DEFAULT_BRANCH -gu YOUR_VCS_USERNAME -gp YOUR_VCS_ACCESSTOKEN_OR_PASSWORD
```
{:.copy-code}

#### Configuring version control system using private key  

To configure this feature we will need next command line arguments and data:  

| Command line argument | Description                                                                       |  
|-|-|  
| -H | **ThingsBoard host (Default: localhost)**                                                            |    
| -p | **ThingsBoard port (Default: 80)**                                                                   |  
| -U | **ThingsBoard user (email for login)**                                                               |  
| -P | **ThingsBoard user password**                                                                        |
| -r | **Repository uri, link to your repository**                                                          |  
| -b | **Default branch (Default: main)**                                                                   |  
| -gu | **VCS username** (This parameter named GITHUB_USERNAME, but it can work with any VCS)               |  
| -pk | **Path to private key**                                                                             |  
| -pkp | **Password for private key (If it was set)**                                                       |  

*You always can get the full list of arguments by calling script with* **-h** *argument.*

To configure the version control feature we should have installed [tb-rest-client](#python-rest-client) python package and download the script:

```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard-python-rest-client/master/examples/configure_vcs_access.py
```
{:.copy-code}

Now we can run the script and configure version control feature (Do not forget to put your values).  

```bash
python3 configure_vcs_access.py -H YOUR_THINGSBOARD_HOST -p YOUR_THINGSBOARD_PORT -U YOUR_THINGSBOARD_USER_EMAIL -P YOUR_THINGSBOARD_USER_PASSWORD -r YOUR_REPOSITORY_URL -b DEFAULT_BRACH -gu YOUR_VCS_USERNAME -pk PATH_TO_YOUR_PRIVATE_KEY -pkp YOUR_PRIVATE_KEY_PASSWORD
```
{:.copy-code}

### Saving all entities to version control system

You can use the following script, based on [tb-rest-client](#python-rest-client) to save current state of your entities to your repository on version control system.

The latest source code you can find [here](https://github.com/thingsboard/thingsboard-python-rest-client/blob/master/examples/load_all_entities_to_vcs_pe.py).


To save entities from command line we will use the following arguments and data:  

| Command line argument | Description                                                                       |  
|-|-|  
| -H | **ThingsBoard host (Default: localhost)**                                                                        |    
| -p | **ThingsBoard port (Default: 80)**                                                                               |  
| -U | **ThingsBoard user (email for login)**                                                                           |  
| -P | **ThingsBoard user password**                                                                                    |  
| -b | **Default branch (Default: main)**                                                                               |  
| -N | **Version name (If not provided will be generated 5 random letters and numbers and used as a name)**             |
| --save_attributes     | **Optional, do we need to save attributes for target entities (Default: True)**               |
| --save_credentials    | **Optional, do we need to save credentials for target entities (Default: True)**              |
| --save_relations      | **Optional, do we need to save relations for target entities (Default: True)**                |
| --save_group_entities | **Optional, do we need to save entities group for target entities (Default: True)**           | 
| --save_permissions    | **Optional, do we need to save permissions for target entities (Default: True)**              |
| --sync_strategy       | **Optional, Sync strategy for saving entities can be OVERWRITE and MERGE (Default: MERGE)**   |

*You always can get the full list of arguments by calling script with* **-h** *argument.*

Let's download the script:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard-python-rest-client/master/examples/load_all_entities_to_vcs_pe.py
```

Now we can run our script and save our entities to the repository on version control system, we will publish to default branch with default settings to show minimal required configuration:

```bash
python3 load_all_entities_to_vcs_pe.py -H YOUR_THINGSBOARD_HOST -p YOUR_THINGSBOARD_PORT -U YOUR_THINGSBOARD_USER_EMAIL -P YOUR_THINGSBOARD_USER_PASSWORD
```

In output message you will receive information about how many entities were saved.

### Loading all entities from version control system

You can use the following script, based on [tb-rest-client](#python-rest-client) to save current state of your entities to your repository on version control system.

The latest source code you can find [here](https://github.com/thingsboard/thingsboard-python-rest-client/blob/master/examples/load_all_entities_from_vcs_pe.py).


To load entities from command line we will use the following arguments and data:  

| Command line argument | Description                                                                                                                       |  
|-|-|  
| -H | **ThingsBoard host (Default: localhost)**                                                                                                            |    
| -p | **ThingsBoard port (Default: 80)**                                                                                                                   |  
| -U | **ThingsBoard user (email for login)**                                                                                                               |  
| -P | **ThingsBoard user password**                                                                                                                        |  
| -b | **Default branch (Default: main)**                                                                                                                   |  
| -N | **Version name (You can provide a part of the version name and script will propose you all find versions that include provided name)**               |
| --find_existing_entity_by_name | **Optional, do we need to looking for existing entities by their names instead of using ids(Default: True)**             |
| --load_attributes  | **Optional, do we need to load attributes for target entities (Default: True)**                                                      |
| --load_credentials | **Optional, do we need to load credentials for target entities (Default: True)**                                                     |
| --load_relations   | **Optional, do we need to load relations for target entities (Default: True)**                                                       |
| --load_group_entities | **Optional, do we need to load entities group for target entities (Default: True)**                                               |
| --load_permissions | **Optional, do we need to load permissions for target entities (Default: True)**                                                     |
| --sync_strategy    | **Optional, Sync strategy for existing entities can be OVERWRITE and MERGE (Default: MERGE)**                                        |

*You always can get the full list of arguments by calling script with no arguments or with* **-h** *argument.*

Let's download the script:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard-python-rest-client/master/examples/load_all_entities_from_vcs_pe.py
```

Now we can run our script and restore entities version and state from the repository on version control system:

```bash
python3 load_all_entities_from_vcs_pe.py -H YOUR_THINGSBOARD_HOST -p YOUR_THINGSBOARD_PORT -U YOUR_THINGSBOARD_USER_EMAIL -P YOUR_THINGSBOARD_USER_PASSWORD -N YOUR_VERSION_NAME 
```

In output you will receive information about how many entities were loaded.
