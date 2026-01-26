
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
{:.copy-code}

## Python REST Client examples

### Basic usage
You can find the example script **[here](https://github.com/thingsboard/python_tb_rest_client/blob/master/examples/example_application.py)**.

The example listened below shows basic usage of REST client, namely how to perform a login, create a new Asset and Device instances,
and how to establish relationships with them.

```python

import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
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
    with RestClientCE(base_url=url) as rest_client:
        try:
            # Auth with credentials
            rest_client.login(username=username, password=password)

            # Creating an Asset
            default_asset_profile_id = rest_client.get_default_asset_profile_info().id
            asset = Asset(name="Building 1", asset_profile_id=default_asset_profile_id)
            asset = rest_client.save_asset(asset)

            logging.info("Asset was created:\n%r\n", asset)

            # Creating a Device
            # Also, you can use default Device Profile:
            # default_device_profile_id = rest_client.get_default_device_profile_info().id
            device_profile = DeviceProfile(name="Thermometer",
                                           profile_data=DeviceProfileData(configuration={"type": "DEFAULT"},
                                                                          transport_configuration={"type": "DEFAULT"}))
            device_profile = rest_client.save_device_profile(device_profile)
            device = Device(name="Thermometer 1", device_profile_id=device_profile.id)
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

### API key authentication (from ThingsBoard 4.3+)

The following code sample demonstrates how to use API key authentication with ThingsBoard REST API.
Make sure you have created an API key for your user before running the example. Also, ensure to replace 
`"YOUR_API_KEY_HERE"` with your actual API key value and the `url` variable with your ThingsBoard instance URL.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
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
    with RestClientCE(base_url=url) as rest_client:
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

### Managing device

The following code sample demonstrates basic concepts of device management API (add/get/delete device, get/save device attributes).

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
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
    with RestClientCE(base_url=url) as rest_client:
        try:
            rest_client.login(username=username, password=password)
            # creating a Device
            default_device_profile_id = rest_client.get_default_device_profile_info().id
            device = Device(name="Thermometer 1",
                            device_profile_id=default_device_profile_id)
            device = rest_client.save_device(device)

            logging.info(" Device was created:\n%r\n", device)

            # find device by device id
            found_device = rest_client.get_device_by_id(DeviceId(device.id, 'DEVICE'))

            # save device shared attributes
            rest_client.save_device_attributes(DeviceId(device.id, 'DEVICE'), 'SERVER_SCOPE',
                                                     {'targetTemperature': 22.4})

            # Get device shared attributes
            res = rest_client.get_attributes_by_scope(EntityId(device.id, 'DEVICE'), 'SERVER_SCOPE',
                                                      'targetTemperature')
            logging.info("Found device attributes: \n%r", res)

            # delete the device
            rest_client.delete_device(DeviceId(device.id, 'DEVICE'))
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()

```

### Fetch tenant devices

The following code sample shows how to fetch tenant devices via page link.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
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
    with RestClientCE(base_url=url) as rest_client:
        try:
            rest_client.login(username=username, password=password)
            res = rest_client.get_tenant_device_infos(page_size=10, page=0)

            logging.info("Device info:\n%r", res)
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()
```

### Fetch tenant dashboards

The following code sample shows how to fetch tenant dashboards via page link.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
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
    with RestClientCE(base_url=url) as rest_client:
        try:
            rest_client.login(username=username, password=password)
            user = rest_client.get_user()
            devices = rest_client.get_customer_device_infos(customer_id=CustomerId(user.id.id, 'CUSTOMER'), page_size=10,
                                                            page=0)
            logging.info("Devices: \n%r", devices)
        except ApiException as e:
            logging.exception(e)


if __name__ == '__main__':
    main()

```

### Count entities using Entity Data Query API

The following code sample shows how to use Entity Data Query API to count the total number of devices.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
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


# Creating the REST client object with context manager to get auto token refresh
with RestClientCE(base_url=url) as rest_client:
    try:
        rest_client.login(username=username, password=password)
        # Create entity filter to get all devices
        entity_filter = EntityFilter()

        # Create entity count query with provided filter
        devices_query = EntityCountQuery(entity_filter)

        # Execute entity count query and get total devices count
        devices_count = rest_client.count_entities_by_query(devices_query)
        logging.info("Total devices: \n%r", devices_count)
    except ApiException as e:
        logging.exception(e)
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

*You always can get the full list of arguments by calling script with no arguments or with* **-h** *argument.*

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

*You always can get the full list of arguments by calling script with no arguments or with* **-h** *argument.*

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

The latest source code you can find [here](https://github.com/thingsboard/thingsboard-python-rest-client/blob/master/examples/load_all_entities_to_vcs_ce.py).


To save entities from command line we will use the following arguments and data:  

| Command line argument | Description                                                                       |  
|-|-|  
| -H | **ThingsBoard host (Default: localhost)**                                                            |    
| -p | **ThingsBoard port (Default: 80)**                                                                   |  
| -U | **ThingsBoard user (email for login)**                                                               |  
| -P | **ThingsBoard user password**                                                                        |  
| -b | **Default branch (Default: main)**                                                                   |  
| -N | **Version name (If not provided will be generated 5 random letters and numbers and used as a name)** |
| --save_attributes  | **Optional, do we need to save attributes for target entities (Default: True)**      |
| --save_credentials | **Optional, do we need to save credentials for target entities (Default: True)**     |
| --save_relations   | **Optional, do we need to save relations for target entities (Default: True)**       |
| --sync_strategy    | **Optional, Sync strategy for entities can be OVERWRITE and MERGE (Default: MERGE)** |

*You always can get the full list of arguments by calling script with no arguments or with* **-h** *argument.*

Let's download the script:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard-python-rest-client/master/examples/load_all_entities_to_vcs_ce.py
```

Now we can run our script and save our entities to the repository on version control system, we will publish to default branch with default settings to show minimal required configuration:

```bash
python3 load_all_entities_to_vcs_ce.py -H YOUR_THINGSBOARD_HOST -p YOUR_THINGSBOARD_PORT -U YOUR_THINGSBOARD_USER_EMAIL -P YOUR_THINGSBOARD_USER_PASSWORD
```

In output message you will receive information about how many entities were saved.

### Loading all entities from version control system

You can use the following script, based on [tb-rest-client](#python-rest-client) to save current state of your entities to your repository on version control system.

The latest source code you can find [here](https://github.com/thingsboard/thingsboard-python-rest-client/blob/master/examples/load_all_entities_from_vcs_ce.py).


To load entities from command line we will use the following arguments and data:  

| Command line argument | Description                                                                                                                       |  
|-|-|  
| -H | **ThingsBoard host (Default: localhost)**                                                                                                            |    
| -p | **ThingsBoard port (Default: 80)**                                                                                                                   |  
| -U | **ThingsBoard user (email for login)**                                                                                                               |  
| -P | **ThingsBoard user password**                                                                                                                        |  
| -b | **Default branch (Default: main)**                                                                                                                   |  
| -N | **Version name (You can provide a part of the version name and script will propose you all find versions that include provided name)**               |
| --load_attributes  | **Optional, do we need to load attributes for target entities (Default: True)**                                                      |
| --load_credentials | **Optional, do we need to load credentials for target entities (Default: True)**                                                     |
| --load_relations   | **Optional, do we need to load relations for target entities (Default: True)**                                                       |
| --sync_strategy    | **Optional, Sync strategy for existing entities can be OVERWRITE and MERGE (Default: MERGE)**                                        |

*You always can get the full list of arguments by calling script with no arguments or with* **-h** *argument.*

Let's download the script:
```bash
wget https://raw.githubusercontent.com/thingsboard/thingsboard-python-rest-client/master/examples/load_all_entities_from_vcs_ce.py
```

Now we can run our script and restore entities version and state from the repository on version control system:

```bash
python3 load_all_entities_from_vcs_ce.py -H YOUR_THINGSBOARD_HOST -p YOUR_THINGSBOARD_PORT -U YOUR_THINGSBOARD_USER_EMAIL -P YOUR_THINGSBOARD_USER_PASSWORD -N YOUR_VERSION_NAME 
```

In output you will receive information about how many entities were loaded.


**The Professional Edition Python REST Client example you can find [here](/docs/pe/reference/python-rest-client/#professional-edition-python-rest-client-example).**
