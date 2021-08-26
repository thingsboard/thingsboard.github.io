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
with RestClientPE(base_url=url) as rest_client:
    try:
        # Auth with credentials
        rest_client.login(username=username, password=password)

        # Getting current user
        current_user = rest_client.get_user()

        # Creating Dashboard Group on the Tenant Level
        shared_dashboards_group = EntityGroup(name="Shared Dashboards", type="DASHBOARD")
        shared_dashboards_group = rest_client.save_entity_group(shared_dashboards_group)

        # Loading Dashboard from file
        dashboard_json = None
        with open("watermeters.json", "r") as dashboard_file:
            dashboard_json = load(dashboard_file)
        dashboard = Dashboard(title=dashboard_json["title"], configuration=dashboard_json["configuration"])
        dashboard = rest_client.save_dashboard(dashboard)

        # Adding Dashboard to the Shared Dashboards Group
        rest_client.add_entities_to_entity_group(shared_dashboards_group.id, [dashboard.id.id])

        # Creating Customer 1
        customer1 = Customer(title="Customer 1")
        customer1 = rest_client.save_customer(customer1)

        # Creating Device
        device = Device(name="WaterMeter1", type="waterMeter")
        device = rest_client.save_device(device)

        # Fetching automatically created "Customer Administrators" Group.
        customer1_administrators = rest_client.get_entity_group_info_by_owner_and_name_and_type(customer1.id, "USER", "Customer Administrators")

        # Creating Read-Only Role
        read_only_role = Role(name="Read-Only", permissions=['READ', 'READ_ATTRIBUTES', 'READ_TELEMETRY', 'READ_CREDENTIALS'], type="GROUP")
        read_only_role = rest_client.save_role(read_only_role)

        # Assigning Shared Dashboards to the Customer 1 Administrators
        tenant_id = current_user.tenant_id
        group_permission = GroupPermission(role_id=read_only_role.id,
                                           name="Read Only Permission",
                                           is_public=False,
                                           user_group_id=customer1_administrators.id,
                                           tenant_id=tenant_id,
                                           entity_group_id=shared_dashboards_group.id,
                                           entity_group_type=shared_dashboards_group.type)
        group_permission = rest_client.save_group_permission(group_permission)

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
        rest_client.activate_user(user.id, user_password)

        rest_client.add_entities_to_entity_group(customer1_administrators.id, [user.id.id])

    except ApiException as e:
        logging.exception(e)

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


# Creating the REST client object with context manager to get auto token refresh
with RestClientPE(base_url=url) as rest_client:
    try:
        allowed_user_perms = rest_client.get_allowed_permissions()
        logging.info("Allowed user permissions: \n%r", allowed_user_perms)
    except ApiException as e:
        logging.exception(e)
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


# Creating the REST client object with context manager to get auto token refresh
with RestClientPE(base_url=url) as rest_client:
    try:
        dashboards = rest_client.get_user_dashboards(page_size=str(10), page=str(0))
        logging.info("Dashboards: \n%r", dashboards)
    except ApiException as e:
        logging.exception(e)
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

# Creating the REST client object with context manager to get auto token refresh
with RestClientPE(base_url=url) as rest_client:
    try:
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
                                  default_converter_id=ConverterId('CONVERTER', '504702d0-fe72-11eb-ab24-1f8899a6f9b3'),
                                  allow_create_devices_or_assets=True, enabled=True, remote=False, debug_mode=False,
                                  secret='your_secret_token')
        integration = rest_client.save_integration_post(integration)
        logging.info("Saved integration: \n%r", integration)
    except ApiException as e:
        logging.exception(e)

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


# Creating the REST client object with context manager to get auto token refresh
with RestClientPE(base_url=url) as rest_client:
    try:
        # creating a Device
        device = Device(name="Thermometer 1", type="thermometer")
        device = rest_client.save_device(device)

        logging.info(" Device was created:\n%r\n", device)

        # find device by device id
        found_device = rest_client.get_device_by_id(DeviceId('DEVICE', device.id))

        # save device shared attributes
        res = rest_client.save_device_attributes("{'targetTemperature': 22.4}", DeviceId('DEVICE', device.id),
                                                 'SERVER_SCOPE')

        logging.info("Save attributes result: \n%r", res)

        # Get device shared attributes
        res = rest_client.get_attributes_by_scope('DEVICE', DeviceId('DEVICE', device.id), 'SERVER_SCOPE')
        logging.info("Found device attributes: \n%r", res)

        # delete the device
        rest_client.delete_device(DeviceId('DEVICE', device.id))
    except ApiException as e:
        logging.exception(e)
```
